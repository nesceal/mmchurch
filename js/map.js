function initialize() {
  var position = new google.maps.LatLng(14.5113615,121.2424268);
  var myOptions = {
    zoom: 16,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(
      document.getElementById("map_canvas"),
      myOptions);

  var marker = new google.maps.Marker({
      position: position,
      map: map,
      title:"This is the place."
  });  

  var contentString = 'Hello <strong>World</strong>!';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}