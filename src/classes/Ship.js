const Ship = (length) => {
  const shipLength = length;
  let hitPositions = [];

  const hit = (position) => {
    hitPositions.push(position);
  }
  const isSunk = () => {
    return (hitPositions.length == shipLength);
  }
  const getHitPositions = () => {
    return hitPositions.slice();
  }

  return {
    hit,
    isSunk,
    getHitPositions
  }
}

export default Ship;