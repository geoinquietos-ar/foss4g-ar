import navbar from '../templates/navbar.hbs';
import banner from '../templates/banner.hbs';
import about from '../templates/about.hbs';
import venue from '../templates/venue.hbs';
import footer from '../templates/footer.hbs';

import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/banner.scss';
import '../styles/about.scss';
import '../styles/footer.scss';

import logo from '../images/iso.png';
import geoinquietosLogo from '../images/geoinquietos-ar.png';
import osmArLogo from '../images/osm-ar.png';

document.body.insertAdjacentHTML('beforeend', navbar({
  logo,
}));

document.body.insertAdjacentHTML('beforeend', banner({
  logo,
  geoinquietosLogo,
  osmArLogo,
}));

document.body.insertAdjacentHTML('beforeend', about());
document.body.insertAdjacentHTML('beforeend', venue());
document.body.insertAdjacentHTML('beforeend', footer());

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 300) {
    document.getElementById('homeMenu').style.display = 'block';
  } else {
    document.getElementById('homeMenu').style.display = 'none';
  }
});
