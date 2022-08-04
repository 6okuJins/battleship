import { footerStyle } from '../styles';
const Footer = () => {
  const body = document.querySelector('body');
  const footer = document.createElement('div');
  footer.classList.add('footer');
  body.append(footer);

  footer.textContent = 'Made by Dom M. for The Odin Project'
}
export default Footer;