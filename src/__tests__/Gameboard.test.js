import { Gameboard, Ship } from '../classes';

let Carrier;
let Battleship;
let Cruiser;
let Submarine;
let Destroyer;
let gameboard;
describe('placeShip()', () => {
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
  test('if it disallows overlapping ships', () => {
    const testArray1 = [0,1,2,3,4];
    const testArray2 = [1,2,3,4];
    gameboard.placeShip(Carrier, testArray1);
    gameboard.placeShip(Battleship, testArray2);

    expect(gameboard.getBoard()).toEqual({0: Carrier, 1: Carrier, 2: Carrier, 3: Carrier, 4: Carrier});
  });
});
describe('recieveAttack(), getBoard()', () => {
  beforeEach(() => {
    Carrier = Ship(5);
    gameboard = Gameboard();
  });
  test('if it recieves attacks', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray);
    gameboard.recieveAttack(0);
    expect(Carrier.getHitPositions()).toEqual([0]);
  });
  test('if a ship can sink', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray);
    for (const i of testArray) {
      gameboard.recieveAttack(i);
    }
    expect(Carrier.isSunk()).toBeTruthy();
  });
  test('if it disallows multiple hits at the same coordinate', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray);
    for (const i of testArray) {
      gameboard.recieveAttack(i);
      gameboard.recieveAttack(i);
    }
    expect(Carrier.getHitPositions()).toEqual([0,1,2,3,4]);
  });
  test('if it records misses', () => {
    const testArray = [0,1,2,3,4];
    gameboard.placeShip(Carrier, testArray);
    gameboard.recieveAttack(5);
    expect(gameboard.getBoard()).toEqual({...gameboard.getBoard(), 5: undefined});
  });
});
describe('gameOver()', () => {
  beforeEach(() => {
    Carrier = Ship(5);
    Battleship = Ship(4);
    Cruiser = Ship(3);
    Submarine = Ship(2);
    Destroyer = Ship(1);
    gameboard = Gameboard();
  });
  test('if it detects game still running', () => {
    const testArray1 = [0,1,2,3,4];
    const testArray2 = [5,6,7,8];
    const testArray3 = [9,10,11];
    const testArray4 = [12, 13];
    gameboard.placeShip(Carrier, testArray1);
    gameboard.placeShip(Battleship, testArray2);
    gameboard.placeShip(Cruiser, testArray3);
    gameboard.placeShip(Submarine, testArray4);
    for (let i = 0; i < 14; i++) {
      gameboard.recieveAttack(i);
    }
    expect(gameboard.gameOver()).toBeFalsy();
  });
  test('if it detects game over', () => {
    const testArray1 = [0,1,2,3,4];
    const testArray2 = [5,6,7,8];
    const testArray3 = [9,10,11];
    const testArray4 = [12, 13];
    gameboard.placeShip(Carrier, testArray1);
    gameboard.placeShip(Battleship, testArray2);
    gameboard.placeShip(Cruiser, testArray3);
    gameboard.placeShip(Submarine, testArray4);
    gameboard.placeShip(Destroyer, [14]);
    for (let i = 0; i < 15; i++) {
      gameboard.recieveAttack(i);
    }
    expect(gameboard.gameOver()).toBeTruthy();
  });
});