import { Controller } from './classes';
import { main } from './views';
import { meyerReset } from './styles';

const { body, getPositions } = main();
const submit = document.createElement('button');
submit.textContent = 'Submit';
submit.addEventListener('click', () => {
  if (getPositions().length === 5) {
    Controller(getPositions());
  }
});
body.append(submit);