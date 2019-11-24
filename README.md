# MERN backend

## Instalaciones previas (Windows).
### MongoDB
Se utilizará MongoDB para la base de datos, por lo cual hay que ir a la página oficial de MongoDB y buscar el instalador. Una vez descargado colocar siguiente en el instalador y al finalizar se debe crear una carpeta `data` y `db` que debe quedar de la siguiente forma `C:\data\db`.
Ahora para encender la base de datos hay que ir a `C:\Program Files\MongoDB\Server\4.0\bin` y ejecutar el `mongod` por consola, se recomienda añadir esa ruta al path para ejecutar el `mongod` desde cualquier lugar.
### Robo 3T.
Para manejar la base de datos se utilizará Robo3T, hay que ir a la página oficial y descargar la versión gratuita.
Una vez instalado y con la base de datos corriendo,en `MongoDB connections` hacer click en `create`, se colocan los siguientes campos:
* name:Nombre de la conexión
* address: localhost
* port: 27017 (este se ve en mongod en la terminal)
Luego dar ok y se puede conectar a la base de datos.

## Ejecutar proyecto.

* npm install
* node server/server