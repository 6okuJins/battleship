const Gameboard = () => {
  const board = {};
  let sunkenShips = [];
  const getBoard = () => {
    return board;
  }
  const getSunkenShips = () => {
    return sunkenShips;
  }
  const placeShip = (ship, coordinates) => {
    // check if ship is already placed in that spot
    // REMEMBER: if using curly brace in arrow function, use return keyword. If omit brace, omit return.
    // REMEMBER:  Object.keys returns array of keys in string format, even if they're supposed to be something else.
    if (coordinates.some((x) => {return Object.keys(board).includes(String(x))})) {
      return
    }
    for (const key of coordinates) {
      board[key] = ship;
    }
  }
  const recieveAttack = (coordinates) => {
    const result = [];
    const ship = board[coordinates];
    if (ship) {
      // not sure if I should use ship methods here since not importing ship module
      if (!ship.getHitPositions().includes(coordinates)) {
        ship.hit(coordinates);
        result.push(true);
        if (ship.isSunk()) {
          sunkenShips.push(ship);
          result.push(true);
        } else {
          result.push(false);
        }
        
      }
    }
    else {
      board[coordinates] = null;
      result.push(false, false)
    }
    return result
  }
  const gameOver = () => {
    return (sunkenShips.length === 5);
  }

  return {
    placeShip,
    getBoard,
    getSunkenShips,
    recieveAttack,
    gameOver
  }
}
export default Gameboard;