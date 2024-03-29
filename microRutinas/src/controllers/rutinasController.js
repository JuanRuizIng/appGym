const { Router } = require('express');
const router = Router();
const rutinasModel = require('../models/rutinasModel');

router.get('/rutinas', async (req, res) => {
    var result;
    result = await rutinasModel.getRoutines();
    res.json(result);
}); //It Works

router.get('/rutina/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    const result = await rutinasModel.getRoutinesById(usuario);
    res.json(result);
  }); //Its works but with a request of the progresoController

router.post('/rutinas/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    const id = req.body.id;
    var result;
    result = await rutinasModel.selectUserRoutines(id, usuario);
    res.json(result);
}); //It Works

router.get('/rutinas/misRutinas', async (req, res) => {
    // Le doy un /rutinas/misRutinas sin user porque el id se va a sacar del usuario.rutina
    // En usuario.rutina (o en la columna rutina) estará esperando el id de la rutina en int
    const id = req.body.id;
    var result;
    result = await rutinasModel.getRoutinesSelected(id);
    res.json(result);
}); //Its works

router.post('/crearRutina', async (req, res) => {
    const descripcion = req.body.descripcion;
    const objetivo = req.body.objetivo;
    const objetivoKilos = req.body.objetivoKilos;
    var result;
    result = await rutinasModel.createRoutines(descripcion, objetivo, objetivoKilos);
    res.send(result);
}); //Its works

module.exports = router;