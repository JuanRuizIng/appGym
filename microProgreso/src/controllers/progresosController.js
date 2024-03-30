const { Router } = require('express');
const router = Router();
const axios = require("axios");
const progresosModel = require('../models/progresosModel');

router.get('/progresos', async (req, res) => {
    var result;
    result = await progresosModel.getProgress();
    res.json(result);
}); //Its works

router.get('/progresos/:usuario', async (req, res) => {
    const usuario = req.params.usuario
    var result;
    result = await progresosModel.getProgressByUser(usuario);
    res.json(result);
}); //Its works

router.post('/crearProgreso', async (req, res) => {
    const usuario = req.body.usuario;
    //Creación del progreso
    const response = await axios.get(`http://192.168.100.2:3001/usuarios/${usuario}`);
    const usuarioCliente = response.data.usuario;
    const nombre = response.data.nombreCompleto;
    const rutinaUsuario = response.data.rutina;
    const peso = response.data.peso;
    const nuevoPesoUsuario = await nuevoPeso(peso, rutinaUsuario, usuarioCliente);

    progreso = {
        nombre: nombre,
        pesoNuevo: nuevoPesoUsuario,
        rutina: rutinaUsuario
    };
    var result;
    result = await progresosModel.newProgress(progreso);
    res.json(result);
}); //Its works with a usuario in the body.

async function nuevoPeso(peso, rutinaUsuario, usuario) {
  try {
    const rutinaData = (await axios.get(`http://192.168.100.2:3002/rutina/${rutinaUsuario}`)).data;
    const pesoRutina = rutinaData[0].objetivoKilos;
    const pesoNuevo = peso + pesoRutina;
    await axios.put(`http://192.168.100.2:3001/usuarios/${usuario}`, { peso: pesoNuevo });
    return pesoNuevo;
  } catch (error) {
    console.error("Error al actualizar el peso del usuario:", error);
    throw error;
  }
}

module.exports  = router;