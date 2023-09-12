require('dotenv').config(); //lee las variables de entorno con extension .env
const express = require('express'); //import express
const cors = require('cors') //import cors

const { dbConnection } = require('./database/config'); //import de dbConnection en config.js

//Crear el servidor express
const app = express();

//Configurar CORS
app.use( cors() );

//Lectura y parseo del body
app.use( express.json() );

//Base de datos
dbConnection();

//Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/upload', require('./routes/uploads') );


app.listen( process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
} );