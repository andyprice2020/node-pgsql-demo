Demo del uso de NodeJS con PostgreSQL

Para su uso, deben tener instalado Postgresql, ya sea una instalación dirtecta o bien mediante Docker(aqui al momento de crear el contenedor deben colocar una contraseña y el respectivo volumen)
Adjunto el comando para que puedan descargar la imagen de postgresql asi como deben crear el contenedor con el volumen
  
  Descarga del volumen
  - docker pull postgres:16.6-alpine3.21 (para descargar la imagen)

  Para generar el contenedor con volumen
  - docker run -d --name pgdev -p 5432:5432 -e POSTGRES_PASSWORD=D3v310p34*DF5 -v pgdata:/var/lib/postgresql/data postgres:16.6-alpine3.21

Luego, realizar la configuración con el cliente DBeaver, esta se hace de forma directa a diferencia de lo que se hace con MySQL. Hecho esto, se debe crear la BBDD demo-pg-node.

Al haber realizado los pasos anteriores y despues de descargar el proyecto, verificar que las credenciales esten similares en el archivo db.config.js en la carpeta app->config

Finalmente, ejecutan el proyecto mediante el comando node server.js

En el proyecto, adjunto el archivo de Postman para que puedan realizar las pruebas respectivas


