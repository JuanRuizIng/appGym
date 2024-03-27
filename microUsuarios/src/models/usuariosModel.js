const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appGimnasio'
});

async function userValidation(usuario, password) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
return result[0];
};

async function createUser(nombreCompleto, peso, meta, usuario, password, rol) {
    const result = await connection.query('INSERT INTO usuarios VALUES (?, ?, ?, ?, ?, ?, null)', [nombreCompleto, peso, meta, usuario, password, rol]);
    return result[0];
};

module.exports = {
    userValidation,
    createUser
};