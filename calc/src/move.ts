import * as I from './data/interface';
import {State} from './state';
import {toID, extend} from './util';

const SPECIAL = ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Psychic', 'Dark', 'Dragon'];

export class Move implements State.Move {
  gen: I.Generation;
  name: I.MoveName;

  originalName: string;
  ability?: I.AbilityName;
  item?: I.ItemName;
  species?: I.SpeciesName;
  useZ?: boolean;
  useMax?: boolean;
  overrides?: Partial<I.Move>;

  hits: number;
  timesUsed?: number;
  timesUsedWithMetronome?: number;
  bp: number;
  type: I.TypeName;
  category: I.MoveCategory;
  flags: I.MoveFlags;
  secondaries: any;
  target: I.MoveTarget;
  recoil?: [number, number];
  hasCrashDamage: boolean;
  mindBlownRecoil: boolean;
  struggleRecoil: boolean;
  isCrit: boolean;
  drain?: [number, number];
  priority: number;
  dropsStats?: number;
  ignoreDefensive: boolean;
  overrideOffensiveStat?: I.StatIDExceptHP;
  overrideDefensiveStat?: I.StatIDExceptHP;
  overrideOffensivePokemon?: 'target' | 'source';
  overrideDefensivePokemon?: 'target' | 'source';
  breaksProtect: boolean;
  isZ: boolean;
  isMax: boolean;

  constructor(
    gen: I.Generation,
    name: string,
    options: Partial<State.Move> & {
      ability?: I.AbilityName;
      item?: I.ItemName;
      species?: I.SpeciesName;
    } = {}
  ) {
    name = options.name || name;
    this.originalName = name;
    let data: I.Move = extend(true, {name}, gen.moves.get(toID(name)), options.overrides);

    this.hits = 1;
    // If isZMove but there isn't a corresponding z-move, use the original move
    if (options.useMax && data.maxMove) {
      const maxMoveName: string = getMaxMoveName(
        data.type,
        options.species,
        !!(data.category === 'Status'),
        options.ability
      );
      const maxMove = gen.moves.get(toID(maxMoveName));
      const maxPower = () => {
        if (['G-Max Drum Solo', 'G-Max Fire Ball', 'G-Max Hydrosnipe'].includes(maxMoveName)) {
          return 160;
        }
        // TODO: checking basePower === 10 is fragile (what if the maxMove's basePower is
        // overridden?) and also fails for Max Flare, which is strangely 100 BP in the game data
        if (maxMove!.basePower === 10 || maxMoveName === 'Pyromax') {
          return data.maxMove!.basePower;
        }
        return maxMove!.basePower;
      };
      data = extend(true, {}, maxMove, {
        name: maxMoveName,
        basePower: maxPower(),
        category: data.category,
      });
    }
    if (options.useZ && data.zMove?.basePower) {
      const zMoveName: string = getZMoveName(data.name, data.type, options.item);
      const zMove = gen.moves.get(toID(zMoveName));
      data = extend(true, {}, zMove, {
        name: zMoveName,
        basePower: zMove!.basePower === 1 ? data.zMove.basePower : zMove!.basePower,
        category: data.category,
      });
    } else {
      if (data.multihit) {
        if (typeof data.multihit === 'number') {
          this.hits = data.multihit;
        } else if (options.hits) {
          this.hits = options.hits;
        } else {
          this.hits = (options.ability === 'Multi-Coups')
            ? data.multihit[1]
            : data.multihit[0] + 1;
        }
      }
      this.timesUsedWithMetronome = options.timesUsedWithMetronome;
    }
    this.gen = gen;
    this.name = data.name;
    this.ability = options.ability;
    this.item = options.item;
    this.useZ = options.useZ;
    this.useMax = options.useMax;
    this.overrides = options.overrides;
    this.species = options.species;

    this.bp = data.basePower;
    // These moves have a type, but the damage they deal is typeless so we override it
    const typelessDamage =
      (gen.num >= 2 && data.id === 'struggle') ||
      (gen.num <= 4 && ['futuresight', 'doomdesire'].includes(data.id));
    this.type = typelessDamage ? '???' : data.type;
    this.category = data.category ||
      (gen.num < 4 ? (SPECIAL.includes(data.type) ? 'Special' : 'Physical') : 'Status');

    const stat = this.category === 'Special' ? 'spa' : 'atk';
    if (data.self?.boosts && data.self.boosts[stat] && data.self.boosts[stat]! < 0) {
      this.dropsStats = Math.abs(data.self.boosts[stat]!);
    }
    this.timesUsed = (this.dropsStats && options.timesUsed) || 1;
    this.secondaries = data.secondaries;
    // For the purposes of the damage formula only 'allAdjacent' and 'allAdjacentFoes' matter, so we
    // simply default to 'any' for the others even though they may not actually be 'any'-target
    this.target = data.target || 'any';
    this.recoil = data.recoil;
    this.hasCrashDamage = !!data.hasCrashDamage;
    this.mindBlownRecoil = !!data.mindBlownRecoil;
    this.struggleRecoil = !!data.struggleRecoil;
    this.isCrit = !!options.isCrit || !!data.willCrit ||
      // These don't *always* crit (255/256 chance), but for the purposes of the calc they do
      gen.num === 1 && ['crabhammer', 'razorleaf', 'slash', 'karate chop'].includes(data.id);
    this.drain = data.drain;
    this.flags = data.flags;
    // The calc doesn't currently care about negative priority moves so we simply default to 0
    this.priority = data.priority || 0;

    this.ignoreDefensive = !!data.ignoreDefensive;
    this.overrideOffensiveStat = data.overrideOffensiveStat;
    this.overrideDefensiveStat = data.overrideDefensiveStat;
    this.overrideOffensivePokemon = data.overrideOffensivePokemon;
    this.overrideDefensivePokemon = data.overrideDefensivePokemon;
    this.breaksProtect = !!data.breaksProtect;
    this.isZ = !!data.isZ;
    this.isMax = !!data.isMax;

    if (!this.bp) {
      // Assume max happiness for these moves because the calc doesn't support happiness
      if (['return', 'frustration', 'pikapapow', 'veeveevolley'].includes(data.id)) {
        this.bp = 102;
      }
    }
  }

  named(...names: string[]) {
    return names.includes(this.name);
  }

  hasType(...types: Array<(I.TypeName | undefined)>) {
    return types.includes(this.type);
  }

  clone() {
    return new Move(this.gen, this.originalName, {
      ability: this.ability,
      item: this.item,
      species: this.species,
      useZ: this.useZ,
      useMax: this.useMax,
      isCrit: this.isCrit,
      hits: this.hits,
      timesUsed: this.timesUsed,
      timesUsedWithMetronome: this.timesUsedWithMetronome,
      overrides: this.overrides,
    });
  }
}

export function getZMoveName(moveName: string, moveType: I.TypeName, item?: string) {
  item = item || '';
  if (moveName.includes('Hidden Power')) return 'Breakneck Blitz';
  if (moveName === 'Clanging Scales' && item === 'Kommonium Z') return 'Clangorous Soulblaze';
  if (moveName === 'Darkest Lariat' && item === 'Incinium Z') return 'Malicious Moonsault';
  if (moveName === 'Giga Impact' && item === 'Snorlium Z') return 'Pulverizing Pancake';
  if (moveName === 'Moongeist Beam' && item === 'Lunalium Z') return 'Menacing Moonraze Maelstrom';
  if (moveName === 'Photon Geyser' && item === 'Ultranecrozium Z') {
    return 'Light That Burns the Sky';
  }
  if (moveName === 'Play Rough' && item === 'Mimikium Z') return 'Let\'s Snuggle Forever';
  if (moveName === 'Psyko' && item === 'Mewnium Z') return 'Supernova Originelle';
  if (moveName === 'Aria de l\'Écume' && item === 'Primarium Z') return 'Symphonie des Ondines';
  if (moveName === 'Clepto-Mânes' && item === 'Marshadium Z') {
    return 'Fauche-Âme des Sept Étoiles';
  }
  if (moveName === 'Tisse Ombre' && item === 'Decidium Z') return 'Fureur des Plumes Spectrales';
  if (moveName === 'Lame de Roc' && item === 'Lycanium Z') return 'Hurlement des Roches-Lames';
  if (moveName === 'Choc Météore' && item === 'Solganium Z') return 'Hélio-Choc Dévastateur';
  if (moveName === 'Électacle' && item === 'Pikanium Z') return 'Pikachute Foudroyante';
  if (moveName === 'Nature\'s Madness' && item === 'Tapunium Z') return 'Colère du Gardien d\'Alola';
  if (moveName === 'Tonnerre') {
    if (item === 'Aloraichium Z') return 'Électro-Surf Survolté';
    if (item === 'Pikashunium Z') return 'Giga-Tonnerre';
  }
  return ZMOVES_TYPING[moveType]!;
}

const ZMOVES_TYPING: {
  [type in I.TypeName]?: string;
} = {
  Bug: 'Cocon Fatal',
  Dark: 'Trou Noir des Ombres',
  Dragon: 'Chaos Draconique',
  Electric: 'Fulguro-Lance Gigavolt',
  Fairy: 'Impact Choupinova',
  Fighting: 'Combo Hyper-Furie',
  Fire: 'Pyro-Explosion Cataclysmique',
  Flying: 'Piqué Supersonique',
  Ghost: 'Appel des Ombres Éternelles',
  Grass: 'Pétalexplosion Éblouissante',
  Ground: 'Éruption Géo-Sismique',
  Ice: 'Laser Cryogénique',
  Normal: 'Turbo-Charge Bulldozer',
  Poison: 'Déluge Causti-Toxique',
  Psychic: 'Psycho-Pulvérisation EX',
  Rock: 'Apocalypse Gigalithique',
  Steel: 'Vrille Maximum',
  Water: 'Super Tourbillon Abyssal',
};

export function getMaxMoveName(
  moveType: I.TypeName,
  pokemonSpecies?: string,
  isStatus?: boolean,
  pokemonAbility?: string
) {
  if (isStatus) return 'Gardomax';
  if (pokemonAbility === 'Normalise') return 'Normalomax';
  if (moveType === 'Fire') {
    if (pokemonSpecies === 'Charizard-Gmax') return 'Téphra G-Max';
    if (pokemonSpecies === 'Centiskorch-Gmax') return 'Combustion G-Max';
    if (pokemonSpecies === 'Cinderace-Gmax') return 'G-Max Fire Ball';
  }
  if (moveType === 'Normal') {
    if (pokemonSpecies === 'Eevee-Gmax') return 'Câlin G-Max';
    if (pokemonSpecies === 'Meowth-Gmax') return 'Pactole G-Max';
    if (pokemonSpecies === 'Snorlax-Gmax') return 'Récolte G-Max';
    if (pokemonAbility === 'Peau Féérique') return 'Enchantomax';
    if (pokemonAbility === 'Peau Céleste') return 'Aéromax';
    if (pokemonAbility === 'Peau Gelée') return 'Cryomax';
    if (pokemonAbility === 'Peau Électrique') return 'Fulguromax';
  }
  if (moveType === 'Fairy') {
    if (pokemonSpecies === 'Alcremie-Gmax') return 'Cure G-Max';
    if (pokemonSpecies === 'Hatterene-Gmax') return 'Sentence G-Max';
  }
  if (moveType === 'Steel') {
    if (pokemonSpecies === 'Copperajah-Gmax') return 'Percée G-Max';
    if (pokemonSpecies === 'Melmetal-Gmax') return 'Fonte G-Max';
  }
  if (moveType === 'Electric') {
    if (pokemonSpecies === 'Pikachu-Gmax') return 'Foudre G-Max';
    if (pokemonSpecies?.startsWith('Toxtricity') &&
      pokemonSpecies?.endsWith('Gmax')) return 'Choc G-Max';
  }
  if (moveType === 'Grass') {
    if (pokemonSpecies === 'Appletun-Gmax') return 'Nectar G-Max';
    if (pokemonSpecies === 'Flapple-Gmax') return 'Corrosion G-Max';
    if (pokemonSpecies === 'Rillaboom-Gmax') return 'Percussion G-Max';
    if (pokemonSpecies === 'Venusaur-Gmax') return 'Fouet G-Max';
  }
  if (moveType === 'Water') {
    if (pokemonSpecies === 'Blastoise-Gmax') return 'Canonnade G-Max';
    if (pokemonSpecies === 'Drednaw-Gmax') return 'Récif G-Max';
    if (pokemonSpecies === 'Inteleon-Gmax') return 'Gâchette G-Max';
    if (pokemonSpecies === 'Kingler-Gmax') return 'Bulles G-Max';
    if (pokemonSpecies === 'Urshifu-Rapid-Strike-Gmax') return 'Multicoup G-Max';
  }
  if (moveType === 'Dark') {
    if (pokemonSpecies === 'Grimmsnarl-Gmax') return 'Torpeur G-Max';
    if (pokemonSpecies === 'Urshifu-Gmax') return 'Coup Final G-Max';
  }
  if (moveType === 'Poison' && pokemonSpecies === 'Garbodor-Gmax') return 'Pestilence G-Max';
  if (moveType === 'Fighting' && pokemonSpecies === 'Machamp-Gmax') return 'Frappe G-Max';
  if (moveType === 'Ghost' && pokemonSpecies === 'Gengar-Gmax') return 'Hantise G-Max';
  if (moveType === 'Ice' && pokemonSpecies === 'Lapras-Gmax') return 'Résonance G-Max';
  if (moveType === 'Flying' && pokemonSpecies === 'Corviknight-Gmax') return 'Rafale G-Max';
  if (moveType === 'Dragon' && pokemonSpecies === 'Duraludon-Gmax') return 'Usure G-Max';
  if (moveType === 'Psychic' && pokemonSpecies === 'Orbeetle-Gmax') return 'Ondes G-Max';
  if (moveType === 'Rock' && pokemonSpecies === 'Coalossal-Gmax') return 'Fournaise G-Max';
  if (moveType === 'Ground' && pokemonSpecies === 'Sandaconda-Gmax') return 'Enlisement G-Max';
  if (moveType === 'Dark' && pokemonSpecies === 'Grimmsnarl-Gmax') return 'Torpeur G-Max';
  return 'Max ' + MAXMOVES_TYPING[moveType];
}

const MAXMOVES_TYPING: {
  [type in I.TypeName]?: string;
} = {
  Bug: 'Flutterby',
  Dark: 'Darkness',
  Dragon: 'Wyrmwind',
  Electric: 'Lightning',
  Fairy: 'Starfall',
  Fighting: 'Knuckle',
  Fire: 'Flare',
  Flying: 'Airstream',
  Ghost: 'Phantasm',
  Grass: 'Overgrowth',
  Ground: 'Quake',
  Ice: 'Hailstorm',
  Normal: 'Strike',
  Poison: 'Ooze',
  Psychic: 'Mindstorm',
  Rock: 'Rockfall',
  Steel: 'Steelspike',
  Water: 'Geyser',
};
