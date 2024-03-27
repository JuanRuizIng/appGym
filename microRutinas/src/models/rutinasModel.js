const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appGimnasio'
});

async function getRoutines() {
    const result = await connection.query('SELECT * FROM rutinas');
    return result[0];
};

async function selectUserRoutines(id, usuario) {
    const result = await connection.query('INSERT INTO usuarios VALUES (null, null, null, null, null, null, ?) WHERE usuario = ?', [id, usuario]);
    return result[0];
};

async function getRoutinesSelected(id) {
    const result = await connection.query('SELECT * FROM rutinas WHERE id = ?', id);
    return result[0];
};

async function createRoutines(descripcion, objetivo, objetivoKilos) {
    const result = await connection.query('INSERT INTO rutinas VALUES (null, ?, ?, ?)', [descripcion, objetivo, objetivoKilos]);
    return result[0];
};

module.exports = {
    getRoutines,
    selectUserRoutines,
    getRoutinesSelected,
    createRoutines
};