// Creating the map object
var myMap = L.map("mapid", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  

  
// Store the API query variables.
var baseURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  
var date = features.properties.time
var feature
var magnitude = features.properties.mag
var size
var place = features.properties.place
var lat = features.geometry.coordinates[0]
var long = features.geometry.coordinates[1]
var depth = features.geometry.coordinates[2]


/////////////////////////////////////  
//// Import & Visualize the Data ////
/////////////////////////////////////

// To do:

// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.


// Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.


// HINT: The depth of the earth can be found as the third coordinate for each earthquake.


// Include popups that provide additional information about the earthquake when a marker is clicked.


// Create a legend that will provide context for your map data.


// Your visualization should look something like the map above.
  
  
  
  
  
  // // Add the dates in the ISO formats
  // var date = "$where=created_date between '2020-01-01T00:00:00' and '2021-01-01T00:00:00'";
  // // Add the complaint type.
  // var feature = "&type=feature";
  // // Add a limit.
  // var limit = "&$limit=10000";
  
  
  // // Assemble the API query URL.
  // d3.json(`${baseURL}${date}${complaint}${limit}`)
  // // Get the data with d3.
  //   .then(
  //     function(data) {
  //       console.log(data);
  
  //   // Create a new marker cluster group.
  //   var clusterLayer = L.markerClusterGroup();
  
  //   // Loop through the data.
  //   data.forEach(function(features.stations) {
  //     if(features.geometry.coordinates){
  //     var location = [features.geometry.coordinates[0], features.geometry.coordinates[1]];
  //       console.log(location);
  //       clusterLayer.addLayer(
  //         L.marker(location)
  //       .bindPopup(features.id)
  //       );
  //     }
  //   });
  
  //   myMap.addLayer(clusterLayer);
  //   }
  // )