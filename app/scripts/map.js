var map = L.map('map', {
  scrollWheelZoom: false,
  center: [-34.57158, -58.43926],
  zoom: 14
});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://openstreetmap.org">Colaboradores de OpenStreetMap</a>'
}).addTo(map);
L.circle([-34.57158, -58.43926], 200, {
  color: '#0073ae',
  fillOpacity: 0.8
}).addTo(map);
