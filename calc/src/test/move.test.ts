import {Move} from '../index';

describe('Move', () => {
  test('clone', () => {
    const m = new Move(7, 'Blizzard', {useZ: true});
    expect(m.name).toBe('Laser Cryogénique');
    expect(m.bp).toBe(185);

    const clone = m.clone();
    expect(clone.name).toBe('Laser Cryogénique');
    expect(clone.bp).toBe(185);
  });
});
