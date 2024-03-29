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

async function getRoutinesById(rutinaUsuario) {
    const result = await connection.query('SELECT * FROM rutinas WHERE id = ?', [rutinaUsuario]);
    return result[0];
};

async function getRoutinesSelected(id) {
    const result = await connection.query('SELECT * FROM rutinas WHERE id = ?', [id]);
    return result[0];
};

async function createRoutines(descripcion, objetivo, objetivoKilos) {
    const result = await connection.query('INSERT INTO rutinas VALUES (DEFAULT, ?, ?, ?)', [descripcion, objetivo, objetivoKilos]);
    return result;
};

async function selectUserRoutines(rutina, usuario) {
    const result = await connection.query(
        'INSERT INTO usuarios (usuario, rutina) VALUES (?, ?) ON DUPLICATE KEY UPDATE rutina = VALUES(rutina)',
        [usuario, rutina]);
    return result;
    };

module.exports = {
    getRoutines,
    getRoutinesSelected,
    createRoutines,
    selectUserRoutines,
    getRoutinesById
};