const express = require('express');
const rutinasController = require('./controllers/rutinasController');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(rutinasController);
app.listen(3002, () => {
    console.log('Microservicio Rutinas ejecutandose en el puerto 3002');
});
