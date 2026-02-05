const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker
const marker = L.marker[0, 0].addTo(map);

// Change marker Coordinated to current position
navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    // Set Latitude & Longitude
    marker.setLatLng([lat, lng].update());

    // Set View
    map.setView([lat, lng], 13);

    //Add popup
    marker.bindPopup('<strong>Hello World</strong> <br> This is my location');

})