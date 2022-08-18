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
function generatePDF (visited, sunkenShips, target, targetDirection, shiftTargetStack) {
  const ships = [5, 4, 3, 3, 2];
  console.log(target);
  sunkenShips.forEach((sunkenShip) => {
    ships.splice(ships.indexOf(sunkenShip.getShipLength()), 1);
  });
  let permCount = 0;
  // new array where each element is a square, and its value represents how many times it appears in a valid permutation
  const heatMap = new Array(100).fill(0);

  for (const ship of ships) {
    for (let axis = 0; axis < 2; axis++) {
      let i = 0;
      while (i < 100 ) {
        let valid = checkValid(axis, i, ship);
        let j = 0;
        // check to see if a ship can be placed at this location by checking each of its sub locations
        while (valid && j < ship) {
          if (visited[i + (axis === 0 ? j : j * 10)] === 'Miss') {
            valid = false;
          }
          j += 1;
        }
        if (valid) {
          permCount += 1;
          // if position at i is valid, but not yet hit, increment 
          if (!visited[i]) {
            heatMap[i] += 1;
          }
          j = 1;
          // increment the values at each sub location only if the ship placement is valid
          while (j < ship) {
            heatMap[i + (axis === 0 ? j : j * 10)] += 1;
            j += 1;
          }
        }
        i += 1;
      }
    }
  }
  if (target) {
    let adjacent;
    if (targetDirection === 'left') {
      adjacent = target - 1;
      while (adjacent % 10 > 0 && visited[adjacent] === 'Hit') {
        adjacent -= 1;
      }
      if (visited[adjacent]) {
        shiftTargetStack();
        targetDirection = 'right';
      }
    }
    if (targetDirection === 'right') {
      adjacent = target + 1;
      while (adjacent % 10 < 9 && visited[adjacent] === 'Hit') {
        adjacent += 1
      }
      if (visited[adjacent]) {
        shiftTargetStack();
        targetDirection = 'up';
      }
    }
    if (targetDirection === 'up') {
      adjacent = target + 10;
      while (Math.floor(adjacent / 10) % 10 && visited[adjacent] === 'Hit') {
        adjacent += 10
      }
      if (visited[adjacent]) {
        shiftTargetStack();
        targetDirection = 'down';
      }
    }
    if (targetDirection === 'down') {
      adjacent = target - 10;
      while (Math.floor(adjacent / 10) % 10 && visited[adjacent] === 'Hit') {
        adjacent -= 10
      }
    }
    if (!visited[adjacent]) {
      heatMap[adjacent] += 100
    } else {
      shiftTargetStack();
    }
  }
  return heatMap;
}
const Ai = () => {
  let visited = new Array(100).fill();
  let moves;
  let mode;
  let target;
  let targetStack = ['left', 'right', 'up', 'down'];
  const setTarget = (newTarget) => {
    if (!target) {
      target = newTarget;
      targetStack = ["left", "right", "up", "down"];
    }
  }
  const shiftTargetStack = () => {
    if (targetStack) {
      targetStack.shift();
    }
  }
  const removeTarget = (deTarget) => {
    target = undefined;
    targetStack = [];
  }
  const getPDF = () => {
    return generatePDF(visited);
  };
  const setVisited = (position, status) => {
    visited[position] = status;
  }
  const easyAI = () => {
    moves = shuffle(new Array(100).fill().map((_, index) => index));
    mode = 'easy';
  }
  const hardAI = () => {
    mode = 'hard';
  }
  const shipPositions = generatePositions();
  const getMoves = () => {
    return moves.slice();
  }
  const getMove = (sunkenShips) => {
    let result;
    if (mode === 'easy') {
      result = moves.pop();
    } else {
      let PDF = generatePDF(visited, sunkenShips, target, targetStack[0], shiftTargetStack);
      PDF = PDF.map((value, index) => {
        if (visited[index] === 'Hit' || visited[index] === 'Miss') {
          return 0;
        } else {
          return value;
        }
      })
      const max = Math.max(...PDF);
      result = PDF.indexOf(max);

    }
    return result;
  }
  const getPositions = () => {
    return shipPositions;
  }
  return {
    getMoves,
    getMove,
    getPositions,
    setVisited,
    setTarget,
    shiftTargetStack,
    removeTarget,
    getPDF,
    easyAI,
    hardAI
  }
}
export default Ai;