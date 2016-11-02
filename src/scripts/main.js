import '../styles/main.scss';
import banner from '../templates/banner.hbs';
import iso from '../images/iso.png';

document.body.insertAdjacentHTML('beforeend', banner({
  logo: iso,
}));
