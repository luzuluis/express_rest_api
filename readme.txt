crear carpeta de proyecto
npm init -y
  se crea un archivo package.json
crear index.js
  console.log("Hola Mundo");
en index.js importar express
    import express from "express";
verificar la version de nodejs
node --version
  en mi caso v14.17.6
instalar express
  npm i express
    la version es 4.18.2
en package.json agregar la siguiente linea para 
que nodejs no de error en las importaciones
  "type":"module",
ejecutar index.js
  node index.js
instalar nodemon para actualizar la ejecucion de forma automatica
  npm i nodemon -D
agregar en package.json en script
  "dev": "nodemon index.js",
en la consola en vez de nmp index.js
  npm run dev
creando rutas
app.get('/users', (req, res) => {
  res.send("obteniendo usuarios");
});
instalar en visual code Thunder Client 
para ejecutar las demas peticiones(put,delete,post)
utilizar esta extension para probar las peticioens al servidor,poner la url
http://localhost:3000/users
y elegir get en el combo que esta al lado izquierdo de la url
conectar con mysql y crear la base de datos y tablas
  host:localhost
  password:I3BHwwYfq7qHafHC
se puede usar mysql de consola,wordbench o en mi caso xampp
  nombre de base de datos expressdb
  nombre de table type_user(id,referencia,descripcion)
  nombre de tabla user(id,user,nombre,apellido,tipo,estado)
instalar mysql2
  npm i mysql2
crear carpeta db y dentro de la misma un archivo db.js

thunder client en opcion body para la peticion POST
 {
  "user":"diana",
  "nombre":"Diana del Rocio",
  "apellido":"Pardo San Martin"
}

control de errores try/catch

instalar dev
  npm install dotenv

configuracion de variables de entorno


control de versiones 
	Cerrar Visual Studio Code en caso de no tener instalado Git
		instalar git para windows
control de versiones 
	Cerrar Visual Studio Code en caso de no tener instalado Git
		instalar git para windows
	Abrir Visual Studio Code y elegir de nuevo el proyecto
verificar en la terminal de Code el control de versiones
	git --version
		git version (2.33.0.windows.2)ejemplo
crear archivo .gitignore y poner lo siguiente
  node_module
  .env
iniciar el control de versiones
	git init
agregar todos los archivo al control de versiones
  git add .
realizar la operacion de agregar
  git commit -m "First Commit"
crear repositorio en gitHub
  express_rest_api
copiar la siguiente linea despues de crear el repositorio
  git remote add origin https://github.com/luzuluis/express_rest_api.git

si se ha hecho nuevos cambios 
  git add .
realizar el commit
  git commit -m "Second Commit"
Luego subir a i repositorio de gitHub
  git push origin master

dominio cineluis.cloudaccess.host
  bsr76dyt.up.railway.app
