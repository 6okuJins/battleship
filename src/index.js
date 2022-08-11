import { Controller } from './classes';
import { Main, Header, Footer } from './views';
import { meyerReset } from './styles';

Header();
const { body, getPositions } = Main();
Footer();
let controller;
let roundCount = 0;
const submit = document.querySelector('#submitButton');
submit.addEventListener('click', () => {
  if (getPositions().length === 5) {
    controller = Controller(getPositions());
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.add('invisible'));
    const aiGrid = document.querySelector('#aiGrid');
    aiGrid.classList.remove('invisible');
    const announce = document.querySelector('.announce');
    announce.textContent = 'Battle!';
  }
});
const opponentBoard = document.querySelectorAll('#aiGrid>div');
opponentBoard.forEach(tile => tile.addEventListener('click', attackHandler))
function attackHandler (e) {
    roundCount += 1;
    const result = controller.playRound(e.target.dataset.index);
    const announce = document.querySelector('.announce');
    if (result[0]) {
      e.target.classList.add('hit');
      announce.textContent = `Round ${roundCount}: Hit!`;
    }
    else {
      e.target.classList.add('miss');
      announce.textContent = `Round ${roundCount}: Miss!`;
    }
    const opponentTarget = document.querySelector(`#grid>div[data-index="${result[1]}"]`);
    if (opponentTarget.classList.contains('ship')) {
      opponentTarget.classList.add('hit');

    }
    else {
      opponentTarget.classList.add('miss');
    }
    if (result[2]) {
      announce.textContent = `GAME OVER: ${result[2]}`;
      opponentBoard.forEach(tile => tile.removeEventListener('click', attackHandler));
    }
    e.target.removeEventListener('click', attackHandler);
}