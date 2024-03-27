const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');

router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.userValidation(usuario, password);
    res.json(result);
});

router.post('/usuarios/crearUsuario', async (req, res) => {
    const nombreCompleto = req.body.nombreCompleto;
    const peso = req.body.peso;
    const meta =  req.body.meta;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const rol = req.body.rol;
    var result;
    result = await usuariosModel.createUser(nombreCompleto, peso, meta, usuario, password, rol);
    res.json(result);
    res.send("Usuario creado exitosamente");
});

module.exports = router;