const db = require('../db/db'); // Importa la conexión a la base de datos

// GET - Obtener todas las ventas
exports.getventas = (req, res) => {
    db.query('SELECT * FROM ventas', (err, results) => { // Consulta SQL para obtener todas las ventas
        if (err) return res.status(500).json({ // Manejo de errores
            message: 'Error al obtener ventas'
        });
        res.json(results); // Envía los resultados en formato JSON
    });
};

// POST - Agregar una nueva venta
exports.postventas = (req, res) => {
    const { fecha_ventas, cantidad, precio_total } = req.body; // Desestructura los datos del cuerpo de la solicitud
    if (!fecha_ventas || !cantidad || !precio_total) { // Verifica que todos los campos estén presentes
        return res.status(500).send({ message: 'Hubo un error, se deben llenar los campos' });
    }
    const query = 'INSERT INTO ventas (fecha_ventas, cantidad, precio_total) VALUES (?, ?, ?)'; // Consulta SQL para insertar una nueva venta
    db.query(query, [fecha_ventas, cantidad, precio_total], (err, results) => { // Ejecuta la consulta
        if (err) { // Manejo de errores
            console.error('Hubo un error', err);
            return res.status(500).json({ message: 'Hubo un error', error: err });
        }
        res.status(200).json({ message: 'Venta agregada exitosamente', id: results.insertId }); // Envía respuesta de éxito
    });
};

// PUT - Actualizar una venta
exports.upventas = (req, res) => {
    const { id } = req.params; // Obtiene el ID de la venta desde los parámetros
    const { fecha_ventas, cantidad, precio_total } = req.body; // Desestructura los datos del cuerpo de la solicitud
    if (!fecha_ventas || !cantidad || !precio_total) { // Verifica que todos los campos estén presentes
        return res.status(500).send({ message: 'Hubo un error, se deben llenar' });
    }
    const query = 'UPDATE ventas SET fecha_ventas = ?, cantidad = ?, precio_total = ? WHERE id_ventas = ?'; // Consulta SQL para actualizar una venta
    db.query(query, [fecha_ventas, cantidad, precio_total, id], (err, results) => { // Ejecuta la consulta
        if (err) {
            console.error('Error al actualizar las ventas', err); // Manejo de errores
            return res.status(500).json({ message: 'Error al actualizar ventas' });
        }
        return res.status(200).json({ message: 'Se actualizó correctamente', id_ventas: id, fecha_ventas, cantidad, precio_total }); // Envía respuesta de éxito
    });
};

// DELETE - Eliminar una venta
exports.deleteventas = (req, res) => {
    const { id } = req.params; // Obtiene el ID de la venta desde los parámetros
    const query = 'DELETE FROM ventas WHERE id_ventas = ?'; // Consulta SQL para eliminar una venta
    db.query(query, [id], (err, results) => { // Ejecuta la consulta
        if (err) {
            console.error('Error al borrar la tabla ventas', err); // Manejo de errores
            return res.status(500).json({ message: 'Error al borrar la tabla ventas' });
        }
        return res.status(200).json({ message: 'Se ha borrado exitosamente', id_ventas: id }); // Envía respuesta de éxito
    });
};

// PATCH - Actualizar parcialmente una venta
exports.patchventas = (req, res) => {
    const { id } = req.params; // Obtiene el ID de la venta desde los parámetros
    const { cantidad, precio_total } = req.body; // Desestructura los datos del cuerpo de la solicitud
    if (!cantidad || !precio_total) { // Verifica que ambos campos estén presentes
        return res.status(500).send({ message: 'Ocurrió un error en los campos' });
    }
    const query = 'UPDATE ventas SET cantidad = ?, precio_total = ? WHERE id_ventas = ?'; // Consulta SQL para actualizar parcialmente
    db.query(query, [cantidad, precio_total, id], (err, results) => { // Ejecuta la consulta
        if (err) {
            console.error('Hubo un error al actualizar la tabla ventas', err); // Manejo de errores
            return res.status(500).json({ message: 'Hubo un error al actualizar la tabla ventas', error: err });
        }
        return res.status(200).json({ message: 'Se actualizó la tabla correctamente', id, cantidad, precio_total }); // Envía respuesta de éxito
    });
};
