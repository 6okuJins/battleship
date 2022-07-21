import { Gameboard, Ship } from '../classes';

describe('Gameboard methods', () => {
  let Carrier;
  let Battleship;
  let Cruiser;
  let Submarine;
  let Destroyer;
  let gameboard;
  beforeEach(() => {
    Carrier = Ship(5);
    gameboard = Gameboard();
  });
  test('if it accepts a new ship', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray)
    expect(gameboard.getBoard()).toEqual([Carrier, Carrier, Carrier, Carrier, Carrier, ...Array.apply(null, (new Array(95)))]);
  });
})