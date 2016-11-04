import L from 'leaflet';

import navbar from '../templates/navbar.hbs';
import banner from '../templates/banner.hbs';
import about from '../templates/about.hbs';
import venue from '../templates/venue.hbs';
import footer from '../templates/footer.hbs';

import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/banner.scss';
import '../styles/about.scss';
import '../styles/venue.scss';
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
const map = L.map('venueMap', {
  scrollWheelZoom: false,
  center: [-34.57158, -58.43926],
  zoom: 14,
});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://openstreetmap.org">Colaboradores de OpenStreetMap</a>',
}).addTo(map);
L.circle([-34.57158, -58.43926], 200, {
  color: '#44C0F0',
  fillOpacity: 0.8,
}).addTo(map);

document.body.insertAdjacentHTML('beforeend', footer());

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 300) {
    document.getElementById('homeMenu').style.display = 'block';
  } else {
    document.getElementById('homeMenu').style.display = 'none';
  }
});
