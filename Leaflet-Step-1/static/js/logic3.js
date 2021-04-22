// Creating the map object
var myMap = L.map("mapid", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);




// Store the API query variables.
var baseURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  


/////////////////////////////////////  
//// Import & Visualize the Data ////
/////////////////////////////////////

// To do:

// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
d3.json(baseURL).then(function(data) {
  function styleInfo(feature){
    return {  radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.geometry.coordinates[0]),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8};
  
  }
  function getColor(depth){
    switch(true){
      case depth>90:
        return "red";
      case depth>70:
        return "orange";
      case depth>50:
        return "yellow";
      case depth>30:
        return "ltgreen";
      case depth>10:
        return "green";
      default: 
        return "white";
    }
  }
  function getRadius(magnitude){
      if (magnitude==0) {
        return 1;
      }
      return magnitude*4;
  
  }
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    },
  style: styleInfo,
  onEachFeture: function (feature,layer){
    layer.bindPopUp(feature.properties.mag + feature.geometry.coordinates[2])
  }
  }).addTo(myMap);

});

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