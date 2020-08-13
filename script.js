
$(window).on("load",function(){
    
    initialize();

});


//var myPolygon; 
function initialize() {

    //Ubicacion en el mapa
    var myLatLng = new google.maps.LatLng(12.139592, -86.356376);
    // Opciones Generales
    var mapOptions = {
      zoom: 14,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.RoadMap
    };
    var map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
    // Coordenadas del poligono
    var triangleCoords = [
        new google.maps.LatLng(12.13347,-86.35421), 
        new google.maps.LatLng(12.13562,-86.35439), 
        new google.maps.LatLng(12.1375,-86.35622), 
        new google.maps.LatLng(12.13675,-86.35945), 
        new google.maps.LatLng(12.13487,-86.36041), 
        new google.maps.LatLng(12.13268,-86.35997)
    ];
    // Stylo y controles de poligono
    myPolygon = new google.maps.Polygon({
      paths: triangleCoords,
      draggable: true, // turn off if it gets annoying
      editable: true,
      strokeColor: "0038ff",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0900ff",
      fillOpacity: 0.35
    });

    myPolygon.setMap(map);
    google.maps.event.addListener(
      myPolygon.getPath(),
      "insert_at",
      getPolygonCoords
    );
    google.maps.event.addListener(
      myPolygon.getPath(),
      "set_at",
      getPolygonCoords
    );

    var triangleCoords2 = [
        new google.maps.LatLng(12.13859,-86.35008),
        new google.maps.LatLng(12.14074,-86.35026),
        new google.maps.LatLng(12.14262,-86.35209), 
        new google.maps.LatLng(12.14187,-86.35532), 
        new google.maps.LatLng(12.13999,-86.35628), 
        new google.maps.LatLng(12.1378,-86.35584)
    ];

    myPolygon2 = new google.maps.Polygon({
        paths: triangleCoords2,
        draggable: true, // turn off if it gets annoying
        editable: true,
        strokeColor: "9600ff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#9600ff",
        fillOpacity: 0.35
      });
  

      myPolygon2.setMap(map);
      google.maps.event.addListener(
        myPolygon.getPath(),
        "insert_at",
        getPolygonCoords
      );
      google.maps.event.addListener(
        myPolygon2.getPath(),
        "set_at",
        getPolygonCoords
      );
  
   
    var infowindow = new google.maps.InfoWindow({ });

    /** Muestra informacion del poligono */
    google.maps.event.addListener(myPolygon, 'click', function(event) {

        var contentString = "Nombre:" + 'Prueba' + "<br>" + 'Extension:'+'200 MZ';
        infowindow.setContent(contentString);
        infowindow.setPosition(event.latLng);
        infowindow.open(map);
      });

  
  }
  
  //Obtener coordenadas del poligono
  function getPolygonCoords() {
    var len = myPolygon.getPath().getLength();
    var htmlStr = "";
    for (var i = 0; i < len; i++) {
      htmlStr +=
        "new google.maps.LatLng(" +
        myPolygon.getPath().getAt(i).toUrlValue(5) +
        "), ";

    }
    document.getElementById("info").innerHTML = htmlStr;
  }
 