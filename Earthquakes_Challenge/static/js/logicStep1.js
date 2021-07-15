// Create the tile layer that will be the background of our map
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
var satellighteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
var baseMaps = {
  "Streets": streets,
  "Satellite": satellighteStreets 
};

//Create the map object with center and zoom leve.
var map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Then we add our 'streets' tile layer to the map
//streets.addTo(map);
L.control.layers(baseMaps).addTo(map);

//Accessing the airport GeoJSON URL
var earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// Retrieve the earthquake GeoJSON data.
d3.json(earthquakeData).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});




// Create a style for the lines.
//var myStyle = {
//  color: "#ffffa1",
//  weight: 1
//};

// Grabbing our GeoJSON data
//d3.json(earthquakeData).then(function(data) {
//    console.log(data);
//Creating a GeoJSON layer with the retrieved data.
//  L.geoJson(data, {
//    pointToLayer: function(feature, latlng) {
//        console.log(data);
//        return L.circleMarker(latlng);
//    },
//    style: myStyle
//  }).addTo(map);  
//});




