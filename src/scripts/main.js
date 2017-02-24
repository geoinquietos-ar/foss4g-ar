import L from 'leaflet';

import navbar from '../templates/navbar.hbs';
import banner from '../templates/banner.hbs';
import about from '../templates/about.hbs';
import calendar from '../templates/calendar.hbs';
import venue from '../templates/venue.hbs';
import faqs from '../templates/faqs.hbs';
import footer from '../templates/footer.hbs';

import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/banner.scss';
import '../styles/venue.scss';
import '../styles/footer.scss';

import logo from '../images/iso.svg';
import geoinquietosLogo from '../images/geoinquietos-ar.png';
import osmArLogo from '../images/osm-ar.png';
import ignLogo from '../images/ign.png';
import osgeoLogo from '../images/osgeo.png';
import cacLogo from '../images/cac.png';

document.body.insertAdjacentHTML('beforeend', navbar({
  logo,
}));

document.body.insertAdjacentHTML('beforeend', banner({
  logo,
  geoinquietosLogo,
  osmArLogo,
  ignLogo,
  osgeoLogo,
  cacLogo,
}));

document.body.insertAdjacentHTML('beforeend', about());

document.body.insertAdjacentHTML('beforeend', calendar());

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

document.body.insertAdjacentHTML('beforeend', faqs());

document.body.insertAdjacentHTML('beforeend', footer());
