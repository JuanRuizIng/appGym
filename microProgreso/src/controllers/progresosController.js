const { Router } = require('express');
const router = Router();
const progresosModel = require('../models/progresosModel');

router.get('/progresos', async (req, res) => {
    var result;
    result = await progresosModel.getProgress();
    res.json(result);
});

router.get('/progresos/:usuario', async (req, res) => {
    const usuario = req.params.usuario
    var result;
    result = await progresosModel.getProgressByUser(usuario);
    res.json(result);
});

router.post('/progresos/crearProgreso', async (req, res) => {
    const descripcion = req.body.descripcion;
    const objetivo = req.body.objetivo;
    const objetivoKilos = req.body.objetivoKilos;
    var result;
    result = await rutinasModel.selectUserRoutines(descripcion, objetivo, objetivoKilos);
    res.json(result);
});