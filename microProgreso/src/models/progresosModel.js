const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appGimnasio'
});

async function getProgress() {
    const result = await connection.query('SELECT * FROM progreso');
    return result[0];
};

async function getProgressByUser(usuario) {
    const result = await connection.query('SELECT * FROM progreso WHERE usuario = ?', usuario);
    return result[0];
};

async function newProgress(progreso) {
    const result = await connection.query('INSERT INTO progreso VALUES (null, ?, ?, ?, Now())', [progreso.usuario, progreso.rutina, progreso.nuevoPesoUsuario]);
    return result[0];
};

module.exports = {
    getProgress,
    getProgressByUser,
    newProgress
}