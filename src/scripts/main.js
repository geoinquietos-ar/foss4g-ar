import '../styles/main.scss';
import banner from '../templates/banner.hbs';
import logo from '../images/iso.png';
import geoinquietosLogo from '../images/geoinquietos-ar.png';
import osmArLogo from '../images/osm-ar.png';

document.body.insertAdjacentHTML('beforeend', banner({
  logo,
  geoinquietosLogo,
  osmArLogo,
}));
