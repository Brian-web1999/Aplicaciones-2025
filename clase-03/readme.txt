*Creamos un micro servidor
*Empezaremos a ver que nos manda el cliente
*Instalamos nodemon: comando npm init y ahi te va aparecer una serie de pasos a seguir y cambiar el "start" por "dev". es la inicializar el proyecto.
En la seccion de scripts, ahi instalamos nodemon: npm i nodemon
y remplazamos "nodemon" en "node" server.js
*Lo cambiamos a dependencia de desarrollo en vez de produccion: npm i nodemon -D
*Lo cambiamos a dependencia EXACTA en vez de desarrollo: npm i nodemon -D -E
*para volver a instalar node modules: npm i