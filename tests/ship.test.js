import { Ship } from '../src/modules/ship';

let boat;
beforeEach(() => {
  boat = new Ship(3);
});

test('invoke hit() increase boat.hitCounts number by 1', () => {
  expect(boat.hit()).toBe(undefined);
  expect(boat.hitCounts).toBe(1);
});

test('boat sunk when hitCounts equal to boat.length', () => {
  boat.hit();
  boat.hit();
  boat.hit();
  expect(boat.sunkStatus).toBe(true);
});

test('boat hitCounts not increase when invoke hit more that boat.length ?', () => {
  boat.hit();
  boat.hit();
  boat.hit();
  boat.hit();
  boat.hit();
  boat.hit();
  expect(boat.hitCounts).toBe(3);
});
