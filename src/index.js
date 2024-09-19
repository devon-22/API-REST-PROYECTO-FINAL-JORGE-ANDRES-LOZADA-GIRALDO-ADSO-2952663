const express = require('express');
const morgan = require('morgan');
const app = express();

// Configuración del puerto
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json());
app.use(morgan ('dev'));

//ruta para empleados
const rutas = require ('./rutas/rutas.js');
app.use ('/api/rutas'  , rutas);

//ruta db
const rutasdb = require('./db/db.js');


 
// Iniciar el servidor
app.listen(app.get ('port') , () => {
console.log(`Servidor esta activo en el puerto ${app.get('port')}`);
});