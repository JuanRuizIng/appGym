const express = require('express');
const progresosController = require('./controllers/progresosController');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(progresosController);
app.listen(3003, () => {
    console.log('Microservicio Progresos ejecutandose en el puerto 3003');
});
