import { Ship } from '../src/modules/ship';

const boat = new Ship(3);
// test('boat length equal 3', () => {
//   expect(boat.length).toBe(3);
// });

test('invoke hit() make boat.hitCount = 1', () => {
  boat.hit();
  expect(boat.hit()).toBe(undefined);
  expect(boat.hitCounts).toBe(1);
});
