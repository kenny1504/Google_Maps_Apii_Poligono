<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Maps</title>
</head>
<style>

a {
  font-family: arial, sans-serif;
  color: #00B2EE;
  text-decoration: none;
}
a:hover {
  color: #55d4ff;
}

#map-canvas {
  width: auto;
  height: 500px;
}

#info {
  color: #222;
}

.lngLat {
  color: #fff;
  margin-bottom: 5px;
}
.lngLat .one {
  padding-left: 250px;
}
.lngLat .two {
  padding-left: 34px;
}

#clipboard-btn {
  float: left;
  margin-right: 10px;
  padding: 6px 8px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

#info {
  height: 140px;
  float: left;
  margin-bottom: 30px;
  border: solid 2px #eee;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: inset 0 2px 5px #444;
  -webkit-box-shadow: inset 0 2px 5px #444;
  box-shadow: inset 0 2px 5px #444;
}

#info, .lngLat {
  font-family: arial, sans-serif;
  font-size: 12px;
  padding-top: 10px;
  width: 270px;
}
</style>
<body>
  <center>   <h1>Ubicaciones</h1> </center>
<section> 

  <div id="map-canvas"></div>
  <div class="lngLat"><span class="one">Lat</span><span class="two">,Lng</span></div>

<button id="clipboard-btn" onclick="copyToClipboard(document.getElementById('info').innerHTML)">Copiar Coordenadas</button>
<textarea id="info"></textarea>
</section>
     
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
     
     <script async defer
     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFmus48f8unfO3mQmcdDuQ_URCSc0RQ5k">   
     </script>
     <script src="script.js"></script>
</body>
</html>