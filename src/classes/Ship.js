const Ship = (length) => {
  const shipLength = length;
  let isSunken = false;
  let hitPositions = [];

  const hit = (position) => {
    hitPositions.push(position);
  }
  const isSunk = () => {
    if (hitPositions.length == shipLength) {
      isSunken = true;
    }
  }

  return {
    hit,
    isSunk
  }
}

export default Ship;