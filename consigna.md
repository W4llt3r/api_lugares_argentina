# Modificacion del DOM de manera Asincronica
## Consigna

Crear una página Web que contenga un input en el que podamos ingresar el nombre de un lugar de Argentina, y un botón para realizar la búsqueda.

Al pulsar el botón, debe realizarse una búsqueda asincrónica en la API de OpenStreetMap, y mostrar:

* Nombre completo (propiedad display_name en la respuesta).

* Tipo (propiedad addresstype en la respuesta, traducir al español).

* Latitud (propiedad lat en la respuesta).

* Longitud (propiedad lon en la respuesta).

Estos 4 datos deben mostrarse de una manera adecuada y amigable al usuario. Si no se encuentra ningún elemento para la búsqueda realizada, debe mostrarse también un mensaje adecuado.

#### Algunos tipos (nombre en la respuesta y traducción propuesta):

+ river / río
+ peak / cerro
+ volcano / volcán
+ town / ciudad
+ city / gran ciudad
+ village / pueblo
+ locality / localidad
+ state / provincia
+ suburb / barrio
+ road / calle

URL para consultas:

https://nominatim.openstreetmap.org/search.php?q=XXXXXXXX&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2

(reemplazando XXXXXXXX por lo que se desea buscar).

Ejemplos:
Búsqueda de ciudades:

[Rosario](https://nominatim.openstreetmap.org/search.php?q=Rosario&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

[Granadero Baigorria](https://nominatim.openstreetmap.org/search.php?q=Granadero+Baigorria&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

Búsqueda de provincias:

[Provincia](https://nominatim.openstreetmap.org/search.php?q=Chubut&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

Búsqueda de accidentes geográficos:

[Rio](https://nominatim.openstreetmap.org/search.php?q=Paraná&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

[Lugar](https://nominatim.openstreetmap.org/search.php?q=Aconcagua&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

Ejemplos de respuesta
Siempre se obtiene un array con un solo elemento ([0]), porque le pasamos el valor limit=1. (Si no hay ninguna coincidencia, se obtiene un array con cero elemento.)

Consultando: 
[Carcaraña](https://nominatim.openstreetmap.org/search.php?q=Carcarañá&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2)

Respuesta (se omiten los valores que no son necesarios para el ejercicio):

```json
[   
  {
    "lat": "-32.8563501",
    "lon": "-61.1487290",
    "addresstype": "town",
    "display_name": "Carcarañá, Municipio de Carcarañá, Departamento San Lorenzo, S2138, Argentina"
  }
]
```

Consultando un dato inexistente:

[https://nominatim.openstreetmap.org/search.php?q=esto_no_existe&dedupe=0&accept-language=es&countrycodes=ar&limit=1&format=jsonv2]

Respuesta:

[
]