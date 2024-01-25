

function initialize() {
  const fenway = { lat: 51.484163, lng: -116.081291 };
  const map = new google.maps.Map(document.getElementById("map1"), {
    center: Banff,
    zoom: 10,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10,
      },
    },
    
  );
 

  map.setStreetView(panorama);
}

window.initialize = initialize;
window.initMap = initMap;
