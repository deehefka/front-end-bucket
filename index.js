'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

// created the map using coordinates it will be centered in on
const map = L.map('mapid').setView([41.820, -71.4193], 13)

// connects to a third party map application and displays it on the map identified above
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlZWJpZXNkZWViaWVzIiwiYSI6ImNqcHNzcXJucTAwYzQ0OWw3YjYwcXZ5YTAifQ.HvPxZ9R5zMQqqSw-8bnu9A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'your.mapbox.access.token'
}).addTo(map)

// Creates the popup variable in case we ever want to use this feature in the future
// We could display the latitude and longitude of each click if we wanted to
const popup = L.popup()

// setting the latitude and the longitude of the map...
// Possibly use this information to identify a location??
// Maybe connect to another third party Api that tells you exactly where you are
// depending on your specific coordinates
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    // .setContent('You clicked the map at ' + e.latlng.toString())
    // .openOn(map)
}

// Creates a new marker, I set this marker as the same coordinates as the default
// location that the map opens up to.
const marker = L.marker(new L.LatLng(41.820, -71.4193), {
  // making the marker draggable... Pretty self explanitory
draggable: true
}).addTo(map)

// This whole chunk of code makes it so that each click you make on the map brings the
// draggable marker to those specific coordinates.
marker.on('dragend', function (e) {
  updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng)
})
map.on('click', function (e) {
marker.setLatLng(e.latlng)
updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng)
})

// This centers the map on your location and pushes the latitude and longitude
// to our html.
function updateLatLng(lat, lng, reverse) {
  if (reverse) {
    marker.setLatLng([lat, lng])
    map.panTo([lat, lng])
  } else {
    document.getElementById('latitude').value = marker.getLatLng().lat
    document.getElementById('longitude').value = marker.getLatLng().lng
    map.panTo([lat, lng])
  }
}
