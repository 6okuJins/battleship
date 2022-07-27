import {Style} from '../styles';
// NOTE::: SEND POSITIONS TO CONTROLLER AFTER ALL PIECES HAVE BEEN PLACED
const Main = () => {
  const ships = [2,3,3,4,5];
  const positions = [];
  let currentShip = ships.pop();
  const dom = document.querySelector('body');
  const main = document.createElement('div');
  const playerContainer = document.createElement('div');
  playerContainer.classList.add('playerContainer');
  const opponentContainer = document.createElement('div');
  opponentContainer.classList.add('opponentContainer');
  dom.append(main);
  main.append(playerContainer, opponentContainer);
  main.classList.add('main');

  //axis button
  let axis = 'x';
  const axisBtn = document.createElement('button');
  axisBtn.textContent = axis;
  playerContainer.append(axisBtn);
  axisBtn.addEventListener('click', () => {
    if (axis === 'x') {
      axis = 'y';
    } else {
      axis = 'x';
    }
    axisBtn.textContent = axis;
  })
  // submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.id = 'submitButton';
  // player grid
  const grid = document.createElement('div');
  grid.id = 'grid';
  playerContainer.append(grid);
  playerContainer.append(submitBtn);
  for (let i = 0; i < 100; i++){
    const tile = document.createElement('div');
    grid.append(tile);
    tile.dataset.index = i;
    tile.addEventListener('mouseover', handleMouseOver);
    tile.addEventListener('mouseout', () => {
      const hovered = document.querySelectorAll('.hovered');
      hovered.forEach((element) => element.classList.remove('hovered'));
    });
    // look here if want to add pictures of ships later. add specifc class instead of general 'clicked' class
    tile.addEventListener('click', () => {
      if (tile.classList.contains('hovered')) {
        const hovered = document.querySelectorAll('.hovered');
        const coordinates = [];
        hovered.forEach((element) => {
          element.classList.add('ship');
          coordinates.push(element.dataset.index);
          element.removeEventListener('mouseover', handleMouseOver);
        });
        positions.push(coordinates);
        currentShip = ships.pop();
      }
    })
  }
  function handleMouseOver (e) {
    const currIndex = e.target.dataset.index;
    if (axis == 'x' && (currIndex % 10) <= ( 10 - currentShip) ||
    axis == 'y' && (Math.floor((currIndex / 10)) <= (10 - currentShip))) {
      for (let n = 0; n < currentShip; n++) {
        const nextTile = document.querySelector(`[data-index="${parseInt(currIndex)+(axis == 'x' ? n : n * 10)}"]`);
        if (nextTile.classList.contains('ship')) {
          const hovered = document.querySelectorAll('.hovered');
          hovered.forEach((element) => element.classList.remove('hovered'));
          break;

        }
        nextTile.classList.add('hovered');
      }
    }
  }
  // ai grid
  
  const aiGrid = document.createElement('div');
  aiGrid.id = 'aiGrid';
  opponentContainer.append(aiGrid);
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    aiGrid.append(tile);
  }
  return {
    main,
    getPositions: () => positions,
  }
}
export default Main;