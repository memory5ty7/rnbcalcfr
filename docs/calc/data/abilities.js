"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = [];
var GSC = [];
var ADV = [
    'Air Lock',
    'Piège Sable',
    'Synergie',
    'Pare-Balles',
    'Chlorophylle',
    'Corps Sain',
    'Ciel Gris',
    'Homochromie',
    'Œil Composé',
    'Joli Sourire',
    'Crachin',
    'Moiteur',
    'Sécheresse',
    'Matinal',
    'Pose Spore',
    'Corps Ardent',
    'Torche',
    'Météo',
    'Cran',
    'Coloforce',
    'Agitation',
    'Hyper Cutter',
    'Luminescence',
    'Vaccin',
    'Attention',
    'Insomnia',
    'Intimidation',
    'Regard Vif',
    'Lévitation',
    'Paratonnerre',
    'Échauffement',
    'Suintement',
    'Armumagma',
    'Magnépiège',
    'Écaille Spéciale',
    'Moins',
    'Médic Nature',
    'Benêt',
    'Engrais',
    'Tempo Perso',
    'Ramassage',
    'Plus',
    'Point Poison',
    'Pression',
    'Force Pure',
    'Cuvette',
    'Tête de Roc',
    'Peau Dure',
    'Fuite',
    'Sable Volant',
    'Voile Sable',
    'Sérénité',
    'Marque Ombre',
    'Mue',
    'Coque Armure',
    'Écran Poudre',
    'Anti-Bruit',
    'Turbo',
    'Statik',
    'Puanteur',
    'Glu',
    'Fermeté',
    'Ventouse',
    'Essaim',
    'Glissade',
    'Synchro',
    'Isograisse',
    'Torrent',
    'Calque',
    'Absentéisme',
    'Esprit Vital',
    'Absorbe-Volt',
    'Absorbe-Eau',
    'Ignifu-Voile',
    'Écran Fumée',
    'Garde Mystik',
];
var DPP = ADV.concat([
    'Adaptabilité',
    'Boom Final',
    'Colérique',
    'Anticipation',
    'Ramasse Ball',
    'Télécharge',
    'Peau Sèche',
    'Filtre',
    'Don Floral',
    'Prédiction',
    'Fouille',
    'Gloutonnerie',
    'Ignifugé',
    'Cherche Miel',
    'Hydratation',
    'Corps Gel',
    'Poing de Fer',
    'Maladresse',
    'Feuille Garde',
    'Garde Magik',
    'Brise Moule',
    'Motorisé',
    'Mountaineer',
    'Multi-Type',
    'Annule Garde',
    'Normalise',
    'Persistent',
    'Soin Poison',
    'Pied Véloce',
    'Rebound',
    'Téméraire',
    'Rivalité',
    'Querelleur',
    'Simple',
    'Multi-Coups',
    'Début Calme',
    'Sniper',
    'Rideau Neige',
    'Alerte Neige',
    'Force Soleil',
    'Solide Roc',
    'Frein',
    'Impassible',
    'Lavabo',
    'Chanceux',
    'Pied Confus',
    'Technicien',
    'Lentiteintée',
    'Inconscient',
    'Délestage',
]);
var BW = DPP.concat([
    'Analyste',
    'Brasier',
    'Contestation',
    'Corps Maudit',
    'Défaitiste',
    'Acharné',
    'Rage Brûlure',
    'Garde-Ami',
    'Récolte',
    'Cœur Soin',
    'Heavy Metal',
    'Illusion',
    'Imposteur',
    'Infiltration',
    'Épine de Fer',
    'Light Metal',
    'Cœur Noble',
    'Miroir Magik',
    'Lunatique',
    'Impudence',
    'Multiécaille',
    'Momie',
    'Envelocape',
    'Pickpocket',
    'Toxitouche',
    'Farceur',
    'Phobique',
    'Régé-Force',
    'Force Sable',
    'Baigne Sable',
    'Herbivore',
    'Sans Limite',
    'Télépathe',
    'Téra-Voltage',
    'Rage Poison',
    'Turbo Brasier',
    'Tension',
    'Victorieux',
    'Armurouillée',
    'Peau Miracle',
    'Mode Transe',
]);
var XY = BW.concat([
    'Peau Céleste',
    'Mauvais Rêve',
    'Aroma-Voile',
    'Cacophonie',
    'Bajoues',
    'Battant',
    'Aura Ténébreuse',
    'Souffle Delta',
    'Terre Finale',
    'Aura Féérique',
    'Flora-Voile',
    'Toison Épaisse',
    'Ailes Bourrasque',
    'Poisseux',
    'Toison Herbue',
    'Magicien',
    'Méga Blaster',
    'Amour Filial',
    'Peau Féérique',
    'Mer Primaire',
    'Protéen',
    'Peau Gelée',
    'Déclic Tactique',
    'Prognathe',
    'Gluco-Voile',
    'Symbiose',
    'Griffe Dure',
]);
var SM = XY.concat([
    'Armurbaston',
    'Perles du Fléau',
    'Folle Furie',
    'Cœur de Coq',
    'Hypersommeil',
    'Corrosion',
    'Danseuse',
    'Corps Coloré',
    'Fantômasque',
    'Créa-Élec',
    'Repli Tactique',
    'Boule de Poils',
    'Métallo-Garde',
    'Peau Électrique',
    'Créa-Herbe',
    'Expuls\'Organes',
    'Hydrata-Son',
    'Longue Portée',
    'Cruauté',
    'Créa-Brume',
    'Cérébro-Force',
    'Rassemblement',
    'Cercle d\'Énergie',
    'Prisme-Armure',
    'Créa-Psy',
    'Prestance Royale',
    'Système Alpha',
    'Receveur',
    'Banc',
    'Spectro-Bouclier',
    'Bouclier-Carcan',
    'Chasse-Neige',
    'Endurance',
    'Filature',
    'Expert Acier',
    'Animacœur',
    'Surf Caudal',
    'Mèche Rebelle',
    'Prioguérison',
    'Aquabulle',
    'Sable Humide',
    'Escampette',
]);
var SS = SM.concat([
    'Osmose Équine (Blizzeval)',
    'Osmose Équine (Spectreval)',
    'Batterie',
    'Blanche Ruade',
    'Effilochage',
    'Breuvage Suspect',
    'Égide Inflexible',
    'Dragon\'s Maw',
    'Entêtement',
    'Sombre Ruade',
    'Dégobage',
    'Déclic Fringale',
    'Tête de Gel',
    'Écailles Glacées',
    'Lame Indomptable',
    'Libéro',
    'Mimétisme',
    'Armure Miroir',
    'Gaz Inhibiteur',
    'Voile Pastel',
    'Corps Condamné',
    'Osmose',
    'Propulseur',
    'Punk Rock',
    'Tir Vif',
    'Mûrissement',
    'Expul\'Sable',
    'Brise-Barrière',
    'Nerfs d\'Acier',
    'Turbine',
    'Boost Acier',
    'Transistor',
    'Poing Invisible',
    'Âme Vagabonde',
]);
var SV = SS.concat([
    'Courroupace',
    'Armure Caudale',
    'Boost Chimère',
    'Commandant',
    'Collab',
    'Ruminant',
    'Absorbe-Terre',
    'Grecharge',
    'Corps en Or',
    'Chien de Garde',
    'Moteur à Hadrons',
    'Odeur Tenace',
    'Force Fongique',
    'Opportuniste',
    'Pouls Orichalque',
    'Paléosynthèse',
    'Sel Purificateur',
    'Charge Quantique',
    'Porte-Roche',
    'Semencier',
    'Incisif',
    'Général Suprême',
    'Épée du Fléau',
    'Bois du Fléau',
    'Thermodynamique',
    'Dépôt Toxique',
    'Urne du Fléau',
    'Bien Cuit',
    'Turbine Éolienne',
    'Aéroporté',
    'Supermutation',
]);
exports.ABILITIES = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Abilities = (function () {
    function Abilities(gen) {
        this.gen = gen;
    }
    Abilities.prototype.get = function (id) {
        return ABILITIES_BY_ID[this.gen][id];
    };
    Abilities.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = ABILITIES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Abilities;
}());
exports.Abilities = Abilities;
var Ability = (function () {
    function Ability(name) {
        this.kind = 'Ability';
        this.id = (0, util_1.toID)(name);
        this.name = name;
    }
    return Ability;
}());
var ABILITIES_BY_ID = [];
try {
    for (var ABILITIES_1 = __values(exports.ABILITIES), ABILITIES_1_1 = ABILITIES_1.next(); !ABILITIES_1_1.done; ABILITIES_1_1 = ABILITIES_1.next()) {
        var abilities = ABILITIES_1_1.value;
        var map = {};
        try {
            for (var abilities_1 = (e_2 = void 0, __values(abilities)), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                var ability = abilities_1_1.value;
                var a = new Ability(ability);
                map[a.id] = a;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (abilities_1_1 && !abilities_1_1.done && (_b = abilities_1["return"])) _b.call(abilities_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        ABILITIES_BY_ID.push(map);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ABILITIES_1_1 && !ABILITIES_1_1.done && (_a = ABILITIES_1["return"])) _a.call(ABILITIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=abilities.js.map