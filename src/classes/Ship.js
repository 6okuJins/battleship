import { v4 as uuid } from 'uuid';
const Ship = (length) => {
  const shipLength = length;
  let hitPositions = [];
  const id = uuid();
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
    id
  }
}

export default Ship;