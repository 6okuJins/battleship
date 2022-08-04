import { headerStyle } from '../styles'
const Header = () => {
  const body = document.querySelector('body');
  const header = document.createElement('div');
  header.classList.add('header');
  body.append(header);
  header.textContent = 'BATTLESHIP';
}
export default Header;