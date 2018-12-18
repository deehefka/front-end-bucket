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

const mymap = L.map('mapid').setView([40.709, -73.960], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlZWJpZXNkZWViaWVzIiwiYSI6ImNqcHNzcXJucTAwYzQ0OWw3YjYwcXZ5YTAifQ.HvPxZ9R5zMQqqSw-8bnu9A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'your.mapbox.access.token'
}).addTo(mymap)

// const marker = L.marker([51.5, -0.09]).addTo(mymap)
//
// let circle = L.circle([51.508, -0.11], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(mymap)
//
// const polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(mymap)

// marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
//
// circle.bindPopup('I am a circle.')
//
// polygon.bindPopup('I am a polygon.')

// function onMapClick(e) {
//   alert('You clicked the map at ' + e.latlng)
// }

mymap.on('click', onMapClick)

let popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(mymap)
}

mymap.on('click', onMapClick)
