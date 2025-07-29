"use strict";
exports.__esModule = true;
var index_1 = require("../index");
describe('Move', function () {
    test('clone', function () {
        var m = new index_1.Move(7, 'Blizzard', { useZ: true });
        expect(m.name).toBe('Laser Cryogénique');
        expect(m.bp).toBe(185);
        var clone = m.clone();
        expect(clone.name).toBe('Laser Cryogénique');
        expect(clone.bp).toBe(185);
    });
});
//# sourceMappingURL=move.test.js.map