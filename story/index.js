

function initialize() {
  const Banff = { lat: 51.484163, lng: -116.081291 };
  const map = new google.maps.Map(document.getElementById("map1"), {
    center: Banff,
    zoom: 10,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {position: Banff,pov: {heading: 34, pitch: 10,},},    
  );
  
  map.setStreetView(panorama);
}

function initMap() {
  const myLatLng = { lat: 51.464097, lng: -116.577728 };
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map2,
    title: "Hello World!",
  });
}

window.initialize = initialize;

