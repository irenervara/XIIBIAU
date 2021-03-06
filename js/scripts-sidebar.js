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

///////////////////// MAPBOX TUTORIAL / EXAMPLE /////////////////////
const places = {
  "type": "FeatureCollection",
  "name": "df_example-2",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "field_1": 0,
        "tipo_obra": "Obra nueva",
        "escala": 220,
        "escala_tramos": "s",
        "usos": "Residencial",
        "im_sociedad": "Equidad espacial",
        "im_econom": "Accesibilidad a la vivienda",
        "im_ma": "Eficiencia energética, Espacios saludables",
        "im_trans": "Ciencias de ciudad",
        "titulo_Obra": "VU4B",
        "acr": "TDA454",
        "año": "2020",
        "pais": "Paraguay",
        "ambito": "Sur",
        "presupuesto": 80000,
        "moneda": "$",
        "autores": "TDA®",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220223124656_01-dji-0106.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10474",
        "categoria": "obras",
        "city": "caracas",
        "lat": 10.5,
        "lon": -66.916664
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.916664,
          10.5
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "field_1": 1,
        "tipo_obra": "Ampliación, reforma o rehabilitación",
        "escala": 200,
        "escala_tramos": "s",
        "usos": "Residencial, Servicios",
        "im_sociedad": "Usos mixtos",
        "im_econom": "Tenencias alternativas, Accesibilidad a la vivienda, Regeneración urbana",
        "im_ma": "Rehabilitación",
        "im_trans": null,
        "titulo_Obra": "Habitando una galería de arte",
        "acr": "XYZ097",
        "año": "2021",
        "pais": "Portugal",
        "ambito": "Península Ibérica",
        "presupuesto": 145000,
        "moneda": "€",
        "autores": "Filipe Magalhães, Ana Luisa Soares, Ahmed Belkhodja, Lera Samovich",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220223170204_fala-097-web-013.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10475",
        "categoria": "obras",
        "city": "medellin",
        "lat": 6.230833,
        "lon": -75.590553
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.590553,
          6.230833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "field_1": 2,
        "tipo_obra": "Ampliación, reforma o rehabilitación",
        "escala": 226.16,
        "escala_tramos": "s",
        "usos": "Residencial",
        "im_sociedad": "Usos mixtos",
        "im_econom": "Regeneración urbana",
        "im_ma": "Rehabilitación",
        "im_trans": "Proyectos urbanos integrales",
        "titulo_Obra": "Loft A. Transformación de taller en vivienda en el barrio de la Milagrosa de Pamplona",
        "acr": "LAP010",
        "año": "Sin datos",
        "pais": "Espana",
        "ambito": "Península Ibérica",
        "presupuesto": 184768,
        "moneda": "€",
        "autores": "arrova | atelier rojo-vergara (arquitectos Enrique Rojo Asín y Cristina Vergara Lacuey)",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220301163212_05-loft-a-bergeraphoto.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10492",
        "categoria": "trayectoria",
        "city": "antioquia",
        "lat": 7.883609,
        "lon": -76.632111
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.632111,
          7.883609
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "field_1": 3,
        "tipo_obra": "Obra nueva",
        "escala": 381,
        "escala_tramos": "m",
        "usos": "Residencial",
        "im_sociedad": null,
        "im_econom": "Regeneración urbana",
        "im_ma": "Reducción emisiones C02, Eficiencia energética, Espacios saludables",
        "im_trans": "Proyectos urbanos integrales",
        "titulo_Obra": "CASA CON ARBOL",
        "acr": "CAM022",
        "año": "Sin datos",
        "pais": "Espana",
        "ambito": "Península Ibérica",
        "presupuesto": 320486,
        "moneda": "€",
        "autores": "CRISTINA GARCIA BAEZA / IÑAKI PÉREZ DE LA FUENTE",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220302105146_1-entrada.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10494",
        "categoria": "publicacion",
        "city": "santiago de chile",
        "lat": -34.672501,
        "lon": -58.449722
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.449722,
          -34.672501
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "field_1": 4,
        "tipo_obra": "Ampliación, reforma o rehabilitación",
        "escala": 35408,
        "escala_tramos": "xl",
        "usos": "Residencial",
        "im_sociedad": "Protección patrimonial",
        "im_econom": null,
        "im_ma": "Rehabilitación, Reutilización y reciclaje, Espacios saludables",
        "im_trans": "Autosuficiencias domésticas",
        "titulo_Obra": "CASA Z. Rehabilitación de vivienda en el Valle de Jerte",
        "acr": "CAZ079",
        "año": "Sin datos",
        "pais": "Espana",
        "ambito": "Península Ibérica",
        "presupuesto": 19229452,
        "moneda": "€",
        "autores": "Arq. Joaquín Mosquera Casares y Arq. Syra Abella Bule",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220303125420_imagen-principal-baja-calidad.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10497",
        "categoria": "prog_doc",
        "city": "iquique",
        "lat": -20.2167,
        "lon": -70.14222
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.14222,
          -20.2167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "field_1": 5,
        "tipo_obra": "Proyecto efímero",
        "escala": 65,
        "escala_tramos": "s",
        "usos": "Espacios libres",
        "im_sociedad": "Procesos participativos, Equidad espacial",
        "im_econom": "Cooperación publico-privada",
        "im_ma": "Reutilización y reciclaje",
        "im_trans": "Autosuficiencias comunitarias",
        "titulo_Obra": "Aula Caracola",
        "acr": "CAR019",
        "año": "2019",
        "pais": "Mexico",
        "ambito": null,
        "presupuesto": 250,
        "moneda": "€",
        "autores": "Conjuntos Empáticos (Sálvora Feliz + Marta Benito + Tomás Pineda)",
        "img_url": "http://www.bienalesdearquitectura.es/images/XII_BIAU/Panorama_obras/20220303193859_fel0041-foto00.jpg",
        "web_url": "http://www.bienalesdearquitectura.es/index.php/es/?option=com_content&view=article&id=10499",
        "categoria": "acc",
        "city": "la paz",
        "lat": -16.489689,
        "lon": -68.119293
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.119293,
          -16.489689
        ]
      }
    }
  ]
}

const filterGroup = document.getElementById('filter-group_escala');
const filterGroup2 = document.getElementById('filter-group_usos');

map.on('load', () => {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource('places', {
        'type': 'geojson',
        'data': 'data/prueba/df_example-2.geojson'
        //'data': places
    });

    // 1. DF OBRAS (TODOS)
    map.addLayer({
        'id': 'points_obras',
        'type': 'circle',
        'source': 'places',
        'layout': {
            'visibility': 'visible'
          },
        'paint': {
            'circle-stroke-color': '#fc03db', //pink
            'circle-stroke-width':3,
            'circle-opacity': 0,
            'circle-radius': 5
        },
        });

    // 2. FILTRADO (POR BUTTONS)
    for (const feature of places.features) {
        const symbol_escala = feature.properties.escala_tramos;
        const symbol_usos = feature.properties.usos;

        // ESCALA
        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(symbol_escala)) {
            map.addLayer({
                'id': symbol_escala,
                'type': 'circle',
                'source': 'places',
                'layout': {
                    'visibility': 'none'
                  },
                'paint': {
                    'circle-color': '#fc03db',
                    'circle-opacity': 0.5,
                    'circle-radius': 5
                },
                'filter': ['==', 'escala_tramos', symbol_escala]
            });
            // Add checkbox and label elements for the layer.
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = symbol_escala;
            input.checked = false;
            filterGroup.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', symbol_escala);
            label.textContent = symbol_escala;
            filterGroup.appendChild(label);

            // When the checkbox changes, update the visibility of the layer.
            input.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    symbol_escala,
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                  symbol_usos,
                  'visibility','none'
                );
            });
        }

        // USOS
        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(symbol_usos)) {
            map.addLayer({
                'id': symbol_usos,
                'type': 'circle',
                'source': 'places',
                'layout': {
                    'visibility': 'none'
                  },
                'paint': {
                    'circle-color':'#fc03db', //yellow
                    'circle-opacity': 0.5,
                    'circle-radius': 10
                },
                'filter': ['==', 'usos', symbol_usos]
            });
            // Add checkbox and label elements for the layer.
            const input_usos = document.createElement('input');
            input_usos.type = 'checkbox';
            input_usos.id = symbol_usos;
            input_usos.checked = false;
            filterGroup2.appendChild(input_usos);

            const label_usos = document.createElement('label');
            label_usos.setAttribute('for', symbol_usos);
            label_usos.textContent = symbol_usos;
            filterGroup2.appendChild(label_usos);

            // When the checkbox changes, update the visibility of the layer.
            input_usos.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    symbol_usos,
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
                map.setLayoutProperty(
                  symbol_escala,
                  'visibility','none'
                );
            });
        }

    }
});

///////////////////// MAPBOX TUTORIAL / EXAMPLE /////////////////////


////////////////////// POP-UP //////////////////////
// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('click', function (e) {
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
});
