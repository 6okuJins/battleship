const Ship = (length) => {
  const shipLength = length;
  let hitPositions = [];

  const getShipLength = () => {
    return shipLength;
  }
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
    getHitPositions,
    getShipLength,
  }
}

export default Ship;