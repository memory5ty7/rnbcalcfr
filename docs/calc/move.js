"use strict";
exports.__esModule = true;

var util_1 = require("./util");
var SPECIAL = ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Psychic', 'Dark', 'Dragon'];
var Move = (function () {
    function Move(gen, name, options) {
        if (options === void 0) { options = {}; }
        var _a, _b;
        name = options.name || name;
        this.originalName = name;
        var data = (0, util_1.extend)(true, { name: name }, gen.moves.get((0, util_1.toID)(name)), options.overrides);
        this.hits = 1;
        if (options.useMax && data.maxMove) {
            var maxMoveName_1 = getMaxMoveName(data.type, options.species, !!(data.category === 'Status'), options.ability);
            var maxMove_1 = gen.moves.get((0, util_1.toID)(maxMoveName_1));
            var maxPower = function () {
                if (['Percussion G-Max', 'G-Max Fire Ball', 'Gâchette G-Max'].includes(maxMoveName_1)) {
                    return 160;
                }
                if (maxMove_1.basePower === 10 || maxMoveName_1 === 'Pyromax') {
                    return data.maxMove.basePower;
                }
                return maxMove_1.basePower;
            };
            data = (0, util_1.extend)(true, {}, maxMove_1, {
                name: maxMoveName_1,
                basePower: maxPower(),
                category: data.category
            });
        }
        if (options.useZ && ((_a = data.zMove) === null || _a === void 0 ? void 0 : _a.basePower)) {
            var zMoveName = getZMoveName(data.name, data.type, options.item);
            var zMove = gen.moves.get((0, util_1.toID)(zMoveName));
            data = (0, util_1.extend)(true, {}, zMove, {
                name: zMoveName,
                basePower: zMove.basePower === 1 ? data.zMove.basePower : zMove.basePower,
                category: data.category
            });
        }
        else {
            if (data.multihit) {
                if (typeof data.multihit === 'number') {
                    this.hits = data.multihit;
                }
                else if (options.hits) {
                    this.hits = options.hits;
                }
                else {
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
        var typelessDamage = (gen.num >= 2 && data.id === 'struggle') ||
            (gen.num <= 4 && ['futuresight', 'doomdesire'].includes(data.id));
        this.type = typelessDamage ? '???' : data.type;
        this.category = data.category ||
            (gen.num < 4 ? (SPECIAL.includes(data.type) ? 'Special' : 'Physical') : 'Status');
        var stat = this.category === 'Special' ? 'spa' : 'atk';
        if (((_b = data.self) === null || _b === void 0 ? void 0 : _b.boosts) && data.self.boosts[stat] && data.self.boosts[stat] < 0) {
            this.dropsStats = Math.abs(data.self.boosts[stat]);
        }
        this.timesUsed = (this.dropsStats && options.timesUsed) || 1;
        this.secondaries = data.secondaries;
        this.target = data.target || 'any';
        this.recoil = data.recoil;
        this.hasCrashDamage = !!data.hasCrashDamage;
        this.mindBlownRecoil = !!data.mindBlownRecoil;
        this.struggleRecoil = !!data.struggleRecoil;
        this.isCrit = !!options.isCrit || !!data.willCrit ||
            gen.num === 1 && ['crabhammer', 'razorleaf', 'slash', 'karate chop'].includes(data.id);
        this.drain = data.drain;
        this.flags = data.flags;
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
            if (['return', 'frustration', 'pikapapow', 'veeveevolley'].includes(data.id)) {
                this.bp = 102;
            }
        }
    }
    Move.prototype.named = function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        return names.includes(this.name);
    };
    Move.prototype.hasType = function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        return types.includes(this.type);
    };
    Move.prototype.clone = function () {
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
            overrides: this.overrides
        });
    };
    return Move;
}());
exports.Move = Move;
function getZMoveName(moveName, moveType, item) {
    item = item || '';
    if (moveName.includes('Puissance Cachée'))
        return 'Turbo-Charge Bulldozer';
    if (moveName === 'Vibrécaille' && item === 'Kommonium Z')
        return 'Dracacophonie Flamboyante';
    if (moveName === 'Dark Lariat' && item === 'Incinium Z')
        return 'Dark Body Press';
    if (moveName === 'Giga Impact' && item === 'Snorlium Z')
        return 'Gare au Ronflex';
    if (moveName === 'Rayon Spectral' && item === 'Lunalium Z')
        return 'Rayons Séléno-Explosifs';
    if (moveName === 'Photo-Geyser' && item === 'Ultranecrozium Z') {
        return 'Apocalypsis Luminis';
    }
    if (moveName === 'Câlinerie' && item === 'Mimikium Z')
        return 'Let\'s Snuggle Forever';
    if (moveName === 'Psyko' && item === 'Mewnium Z')
        return 'Supernova Originelle';
    if (moveName === 'Aria de l\'Écume' && item === 'Primarium Z')
        return 'Symphonie des Ondines';
    if (moveName === 'Clepto-Mânes' && item === 'Marshadium Z') {
        return 'Fauche-Âme des Sept Étoiles';
    }
    if (moveName === 'Tisse Ombre' && item === 'Decidium Z')
        return 'Fureur des Plumes Spectrales';
    if (moveName === 'Lame de Roc' && item === 'Lycanium Z')
        return 'Hurlement des Roches-Lames';
    if (moveName === 'Choc Météore' && item === 'Solganium Z')
        return 'Hélio-Choc Dévastateur';
    if (moveName === 'Électacle' && item === 'Pikanium Z')
        return 'Pikachute Foudroyante';
    if (moveName === 'Nature\'s Madness' && item === 'Tapunium Z')
        return 'Colère du Gardien d\'Alola';
    if (moveName === 'Tonnerre') {
        if (item === 'Aloraichium Z')
            return 'Électro-Surf Survolté';
        if (item === 'Pikashunium Z')
            return 'Giga-Tonnerre';
    }
    return ZMOVES_TYPING[moveType];
}
exports.getZMoveName = getZMoveName;
var ZMOVES_TYPING = {
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
    Water: 'Super Tourbillon Abyssal'
};
function getMaxMoveName(moveType, pokemonSpecies, isStatus, pokemonAbility) {
    if (isStatus)
        return 'Gardomax';
    if (pokemonAbility === 'Normalise')
        return 'Normalomax';
    if (moveType === 'Fire') {
        if (pokemonSpecies === 'Charizard-Gmax')
            return 'Téphra G-Max';
        if (pokemonSpecies === 'Centiskorch-Gmax')
            return 'Combustion G-Max';
        if (pokemonSpecies === 'Cinderace-Gmax')
            return 'G-Max Fire Ball';
    }
    if (moveType === 'Normal') {
        if (pokemonSpecies === 'Eevee-Gmax')
            return 'Câlin G-Max';
        if (pokemonSpecies === 'Meowth-Gmax')
            return 'Pactole G-Max';
        if (pokemonSpecies === 'Snorlax-Gmax')
            return 'Récolte G-Max';
        if (pokemonAbility === 'Peau Féérique')
            return 'Enchantomax';
        if (pokemonAbility === 'Peau Céleste')
            return 'Aéromax';
        if (pokemonAbility === 'Peau Gelée')
            return 'Cryomax';
        if (pokemonAbility === 'Peau Électrique')
            return 'Fulguromax';
    }
    if (moveType === 'Fairy') {
        if (pokemonSpecies === 'Alcremie-Gmax')
            return 'Cure G-Max';
        if (pokemonSpecies === 'Hatterene-Gmax')
            return 'Sentence G-Max';
    }
    if (moveType === 'Steel') {
        if (pokemonSpecies === 'Copperajah-Gmax')
            return 'Percée G-Max';
        if (pokemonSpecies === 'Melmetal-Gmax')
            return 'Fonte G-Max';
    }
    if (moveType === 'Electric') {
        if (pokemonSpecies === 'Pikachu-Gmax')
            return 'Foudre G-Max';
        if ((pokemonSpecies === null || pokemonSpecies === void 0 ? void 0 : pokemonSpecies.startsWith('Toxtricity')) &&
            (pokemonSpecies === null || pokemonSpecies === void 0 ? void 0 : pokemonSpecies.endsWith('Gmax')))
            return 'Choc G-Max';
    }
    if (moveType === 'Grass') {
        if (pokemonSpecies === 'Appletun-Gmax')
            return 'Nectar G-Max';
        if (pokemonSpecies === 'Flapple-Gmax')
            return 'Corrosion G-Max';
        if (pokemonSpecies === 'Rillaboom-Gmax')
            return 'Percussion G-Max';
        if (pokemonSpecies === 'Venusaur-Gmax')
            return 'Fouet G-Max';
    }
    if (moveType === 'Water') {
        if (pokemonSpecies === 'Blastoise-Gmax')
            return 'Canonnade G-Max';
        if (pokemonSpecies === 'Drednaw-Gmax')
            return 'Récif G-Max';
        if (pokemonSpecies === 'Inteleon-Gmax')
            return 'Gâchette G-Max';
        if (pokemonSpecies === 'Kingler-Gmax')
            return 'Bulles G-Max';
        if (pokemonSpecies === 'Urshifu-Rapid-Strike-Gmax')
            return 'Multicoup G-Max';
    }
    if (moveType === 'Dark') {
        if (pokemonSpecies === 'Grimmsnarl-Gmax')
            return 'Torpeur G-Max';
        if (pokemonSpecies === 'Urshifu-Gmax')
            return 'Coup Final G-Max';
    }
    if (moveType === 'Poison' && pokemonSpecies === 'Garbodor-Gmax')
        return 'Pestilence G-Max';
    if (moveType === 'Fighting' && pokemonSpecies === 'Machamp-Gmax')
        return 'Frappe G-Max';
    if (moveType === 'Ghost' && pokemonSpecies === 'Gengar-Gmax')
        return 'Hantise G-Max';
    if (moveType === 'Ice' && pokemonSpecies === 'Lapras-Gmax')
        return 'Résonance G-Max';
    if (moveType === 'Flying' && pokemonSpecies === 'Corviknight-Gmax')
        return 'Rafale G-Max';
    if (moveType === 'Dragon' && pokemonSpecies === 'Duraludon-Gmax')
        return 'Usure G-Max';
    if (moveType === 'Psychic' && pokemonSpecies === 'Orbeetle-Gmax')
        return 'Ondes G-Max';
    if (moveType === 'Rock' && pokemonSpecies === 'Coalossal-Gmax')
        return 'Fournaise G-Max';
    if (moveType === 'Ground' && pokemonSpecies === 'Sandaconda-Gmax')
        return 'Enlisement G-Max';
    if (moveType === 'Dark' && pokemonSpecies === 'Grimmsnarl-Gmax')
        return 'Torpeur G-Max';
    return 'Max ' + MAXMOVES_TYPING[moveType];
}
exports.getMaxMoveName = getMaxMoveName;
var MAXMOVES_TYPING = {
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
    Water: 'Geyser'
};
//# sourceMappingURL=move.js.map