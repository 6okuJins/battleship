const Gameboard = () => {
  const board = Array.apply(null, new Array(100));
  const placeShip = (ship, coordinates) => {
    for (let i = 0; i < coordinates.length; i++) {
      board[coordinates[i]] = ship;
    }
  }
  return {
    placeShip
  }
}
export default Gameboard;