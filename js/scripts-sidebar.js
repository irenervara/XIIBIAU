// token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiYWxzaW5hIiwiYSI6ImNqdjgzcG02MDAzYXE0NG10bnppcWVubnUifQ.y-ojeFlaX7V1W3DG6eL0fA';


options = {
    container: 'mapContainer', // container ID, the div
    style: 'mapbox://styles/mapbox/light-v10',
    // style: 'mapbox://styles/mapbox/dark-v10',
    center: [-41,6], // [lng, lat]
    zoom: 2.3 // starting zoom level
}


// load the map
var map = new mapboxgl.Map(options);

// declare other variables variables
var nameDisplay = document.getElementById('name');
var addressDisplay = document.getElementById('address');

// add the mapbox geocoder control
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// open the Modal when loading the page
/*
$(window).on('load', function() {
    $('#welcomeModal').modal('show');
});
*/

////////////////////// SOURCE AND LAYER //////////////////////
map.on('style.load', function() {
    // override background map style
    // 1. print on the console: map.getStyle()
    // 2. enter the "layers",
    // map.setPaintProperty('road-label', 'text-color','#383c42');
    // map.setPaintProperty('land', 'background-color','#171716');

    // load data
    map.addSource('df_obras', { // id=df_obras
        type: 'geojson',
        data: 'data/prueba/df_example-2.geojson'
    });

    // add layers
    map.addLayer({
        'id': 'points_obras',
        'type': 'circle',
        'source': 'df_obras',
        'layout': {
            'visibility': 'visible'
          },
        'paint': {
            'circle-color': ['match',
                ['get', 'alcohol'],
                'yes', '#FFF8DC',
                'no', '#DC143C',
                '#00FFFF'
            ], // always include color for "other"
            'circle-opacity': 0.7,
            'circle-radius': 10
        },
        });


console.log(map.getLayer('points_obras'));
      map.addLayer({
          'id': 'points_trayectoria',
          'type': 'circle',
          'source': 'df_obras',
          'layout': {
              'visibility': 'none'
            },
          'paint': {
              'circle-color': ['match',
                  ['get', 'alcohol'],
                  'yes', '#FFF8DC',
                  'no', '#DC143C',
                  '#FF0000' // red
              ], // always include color for "other"
              'circle-opacity': 0.7,
              'circle-radius': 10
          },
          });

          map.addLayer({
              'id': 'points_publicacion',
              'type': 'circle',
              'source': 'df_obras',
              'layout': {
                  'visibility': 'none'
                },
              'paint': {
                  'circle-color': ['match',
                      ['get', 'alcohol'],
                      'yes', '#FFF8DC',
                      'no', '#DC143C',
                      '#FFFF00' //yellow
                  ], // always include color for "other"
                  'circle-opacity': 0.7,
                  'circle-radius': 10
              },
              });

            map.addLayer({
                'id': 'points_programa',
                'type': 'circle',
                'source': 'df_obras',
                'layout': {
                    'visibility': 'none'
                  },
                'paint': {
                    'circle-color': ['match',
                        ['get', 'alcohol'],
                        'yes', '#FFF8DC',
                        'no', '#DC143C',
                        '#FF00FF' //fucsia
                    ], // always include color for "other"
                    'circle-opacity': 0.7,
                    'circle-radius': 10
                },
                });

              map.addLayer({
                  'id': 'points_acciones',
                  'type': 'circle',
                  'source': 'df_obras',
                  'layout': {
                      'visibility': 'none'
                    },
                  'paint': {
                      'circle-color': ['match',
                          ['get', 'alcohol'],
                          'yes', '#FFF8DC',
                          'no', '#DC143C',
                          '#C0C0C0' //silver
                      ], // always include color for "other"
                      'circle-opacity': 0.7,
                      'circle-radius': 10
                  },
                  });

////////////////////// SOURCE AND LAYER //////////////////////


////////////////////// LAYER STYLE TOGGLE //////////////////////
// CATEGORÍAS
$('.btn-outline-light#b_obras').on('click', function() {
    var layerVisibility = map.getLayoutProperty('points_obras', 'visibility')
    if (layerVisibility === 'visible') {
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    } else {
        map.setLayoutProperty('points_obras', 'visibility', 'visible')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_progDoc', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    }
})

$('.btn-outline-light#b_trayectoria').on('click', function() {
    var layerVisibility = map.getLayoutProperty('points_trayectoria', 'visibility')
    if (layerVisibility === 'visible') {
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    } else {
        map.setLayoutProperty('points_trayectoria', 'visibility', 'visible')
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    }
})

$('.btn-outline-light#b_publicacion').on('click', function() {
    var layerVisibility = map.getLayoutProperty('points_publicacion', 'visibility')
    if (layerVisibility === 'visible') {
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    } else {
        map.setLayoutProperty('points_publicacion', 'visibility', 'visible')
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    }
})

$('.btn-outline-light#b_programa').on('click', function() {
    var layerVisibility = map.getLayoutProperty('points_programa', 'visibility')
    if (layerVisibility === 'visible') {
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    } else {
        map.setLayoutProperty('points_programa', 'visibility', 'visible')
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_acciones', 'visibility', 'none')
    }
})

$('.btn-outline-light#b_acciones').on('click', function() {
    var layerVisibility = map.getLayoutProperty('points_acciones', 'visibility')
    if (layerVisibility === 'visible') {
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
    } else {
        map.setLayoutProperty('points_acciones', 'visibility', 'visible')
        map.setLayoutProperty('points_obras', 'visibility', 'none')
        map.setLayoutProperty('points_trayectoria', 'visibility', 'none')
        map.setLayoutProperty('points_publicacion', 'visibility', 'none')
        map.setLayoutProperty('points_programa', 'visibility', 'none')
    }
})

$('.btn-outline-light#b_all').on('click', function() {
    map.setLayoutProperty('points_obras', 'visibility', 'visible')
    map.setLayoutProperty('points_acciones', 'visibility', 'visible')
    map.setLayoutProperty('points_trayectoria', 'visibility', 'visible')
    map.setLayoutProperty('points_publicacion', 'visibility', 'visible')
    map.setLayoutProperty('points_programa', 'visibility', 'visible')
})


// Escala LOU?
/*
$('#b_escala1').on('click', function(e) {
  // Popup OK
    var mydata = map.queryRenderedFeatures(e.point, {
        layers: ['points_obras']
    });

    const DatasetS = mydata.filter(prop=>{
      //console.log(prop);
    })
    //console.log(prop);
});
*/


////////////////////// LAYER STYLE TOGGLE //////////////////////


////////////////////// POP-UP //////////////////////
// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('click', function (e) {
  //console.log(e)
  // query for the features under the mouse, but only in the lots layer
  // queryrenderedFeatures looks at the layers (not the source)
  var features = map.queryRenderedFeatures(e.point, {
      layers: ['points_obras'],
  });

  if (features.length > 0) {
    // show the Popup
    // Populate the popup and set its coordinates
    // based on the feature found

    var clickedFeature = features[0]
    var info_titulo = clickedFeature.properties.titulo_Obra
    var info_acr = clickedFeature.properties.acr
    var info_year = clickedFeature.properties.año
    var info_pais = clickedFeature.properties.pais
    var info_city = clickedFeature.properties.city
    var info_tipoObra = clickedFeature.properties.tipo_obra
    var info_usos = clickedFeature.properties.usos
    var info_presu = clickedFeature.properties.presupuesto
    var info_moneda = clickedFeature.properties.moneda
    var info_dimension = clickedFeature.properties.escala_tramos
    var info_autores = clickedFeature.properties.autores
    var info_imgURL = clickedFeature.properties.img_url
    var info_webURL = clickedFeature.properties.web_url

    var popupContent =
    `<img class='popup_im' src="${info_imgURL}"></img>`+
    "<br>"+
    `<p class='popup_title'>${info_titulo}</p>`+
    `<p class='popup_title'>${info_acr}</p>`+
    `<p class='popup_subtitle'>${info_pais}, ${info_city} (${info_year})</p>`+
    "<br>"+
    `<p class='popup_content'>Tipo de obra: ${info_tipoObra}</p>`+
    `<p class='popup_content'>Usos: ${info_usos}</p>`+
    `<p class='popup_content'>Presupuesto: ${info_presu} ${info_moneda}</p>`+
    `<p class='popup_content'>Dimensión: ${info_dimension}</p>`+
    `<p class='popup_content'>Autores: ${info_autores}</p>`+
    "<br>"+
    `<a href="${info_webURL}">Link a la obra completa</a>`

    // alternativa: dividir en dos filas
    /*
    "<p class='popup_title'>Título: </p>" +
    `<div>${info_titulo}</div>`+
    "<p class='popup_title'>Acrónimo: </p>" +
    `<div>${info_acr}</div>`+
    "<p class='popup_title'>Año: </p>" +
    `<div>${info_year}</div>`+
    "<p class='popup_title'>País: </p>" +
    `<div>${info_pais}</div>`+
    "<p class='popup_title'>Ciudad: </p>" +
    `<div>${info_city}</div>`+
    "<p class='popup_title'>Tipo de obra: </p>" +
    `<div>${info_tipoObra}</div>`+
    "<p class='popup_title'>Usos: </p>" +
    `<div>${info_usos}</div>`+
    "<p class='popup_title'>Presupuesto: </p>" +
    `<div>${info_presu}</div>`+
    "<p class='popup_title'>Dimensión: </p>" +
    `<div>${info_dimension}</div>`
    "<p class='popup_title'>Autores: </p>" +
    `<div>${info_autores}</div>`+
    "<p class='popup_title'>Más información: </p>" +
    `<div>${info_webURL}</div>`
    */

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);
    // set this lot's polygon feature as the data for the highlight source
    map.getSource('highlight-feature').setData(clickedFeature.geometry);
    // show the cursor as a pointer
    map.getCanvas().style.cursor = 'pointer';

  } else {
    //hide the popup if there are no features
    popup.remove();
  }
  //console.log(features)
})
});
////////////////////// POP-UP //////////////////////


////////////////////// DROPDOWN BUTTON //////////////////////
function myFunction() {
  document.getElementById("dropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
////////////////////// DROPDOWN BUTTON //////////////////////
