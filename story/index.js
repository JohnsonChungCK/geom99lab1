

function initialize() {
  const Banff = { lat: 51.484163, lng: -116.081291 };
  const map = new google.maps.Map(document.getElementById("map1"), {
    center: Banff,
    zoom: 8,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {position: Banff,pov: {heading: 20, pitch: 20,},},    
  );
  
  map.setStreetView(panorama);

const Yoho = new google.maps.Marker({
    position: { lat: 51.465068, lng: -116.581038 },
    map,
    icon: "ttp://maps.gstatic.com/mapfiles/ms2/micons/hiker.png",
    title: "Yoho National Park Of Canada",
  });

  const Louise = new google.maps.Marker({
    position: { lat: 51.416957, lng: -116.218844 },
    map,
    icon: "http://maps.gstatic.com/mapfiles/ms2/micons/fishing.png",
    title: "Lake Louise",
  });
  
  const Banff_Park = new google.maps.Marker({
    position: { lat: 51.484163, lng: -116.081291 },
    map,
    icon: "http://maps.gstatic.com/mapfiles/ms2/micons/tree.png",
    title: "Banff National Park",
  });
  
  const Banff_Town = new google.maps.Marker({
    position: { lat: 51.179649, lng: -115.570080 },
    map,
    icon: "http://maps.gstatic.com/mapfiles/ms2/micons/homegardenbusiness.png",
    title: "Banff Town",
  });
  
}



window.initialize = initialize;

