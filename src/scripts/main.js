import L from 'leaflet';

import navbar from '../templates/navbar.hbs';
import banner from '../templates/banner.hbs';
import about from '../templates/about.hbs';
import calendar from '../templates/calendar.hbs';
import venue from '../templates/venue.hbs';
import speakers from '../templates/speakers.hbs';
import sponsors from '../templates/sponsors.hbs';
import faqs from '../templates/faqs.hbs';
import footer from '../templates/footer.hbs';

import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/banner.scss';
import '../styles/about.scss';
import '../styles/venue.scss';
import '../styles/calendar.scss';
import '../styles/speakers.scss';
import '../styles/sponsors.scss';
import '../styles/faqs.scss';
import '../styles/footer.scss';

import logo from '../images/iso.png';

import geoinquietosLogo from '../images/geoinquietos-ar.png';
import osmArLogo from '../images/osm-ar.png';
import ignLogo from '../images/ign.png';
import osgeoLogo from '../images/osgeo.png';
import cacLogo from '../images/cac.png';
import ideraLogo from '../images/idera.png';
import conaeLogo from '../images/conae.png';
import wikimediaArLogo from '../images/wikimedia_ar.png';

import logoCarto from '../images/carto.png';
import logoBoundless from '../images/boundless.png';
import logoCambalache from '../images/cambalache.png';
import logoGeoCAT from '../images/geocat.png';
import logoUNP from '../images/unp.png';
import logoAerolineas from '../images/aa.jpg';
import logoMapbox from '../images/mapbox.png';
import logoKaart from '../images/kaart.png';

import avatarMaria from '../images/Maria_brovelli.jpeg';
import avatarVictor from '../images/victor_olaya.jpg';
import avatarJorge from '../images/jorge_sanz.jpg';
import avatarJeff from '../images/jeffmckenna.jpg';
import avatarDelawen from '../images/maria_arias.jpg';

import talks from '../content/talks.json';
import programme from '../content/programme.json';

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

document.body.insertAdjacentHTML('beforeend', about({
  logo,
  geoinquietosLogo,
  osmArLogo,
  ignLogo,
  osgeoLogo,
  cacLogo,
  ideraLogo,
  conaeLogo,
  wikimediaArLogo,
}));

document.body.insertAdjacentHTML('beforeend', calendar());

document.body.insertAdjacentHTML('beforeend', speakers({
  avatarMaria,
  avatarVictor,
  avatarJorge,
  avatarJeff,
  avatarDelawen,
  talks: talks.filter(talk => talk.confirmed === true).sort(() => Math.random() - 0.5),
  programme,
}));

document.body.insertAdjacentHTML('beforeend', sponsors({
  logoCarto,
  logoBoundless,
  logoCambalache,
  logoGeoCAT,
  logoMapbox,
  logoKaart,
  logoUNP,
  logoAerolineas,
}));

document.body.insertAdjacentHTML('beforeend', venue());
const map = L.map('venueMap', {
  scrollWheelZoom: false,
  center: [-34.56858, -58.43926],
  zoom: 14,
});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://openstreetmap.org">Colaboradores de OpenStreetMap</a>',
}).addTo(map);
L.polygon([
  [-34.57198, -58.44055],
  [-34.57157, -58.44022],
  [-34.57133, -58.44064],
  [-34.57073, -58.43954],
  [-34.57096, -58.43930],
  [-34.57072, -58.43874],
  [-34.57096, -58.43848],
  [-34.57110, -58.43867],
  [-34.57102, -58.43875],
  [-34.57109, -58.43886],
  [-34.57169, -58.43822],
  [-34.57259, -58.43947],
]).addTo(map).bindPopup('<b>Instituto Geográfico Nacional</b><br>Avenida Cabildo 301, Palermo, CABA').openPopup();

document.body.insertAdjacentHTML('beforeend', faqs());
document.querySelectorAll('.faqs dt').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.faqs dt.active').classList.remove('active');
    element.classList.add('active');
  });
});

document.body.insertAdjacentHTML('beforeend', footer());
