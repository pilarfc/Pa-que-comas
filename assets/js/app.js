
function initMap() {
  var coordenadas = {lat:19.4176387, lng:-99.16481529999999};

  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 18,
    center: coordenadas
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map,
    title: '¡Hola Mundo!' //La propiedad title del marcador aparecerá como información sobre herramientas.
  });
}
