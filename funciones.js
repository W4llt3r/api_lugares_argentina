document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#btn-buscar').addEventListener('click', buscar_sitio);
});

function buscar_sitio(){
    let lugar = document.querySelector('#input-lugar').value.trim();
    if(lugar.length==0){
        document.querySelector('#display-lugar').innerHTML = "No pusiste nada papu";
        return;
    }
    mostar_cartel();

    const url1 = "https://nominatim.openstreetmap.org/search.php?q=";
    const url2 = "&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2";
    const URL = url1 + lugar + url2;

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos=>{lugar_elegido(datos)})
        .catch(error=>{console.log("ERROR :");console.log(error);})
}

function lugar_elegido(datos){
    const contenedor = document.querySelector('#display-lugar');
    if(datos.length==0){
        contenedor.innerHTML = "No hay resultados";
        return;
    }
    
    const nombre = datos[0].display_name;
    const tipo = traductorSitios(datos[0].addresstype);
    const latitud = datos[0].lat;
    const longitud = datos[0].lon;
    
    let lista = `<ul>
                    <li>${nombre}</li>
                    <li>Tipo : ${tipo}</li>
                    <li>Latitud : ${latitud}</li>
                    <li>Longitud : ${longitud}</li>
                </ul>`;
    contenedor.innerHTML = lista;
    document.querySelector('#btn-buscar').disabled = false;
    document.querySelector('#input-lugar').focus();
}
function mostar_cartel(){
    document.querySelector('#btn-buscar').disabled = true;
    document.querySelector('#display-lugar').innerHTML = "Buscando lugar..."
}

function traductorSitios(addresstype){
    switch (addresstype) {
        case 'river' : return 'Río';
        case 'peak' : return 'Cerro';
        case 'volcano' : return 'Volcán';
        case 'town' : return'Ciudad';
        case 'city' : return 'Gran Ciudad';
        case 'village' : return 'Pueblo';
        case 'locality' : return 'Localidad';
        case 'state' : return 'Provincia';
        case 'suburb' : return 'Barrio';
        case 'road' : return 'Calle';
        default : return addresstype;
    }
}
