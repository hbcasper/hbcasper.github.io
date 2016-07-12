	var map;        
    var myCenter=new google.maps.LatLng(20.9667, -89.6167);
	var marker=new google.maps.Marker({
		position:myCenter
	});
	
	function initialize(numero) {
	  var mapProp = {
	      center:myCenter,
	      zoom: 10,
	      mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  
	  map=new google.maps.Map(document.getElementsByClassName("map-canvas")[numero],mapProp);
	  marker.setMap(map);
	    map.addListener('click', function(e) {
		 placeMarkerAndPanTo(e.latLng, map);
		}); 
	};
	
	function placeMarkerAndPanTo(latLng, map) {
	  var marker = new google.maps.Marker({
	    position: latLng,
	    map: map
	  });
	  map.panTo(latLng);
	}
		
	function resizeMap() {
	   if(typeof map =="undefined") return;
	   setTimeout( function(){resizingMap();} , 250);
	}
	
	function resizingMap() {
	   if(typeof map =="undefined") return;
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center); 
	}
	
$(document).ready(function() {
	$('.btn-mapa').click(function(){
		$('.map-canvas').toggle();
		google.maps.event.addDomListener(window, 'load', initialize(0));
		google.maps.event.addDomListener(window, "resize", resizingMap());
	});
	$('.btn-nuevo').click(function(){
		google.maps.event.addDomListener(window, 'load', initialize(0));
		google.maps.event.addDomListener(window, "resize", resizingMap());
	});
	$('.btn-editar').click(function(){
		google.maps.event.addDomListener(window, 'load', initialize(0));
		google.maps.event.addDomListener(window, "resize", resizingMap());
	});
	$('.btn-masInfo').click(function(){
		google.maps.event.addDomListener(window, 'load', initialize(1));
		google.maps.event.addDomListener(window, "resize", resizingMap());
	});
});