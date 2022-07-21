import Ship from '../classes/Ship';

describe('Ship methods', () => {
  let Carrier;
  // let Battleship;
  // let Cruiser;
  // let Submarine;
  // let Destroyer;
  beforeEach(() => {
    Carrier = new Ship(5);
  });
  test('if it accepts a hit', () => {
    Carrier.hit(0);
    expect(Carrier.getHitPositions()).toEqual([0]);
  });
  test('if it accepts multiple hits', () => {
    Carrier.hit(0);
    Carrier.hit(1);
    expect(Carrier.getHitPositions()).toEqual([0,1]);
  });
  test('if it shows a ship has sunk', () => {
    Carrier.hit(0);
    Carrier.hit(1);
    Carrier.hit(2);
    Carrier.hit(3);
    Carrier.hit(4);
    expect(Carrier.isSunk()).toBeTruthy();
  });
  test('if it shows a ship is not sunk', () => {
    Carrier.hit(0);
    Carrier.hit(1);
    Carrier.hit(2);
    Carrier.hit(3);
    expect(Carrier.isSunk()).toBeFalsy();
  })
});