// Funcionalidad mapa y marcador
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

// Funcionalidad lugares 
var lugares = [
    {
        "nombre": "Pizza del Perro Negro",
        "coordenadas":  {"lat":"19.417091", "lng":"-99.169670"},
        "direccion": "Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX.",
        "numero":  "01 55 5351 7401",
        "logo": "assets/img/perronegro.png" 
    }, 
    
    {
        "nombre": "Mercado Roma",
        "coordenadas":  {"lat":"19.414133", "lng":"-99.164237"},
        "direccion": "Calle Querétaro 225, Roma Nte., 06700 Ciudad de México, CDMX.",
        "numero":  "01 55 5564 1396",
        "logo": "assets/img/mercadoroma.jpg" 
    },
    
    {
        "nombre": "Papa Guapa",
        "coordenadas":  {"lat":"19.419000", "lng":"-99.166930"},
        "direccion": "Av Oaxaca 80, Cuauhtemoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX.",
        "numero":  " 01 55 5207 8052",
        "logo": "assets/img/papaguapa.png" 
    },
    
    {
        "nombre": "Barracuda Diner",
        "coordenadas":  {"lat":"19.420042", "lng":"-99.166855"},
        "direccion": "Av Nuevo León 4-A, Condesa, Hipódromo, 06140 Cuauhtémoc, CDMX.",
        "numero":  "01 55 5211 9480",
        "logo": "assets/img/barracudadiner.jpg" 
    },
    
    {
        "nombre": "Helado Obscuro",
        "coordenadas":  {"lat":"19.412826", "lng":"-99.158488"},
        "direccion": "Orizaba 203, Roma Nte., 06700 Ciudad de México, CDMX.",
        "numero":  "01 55 4444 4878",
        "logo": "assets/img/heladoobscuro.jpg" 
    }
]; 


var plantillaLugar =  '<div class="col s12 m7">' +
        '<div class="card horizontal">' +
          '<div class="card-image">' +
            '<img src="__logo__">' +
          '</div>' +
          '<div class="card-stacked">' +
            '<div class="card-content">' +
              '<h4>__nombre__</h4>' +
              '<p>__direccion__</p>' +
              '<p class="texto-tarjeta-telefono"><i class="material-icons">phone</i> __numero__</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
       '</div>'; 


var crearTarjetas = function (lugares) {
	var plantillaFinal = "";
	lugares.forEach(function (restaurante) {
		plantillaFinal += plantillaLugar.replace("__nombre__", restaurante.nombre)
            .replace("__logo__", restaurante.logo)
			.replace("__numero__", restaurante.numero)
			.replace("__direccion__", restaurante.direccion);
	});
	$(".listaDeRestaurantes").html(plantillaFinal);
};


var filtrarRestaurantes = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var restaurantesFiltrados = lugares.filter(function (restaurante) {
		return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	crearTarjetas(restaurantesFiltrados);
};


var cargarPagina = function () {
    
   crearTarjetas(lugares); 
   $("#search-form").submit(filtrarRestaurantes);
}


$(document).ready(cargarPagina);