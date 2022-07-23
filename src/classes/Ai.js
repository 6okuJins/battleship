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

const Ai = () => {
  const moves = shuffle(new Array(100).fill().map((_, index) => index));
  const getMoves = () => {
    return moves.slice();
  }
  const getMove = () => {
    return moves.pop();
  }
  return {
    getMoves,
    getMove
  }
}
export default Ai;