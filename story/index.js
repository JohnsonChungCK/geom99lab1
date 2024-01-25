

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

const Yoho = new google.maps.Marker({
    position: { lat: 51.465068, lng: -116.581038 },
    map,
    icon: "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00",
    title: "Yoho National Park Of Canada",
  });
}



window.initialize = initialize;

