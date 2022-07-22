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
    Battleship = Ship(4);
    gameboard = Gameboard();
  });
  test('if it accepts a new ship', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray)
    expect(gameboard.getBoard()).toEqual({0: Carrier, 1: Carrier, 2: Carrier, 3: Carrier, 4: Carrier});
  });
  test('if it accepts multiple new ships', () => {
    const testArray1 = [0,1,2,3,4];
    const testArray2 = [5,6,7,8];
    gameboard.placeShip(Carrier, testArray1);
    gameboard.placeShip(Battleship, testArray2);
    expect(gameboard.getBoard()).toStrictEqual({0: Carrier, 1: Carrier, 2: Carrier, 3: Carrier, 4: Carrier, 5: Battleship, 6: Battleship, 7: Battleship, 8: Battleship});
  });
  test('if it allows overlapping ships', () => {
    const testArray1 = [0,1,2,3,4];
    const testArray2 = [1,2,3,4];
    gameboard.placeShip(Carrier, testArray1);
    gameboard.placeShip(Battleship, testArray2);

    expect(gameboard.getBoard()).toEqual({0: Carrier, 1: Carrier, 2: Carrier, 3: Carrier, 4: Carrier});
  });
})