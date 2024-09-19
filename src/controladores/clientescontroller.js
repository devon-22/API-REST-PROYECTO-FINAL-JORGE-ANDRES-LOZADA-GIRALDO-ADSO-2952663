const db = require('../db/db');

/* Consultas para la tabla clientes */

// GET - Obtiene todos los registros de la tabla clientes.
exports.getclientes = (req, res) => { // Función para obtener todos los clientes
    db.query('SELECT * FROM clientes', (err, results) => { // Consulta SQL para seleccionar todos los clientes
        if (err) { // Manejo de errores
            return res.status(500).json({ message: 'Error al obtener los clientes' }); // Envía un error si la consulta falla
        }
        res.json(results); // Envía los resultados en formato JSON
    });
};

// POST - Inserta un nuevo cliente en la tabla clientes.
exports.postclientes = (req, res) => { // Función para insertar un nuevo cliente
    const { nombre, telefono, correo, direccion, fecha_registro } = req.body; // Extrae los datos del cuerpo de la solicitud
    if (!nombre || !telefono || !correo || !direccion || !fecha_registro) { // Verifica que todos los campos estén presentes
        return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
    }
    const query = 'INSERT INTO clientes (nombre, telefono, correo, direccion, fecha_registro) VALUES (?, ?, ?, ?, ?)'; // Consulta SQL para insertar datos
    db.query(query, [nombre, telefono, correo, direccion, fecha_registro], (err, results) => { // Ejecuta la consulta
        if (err) { 
            console.error('Error al agregar el cliente:', err); // Muestra el error en la consola
            return res.status(500).send({ message: 'Error al agregar el cliente', error: err }); // Envía un mensaje de error
        }
        res.status(201).send({ message: 'Cliente creado exitosamente', id: results.insertId }); // Envía una respuesta exitosa
    });
};

// PUT - Actualiza todos los campos de un cliente en la tabla clientes.
exports.upclientes = (req, res) => { // Función para actualizar un cliente
    const { id } = req.params; // Extrae el id del parámetro de la URL
    const { nombre, telefono, correo, direccion, fecha_registro } = req.body; // Extrae los datos del cuerpo de la solicitud
    if (!nombre || !telefono || !correo || !direccion || !fecha_registro) { // Verifica que todos los campos estén presentes
        return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
    }
    const query = 'UPDATE clientes SET nombre = ?, telefono = ?, correo = ?, direccion = ?, fecha_registro = ? WHERE id_clientes = ?'; // Consulta SQL para actualizar datos
    db.query(query, [nombre, telefono, correo, direccion, fecha_registro, id], (err, results) => { // Ejecuta la consulta
        if (err) { 
            console.error('Error al actualizar el cliente:', err); // Muestra el error en la consola
            return res.status(500).send({ message: 'Error al actualizar el cliente', error: err }); // Envía un mensaje de error
        }
        res.status(200).send({ message: 'Cliente actualizado exitosamente', id, nombre, telefono, correo, direccion, fecha_registro }); // Envía una respuesta exitosa
    });
};

// DELETE - Elimina un cliente de la tabla clientes.
exports.deleteclientes = (req, res) => { // Función para eliminar un cliente
    const { id } = req.params; // Extrae el id del parámetro de la URL
    const query = 'DELETE FROM clientes WHERE id_clientes = ?'; // Consulta SQL para eliminar datos
    db.query(query, [id], (err, results) => { // Ejecuta la consulta
        if (err) { 
            console.error('Error al eliminar el cliente:', err); // Muestra el error en la consola
            return res.status(500).send({ message: 'Error al eliminar el cliente', error: err }); // Envía un mensaje de error
        }
        res.status(200).send({ message: 'Cliente eliminado exitosamente', id }); // Envía una respuesta exitosa
    });
};

// PATCH - Actualiza parcialmente un campo (telefono) de un cliente en la tabla clientes.
exports.patchclientes = (req, res) => { // Función para actualizar parcialmente un cliente
    const { id } = req.params; // Extrae el id del parámetro de la URL
    const { telefono } = req.body; // Extrae el teléfono del cuerpo de la solicitud
    if (!telefono) { // Verifica que el campo esté presente
        return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
    }
    const query = 'UPDATE clientes SET telefono = ? WHERE id_clientes = ?'; // Consulta SQL para actualizar datos
    db.query(query, [telefono, id], (err, results) => { // Ejecuta la consulta
        if (err) { 
            console.error('Error al actualizar el cliente:', err); // Muestra el error en la consola
            return res.status(500).send({ message: 'Error al actualizar el cliente', error: err }); // Envía un mensaje de error
        }
        res.status(200).send({ message: 'Cliente actualizado exitosamente', id, telefono }); // Envía una respuesta exitosa
    });
};
