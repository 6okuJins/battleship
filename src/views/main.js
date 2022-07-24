import {mainStyle} from '../styles';
// NOTE::: SEND POSITIONS TO CONTROLLER AFTER ALL PIECES HAVE BEEN PLACED
const main = () => {
  const ships = [2,3,3,4,5];
  let currentShip = ships.pop();
  const body = document.querySelector('body');
  //axis button
  let axis = 'x';
  const axisBtn = document.createElement('button');
  axisBtn.textContent = axis;
  body.append(axisBtn);
  axisBtn.addEventListener('click', () => {
    if (axis === 'x') {
      axis = 'y';
    } else {
      axis = 'x';
    }
    axisBtn.textContent = axis;
  })
  // grid
  const grid = document.createElement('div');
  grid.id = 'grid';
  body.append(grid);
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
        hovered.forEach((element) => {
          element.classList.add('ship');
          element.removeEventListener('mouseover', handleMouseOver);
        });
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
  
  return {
    body
  }
}
export default main;