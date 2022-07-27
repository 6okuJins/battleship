import { Controller } from './classes';
import { Main } from './views';
import { meyerReset } from './styles';

const { body, getPositions } = Main();
let controller;
const submit = document.querySelector('#submitButton');
submit.addEventListener('click', () => {
  if (getPositions().length === 5) {
    controller = Controller(getPositions());
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.add('invisible'));
    const aiGrid = document.querySelector('#aiGrid');
    aiGrid.classList.remove('invisible');
  }
});
const opponentBoard = document.querySelectorAll('#aiGrid>div');
opponentBoard.forEach(tile => tile.addEventListener('click', attackHandler))
function attackHandler (e) {
    const result = controller.playRound(e.target.dataset.index);
    if (result[0]) {
      e.target.classList.add('hit');
    }
    else {
      e.target.classList.add('miss');
    }
    const opponentTarget = document.querySelector(`#grid>div[data-index="${result[1]}"]`);
    if (opponentTarget.classList.contains('ship')) {
      opponentTarget.classList.add('hit');
    }
    else {
      opponentTarget.classList.add('miss');
    }
    if (result[2]) {
      console.log('GAMEOVER');
      opponentBoard.forEach(tile => tile.removeEventListener('click', attackHandler));
    }
    e.target.removeEventListener('click', attackHandler);
}