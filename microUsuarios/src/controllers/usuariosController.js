const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');

router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.userValidation(usuario, password);
    res.json(result);
}); //It Works

router.get('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    const result = await usuariosModel.traerUsuario(usuario);
  
    if (result && result.length > 0) {
      const userData = result[0];
      //console.log('Datos del usuario:', userData);
  
      if (userData.rutina !== undefined) {
        res.json({ usuario, rutina: userData.rutina, peso: userData.peso, nombreCompleto: userData.nombreCompleto});
      } else {
        res.status(404).send(`El usuario ${usuario} no tiene una rutina asignada`);
      }
    } else {
      res.status(404).send(`Usuario ${usuario} no encontrado`);
    }
  });

router.put('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    const peso = req.body.peso;
    const result = await usuariosModel.updateUser(usuario, peso);
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
    res.send("Usuario creado exitosamente");
}); //It Works

module.exports = router;
