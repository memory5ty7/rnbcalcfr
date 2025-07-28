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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    Abra: {
        types: ['Psychic'],
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        weightkg: 19.5,
        nfe: true
    },
    Ptéra: {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 105, df: 65, sp: 130, sl: 60 },
        weightkg: 59
    },
    Alakazam: {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 45, sp: 120, sl: 135 },
        weightkg: 48
    },
    Arbok: { types: ['Poison'], bs: { hp: 60, at: 85, df: 69, sp: 80, sl: 65 }, weightkg: 65 },
    Arcanin: {
        types: ['Fire'],
        bs: { hp: 90, at: 110, df: 80, sp: 95, sl: 80 },
        weightkg: 155
    },
    Artikodin: {
        types: ['Ice', 'Flying'],
        bs: { hp: 90, at: 85, df: 100, sp: 85, sl: 125 },
        weightkg: 55.4
    },
    Dardargnan: {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 80, df: 40, sp: 75, sl: 45 },
        weightkg: 29.5
    },
    Chétiflor: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 75, df: 35, sp: 40, sl: 70 },
        weightkg: 4,
        nfe: true
    },
    Tortank: {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sp: 78, sl: 85 },
        weightkg: 85.5
    },
    Bulbizarre: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 49, df: 49, sp: 45, sl: 65 },
        weightkg: 6.9,
        nfe: true
    },
    Papilusion: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sp: 70, sl: 80 },
        weightkg: 32
    },
    Chenipan: {
        types: ['Bug'],
        bs: { hp: 45, at: 30, df: 35, sp: 45, sl: 20 },
        weightkg: 2.9,
        nfe: true
    },
    Leveinard: {
        types: ['Normal'],
        bs: { hp: 250, at: 5, df: 5, sp: 50, sl: 105 },
        weightkg: 34.6
    },
    Dracaufeu: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sp: 100, sl: 85 },
        weightkg: 90.5
    },
    Salamèche: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sp: 65, sl: 50 },
        weightkg: 8.5,
        nfe: true
    },
    Reptincel: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sp: 80, sl: 65 },
        weightkg: 19,
        nfe: true
    },
    Mélodelfe: { types: ['Normal'], bs: { hp: 95, at: 70, df: 73, sp: 60, sl: 85 }, weightkg: 40 },
    Mélofée: {
        types: ['Normal'],
        bs: { hp: 70, at: 45, df: 48, sp: 35, sl: 60 },
        weightkg: 7.5,
        nfe: true
    },
    Crustabri: {
        types: ['Water', 'Ice'],
        bs: { hp: 50, at: 95, df: 180, sp: 70, sl: 85 },
        weightkg: 132.5
    },
    Osselait: {
        types: ['Ground'],
        bs: { hp: 50, at: 50, df: 95, sp: 35, sl: 40 },
        weightkg: 6.5,
        nfe: true
    },
    Lamantine: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 70, df: 80, sp: 70, sl: 95 },
        weightkg: 120
    },
    Taupiqueur: {
        types: ['Ground'],
        bs: { hp: 10, at: 55, df: 25, sp: 95, sl: 45 },
        weightkg: 0.8,
        nfe: true
    },
    Métamorph: { types: ['Normal'], bs: { hp: 48, at: 48, df: 48, sp: 48, sl: 48 }, weightkg: 4 },
    Dodrio: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 110, df: 70, sp: 100, sl: 60 },
        weightkg: 85.2
    },
    Doduo: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 85, df: 45, sp: 75, sl: 35 },
        weightkg: 39.2,
        nfe: true
    },
    Draco: {
        types: ['Dragon'],
        bs: { hp: 61, at: 84, df: 65, sp: 70, sl: 70 },
        weightkg: 16.5,
        nfe: true
    },
    Dracolosse: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 91, at: 134, df: 95, sp: 80, sl: 100 },
        weightkg: 210
    },
    Minidraco: {
        types: ['Dragon'],
        bs: { hp: 41, at: 64, df: 45, sp: 50, sl: 50 },
        weightkg: 3.3,
        nfe: true
    },
    Soporifik: {
        types: ['Psychic'],
        bs: { hp: 60, at: 48, df: 45, sp: 42, sl: 90 },
        weightkg: 32.4,
        nfe: true
    },
    Triopikeur: {
        types: ['Ground'],
        bs: { hp: 35, at: 80, df: 50, sp: 120, sl: 70 },
        weightkg: 33.3
    },
    Évoli: {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sp: 55, sl: 65 },
        weightkg: 6.5,
        nfe: true
    },
    Abo: {
        types: ['Poison'],
        bs: { hp: 35, at: 60, df: 44, sp: 55, sl: 40 },
        weightkg: 6.9,
        nfe: true
    },
    Élektek: {
        types: ['Electric'],
        bs: { hp: 65, at: 83, df: 57, sp: 105, sl: 85 },
        weightkg: 30
    },
    Électrode: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 70, sp: 140, sl: 80 },
        weightkg: 66.6
    },
    Noeunoeuf: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 60, at: 40, df: 80, sp: 40, sl: 60 },
        weightkg: 2.5,
        nfe: true
    },
    Noadkoko: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 95, at: 95, df: 85, sp: 55, sl: 125 },
        weightkg: 120
    },
    Canarticho: {
        types: ['Normal', 'Flying'],
        bs: { hp: 52, at: 65, df: 55, sp: 60, sl: 58 },
        weightkg: 15
    },
    Rapasdepic: {
        types: ['Normal', 'Flying'],
        bs: { hp: 65, at: 90, df: 65, sp: 100, sl: 61 },
        weightkg: 38
    },
    Pyroli: { types: ['Fire'], bs: { hp: 65, at: 130, df: 60, sp: 65, sl: 110 }, weightkg: 25 },
    Fantominus: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 30, at: 35, df: 30, sp: 80, sl: 100 },
        weightkg: 0.1,
        nfe: true
    },
    Ectoplasma: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sp: 110, sl: 130 },
        weightkg: 40.5
    },
    Racaillou: {
        types: ['Rock', 'Ground'],
        bs: { hp: 40, at: 80, df: 100, sp: 20, sl: 30 },
        weightkg: 20,
        nfe: true
    },
    Ortide: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 65, df: 70, sp: 40, sl: 85 },
        weightkg: 8.6,
        nfe: true
    },
    Nosferalto: {
        types: ['Poison', 'Flying'],
        bs: { hp: 75, at: 80, df: 70, sp: 90, sl: 75 },
        weightkg: 55
    },
    Poissirène: {
        types: ['Water'],
        bs: { hp: 45, at: 67, df: 60, sp: 63, sl: 50 },
        weightkg: 15,
        nfe: true
    },
    Akwakwak: { types: ['Water'], bs: { hp: 80, at: 82, df: 78, sp: 85, sl: 80 }, weightkg: 76.6 },
    Grolem: {
        types: ['Rock', 'Ground'],
        bs: { hp: 80, at: 110, df: 130, sp: 45, sl: 55 },
        weightkg: 300
    },
    Gravalanch: {
        types: ['Rock', 'Ground'],
        bs: { hp: 55, at: 95, df: 115, sp: 35, sl: 45 },
        weightkg: 105,
        nfe: true
    },
    Tadmorv: {
        types: ['Poison'],
        bs: { hp: 80, at: 80, df: 50, sp: 25, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Caninos: {
        types: ['Fire'],
        bs: { hp: 55, at: 70, df: 45, sp: 60, sl: 50 },
        weightkg: 19,
        nfe: true
    },
    Léviator: {
        types: ['Water', 'Flying'],
        bs: { hp: 95, at: 125, df: 79, sp: 81, sl: 100 },
        weightkg: 235
    },
    Spectrum: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 45, at: 50, df: 45, sp: 95, sl: 115 },
        weightkg: 0.1,
        nfe: true
    },
    Tygnon: {
        types: ['Fighting'],
        bs: { hp: 50, at: 105, df: 79, sp: 76, sl: 35 },
        weightkg: 50.2
    },
    Kicklee: {
        types: ['Fighting'],
        bs: { hp: 50, at: 120, df: 53, sp: 87, sl: 35 },
        weightkg: 49.8
    },
    Hypotrempe: {
        types: ['Water'],
        bs: { hp: 30, at: 40, df: 70, sp: 60, sl: 70 },
        weightkg: 8,
        nfe: true
    },
    Hypnomademade: {
        types: ['Psychic'],
        bs: { hp: 85, at: 73, df: 70, sp: 67, sl: 115 },
        weightkg: 75.6
    },
    Herbizarre: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 62, df: 63, sp: 60, sl: 80 },
        weightkg: 13,
        nfe: true
    },
    Rondoudou: {
        types: ['Normal'],
        bs: { hp: 115, at: 45, df: 20, sp: 20, sl: 25 },
        weightkg: 5.5,
        nfe: true
    },
    Voltali: {
        types: ['Electric'],
        bs: { hp: 65, at: 65, df: 60, sp: 130, sl: 110 },
        weightkg: 24.5
    },
    Lippoutou: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 65, at: 50, df: 35, sp: 95, sl: 95 },
        weightkg: 40.6
    },
    Kabuto: {
        types: ['Rock', 'Water'],
        bs: { hp: 30, at: 80, df: 90, sp: 55, sl: 45 },
        weightkg: 11.5,
        nfe: true
    },
    Kabutops: {
        types: ['Rock', 'Water'],
        bs: { hp: 60, at: 115, df: 105, sp: 80, sl: 70 },
        weightkg: 40.5
    },
    Kadabra: {
        types: ['Psychic'],
        bs: { hp: 40, at: 35, df: 30, sp: 105, sl: 120 },
        weightkg: 56.5,
        nfe: true
    },
    Coconfort: {
        types: ['Bug', 'Poison'],
        bs: { hp: 45, at: 25, df: 50, sp: 35, sl: 25 },
        weightkg: 10,
        nfe: true
    },
    Kangourex: {
        types: ['Normal'],
        bs: { hp: 105, at: 95, df: 80, sp: 90, sl: 40 },
        weightkg: 80
    },
    Krabboss: { types: ['Water'], bs: { hp: 55, at: 130, df: 115, sp: 75, sl: 50 }, weightkg: 60 },
    Smogo: {
        types: ['Poison'],
        bs: { hp: 40, at: 65, df: 95, sp: 35, sl: 60 },
        weightkg: 1,
        nfe: true
    },
    Krabby: {
        types: ['Water'],
        bs: { hp: 30, at: 105, df: 90, sp: 50, sl: 25 },
        weightkg: 6.5,
        nfe: true
    },
    Lokhlass: {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sp: 60, sl: 95 },
        weightkg: 220
    },
    Excelangue: {
        types: ['Normal'],
        bs: { hp: 90, at: 55, df: 75, sp: 30, sl: 60 },
        weightkg: 65.5
    },
    Mackogneur: {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sp: 55, sl: 65 },
        weightkg: 130
    },
    Machoceur: {
        types: ['Fighting'],
        bs: { hp: 80, at: 100, df: 70, sp: 45, sl: 50 },
        weightkg: 70.5,
        nfe: true
    },
    Machoc: {
        types: ['Fighting'],
        bs: { hp: 70, at: 80, df: 50, sp: 35, sl: 35 },
        weightkg: 19.5,
        nfe: true
    },
    Magicarpe: {
        types: ['Water'],
        bs: { hp: 20, at: 10, df: 55, sp: 80, sl: 20 },
        weightkg: 10,
        nfe: true
    },
    Magmar: {
        types: ['Fire'],
        bs: { hp: 65, at: 95, df: 57, sp: 93, sl: 85 },
        weightkg: 44.5
    },
    Magnéti: {
        types: ['Electric'],
        bs: { hp: 25, at: 35, df: 70, sp: 45, sl: 95 },
        weightkg: 6,
        nfe: true
    },
    Magnéton: {
        types: ['Electric'],
        bs: { hp: 50, at: 60, df: 95, sp: 70, sl: 120 },
        weightkg: 60
    },
    Férosinge: {
        types: ['Fighting'],
        bs: { hp: 40, at: 80, df: 35, sp: 70, sl: 35 },
        weightkg: 28,
        nfe: true
    },
    Ossatueur: { types: ['Ground'], bs: { hp: 60, at: 80, df: 110, sp: 45, sl: 50 }, weightkg: 45 },
    Miaouss: {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sp: 90, sl: 40 },
        weightkg: 4.2,
        nfe: true
    },
    Chrysacier: {
        types: ['Bug'],
        bs: { hp: 50, at: 20, df: 55, sp: 30, sl: 25 },
        weightkg: 9.9,
        nfe: true
    },
    Mew: {
        types: ['Psychic'],
        bs: { hp: 100, at: 100, df: 100, sp: 100, sl: 100 },
        weightkg: 4
    },
    Mewtwo: {
        types: ['Psychic'],
        bs: { hp: 106, at: 110, df: 90, sp: 130, sl: 154 },
        weightkg: 122
    },
    Sulfura: {
        types: ['Fire', 'Flying'],
        bs: { hp: 90, at: 100, df: 90, sp: 90, sl: 125 },
        weightkg: 60
    },
    'M. Mime': {
        types: ['Psychic'],
        bs: { hp: 40, at: 45, df: 65, sp: 90, sl: 100 },
        weightkg: 54.5
    },
    Grotadmorv: { types: ['Poison'], bs: { hp: 105, at: 105, df: 75, sp: 50, sl: 65 }, weightkg: 30 },
    Nidoking: {
        types: ['Poison', 'Ground'],
        bs: { hp: 81, at: 92, df: 77, sp: 85, sl: 75 },
        weightkg: 62
    },
    Nidoqueen: {
        types: ['Poison', 'Ground'],
        bs: { hp: 90, at: 82, df: 87, sp: 76, sl: 75 },
        weightkg: 60
    },
    'Nidoran♀': {
        types: ['Poison'],
        bs: { hp: 55, at: 47, df: 52, sp: 41, sl: 40 },
        weightkg: 7,
        nfe: true
    },
    'Nidoran♂': {
        types: ['Poison'],
        bs: { hp: 46, at: 57, df: 40, sp: 50, sl: 40 },
        weightkg: 9,
        nfe: true
    },
    Nidorina: {
        types: ['Poison'],
        bs: { hp: 70, at: 62, df: 67, sp: 56, sl: 55 },
        weightkg: 20,
        nfe: true
    },
    Nidorino: {
        types: ['Poison'],
        bs: { hp: 61, at: 72, df: 57, sp: 65, sl: 55 },
        weightkg: 19.5,
        nfe: true
    },
    Feunard: {
        types: ['Fire'],
        bs: { hp: 73, at: 76, df: 75, sp: 100, sl: 100 },
        weightkg: 19.9
    },
    Mystherbe: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 50, df: 55, sp: 30, sl: 75 },
        weightkg: 5.4,
        nfe: true
    },
    Amonita: {
        types: ['Rock', 'Water'],
        bs: { hp: 35, at: 40, df: 100, sp: 35, sl: 90 },
        weightkg: 7.5,
        nfe: true
    },
    Amonistar: {
        types: ['Rock', 'Water'],
        bs: { hp: 70, at: 60, df: 125, sp: 55, sl: 115 },
        weightkg: 35
    },
    Onix: {
        types: ['Rock', 'Ground'],
        bs: { hp: 35, at: 45, df: 160, sp: 70, sl: 30 },
        weightkg: 210
    },
    Paras: {
        types: ['Bug', 'Grass'],
        bs: { hp: 35, at: 70, df: 55, sp: 25, sl: 55 },
        weightkg: 5.4,
        nfe: true
    },
    Parasect: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 95, df: 80, sp: 30, sl: 80 },
        weightkg: 29.5
    },
    Persian: { types: ['Normal'], bs: { hp: 65, at: 70, df: 60, sp: 115, sl: 65 }, weightkg: 32 },
    Roucarnage: {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 75, sp: 91, sl: 70 },
        weightkg: 39.5
    },
    Roucoups: {
        types: ['Normal', 'Flying'],
        bs: { hp: 63, at: 60, df: 55, sp: 71, sl: 50 },
        weightkg: 30,
        nfe: true
    },
    Roucool: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 45, df: 40, sp: 56, sl: 35 },
        weightkg: 1.8,
        nfe: true
    },
    Pikachu: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        weightkg: 6,
        nfe: true
    },
    Scarabrute: { types: ['Bug'], bs: { hp: 65, at: 125, df: 100, sp: 85, sl: 55 }, weightkg: 55 },
    Ptitard: {
        types: ['Water'],
        bs: { hp: 40, at: 50, df: 40, sp: 90, sl: 40 },
        weightkg: 12.4,
        nfe: true
    },
    Têtarte: {
        types: ['Water'],
        bs: { hp: 65, at: 65, df: 65, sp: 90, sl: 50 },
        weightkg: 20,
        nfe: true
    },
    Tartard: {
        types: ['Water', 'Fighting'],
        bs: { hp: 90, at: 85, df: 95, sp: 70, sl: 70 },
        weightkg: 54
    },
    Ponyta: {
        types: ['Fire'],
        bs: { hp: 50, at: 85, df: 55, sp: 90, sl: 65 },
        weightkg: 30,
        nfe: true
    },
    Porygon: {
        types: ['Normal'],
        bs: { hp: 65, at: 60, df: 70, sp: 40, sl: 75 },
        weightkg: 36.5
    },
    "Primo-Kyogre": {
        types: ['Fighting'],
        bs: { hp: 65, at: 105, df: 60, sp: 95, sl: 60 },
        weightkg: 32
    },
    Psykokwak: {
        types: ['Water'],
        bs: { hp: 50, at: 52, df: 48, sp: 55, sl: 50 },
        weightkg: 19.6,
        nfe: true
    },
    Raichu: {
        types: ['Electric'],
        bs: { hp: 60, at: 90, df: 55, sp: 100, sl: 90 },
        weightkg: 30
    },
    Galopa: { types: ['Fire'], bs: { hp: 65, at: 100, df: 70, sp: 105, sl: 80 }, weightkg: 95 },
    Rattatac: {
        types: ['Normal'],
        bs: { hp: 55, at: 81, df: 60, sp: 97, sl: 50 },
        weightkg: 18.5
    },
    Rattata: {
        types: ['Normal'],
        bs: { hp: 30, at: 56, df: 35, sp: 72, sl: 25 },
        weightkg: 3.5,
        nfe: true
    },
    Rhinoféros: {
        types: ['Ground', 'Rock'],
        bs: { hp: 105, at: 130, df: 120, sp: 40, sl: 45 },
        weightkg: 120
    },
    Rhinocorne: {
        types: ['Ground', 'Rock'],
        bs: { hp: 80, at: 85, df: 95, sp: 25, sl: 30 },
        weightkg: 115,
        nfe: true
    },
    Sabelette: {
        types: ['Ground'],
        bs: { hp: 50, at: 75, df: 85, sp: 40, sl: 30 },
        weightkg: 12,
        nfe: true
    },
    Sablaireau: {
        types: ['Ground'],
        bs: { hp: 75, at: 100, df: 110, sp: 65, sl: 55 },
        weightkg: 29.5
    },
    Insécateur: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 110, df: 80, sp: 105, sl: 55 },
        weightkg: 56
    },
    Hypocéan: { types: ['Water'], bs: { hp: 55, at: 65, df: 95, sp: 85, sl: 95 }, weightkg: 25 },
    Poissoroy: { types: ['Water'], bs: { hp: 80, at: 92, df: 65, sp: 68, sl: 80 }, weightkg: 39 },
    Otaria: {
        types: ['Water'],
        bs: { hp: 65, at: 45, df: 55, sp: 45, sl: 70 },
        weightkg: 90,
        nfe: true
    },
    Kokiyas: {
        types: ['Water'],
        bs: { hp: 30, at: 65, df: 100, sp: 40, sl: 45 },
        weightkg: 4,
        nfe: true
    },
    Flagadoss: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 110, sp: 30, sl: 80 },
        weightkg: 78.5
    },
    Ramoloss: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 65, df: 65, sp: 15, sl: 40 },
        weightkg: 36,
        nfe: true
    },
    Ronflex: {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sp: 30, sl: 65 },
        weightkg: 460
    },
    Piafabec: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 60, df: 30, sp: 70, sl: 31 },
        weightkg: 2,
        nfe: true
    },
    Carapuce: {
        types: ['Water'],
        bs: { hp: 44, at: 48, df: 65, sp: 43, sl: 50 },
        weightkg: 9,
        nfe: true
    },
    Staross: {
        types: ['Water', 'Psychic'],
        bs: { hp: 60, at: 75, df: 85, sp: 115, sl: 100 },
        weightkg: 80
    },
    Stari: {
        types: ['Water'],
        bs: { hp: 30, at: 45, df: 55, sp: 85, sl: 70 },
        weightkg: 34.5,
        nfe: true
    },
    Saquedeneu: {
        types: ['Grass'],
        bs: { hp: 65, at: 55, df: 115, sp: 60, sl: 100 },
        weightkg: 35
    },
    Tauros: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 95, sp: 110, sl: 70 },
        weightkg: 88.4
    },
    Tentacool: {
        types: ['Water', 'Poison'],
        bs: { hp: 40, at: 40, df: 35, sp: 70, sl: 100 },
        weightkg: 45.5,
        nfe: true
    },
    Tentacruel: {
        types: ['Water', 'Poison'],
        bs: { hp: 80, at: 70, df: 65, sp: 100, sl: 120 },
        weightkg: 55
    },
    Aquali: {
        types: ['Water'],
        bs: { hp: 130, at: 65, df: 60, sp: 65, sl: 110 },
        weightkg: 29
    },
    Aéromite: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 65, df: 60, sp: 90, sl: 90 },
        weightkg: 12.5
    },
    Mimitoss: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 55, df: 50, sp: 45, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Florizarre: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sp: 80, sl: 100 },
        weightkg: 100
    },
    Empiflor: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 105, df: 65, sp: 70, sl: 100 },
        weightkg: 15.5
    },
    Rafflesia: {
        types: ['Grass', 'Poison'],
        bs: { hp: 75, at: 80, df: 85, sp: 50, sl: 100 },
        weightkg: 18.6
    },
    Voltorbee: {
        types: ['Electric'],
        bs: { hp: 40, at: 30, df: 50, sp: 100, sl: 55 },
        weightkg: 10.4,
        nfe: true
    },
    Goupix: {
        types: ['Fire'],
        bs: { hp: 38, at: 41, df: 40, sp: 65, sl: 65 },
        weightkg: 9.9,
        nfe: true
    },
    Carabaffe: {
        types: ['Water'],
        bs: { hp: 59, at: 63, df: 80, sp: 58, sl: 65 },
        weightkg: 22.5,
        nfe: true
    },
    Aspicot: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 35, df: 30, sp: 50, sl: 20 },
        weightkg: 3.2,
        nfe: true
    },
    Boustiflor: {
        types: ['Grass', 'Poison'],
        bs: { hp: 65, at: 90, df: 50, sp: 55, sl: 85 },
        weightkg: 6.4,
        nfe: true
    },
    Smogogo: {
        types: ['Poison'],
        bs: { hp: 65, at: 90, df: 120, sp: 60, sl: 85 },
        weightkg: 9.5
    },
    Grodoudou: {
        types: ['Normal'],
        bs: { hp: 140, at: 70, df: 45, sp: 45, sl: 50 },
        weightkg: 12
    },
    Électhor: {
        types: ['Electric', 'Flying'],
        bs: { hp: 90, at: 90, df: 85, sp: 100, sl: 125 },
        weightkg: 52.6
    },
    Nosferapti: {
        types: ['Poison', 'Flying'],
        bs: { hp: 40, at: 45, df: 35, sp: 55, sl: 40 },
        weightkg: 7.5,
        nfe: true
    }
};
var GSC_PATCH = {
    Abra: { bs: { sa: 105, sd: 55 } },
    Ptéra: { bs: { sa: 60, sd: 75 } },
    Alakazam: { bs: { sa: 135, sd: 85 } },
    Arbok: { bs: { sa: 65, sd: 79 } },
    Arcanin: { bs: { sa: 100, sd: 80 } },
    Artikodin: { bs: { sa: 95, sd: 125 }, gender: 'N' },
    Dardargnan: { bs: { sa: 45, sd: 80 } },
    Chétiflor: { bs: { sa: 70, sd: 30 } },
    Tortank: { bs: { sa: 85, sd: 105 } },
    Bulbizarre: { bs: { sa: 65, sd: 65 } },
    Papilusion: { bs: { sa: 80, sd: 80 } },
    Chenipan: { bs: { sa: 20, sd: 20 } },
    Leveinard: { bs: { sa: 35, sd: 105 }, nfe: true },
    Dracaufeu: { bs: { sa: 109, sd: 85 } },
    Salamèche: { bs: { sa: 60, sd: 50 } },
    Reptincel: { bs: { sa: 80, sd: 65 } },
    Mélodelfe: { bs: { sa: 85, sd: 90 } },
    Mélofée: { bs: { sa: 60, sd: 65 } },
    Crustabri: { bs: { sa: 85, sd: 45 } },
    Osselait: { bs: { sa: 40, sd: 50 } },
    Lamantine: { bs: { sa: 70, sd: 95 } },
    Taupiqueur: { bs: { sa: 35, sd: 45 } },
    Métamorph: { bs: { sa: 48, sd: 48 }, gender: 'N' },
    Dodrio: { bs: { sa: 60, sd: 60 } },
    Doduo: { bs: { sa: 35, sd: 35 } },
    Draco: { bs: { sa: 70, sd: 70 } },
    Dracolosse: { bs: { sa: 100, sd: 100 } },
    Minidraco: { bs: { sa: 50, sd: 50 } },
    Soporifik: { bs: { sa: 43, sd: 90 } },
    Triopikeur: { bs: { sa: 50, sd: 70 } },
    Évoli: { bs: { sa: 45, sd: 65 } },
    Abo: { bs: { sa: 40, sd: 54 } },
    Élektek: { bs: { sa: 95, sd: 85 } },
    Électrode: { bs: { sa: 80, sd: 80 }, gender: 'N' },
    Noeunoeuf: { bs: { sa: 60, sd: 45 } },
    Noadkoko: { bs: { sa: 125, sd: 65 } },
    Canarticho: { bs: { sa: 58, sd: 62 } },
    Rapasdepic: { bs: { sa: 61, sd: 61 } },
    Pyroli: { bs: { sa: 95, sd: 110 } },
    Fantominus: { bs: { sa: 100, sd: 35 } },
    Ectoplasma: { bs: { sa: 130, sd: 75 } },
    Racaillou: { bs: { sa: 30, sd: 30 } },
    Ortide: { bs: { sa: 85, sd: 75 } },
    Nosferalto: { bs: { sa: 65, sd: 75 }, nfe: true },
    Poissirène: { bs: { sa: 35, sd: 50 } },
    Akwakwak: { bs: { sa: 95, sd: 80 } },
    Grolem: { bs: { sa: 55, sd: 65 } },
    Gravalanch: { bs: { sa: 45, sd: 45 } },
    Tadmorv: { bs: { sa: 40, sd: 50 } },
    Caninos: { bs: { sa: 70, sd: 50 } },
    Léviator: { bs: { sa: 60, sd: 100 } },
    Spectrum: { bs: { sa: 115, sd: 55 } },
    Tygnon: { bs: { sa: 35, sd: 110 } },
    Kicklee: { bs: { sa: 35, sd: 110 } },
    Hypotrempe: { bs: { sa: 70, sd: 25 } },
    Hypnomademade: { bs: { sa: 73, sd: 115 } },
    Herbizarre: { bs: { sa: 80, sd: 80 } },
    Rondoudou: { bs: { sa: 45, sd: 25 } },
    Voltali: { bs: { sa: 110, sd: 95 } },
    Lippoutou: { bs: { sa: 115, sd: 95 } },
    Kabuto: { bs: { sa: 55, sd: 45 } },
    Kabutops: { bs: { sa: 65, sd: 70 } },
    Kadabra: { bs: { sa: 120, sd: 70 } },
    Coconfort: { bs: { sa: 25, sd: 25 } },
    Kangourex: { bs: { sa: 40, sd: 80 } },
    Krabboss: { bs: { sa: 50, sd: 50 } },
    Smogo: { bs: { sa: 60, sd: 45 } },
    Krabby: { bs: { sa: 25, sd: 25 } },
    Lokhlass: { bs: { sa: 85, sd: 95 } },
    Excelangue: { bs: { sa: 60, sd: 75 } },
    Mackogneur: { bs: { sa: 65, sd: 85 } },
    Machoceur: { bs: { sa: 50, sd: 60 } },
    Machoc: { bs: { sa: 35, sd: 35 } },
    Magicarpe: { bs: { sa: 15, sd: 20 } },
    Magmar: { bs: { sa: 100, sd: 85 } },
    Magnéti: { types: ['Electric', 'Steel'], bs: { sa: 95, sd: 55 }, gender: 'N' },
    Magnéton: { types: ['Electric', 'Steel'], bs: { sa: 120, sd: 70 }, gender: 'N' },
    Férosinge: { bs: { sa: 35, sd: 45 } },
    Ossatueur: { bs: { sa: 50, sd: 80 } },
    Miaouss: { bs: { sa: 40, sd: 40 } },
    Chrysacier: { bs: { sa: 25, sd: 25 } },
    Mew: { bs: { sa: 100, sd: 100 }, gender: 'N' },
    Mewtwo: { bs: { sa: 154, sd: 90 }, gender: 'N' },
    Sulfura: { bs: { sa: 125, sd: 85 }, gender: 'N' },
    'M. Mime': { bs: { sa: 100, sd: 120 } },
    Grotadmorv: { bs: { sa: 65, sd: 100 } },
    Nidoking: { bs: { sa: 85, sd: 75 } },
    Nidoqueen: { bs: { sa: 75, sd: 85 } },
    'Nidoran♀': { bs: { sa: 40, sd: 40 } },
    'Nidoran♂': { bs: { sa: 40, sd: 40 } },
    Nidorina: { bs: { sa: 55, sd: 55 } },
    Nidorino: { bs: { sa: 55, sd: 55 } },
    Feunard: { bs: { sa: 81, sd: 100 } },
    Mystherbe: { bs: { sa: 75, sd: 65 } },
    Amonita: { bs: { sa: 90, sd: 55 } },
    Amonistar: { bs: { sa: 115, sd: 70 } },
    Onix: { bs: { sa: 30, sd: 45 }, nfe: true },
    Paras: { bs: { sa: 45, sd: 55 } },
    Parasect: { bs: { sa: 60, sd: 80 } },
    Persian: { bs: { sa: 65, sd: 65 } },
    Roucarnage: { bs: { sa: 70, sd: 70 } },
    Roucoups: { bs: { sa: 50, sd: 50 } },
    Roucool: { bs: { sa: 35, sd: 35 } },
    Pikachu: { bs: { sa: 50, sd: 40 } },
    Scarabrute: { bs: { sa: 55, sd: 70 } },
    Ptitard: { bs: { sa: 40, sd: 40 } },
    Têtarte: { bs: { sa: 50, sd: 50 } },
    Tartard: { bs: { sa: 70, sd: 90 } },
    Ponyta: { bs: { sa: 65, sd: 65 } },
    Porygon: { bs: { sa: 85, sd: 75 }, nfe: true, gender: 'N' },
    'Primo-Kyogre': { bs: { sa: 60, sd: 70 } },
    Psykokwak: { bs: { sa: 65, sd: 50 } },
    Raichu: { bs: { sa: 90, sd: 80 } },
    Galopa: { bs: { sa: 80, sd: 80 } },
    Rattatac: { bs: { sa: 50, sd: 70 } },
    Rattata: { bs: { sa: 25, sd: 35 } },
    Rhinoféros: { bs: { sa: 45, sd: 45 } },
    Rhinocorne: { bs: { sa: 30, sd: 30 } },
    Sabelette: { bs: { sa: 20, sd: 30 } },
    Sablaireau: { bs: { sa: 45, sd: 55 } },
    Insécateur: { bs: { sa: 55, sd: 80 }, nfe: true },
    Hypocéan: { bs: { sa: 95, sd: 45 }, nfe: true },
    Poissoroy: { bs: { sa: 65, sd: 80 } },
    Otaria: { bs: { sa: 45, sd: 70 } },
    Kokiyas: { bs: { sa: 45, sd: 25 } },
    Flagadoss: { bs: { sa: 100, sd: 80 } },
    Ramoloss: { bs: { sa: 40, sd: 40 } },
    Ronflex: { bs: { sa: 65, sd: 110 } },
    Piafabec: { bs: { sa: 31, sd: 31 } },
    Carapuce: { bs: { sa: 50, sd: 64 } },
    Staross: { bs: { sa: 100, sd: 85 }, gender: 'N' },
    Stari: { bs: { sa: 70, sd: 55 }, gender: 'N' },
    Saquedeneu: { bs: { sa: 100, sd: 40 } },
    Tauros: { bs: { sa: 40, sd: 70 } },
    Tentacool: { bs: { sa: 50, sd: 100 } },
    Tentacruel: { bs: { sa: 80, sd: 120 } },
    Aquali: { bs: { sa: 110, sd: 95 } },
    Aéromite: { bs: { sa: 90, sd: 75 } },
    Mimitoss: { bs: { sa: 40, sd: 55 } },
    Florizarre: { bs: { sa: 100, sd: 100 } },
    Empiflor: { bs: { sa: 100, sd: 60 } },
    Rafflesia: { bs: { sa: 100, sd: 90 } },
    Voltorbee: { bs: { sa: 55, sd: 55 }, gender: 'N' },
    Goupix: { bs: { sa: 50, sd: 65 } },
    Carabaffe: { bs: { sa: 65, sd: 80 } },
    Aspicot: { bs: { sa: 20, sd: 20 } },
    Boustiflor: { bs: { sa: 85, sd: 45 } },
    Smogogo: { bs: { sa: 85, sd: 70 } },
    Grodoudou: { bs: { sa: 75, sd: 50 } },
    Électhor: { bs: { sa: 125, sd: 90 }, gender: 'N' },
    Nosferapti: { bs: { sa: 30, sd: 40 } },
    Capumain: { types: ['Normal'], bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 }, weightkg: 11.5 },
    Pharamp: {
        types: ['Electric'],
        bs: { hp: 90, at: 75, df: 75, sa: 115, sd: 90, sp: 55 },
        weightkg: 61.5
    },
    Migalos: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 40 },
        weightkg: 33.5
    },
    Azumarill: {
        types: ['Water'],
        bs: { hp: 100, at: 65, df: 80, sa: 50, sd: 80, sp: 50 },
        weightkg: 28.5
    },
    Macronium: {
        types: ['Grass'],
        bs: { hp: 60, at: 62, df: 80, sa: 63, sd: 80, sp: 60 },
        weightkg: 15.8,
        nfe: true
    },
    Joliflor: {
        types: ['Grass'],
        bs: { hp: 75, at: 80, df: 85, sa: 90, sd: 100, sp: 50 },
        weightkg: 5.8
    },
    Leuphorie: {
        types: ['Normal'],
        bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 135, sp: 55 },
        weightkg: 46.8
    },
    Celebi: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 5,
        gender: 'N'
    },
    Germignon: {
        types: ['Grass'],
        bs: { hp: 45, at: 49, df: 65, sa: 49, sd: 65, sp: 45 },
        weightkg: 6.4,
        nfe: true
    },
    Loupio: {
        types: ['Water', 'Electric'],
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        weightkg: 12,
        nfe: true
    },
    Mélo: {
        types: ['Normal'],
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        weightkg: 3,
        nfe: true
    },
    Corayon: {
        types: ['Water', 'Rock'],
        bs: { hp: 55, at: 55, df: 85, sa: 65, sd: 85, sp: 35 },
        weightkg: 5
    },
    Nostenfer: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 90, df: 80, sa: 70, sd: 80, sp: 130 },
        weightkg: 75
    },
    Crocrodil: {
        types: ['Water'],
        bs: { hp: 65, at: 80, df: 80, sa: 59, sd: 63, sp: 58 },
        weightkg: 25,
        nfe: true
    },
    Héricendre: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        weightkg: 7.9,
        nfe: true
    },
    Cadoizo: {
        types: ['Ice', 'Flying'],
        bs: { hp: 45, at: 55, df: 45, sa: 65, sd: 45, sp: 75 },
        weightkg: 16
    },
    Donphan: {
        types: ['Ground'],
        bs: { hp: 90, at: 120, df: 120, sa: 60, sd: 60, sp: 50 },
        weightkg: 120
    },
    Insolourdo: {
        types: ['Normal'],
        bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 },
        weightkg: 14
    },
    Élekid: {
        types: ['Electric'],
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        weightkg: 23.5,
        nfe: true
    },
    Entei: {
        types: ['Fire'],
        bs: { hp: 115, at: 115, df: 85, sa: 90, sd: 75, sp: 100 },
        weightkg: 198,
        gender: 'N'
    },
    Mentali: {
        types: ['Psychic'],
        bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 },
        weightkg: 26.5
    },
    Aligatueur: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 78 },
        weightkg: 88.8
    },
    Lainergie: {
        types: ['Electric'],
        bs: { hp: 70, at: 55, df: 55, sa: 80, sd: 60, sp: 45 },
        weightkg: 13.3,
        nfe: true
    },
    Foretress: {
        types: ['Bug', 'Steel'],
        bs: { hp: 75, at: 90, df: 140, sa: 60, sd: 60, sp: 40 },
        weightkg: 125.8
    },
    Fouinar: { types: ['Normal'], bs: { hp: 85, at: 76, df: 64, sa: 45, sd: 55, sp: 90 }, weightkg: 32.5 },
    Girafarig: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        weightkg: 41.5
    },
    Scorplane: {
        types: ['Ground', 'Flying'],
        bs: { hp: 65, at: 75, df: 105, sa: 35, sd: 65, sp: 85 },
        weightkg: 64.8
    },
    Granbull: {
        types: ['Normal'],
        bs: { hp: 90, at: 120, df: 75, sa: 60, sd: 60, sp: 45 },
        weightkg: 48.7
    },
    Scarhino: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 125, df: 75, sa: 40, sd: 95, sp: 85 },
        weightkg: 54
    },
    Kapoera: {
        types: ['Fighting'],
        bs: { hp: 50, at: 95, df: 95, sa: 35, sd: 110, sp: 70 },
        weightkg: 48
    },
    'Ho-Oh': {
        types: ['Fire', 'Flying'],
        bs: { hp: 106, at: 130, df: 90, sa: 110, sd: 154, sp: 90 },
        weightkg: 199,
        gender: 'N'
    },
    Hoothoot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        weightkg: 21.2,
        nfe: true
    },
    Granivol: {
        types: ['Grass', 'Flying'],
        bs: { hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50 },
        weightkg: 0.5,
        nfe: true
    },
    Démolosse: {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 95 },
        weightkg: 35
    },
    Malosse: {
        types: ['Dark', 'Fire'],
        bs: { hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65 },
        weightkg: 10.8,
        nfe: true
    },
    Toudoudou: {
        types: ['Normal'],
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        weightkg: 1,
        nfe: true
    },
    Cotovol: {
        types: ['Grass', 'Flying'],
        bs: { hp: 75, at: 55, df: 70, sa: 55, sd: 85, sp: 110 },
        weightkg: 3
    },
    Hyporoi: {
        types: ['Water', 'Dragon'],
        bs: { hp: 75, at: 95, df: 95, sa: 95, sd: 95, sp: 85 },
        weightkg: 152
    },
    Lanturn: {
        types: ['Water', 'Electric'],
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        weightkg: 22.5
    },
    Embrylex: {
        types: ['Rock', 'Ground'],
        bs: { hp: 50, at: 64, df: 50, sa: 45, sd: 50, sp: 41 },
        weightkg: 72,
        nfe: true
    },
    Coxyclaque: {
        types: ['Bug', 'Flying'],
        bs: { hp: 55, at: 35, df: 50, sa: 55, sd: 110, sp: 85 },
        weightkg: 35.6
    },
    Coxy: {
        types: ['Bug', 'Flying'],
        bs: { hp: 40, at: 20, df: 30, sa: 40, sd: 80, sp: 55 },
        weightkg: 10.8,
        nfe: true
    },
    Lugia: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 106, at: 90, df: 130, sa: 90, sd: 154, sp: 110 },
        weightkg: 216,
        gender: 'N'
    },
    Magby: {
        types: ['Fire'],
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        weightkg: 21.4,
        nfe: true
    },
    Volcaropod: {
        types: ['Fire', 'Rock'],
        bs: { hp: 50, at: 50, df: 120, sa: 80, sd: 80, sp: 30 },
        weightkg: 55
    },
    Démanta: {
        types: ['Water', 'Flying'],
        bs: { hp: 65, at: 40, df: 70, sa: 80, sd: 140, sp: 70 },
        weightkg: 220
    },
    Wattouat: {
        types: ['Electric'],
        bs: { hp: 55, at: 40, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 7.8,
        nfe: true
    },
    Marill: {
        types: ['Water'],
        bs: { hp: 70, at: 20, df: 50, sa: 20, sd: 50, sp: 40 },
        weightkg: 8.5,
        nfe: true
    },
    Méganium: {
        types: ['Grass'],
        bs: { hp: 80, at: 82, df: 100, sa: 83, sd: 100, sp: 80 },
        weightkg: 100.5
    },
    Écrémeuh: {
        types: ['Normal'],
        bs: { hp: 95, at: 80, df: 105, sa: 40, sd: 70, sp: 100 },
        weightkg: 75.5
    },
    Feuforêve: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        weightkg: 1
    },
    Cornèbre: {
        types: ['Dark', 'Flying'],
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 91 },
        weightkg: 2.1
    },
    Natu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 40, at: 50, df: 45, sa: 70, sd: 45, sp: 70 },
        weightkg: 2,
        nfe: true
    },
    Noarfang: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        weightkg: 40.8
    },
    Octillery: {
        types: ['Water'],
        bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 },
        weightkg: 28.5
    },
    Phanpy: {
        types: ['Ground'],
        bs: { hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40 },
        weightkg: 33.5,
        nfe: true
    },
    Pichu: {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        nfe: true
    },
    Cochignon: {
        types: ['Ice', 'Ground'],
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        weightkg: 55.8
    },
    Pomdepik: {
        types: ['Bug'],
        bs: { hp: 50, at: 65, df: 90, sa: 35, sd: 35, sp: 15 },
        weightkg: 7.2,
        nfe: true
    },
    Tarpaud: {
        types: ['Water'],
        bs: { hp: 90, at: 75, df: 75, sa: 90, sd: 100, sp: 70 },
        weightkg: 33.9
    },
    Porygon2: {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 90, sa: 105, sd: 95, sp: 60 },
        weightkg: 32.5,
        gender: 'N'
    },
    Ymphect: {
        types: ['Rock', 'Ground'],
        bs: { hp: 70, at: 84, df: 70, sa: 65, sd: 70, sp: 51 },
        weightkg: 152,
        nfe: true
    },
    Maraiste: {
        types: ['Water', 'Ground'],
        bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
        weightkg: 75
    },
    Feurisson: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        weightkg: 19,
        nfe: true
    },
    Qwilfish: {
        types: ['Water', 'Poison'],
        bs: { hp: 65, at: 95, df: 75, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9
    },
    Raikou: {
        types: ['Electric'],
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 115 },
        weightkg: 178,
        gender: 'N'
    },
    Rémoraid: {
        types: ['Water'],
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        weightkg: 12,
        nfe: true
    },
    Cizayox: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        weightkg: 118
    },
    Fouinette: {
        types: ['Normal'],
        bs: { hp: 35, at: 46, df: 34, sa: 35, sd: 45, sp: 20 },
        weightkg: 6,
        nfe: true
    },
    Caratroc: {
        types: ['Bug', 'Rock'],
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        weightkg: 20.5
    },
    Airmure: {
        types: ['Steel', 'Flying'],
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        weightkg: 50.5
    },
    Floravol: {
        types: ['Grass', 'Flying'],
        bs: { hp: 55, at: 45, df: 50, sa: 45, sd: 65, sp: 80 },
        weightkg: 1,
        nfe: true
    },
    Roigada: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        weightkg: 79.5
    },
    Limagma: {
        types: ['Fire'],
        bs: { hp: 40, at: 40, df: 40, sa: 70, sd: 40, sp: 20 },
        weightkg: 35,
        nfe: true
    },
    Queulorior: { types: ['Normal'], bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 }, weightkg: 58 },
    Lippouti: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        weightkg: 6,
        nfe: true
    },
    Farfuret: {
        types: ['Dark', 'Ice'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 28
    },
    Snubbull: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 40, sd: 40, sp: 30 },
        weightkg: 7.8,
        nfe: true
    },
    Mimigal: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        weightkg: 8.5,
        nfe: true
    },
    Cerfrousse: {
        types: ['Normal'],
        bs: { hp: 73, at: 95, df: 62, sa: 85, sd: 65, sp: 85 },
        weightkg: 71.2
    },
    Steelix: {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 85, df: 200, sa: 55, sd: 65, sp: 30 },
        weightkg: 400
    },
    Simularbre: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 30, sd: 65, sp: 30 },
        weightkg: 38
    },
    Suicune: {
        types: ['Water'],
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 115, sp: 85 },
        weightkg: 187,
        gender: 'N'
    },
    Héliatronc: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 },
        weightkg: 8.5
    },
    Tournegrin: {
        types: ['Grass'],
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        weightkg: 1.8,
        nfe: true
    },
    Marcacrin: {
        types: ['Ice', 'Ground'],
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        weightkg: 6.5,
        nfe: true
    },
    Teddiursa: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 8.8,
        nfe: true
    },
    Togepi: {
        types: ['Normal'],
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        weightkg: 1.5,
        nfe: true
    },
    Togetic: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 40, df: 85, sa: 80, sd: 105, sp: 40 },
        weightkg: 3.2
    },
    Kaiminus: {
        types: ['Water'],
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        weightkg: 9.5,
        nfe: true
    },
    Typhlosion: {
        types: ['Fire'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 79.5
    },
    Tyranocif: {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 134, df: 110, sa: 95, sd: 100, sp: 61 },
        weightkg: 202
    },
    Debugant: {
        types: ['Fighting'],
        bs: { hp: 35, at: 35, df: 35, sa: 35, sd: 35, sp: 35 },
        weightkg: 21,
        nfe: true
    },
    Noctali: { types: ['Dark'], bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 }, weightkg: 27 },
    Zarbi: {
        types: ['Psychic'],
        bs: { hp: 48, at: 72, df: 48, sa: 72, sd: 48, sp: 48 },
        weightkg: 5,
        gender: 'N'
    },
    Ursaring: {
        types: ['Normal'],
        bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 55 },
        weightkg: 125.8
    },
    Qulbutoké: {
        types: ['Psychic'],
        bs: { hp: 190, at: 33, df: 58, sa: 33, sd: 58, sp: 33 },
        weightkg: 28.5
    },
    Axoloto: {
        types: ['Water', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        nfe: true
    },
    Xatu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 65, at: 75, df: 70, sa: 95, sd: 70, sp: 95 },
        weightkg: 15
    },
    Yanma: {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 },
        weightkg: 38
    }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Abra: { abilities: { 0: 'Synchronize' } },
    Ptéra: { abilities: { 0: 'Rock Head' } },
    Alakazam: { abilities: { 0: 'Synchronize' } },
    Arbok: { abilities: { 0: 'Intimidate' } },
    Arcanin: { abilities: { 0: 'Intimidate' } },
    Artikodin: { abilities: { 0: 'Pressure' } },
    Dardargnan: { abilities: { 0: 'Swarm' } },
    Chétiflor: { abilities: { 0: 'Chlorophyll' } },
    Tortank: { abilities: { 0: 'Torrent' } },
    Bulbizarre: { abilities: { 0: 'Overgrow' } },
    Papilusion: { abilities: { 0: 'Compound Eyes' } },
    Chenipan: { abilities: { 0: 'Shield Dust' } },
    Leveinard: { abilities: { 0: 'Natural Cure' } },
    Dracaufeu: { abilities: { 0: 'Blaze' } },
    Salamèche: { abilities: { 0: 'Blaze' } },
    Reptincel: { abilities: { 0: 'Blaze' } },
    Mélodelfe: { abilities: { 0: 'Cute Charm' } },
    Mélofée: { abilities: { 0: 'Cute Charm' } },
    Crustabri: { abilities: { 0: 'Shell Armor' } },
    Osselait: { abilities: { 0: 'Rock Head' } },
    Lamantine: { abilities: { 0: 'Thick Fat' } },
    Taupiqueur: { abilities: { 0: 'Sand Veil' } },
    Métamorph: { abilities: { 0: 'Limber' } },
    Dodrio: { abilities: { 0: 'Run Away' } },
    Doduo: { abilities: { 0: 'Run Away' } },
    Draco: { abilities: { 0: 'Shed Skin' } },
    Dracolosse: { abilities: { 0: 'Inner Focus' } },
    Minidraco: { abilities: { 0: 'Shed Skin' } },
    Soporifik: { abilities: { 0: 'Insomnia' } },
    Triopikeur: { abilities: { 0: 'Sand Veil' } },
    Évoli: { abilities: { 0: 'Run Away' } },
    Abo: { abilities: { 0: 'Intimidate' } },
    Élektek: { abilities: { 0: 'Static' } },
    Électrode: { abilities: { 0: 'Soundproof' } },
    Noeunoeuf: { abilities: { 0: 'Chlorophyll' } },
    Noadkoko: { abilities: { 0: 'Chlorophyll' } },
    'Canarticho': { abilities: { 0: 'Keen Eye' } },
    Rapasdepic: { abilities: { 0: 'Keen Eye' } },
    Pyroli: { abilities: { 0: 'Flash Fire' } },
    Fantominus: { abilities: { 0: 'Levitate' } },
    Ectoplasma: { abilities: { 0: 'Levitate' } },
    Racaillou: { abilities: { 0: 'Rock Head' } },
    Ortide: { abilities: { 0: 'Chlorophyll' } },
    Nosferalto: { abilities: { 0: 'Inner Focus' } },
    Poissirène: { abilities: { 0: 'Swift Swim' } },
    Akwakwak: { abilities: { 0: 'Damp' } },
    Grolem: { abilities: { 0: 'Rock Head' } },
    Gravalanch: { abilities: { 0: 'Rock Head' } },
    Tadmorv: { abilities: { 0: 'Stench' } },
    Caninos: { abilities: { 0: 'Intimidate' } },
    Léviator: { abilities: { 0: 'Intimidate' } },
    Spectrum: { abilities: { 0: 'Levitate' } },
    Tygnon: { abilities: { 0: 'Keen Eye' } },
    Kicklee: { abilities: { 0: 'Limber' } },
    Hypotrempe: { abilities: { 0: 'Swift Swim' } },
    Hypnomademade: { abilities: { 0: 'Insomnia' } },
    Herbizarre: { abilities: { 0: 'Overgrow' } },
    Rondoudou: { abilities: { 0: 'Cute Charm' } },
    Voltali: { abilities: { 0: 'Volt Absorb' } },
    Lippoutou: { abilities: { 0: 'Oblivious' } },
    Kabuto: { abilities: { 0: 'Swift Swim' } },
    Kabutops: { abilities: { 0: 'Swift Swim' } },
    Kadabra: { abilities: { 0: 'Synchronize' } },
    Coconfort: { abilities: { 0: 'Shed Skin' } },
    Kangourex: { abilities: { 0: 'Early Bird' } },
    Krabboss: { abilities: { 0: 'Hyper Cutter' } },
    Smogo: { abilities: { 0: 'Levitate' } },
    Krabby: { abilities: { 0: 'Hyper Cutter' } },
    Lokhlass: { abilities: { 0: 'Water Absorb' } },
    Excelangue: { abilities: { 0: 'Own Tempo' } },
    Mackogneur: { abilities: { 0: 'Guts' } },
    Machoceur: { abilities: { 0: 'Guts' } },
    Machoc: { abilities: { 0: 'Guts' } },
    Magicarpe: { abilities: { 0: 'Swift Swim' } },
    Magmar: { abilities: { 0: 'Flame Body' } },
    Magnéti: { abilities: { 0: 'Magnet Pull' } },
    Magnéton: { abilities: { 0: 'Magnet Pull' } },
    Férosinge: { abilities: { 0: 'Vital Spirit' } },
    Ossatueur: { abilities: { 0: 'Rock Head' } },
    Miaouss: { abilities: { 0: 'Pickup' } },
    Chrysacier: { abilities: { 0: 'Shed Skin' } },
    Mew: { abilities: { 0: 'Synchronize' } },
    Mewtwo: { abilities: { 0: 'Pressure' } },
    Sulfura: { abilities: { 0: 'Pressure' } },
    'M. Mime': { abilities: { 0: 'Soundproof' } },
    Grotadmorv: { abilities: { 0: 'Stench' } },
    Nidoking: { abilities: { 0: 'Poison Point' } },
    Nidoqueen: { abilities: { 0: 'Poison Point' } },
    'Nidoran♀': { abilities: { 0: 'Poison Point' } },
    'Nidoran♂': { abilities: { 0: 'Poison Point' } },
    Nidorina: { abilities: { 0: 'Poison Point' } },
    Nidorino: { abilities: { 0: 'Poison Point' } },
    Feunard: { abilities: { 0: 'Flash Fire' } },
    Mystherbe: { abilities: { 0: 'Chlorophyll' } },
    Amonita: { abilities: { 0: 'Swift Swim' } },
    Amonistar: { abilities: { 0: 'Swift Swim' } },
    Onix: { abilities: { 0: 'Rock Head' } },
    Paras: { abilities: { 0: 'Effect Spore' } },
    Parasect: { abilities: { 0: 'Effect Spore' } },
    Persian: { abilities: { 0: 'Limber' } },
    Roucarnage: { abilities: { 0: 'Keen Eye' } },
    Roucoups: { abilities: { 0: 'Keen Eye' } },
    Roucool: { abilities: { 0: 'Keen Eye' } },
    Pikachu: { abilities: { 0: 'Static' } },
    Scarabrute: { abilities: { 0: 'Hyper Cutter' } },
    Ptitard: { abilities: { 0: 'Water Absorb' } },
    Têtarte: { abilities: { 0: 'Water Absorb' } },
    Tartard: { abilities: { 0: 'Water Absorb' } },
    Ponyta: { abilities: { 0: 'Run Away' } },
    Porygon: { abilities: { 0: 'Trace' } },
    'Primo-Kyogre': { abilities: { 0: 'Vital Spirit' } },
    Psykokwak: { abilities: { 0: 'Damp' } },
    Raichu: { abilities: { 0: 'Static' } },
    Galopa: { abilities: { 0: 'Run Away' } },
    Rattatac: { abilities: { 0: 'Run Away' } },
    Rattata: { abilities: { 0: 'Run Away' } },
    Rhinoféros: { abilities: { 0: 'Lightning Rod' } },
    Rhinocorne: { abilities: { 0: 'Lightning Rod' } },
    Sabelette: { abilities: { 0: 'Sand Veil' } },
    Sablaireau: { abilities: { 0: 'Sand Veil' } },
    Insécateur: { abilities: { 0: 'Swarm' } },
    Hypocéan: { abilities: { 0: 'Poison Point' } },
    Poissoroy: { abilities: { 0: 'Swift Swim' } },
    Otaria: { abilities: { 0: 'Thick Fat' } },
    Kokiyas: { abilities: { 0: 'Shell Armor' } },
    Flagadoss: { abilities: { 0: 'Oblivious' } },
    Ramoloss: { abilities: { 0: 'Oblivious' } },
    Ronflex: { abilities: { 0: 'Immunity' } },
    Piafabec: { abilities: { 0: 'Keen Eye' } },
    Carapuce: { abilities: { 0: 'Torrent' } },
    Staross: { abilities: { 0: 'Illuminate' } },
    Stari: { abilities: { 0: 'Illuminate' } },
    Saquedeneu: { abilities: { 0: 'Chlorophyll' } },
    Tauros: { abilities: { 0: 'Intimidate' } },
    Tentacool: { abilities: { 0: 'Clear Body' } },
    Tentacruel: { abilities: { 0: 'Clear Body' } },
    Aquali: { abilities: { 0: 'Water Absorb' } },
    Aéromite: { abilities: { 0: 'Shield Dust' } },
    Mimitoss: { abilities: { 0: 'Compound Eyes' } },
    Florizarre: { abilities: { 0: 'Overgrow' } },
    Empiflor: { abilities: { 0: 'Chlorophyll' } },
    Rafflesia: { abilities: { 0: 'Chlorophyll' } },
    Voltorbee: { abilities: { 0: 'Soundproof' } },
    Goupix: { abilities: { 0: 'Flash Fire' } },
    Carabaffe: { abilities: { 0: 'Torrent' } },
    Aspicot: { abilities: { 0: 'Shield Dust' } },
    Boustiflor: { abilities: { 0: 'Chlorophyll' } },
    Smogogo: { abilities: { 0: 'Levitate' } },
    Grodoudou: { abilities: { 0: 'Cute Charm' } },
    Électhor: { abilities: { 0: 'Pressure' } },
    Nosferapti: { abilities: { 0: 'Inner Focus' } },
    Capumain: { abilities: { 0: 'Run Away' } },
    Pharamp: { abilities: { 0: 'Static' } },
    Migalos: { abilities: { 0: 'Swarm' } },
    Azumarill: { abilities: { 0: 'Thick Fat' } },
    Macronium: { abilities: { 0: 'Overgrow' } },
    Joliflor: { abilities: { 0: 'Chlorophyll' } },
    Leuphorie: { abilities: { 0: 'Natural Cure' } },
    Celebi: { abilities: { 0: 'Natural Cure' } },
    Germignon: { abilities: { 0: 'Overgrow' } },
    Loupio: { abilities: { 0: 'Volt Absorb' } },
    Mélo: { abilities: { 0: 'Cute Charm' } },
    Corayon: { abilities: { 0: 'Hustle' } },
    Nostenfer: { abilities: { 0: 'Inner Focus' } },
    Crocrodil: { abilities: { 0: 'Torrent' } },
    Héricendre: { abilities: { 0: 'Blaze' } },
    Cadoizo: { abilities: { 0: 'Vital Spirit' } },
    Donphan: { abilities: { 0: 'Sturdy' } },
    Insolourdo: { abilities: { 0: 'Serene Grace' } },
    Élekid: { abilities: { 0: 'Static' } },
    Entei: { abilities: { 0: 'Pressure' } },
    Mentali: { abilities: { 0: 'Synchronize' } },
    Aligatueur: { abilities: { 0: 'Torrent' } },
    Lainergie: { abilities: { 0: 'Static' } },
    Foretress: { abilities: { 0: 'Sturdy' } },
    Fouinar: { abilities: { 0: 'Run Away' } },
    Girafarig: { abilities: { 0: 'Inner Focus' } },
    Scorplane: { abilities: { 0: 'Hyper Cutter' } },
    Granbull: { abilities: { 0: 'Intimidate' } },
    Scarhino: { abilities: { 0: 'Swarm' } },
    Kapoera: { abilities: { 0: 'Intimidate' } },
    'Ho-Oh': { abilities: { 0: 'Pressure' } },
    Hoothoot: { abilities: { 0: 'Insomnia' } },
    Granivol: { abilities: { 0: 'Chlorophyll' } },
    Démolosse: { abilities: { 0: 'Early Bird' } },
    Malosse: { abilities: { 0: 'Early Bird' } },
    Toudoudou: { abilities: { 0: 'Cute Charm' } },
    Cotovol: { abilities: { 0: 'Chlorophyll' } },
    Hyporoi: { abilities: { 0: 'Swift Swim' } },
    Lanturn: { abilities: { 0: 'Volt Absorb' } },
    Embrylex: { abilities: { 0: 'Guts' } },
    Coxyclaque: { abilities: { 0: 'Swarm' } },
    Coxy: { abilities: { 0: 'Swarm' } },
    Lugia: { abilities: { 0: 'Pressure' } },
    Magby: { abilities: { 0: 'Flame Body' } },
    Volcaropod: { abilities: { 0: 'Magma Armor' } },
    Démanta: { abilities: { 0: 'Swift Swim' } },
    Wattouat: { abilities: { 0: 'Static' } },
    Marill: { abilities: { 0: 'Thick Fat' } },
    Méganium: { abilities: { 0: 'Overgrow' } },
    Écrémeuh: { abilities: { 0: 'Thick Fat' } },
    Feuforêve: { abilities: { 0: 'Levitate' } },
    Cornèbre: { abilities: { 0: 'Insomnia' } },
    Natu: { abilities: { 0: 'Synchronize' } },
    Noarfang: { abilities: { 0: 'Insomnia' } },
    Octillery: { abilities: { 0: 'Suction Cups' } },
    Phanpy: { abilities: { 0: 'Pickup' } },
    Pichu: { abilities: { 0: 'Static' } },
    Cochignon: { abilities: { 0: 'Oblivious' } },
    Pomdepik: { abilities: { 0: 'Sturdy' } },
    Tarpaud: { abilities: { 0: 'Water Absorb' } },
    Porygon2: { abilities: { 0: 'Trace' } },
    Ymphect: { abilities: { 0: 'Shed Skin' } },
    Maraiste: { abilities: { 0: 'Damp' } },
    Feurisson: { abilities: { 0: 'Blaze' } },
    Qwilfish: { abilities: { 0: 'Poison Point' } },
    Raikou: { abilities: { 0: 'Pressure' } },
    Rémoraid: { abilities: { 0: 'Hustle' } },
    Cizayox: { abilities: { 0: 'Swarm' } },
    Fouinette: { abilities: { 0: 'Run Away' } },
    Caratroc: { abilities: { 0: 'Sturdy' } },
    Airmure: { abilities: { 0: 'Keen Eye' } },
    Floravol: { abilities: { 0: 'Chlorophyll' } },
    Roigada: { abilities: { 0: 'Oblivious' } },
    Limagma: { abilities: { 0: 'Magma Armor' } },
    Queulorior: { abilities: { 0: 'Own Tempo' } },
    Lippouti: { abilities: { 0: 'Oblivious' } },
    Farfuret: { abilities: { 0: 'Inner Focus' } },
    Snubbull: { abilities: { 0: 'Intimidate' } },
    Mimigal: { abilities: { 0: 'Swarm' } },
    Cerfrousse: { abilities: { 0: 'Intimidate' } },
    Steelix: { abilities: { 0: 'Rock Head' } },
    Simularbre: { abilities: { 0: 'Sturdy' } },
    Suicune: { abilities: { 0: 'Pressure' } },
    Héliatronc: { abilities: { 0: 'Chlorophyll' } },
    Tournegrin: { abilities: { 0: 'Chlorophyll' } },
    Marcacrin: { abilities: { 0: 'Oblivious' } },
    Teddiursa: { abilities: { 0: 'Pickup' } },
    Togepi: { abilities: { 0: 'Hustle' } },
    Togetic: { abilities: { 0: 'Hustle' } },
    Kaiminus: { abilities: { 0: 'Torrent' } },
    Typhlosion: { abilities: { 0: 'Blaze' } },
    Tyranocif: { abilities: { 0: 'Sand Stream' } },
    Debugant: { abilities: { 0: 'Guts' } },
    Noctali: { abilities: { 0: 'Synchronize' } },
    Zarbi: { abilities: { 0: 'Levitate' } },
    Ursaring: { abilities: { 0: 'Guts' } },
    Qulbutoké: { abilities: { 0: 'Shadow Tag' } },
    Axoloto: { abilities: { 0: 'Damp' } },
    Xatu: { abilities: { 0: 'Synchronize' } },
    Yanma: { abilities: { 0: 'Speed Boost' } },
    Absol: {
        types: ['Dark'],
        bs: { hp: 65, at: 130, df: 60, sa: 75, sd: 60, sp: 75 },
        weightkg: 47,
        abilities: { 0: 'Pressure' }
    },
    Galeking: {
        types: ['Steel', 'Rock'],
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        weightkg: 360,
        abilities: { 0: 'Sturdy' }
    },
    Altaria: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 75, at: 70, df: 90, sa: 70, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Natural Cure' }
    },
    Anorith: {
        types: ['Rock', 'Bug'],
        bs: { hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Armaldo: {
        types: ['Rock', 'Bug'],
        bs: { hp: 75, at: 125, df: 100, sa: 70, sd: 80, sp: 45 },
        weightkg: 68.2,
        abilities: { 0: 'Battle Armor' }
    },
    Galekid: {
        types: ['Steel', 'Rock'],
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        weightkg: 60,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Azurill: {
        types: ['Normal'],
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Draby: {
        types: ['Dragon'],
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        weightkg: 42.1,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Balbuto: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 40, at: 40, df: 55, sa: 40, sd: 70, sp: 55 },
        weightkg: 21.5,
        abilities: { 0: 'Levitate' },
        nfe: true,
        gender: 'N'
    },
    Branette: {
        types: ['Ghost'],
        bs: { hp: 64, at: 115, df: 65, sa: 83, sd: 63, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Insomnia' }
    },
    Barloche: {
        types: ['Water', 'Ground'],
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Charmillon: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 70, df: 50, sa: 90, sd: 50, sp: 65 },
        weightkg: 28.4,
        abilities: { 0: 'Swarm' }
    },
    Terhal: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        weightkg: 95.2,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Braségali: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Blaze' }
    },
    Chapignon: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        weightkg: 39.2,
        abilities: { 0: 'Effect Spore' }
    },
    Cacnea: {
        types: ['Grass'],
        bs: { hp: 50, at: 85, df: 40, sa: 85, sd: 40, sp: 35 },
        weightkg: 51.3,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Cacturne: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 55 },
        weightkg: 77.4,
        abilities: { 0: 'Sand Veil' }
    },
    Camérupt: {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        weightkg: 220,
        abilities: { 0: 'Magma Armor' }
    },
    Carvanha: {
        types: ['Water', 'Dark'],
        bs: { hp: 45, at: 90, df: 20, sa: 65, sd: 20, sp: 65 },
        weightkg: 20.8,
        nfe: true,
        abilities: { 0: 'Rough Skin' }
    },
    Blindalys: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 11.5,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Morphéo: {
        types: ['Normal'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        otherFormes: ['Morphéo-Pluie', 'Morphéo-Blizzard', 'Morphéo-Solaire']
    },
    'Morphéo-Pluie': {
        types: ['Water'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Morphéo'
    },
    'Morphéo-Blizzard': {
        types: ['Ice'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Morphéo'
    },
    'Morphéo-Solaire': {
        types: ['Fire'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Morphéo'
    },
    Éoko: {
        types: ['Psychic'],
        bs: { hp: 65, at: 50, df: 70, sa: 95, sd: 80, sp: 65 },
        weightkg: 1,
        abilities: { 0: 'Levitate' }
    },
    Coquiperl: {
        types: ['Water'],
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        weightkg: 52.5,
        nfe: true,
        abilities: { 0: 'Shell Armor' }
    },
    Kaorine: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 60, at: 70, df: 105, sa: 70, sd: 120, sp: 75 },
        weightkg: 108,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Galifeu: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Écrapince: {
        types: ['Water'],
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Vacilys: {
        types: ['Rock', 'Grass'],
        bs: { hp: 86, at: 81, df: 97, sa: 81, sd: 107, sp: 43 },
        weightkg: 60.4,
        abilities: { 0: 'Suction Cups' }
    },
    Colhomard: {
        types: ['Water', 'Dark'],
        bs: { hp: 63, at: 120, df: 85, sa: 90, sd: 55, sp: 55 },
        weightkg: 32.8,
        abilities: { 0: 'Hyper Cutter' }
    },
    Delcatty: {
        types: ['Normal'],
        bs: { hp: 70, at: 65, df: 65, sa: 55, sd: 55, sp: 70 },
        weightkg: 32.6,
        abilities: { 0: 'Cute Charm' }
    },
    Deoxys: {
        types: ['Psychic'],
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Deoxys-Attaque', 'Deoxys-Défense', 'Deoxys-Vitesse']
    },
    'Deoxys-Attaque': {
        types: ['Psychic'],
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Défense': {
        types: ['Psychic'],
        bs: { hp: 50, at: 70, df: 160, sa: 70, sd: 160, sp: 90 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Vitesse': {
        types: ['Psychic'],
        bs: { hp: 50, at: 95, df: 90, sa: 95, sd: 90, sp: 180 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    Téraclope: {
        types: ['Ghost'],
        bs: { hp: 40, at: 70, df: 130, sa: 60, sd: 130, sp: 25 },
        weightkg: 30.6,
        abilities: { 0: 'Pressure' }
    },
    Skelénox: {
        types: ['Ghost'],
        bs: { hp: 20, at: 40, df: 90, sa: 30, sd: 90, sp: 25 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Levitate' }
    },
    Papinox: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 50, df: 70, sa: 50, sd: 90, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Shield Dust' }
    },
    Dynavolt: {
        types: ['Electric'],
        bs: { hp: 40, at: 45, df: 40, sa: 65, sd: 40, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Static' }
    },
    Brouhabam: {
        types: ['Normal'],
        bs: { hp: 104, at: 91, df: 63, sa: 91, sd: 63, sp: 68 },
        weightkg: 84,
        abilities: { 0: 'Soundproof' }
    },
    Barpau: {
        types: ['Water'],
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        weightkg: 7.4,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Libégon: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 80, at: 100, df: 80, sa: 80, sd: 80, sp: 100 },
        weightkg: 82,
        abilities: { 0: 'Levitate' }
    },
    Gardevoir: {
        types: ['Psychic'],
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        weightkg: 48.4,
        abilities: { 0: 'Synchronize' }
    },
    Oniglali: {
        types: ['Ice'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 256.5,
        abilities: { 0: 'Inner Focus' }
    },
    Rosabyss: {
        types: ['Water'],
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        weightkg: 22.6,
        abilities: { 0: 'Swift Swim' }
    },
    Groudon: {
        types: ['Ground'],
        bs: { hp: 100, at: 150, df: 140, sa: 100, sd: 90, sp: 90 },
        weightkg: 950,
        abilities: { 0: 'Drought' },
        gender: 'N'
    },
    Massko: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        weightkg: 21.6,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Groret: {
        types: ['Psychic'],
        bs: { hp: 80, at: 45, df: 65, sa: 90, sd: 110, sp: 80 },
        weightkg: 71.5,
        abilities: { 0: 'Thick Fat' }
    },
    Gloupti: {
        types: ['Poison'],
        bs: { hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40 },
        weightkg: 10.3,
        nfe: true,
        abilities: { 0: 'Liquid Ooze' }
    },
    Hariyama: {
        types: ['Fighting'],
        bs: { hp: 144, at: 120, df: 60, sa: 40, sd: 60, sp: 50 },
        weightkg: 253.8,
        abilities: { 0: 'Thick Fat' }
    },
    Serpang: {
        types: ['Water'],
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        weightkg: 27,
        abilities: { 0: 'Swift Swim' }
    },
    Lumivole: {
        types: ['Bug'],
        bs: { hp: 65, at: 47, df: 55, sa: 73, sd: 75, sp: 85 },
        abilities: { 0: 'Oblivious' },
        weightkg: 17.7
    },
    Jirachi: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.1,
        abilities: { 0: 'Serene Grace' },
        gender: 'N'
    },
    Kecleon: {
        types: ['Normal'],
        bs: { hp: 60, at: 90, df: 70, sa: 60, sd: 120, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Color Change' }
    },
    Kirlia: {
        types: ['Psychic'],
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Kyogre: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 90, sa: 150, sd: 140, sp: 90 },
        weightkg: 352,
        abilities: { 0: 'Drizzle' },
        gender: 'N'
    },
    Galegon: {
        types: ['Steel', 'Rock'],
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        weightkg: 120,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Latias: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        weightkg: 40,
        abilities: { 0: 'Levitate' }
    },
    Latios: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        weightkg: 60,
        abilities: { 0: 'Levitate' }
    },
    Lilia: {
        types: ['Rock', 'Grass'],
        bs: { hp: 66, at: 41, df: 77, sa: 61, sd: 87, sp: 23 },
        weightkg: 23.8,
        nfe: true,
        abilities: { 0: 'Suction Cups' }
    },
    Linéon: {
        types: ['Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' }
    },
    Lombre: {
        types: ['Water', 'Grass'],
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        weightkg: 32.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Nénupiot: {
        types: ['Water', 'Grass'],
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        weightkg: 2.6,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Ramboum: {
        types: ['Normal'],
        bs: { hp: 84, at: 71, df: 43, sa: 71, sd: 43, sp: 48 },
        weightkg: 40.5,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Ludicolo: {
        types: ['Water', 'Grass'],
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        weightkg: 55,
        abilities: { 0: 'Swift Swim' }
    },
    Séléroc: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 85, sp: 70 },
        weightkg: 168,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Lovdisc: {
        types: ['Water'],
        bs: { hp: 43, at: 30, df: 55, sa: 40, sd: 65, sp: 97 },
        weightkg: 8.7,
        abilities: { 0: 'Swift Swim' }
    },
    Makuhita: {
        types: ['Fighting'],
        bs: { hp: 72, at: 60, df: 30, sa: 20, sd: 30, sp: 25 },
        weightkg: 86.4,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Élecsprint: {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 60, sa: 105, sd: 60, sp: 105 },
        weightkg: 40.2,
        abilities: { 0: 'Static' }
    },
    Flobio: {
        types: ['Water', 'Ground'],
        bs: { hp: 70, at: 85, df: 70, sa: 60, sd: 70, sp: 50 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Maskadra: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 60, df: 62, sa: 80, sd: 82, sp: 60 },
        weightkg: 3.6,
        abilities: { 0: 'Intimidate' }
    },
    Mysdibule: {
        types: ['Steel'],
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        weightkg: 11.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Charmina: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' }
    },
    Méditikka: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        weightkg: 11.2,
        nfe: true,
        abilities: { 0: 'Pure Power' }
    },
    Métalosse: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        weightkg: 550,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Métang: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        weightkg: 202.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Grahyèna: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 70 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Milobellus: {
        types: ['Water'],
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        weightkg: 162,
        abilities: { 0: 'Marvel Scale' }
    },
    Négapi: {
        types: ['Electric'],
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Minus' }
    },
    Gobou: {
        types: ['Water'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 7.6,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Ningale: {
        types: ['Bug', 'Ground'],
        bs: { hp: 31, at: 45, df: 90, sa: 30, sd: 30, sp: 40 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Ninjask: {
        types: ['Bug', 'Flying'],
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 160 },
        weightkg: 12,
        abilities: { 0: 'Speed Boost' }
    },
    Tarinor: {
        types: ['Rock'],
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30 },
        weightkg: 97,
        abilities: { 0: 'Sturdy' }
    },
    Chamallot: {
        types: ['Fire', 'Ground'],
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 24,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Pifeuil: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Bekipan: {
        types: ['Water', 'Flying'],
        bs: { hp: 60, at: 50, df: 100, sa: 85, sd: 70, sp: 65 },
        weightkg: 28,
        abilities: { 0: 'Keen Eye' }
    },
    Posipi: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Plus' }
    },
    Medhyèna: {
        types: ['Dark'],
        bs: { hp: 35, at: 55, df: 35, sa: 30, sd: 30, sp: 35 },
        weightkg: 13.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Tarsal: {
        types: ['Psychic'],
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Rayquaza: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 150, df: 90, sa: 150, sd: 90, sp: 95 },
        weightkg: 206.5,
        abilities: { 0: 'Air Lock' },
        gender: 'N'
    },
    Regice: {
        types: ['Ice'],
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        weightkg: 175,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Regirock: {
        types: ['Rock'],
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        weightkg: 230,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Registeel: {
        types: ['Steel'],
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        weightkg: 205,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Relicanth: {
        types: ['Water', 'Rock'],
        bs: { hp: 100, at: 90, df: 130, sa: 45, sd: 65, sp: 55 },
        weightkg: 23.4,
        abilities: { 0: 'Swift Swim' }
    },
    Rosélia: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        weightkg: 2,
        abilities: { 0: 'Natural Cure' }
    },
    Ténéfix: {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        weightkg: 11,
        abilities: { 0: 'Keen Eye' }
    },
    Drattak: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 135, df: 80, sa: 110, sd: 80, sp: 100 },
        weightkg: 102.6,
        abilities: { 0: 'Intimidate' }
    },
    Jungko: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        weightkg: 52.2,
        abilities: { 0: 'Overgrow' }
    },
    Phogleur: {
        types: ['Ice', 'Water'],
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        weightkg: 87.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Grainipiot: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Séviper: {
        types: ['Poison'],
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 65 },
        weightkg: 52.5,
        abilities: { 0: 'Shed Skin' }
    },
    Sharpedo: {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 120, df: 40, sa: 95, sd: 40, sp: 95 },
        weightkg: 88.8,
        abilities: { 0: 'Rough Skin' }
    },
    Munja: {
        types: ['Bug', 'Ghost'],
        bs: { hp: 1, at: 90, df: 45, sa: 30, sd: 30, sp: 40 },
        weightkg: 1.2,
        abilities: { 0: 'Wonder Guard' },
        gender: 'N'
    },
    Drackhaus: {
        types: ['Dragon'],
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        weightkg: 110.5,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Tengalice: {
        types: ['Grass', 'Dark'],
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        weightkg: 59.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Balignon: {
        types: ['Grass'],
        bs: { hp: 60, at: 40, df: 60, sa: 40, sd: 60, sp: 35 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Polichombr: {
        types: ['Ghost'],
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 45 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Insomnia' }
    },
    Armulys: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 10,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Skitty: {
        types: ['Normal'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 35, sp: 50 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Monaflèmit: {
        types: ['Normal'],
        bs: { hp: 150, at: 160, df: 100, sa: 95, sd: 65, sp: 100 },
        weightkg: 130.5,
        abilities: { 0: 'Truant' }
    },
    Parecool: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        weightkg: 24,
        abilities: { 0: 'Truant' },
        nfe: true
    },
    Stalgamin: {
        types: ['Ice'],
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        weightkg: 16.8,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Solaroc: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 95, df: 85, sa: 55, sd: 65, sp: 70 },
        weightkg: 154,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Obalie: {
        types: ['Ice', 'Water'],
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        weightkg: 39.5,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Spinda: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 60, sd: 60, sp: 60 },
        weightkg: 5,
        abilities: { 0: 'Own Tempo' }
    },
    Spoink: {
        types: ['Psychic'],
        bs: { hp: 60, at: 25, df: 35, sa: 70, sd: 80, sp: 60 },
        weightkg: 30.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Arakdo: {
        types: ['Bug', 'Water'],
        bs: { hp: 40, at: 30, df: 32, sa: 50, sd: 52, sp: 65 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Tylton: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Avaltout: {
        types: ['Poison'],
        bs: { hp: 100, at: 73, df: 83, sa: 73, sd: 83, sp: 55 },
        weightkg: 80,
        abilities: { 0: 'Liquid Ooze' }
    },
    Laggron: {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60 },
        weightkg: 81.9,
        abilities: { 0: 'Torrent' }
    },
    Hélédelle: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 85, df: 60, sa: 50, sd: 50, sp: 125 },
        weightkg: 19.8,
        abilities: { 0: 'Guts' }
    },
    Nirondelle: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Poussifeu: {
        types: ['Fire'],
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Chartor: {
        types: ['Fire'],
        bs: { hp: 70, at: 85, df: 140, sa: 85, sd: 70, sp: 20 },
        weightkg: 80.4,
        abilities: { 0: 'White Smoke' }
    },
    Kraknoix: {
        types: ['Ground'],
        bs: { hp: 45, at: 100, df: 45, sa: 45, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Arcko: {
        types: ['Grass'],
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Tropius: {
        types: ['Grass', 'Flying'],
        bs: { hp: 99, at: 68, df: 83, sa: 72, sd: 87, sp: 51 },
        weightkg: 100,
        abilities: { 0: 'Chlorophyll' }
    },
    Vibraninf: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 70 },
        weightkg: 15.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Vigoroth: {
        types: ['Normal'],
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        weightkg: 46.5,
        abilities: { 0: 'Vital Spirit' },
        nfe: true
    },
    Muciole: {
        types: ['Bug'],
        bs: { hp: 65, at: 73, df: 55, sa: 47, sd: 75, sp: 85 },
        weightkg: 17.7,
        abilities: { 0: 'Illuminate' }
    },
    Wailmer: {
        types: ['Water'],
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        weightkg: 130,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Wailord: {
        types: ['Water'],
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        weightkg: 398,
        abilities: { 0: 'Water Veil' }
    },
    Kaimorse: {
        types: ['Ice', 'Water'],
        bs: { hp: 110, at: 80, df: 90, sa: 95, sd: 90, sp: 65 },
        weightkg: 150.6,
        abilities: { 0: 'Thick Fat' }
    },
    Barbicha: {
        types: ['Water', 'Ground'],
        bs: { hp: 110, at: 78, df: 73, sa: 76, sd: 71, sp: 60 },
        weightkg: 23.6,
        abilities: { 0: 'Oblivious' }
    },
    Chuchmur: {
        types: ['Normal'],
        bs: { hp: 64, at: 51, df: 23, sa: 51, sd: 23, sp: 28 },
        weightkg: 16.3,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Goélise: {
        types: ['Water', 'Flying'],
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Chenipotte: {
        types: ['Bug'],
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        weightkg: 3.6,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Okéoké: {
        types: ['Psychic'],
        bs: { hp: 95, at: 23, df: 48, sa: 23, sd: 48, sp: 23 },
        weightkg: 14,
        nfe: true,
        abilities: { 0: 'Shadow Tag' }
    },
    Mangriff: {
        types: ['Normal'],
        bs: { hp: 73, at: 115, df: 60, sa: 60, sd: 60, sp: 90 },
        weightkg: 40.3,
        abilities: { 0: 'Immunity' }
    },
    Zigzaton: {
        types: ['Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Capumain: { nfe: true },
    Téraclope: { nfe: true },
    Élektek: { nfe: true },
    Scorplane: { nfe: true },
    Excelangue: { nfe: true },
    Magmar: { nfe: true },
    Magnéton: { nfe: true },
    Feuforêve: { nfe: true },
    Cornèbre: { nfe: true },
    Tarinor: { nfe: true },
    Cochignon: { nfe: true },
    Pichu: { otherFormes: ['Pichu-Troizépi'] },
    Porygon2: { nfe: true },
    Rhinoféros: { nfe: true },
    Rosélia: { nfe: true },
    Farfuret: { nfe: true },
    Saquedeneu: { nfe: true },
    Togetic: { nfe: true },
    Yanma: { nfe: true },
    Blizzaroi: {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 92, df: 75, sa: 92, sd: 85, sp: 60 },
        weightkg: 135.5,
        abilities: { 0: 'Snow Warning' }
    },
    Capidextre: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        weightkg: 20.3,
        abilities: { 0: 'Technician' }
    },
    Arceus: {
        types: ['Normal'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        otherFormes: [
            'Arceus-Insecte',
            'Arceus-Ténèbres',
            'Arceus-Dragon',
            'Arceus-Électrik',
            'Arceus-Combat',
            'Arceus-Feu',
            'Arceus-Vol',
            'Arceus-Spectre',
            'Arceus-Plante',
            'Arceus-Sol',
            'Arceus-Glace',
            'Arceus-Poison',
            'Arceus-Psy',
            'Arceus-Roche',
            'Arceus-Acier',
            'Arceus-Eau',
        ]
    },
    'Arceus-Insecte': {
        types: ['Bug'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ténèbres': {
        types: ['Dark'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dragon': {
        types: ['Dragon'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Électrik': {
        types: ['Electric'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Combat': {
        types: ['Fighting'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Feu': {
        types: ['Fire'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Vol': {
        types: ['Flying'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Spectre': {
        types: ['Ghost'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Plante': {
        types: ['Grass'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Sol': {
        types: ['Ground'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Glace': {
        types: ['Ice'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Poison': {
        types: ['Poison'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Psy': {
        types: ['Psychic'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Roche': {
        types: ['Rock'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Acier': {
        types: ['Steel'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Eau': {
        types: ['Water'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    Arghonaut: {
        types: ['Water', 'Fighting'],
        bs: { hp: 105, at: 110, df: 95, sa: 70, sd: 100, sp: 75 },
        weightkg: 151,
        abilities: { 0: 'Unaware' }
    },
    Créfadet: {
        types: ['Psychic'],
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Bastiodon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 52, df: 168, sa: 47, sd: 138, sp: 30 },
        weightkg: 149.5,
        abilities: { 0: 'Sturdy' }
    },
    Castorno: {
        types: ['Normal', 'Water'],
        bs: { hp: 79, at: 85, df: 60, sa: 55, sd: 60, sp: 71 },
        weightkg: 31.5,
        abilities: { 0: 'Simple' }
    },
    Keunotor: {
        types: ['Normal'],
        bs: { hp: 59, at: 45, df: 40, sa: 35, sd: 40, sp: 31 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Simple' }
    },
    Manzaï: {
        types: ['Rock'],
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Breezi: {
        types: ['Poison', 'Flying'],
        bs: { hp: 50, at: 46, df: 69, sa: 60, sd: 50, sp: 75 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Unburden' }
    },
    Archéodong: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 67, at: 89, df: 116, sa: 79, sd: 116, sp: 33 },
        weightkg: 187,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Archéomire: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23 },
        weightkg: 60.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Rozbouton: {
        types: ['Grass', 'Poison'],
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Mustébouée: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 35, sa: 60, sd: 30, sp: 85 },
        weightkg: 29.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Laporeille: {
        types: ['Normal'],
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Cheniti: {
        types: ['Bug'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 },
        weightkg: 3.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Vortente: {
        types: ['Grass'],
        bs: { hp: 74, at: 100, df: 72, sa: 90, sd: 72, sp: 46 },
        weightkg: 27,
        abilities: { 0: 'Levitate' }
    },
    Pijako: {
        types: ['Normal', 'Flying'],
        bs: { hp: 76, at: 65, df: 45, sa: 92, sd: 42, sp: 91 },
        weightkg: 1.9,
        abilities: { 0: 'Keen Eye' }
    },
    Ceriflor: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        otherFormes: ['Ceriflor-Sunshine']
    },
    'Ceriflor-Sunshine': {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        baseSpecies: 'Ceriflor'
    },
    Ceribou: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 45, sa: 62, sd: 53, sp: 35 },
        weightkg: 3.3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Ouisticram: {
        types: ['Fire'],
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        weightkg: 6.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Korillon: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 65, sd: 50, sp: 45 },
        weightkg: 0.6,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Colossoil: {
        types: ['Ground', 'Dark'],
        bs: { hp: 133, at: 122, df: 72, sa: 71, sd: 72, sp: 95 },
        weightkg: 683.6,
        abilities: { 0: 'Rebound' }
    },
    Apitrini: {
        types: ['Bug', 'Flying'],
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Kranidos: {
        types: ['Rock'],
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        weightkg: 31.5,
        nfe: true,
        abilities: { 0: 'Mold Breaker' }
    },
    Cresselia: {
        types: ['Psychic'],
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 },
        weightkg: 85.6,
        abilities: { 0: 'Levitate' }
    },
    Cradopaud: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Cyclohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 108, at: 60, df: 118, sa: 112, sd: 70, sp: 80 },
        weightkg: 59,
        abilities: { 0: 'Shield Dust' }
    },
    Darkrai: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        weightkg: 50.5,
        abilities: { 0: 'Bad Dreams' },
        gender: 'N'
    },
    Dialga: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 120, df: 120, sa: 150, sd: 100, sp: 90 },
        weightkg: 683,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Dorsoil: {
        types: ['Ground'],
        bs: { hp: 103, at: 72, df: 52, sa: 61, sd: 52, sp: 65 },
        weightkg: 145,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Drascore: {
        types: ['Poison', 'Dark'],
        bs: { hp: 70, at: 90, df: 110, sa: 60, sd: 75, sp: 95 },
        weightkg: 61.5,
        abilities: { 0: 'Battle Armor' }
    },
    Grodrive: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        weightkg: 15,
        abilities: { 0: 'Aftermath' }
    },
    Baudrive: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Aftermath' }
    },
    Duohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 88, at: 40, df: 103, sa: 77, sd: 60, sp: 60 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Noctunoir: {
        types: ['Ghost'],
        bs: { hp: 45, at: 100, df: 135, sa: 65, sd: 135, sp: 45 },
        weightkg: 106.6,
        abilities: { 0: 'Pressure' }
    },
    Élekable: {
        types: ['Electric'],
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        weightkg: 138.6,
        abilities: { 0: 'Motor Drive' }
    },
    Embirch: {
        types: ['Fire', 'Grass'],
        bs: { hp: 60, at: 40, df: 55, sa: 65, sd: 40, sp: 60 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Reckless' }
    },
    Pingoléon: {
        types: ['Water', 'Steel'],
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        weightkg: 84.5,
        abilities: { 0: 'Torrent' }
    },
    Fidgit: {
        types: ['Poison', 'Ground'],
        bs: { hp: 95, at: 76, df: 109, sa: 90, sd: 80, sp: 105 },
        weightkg: 53,
        abilities: { 0: 'Persistent' }
    },
    Écayon: {
        types: ['Water'],
        bs: { hp: 49, at: 49, df: 56, sa: 49, sd: 61, sp: 66 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flarelm: {
        types: ['Fire', 'Grass'],
        bs: { hp: 90, at: 50, df: 95, sa: 75, sd: 70, sp: 40 },
        weightkg: 73,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Mustéflott: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 55, sa: 85, sd: 50, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Swift Swim' }
    },
    Momartik: {
        types: ['Ice', 'Ghost'],
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        weightkg: 26.6,
        abilities: { 0: 'Snow Cloak' }
    },
    Carmache: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 68, at: 90, df: 65, sa: 50, sd: 55, sp: 82 },
        weightkg: 56,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Gallame: {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Steadfast' }
    },
    Carchacrok: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102 },
        weightkg: 95,
        abilities: { 0: 'Sand Veil' }
    },
    Tritosor: {
        types: ['Water', 'Ground'],
        bs: { hp: 111, at: 83, df: 68, sa: 92, sd: 82, sp: 39 },
        weightkg: 29.9,
        abilities: { 0: 'Sticky Hold' }
    },
    Griknot: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42 },
        weightkg: 20.5,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Giratina: {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 100, df: 120, sa: 100, sd: 120, sp: 90 },
        weightkg: 750,
        gender: 'N',
        otherFormes: ['Giratina-Originelle'],
        abilities: { 0: 'Pressure' }
    },
    'Giratina-Originelle': {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 120, df: 100, sa: 120, sd: 100, sp: 90 },
        weightkg: 650,
        gender: 'N',
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Giratina'
    },
    Givrali: {
        types: ['Ice'],
        bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
        weightkg: 25.9,
        abilities: { 0: 'Snow Cloak' }
    },
    Chaglam: {
        types: ['Normal'],
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        weightkg: 3.9,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Scorvol: {
        types: ['Ground', 'Flying'],
        bs: { hp: 75, at: 95, df: 125, sa: 45, sd: 75, sp: 95 },
        weightkg: 42.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Boskara: {
        types: ['Grass'],
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        weightkg: 97,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Ptiravi: {
        types: ['Normal'],
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        weightkg: 24.4,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Heatran: {
        types: ['Fire', 'Steel'],
        bs: { hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77 },
        weightkg: 430,
        abilities: { 0: 'Flash Fire' }
    },
    Hippopotas: {
        types: ['Ground'],
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        weightkg: 49.5,
        nfe: true,
        abilities: { 0: 'Sand Stream' }
    },
    Hippodocus: {
        types: ['Ground'],
        bs: { hp: 108, at: 112, df: 118, sa: 68, sd: 72, sp: 47 },
        weightkg: 300,
        abilities: { 0: 'Sand Stream' }
    },
    Corboss: {
        types: ['Dark', 'Flying'],
        bs: { hp: 100, at: 125, df: 52, sa: 105, sd: 52, sp: 71 },
        weightkg: 27.3,
        abilities: { 0: 'Insomnia' }
    },
    Simiabraz: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        weightkg: 55,
        abilities: { 0: 'Blaze' }
    },
    Kitsunoh: {
        types: ['Ghost', 'Steel'],
        bs: { hp: 80, at: 103, df: 85, sa: 55, sd: 80, sp: 110 },
        weightkg: 51,
        abilities: { 0: 'Frisk' }
    },
    Crikzik: {
        types: ['Bug'],
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        weightkg: 2.2,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Mélokrik: {
        types: ['Bug'],
        bs: { hp: 77, at: 85, df: 51, sa: 55, sd: 51, sp: 65 },
        weightkg: 25.5,
        abilities: { 0: 'Swarm' }
    },
    Krilowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 151, at: 84, df: 73, sa: 83, sd: 74, sp: 105 },
        weightkg: 10.6,
        abilities: { 0: 'Trace' }
    },
    Phyllali: {
        types: ['Grass'],
        bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
        weightkg: 25.5,
        abilities: { 0: 'Leaf Guard' }
    },
    Coudlangue: {
        types: ['Normal'],
        bs: { hp: 110, at: 85, df: 95, sa: 80, sd: 95, sp: 50 },
        weightkg: 140,
        abilities: { 0: 'Own Tempo' }
    },
    Lockpin: {
        types: ['Normal'],
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        weightkg: 33.3,
        abilities: { 0: 'Cute Charm' }
    },
    Lucario: {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        weightkg: 54,
        abilities: { 0: 'Steadfast' }
    },
    Luminéon: {
        types: ['Water'],
        bs: { hp: 69, at: 69, df: 76, sa: 69, sd: 86, sp: 91 },
        weightkg: 24,
        abilities: { 0: 'Swift Swim' }
    },
    Luxio: {
        types: ['Electric'],
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        weightkg: 30.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Luxray: {
        types: ['Electric'],
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        weightkg: 42,
        abilities: { 0: 'Rivalry' }
    },
    Maganon: {
        types: ['Fire'],
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        weightkg: 68,
        abilities: { 0: 'Flame Body' }
    },
    Magnézone: {
        types: ['Electric', 'Steel'],
        bs: { hp: 70, at: 70, df: 115, sa: 130, sd: 90, sp: 60 },
        weightkg: 180,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    Mammochon: {
        types: ['Ice', 'Ground'],
        bs: { hp: 110, at: 130, df: 80, sa: 70, sd: 60, sp: 80 },
        weightkg: 291,
        abilities: { 0: 'Oblivious' }
    },
    Manaphy: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.4,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    Babimanta: {
        types: ['Water', 'Flying'],
        bs: { hp: 45, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        weightkg: 65,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Créfollet: {
        types: ['Psychic'],
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    'Mime Jr.': {
        types: ['Psychic'],
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Magirêve: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
        weightkg: 4.4,
        abilities: { 0: 'Levitate' }
    },
    Chimpenfeu: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        weightkg: 22,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Monohm: {
        types: ['Electric'],
        bs: { hp: 53, at: 40, df: 58, sa: 67, sd: 55, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Papilord: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 94, df: 50, sa: 94, sd: 50, sp: 66 },
        weightkg: 23.3,
        abilities: { 0: 'Swarm' }
    },
    Goinfrex: {
        types: ['Normal'],
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        weightkg: 105,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Nohface: {
        types: ['Ghost'],
        bs: { hp: 50, at: 73, df: 50, sa: 30, sd: 50, sp: 80 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Pachirisu: {
        types: ['Electric'],
        bs: { hp: 60, at: 45, df: 70, sa: 45, sd: 90, sp: 95 },
        weightkg: 3.9,
        abilities: { 0: 'Run Away' }
    },
    Palkia: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 120, df: 100, sa: 150, sd: 120, sp: 100 },
        weightkg: 336,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Phione: {
        types: ['Water'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 3.1,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    'Pichu-Troizépi': {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pichu'
    },
    Tiplouf: {
        types: ['Water'],
        bs: { hp: 53, at: 51, df: 53, sa: 61, sd: 56, sp: 40 },
        weightkg: 5.2,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Porygon-Z': {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 70, sa: 135, sd: 75, sp: 90 },
        weightkg: 34,
        gender: 'N',
        abilities: { 0: 'Adaptability' }
    },
    Oratoria: {
        types: ['Water'],
        bs: { hp: 64, at: 66, df: 68, sa: 81, sd: 76, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Colossinge: {
        types: ['Water', 'Fighting'],
        bs: { hp: 65, at: 75, df: 65, sa: 40, sd: 60, sp: 45 },
        weightkg: 35,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Prinplouf: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        weightkg: 340,
        abilities: { 0: 'Sturdy' }
    },
    Tarinorme: {
        types: ['Electric', 'Water'],
        bs: { hp: 51, at: 44, df: 33, sa: 43, sd: 34, sp: 65 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Chaffreux: {
        types: ['Normal'],
        bs: { hp: 71, at: 82, df: 64, sa: 64, sd: 59, sp: 112 },
        weightkg: 43.8,
        abilities: { 0: 'Thick Fat' }
    },
    Pyroak: {
        types: ['Fire', 'Grass'],
        bs: { hp: 120, at: 70, df: 105, sa: 95, sd: 90, sp: 60 },
        weightkg: 168,
        abilities: { 0: 'Rock Head' }
    },
    Charkos: {
        types: ['Rock'],
        bs: { hp: 97, at: 165, df: 60, sa: 65, sd: 50, sp: 58 },
        weightkg: 102.5,
        abilities: { 0: 'Mold Breaker' }
    },
    Rebble: {
        types: ['Rock'],
        bs: { hp: 45, at: 25, df: 65, sa: 75, sd: 55, sp: 80 },
        weightkg: 7,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Regigigas: {
        types: ['Normal'],
        bs: { hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100 },
        weightkg: 420,
        abilities: { 0: 'Slow Start' },
        gender: 'N'
    },
    Revenankh: {
        types: ['Ghost', 'Fighting'],
        bs: { hp: 90, at: 105, df: 90, sa: 65, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Shed Skin' }
    },
    Rhinastoc: {
        types: ['Ground', 'Rock'],
        bs: { hp: 115, at: 140, df: 130, sa: 55, sd: 55, sp: 40 },
        weightkg: 282.8,
        abilities: { 0: 'Lightning Rod' }
    },
    Riolu: {
        types: ['Fighting'],
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Steadfast' }
    },
    Roserade: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        weightkg: 14.5,
        abilities: { 0: 'Natural Cure' }
    },
    Motisma: {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 77, sp: 91 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        otherFormes: ['Motisma-Fan', 'Motisma-Frost', 'Motisma-Heat', 'Motisma-Mow', 'Motisma-Wash']
    },
    'Motisma-Mow': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Motisma'
    },
    'Motisma-Frost': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Motisma'
    },
    'Motisma-Heat': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Motisma'
    },
    'Motisma-Fan': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Motisma'
    },
    'Motisma-Wash': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Motisma'
    },
    Shaymin: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 2.1,
        abilities: { 0: 'Natural Cure' },
        gender: 'N',
        otherFormes: ['Shaymin-Céleste']
    },
    'Shaymin-Céleste': {
        types: ['Grass', 'Flying'],
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        weightkg: 5.2,
        abilities: { 0: 'Serene Grace' },
        gender: 'N',
        baseSpecies: 'Shaymin'
    },
    Sancoki: {
        types: ['Water'],
        bs: { hp: 76, at: 48, df: 48, sa: 57, sd: 62, sp: 34 },
        weightkg: 6.3,
        nfe: true,
        abilities: { 0: 'Sticky Hold' }
    },
    Dinoclier: {
        types: ['Rock', 'Steel'],
        bs: { hp: 30, at: 42, df: 118, sa: 42, sd: 88, sp: 30 },
        weightkg: 57,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Lixy: {
        types: ['Electric'],
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Rapion: {
        types: ['Poison', 'Bug'],
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Moufflair: {
        types: ['Poison', 'Dark'],
        bs: { hp: 103, at: 93, df: 67, sa: 71, sd: 61, sp: 84 },
        weightkg: 38,
        abilities: { 0: 'Stench' }
    },
    Blizzi: {
        types: ['Grass', 'Ice'],
        bs: { hp: 60, at: 62, df: 50, sa: 62, sd: 60, sp: 40 },
        weightkg: 50.5,
        nfe: true,
        abilities: { 0: 'Snow Warning' }
    },
    Spiritomb: {
        types: ['Ghost', 'Dark'],
        bs: { hp: 50, at: 92, df: 108, sa: 92, sd: 108, sp: 35 },
        weightkg: 108,
        abilities: { 0: 'Pressure' }
    },
    Étouraptor: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 120, df: 70, sa: 50, sd: 50, sp: 100 },
        weightkg: 24.9,
        abilities: { 0: 'Intimidate' }
    },
    Étourvol: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 75, df: 50, sa: 40, sd: 40, sp: 80 },
        weightkg: 15.5,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Étourmi: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 60 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Stratagem: {
        types: ['Rock'],
        bs: { hp: 90, at: 60, df: 65, sa: 120, sd: 70, sp: 130 },
        weightkg: 45,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Moufouette: {
        types: ['Poison', 'Dark'],
        bs: { hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Syclant: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 116, df: 70, sa: 114, sd: 64, sp: 121 },
        weightkg: 52,
        abilities: { 0: 'Compound Eyes' }
    },
    Syclar: {
        types: ['Ice', 'Bug'],
        bs: { hp: 40, at: 76, df: 45, sa: 74, sd: 39, sp: 91 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Tactite: {
        types: ['Rock'],
        bs: { hp: 70, at: 40, df: 65, sa: 100, sd: 65, sp: 95 },
        weightkg: 16,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Bouldeneu: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        weightkg: 128.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Togekiss: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 50, df: 95, sa: 120, sd: 115, sp: 80 },
        weightkg: 38,
        abilities: { 0: 'Hustle' }
    },
    Torterra: {
        types: ['Grass', 'Ground'],
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        weightkg: 310,
        abilities: { 0: 'Overgrow' }
    },
    Coatox: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        weightkg: 44.4,
        abilities: { 0: 'Anticipation' }
    },
    Tortipouss: {
        types: ['Grass'],
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Créhelf: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Apireine: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        weightkg: 38.5,
        abilities: { 0: 'Pressure' }
    },
    Voodoll: {
        types: ['Normal', 'Dark'],
        bs: { hp: 55, at: 40, df: 55, sa: 75, sd: 50, sp: 70 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Volt Absorb' }
    },
    Voodoom: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 90, at: 85, df: 80, sa: 105, sd: 80, sp: 110 },
        weightkg: 75.5,
        abilities: { 0: 'Volt Absorb' }
    },
    Dimoret: {
        types: ['Dark', 'Ice'],
        bs: { hp: 70, at: 120, df: 65, sa: 45, sd: 85, sp: 125 },
        weightkg: 34,
        abilities: { 0: 'Pressure' }
    },
    Cheniselle: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 59, df: 85, sa: 79, sd: 105, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        otherFormes: ['Cheniselle-Sandy', 'Cheniselle-Trash']
    },
    'Cheniselle-Sandy': {
        types: ['Bug', 'Ground'],
        bs: { hp: 60, at: 79, df: 105, sa: 59, sd: 85, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Cheniselle'
    },
    'Cheniselle-Trash': {
        types: ['Bug', 'Steel'],
        bs: { hp: 60, at: 69, df: 95, sa: 69, sd: 95, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Cheniselle'
    },
    Yanmega: {
        types: ['Bug', 'Flying'],
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
        weightkg: 51.5,
        abilities: { 0: 'Speed Boost' }
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Motisma-Fan': { types: ['Electric', 'Flying'] },
    'Motisma-Frost': { types: ['Electric', 'Ice'] },
    'Motisma-Heat': { types: ['Electric', 'Fire'] },
    'Motisma-Mow': { types: ['Electric', 'Grass'] },
    'Motisma-Wash': { types: ['Electric', 'Water'] },
    Limaspeed: {
        types: ['Bug'],
        bs: { hp: 80, at: 70, df: 40, sa: 100, sd: 60, sp: 145 },
        weightkg: 25.3,
        abilities: { 0: 'Hydration' }
    },
    Mamanbo: {
        types: ['Water'],
        bs: { hp: 165, at: 75, df: 80, sa: 40, sd: 45, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Healer' }
    },
    Gaulet: {
        types: ['Grass', 'Poison'],
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        weightkg: 10.5,
        abilities: { 0: 'Effect Spore' }
    },
    Arkéapti: {
        types: ['Rock', 'Flying'],
        bs: { hp: 55, at: 112, df: 45, sa: 74, sd: 45, sp: 70 },
        weightkg: 9.5,
        abilities: { 0: 'Defeatist' },
        nfe: true
    },
    Aéroptéryx: {
        types: ['Rock', 'Flying'],
        bs: { hp: 75, at: 140, df: 65, sa: 112, sd: 65, sp: 110 },
        weightkg: 32,
        abilities: { 0: 'Defeatist' }
    },
    Argalis: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 90, df: 89, sa: 87, sd: 40, sp: 54 },
        weightkg: 341.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Nanméouïe: {
        types: ['Normal'],
        bs: { hp: 103, at: 60, df: 86, sa: 60, sd: 86, sp: 50 },
        weightkg: 31,
        abilities: { 0: 'Healer' }
    },
    Aurumoth: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 110, at: 120, df: 99, sa: 117, sd: 60, sp: 94 },
        weightkg: 193,
        abilities: { 0: 'Weak Armor' }
    },
    Coupenotte: {
        types: ['Dragon'],
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Bargantua: {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Reckless' },
        otherFormes: ['Bargantua-Blue-Striped']
    },
    'Bargantua-Blue-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Bargantua'
    },
    Polagriffe: {
        types: ['Ice'],
        bs: { hp: 95, at: 110, df: 80, sa: 70, sd: 80, sp: 50 },
        weightkg: 260,
        abilities: { 0: 'Snow Cloak' }
    },
    Neitram: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 75, sa: 125, sd: 95, sp: 40 },
        weightkg: 34.5,
        abilities: { 0: 'Telepathy' }
    },
    Scalproie: {
        types: ['Dark', 'Steel'],
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        weightkg: 70,
        abilities: { 0: 'Defiant' }
    },
    Zébibron: {
        types: ['Electric'],
        bs: { hp: 45, at: 60, df: 32, sa: 50, sd: 32, sp: 76 },
        weightkg: 29.8,
        nfe: true,
        abilities: { 0: 'Lightning Rod' }
    },
    Géolithe: {
        types: ['Rock'],
        bs: { hp: 70, at: 105, df: 105, sa: 50, sd: 40, sp: 20 },
        weightkg: 102,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Frison: {
        types: ['Normal'],
        bs: { hp: 95, at: 110, df: 95, sa: 40, sd: 95, sp: 55 },
        weightkg: 94.6,
        abilities: { 0: 'Reckless' }
    },
    Brattler: {
        types: ['Dark', 'Grass'],
        bs: { hp: 80, at: 70, df: 40, sa: 20, sd: 90, sp: 30 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Harvest' }
    },
    Gueriaigle: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 123, df: 75, sa: 57, sd: 75, sp: 80 },
        weightkg: 41,
        abilities: { 0: 'Keen Eye' }
    },
    Mégapagos: {
        types: ['Water', 'Rock'],
        bs: { hp: 74, at: 108, df: 133, sa: 83, sd: 65, sp: 32 },
        weightkg: 81,
        abilities: { 0: 'Solid Rock' }
    },
    Cawdet: {
        types: ['Steel', 'Flying'],
        bs: { hp: 35, at: 72, df: 85, sa: 40, sd: 55, sp: 88 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Cawmodore: {
        types: ['Steel', 'Flying'],
        bs: { hp: 50, at: 92, df: 130, sa: 65, sd: 75, sp: 118 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Lugulabre: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        weightkg: 34.3,
        abilities: { 0: 'Flash Fire' }
    },
    Pashmilla: {
        types: ['Normal'],
        bs: { hp: 75, at: 95, df: 60, sa: 65, sd: 60, sp: 115 },
        weightkg: 7.5,
        abilities: { 0: 'Cute Charm' }
    },
    Cobaltium: {
        types: ['Steel', 'Fighting'],
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        weightkg: 250,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Tutankafer: {
        types: ['Ghost'],
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        weightkg: 76.5,
        abilities: { 0: 'Mummy' }
    },
    Bétochef: {
        types: ['Fighting'],
        bs: { hp: 105, at: 140, df: 95, sa: 55, sd: 65, sp: 45 },
        weightkg: 87,
        abilities: { 0: 'Guts' }
    },
    Doudouvet: {
        types: ['Grass'],
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Prankster' }
    },
    Crabaraque: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        weightkg: 200,
        abilities: { 0: 'Sturdy' }
    },
    Hexagel: {
        types: ['Ice'],
        bs: { hp: 70, at: 50, df: 30, sa: 95, sd: 135, sp: 105 },
        weightkg: 148,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Polarhume: {
        types: ['Ice'],
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Cupra: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 60, df: 49, sa: 67, sd: 30, sp: 44 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Darumacho: {
        types: ['Fire'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 92.9,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Darumacho-Zen']
    },
    'Darumacho-Zen': {
        types: ['Fire', 'Psychic'],
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 },
        weightkg: 92.9,
        baseSpecies: 'Darumacho',
        abilities: { 0: 'Zen Mode' }
    },
    Darumarond: {
        types: ['Fire'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 37.5,
        nfe: true,
        abilities: { 0: 'Hustle' }
    },
    Vivaldaim: {
        types: ['Normal', 'Grass'],
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Solochi: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        weightkg: 17.3,
        abilities: { 0: 'Hustle' },
        nfe: true
    },
    Mateloutre: {
        types: ['Water'],
        bs: { hp: 75, at: 75, df: 60, sa: 83, sd: 60, sp: 60 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Rototaupe: {
        types: ['Ground'],
        bs: { hp: 60, at: 85, df: 40, sa: 30, sd: 45, sp: 68 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Sand Rush' }
    },
    Drakkarmin: {
        types: ['Dragon'],
        bs: { hp: 77, at: 120, df: 90, sa: 60, sd: 90, sp: 48 },
        weightkg: 139,
        abilities: { 0: 'Rough Skin' }
    },
    Couaneton: {
        types: ['Water', 'Flying'],
        bs: { hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Méios: {
        types: ['Psychic'],
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Fermite: {
        types: ['Bug', 'Steel'],
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 109 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Crabicoque: {
        types: ['Bug', 'Rock'],
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Lampéroie: {
        types: ['Electric'],
        bs: { hp: 65, at: 85, df: 70, sa: 75, sd: 70, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Ohmassacre: {
        types: ['Electric'],
        bs: { hp: 85, at: 115, df: 80, sa: 105, sd: 80, sp: 50 },
        weightkg: 80.5,
        abilities: { 0: 'Levitate' }
    },
    Lewsor: {
        types: ['Psychic'],
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Telepathy' }
    },
    Roitiflam: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 110, at: 123, df: 65, sa: 100, sd: 65, sp: 65 },
        weightkg: 150,
        abilities: { 0: 'Blaze' }
    },
    Emolga: {
        types: ['Electric', 'Flying'],
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        weightkg: 5,
        abilities: { 0: 'Static' }
    },
    Lançargot: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Minotaupe: {
        types: ['Ground', 'Steel'],
        bs: { hp: 110, at: 135, df: 60, sa: 50, sd: 65, sp: 88 },
        weightkg: 40.4,
        abilities: { 0: 'Sand Rush' }
    },
    Grindur: {
        types: ['Grass', 'Steel'],
        bs: { hp: 44, at: 50, df: 91, sa: 24, sd: 86, sp: 10 },
        weightkg: 18.8,
        nfe: true,
        abilities: { 0: 'Iron Barbs' }
    },
    Noacier: {
        types: ['Grass', 'Steel'],
        bs: { hp: 74, at: 94, df: 131, sa: 54, sd: 116, sp: 20 },
        weightkg: 110,
        abilities: { 0: 'Iron Barbs' }
    },
    Trompignon: {
        types: ['Grass', 'Poison'],
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Incisache: {
        types: ['Dragon'],
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Viskuse: {
        types: ['Water', 'Ghost'],
        bs: { hp: 55, at: 40, df: 50, sa: 65, sd: 85, sp: 40 },
        weightkg: 33,
        nfe: true,
        abilities: { 0: 'Water Absorb' }
    },
    Mygavolt: {
        types: ['Bug', 'Electric'],
        bs: { hp: 70, at: 77, df: 60, sa: 97, sd: 60, sp: 108 },
        weightkg: 14.3,
        abilities: { 0: 'Compound Eyes' }
    },
    Miasmax: {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 107.3,
        abilities: { 0: 'Stench' }
    },
    Genesect: {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        otherFormes: ['Genesect-Pyro', 'Genesect-Cryo', 'Genesect-Aqua', 'Genesect-Choc']
    },
    'Genesect-Pyro': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Cryo': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Aqua': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Choc': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    Gigalithee: {
        types: ['Rock'],
        bs: { hp: 85, at: 135, df: 130, sa: 60, sd: 70, sp: 25 },
        weightkg: 260,
        abilities: { 0: 'Sturdy' }
    },
    Gringolem: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        weightkg: 92,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Grolemastoc: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        weightkg: 330,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Scrutella: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Sidérella: {
        types: ['Psychic'],
        bs: { hp: 70, at: 55, df: 95, sa: 95, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Frisk' }
    },
    Mesmérella: {
        types: ['Psychic'],
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Ouvrifier: {
        types: ['Fighting'],
        bs: { hp: 85, at: 105, df: 85, sa: 40, sd: 50, sp: 40 },
        weightkg: 40,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Tranchodon: {
        types: ['Dragon'],
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        weightkg: 105.5,
        abilities: { 0: 'Rivalry' }
    },
    Aflamanoir: {
        types: ['Fire'],
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        weightkg: 58,
        abilities: { 0: 'Gluttony' }
    },
    Ponchien: {
        types: ['Normal'],
        bs: { hp: 65, at: 80, df: 65, sa: 35, sd: 65, sp: 60 },
        weightkg: 14.7,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Trioxhydre: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        weightkg: 160,
        abilities: { 0: 'Levitate' }
    },
    Moyade: {
        types: ['Water', 'Ghost'],
        bs: { hp: 100, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        weightkg: 135,
        abilities: { 0: 'Water Absorb' }
    },
    Statitik: {
        types: ['Bug', 'Electric'],
        bs: { hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Carabing: {
        types: ['Bug'],
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Keldeo: {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        otherFormes: ['Keldeo-Décidé']
    },
    'Keldeo-Décidé': {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        baseSpecies: 'Keldeo'
    },
    Clic: {
        types: ['Steel'],
        bs: { hp: 60, at: 80, df: 95, sa: 70, sd: 85, sp: 50 },
        weightkg: 51,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Tic: {
        types: ['Steel'],
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        weightkg: 21,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Cliticlic: {
        types: ['Steel'],
        bs: { hp: 60, at: 100, df: 115, sa: 70, sd: 85, sp: 90 },
        weightkg: 81,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Escroco: {
        types: ['Ground', 'Dark'],
        bs: { hp: 60, at: 82, df: 45, sa: 45, sd: 45, sp: 74 },
        weightkg: 33.4,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Crocorible: {
        types: ['Ground', 'Dark'],
        bs: { hp: 95, at: 117, df: 70, sa: 65, sd: 70, sp: 92 },
        weightkg: 96.3,
        abilities: { 0: 'Intimidate' }
    },
    Kyurem: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Kyurem-Noir', 'Kyurem-Blanc']
    },
    'Kyurem-Noir': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 170, df: 100, sa: 120, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Teravolt' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    'Kyurem-Blanc': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 120, df: 90, sa: 170, sd: 100, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Turboblaze' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    Mélancolux: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Démétéros: {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        weightkg: 68,
        abilities: { 0: 'Sand Force' },
        otherFormes: ['Démétéros-Therian']
    },
    'Démétéros-Therian': {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        weightkg: 68,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Démétéros'
    },
    Pyronille: {
        types: ['Bug', 'Fire'],
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        weightkg: 28.8,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Manternel: {
        types: ['Bug', 'Grass'],
        bs: { hp: 75, at: 103, df: 80, sa: 70, sd: 70, sp: 92 },
        weightkg: 20.5,
        abilities: { 0: 'Swarm' }
    },
    Léopardus: {
        types: ['Dark'],
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        weightkg: 37.5,
        abilities: { 0: 'Limber' }
    },
    Fragilady: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        weightkg: 16.3,
        abilities: { 0: 'Chlorophyll' }
    },
    Ponchiot: {
        types: ['Normal'],
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Vital Spirit' }
    },
    Funécire: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        weightkg: 3.1,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Malaconda: {
        types: ['Dark', 'Grass'],
        bs: { hp: 115, at: 100, df: 60, sa: 40, sd: 130, sp: 55 },
        weightkg: 108.8,
        abilities: { 0: 'Harvest' }
    },
    Vaututrice: {
        types: ['Dark', 'Flying'],
        bs: { hp: 110, at: 65, df: 105, sa: 55, sd: 95, sp: 80 },
        weightkg: 39.5,
        abilities: { 0: 'Big Pecks' }
    },
    Maracachi: {
        types: ['Grass'],
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        weightkg: 28,
        abilities: { 0: 'Water Absorb' }
    },
    Meloetta: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Meloetta-Danse'],
        gender: 'N'
    },
    'Meloetta-Danse': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Meloetta',
        gender: 'N'
    },
    Kungfouine: {
        types: ['Fighting'],
        bs: { hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Shaofouine: {
        types: ['Fighting'],
        bs: { hp: 65, at: 125, df: 60, sa: 95, sd: 60, sp: 105 },
        weightkg: 35.5,
        abilities: { 0: 'Inner Focus' }
    },
    Chinchidou: {
        types: ['Normal'],
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Mollux: {
        types: ['Fire', 'Poison'],
        bs: { hp: 95, at: 45, df: 83, sa: 131, sd: 105, sp: 76 },
        weightkg: 41,
        abilities: { 0: 'Dry Skin' }
    },
    Munna: {
        types: ['Psychic'],
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24 },
        weightkg: 23.3,
        nfe: true,
        abilities: { 0: 'Forewarn' }
    },
    Mushana: {
        types: ['Psychic'],
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 95, sp: 29 },
        weightkg: 60.5,
        abilities: { 0: 'Forewarn' }
    },
    Necturine: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 49, at: 55, df: 60, sa: 50, sd: 75, sp: 51 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Necturna: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 64, at: 120, df: 100, sa: 85, sd: 120, sp: 81 },
        weightkg: 49.6,
        abilities: { 0: 'Forewarn' }
    },
    Moustillon: {
        types: ['Water'],
        bs: { hp: 55, at: 55, df: 45, sa: 63, sd: 45, sp: 45 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Batracné: {
        types: ['Water', 'Ground'],
        bs: { hp: 75, at: 65, df: 55, sa: 65, sd: 55, sp: 69 },
        weightkg: 17,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flotajou: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Feuillajou: {
        types: ['Grass'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Flamajou: {
        types: ['Fire'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Ratentif: {
        types: ['Normal'],
        bs: { hp: 45, at: 55, df: 39, sa: 35, sd: 39, sp: 42 },
        weightkg: 11.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Scalpion: {
        types: ['Dark', 'Steel'],
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Defiant' }
    },
    Chlorobule: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Poichigeon: {
        types: ['Normal', 'Flying'],
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Grotichon: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 90, at: 93, df: 55, sa: 70, sd: 55, sp: 55 },
        weightkg: 55.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Chacripan: {
        types: ['Dark'],
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        weightkg: 10.1,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Reshiram: {
        types: ['Dragon', 'Fire'],
        bs: { hp: 100, at: 120, df: 100, sa: 150, sd: 120, sp: 90 },
        weightkg: 330,
        abilities: { 0: 'Turboblaze' },
        gender: 'N'
    },
    Symbios: {
        types: ['Psychic'],
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        weightkg: 20.1,
        abilities: { 0: 'Overcoat' }
    },
    Nodulithe: {
        types: ['Rock'],
        bs: { hp: 55, at: 75, df: 85, sa: 25, sd: 25, sp: 15 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Furaiglon: {
        types: ['Normal', 'Flying'],
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Clamiral: {
        types: ['Water'],
        bs: { hp: 95, at: 100, df: 85, sa: 108, sd: 70, sp: 70 },
        weightkg: 94.6,
        abilities: { 0: 'Torrent' }
    },
    Mascaïman: {
        types: ['Ground', 'Dark'],
        bs: { hp: 50, at: 72, df: 35, sa: 35, sd: 35, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Karaclée: {
        types: ['Fighting'],
        bs: { hp: 75, at: 125, df: 75, sa: 30, sd: 75, sp: 85 },
        weightkg: 51,
        abilities: { 0: 'Sturdy' }
    },
    Haydaim: {
        types: ['Normal', 'Grass'],
        bs: { hp: 80, at: 100, df: 70, sa: 60, sd: 70, sp: 95 },
        weightkg: 92.5,
        abilities: { 0: 'Chlorophyll' }
    },
    Brutapode: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        weightkg: 200.5,
        abilities: { 0: 'Poison Point' }
    },
    Baggaïd: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        weightkg: 30,
        abilities: { 0: 'Shed Skin' }
    },
    Baggiguane: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Scratchet: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 55, at: 85, df: 80, sa: 20, sd: 70, sp: 40 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Scrappy' }
    },
    Crapustule: {
        types: ['Water', 'Ground'],
        bs: { hp: 105, at: 85, df: 75, sa: 85, sd: 75, sp: 74 },
        weightkg: 62,
        abilities: { 0: 'Swift Swim' }
    },
    Majaspic: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        weightkg: 63,
        abilities: { 0: 'Overgrow' }
    },
    Lianaja: {
        types: ['Grass'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Larveyette: {
        types: ['Bug', 'Grass'],
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Escargaume: {
        types: ['Bug'],
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        weightkg: 7.7,
        nfe: true,
        abilities: { 0: 'Hydration' }
    },
    Cryptéro: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 72, at: 58, df: 80, sa: 103, sd: 80, sp: 97 },
        weightkg: 14,
        abilities: { 0: 'Wonder Skin' }
    },
    Flotoutan: {
        types: ['Water'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 29,
        abilities: { 0: 'Gluttony' }
    },
    Feuiloutan: {
        types: ['Grass'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 30.5,
        abilities: { 0: 'Gluttony' }
    },
    Flamoutan: {
        types: ['Fire'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 28,
        abilities: { 0: 'Gluttony' }
    },
    Vipélierre: {
        types: ['Grass'],
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        weightkg: 8.1,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Nucléos: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Mastouffe: {
        types: ['Normal'],
        bs: { hp: 85, at: 100, df: 90, sa: 45, sd: 90, sp: 80 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Limonde: {
        types: ['Ground', 'Electric'],
        bs: { hp: 109, at: 66, df: 84, sa: 81, sd: 99, sp: 32 },
        weightkg: 11,
        abilities: { 0: 'Static' }
    },
    Couverdure: {
        types: ['Bug', 'Grass'],
        bs: { hp: 55, at: 63, df: 90, sa: 50, sd: 80, sp: 42 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Lakmécygne: {
        types: ['Water', 'Flying'],
        bs: { hp: 75, at: 87, df: 63, sa: 87, sd: 63, sp: 98 },
        weightkg: 24.2,
        abilities: { 0: 'Keen Eye' }
    },
    Rhinolove: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 67, at: 57, df: 55, sa: 77, sd: 55, sp: 114 },
        weightkg: 10.5,
        abilities: { 0: 'Unaware' }
    },
    Gruikui: {
        types: ['Fire'],
        bs: { hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45 },
        weightkg: 9.9,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Terrakium: {
        types: ['Rock', 'Fighting'],
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        weightkg: 260,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Judokrak: {
        types: ['Fighting'],
        bs: { hp: 120, at: 100, df: 85, sa: 30, sd: 85, sp: 45 },
        weightkg: 55.5,
        abilities: { 0: 'Guts' }
    },
    Fulguris: {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Fulguris-Therian']
    },
    'Fulguris-Therian': {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        weightkg: 61,
        abilities: { 0: 'Volt Absorb' },
        baseSpecies: 'Fulguris'
    },
    Charpenti: {
        types: ['Fighting'],
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Carapagos: {
        types: ['Water', 'Rock'],
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        weightkg: 16.5,
        nfe: true,
        abilities: { 0: 'Solid Rock' }
    },
    Tomohawk: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 105, at: 60, df: 90, sa: 115, sd: 80, sp: 85 },
        weightkg: 37.2,
        abilities: { 0: 'Intimidate' }
    },
    Boréas: {
        types: ['Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 63,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Boréas-Therian']
    },
    'Boréas-Therian': {
        types: ['Flying'],
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Regenerator' },
        baseSpecies: 'Boréas'
    },
    Colombeau: {
        types: ['Normal', 'Flying'],
        bs: { hp: 62, at: 77, df: 62, sa: 50, sd: 42, sp: 65 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Miamiasme: {
        types: ['Poison'],
        bs: { hp: 50, at: 50, df: 62, sa: 40, sd: 62, sp: 65 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Tritonde: {
        types: ['Water'],
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Anchwatt: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 45, sd: 40, sp: 60 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Déflaisan: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 105, df: 80, sa: 65, sd: 55, sp: 93 },
        weightkg: 29,
        abilities: { 0: 'Big Pecks' }
    },
    Sorboul: {
        types: ['Ice'],
        bs: { hp: 51, at: 65, df: 65, sa: 80, sd: 75, sp: 59 },
        weightkg: 41,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Sorbébé: {
        types: ['Ice'],
        bs: { hp: 36, at: 50, df: 50, sa: 65, sd: 60, sp: 44 },
        weightkg: 5.7,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Sorbouboul: {
        types: ['Ice'],
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 79 },
        weightkg: 57.5,
        abilities: { 0: 'Ice Body' }
    },
    Venipatte: {
        types: ['Bug', 'Poison'],
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        weightkg: 5.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Victini: {
        types: ['Psychic', 'Fire'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 4,
        abilities: { 0: 'Victory Star' },
        gender: 'N'
    },
    Viridium: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        weightkg: 200,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Pyrax: {
        types: ['Bug', 'Fire'],
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        weightkg: 46,
        abilities: { 0: 'Flame Body' }
    },
    Vostourno: {
        types: ['Dark', 'Flying'],
        bs: { hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Miradar: {
        types: ['Normal'],
        bs: { hp: 60, at: 85, df: 69, sa: 60, sd: 69, sp: 77 },
        weightkg: 27,
        abilities: { 0: 'Illuminate' }
    },
    Farfaduvet: {
        types: ['Grass'],
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 116 },
        weightkg: 6.6,
        abilities: { 0: 'Prankster' }
    },
    Scobolide: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        weightkg: 58.5,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Chovsourir: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 55, at: 45, df: 43, sa: 55, sd: 43, sp: 72 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Tutafeh: {
        types: ['Ghost'],
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Mummy' },
        nfe: true
    },
    Zéblitz: {
        types: ['Electric'],
        bs: { hp: 75, at: 100, df: 63, sa: 80, sd: 63, sp: 116 },
        weightkg: 79.5,
        abilities: { 0: 'Lightning Rod' }
    },
    Zekrom: {
        types: ['Dragon', 'Electric'],
        bs: { hp: 100, at: 150, df: 120, sa: 120, sd: 100, sp: 90 },
        weightkg: 345,
        abilities: { 0: 'Teravolt' },
        gender: 'N'
    },
    Zoroark: {
        types: ['Dark'],
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        weightkg: 81.1,
        abilities: { 0: 'Illusion' }
    },
    Zorua: {
        types: ['Dark'],
        bs: { hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        nfe: true
    },
    Diamat: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        weightkg: 50,
        abilities: { 0: 'Hustle' },
        nfe: true
    }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Pichu'].otherFormes;
delete BW['Pichu-Troizépi'];
var XY_PATCH = {
    Blizzaroi: { otherFormes: ['Blizzaroi-Mega'] },
    Absol: { otherFormes: ['Absol-Méga'] },
    Ptéra: { otherFormes: ['Ptéra-Mega'] },
    Galeking: { otherFormes: ['Galeking-Mega'] },
    Alakazam: { bs: { sd: 95 }, otherFormes: ['Alakazam-Méga'] },
    Altaria: { otherFormes: ['Altaria-Méga'] },
    Pharamp: { bs: { df: 85 }, otherFormes: ['Pharamp-Mega'] },
    Nanméouïe: { otherFormes: ['Nanméouïe-Mega'] },
    Azumarill: { types: ['Water', 'Fairy'], bs: { sa: 90 } },
    Azurill: { types: ['Normal', 'Fairy'] },
    Branette: { otherFormes: ['Branette-Mega'] },
    Charmillon: { bs: { sa: 100 } },
    Dardargnan: { bs: { at: 90 }, otherFormes: ['Dardargnan-Mega'] },
    Joliflor: { bs: { df: 95 } },
    Tortank: { otherFormes: ['Tortank-Mega'] },
    Braségali: { otherFormes: ['Braségali-Mega'] },
    Papilusion: { bs: { sa: 90 } },
    Camérupt: { otherFormes: ['Camérupt-Mega'] },
    Dracaufeu: { otherFormes: ['Dracaufeu-Mega-X', 'Dracaufeu-Mega-Y'] },
    Mélodelfe: { types: ['Fairy'], bs: { sa: 95 } },
    Mélofée: { types: ['Fairy'] },
    Mélo: { types: ['Fairy'] },
    Doudouvet: { types: ['Grass', 'Fairy'] },
    Brouhabam: { bs: { sd: 73 } },
    Gallame: { otherFormes: ['Gallame-Mega'] },
    Carchacrok: { otherFormes: ['Carchacrok-Mega'] },
    Gardevoir: { types: ['Psychic', 'Fairy'], otherFormes: ['Gardevoir-Méga'] },
    Ectoplasma: { otherFormes: ['Ectoplasma-Mega'] },
    Gigalithee: { bs: { sd: 80 } },
    Oniglali: { otherFormes: ['Oniglali-Mega'] },
    Grolem: { bs: { at: 120 } },
    Granbull: { types: ['Fairy'] },
    Groudon: { otherFormes: ['Groudon-Primo'] },
    Léviator: { otherFormes: ['Léviator-Mega'] },
    Scarhino: { otherFormes: ['Scarhino-Mega'] },
    Démolosse: { otherFormes: ['Démolosse-Mega'] },
    Toudoudou: { types: ['Normal', 'Fairy'] },
    Rondoudou: { types: ['Normal', 'Fairy'] },
    Cotovol: { bs: { sd: 95 } },
    Kangourex: { otherFormes: ['Kangourex-Mega'] },
    Kirlia: { types: ['Psychic', 'Fairy'] },
    Crocorible: { bs: { df: 80 } },
    Kyogre: { otherFormes: ['Kyogre-Primo'] },
    Latias: { otherFormes: ['Latias-Méga'] },
    Latios: { otherFormes: ['Latios-Méga'] },
    Manternel: { bs: { sd: 80 } },
    Lockpin: { otherFormes: ['Lockpin-Mega'] },
    Lucario: { otherFormes: ['Lucario-Méga'] },
    Élecsprint: { otherFormes: ['Élecsprint-Mega'] },
    Marill: { types: ['Water', 'Fairy'] },
    Mysdibule: { types: ['Steel', 'Fairy'], otherFormes: ['Mysdibule-Mega'] },
    Charmina: { otherFormes: ['Charmina-Mega'] },
    Métalosse: { otherFormes: ['Métalosse-Mega'] },
    Mewtwo: { otherFormes: ['Mewtwo-Méga-X', 'Mewtwo-Méga-Y'] },
    'Mime Jr.': { types: ['Psychic', 'Fairy'] },
    'M. Mime': { types: ['Psychic', 'Fairy'] },
    Nidoking: { bs: { at: 102 } },
    Nidoqueen: { bs: { at: 92 } },
    Roucarnage: { bs: { sp: 101 }, otherFormes: ['Roucarnage-Mega'] },
    Pikachu: {
        bs: { df: 40, sd: 50 },
        otherFormes: [
            'Pikachu-Lady',
            'Pikachu-Cosplayeur',
            'Pikachu-Catcheur',
            'Pikachu-Docteur',
            'Pikachu-Star',
            'Pikachu-Rockeur',
        ]
    },
    Scarabrute: { otherFormes: ['Scarabrute-Mega'] },
    Tartard: { bs: { at: 95 } },
    Raichu: { bs: { sp: 110 } },
    Tarsal: { types: ['Psychic', 'Fairy'] },
    Rayquaza: { otherFormes: ['Rayquaza-Méga'] },
    Roserade: { bs: { df: 65 } },
    Ténéfix: { otherFormes: ['Ténéfix-Mega'] },
    Drattak: { otherFormes: ['Drattak-Mega'] },
    Jungko: { otherFormes: ['Jungko-Mega'] },
    Cizayox: { otherFormes: ['Cizayox-Mega'] },
    Brutapode: { bs: { at: 100 } },
    Crapustule: { bs: { at: 95 } },
    Sharpedo: { otherFormes: ['Sharpedo-Méga'] },
    Flagadoss: { otherFormes: ['Flagadoss-Mega'] },
    Snubbull: { types: ['Fairy'] },
    Étouraptor: { bs: { sd: 60 } },
    Steelix: { otherFormes: ['Steelix-Méga'] },
    Mastouffe: { bs: { at: 110 } },
    Laggron: { otherFormes: ['Laggron-Mega'] },
    Togekiss: { types: ['Fairy', 'Flying'] },
    Togepi: { types: ['Fairy'] },
    Togetic: { types: ['Fairy', 'Flying'] },
    Tyranocif: { otherFormes: ['Tyranocif-Mega'] },
    Déflaisan: { bs: { at: 115 } },
    Florizarre: { otherFormes: ['Florizarre-Mega'] },
    Empiflor: { bs: { sd: 70 } },
    Rafflesia: { bs: { sa: 110 } },
    Farfaduvet: { types: ['Grass', 'Fairy'] },
    Grodoudou: { types: ['Normal', 'Fairy'], bs: { sa: 85 } },
    'Exagide-Blade': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 50, sa: 150, sd: 50, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        otherFormes: ['Exagide-Shield', 'Exagide-Both']
    },
    'Exagide-Shield': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 50, df: 150, sa: 50, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Exagide-Blade'
    },
    'Exagide-Both': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 150, sa: 150, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Exagide-Blade'
    },
    Amagara: {
        types: ['Rock', 'Ice'],
        bs: { hp: 77, at: 59, df: 50, sa: 67, sd: 63, sp: 46 },
        weightkg: 25.2,
        nfe: true,
        abilities: { 0: 'Refrigerate' }
    },
    'Arceus-Fée': {
        types: ['Fairy'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        baseSpecies: 'Arceus',
        gender: 'N'
    },
    Cocotine: {
        types: ['Fairy'],
        bs: { hp: 101, at: 72, df: 72, sa: 99, sd: 89, sp: 29 },
        weightkg: 15.5,
        abilities: { 0: 'Healer' }
    },
    Dragmara: {
        types: ['Rock', 'Ice'],
        bs: { hp: 123, at: 77, df: 72, sa: 99, sd: 92, sp: 58 },
        weightkg: 225,
        abilities: { 0: 'Refrigerate' }
    },
    Séracrawl: {
        types: ['Ice'],
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 46, sp: 28 },
        weightkg: 505,
        abilities: { 0: 'Own Tempo' }
    },
    Golgopathe: {
        types: ['Rock', 'Water'],
        bs: { hp: 72, at: 105, df: 115, sa: 54, sd: 86, sp: 68 },
        weightkg: 96,
        abilities: { 0: 'Tough Claws' }
    },
    Grelaçon: {
        types: ['Ice'],
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 35, sp: 28 },
        weightkg: 99.5,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Opermine: {
        types: ['Rock', 'Water'],
        bs: { hp: 42, at: 52, df: 67, sa: 39, sd: 56, sp: 50 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Tough Claws' }
    },
    Roussil: {
        types: ['Fire'],
        bs: { hp: 59, at: 59, df: 58, sa: 90, sd: 70, sp: 73 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Sapereau: {
        types: ['Normal'],
        bs: { hp: 38, at: 36, df: 38, sa: 32, sd: 36, sp: 57 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Caimanoe: {
        types: ['Water', 'Steel'],
        bs: { hp: 73, at: 85, df: 65, sa: 80, sd: 40, sp: 87 },
        weightkg: 72.5,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Strassie: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 50, df: 150, sa: 50, sd: 150, sp: 50 },
        weightkg: 5.7,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Blindépique: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 107, df: 122, sa: 74, sd: 75, sp: 64 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' }
    },
    Marisson: {
        types: ['Grass'],
        bs: { hp: 56, at: 61, df: 65, sa: 48, sd: 45, sp: 38 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Flingouste: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 58, sd: 63, sp: 44 },
        weightkg: 8.3,
        abilities: { 0: 'Mega Launcher' },
        nfe: true
    },
    Gamblast: {
        types: ['Water'],
        bs: { hp: 71, at: 73, df: 88, sa: 120, sd: 89, sp: 59 },
        weightkg: 35.3,
        abilities: { 0: 'Mega Launcher' }
    },
    Crucibelle: {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 105, df: 65, sa: 75, sd: 85, sp: 104 },
        weightkg: 23.6,
        abilities: { 0: 'Regenerator' },
        otherFormes: ['Crucibelle-Mega']
    },
    Diancie: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50 },
        weightkg: 8.8,
        abilities: { 0: 'Clear Body' },
        otherFormes: ['Diancie-Méga'],
        gender: 'N'
    },
    Dedenne: {
        types: ['Electric', 'Fairy'],
        bs: { hp: 67, at: 58, df: 57, sa: 81, sd: 67, sp: 101 },
        weightkg: 2.2,
        abilities: { 0: 'Cheek Pouch' }
    },
    Goupelin: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 75, at: 69, df: 72, sa: 114, sd: 100, sp: 104 },
        weightkg: 39,
        abilities: { 0: 'Blaze' }
    },
    Excavarenne: {
        types: ['Normal', 'Ground'],
        bs: { hp: 85, at: 71, df: 77, sa: 50, sd: 77, sp: 78 },
        weightkg: 42.4,
        abilities: { 0: 'Pickup' }
    },
    Dimoclès: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 59, at: 110, df: 150, sa: 45, sd: 49, sp: 35 },
        weightkg: 4.5,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Kravarech: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 65, at: 75, df: 90, sa: 97, sd: 123, sp: 44 },
        weightkg: 81.5,
        abilities: { 0: 'Poison Point' }
    },
    Psystigri: {
        types: ['Psychic'],
        bs: { hp: 62, at: 48, df: 54, sa: 63, sd: 60, sp: 68 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Feunnec: {
        types: ['Fire'],
        bs: { hp: 40, at: 45, df: 40, sa: 62, sd: 60, sp: 60 },
        weightkg: 9.4,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Flabébé: {
        types: ['Fairy'],
        bs: { hp: 44, at: 38, df: 39, sa: 61, sd: 79, sp: 42 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Flower Veil' }
    },
    Braisillon: {
        types: ['Fire', 'Flying'],
        bs: { hp: 62, at: 73, df: 55, sa: 56, sd: 52, sp: 84 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Passerouge: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 50, df: 43, sa: 40, sd: 38, sp: 62 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Floatoy: {
        types: ['Water'],
        bs: { hp: 48, at: 70, df: 40, sa: 70, sd: 30, sp: 77 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Floette: {
        types: ['Fairy'],
        bs: { hp: 54, at: 45, df: 47, sa: 75, sd: 98, sp: 52 },
        weightkg: 0.9,
        nfe: true,
        otherFormes: ['Floette-Éternelle'],
        abilities: { 0: 'Flower Veil' }
    },
    'Floette-Éternelle': {
        types: ['Fairy'],
        bs: { hp: 74, at: 65, df: 67, sa: 125, sd: 128, sp: 92 },
        weightkg: 0.9,
        abilities: { 0: 'Flower Veil' },
        baseSpecies: 'Floette'
    },
    Florges: {
        types: ['Fairy'],
        bs: { hp: 78, at: 65, df: 68, sa: 112, sd: 154, sp: 75 },
        weightkg: 10,
        abilities: { 0: 'Flower Veil' }
    },
    Grenousse: {
        types: ['Water'],
        bs: { hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Croâporal: {
        types: ['Water'],
        bs: { hp: 54, at: 63, df: 52, sa: 83, sd: 56, sp: 97 },
        weightkg: 10.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Couafarel: {
        types: ['Normal'],
        bs: { hp: 75, at: 80, df: 60, sa: 65, sd: 90, sp: 102 },
        weightkg: 28,
        abilities: { 0: 'Fur Coat' }
    },
    Chevroum: {
        types: ['Grass'],
        bs: { hp: 123, at: 100, df: 62, sa: 97, sd: 81, sp: 68 },
        weightkg: 91,
        abilities: { 0: 'Sap Sipper' }
    },
    Muplodocus: {
        types: ['Dragon'],
        bs: { hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80 },
        weightkg: 150.5,
        abilities: { 0: 'Sap Sipper' }
    },
    Mucuscule: {
        types: ['Dragon'],
        bs: { hp: 45, at: 50, df: 35, sa: 55, sd: 75, sp: 40 },
        weightkg: 2.8,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Banshitrouye: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 65, at: 90, df: 122, sa: 58, sd: 75, sp: 84 },
        weightkg: 12.5,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Banshitrouye-Large', 'Banshitrouye-Small', 'Banshitrouye-Super']
    },
    'Banshitrouye-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 75, at: 95, df: 122, sa: 58, sd: 75, sp: 69 },
        weightkg: 14,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Banshitrouye'
    },
    'Banshitrouye-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 55, at: 85, df: 122, sa: 58, sd: 75, sp: 99 },
        weightkg: 9.5,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Banshitrouye'
    },
    'Banshitrouye-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 100, df: 122, sa: 58, sd: 75, sp: 54 },
        weightkg: 39,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Banshitrouye'
    },
    Amphinobi: {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 },
        weightkg: 40,
        abilities: { 0: 'Torrent' }
    },
    Brutalibré: {
        types: ['Fighting', 'Flying'],
        bs: { hp: 78, at: 92, df: 75, sa: 74, sd: 63, sp: 118 },
        weightkg: 21.5,
        abilities: { 0: 'Limber' }
    },
    Iguolta: {
        types: ['Electric', 'Normal'],
        bs: { hp: 62, at: 55, df: 52, sa: 109, sd: 94, sp: 109 },
        weightkg: 21,
        abilities: { 0: 'Dry Skin' }
    },
    Galvaran: {
        types: ['Electric', 'Normal'],
        bs: { hp: 44, at: 38, df: 33, sa: 61, sd: 43, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Dry Skin' }
    },
    Monorpale: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 45, at: 80, df: 100, sa: 35, sd: 37, sp: 28 },
        weightkg: 2,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Hoopa: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        weightkg: 9,
        gender: 'N',
        abilities: { 0: 'Magician' },
        otherFormes: ['Hoopa-Déchaîné']
    },
    'Hoopa-Déchaîné': {
        types: ['Psychic', 'Dark'],
        bs: { hp: 80, at: 160, df: 60, sa: 170, sd: 130, sp: 80 },
        weightkg: 490,
        gender: 'N',
        abilities: { 0: 'Magician' },
        baseSpecies: 'Hoopa'
    },
    Sepiatop: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 53, at: 54, df: 53, sa: 37, sd: 46, sp: 45 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Contrary' }
    },
    Kerfluffle: {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 84, at: 78, df: 86, sa: 115, sd: 88, sp: 119 },
        weightkg: 24.2,
        abilities: { 0: 'Natural Cure' }
    },
    Trousselin: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 57, at: 80, df: 91, sa: 80, sd: 87, sp: 75 },
        weightkg: 3,
        abilities: { 0: 'Prankster' }
    },
    Hélionceau: {
        types: ['Fire', 'Normal'],
        bs: { hp: 62, at: 50, df: 58, sa: 73, sd: 54, sp: 72 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Sepiatroce: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 86, at: 92, df: 88, sa: 68, sd: 75, sp: 73 },
        weightkg: 47,
        abilities: { 0: 'Contrary' }
    },
    'Blizzaroi-Mega': {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 132, df: 105, sa: 132, sd: 105, sp: 30 },
        weightkg: 185,
        abilities: { 0: 'Snow Warning' },
        baseSpecies: 'Blizzaroi'
    },
    'Absol-Méga': {
        types: ['Dark'],
        bs: { hp: 65, at: 150, df: 60, sa: 115, sd: 60, sp: 115 },
        weightkg: 49,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Absol'
    },
    'Ptéra-Mega': {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 135, df: 85, sa: 70, sd: 95, sp: 150 },
        weightkg: 79,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Ptéra'
    },
    'Galeking-Mega': {
        types: ['Steel'],
        bs: { hp: 70, at: 140, df: 230, sa: 60, sd: 80, sp: 50 },
        weightkg: 395,
        abilities: { 0: 'Filter' },
        baseSpecies: 'Galeking'
    },
    'Alakazam-Méga': {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 65, sa: 175, sd: 95, sp: 150 },
        weightkg: 48,
        abilities: { 0: 'Trace' },
        baseSpecies: 'Alakazam'
    },
    'Altaria-Méga': {
        types: ['Dragon', 'Fairy'],
        bs: { hp: 75, at: 110, df: 110, sa: 110, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Altaria'
    },
    'Pharamp-Mega': {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 95, df: 105, sa: 165, sd: 110, sp: 45 },
        weightkg: 61.5,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Pharamp'
    },
    'Nanméouïe-Mega': {
        types: ['Normal', 'Fairy'],
        bs: { hp: 103, at: 60, df: 126, sa: 80, sd: 126, sp: 50 },
        weightkg: 32,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Nanméouïe'
    },
    'Branette-Mega': {
        types: ['Ghost'],
        bs: { hp: 64, at: 165, df: 75, sa: 93, sd: 83, sp: 75 },
        weightkg: 13,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Branette'
    },
    'Dardargnan-Mega': {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 150, df: 40, sa: 15, sd: 80, sp: 145 },
        weightkg: 40.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Dardargnan'
    },
    'Tortank-Mega': {
        types: ['Water'],
        bs: { hp: 79, at: 103, df: 120, sa: 135, sd: 115, sp: 78 },
        weightkg: 101.1,
        abilities: { 0: 'Mega Launcher' },
        baseSpecies: 'Tortank'
    },
    'Braségali-Mega': {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 160, df: 80, sa: 130, sd: 80, sp: 100 },
        weightkg: 52,
        abilities: { 0: 'Speed Boost' },
        baseSpecies: 'Braségali'
    },
    'Camérupt-Mega': {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 120, df: 100, sa: 145, sd: 105, sp: 20 },
        weightkg: 320.5,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Camérupt'
    },
    'Dracaufeu-Mega-X': {
        types: ['Fire', 'Dragon'],
        bs: { hp: 78, at: 130, df: 111, sa: 130, sd: 85, sp: 100 },
        weightkg: 110.5,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Dracaufeu'
    },
    'Dracaufeu-Mega-Y': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 104, df: 78, sa: 159, sd: 115, sp: 100 },
        weightkg: 100.5,
        abilities: { 0: 'Drought' },
        baseSpecies: 'Dracaufeu'
    },
    'Crucibelle-Mega': {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 135, df: 75, sa: 85, sd: 125, sp: 114 },
        weightkg: 22.5,
        abilities: { 0: 'Magic Guard' },
        baseSpecies: 'Crucibelle'
    },
    'Diancie-Méga': {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 160, df: 110, sa: 160, sd: 110, sp: 110 },
        weightkg: 27.8,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Diancie',
        gender: 'N'
    },
    'Gallame-Mega': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 165, df: 95, sa: 65, sd: 115, sp: 110 },
        weightkg: 56.4,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Gallame'
    },
    'Carchacrok-Mega': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 170, df: 115, sa: 120, sd: 95, sp: 92 },
        weightkg: 95,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Carchacrok'
    },
    'Gardevoir-Méga': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        weightkg: 48.4,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Gardevoir'
    },
    'Ectoplasma-Mega': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 80, sa: 170, sd: 95, sp: 130 },
        weightkg: 40.5,
        abilities: { 0: 'Shadow Tag' },
        baseSpecies: 'Ectoplasma'
    },
    'Oniglali-Mega': {
        types: ['Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 100 },
        weightkg: 350.2,
        abilities: { 0: 'Refrigerate' },
        baseSpecies: 'Oniglali'
    },
    'Léviator-Mega': {
        types: ['Water', 'Dark'],
        bs: { hp: 95, at: 155, df: 109, sa: 70, sd: 130, sp: 81 },
        weightkg: 305,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Léviator'
    },
    'Scarhino-Mega': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 185, df: 115, sa: 40, sd: 105, sp: 75 },
        weightkg: 62.5,
        abilities: { 0: 'Skill Link' },
        baseSpecies: 'Scarhino'
    },
    'Démolosse-Mega': {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 90, sa: 140, sd: 90, sp: 115 },
        weightkg: 49.5,
        abilities: { 0: 'Solar Power' },
        baseSpecies: 'Démolosse'
    },
    'Kangourex-Mega': {
        types: ['Normal'],
        bs: { hp: 105, at: 125, df: 100, sa: 60, sd: 100, sp: 100 },
        weightkg: 100,
        abilities: { 0: 'Parental Bond' },
        baseSpecies: 'Kangourex'
    },
    'Latias-Méga': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 100, df: 120, sa: 140, sd: 150, sp: 110 },
        weightkg: 52,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latias'
    },
    'Latios-Méga': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 130, df: 100, sa: 160, sd: 120, sp: 110 },
        weightkg: 70,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latios'
    },
    'Lockpin-Mega': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 65, at: 136, df: 94, sa: 54, sd: 96, sp: 135 },
        weightkg: 28.3,
        abilities: { 0: 'Scrappy' },
        baseSpecies: 'Lockpin'
    },
    'Lucario-Méga': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        weightkg: 57.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Lucario'
    },
    'Élecsprint-Mega': {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 80, sa: 135, sd: 80, sp: 135 },
        weightkg: 44,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Élecsprint'
    },
    'Mysdibule-Mega': {
        types: ['Steel', 'Fairy'],
        bs: { hp: 50, at: 105, df: 125, sa: 55, sd: 95, sp: 50 },
        weightkg: 23.5,
        abilities: { 0: 'Huge Power' },
        baseSpecies: 'Mysdibule'
    },
    'Charmina-Mega': {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 100, df: 85, sa: 80, sd: 85, sp: 100 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' },
        baseSpecies: 'Charmina'
    },
    'Métalosse-Mega': {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
        weightkg: 942.9,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Métalosse',
        gender: 'N'
    },
    'Mewtwo-Méga-X': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        weightkg: 127,
        abilities: { 0: 'Steadfast' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Mewtwo-Méga-Y': {
        types: ['Psychic'],
        bs: { hp: 106, at: 150, df: 70, sa: 194, sd: 120, sp: 140 },
        weightkg: 33,
        abilities: { 0: 'Insomnia' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Roucarnage-Mega': {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 80, sa: 135, sd: 80, sp: 121 },
        weightkg: 50.5,
        abilities: { 0: 'No Guard' },
        baseSpecies: 'Roucarnage'
    },
    'Scarabrute-Mega': {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 155, df: 120, sa: 65, sd: 90, sp: 105 },
        weightkg: 59,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Scarabrute'
    },
    'Rayquaza-Méga': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 180, df: 100, sa: 180, sd: 100, sp: 115 },
        weightkg: 392,
        gender: 'N',
        abilities: { 0: 'Delta Stream' },
        baseSpecies: 'Rayquaza'
    },
    'Ténéfix-Mega': {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 85, df: 125, sa: 85, sd: 115, sp: 20 },
        weightkg: 161,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Ténéfix'
    },
    'Drattak-Mega': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 145, df: 130, sa: 120, sd: 90, sp: 120 },
        weightkg: 112.6,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Drattak'
    },
    'Jungko-Mega': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 75, sa: 145, sd: 85, sp: 145 },
        weightkg: 55.2,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Jungko'
    },
    'Cizayox-Mega': {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 150, df: 140, sa: 65, sd: 100, sp: 75 },
        weightkg: 125,
        abilities: { 0: 'Technician' },
        baseSpecies: 'Cizayox'
    },
    'Sharpedo-Méga': {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 140, df: 70, sa: 110, sd: 65, sp: 105 },
        weightkg: 130.3,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Sharpedo'
    },
    'Flagadoss-Mega': {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 180, sa: 130, sd: 80, sp: 30 },
        weightkg: 120,
        abilities: { 0: 'Shell Armor' },
        baseSpecies: 'Flagadoss'
    },
    'Steelix-Méga': {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 125, df: 230, sa: 55, sd: 95, sp: 30 },
        weightkg: 740,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Steelix'
    },
    'Laggron-Mega': {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 150, df: 110, sa: 95, sd: 110, sp: 70 },
        weightkg: 102,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Laggron'
    },
    'Tyranocif-Mega': {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 164, df: 150, sa: 95, sd: 120, sp: 71 },
        weightkg: 255,
        abilities: { 0: 'Sand Stream' },
        baseSpecies: 'Tyranocif'
    },
    'Florizarre-Mega': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 100, df: 123, sa: 122, sd: 120, sp: 80 },
        weightkg: 155.5,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Florizarre'
    },
    Mistigrix: {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        otherFormes: ['Mistigrix-F']
    },
    'Mistigrix-F': {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Mistigrix'
    },
    Naviathan: {
        types: ['Water', 'Steel'],
        bs: { hp: 103, at: 110, df: 90, sa: 95, sd: 65, sp: 97 },
        weightkg: 510,
        abilities: { 0: 'Water Veil' }
    },
    Sonistrelle: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 40, at: 30, df: 35, sa: 45, sd: 40, sp: 55 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Bruyverne: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 85, at: 70, df: 80, sa: 97, sd: 80, sp: 123 },
        weightkg: 85,
        abilities: { 0: 'Frisk' }
    },
    Pandespiègle: {
        types: ['Fighting'],
        bs: { hp: 67, at: 82, df: 62, sa: 46, sd: 48, sp: 43 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Iron Fist' }
    },
    Pandarbare: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 95, at: 124, df: 78, sa: 69, sd: 71, sp: 58 },
        weightkg: 136,
        abilities: { 0: 'Iron Fist' }
    },
    Brocélôme: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Pikachu-Cosplayeur': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Rockeur': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Lady': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Docteur': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Star': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Catcheur': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    Plasmanta: {
        types: ['Electric', 'Poison'],
        bs: { hp: 60, at: 57, df: 119, sa: 131, sd: 98, sp: 100 },
        weightkg: 460,
        abilities: { 0: 'Storm Drain' }
    },
    Pluffle: {
        types: ['Fairy'],
        bs: { hp: 74, at: 38, df: 51, sa: 65, sd: 78, sp: 49 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Groudon-Primo': {
        types: ['Ground', 'Fire'],
        bs: { hp: 100, at: 180, df: 160, sa: 150, sd: 90, sp: 90 },
        weightkg: 999.7,
        abilities: { 0: 'Desolate Land' },
        baseSpecies: 'Groudon',
        gender: 'N'
    },
    'Kyogre-Primo': {
        types: ['Water'],
        bs: { hp: 100, at: 150, df: 90, sa: 180, sd: 160, sp: 90 },
        weightkg: 430,
        abilities: { 0: 'Primordial Sea' },
        baseSpecies: 'Kyogre',
        gender: 'N'
    },
    Pitrouille: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 49, at: 66, df: 70, sa: 44, sd: 55, sp: 51 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Pitrouille-Large', 'Pitrouille-Small', 'Pitrouille-Super']
    },
    'Pitrouille-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 54, at: 66, df: 70, sa: 44, sd: 55, sp: 46 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pitrouille'
    },
    'Pitrouille-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 44, at: 66, df: 70, sa: 44, sd: 55, sp: 56 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pitrouille'
    },
    'Pitrouille-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 59, at: 66, df: 70, sa: 44, sd: 55, sp: 41 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pitrouille'
    },
    Némélios: {
        types: ['Fire', 'Normal'],
        bs: { hp: 86, at: 68, df: 72, sa: 109, sd: 66, sp: 106 },
        weightkg: 81.5,
        abilities: { 0: 'Rivalry' }
    },
    Boguérisse: {
        types: ['Grass'],
        bs: { hp: 61, at: 78, df: 95, sa: 56, sd: 58, sp: 57 },
        weightkg: 29,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Lépidonille: {
        types: ['Bug'],
        bs: { hp: 38, at: 35, df: 40, sa: 27, sd: 25, sp: 35 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Cabriolaine: {
        types: ['Grass'],
        bs: { hp: 66, at: 65, df: 48, sa: 62, sd: 57, sp: 52 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Venalgue: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 60, df: 60, sa: 60, sd: 60, sp: 30 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Colimucus: {
        types: ['Dragon'],
        bs: { hp: 68, at: 75, df: 53, sa: 83, sd: 113, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Cupcanaille: {
        types: ['Fairy'],
        bs: { hp: 82, at: 80, df: 86, sa: 85, sd: 75, sp: 72 },
        weightkg: 5,
        abilities: { 0: 'Sweet Veil' }
    },
    Snugglow: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 37, df: 79, sa: 91, sd: 68, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Storm Drain' }
    },
    Pérégrain: {
        types: ['Bug'],
        bs: { hp: 45, at: 22, df: 60, sa: 27, sd: 30, sp: 29 },
        weightkg: 8.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Fluvetin: {
        types: ['Fairy'],
        bs: { hp: 78, at: 52, df: 60, sa: 63, sd: 65, sp: 23 },
        weightkg: 0.5,
        nfe: true,
        abilities: { 0: 'Healer' }
    },
    Sucroquin: {
        types: ['Fairy'],
        bs: { hp: 62, at: 48, df: 66, sa: 59, sd: 57, sp: 49 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Sweet Veil' }
    },
    Nymphali: {
        types: ['Fairy'],
        bs: { hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 60 },
        weightkg: 23.5,
        abilities: { 0: 'Cute Charm' }
    },
    Flambusard: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 81, df: 71, sa: 74, sd: 69, sp: 126 },
        weightkg: 24.5,
        abilities: { 0: 'Flame Body' }
    },
    Desséliande: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 110, df: 76, sa: 65, sd: 82, sp: 56 },
        weightkg: 71,
        abilities: { 0: 'Natural Cure' }
    },
    Rexillius: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 82, at: 121, df: 119, sa: 69, sd: 59, sp: 71 },
        weightkg: 270,
        abilities: { 0: 'Strong Jaw' }
    },
    Ptyranidur: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 58, at: 89, df: 77, sa: 45, sd: 45, sp: 48 },
        weightkg: 26,
        nfe: true,
        abilities: { 0: 'Strong Jaw' }
    },
    Prismillon: {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        otherFormes: ['Prismillon-Fancy', 'Prismillon-Pokeball']
    },
    'Prismillon-Fancy': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Prismillon'
    },
    'Prismillon-Pokeball': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Prismillon'
    },
    Volcanion: {
        types: ['Fire', 'Water'],
        bs: { hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70 },
        weightkg: 195,
        gender: 'N',
        abilities: { 0: 'Water Absorb' }
    },
    Volkraken: {
        types: ['Water', 'Fire'],
        bs: { hp: 100, at: 45, df: 80, sa: 135, sd: 100, sp: 95 },
        weightkg: 44.5,
        abilities: { 0: 'Analytic' }
    },
    Volkritter: {
        types: ['Water', 'Fire'],
        bs: { hp: 60, at: 30, df: 50, sa: 80, sd: 60, sp: 70 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Xerneas: {
        types: ['Fairy'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 215,
        abilities: { 0: 'Fairy Aura' },
        gender: 'N'
    },
    Yveltal: {
        types: ['Dark', 'Flying'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 203,
        abilities: { 0: 'Dark Aura' },
        gender: 'N'
    },
    'Zygarde-10 %-10 %': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 },
        weightkg: 305,
        abilities: { 0: 'Aura Break' },
        gender: 'N'
    }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
XY['Arceus'].otherFormes.push('Arceus-Fée');
XY['Arceus'].otherFormes.sort();
var SM_PATCH = {
    'Alakazam-Méga': { bs: { sd: 105 } },
    Arbok: { bs: { at: 95 } },
    Migalos: { bs: { sd: 70 } },
    Polagriffe: { bs: { at: 130 } },
    Éoko: { bs: { hp: 75, df: 80, sd: 90 } },
    Corayon: { bs: { hp: 65, df: 95, sd: 95 } },
    'Crucibelle-Mega': { bs: { sa: 91, sp: 108 } },
    Crabaraque: { bs: { at: 105 } },
    Hexagel: { bs: { hp: 80, df: 50 } },
    Delcatty: { bs: { sp: 90 } },
    Taupiqueur: { otherFormes: ['Taupiqueur-Alola'] },
    Dodrio: { bs: { sp: 110 } },
    Triopikeur: { bs: { at: 100 }, otherFormes: ['Triopikeur-Alola'] },
    Évoli: { otherFormes: ['Évoli-Starter'] },
    Électrode: { bs: { sp: 150 } },
    Noadkoko: { bs: { sd: 75 }, otherFormes: ['Noadkoko-Alola'] },
    'Farfetch\u2019d': { bs: { at: 90 } },
    Ectoplasma: { abilities: { 0: 'Cursed Body' } },
    Racaillou: { otherFormes: ['Racaillou-Alola'] },
    Grolem: { otherFormes: ['Grolem-Alola'] },
    Gravalanch: { otherFormes: ['Gravalanch-Alola'] },
    Amphinobi: { otherFormes: ['Amphinobi-Ash'] },
    Tadmorv: { otherFormes: ['Tadmorv-Alola'] },
    Lumivole: { bs: { df: 75, sd: 85 } },
    Séléroc: { bs: { hp: 90 } },
    Volcaropod: { bs: { hp: 60, sa: 90 } },
    Démanta: { bs: { hp: 85 } },
    Ossatueur: { otherFormes: ['Ossatueur-Alola', 'Ossatueur-Alola-Totem'] },
    Maskadra: { bs: { sa: 100, sp: 80 } },
    Miaouss: { otherFormes: ['Miaouss-Alola'] },
    Grotadmorv: { otherFormes: ['Grotadmorv-Alola'] },
    Necturna: { bs: { sp: 58 } },
    Feunard: { otherFormes: ['Feunard-Alola'] },
    Naviathan: { abilities: { 0: 'Guts' } },
    Noarfang: { bs: { sa: 86 } },
    Bekipan: { bs: { sa: 95 } },
    Persian: { otherFormes: ['Persian-Alola'] },
    Pikachu: {
        otherFormes: [
            'Pikachu-Alola',
            'Pikachu-Hoenn',
            'Pikachu-Kalos',
            'Pikachu-Originale',
            'Pikachu-Partenaire',
            'Pikachu-Sinnoh',
            'Pikachu-Partenaire',
            'Pikachu-Unys',
        ]
    },
    Qwilfish: { bs: { df: 85 } },
    Raichu: { otherFormes: ['Raichu-Alola'] },
    Rattatac: { otherFormes: ['Rattatac-Alola', 'Rattatac-Alola-Totem'] },
    Rattata: { otherFormes: ['Rattata-Alola'] },
    Sabelette: { otherFormes: ['Sabelette-Alola'] },
    Sablaireau: { otherFormes: ['Sablaireau-Alola'] },
    Solaroc: { bs: { hp: 90 } },
    Hélédelle: { bs: { sa: 75 } },
    Muciole: { bs: { df: 75, sd: 85 } },
    Goupix: { otherFormes: ['Goupix-Alola'] },
    Chovsourir: { bs: { hp: 65 } },
    'Zygarde-10 %-10 %': { otherFormes: ['Zygarde-10 %-10%', 'Zygarde-10 %-Complete'] },
    Tarenbulle: {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 82,
        otherFormes: ['Tarenbulle-Totem']
    },
    'Tarenbulle-Totem': {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 217.5,
        baseSpecies: 'Tarenbulle'
    },
    Chelours: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 120, at: 125, df: 80, sa: 55, sd: 60, sp: 60 },
        abilities: { 0: 'Fluffy' },
        weightkg: 135
    },
    Pierroteknik: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 53, at: 127, df: 53, sa: 151, sd: 79, sp: 107 },
        weightkg: 13,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Croquine: {
        types: ['Grass'],
        bs: { hp: 42, at: 30, df: 38, sa: 30, sd: 38, sp: 32 },
        weightkg: 3.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Otarlette: {
        types: ['Water'],
        bs: { hp: 60, at: 69, df: 69, sa: 91, sd: 81, sp: 50 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Denticrisse: {
        types: ['Water', 'Psychic'],
        bs: { hp: 68, at: 105, df: 70, sa: 70, sd: 70, sp: 92 },
        weightkg: 19,
        abilities: { 0: 'Dazzling' }
    },
    Mouscoto: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 107, at: 139, df: 139, sa: 53, sd: 53, sp: 79 },
        weightkg: 333.6,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Caribolt: {
        types: ['Grass', 'Electric'],
        bs: { hp: 84, at: 106, df: 82, sa: 77, sd: 80, sp: 106 },
        weightkg: 140,
        abilities: { 0: 'Overgrow' }
    },
    Bamboiselle: {
        types: ['Steel', 'Flying'],
        bs: { hp: 97, at: 101, df: 103, sa: 107, sd: 101, sp: 61 },
        weightkg: 999.9,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Chrysapile: {
        types: ['Bug', 'Electric'],
        bs: { hp: 57, at: 82, df: 95, sa: 55, sd: 75, sp: 36 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Battery' }
    },
    Guérilande: {
        types: ['Fairy'],
        bs: { hp: 51, at: 52, df: 90, sa: 82, sd: 110, sp: 100 },
        weightkg: 0.3,
        abilities: { 0: 'Flower Veil' }
    },
    Cosmovum: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 131, sa: 29, sd: 131, sp: 37 },
        weightkg: 999.9,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Sturdy' }
    },
    Coribalis: {
        types: ['Water', 'Bug'],
        bs: { hp: 76, at: 69, df: 90, sa: 65, sd: 77, sp: 43 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Cosmog: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 31, sa: 29, sd: 31, sp: 37 },
        weightkg: 0.1,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Unaware' }
    },
    Crabominable: {
        types: ['Fighting', 'Ice'],
        bs: { hp: 97, at: 132, df: 77, sa: 62, sd: 67, sp: 43 },
        weightkg: 180,
        abilities: { 0: 'Hyper Cutter' }
    },
    Crabagarre: {
        types: ['Fighting'],
        bs: { hp: 47, at: 82, df: 57, sa: 42, sd: 47, sp: 63 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Bombydou: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 40, at: 45, df: 40, sa: 55, sd: 40, sp: 84 },
        weightkg: 0.2,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Efflèche: {
        types: ['Grass', 'Flying'],
        bs: { hp: 78, at: 75, df: 75, sa: 70, sd: 70, sp: 52 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Archéduc: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 78, at: 107, df: 75, sa: 100, sd: 100, sp: 70 },
        weightkg: 36.6,
        abilities: { 0: 'Overgrow' }
    },
    Araqua: {
        types: ['Water', 'Bug'],
        bs: { hp: 38, at: 40, df: 52, sa: 40, sd: 72, sp: 27 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Water Bubble' }
    },
    Sinistrail: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 70, at: 131, df: 100, sa: 86, sd: 90, sp: 40 },
        weightkg: 210,
        gender: 'N',
        abilities: { 0: 'Steelworker' }
    },
    Draïeul: {
        types: ['Normal', 'Dragon'],
        bs: { hp: 78, at: 60, df: 85, sa: 135, sd: 91, sp: 36 },
        weightkg: 185,
        abilities: { 0: 'Berserk' }
    },
    'Taupiqueur-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 10, at: 55, df: 30, sa: 35, sd: 45, sp: 90 },
        weightkg: 1,
        baseSpecies: 'Taupiqueur',
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    'Triopikeur-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 35, at: 100, df: 60, sa: 50, sd: 70, sp: 110 },
        weightkg: 66.6,
        baseSpecies: 'Triopikeur',
        abilities: { 0: 'Sand Veil' }
    },
    'Évoli-Starter': {
        types: ['Normal'],
        bs: { hp: 65, at: 75, df: 70, sa: 65, sd: 85, sp: 75 },
        weightkg: 6.5,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Évoli'
    },
    Electrelk: {
        types: ['Grass', 'Electric'],
        bs: { hp: 59, at: 81, df: 67, sa: 57, sd: 55, sp: 101 },
        weightkg: 41.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Equilibra: {
        types: ['Steel', 'Ground'],
        bs: { hp: 102, at: 50, df: 96, sa: 133, sd: 118, sp: 60 },
        weightkg: 51.3,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    'Noadkoko-Alola': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 95, at: 105, df: 85, sa: 125, sd: 75, sp: 45 },
        weightkg: 415.6,
        baseSpecies: 'Noadkoko',
        abilities: { 0: 'Frisk' }
    },
    Fawnifer: {
        types: ['Grass'],
        bs: { hp: 49, at: 61, df: 42, sa: 52, sd: 40, sp: 76 },
        weightkg: 6.9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Mimantis: {
        types: ['Grass'],
        bs: { hp: 40, at: 55, df: 35, sa: 50, sd: 35, sp: 35 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    'Racaillou-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 },
        weightkg: 20.3,
        baseSpecies: 'Racaillou',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Grolem-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 80, at: 120, df: 130, sa: 55, sd: 65, sp: 45 },
        weightkg: 316,
        abilities: { 0: 'Magnet Pull' },
        baseSpecies: 'Grolem'
    },
    Sarmuraï: {
        types: ['Bug', 'Water'],
        bs: { hp: 75, at: 125, df: 140, sa: 60, sd: 90, sp: 40 },
        weightkg: 108,
        abilities: { 0: 'Emergency Exit' }
    },
    'Gravalanch-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 },
        weightkg: 110,
        baseSpecies: 'Gravalanch',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Tadmorv-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 },
        weightkg: 42,
        baseSpecies: 'Tadmorv',
        nfe: true,
        abilities: { 0: 'Poison Touch' }
    },
    'Amphinobi-Ash': {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 145, df: 67, sa: 153, sd: 71, sp: 132 },
        weightkg: 40,
        abilities: { 0: 'Battle Bond' },
        baseSpecies: 'Amphinobi'
    },
    Larvibule: {
        types: ['Bug'],
        bs: { hp: 47, at: 62, df: 45, sa: 55, sd: 45, sp: 46 },
        weightkg: 4.4,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Argouste: {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 14.2,
        otherFormes: ['Argouste-Totem'],
        abilities: { 0: 'Stakeout' }
    },
    'Argouste-Totem': {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 60,
        baseSpecies: 'Argouste',
        abilities: { 0: 'Adaptability' }
    },
    Engloutyran: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 223, at: 101, df: 53, sa: 97, sd: 53, sp: 43 },
        weightkg: 888,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Écaïd': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 },
        weightkg: 47,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Félinferno: {
        types: ['Fire', 'Dark'],
        bs: { hp: 95, at: 115, df: 90, sa: 80, sd: 90, sp: 60 },
        weightkg: 83,
        abilities: { 0: 'Blaze' }
    },
    'Bébécaille': {
        types: ['Dragon'],
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 },
        weightkg: 29.7,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Justyke: {
        types: ['Steel', 'Ground'],
        bs: { hp: 72, at: 70, df: 56, sa: 83, sd: 68, sp: 30 },
        weightkg: 36.5,
        nfe: true,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Jumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 92, at: 63, df: 97, sa: 124, sd: 104, sp: 96 },
        weightkg: 200,
        abilities: { 0: 'Trace' }
    },
    Katagami: {
        types: ['Grass', 'Steel'],
        bs: { hp: 59, at: 181, df: 131, sa: 59, sd: 31, sp: 109 },
        weightkg: 0.1,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Dodoala: {
        types: ['Normal'],
        bs: { hp: 65, at: 115, df: 65, sa: 75, sd: 95, sp: 65 },
        weightkg: 19.9,
        abilities: { 0: 'Comatose' }
    },
    'Ékaïser': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 78.2,
        otherFormes: ['Ékaïser-Totem'],
        abilities: { 0: 'Bulletproof' }
    },
    'Ékaïser-Totem': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 207.5,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Ékaïser'
    },
    Flamiaou: {
        types: ['Fire'],
        bs: { hp: 45, at: 65, df: 40, sa: 60, sd: 40, sp: 70 },
        weightkg: 4.3,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Lunala: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 137, at: 113, df: 89, sa: 137, sd: 107, sp: 97 },
        weightkg: 120,
        abilities: { 0: 'Shadow Shield' },
        gender: 'N'
    },
    Floramantis: {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 18.5,
        otherFormes: ['Floramantis-Totem'],
        abilities: { 0: 'Leaf Guard' }
    },
    'Floramantis-Totem': {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 58,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Floramantis'
    },
    Lougaroc: {
        types: ['Rock'],
        bs: { hp: 75, at: 115, df: 65, sa: 55, sd: 65, sp: 112 },
        weightkg: 25,
        otherFormes: ['Lougaroc-Dusk', 'Lougaroc-Midnight'],
        abilities: { 0: 'Keen Eye' }
    },
    'Lougaroc-Dusk': {
        types: ['Rock'],
        bs: { hp: 75, at: 117, df: 65, sa: 55, sd: 65, sp: 110 },
        weightkg: 25,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Lougaroc'
    },
    'Lougaroc-Midnight': {
        types: ['Rock'],
        bs: { hp: 85, at: 115, df: 75, sa: 55, sd: 75, sp: 82 },
        weightkg: 25,
        baseSpecies: 'Lougaroc',
        abilities: { 0: 'Keen Eye' }
    },
    Magearna: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    Vorastérie: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 43, sd: 52, sp: 45 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Merciless' }
    },
    'Ossatueur-Alola': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 34,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Ossatueur'
    },
    'Ossatueur-Alola-Totem': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 98,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Ossatueur'
    },
    Marshadow: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 90, at: 125, df: 80, sa: 90, sd: 90, sp: 125 },
        weightkg: 22.2,
        gender: 'N',
        abilities: { 0: 'Technician' }
    },
    Melmetal: {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 800,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Meltan: {
        types: ['Steel'],
        bs: { hp: 46, at: 65, df: 65, sa: 55, sd: 35, sp: 34 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    'Miaouss-Alola': {
        types: ['Dark'],
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 90 },
        weightkg: 4.2,
        baseSpecies: 'Miaouss',
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Mimiqui: {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        otherFormes: ['Mimiqui-Busted', 'Mimiqui-Busted-Totem', 'Mimiqui-Totem'],
        abilities: { 0: 'Disguise' }
    },
    'Mimiqui-Busted': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        baseSpecies: 'Mimiqui',
        abilities: { 0: 'Disguise' }
    },
    'Mimiqui-Busted-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimiqui',
        abilities: { 0: 'Disguise' }
    },
    'Mimiqui-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimiqui',
        abilities: { 0: 'Disguise' }
    },
    Météno: {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 100, df: 60, sa: 100, sd: 60, sp: 120 },
        weightkg: 0.3,
        otherFormes: ['Météno-Meteor'],
        gender: 'N',
        abilities: { 0: 'Shields Down' }
    },
    'Météno-Meteor': {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 60, df: 100, sa: 60, sd: 100, sp: 60 },
        weightkg: 40,
        gender: 'N',
        baseSpecies: 'Météno',
        abilities: { 0: 'Shields Down' }
    },
    Spododo: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 40, at: 35, df: 55, sa: 65, sd: 75, sp: 15 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Illuminate' }
    },
    Tiboudet: {
        types: ['Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45 },
        weightkg: 110,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Bourrinos: {
        types: ['Ground'],
        bs: { hp: 100, at: 125, df: 100, sa: 55, sd: 85, sp: 35 },
        weightkg: 920,
        abilities: { 0: 'Own Tempo' }
    },
    'Grotadmorv-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 },
        weightkg: 52,
        baseSpecies: 'Grotadmorv',
        abilities: { 0: 'Poison Touch' }
    },
    Mumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 55, at: 30, df: 64, sa: 87, sd: 73, sp: 66 },
        weightkg: 83,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Mandrillon: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 73, at: 73, df: 73, sa: 127, sd: 73, sp: 121 },
        weightkg: 150,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Necrozma: {
        types: ['Psychic'],
        bs: { hp: 97, at: 107, df: 101, sa: 127, sd: 89, sp: 79 },
        weightkg: 230,
        abilities: { 0: 'Prism Armor' },
        otherFormes: ['Necrozma-Aurore', 'Necrozma-Couchant', 'Necrozma-Ultra'],
        gender: 'N'
    },
    'Necrozma-Aurore': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 97, at: 113, df: 109, sa: 157, sd: 127, sp: 77 },
        weightkg: 350,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Couchant': {
        types: ['Psychic', 'Steel'],
        bs: { hp: 97, at: 157, df: 127, sa: 113, sd: 109, sp: 77 },
        weightkg: 460,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Ultra': {
        types: ['Psychic', 'Dragon'],
        bs: { hp: 97, at: 167, df: 97, sa: 167, sd: 97, sp: 129 },
        weightkg: 230,
        abilities: { 0: 'Neuroforce' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    Zéroïd: {
        types: ['Rock', 'Poison'],
        bs: { hp: 109, at: 53, df: 47, sa: 127, sd: 131, sp: 103 },
        weightkg: 55.5,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Feunard-Alola': {
        types: ['Ice', 'Fairy'],
        bs: { hp: 73, at: 67, df: 75, sa: 81, sd: 100, sp: 109 },
        weightkg: 19.9,
        abilities: { 0: 'Snow Cloak' },
        baseSpecies: 'Feunard'
    },
    Gouroutan: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 60 },
        weightkg: 76,
        abilities: { 0: 'Inner Focus' }
    },
    Plumeline: {
        types: ['Fire', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        otherFormes: ['Plumeline-Pa\'u', 'Plumeline-Pom-Pom', 'Plumeline-Sensu']
    },
    'Plumeline-Pa\'u': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Plumeline'
    },
    'Plumeline-Pom-Pom': {
        types: ['Electric', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Plumeline'
    },
    'Plumeline-Sensu': {
        types: ['Ghost', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Plumeline'
    },
    Pajantom: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 84, at: 133, df: 71, sa: 51, sd: 111, sp: 101 },
        weightkg: 3.1,
        abilities: { 0: 'Comatose' }
    },
    Trépassable: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 85, at: 75, df: 110, sa: 100, sd: 75, sp: 35 },
        weightkg: 250,
        abilities: { 0: 'Water Compaction' }
    },
    Quartermac: {
        types: ['Fighting'],
        bs: { hp: 100, at: 120, df: 90, sa: 40, sd: 60, sp: 80 },
        weightkg: 82.8,
        abilities: { 0: 'Receiver' }
    },
    'Persian-Alola': {
        types: ['Dark'],
        bs: { hp: 65, at: 60, df: 60, sa: 75, sd: 65, sp: 115 },
        weightkg: 33,
        baseSpecies: 'Persian',
        abilities: { 0: 'Fur Coat' }
    },
    Cancrelove: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 71, at: 137, df: 37, sa: 137, sd: 37, sp: 151 },
        weightkg: 25,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Pikachu-Alola': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Hoenn': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Kalos': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Originale': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Partenaire': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Sinnoh': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Partenaire': {
        types: ['Electric'],
        bs: { hp: 45, at: 80, df: 50, sa: 75, sd: 60, sp: 120 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Unys': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Picassaut: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 75, df: 30, sa: 30, sd: 30, sp: 65 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Vémini: {
        types: ['Poison'],
        bs: { hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73 },
        weightkg: 1.8,
        abilities: { 0: 'Beast Boost' },
        nfe: true,
        gender: 'N'
    },
    Otaquin: {
        types: ['Water'],
        bs: { hp: 50, at: 54, df: 54, sa: 66, sd: 56, sp: 40 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Primo-Groudon': {
        types: ['Water', 'Fairy'],
        bs: { hp: 80, at: 74, df: 74, sa: 126, sd: 116, sp: 60 },
        weightkg: 44,
        abilities: { 0: 'Torrent' }
    },
    Concombaffe: {
        types: ['Water'],
        bs: { hp: 55, at: 60, df: 130, sa: 30, sd: 130, sp: 5 },
        weightkg: 1.2,
        abilities: { 0: 'Innards Out' }
    },
    'Raichu-Alola': {
        types: ['Electric', 'Psychic'],
        bs: { hp: 60, at: 85, df: 50, sa: 95, sd: 85, sp: 110 },
        weightkg: 21,
        baseSpecies: 'Raichu',
        abilities: { 0: 'Surge Surfer' }
    },
    'Rattatac-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 25.5,
        baseSpecies: 'Rattatac',
        abilities: { 0: 'Gluttony' }
    },
    'Rattatac-Alola-Totem': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 105,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Rattatac'
    },
    'Rattata-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 },
        weightkg: 3.8,
        baseSpecies: 'Rattata',
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Rubombelle: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 0.5,
        otherFormes: ['Rubombelle-Totem'],
        abilities: { 0: 'Honey Gather' }
    },
    'Rubombelle-Totem': {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 2,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Rubombelle'
    },
    Rocabot: {
        types: ['Rock'],
        bs: { hp: 45, at: 65, df: 40, sa: 30, sd: 40, sp: 60 },
        weightkg: 9.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Brindibou: {
        types: ['Grass', 'Flying'],
        bs: { hp: 68, at: 55, df: 55, sa: 50, sd: 50, sp: 42 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Tritox: {
        types: ['Poison', 'Fire'],
        bs: { hp: 48, at: 44, df: 40, sa: 71, sd: 40, sp: 77 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Corrosion' }
    },
    Malamandre: {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 22.2,
        otherFormes: ['Malamandre-Totem'],
        abilities: { 0: 'Corrosion' }
    },
    'Malamandre-Totem': {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 81,
        abilities: { 0: 'Corrosion' },
        baseSpecies: 'Malamandre'
    },
    'Sabelette-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 50, at: 75, df: 90, sa: 10, sd: 35, sp: 40 },
        weightkg: 40,
        baseSpecies: 'Sabelette',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    'Sablaireau-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 75, at: 100, df: 120, sa: 25, sd: 65, sp: 65 },
        weightkg: 55,
        baseSpecies: 'Sablaireau',
        abilities: { 0: 'Snow Cloak' }
    },
    Bacabouh: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 55, at: 55, df: 80, sa: 70, sd: 45, sp: 15 },
        weightkg: 70,
        nfe: true,
        abilities: { 0: 'Water Compaction' }
    },
    Lampignon: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 60, at: 45, df: 80, sa: 90, sd: 100, sp: 30 },
        weightkg: 11.5,
        abilities: { 0: 'Illuminate' }
    },
    Silvallié: {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        gender: 'N',
        otherFormes: [
            'Silvallié-Bug',
            'Silvallié-Dark',
            'Silvallié-Dragon',
            'Silvallié-Electric',
            'Silvallié-Fairy',
            'Silvallié-Fighting',
            'Silvallié-Fire',
            'Silvallié-Flying',
            'Silvallié-Ghost',
            'Silvallié-Grass',
            'Silvallié-Ground',
            'Silvallié-Ice',
            'Silvallié-Poison',
            'Silvallié-Psychic',
            'Silvallié-Rock',
            'Silvallié-Steel',
            'Silvallié-Water',
        ]
    },
    'Silvallié-Bug': {
        types: ['Bug'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Dark': {
        types: ['Dark'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Dragon': {
        types: ['Dragon'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Electric': {
        types: ['Electric'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Fairy': {
        types: ['Fairy'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Fighting': {
        types: ['Fighting'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Fire': {
        types: ['Fire'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Flying': {
        types: ['Flying'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Ghost': {
        types: ['Ghost'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Grass': {
        types: ['Grass'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Ground': {
        types: ['Ground'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Ice': {
        types: ['Ice'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Poison': {
        types: ['Poison'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Psychic': {
        types: ['Psychic'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Rock': {
        types: ['Rock'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Steel': {
        types: ['Steel'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    'Silvallié-Water': {
        types: ['Water'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvallié',
        gender: 'N'
    },
    Smogecko: {
        types: ['Fire'],
        bs: { hp: 48, at: 66, df: 43, sa: 58, sd: 48, sp: 56 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smoguana: {
        types: ['Fire', 'Ground'],
        bs: { hp: 68, at: 86, df: 53, sa: 68, sd: 68, sp: 76 },
        weightkg: 22.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smokomodo: {
        types: ['Fire', 'Ground'],
        bs: { hp: 88, at: 116, df: 67, sa: 88, sd: 78, sp: 97 },
        weightkg: 205,
        abilities: { 0: 'Blaze' }
    },
    Snaelstrom: {
        types: ['Water', 'Bug'],
        bs: { hp: 91, at: 94, df: 110, sa: 80, sd: 97, sp: 63 },
        weightkg: 120,
        abilities: { 0: 'Torrent' }
    },
    Solgaleo: {
        types: ['Psychic', 'Steel'],
        bs: { hp: 137, at: 137, df: 107, sa: 113, sd: 89, sp: 97 },
        weightkg: 230,
        abilities: { 0: 'Full Metal Body' },
        gender: 'N'
    },
    'Ama-Ama': {
        types: ['Rock', 'Steel'],
        bs: { hp: 61, at: 131, df: 211, sa: 53, sd: 101, sp: 13 },
        weightkg: 820,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Candine: {
        types: ['Grass'],
        bs: { hp: 52, at: 40, df: 48, sa: 40, sd: 48, sp: 62 },
        weightkg: 8.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Nounourson: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50 },
        weightkg: 6.8,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    Swirlpool: {
        types: ['Water'],
        bs: { hp: 61, at: 49, df: 70, sa: 50, sd: 62, sp: 28 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Tokotoro': {
        types: ['Grass', 'Fairy'],
        bs: { hp: 70, at: 130, df: 115, sa: 85, sd: 95, sp: 75 },
        weightkg: 45.5,
        abilities: { 0: 'Grassy Surge' },
        gender: 'N'
    },
    'Tokopisco': {
        types: ['Water', 'Fairy'],
        bs: { hp: 70, at: 75, df: 115, sa: 95, sd: 130, sp: 85 },
        weightkg: 21.2,
        abilities: { 0: 'Misty Surge' },
        gender: 'N'
    },
    'Tokorico': {
        types: ['Electric', 'Fairy'],
        bs: { hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130 },
        weightkg: 20.5,
        abilities: { 0: 'Electric Surge' },
        gender: 'N'
    },
    'Tokopiyon': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 70, at: 85, df: 75, sa: 130, sd: 115, sp: 95 },
        weightkg: 18.6,
        abilities: { 0: 'Psychic Surge' },
        gender: 'N'
    },
    Togedemaru: {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 3.3,
        abilities: { 0: 'Iron Barbs' },
        otherFormes: ['Togedemaru-Dominant']
    },
    'Togedemaru-Dominant': {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 13,
        abilities: { 0: 'Sturdy' },
        baseSpecies: 'Togedemaru'
    },
    Matoufeu: {
        types: ['Fire'],
        bs: { hp: 65, at: 85, df: 50, sa: 80, sd: 50, sp: 90 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Bazoucan: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 120, df: 75, sa: 75, sd: 75, sp: 60 },
        weightkg: 26,
        abilities: { 0: 'Keen Eye' }
    },
    Prédastérie: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 63, df: 152, sa: 53, sd: 142, sp: 35 },
        weightkg: 14.5,
        abilities: { 0: 'Merciless' }
    },
    Piclairon: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 85, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 14.8,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Sucreine: {
        types: ['Grass'],
        bs: { hp: 72, at: 120, df: 98, sa: 50, sd: 98, sp: 72 },
        weightkg: 21.4,
        abilities: { 0: 'Leaf Guard' }
    },
    Boumata: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 60, at: 78, df: 135, sa: 91, sd: 85, sp: 36 },
        weightkg: 212,
        abilities: { 0: 'Shell Armor' }
    },
    'Type:0': {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 59 },
        weightkg: 120.5,
        abilities: { 0: 'Battle Armor' },
        nfe: true,
        gender: 'N'
    },
    Lucanon: {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Levitate' },
        otherFormes: ['Lucanon-Totem']
    },
    'Lucanon-Totem': {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 147.5,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Lucanon'
    },
    'Goupix-Alola': {
        types: ['Ice'],
        bs: { hp: 38, at: 41, df: 40, sa: 50, sd: 65, sp: 65 },
        weightkg: 9.9,
        baseSpecies: 'Goupix',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Sovkipou: {
        types: ['Bug', 'Water'],
        bs: { hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80 },
        weightkg: 12,
        abilities: { 0: 'Wimp Out' },
        nfe: true
    },
    Froussardine: {
        types: ['Water'],
        bs: { hp: 45, at: 20, df: 20, sa: 25, sd: 25, sp: 40 },
        weightkg: 0.3,
        otherFormes: ['Froussardine-School'],
        abilities: { 0: 'Schooling' }
    },
    'Froussardine-School': {
        types: ['Water'],
        bs: { hp: 45, at: 140, df: 130, sa: 140, sd: 135, sp: 30 },
        weightkg: 78.6,
        baseSpecies: 'Froussardine',
        abilities: { 0: 'Schooling' }
    },
    Câblifère: {
        types: ['Electric'],
        bs: { hp: 83, at: 89, df: 71, sa: 173, sd: 71, sp: 83 },
        weightkg: 100,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Manglouton: {
        types: ['Normal'],
        bs: { hp: 48, at: 70, df: 30, sa: 30, sd: 30, sp: 45 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Stakeout' }
    },
    Zeraora: {
        types: ['Electric'],
        bs: { hp: 88, at: 112, df: 75, sa: 102, sd: 80, sp: 143 },
        weightkg: 44.5,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    'Zygarde-10 %-10%': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Aura Break' },
        baseSpecies: 'Zygarde-10 %',
        gender: 'N'
    },
    'Zygarde-10 %-Complete': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 216, at: 100, df: 121, sa: 91, sd: 95, sp: 85 },
        weightkg: 610,
        abilities: { 0: 'Power Construct' },
        baseSpecies: 'Zygarde-10 %',
        gender: 'N'
    }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
delete SM['Pikachu-Cosplayeur'];
delete SM['Pikachu-Rockeur'];
delete SM['Pikachu-Lady'];
delete SM['Pikachu-Docteur'];
delete SM['Pikachu-Star'];
delete SM['Pikachu-Catcheur'];
var SS_PATCH = {
    'Exagide-Blade': { bs: { at: 140, sa: 140 } },
    'Exagide-Both': { bs: { at: 140, df: 140, sa: 140, sd: 140 } },
    'Exagide-Shield': { bs: { df: 140, sd: 140 } },
    Artikodin: { otherFormes: ['Artikodin-Galar'] },
    Tortank: { otherFormes: ['Tortank-Gmax', 'Tortank-Mega'] },
    Papilusion: { otherFormes: ['Papilusion-Gmax'] },
    Dracaufeu: { otherFormes: ['Dracaufeu-Gmax', 'Dracaufeu-Mega-X', 'Dracaufeu-Mega-Y'] },
    Corayon: { otherFormes: ['Corayon-Galar'] },
    Darumacho: {
        otherFormes: ['Darumacho-Galar', 'Darumacho-Galar-Zen', 'Darumacho-Zen']
    },
    Darumarond: { otherFormes: ['Darumarond-Galar'] },
    Évoli: { otherFormes: ['Évoli-Gmax'] },
    Equilibra: { bs: { sa: 133 } },
    'Farfetch\u2019d': { otherFormes: ['Farfetch\u2019d-Galar'] },
    Miasmax: { otherFormes: ['Miasmax-Gmax'] },
    Ectoplasma: { otherFormes: ['Ectoplasma-Gmax', 'Ectoplasma-Mega'] },
    Krabboss: { otherFormes: ['Krabboss-Gmax'] },
    Lokhlass: { otherFormes: ['Lokhlass-Gmax'] },
    Linéon: { otherFormes: ['Linéon-Galar'] },
    Mackogneur: { otherFormes: ['Mackogneur-Gmax'] },
    Melmetal: { otherFormes: ['Melmetal-Gigamax'] },
    Miaouss: { otherFormes: ['Miaouss-Alola', 'Miaouss-Galar', 'Miaouss-Gmax'] },
    Sulfura: { otherFormes: ['Sulfura-Galar'] },
    'M. Mime': { otherFormes: ['M. Mime-Galar'] },
    Pikachu: {
        otherFormes: [
            'Pikachu-Alola',
            'Pikachu-Gigamax',
            'Pikachu-Hoenn',
            'Pikachu-Kalos',
            'Pikachu-Originale',
            'Pikachu-Partenaire',
            'Pikachu-Sinnoh',
            'Pikachu-Unys',
            'Pikachu-Monde',
        ]
    },
    Ponyta: { otherFormes: ['Ponyta-Galar'] },
    Pyroak: { bs: { sa: 70, sd: 65 } },
    Galopa: { otherFormes: ['Galopa-Galar'] },
    Flagadoss: { otherFormes: ['Flagadoss-Galar', 'Flagadoss-Mega'] },
    Roigada: { otherFormes: ['Roigada-Galar'] },
    Ramoloss: { otherFormes: ['Ramoloss-Galar'] },
    Ronflex: { otherFormes: ['Ronflex-Gmax'] },
    Limonde: { otherFormes: ['Limonde-Galar'] },
    Florizarre: { otherFormes: ['Florizarre-Gmax', 'Florizarre-Mega'] },
    Voodoom: { bs: { sa: 130 } },
    Smogogo: { otherFormes: ['Smogogo-Galar'] },
    Tutafeh: { otherFormes: ['Tutafeh-Galar'] },
    Électhor: { otherFormes: ['Électhor-Galar'] },
    Zigzaton: { otherFormes: ['Zigzaton-Galar'] },
    Charmilly: {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0.5,
        abilities: { 0: 'Sweet Veil' },
        otherFormes: ['Charmilly-Gmax']
    },
    'Charmilly-Gmax': {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Charmilly'
    },
    Dratatin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 13,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Dratatin-Gmax']
    },
    'Dratatin-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Dratatin'
    },
    Verpom: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 40, at: 40, df: 80, sa: 40, sd: 40, sp: 20 },
        weightkg: 0.5,
        abilities: { 0: 'Ripen' },
        nfe: true
    },
    Hydragla: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 90, df: 100, sa: 80, sd: 90, sp: 55 },
        weightkg: 175,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Galvagla: {
        types: ['Electric', 'Ice'],
        bs: { hp: 90, at: 100, df: 90, sa: 90, sd: 80, sp: 55 },
        weightkg: 150,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Embrochet: {
        types: ['Water'],
        bs: { hp: 41, at: 63, df: 40, sa: 40, sd: 30, sp: 66 },
        weightkg: 1,
        abilities: { 0: 'Swift Swim' },
        nfe: true
    },
    'Artikodin-Galar': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 90, at: 85, df: 85, sa: 125, sd: 100, sp: 95 },
        weightkg: 50.9,
        abilities: { 0: 'Competitive' },
        gender: 'N',
        baseSpecies: 'Artikodin'
    },
    Astrolotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 108, at: 108, df: 74, sa: 92, sd: 64, sp: 114 },
        weightkg: 50,
        abilities: { 0: 'Regenerator' }
    },
    Hastacuda: {
        types: ['Water'],
        bs: { hp: 61, at: 123, df: 60, sa: 60, sd: 50, sp: 136 },
        weightkg: 30,
        abilities: { 0: 'Swift Swim' }
    },
    'Tortank-Gmax': {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sa: 85, sd: 105, sp: 78 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Tortank'
    },
    Larvadar: {
        types: ['Bug'],
        bs: { hp: 25, at: 20, df: 20, sa: 25, sd: 45, sp: 45 },
        weightkg: 8,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Fulgudog: {
        types: ['Electric'],
        bs: { hp: 69, at: 90, df: 60, sa: 90, sd: 60, sp: 121 },
        weightkg: 34,
        abilities: { 0: 'Strong Jaw' }
    },
    'Papilusion-Gmax': {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Compound Eyes' },
        baseSpecies: 'Papilusion'
    },
    Sylveroy: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 7.7,
        abilities: { 0: 'Unnerve' },
        gender: 'N',
        otherFormes: ['Sylveroy-Ice', 'Sylveroy-Shadow']
    },
    'Sylveroy-Ice': {
        types: ['Psychic', 'Ice'],
        bs: { hp: 100, at: 165, df: 150, sa: 85, sd: 130, sp: 50 },
        weightkg: 809.1,
        abilities: { 0: 'As One (Blizzeval)' },
        gender: 'N',
        baseSpecies: 'Sylveroy'
    },
    'Sylveroy-Shadow': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 100, at: 85, df: 80, sa: 165, sd: 100, sp: 150 },
        weightkg: 53.6,
        abilities: { 0: 'As One (Spectreval)' },
        gender: 'N',
        baseSpecies: 'Sylveroy'
    },
    Wagomine: {
        types: ['Rock', 'Fire'],
        bs: { hp: 80, at: 60, df: 90, sa: 60, sd: 70, sp: 50 },
        weightkg: 78,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Scolocendre: {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Flash Fire' },
        otherFormes: ['Scolocendre-Gmax']
    },
    'Scolocendre-Gmax': {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 0,
        abilities: { 0: 'Flash Fire' },
        baseSpecies: 'Scolocendre'
    },
    'Dracaufeu-Gmax': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Dracaufeu'
    },
    Khélocrok: {
        types: ['Water'],
        bs: { hp: 50, at: 64, df: 50, sa: 38, sd: 38, sp: 44 },
        weightkg: 8.5,
        abilities: { 0: 'Strong Jaw' },
        nfe: true
    },
    Chromera: {
        types: ['Dark', 'Normal'],
        bs: { hp: 85, at: 85, df: 115, sa: 115, sd: 100, sp: 100 },
        weightkg: 215,
        abilities: { 0: 'Color Change' },
        gender: 'N'
    },
    Pyrobut: {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 33,
        abilities: { 0: 'Blaze' },
        otherFormes: ['Pyrobut-Gmax']
    },
    'Pyrobut-Gmax': {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Pyrobut'
    },
    Poulpaf: {
        types: ['Fighting'],
        bs: { hp: 50, at: 68, df: 60, sa: 50, sd: 50, sp: 32 },
        weightkg: 4,
        abilities: { 0: 'Limber' },
        nfe: true
    },
    Monthracite: {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 310.5,
        abilities: { 0: 'Steam Engine' },
        otherFormes: ['Monthracite-Gmax']
    },
    'Monthracite-Gmax': {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Steam Engine' },
        baseSpecies: 'Monthracite'
    },
    Pachyradjah: {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 650,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Pachyradjah-Gmax']
    },
    'Pachyradjah-Gmax': {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Pachyradjah'
    },
    'Corayon-Galar': {
        types: ['Ghost'],
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 },
        weightkg: 0.5,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Corayon'
    },
    Corvaillus: {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 75,
        abilities: { 0: 'Pressure' },
        otherFormes: ['Corvaillus-Gmax']
    },
    'Corvaillus-Gmax': {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Corvaillus'
    },
    Bleuseille: {
        types: ['Flying'],
        bs: { hp: 68, at: 67, df: 55, sa: 43, sd: 55, sp: 77 },
        weightkg: 16,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Nigosier: {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        otherFormes: ['Nigosier-Gorging', 'Nigosier-Glouptig']
    },
    'Nigosier-Gorging': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Nigosier'
    },
    'Nigosier-Glouptig': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Nigosier'
    },
    Charibari: {
        types: ['Steel'],
        bs: { hp: 72, at: 80, df: 49, sa: 40, sd: 49, sp: 40 },
        weightkg: 100,
        abilities: { 0: 'Sheer Force' },
        nfe: true
    },
    Corayôme: {
        types: ['Ghost'],
        bs: { hp: 60, at: 95, df: 50, sa: 145, sd: 130, sp: 30 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' }
    },
    'Darumacho-Galar': {
        types: ['Ice'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 120,
        abilities: { 0: 'Gorilla Tactics' },
        baseSpecies: 'Darumacho'
    },
    'Darumacho-Galar-Zen': {
        types: ['Ice', 'Fire'],
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 },
        weightkg: 120,
        abilities: { 0: 'Zen Mode' },
        baseSpecies: 'Darumacho'
    },
    'Darumarond-Galar': {
        types: ['Ice'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 40,
        abilities: { 0: 'Hustle' },
        nfe: true,
        baseSpecies: 'Darumarond'
    },
    Coléodôme: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 35, df: 80, sa: 50, sd: 90, sp: 30 },
        weightkg: 19.5,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Hydragon: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 90, df: 100, sa: 70, sd: 80, sp: 75 },
        weightkg: 215,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Galvagon: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 100, df: 90, sa: 80, sd: 70, sp: 75 },
        weightkg: 190,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Lanssorien: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 88, at: 120, df: 75, sa: 100, sd: 75, sp: 142 },
        weightkg: 50,
        abilities: { 0: 'Clear Body' }
    },
    Dispareptil: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 68, at: 80, df: 50, sa: 60, sd: 50, sp: 102 },
        weightkg: 11,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Torgamord: {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 115.5,
        abilities: { 0: 'Strong Jaw' },
        otherFormes: ['Torgamord-Gmax']
    },
    'Torgamord-Gmax': {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 0,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Torgamord'
    },
    Fantyrm: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 28, at: 60, df: 30, sa: 40, sd: 30, sp: 82 },
        weightkg: 2,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Arrozard: {
        types: ['Water'],
        bs: { hp: 65, at: 60, df: 55, sa: 95, sd: 55, sp: 90 },
        weightkg: 11.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Moumouflon: {
        types: ['Normal'],
        bs: { hp: 72, at: 80, df: 100, sa: 60, sd: 90, sp: 88 },
        weightkg: 43,
        abilities: { 0: 'Fluffy' }
    },
    Duralugon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 40,
        abilities: { 0: 'Light Metal' },
        otherFormes: ['Duralugon-Gmax']
    },
    'Duralugon-Gmax': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Light Metal' },
        baseSpecies: 'Duralugon'
    },
    'Évoli-Gmax': {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sa: 45, sd: 65, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Évoli'
    },
    Bekaglaçon: {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 110, sa: 65, sd: 90, sp: 50 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        otherFormes: ['Bekaglaçon-Noice']
    },
    'Bekaglaçon-Noice': {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        baseSpecies: 'Bekaglaçon'
    },
    Blancoton: {
        types: ['Grass'],
        bs: { hp: 60, at: 50, df: 90, sa: 80, sd: 120, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Cotton Down' }
    },
    Éthernatos: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 140, at: 85, df: 95, sa: 145, sd: 95, sp: 130 },
        weightkg: 950,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Éthernatos-Eternamax']
    },
    'Éthernatos-Eternamax': {
        types: ['Poison', 'Dragon'],
        bs: { hp: 255, at: 115, df: 250, sa: 125, sd: 250, sp: 130 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Éthernatos'
    },
    Hexadron: {
        types: ['Fighting'],
        bs: { hp: 65, at: 100, df: 100, sa: 70, sd: 60, sp: 75 },
        weightkg: 62,
        abilities: { 0: 'Battle Armor' },
        gender: 'N'
    },
    'Farfetch\u2019d-Galar': {
        types: ['Fighting'],
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 },
        weightkg: 15,
        abilities: { 0: 'Steadfast' },
        nfe: true,
        baseSpecies: 'Farfetch\u2019d'
    },
    Pomdrapi: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 1,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Pomdrapi-Gmax']
    },
    'Pomdrapi-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Pomdrapi'
    },
    Beldeneige: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 65, df: 60, sa: 125, sd: 90, sp: 65 },
        weightkg: 42,
        abilities: { 0: 'Shield Dust' }
    },
    'Miasmax-Gmax': {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Stench' },
        baseSpecies: 'Miasmax'
    },
    'Ectoplasma-Gmax': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 110 },
        weightkg: 0,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Ectoplasma'
    },
    Blizzeval: {
        types: ['Ice'],
        bs: { hp: 100, at: 145, df: 130, sa: 65, sd: 110, sp: 30 },
        weightkg: 800,
        abilities: { 0: 'Chilling Neigh' },
        gender: 'N'
    },
    Tournicoton: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 60, sa: 40, sd: 60, sp: 10 },
        weightkg: 2.2,
        abilities: { 0: 'Cotton Down' },
        nfe: true
    },
    Krakos: {
        types: ['Fighting'],
        bs: { hp: 80, at: 118, df: 90, sa: 70, sd: 80, sp: 42 },
        weightkg: 39,
        abilities: { 0: 'Limber' }
    },
    Rongrigou: {
        types: ['Normal'],
        bs: { hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 20 },
        weightkg: 6,
        abilities: { 0: 'Cheek Pouch' }
    },
    Angoliath: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Angoliath-Gmax']
    },
    'Angoliath-Gmax': {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Angoliath'
    },
    Ouistempo: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65 },
        weightkg: 5,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Bibichut: {
        types: ['Psychic'],
        bs: { hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39 },
        weightkg: 3.4,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Sorcilence: {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 5.1,
        abilities: { 0: 'Healer' },
        otherFormes: ['Sorcilence-Gmax']
    },
    'Sorcilence-Gmax': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 0,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Sorcilence'
    },
    Chapotus: {
        types: ['Psychic'],
        bs: { hp: 57, at: 40, df: 65, sa: 86, sd: 73, sp: 49 },
        weightkg: 4.8,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Grimalin: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 45, at: 45, df: 30, sa: 55, sd: 40, sp: 50 },
        weightkg: 5.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Wimessir: {
        types: ['Psychic', 'Normal'],
        bs: { hp: 60, at: 65, df: 55, sa: 105, sd: 95, sp: 95 },
        weightkg: 28,
        abilities: { 0: 'Inner Focus' },
        otherFormes: ['Wimessir-F']
    },
    'Wimessir-F': {
        types: ['Psychic', 'Normal'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 },
        weightkg: 28,
        abilities: { 0: 'Own Tempo' },
        baseSpecies: 'Wimessir'
    },
    Lézargus: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 45.2,
        abilities: { 0: 'Torrent' },
        otherFormes: ['Lézargus-Gmax']
    },
    'Lézargus-Gmax': {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Lézargus'
    },
    'Krabboss-Gmax': {
        types: ['Water'],
        bs: { hp: 55, at: 130, df: 115, sa: 50, sd: 50, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Hyper Cutter' },
        baseSpecies: 'Krabboss'
    },
    'Wushours': {
        types: ['Fighting'],
        bs: { hp: 60, at: 90, df: 60, sa: 53, sd: 50, sp: 72 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    'Lokhlass-Gmax': {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sa: 85, sd: 95, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Water Absorb' },
        baseSpecies: 'Lokhlass'
    },
    'Linéon-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Linéon'
    },
    Magearna: { otherFormes: ['Magearna-Passé'] },
    'Magearna-Passé': {
        baseSpecies: 'Magearna',
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    'Mackogneur-Gmax': {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Guts' },
        baseSpecies: 'Mackogneur'
    },
    'Melmetal-Gigamax': {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 0,
        abilities: { 0: 'Iron Fist' },
        baseSpecies: 'Melmetal',
        gender: 'N'
    },
    'Miaouss-Galar': {
        types: ['Steel'],
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 },
        weightkg: 7.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Miaouss'
    },
    'Miaouss-Gmax': {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sa: 40, sd: 40, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Miaouss'
    },
    Miasmaw: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 85, at: 135, df: 60, sa: 88, sd: 105, sp: 99 },
        weightkg: 57,
        abilities: { 0: 'Neutralizing Gas' }
    },
    Miasmite: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 40, at: 85, df: 60, sa: 52, sd: 52, sp: 44 },
        weightkg: 10.1,
        abilities: { 0: 'Neutralizing Gas' },
        nfe: true
    },
    Crèmy: {
        types: ['Fairy'],
        bs: { hp: 45, at: 40, df: 40, sa: 50, sd: 61, sp: 34 },
        weightkg: 0.3,
        abilities: { 0: 'Sweet Veil' },
        nfe: true
    },
    'Sulfura-Galar': {
        types: ['Dark', 'Flying'],
        bs: { hp: 90, at: 85, df: 90, sa: 100, sd: 125, sp: 90 },
        weightkg: 66,
        abilities: { 0: 'Berserk' },
        gender: 'N',
        baseSpecies: 'Sulfura'
    },
    Fourbelin: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 65, at: 60, df: 45, sa: 75, sd: 55, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Morpeko: {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        otherFormes: ['Morpeko-Affamé']
    },
    'Morpeko-Affamé': {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        baseSpecies: 'Morpeko'
    },
    'M. Mime-Galar': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 },
        weightkg: 56.8,
        abilities: { 0: 'Vital Spirit' },
        nfe: true,
        baseSpecies: 'M. Mime'
    },
    'M. Glaquette': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 80, at: 85, df: 75, sa: 110, sd: 100, sp: 70 },
        weightkg: 58.2,
        abilities: { 0: 'Tangled Feet' }
    },
    Goupilou: {
        types: ['Dark'],
        bs: { hp: 40, at: 28, df: 28, sa: 47, sd: 52, sp: 50 },
        weightkg: 8.9,
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Ixon: {
        types: ['Dark', 'Normal'],
        bs: { hp: 93, at: 90, df: 101, sa: 60, sd: 81, sp: 95 },
        weightkg: 46,
        abilities: { 0: 'Reckless' }
    },
    Astronelle: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 40.8,
        abilities: { 0: 'Swarm' },
        otherFormes: ['Astronelle-Gmax']
    },
    'Astronelle-Gmax': {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Swarm' },
        baseSpecies: 'Astronelle'
    },
    Berserkatt: {
        types: ['Steel'],
        bs: { hp: 70, at: 110, df: 100, sa: 50, sd: 60, sp: 50 },
        weightkg: 28,
        abilities: { 0: 'Battle Armor' }
    },
    'Pikachu-Gigamax': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Monde': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Wattapik: {
        types: ['Electric'],
        bs: { hp: 48, at: 101, df: 95, sa: 91, sd: 85, sp: 15 },
        weightkg: 1,
        abilities: { 0: 'Lightning Rod' }
    },
    Polthégeist: {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        otherFormes: ['Polthégeist-Antique'],
        gender: 'N'
    },
    'Polthégeist-Antique': {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        baseSpecies: 'Polthégeist',
        gender: 'N'
    },
    'Ponyta-Galar': {
        types: ['Psychic'],
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        weightkg: 24,
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Ponyta'
    },
    Lapyro: {
        types: ['Fire'],
        bs: { hp: 65, at: 86, df: 60, sa: 55, sd: 60, sp: 94 },
        weightkg: 9,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    'Galopa-Galar': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 65, at: 100, df: 70, sa: 80, sd: 80, sp: 105 },
        weightkg: 80,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Galopa'
    },
    Regidrago: {
        types: ['Dragon'],
        bs: { hp: 200, at: 100, df: 50, sa: 100, sd: 50, sp: 80 },
        weightkg: 200,
        abilities: { 0: 'Dragon\'s Maw' },
        gender: 'N'
    },
    Regieleki: {
        types: ['Electric'],
        bs: { hp: 80, at: 100, df: 50, sa: 100, sd: 50, sp: 200 },
        weightkg: 145,
        abilities: { 0: 'Transistor' },
        gender: 'N'
    },
    Gorythmic: {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' },
        otherFormes: ['Gorythmic-Gmax']
    },
    'Gorythmic-Gmax': {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Gorythmic'
    },
    Charbi: {
        types: ['Rock'],
        bs: { hp: 30, at: 40, df: 50, sa: 40, sd: 50, sp: 30 },
        weightkg: 12,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Minisange: {
        types: ['Flying'],
        bs: { hp: 38, at: 47, df: 35, sa: 33, sd: 35, sp: 57 },
        weightkg: 1.8,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Tutétékri: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 58, at: 95, df: 145, sa: 50, sd: 105, sp: 30 },
        weightkg: 66.6,
        abilities: { 0: 'Wandering Spirit' }
    },
    Saharaja: {
        types: ['Ground'],
        bs: { hp: 70, at: 112, df: 105, sa: 65, sd: 123, sp: 78 },
        weightkg: 303.9,
        abilities: { 0: 'Water Absorb' }
    },
    Saharascal: {
        types: ['Ground'],
        bs: { hp: 50, at: 80, df: 65, sa: 45, sd: 90, sp: 70 },
        weightkg: 48,
        abilities: { 0: 'Water Absorb' },
        nfe: true
    },
    Dunaconda: {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 65.5,
        abilities: { 0: 'Sand Spit' },
        otherFormes: ['Dunaconda-Gmax']
    },
    'Dunaconda-Gmax': {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 0,
        abilities: { 0: 'Sand Spit' },
        baseSpecies: 'Dunaconda'
    },
    Flambino: {
        types: ['Fire'],
        bs: { hp: 50, at: 71, df: 40, sa: 40, sd: 40, sp: 69 },
        weightkg: 4.5,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Dunaja: {
        types: ['Ground'],
        bs: { hp: 52, at: 57, df: 75, sa: 35, sd: 50, sp: 46 },
        weightkg: 7.6,
        abilities: { 0: 'Sand Spit' },
        nfe: true
    },
    Théffroi: {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        otherFormes: ['Théffroi-Antique'],
        gender: 'N'
    },
    'Théffroi-Antique': {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Théffroi',
        gender: 'N'
    },
    'Sirfetch\u2019d': {
        types: ['Fighting'],
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 65 },
        weightkg: 117,
        abilities: { 0: 'Steadfast' }
    },
    Grillepattes: {
        types: ['Fire', 'Bug'],
        bs: { hp: 50, at: 65, df: 45, sa: 50, sd: 50, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    Rongourmand: {
        types: ['Normal'],
        bs: { hp: 70, at: 55, df: 55, sa: 35, sd: 35, sp: 25 },
        weightkg: 2.5,
        abilities: { 0: 'Cheek Pouch' },
        nfe: true
    },
    'Flagadoss-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 100, df: 95, sa: 100, sd: 70, sp: 30 },
        weightkg: 70.5,
        abilities: { 0: 'Quick Draw' },
        baseSpecies: 'Flagadoss'
    },
    'Roigada-Galar': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 65, df: 80, sa: 110, sd: 110, sp: 30 },
        weightkg: 79.5,
        abilities: { 0: 'Curious Medicine' },
        baseSpecies: 'Roigada'
    },
    'Ramoloss-Galar': {
        types: ['Psychic'],
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Gluttony' },
        baseSpecies: 'Ramoloss'
    },
    Solotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 68, at: 48, df: 34, sa: 72, sd: 24, sp: 84 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Regenerator' }
    },
    Frissonille: {
        types: ['Ice', 'Bug'],
        bs: { hp: 30, at: 25, df: 35, sa: 45, sd: 30, sp: 20 },
        weightkg: 3.8,
        abilities: { 0: 'Shield Dust' },
        nfe: true
    },
    'Ronflex-Gmax': {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Immunity' },
        baseSpecies: 'Ronflex'
    },
    Larméléon: {
        types: ['Water'],
        bs: { hp: 50, at: 40, df: 40, sa: 70, sd: 40, sp: 70 },
        weightkg: 4,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Spectreval: {
        types: ['Ghost'],
        bs: { hp: 100, at: 65, df: 60, sa: 145, sd: 80, sp: 130 },
        weightkg: 44.5,
        abilities: { 0: 'Grim Neigh' },
        gender: 'N'
    },
    Dolman: {
        types: ['Rock'],
        bs: { hp: 100, at: 125, df: 135, sa: 20, sd: 20, sp: 70 },
        weightkg: 520,
        abilities: { 0: 'Power Spot' }
    },
    'Limonde-Galar': {
        types: ['Ground', 'Steel'],
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 },
        weightkg: 20.5,
        abilities: { 0: 'Mimicry' },
        baseSpecies: 'Limonde'
    },
    Roublenard: {
        types: ['Dark'],
        bs: { hp: 70, at: 58, df: 58, sa: 87, sd: 92, sp: 90 },
        weightkg: 19.9,
        abilities: { 0: 'Run Away' }
    },
    Badabouin: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 70, sa: 55, sd: 60, sp: 80 },
        weightkg: 14,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Toxizap: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 38, df: 35, sa: 54, sd: 35, sp: 40 },
        weightkg: 11,
        abilities: { 0: 'Rattled' },
        nfe: true
    },
    Salarsen: {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        otherFormes: ['Salarsen-Gmax', 'Salarsen-Low-Key', 'Salarsen-Low-Key-Gmax']
    },
    'Salarsen-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Salarsen'
    },
    'Salarsen-Low-Key': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Salarsen'
    },
    'Salarsen-Low-Key-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Salarsen'
    },
    Shifours: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        otherFormes: ['Shifours-Gmax', 'Shifours-Rapid-Strike', 'Shifours-Rapid-Strike-Gmax']
    },
    'Shifours-Rapid-Strike': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Shifours'
    },
    'Shifours-Rapid-Strike-Gmax': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Shifours'
    },
    'Shifours-Gmax': {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 0,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Shifours'
    },
    Venomicon: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 50, df: 113, sa: 118, sd: 90, sp: 64 },
        weightkg: 11.5,
        abilities: { 0: 'Stamina' },
        otherFormes: ['Venomicon-Epilogue'],
        gender: 'N'
    },
    'Venomicon-Epilogue': {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 102, df: 85, sa: 62, sd: 85, sp: 101 },
        weightkg: 12.4,
        abilities: { 0: 'Tinted Lens' },
        baseSpecies: 'Venomicon',
        gender: 'N'
    },
    'Florizarre-Gmax': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sa: 100, sd: 100, sp: 80 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Florizarre'
    },
    'Smogogo-Galar': {
        types: ['Poison', 'Fairy'],
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        weightkg: 16,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Smogogo'
    },
    Moumouton: {
        types: ['Normal'],
        bs: { hp: 42, at: 40, df: 55, sa: 40, sd: 45, sp: 48 },
        weightkg: 6,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    'Tutafeh-Galar': {
        types: ['Ground', 'Ghost'],
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Wandering Spirit' },
        nfe: true,
        baseSpecies: 'Tutafeh'
    },
    Voltoutou: {
        types: ['Electric'],
        bs: { hp: 59, at: 45, df: 50, sa: 40, sd: 50, sp: 26 },
        weightkg: 13.5,
        abilities: { 0: 'Ball Fetch' },
        nfe: true
    },
    Zacian: {
        types: ['Fairy'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 110,
        abilities: { 0: 'Intrepid Sword' },
        gender: 'N',
        otherFormes: ['Zacian-Suprême']
    },
    'Zacian-Suprême': {
        types: ['Fairy', 'Steel'],
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
        weightkg: 355,
        abilities: { 0: 'Intrepid Sword' },
        baseSpecies: 'Zacian',
        gender: 'N'
    },
    Zamazenta: {
        types: ['Fighting'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 210,
        abilities: { 0: 'Dauntless Shield' },
        gender: 'N',
        otherFormes: ['Zamazenta-Suprême']
    },
    'Zamazenta-Suprême': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 },
        weightkg: 785,
        abilities: { 0: 'Dauntless Shield' },
        baseSpecies: 'Zamazenta',
        gender: 'N'
    },
    'Électhor-Galar': {
        types: ['Fighting', 'Flying'],
        bs: { hp: 90, at: 125, df: 90, sa: 85, sd: 90, sp: 100 },
        weightkg: 58.2,
        abilities: { 0: 'Defiant' },
        gender: 'N',
        baseSpecies: 'Électhor'
    },
    Zarude: {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        gender: 'N',
        otherFormes: ['Zarude-Papa']
    },
    'Zarude-Papa': {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Zarude',
        gender: 'N'
    },
    'Zigzaton-Galar': {
        types: ['Dark', 'Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Zigzaton'
    }
};
var PLA_PATCH = {
    Arcanin: { otherFormes: ['Arcanin-Hisui'] },
    Séracrawl: { otherFormes: ['Séracrawl-Hisui'] },
    Bargantua: { otherFormes: ['Bargantua-Blue-Striped', 'Bargantua-White-Striped'] },
    Gueriaigle: { otherFormes: ['Gueriaigle-Hisui'] },
    Archéduc: { otherFormes: ['Archéduc-Hisui'] },
    Dialga: { otherFormes: ['Dialga-Originelle'] },
    Électrode: { otherFormes: ['Électrode-Hisui'] },
    Muplodocus: { otherFormes: ['Muplodocus-Hisui'] },
    Caninos: { otherFormes: ['Caninos-Hisui'] },
    Fragilady: { otherFormes: ['Fragilady-Hisui'] },
    Palkia: { otherFormes: ['Palkia-Originelle'] },
    Qwilfish: { otherFormes: ['Qwilfish-Hisui'] },
    Clamiral: { otherFormes: ['Clamiral-Hisui'] },
    Colimucus: { otherFormes: ['Colimucus-Hisui'] },
    Farfuret: { otherFormes: ['Farfuret-Hisui'] },
    Cerfrousse: { nfe: true },
    Typhlosion: { otherFormes: ['Typhlosion-Hisui'] },
    Ursaring: { nfe: true },
    Voltorbee: { otherFormes: ['Voltorbe-Hisui'] },
    Zoroark: { otherFormes: ['Zoroark-Hisui'] },
    Zorua: { otherFormes: ['Zorua-Hisui'] },
    'Arcanin-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 95, at: 115, df: 80, sa: 95, sd: 80, sp: 90 },
        weightkg: 168,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Arcanin'
    },
    'Séracrawl-Hisui': {
        types: ['Ice', 'Rock'],
        bs: { hp: 95, at: 127, df: 184, sa: 34, sd: 36, sp: 38 },
        weightkg: 262.4,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Séracrawl'
    },
    Paragruel: {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 112, df: 65, sa: 80, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        otherFormes: ['Paragruel-F']
    },
    'Paragruel-F': {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 92, df: 65, sa: 100, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Paragruel'
    },
    'Bargantua-White-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rattled' },
        baseSpecies: 'Bargantua',
        nfe: true
    },
    'Gueriaigle-Hisui': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 110, at: 83, df: 70, sa: 112, sd: 70, sp: 65 },
        weightkg: 43.4,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Gueriaigle'
    },
    'Archéduc-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 112, df: 80, sa: 95, sd: 95, sp: 60 },
        weightkg: 37,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Archéduc'
    },
    'Dialga-Originelle': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 100, df: 120, sa: 150, sd: 120, sp: 90 },
        weightkg: 850,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Dialga'
    },
    'Électrode-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 60, at: 50, df: 70, sa: 80, sd: 80, sp: 150 },
        weightkg: 71,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Électrode'
    },
    Amovénus: {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 70, sa: 135, sd: 80, sp: 106 },
        weightkg: 48,
        abilities: { 0: 'Cute Charm' },
        otherFormes: ['Amovénus-Therian']
    },
    'Amovénus-Therian': {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 110, sa: 135, sd: 100, sp: 46 },
        weightkg: 48,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Amovénus'
    },
    'Muplodocus-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 80, at: 100, df: 100, sa: 110, sd: 150, sp: 60 },
        weightkg: 334.1,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Muplodocus'
    },
    'Caninos-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 60, at: 75, df: 45, sa: 65, sd: 50, sp: 55 },
        weightkg: 22.7,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Caninos',
        nfe: true
    },
    Hachécateur: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 130, df: 95, sa: 45, sd: 75, sp: 85 },
        weightkg: 89,
        abilities: { 0: 'Swarm' }
    },
    'Fragilady-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 70, at: 105, df: 75, sa: 50, sd: 75, sp: 105 },
        weightkg: 19.2,
        abilities: { 0: 'Chlorophyll' },
        baseSpecies: 'Fragilady'
    },
    Qwilpik: {
        types: ['Dark', 'Poison'],
        bs: { hp: 85, at: 115, df: 95, sa: 65, sd: 65, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' }
    },
    'Palkia-Originelle': {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 100, df: 100, sa: 150, sd: 120, sp: 120 },
        weightkg: 660,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Palkia'
    },
    'Qwilfish-Hisui': {
        types: ['Dark', 'Poison'],
        bs: { hp: 65, at: 95, df: 85, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Qwilfish',
        nfe: true
    },
    'Clamiral-Hisui': {
        types: ['Water', 'Dark'],
        bs: { hp: 90, at: 108, df: 80, sa: 100, sd: 65, sp: 85 },
        weightkg: 58.2,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Clamiral'
    },
    'Colimucus-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 58, at: 75, df: 83, sa: 83, sd: 113, sp: 40 },
        weightkg: 68.5,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Colimucus',
        nfe: true
    },
    'Farfuret-Hisui': {
        types: ['Fighting', 'Poison'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 27,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Farfuret',
        nfe: true
    },
    Farfurex: {
        types: ['Fighting', 'Poison'],
        bs: { hp: 80, at: 130, df: 60, sa: 40, sd: 80, sp: 120 },
        weightkg: 43,
        abilities: { 0: 'Pressure' }
    },
    'Typhlosion-Hisui': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 73, at: 84, df: 78, sa: 119, sd: 85, sp: 95 },
        weightkg: 69.8,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Typhlosion'
    },
    Ursaking: {
        types: ['Ground', 'Normal'],
        bs: { hp: 130, at: 140, df: 105, sa: 45, sd: 80, sp: 50 },
        weightkg: 290,
        abilities: { 0: 'Guts' }
    },
    'Voltorbe-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 40, at: 30, df: 50, sa: 55, sd: 55, sp: 100 },
        weightkg: 13,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Voltorbe',
        nfe: true
    },
    Cerbyllin: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 103, at: 105, df: 72, sa: 105, sd: 75, sp: 65 },
        weightkg: 95.1,
        abilities: { 0: 'Intimidate' }
    },
    'Zoroark-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        weightkg: 73,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zoroark'
    },
    'Zorua-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zorua',
        nfe: true
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH, PLA_PATCH);
delete SS['Pikachu-Partenaire'];
delete SS['Évoli-Starter'];
var SV_PATCH = {
    Scalproie: { nfe: true },
    Cresselia: { bs: { df: 110, sd: 120 } },
    Insolourdo: { nfe: true },
    Girafarig: { nfe: true },
    'Primo-Kyogre': { nfe: true },
    Tauros: { otherFormes: ['Tauros-Paldea', 'Tauros-Paldea-Fire', 'Tauros-Paldea-Water'] },
    Axoloto: { otherFormes: ['Axoloto-Paldea'] },
    Zacian: { bs: { at: 120 } },
    'Zacian-Suprême': { bs: { at: 150 } },
    Zamazenta: { bs: { at: 120 } },
    'Zamazenta-Suprême': { bs: { at: 120, df: 140, sd: 140 } },
    Courrousinge: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 110, at: 115, df: 80, sa: 50, sd: 90, sp: 90 },
        weightkg: 56,
        abilities: { 0: 'Vital Spirit' }
    },
    Arboliva: {
        types: ['Grass', 'Normal'],
        bs: { hp: 78, at: 69, df: 90, sa: 125, sd: 109, sp: 39 },
        weightkg: 48.2,
        abilities: { 0: 'Seed Sower' }
    },
    Cryodo: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 90, at: 95, df: 66, sa: 45, sd: 65, sp: 62 },
        weightkg: 30,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Carmadura: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 85, at: 60, df: 100, sa: 125, sd: 80, sp: 75 },
        weightkg: 85,
        abilities: { 0: 'Flash Fire' }
    },
    Glaivodo: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 115, at: 145, df: 92, sa: 75, sd: 86, sp: 87 },
        weightkg: 210,
        abilities: { 0: 'Thermal Exchange' }
    },
    Ampibidou: {
        types: ['Electric'],
        bs: { hp: 109, at: 64, df: 91, sa: 103, sd: 83, sp: 45 },
        weightkg: 113,
        abilities: { 0: 'Electromorphosis' }
    },
    Lestombaile: {
        types: ['Flying', 'Dark'],
        bs: { hp: 70, at: 103, df: 85, sa: 60, sd: 85, sp: 82 },
        weightkg: 42.9,
        abilities: { 0: 'Big Pecks' }
    },
    Virevorreur: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 55, at: 115, df: 70, sa: 80, sd: 70, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Wind Rider' }
    },
    Virovent: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 65, df: 30, sa: 45, sd: 35, sp: 60 },
        weightkg: 0.6,
        abilities: { 0: 'Wind Rider' },
        nfe: true
    },
    'Fongus-Furie': {
        types: ['Grass', 'Dark'],
        bs: { hp: 111, at: 127, df: 99, sa: 79, sd: 99, sp: 55 },
        weightkg: 21,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Pimito: {
        types: ['Grass'],
        bs: { hp: 52, at: 62, df: 40, sa: 62, sd: 40, sp: 50 },
        weightkg: 3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Malvalame: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 75, at: 125, df: 80, sa: 60, sd: 100, sp: 85 },
        weightkg: 62,
        abilities: { 0: 'Flash Fire' }
    },
    Balbalèze: {
        types: ['Ice'],
        bs: { hp: 170, at: 113, df: 65, sa: 45, sd: 55, sp: 73 },
        weightkg: 700,
        abilities: { 0: 'Thick Fat' }
    },
    Piétacé: {
        types: ['Ice'],
        bs: { hp: 108, at: 68, df: 45, sa: 30, sd: 40, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Thick Fat' },
        nfe: true
    },
    Charbambin: {
        types: ['Fire'],
        bs: { hp: 40, at: 50, df: 40, sa: 50, sd: 40, sp: 35 },
        weightkg: 10.5,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    'Yuyu': {
        types: ['Dark', 'Fire'],
        bs: { hp: 55, at: 80, df: 80, sa: 135, sd: 120, sp: 100 },
        weightkg: 4.9,
        gender: 'N',
        abilities: { 0: 'Beads of Ruin' }
    },
    'Baojian': {
        types: ['Dark', 'Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 90, sd: 65, sp: 135 },
        weightkg: 152.2,
        gender: 'N',
        abilities: { 0: 'Sword of Ruin' }
    },
    Terraiste: {
        types: ['Poison', 'Ground'],
        bs: { hp: 130, at: 75, df: 60, sa: 45, sd: 100, sp: 20 },
        weightkg: 223,
        abilities: { 0: 'Poison Point' }
    },
    Crocogril: {
        types: ['Fire'],
        bs: { hp: 81, at: 55, df: 78, sa: 90, sd: 58, sp: 49 },
        weightkg: 30.7,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Motorizard: {
        types: ['Dragon', 'Normal'],
        bs: { hp: 70, at: 95, df: 65, sa: 85, sd: 65, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Shed Skin' }
    },
    Briochien: {
        types: ['Fairy'],
        bs: { hp: 57, at: 80, df: 115, sa: 50, sd: 80, sp: 95 },
        weightkg: 14.9,
        abilities: { 0: 'Well-Baked Body' }
    },
    Olivado: {
        types: ['Grass', 'Normal'],
        bs: { hp: 52, at: 53, df: 60, sa: 78, sd: 78, sp: 33 },
        weightkg: 11.9,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Oyacata: {
        types: ['Water'],
        bs: { hp: 150, at: 100, df: 115, sa: 65, sd: 65, sp: 35 },
        weightkg: 220,
        abilities: { 0: 'Unaware' }
    },
    Deusolourdo: {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 39.2,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Deusolourdo-Three-Segment']
    },
    'Deusolourdo-Three-Segment': {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 47.4,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Deusolourdo'
    },
    Cléopsytra: {
        types: ['Psychic'],
        bs: { hp: 95, at: 60, df: 60, sa: 101, sd: 60, sp: 105 },
        weightkg: 90,
        abilities: { 0: 'Opportunist' }
    },
    Farigiraf: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 120, at: 90, df: 70, sa: 110, sd: 70, sp: 60 },
        weightkg: 160,
        abilities: { 0: 'Cud Chew' }
    },
    Pâtachiot: {
        types: ['Fairy'],
        bs: { hp: 37, at: 55, df: 70, sa: 30, sd: 55, sp: 65 },
        weightkg: 10.9,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Dofin: {
        types: ['Water'],
        bs: { hp: 70, at: 45, df: 40, sa: 45, sd: 40, sp: 75 },
        weightkg: 60.2,
        abilities: { 0: 'Water Veil' },
        nfe: true
    },
    Flamenroule: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 82, at: 115, df: 74, sa: 75, sd: 64, sp: 90 },
        weightkg: 37,
        abilities: { 0: 'Scrappy' }
    },
    Flotillon: {
        types: ['Psychic'],
        bs: { hp: 30, at: 35, df: 30, sa: 55, sd: 40, sp: 75 },
        weightkg: 1.5,
        abilities: { 0: 'Anticipation' },
        nfe: true
    },
    Matourgeon: {
        types: ['Grass'],
        bs: { hp: 61, at: 80, df: 63, sa: 60, sd: 63, sp: 83 },
        weightkg: 12.2,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    'Flotte-Mèche': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 55, df: 55, sa: 135, sd: 135, sp: 135 },
        weightkg: 4,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Frigodo: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 65, at: 75, df: 45, sa: 35, sd: 45, sp: 55 },
        weightkg: 17,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Chochodile: {
        types: ['Fire'],
        bs: { hp: 67, at: 45, df: 59, sa: 63, sd: 40, sp: 36 },
        weightkg: 9.8,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Gigansel: {
        types: ['Rock'],
        bs: { hp: 100, at: 100, df: 130, sa: 45, sd: 90, sp: 35 },
        weightkg: 240,
        abilities: { 0: 'Purifying Salt' }
    },
    Gromago: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 84 },
        weightkg: 30,
        gender: 'N',
        abilities: { 0: 'Good as Gold' }
    },
    Mordudor: {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 70, sa: 75, sd: 70, sp: 10 },
        weightkg: 5,
        gender: 'N',
        abilities: { 0: 'Rattled' },
        nfe: true
    },
    Germéclat: {
        types: ['Rock', 'Poison'],
        bs: { hp: 48, at: 35, df: 42, sa: 105, sd: 60, sp: 60 },
        weightkg: 8,
        abilities: { 0: 'Toxic Debris' },
        nfe: true
    },
    Floréclat: {
        types: ['Rock', 'Poison'],
        bs: { hp: 83, at: 55, df: 90, sa: 130, sd: 81, sp: 86 },
        weightkg: 45,
        abilities: { 0: 'Toxic Debris' }
    },
    'Tag-Tag': {
        types: ['Poison', 'Normal'],
        bs: { hp: 63, at: 95, df: 65, sa: 80, sd: 72, sp: 110 },
        weightkg: 27.2,
        abilities: { 0: 'Unburden' }
    },
    'Fort-Ivoire': {
        types: ['Ground', 'Fighting'],
        bs: { hp: 115, at: 131, df: 131, sa: 53, sd: 53, sp: 87 },
        weightkg: 320,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Toutombe: {
        types: ['Ghost'],
        bs: { hp: 50, at: 61, df: 60, sa: 30, sd: 55, sp: 34 },
        weightkg: 35,
        abilities: { 0: 'Pickup' },
        nfe: true
    },
    Tomberro: {
        types: ['Ghost'],
        bs: { hp: 72, at: 101, df: 100, sa: 50, sd: 97, sp: 68 },
        weightkg: 15,
        abilities: { 0: 'Sand Rush' }
    },
    'Hotte-de-Fer': {
        types: ['Ice', 'Water'],
        bs: { hp: 56, at: 80, df: 114, sa: 124, sd: 60, sp: 136 },
        weightkg: 11,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Paume-de-Fer': {
        types: ['Fighting', 'Electric'],
        bs: { hp: 154, at: 140, df: 108, sa: 50, sd: 68, sp: 50 },
        weightkg: 380.7,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Têtes-de-Fer': {
        types: ['Dark', 'Flying'],
        bs: { hp: 94, at: 80, df: 86, sa: 122, sd: 80, sp: 108 },
        weightkg: 111,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Mite-de-Fer': {
        types: ['Fire', 'Poison'],
        bs: { hp: 80, at: 70, df: 60, sa: 140, sd: 110, sp: 110 },
        weightkg: 36,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Épine-de-Fer': {
        types: ['Rock', 'Electric'],
        bs: { hp: 100, at: 134, df: 110, sa: 70, sd: 84, sp: 72 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Roue-de-Fer': {
        types: ['Ground', 'Steel'],
        bs: { hp: 90, at: 112, df: 120, sa: 72, sd: 70, sp: 106 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Garde-de-Fer': {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 74, at: 130, df: 90, sa: 120, sd: 60, sp: 116 },
        weightkg: 35,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    Fulgulairo: {
        types: ['Electric', 'Flying'],
        bs: { hp: 70, at: 70, df: 60, sa: 105, sd: 60, sp: 125 },
        weightkg: 38.6,
        abilities: { 0: 'Wind Power' }
    },
    Scalpereur: {
        types: ['Dark', 'Steel'],
        bs: { hp: 100, at: 135, df: 120, sa: 60, sd: 85, sp: 50 },
        weightkg: 120,
        abilities: { 0: 'Defiant' }
    },
    Craparoi: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 35, sd: 55, sp: 75 },
        weightkg: 79,
        abilities: { 0: 'Anger Shell' }
    },
    Koraidon: {
        types: ['Fighting', 'Dragon'],
        bs: { hp: 100, at: 135, df: 115, sa: 85, sd: 100, sp: 135 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Orichalcum Pulse' }
    },
    Gourmelet: {
        types: ['Normal'],
        bs: { hp: 54, at: 45, df: 40, sa: 35, sd: 45, sp: 35 },
        weightkg: 10.2,
        abilities: { 0: 'Aroma Veil' },
        nfe: true
    },
    Gambex: {
        types: ['Bug', 'Dark'],
        bs: { hp: 71, at: 102, df: 78, sa: 52, sd: 55, sp: 92 },
        weightkg: 17.5,
        abilities: { 0: 'Swarm' }
    },
    Dogrino: {
        types: ['Dark'],
        bs: { hp: 80, at: 120, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Grondogue: {
        types: ['Dark'],
        bs: { hp: 60, at: 78, df: 60, sa: 40, sd: 51, sp: 51 },
        weightkg: 16,
        abilities: { 0: 'Intimidate' },
        nfe: true
    },
    Famignol: {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.3,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        otherFormes: ['Famignol-Four']
    },
    'Famignol-Four': {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.8,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        baseSpecies: 'Famignol'
    },
    Miascarade: {
        types: ['Grass', 'Dark'],
        bs: { hp: 76, at: 110, df: 70, sa: 81, sd: 70, sp: 123 },
        weightkg: 31.2,
        abilities: { 0: 'Overgrow' }
    },
    Miraidon: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 100, at: 85, df: 100, sa: 135, sd: 115, sp: 135 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Hadron Engine' }
    },
    Selutin: {
        types: ['Rock'],
        bs: { hp: 55, at: 55, df: 75, sa: 35, sd: 35, sp: 25 },
        weightkg: 16,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Amassel: {
        types: ['Rock'],
        bs: { hp: 60, at: 60, df: 100, sa: 35, sd: 65, sp: 35 },
        weightkg: 105,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Lilliterelle: {
        types: ['Bug'],
        bs: { hp: 33, at: 46, df: 40, sa: 21, sd: 25, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Fragroin: {
        types: ['Normal'],
        bs: { hp: 110, at: 100, df: 75, sa: 59, sd: 80, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Lingering Aroma' },
        otherFormes: ['Fragroin-F']
    },
    'Fragroin-F': {
        types: ['Normal'],
        bs: { hp: 115, at: 90, df: 70, sa: 59, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Aroma Veil' },
        baseSpecies: 'Fragroin'
    },
    Ferdeter: {
        types: ['Steel'],
        bs: { hp: 70, at: 85, df: 145, sa: 60, sd: 55, sp: 65 },
        weightkg: 310,
        abilities: { 0: 'Earth Eater' }
    },
    Superdofin: {
        types: ['Water'],
        bs: { hp: 100, at: 70, df: 72, sa: 53, sd: 62, sp: 100 },
        weightkg: 60.2,
        abilities: { 0: 'Zero to Hero' },
        otherFormes: ['Superdofin-Hero']
    },
    'Superdofin-Hero': {
        types: ['Water'],
        bs: { hp: 100, at: 160, df: 97, sa: 106, sd: 87, sp: 100 },
        weightkg: 97.4,
        abilities: { 0: 'Zero to Hero' },
        baseSpecies: 'Superdofin'
    },
    Pohm: {
        types: ['Electric'],
        bs: { hp: 45, at: 50, df: 20, sa: 40, sd: 25, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Static' },
        nfe: true
    },
    Pohmotte: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 60, at: 75, df: 40, sa: 50, sd: 40, sp: 85 },
        weightkg: 6.5,
        abilities: { 0: 'Volt Absorb' },
        nfe: true
    },
    Pohmarmotte: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 70, at: 115, df: 70, sa: 70, sd: 60, sp: 105 },
        weightkg: 41,
        abilities: { 0: 'Volt Absorb' }
    },
    Palmaval: {
        types: ['Water', 'Fighting'],
        bs: { hp: 85, at: 120, df: 80, sa: 85, sd: 75, sp: 85 },
        weightkg: 61.9,
        abilities: { 0: 'Torrent' }
    },
    Coiffeton: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 45, sa: 50, sd: 45, sp: 50 },
        weightkg: 6.1,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Canarbello: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 65, sd: 60, sp: 65 },
        weightkg: 21.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Bérasca: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 75, at: 50, df: 85, sa: 115, sd: 100, sp: 45 },
        weightkg: 3.5,
        abilities: { 0: 'Synchronize' }
    },
    Léboulérou: {
        types: ['Bug'],
        bs: { hp: 41, at: 50, df: 60, sa: 31, sd: 58, sp: 30 },
        weightkg: 1,
        abilities: { 0: 'Compound Eyes' },
        nfe: true
    },
    Vrombotor: {
        types: ['Steel', 'Poison'],
        bs: { hp: 80, at: 119, df: 90, sa: 54, sd: 67, sp: 90 },
        weightkg: 120,
        abilities: { 0: 'Overcoat' }
    },
    'Rugit-Lune': {
        types: ['Dragon', 'Dark'],
        bs: { hp: 105, at: 139, df: 71, sa: 55, sd: 101, sp: 119 },
        weightkg: 380,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Pelage-Sablé': {
        types: ['Electric', 'Ground'],
        bs: { hp: 85, at: 81, df: 97, sa: 121, sd: 85, sp: 101 },
        weightkg: 60,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Scovilain: {
        types: ['Grass', 'Fire'],
        bs: { hp: 65, at: 108, df: 65, sa: 108, sd: 65, sp: 75 },
        weightkg: 15,
        abilities: { 0: 'Chlorophyll' }
    },
    'Hurle-Queue': {
        types: ['Fairy', 'Psychic'],
        bs: { hp: 115, at: 65, df: 99, sa: 65, sd: 115, sp: 111 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Gribouraigne: {
        types: ['Poison', 'Normal'],
        bs: { hp: 40, at: 65, df: 35, sa: 40, sd: 35, sp: 75 },
        weightkg: 0.7,
        abilities: { 0: 'Unburden' },
        nfe: true
    },
    Flâmigator: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 104, at: 75, df: 100, sa: 110, sd: 75, sp: 66 },
        weightkg: 326.5,
        abilities: { 0: 'Blaze' }
    },
    'Rampe-Ailes': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 85, at: 135, df: 79, sa: 85, sd: 105, sp: 81 },
        weightkg: 92,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Olivini: {
        types: ['Grass', 'Normal'],
        bs: { hp: 41, at: 35, df: 45, sa: 58, sd: 51, sp: 30 },
        weightkg: 6.5,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Filentrappe: {
        types: ['Bug'],
        bs: { hp: 60, at: 79, df: 92, sa: 52, sd: 86, sp: 35 },
        weightkg: 16.5,
        abilities: { 0: 'Insomnia' }
    },
    Poussacha: {
        types: ['Grass'],
        bs: { hp: 40, at: 61, df: 54, sa: 45, sd: 45, sp: 65 },
        weightkg: 4.1,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Tapatoès: {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        otherFormes: ['Tapatoès-Blue', 'Tapatoès-White', 'Tapatoès-Yellow']
    },
    'Tapatoès-Blue': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tapatoès'
    },
    'Tapatoès-White': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tapatoès'
    },
    'Tapatoès-Yellow': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tapatoès'
    },
    Têtampoule: {
        types: ['Electric'],
        bs: { hp: 61, at: 31, df: 41, sa: 59, sd: 35, sp: 45 },
        weightkg: 0.4,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Compagnol: {
        types: ['Normal'],
        bs: { hp: 50, at: 50, df: 45, sa: 40, sd: 45, sp: 75 },
        weightkg: 1.8,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Tissenboule: {
        types: ['Bug'],
        bs: { hp: 35, at: 41, df: 45, sa: 29, sd: 40, sp: 20 },
        weightkg: 4,
        abilities: { 0: 'Insomnia' },
        nfe: true
    },
    Nigirigon: {
        types: ['Dragon', 'Water'],
        bs: { hp: 68, at: 50, df: 60, sa: 120, sd: 95, sp: 82 },
        weightkg: 8,
        abilities: { 0: 'Commander' }
    },
    'Tauros-Paldea': {
        types: ['Fighting'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Fire': {
        types: ['Fighting', 'Fire'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Water': {
        types: ['Fighting', 'Water'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Dinglu': {
        types: ['Dark', 'Ground'],
        bs: { hp: 155, at: 110, df: 125, sa: 55, sd: 80, sp: 45 },
        weightkg: 699.7,
        gender: 'N',
        abilities: { 0: 'Vessel of Ruin' }
    },
    Forgerette: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 64, sp: 58 },
        weightkg: 8.9,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Forgelina: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 85, at: 75, df: 77, sa: 70, sd: 105, sp: 94 },
        weightkg: 112.8,
        abilities: { 0: 'Mold Breaker' }
    },
    Forgella: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 65, at: 55, df: 55, sa: 45, sd: 82, sp: 78 },
        weightkg: 59.1,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Terracool: {
        types: ['Ground', 'Grass'],
        bs: { hp: 40, at: 40, df: 35, sa: 50, sd: 100, sp: 70 },
        weightkg: 33,
        abilities: { 0: 'Mycelium Might' },
        nfe: true
    },
    Terracruel: {
        types: ['Ground', 'Grass'],
        bs: { hp: 80, at: 70, df: 65, sa: 80, sd: 120, sp: 100 },
        weightkg: 58,
        abilities: { 0: 'Mycelium Might' }
    },
    Vrombi: {
        types: ['Steel', 'Poison'],
        bs: { hp: 45, at: 70, df: 63, sa: 30, sd: 45, sp: 47 },
        weightkg: 35,
        abilities: { 0: 'Overcoat' },
        nfe: true
    },
    Délestin: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 102, df: 73, sa: 78, sd: 65, sp: 70 },
        weightkg: 90,
        abilities: { 0: 'Mold Breaker' }
    },
    Zapétrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 40, at: 40, df: 35, sa: 55, sd: 40, sp: 70 },
        weightkg: 3.6,
        abilities: { 0: 'Wind Power' },
        nfe: true
    },
    Taupikeau: {
        types: ['Water'],
        bs: { hp: 10, at: 55, df: 25, sa: 35, sd: 25, sp: 95 },
        weightkg: 1.8,
        abilities: { 0: 'Gooey' },
        nfe: true
    },
    'Chongjian': {
        types: ['Dark', 'Grass'],
        bs: { hp: 85, at: 85, df: 100, sa: 95, sd: 135, sp: 70 },
        weightkg: 74.2,
        gender: 'N',
        abilities: { 0: 'Tablets of Ruin' }
    },
    'Axoloto-Paldea': {
        types: ['Poison', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Axoloto',
        nfe: true
    },
    Triopikeau: {
        types: ['Water'],
        bs: { hp: 35, at: 100, df: 50, sa: 50, sd: 70, sp: 120 },
        weightkg: 5.4,
        abilities: { 0: 'Gooey' }
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
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
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map