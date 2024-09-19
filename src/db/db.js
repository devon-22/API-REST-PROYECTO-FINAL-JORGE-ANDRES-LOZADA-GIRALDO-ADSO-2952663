const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'empleados'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('base de datos conectada');
});

module.exports = connection;