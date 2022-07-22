const Gameboard = () => {
  const board = {};
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
  const getBoard = () => {
    return board;
  }
  return {
    placeShip,
    getBoard
  }
}
export default Gameboard;