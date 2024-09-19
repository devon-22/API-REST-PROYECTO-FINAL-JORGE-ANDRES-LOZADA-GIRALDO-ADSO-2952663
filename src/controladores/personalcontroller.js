const db = require('../db/db')

/*consultas para la tabla clientes*/

// GET de la tabla personal - Obtiene todos los registros de la tabla personal.
exports.getpersonal = (req, res) => { // Función para obtener datos de la tabla personal
  db.query('SELECT * FROM personal', (err, results) => { // Consulta SQL para seleccionar todos los registros
      if (err) return res.status(500).json({ message: 'Error al obtener los personal' }); // Manejo de errores
      res.json(results); // Se Envía los resultados en formato JSON
  });
};

// POST de la tabla personal - Inserta un nuevo empleado en la tabla personal.
exports.postpersonal = (req, res) => { // Función para insertar un nuevo registro en la tabla personal
  const { id_personal, nombre, apellido, salario, fecha_contratacion, departamento, email } = req.body; // Extrae los datos del cuerpo de la solicitud
  if (!id_personal || !nombre || !apellido || !salario || !fecha_contratacion || !departamento || !email) { // Verifica que todos los campos estén presentes
      return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
  }
  const query = `INSERT INTO personal (id_personal, nombre, apellido, salario, fecha_contratacion, departamento, email) VALUES (?, ?, ?, ?, ?, ?, ?)`; // Consulta SQL para insertar datos
  db.query(query, [id_personal, nombre, apellido, salario, fecha_contratacion, departamento, email], (err, result) => { // Ejecuta la consulta
      if (err) return res.status(500).send({ message: 'Error al agregar el empleado', error: err }); // Manejo de errores
      res.status(201).send({ message: 'Empleado agregado exitosamente', id: result.insertId }); // Envía una respuesta exitosa
  });
};

// PUT para la tabla personal - Actualiza todos los campos de un empleado.
exports.uppersonal = (req, res) => { // Función para actualizar un registro de la tabla personal
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const { nombre, apellido, salario, fecha_contratacion, departamento, email } = req.body; // Extrae los datos del cuerpo de la solicitud
  if (!nombre || !apellido || !salario || !fecha_contratacion || !departamento || !email) { // Verifica que todos los campos estén presentes
      return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
  }
  const SQL = `UPDATE personal SET nombre = ?, apellido = ?, salario = ?, fecha_contratacion = ?, departamento = ?, email = ? WHERE id_personal = ?`; // Consulta SQL para actualizar los datos
  db.query(SQL, [nombre, apellido, salario, fecha_contratacion, departamento, email, id], (err, result) => { // Ejecuta la consulta
      if (err) return res.status(500).send({ message: 'Error al actualizar el dato', error: err }); // Manejo de errores
      res.status(200).send({ message: 'Dato actualizado exitosamente', id, nombre, apellido, salario, fecha_contratacion, departamento, email }); // Envía una respuesta exitosa
  });
};

// DELETE para la tabla personal - Elimina un empleado por ID.
exports.deletepersonal = (req, res) => { // Función para eliminar un registro de la tabla personal
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const SQL = 'DELETE FROM personal WHERE id_personal = ?'; // Consulta SQL para eliminar datos
  db.query(SQL, [id], (err, result) => { // Ejecuta la consulta
      if (err) return res.status(500).send({ message: 'Error al eliminar el dato', error: err }); // Manejo de errores
      res.status(200).send({ message: 'Dato eliminado exitosamente' }); // Envía una respuesta exitosa
  });
};

// PATCH para la tabla personal - Actualiza un solo campo (nombre) de un empleado.
exports.patchpersonal = (req, res) => { // Función para actualizar parcialmente un registro de la tabla personal
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const { nombre } = req.body; // Extrae el nombre del cuerpo de la solicitud
  if (!nombre) { // Verifica que el nombre esté presente
      return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta el nombre
  }
  const SQL = 'UPDATE personal SET nombre = ? WHERE id_personal = ?'; // Consulta SQL para actualizar el nombre
  db.query(SQL, [nombre, id], (err, result) => { // Ejecuta la consulta
      if (err) return res.status(500).send({ message: 'Error al actualizar el dato' }); // Manejo de errores
      res.status(200).send({ message: 'Dato cambiado exitosamente', id, nombre }); // Envía una respuesta exitosa
  });
};
