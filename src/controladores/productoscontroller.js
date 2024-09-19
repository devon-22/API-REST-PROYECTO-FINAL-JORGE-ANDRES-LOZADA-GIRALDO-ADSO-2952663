const db = require('../db/db');


// consultas para la tabla productos

// GET - Obtiene todos los registros de la tabla productos.
exports.getproductos = (req , res) => { // Función para obtener productos
  db.query ('SELECT * FROM productos', (err , results) => { // Consulta para seleccionar todos los productos
      if(err) return res.status(500).json({ message: 'Error al obtener productos' }); // Manejo de errores
      res.json(results); // Envía los resultados en formato JSON
  });
};

// POST - Inserta un nuevo producto en la tabla productos.
exports.postproductos = (req , res) => { // Función para insertar un nuevo producto
  const { tipo, precio, cantidad, ubicacion } = req.body; // Extrae los datos del cuerpo de la solicitud
  if( !tipo || !precio || !cantidad || !ubicacion ) { // Verifica que todos los campos estén presentes
      return res.status(400).send({message: 'Todos los campos son obligatorios'}); // Envía un error si falta algún campo
  }
  const query = 'INSERT INTO productos (tipo, precio, cantidad, ubicacion) VALUES (?, ?, ?, ?)'; // Consulta SQL para insertar datos
  db.query(query, [ tipo, precio, cantidad, ubicacion ], (err , results) => { // Ejecuta la consulta
      if(err) { 
          console.error('Error al agregar el producto', err); // Muestra el error en la consola
          return res.status(500).send({message: 'Error al agregar el producto', error: err }); // Envía un mensaje de error
      }
      return res.status(200).send({message: 'Producto agregado exitosamente', id: results.insertId}); // Envía una respuesta exitosa
  });
};

// PUT - Actualiza todos los campos de un producto en la tabla productos.
exports.upproductos = (req, res) => { // Función para actualizar un producto
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const { tipo, precio, cantidad, ubicacion } = req.body; // Extrae los datos del cuerpo de la solicitud
  if (!tipo || !precio || !cantidad || !ubicacion) { // Verifica que todos los campos estén presentes
      return res.status(400).send({ message: 'Todos los campos son obligatorios' }); // Envía un error si falta algún campo
  }
  const query = 'UPDATE productos SET tipo = ?, precio = ?, cantidad = ?, ubicacion = ? WHERE id_productos = ?'; // Consulta SQL para actualizar datos
  db.query(query, [ tipo, precio, cantidad, ubicacion, id], (err, results) => { // Ejecuta la consulta
      if (err) { 
          console.error('Error al actualizar el producto', err); // Muestra el error en la consola
          return res.status(500).send({ message: 'Error al actualizar el producto', error: err }); // Envía un mensaje de error
      }
      if (results.affectedRows === 0) { 
          return res.status(404).send({ message: 'Producto no encontrado' }); // Envía un error si no se encuentra el producto
      }
      return res.status(200).send({ message: 'Producto actualizado exitosamente', id_productos: id, tipo, precio, cantidad, ubicacion }); // Envía una respuesta exitosa
  });
};

// DELETE - Elimina un producto de la tabla productos.
exports.deleteproductos = (req, res) => { // Función para eliminar un producto
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const query = 'DELETE FROM productos WHERE id_productos = ?'; // Consulta SQL para eliminar datos
  db.query(query, [id], (err, results) => { // Ejecuta la consulta
      if (err) { 
          console.error('Error al eliminar el producto', err); // Muestra el error en la consola
          return res.status(500).send({ message: 'Error al eliminar el producto', error: err }); // Envía un mensaje de error
      }
      if (results.affectedRows === 0) { 
          return res.status(404).send({ message: 'Producto no encontrado' }); // Envía un error si no se encuentra el producto
      }
      return res.status(200).send({ message: 'Producto eliminado exitosamente' }); // Envía una respuesta exitosa
  });
};

// PATCH - Actualiza parcialmente los campos de un producto en la tabla productos.
exports.patchproductos = (req , res) => { // Función para actualizar parcialmente un producto
  const { id } = req.params; // Extrae el id del parámetro de la URL
  const { tipo, precio } = req.body; // Extrae los datos del cuerpo de la solicitud
  const query = 'UPDATE productos SET tipo = ?, precio = ? WHERE id_productos = ?'; // Consulta SQL para actualizar datos
  db.query(query, [tipo, precio, id], (err, results) => { // Ejecuta la consulta
      if(err){ 
          console.error('Error al actualizar el producto', err); // Muestra el error en la consola
          return res.status(500).send({message: 'Error al actualizar el producto', error: err}); // Envía un mensaje de error
      }
      return res.status(200).send({ message: 'Producto actualizado exitosamente', id, tipo, precio }); // Envía una respuesta exitosa
  });             
};
