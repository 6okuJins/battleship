function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function getRandomInt() {
  const min = Math.ceil(0);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}
function checkValid (axis, position, currentShip) {
  let result = false;
  if (axis === 0) {
    if ((position % 10) <= (10 - currentShip)) {
      result = true;
    }
  } else {
    if ((Math.floor(position / 10)) <= (10 - currentShip)) {
      result = true;
    }
  }
  return result;
}
function generatePositions () {
  const axes = new Array(5).fill().map(() => Math.round(Math.random()));
  const ships = [2,3,3,4,5];
  let currentShip = ships.pop();
  const result = [];
  for (const axis of axes) {
    let invalid = true;
    while (invalid) {
      const randomPoint = getRandomInt();
      if (checkValid(axis, randomPoint, currentShip)) {
        const newPositions = [];

        for (let i = 0; i <= currentShip - 1; i++) {
          newPositions.push( randomPoint + (axis === 0 ? i : i * 10 ));
        }
        if (newPositions.every(val => !result.flat().includes(val))) {
          result.push(newPositions);
          invalid = false;
          currentShip = ships.pop();
        }
      }
    }
  }
  return result;
}
const Ai = () => {
  const moves = shuffle(new Array(100).fill().map((_, index) => index));
  const shipPositions = generatePositions();
  const getMoves = () => {
    return moves.slice();
  }
  const getMove = () => {
    return moves.pop();
  }
  const getPositions = () => {
    return shipPositions;
  }
  return {
    getMoves,
    getMove,
    getPositions
  }
}
export default Ai;