const express = require ('express');

const router = express.Router();

const personalcontroller = require('../controladores/personalcontroller')
const clientescontroller = require('../controladores/clientescontroller')
const productoscontroller = require('../controladores/productoscontroller')
const ventascontroller = require('../controladores/ventascontroller')


//rutas personal
router.get('/personal' , personalcontroller.getpersonal);//http://localhost:3000/api/rutas/personal
router.post('/personal' , personalcontroller.postpersonal);//http://localhost:3000/api/rutas/personal
router.put('/personal/:id' , personalcontroller.uppersonal);//http://localhost:3000/api/rutas/personal/--(insertar numero del id de la tabla)--
router.delete('/personal/:id',personalcontroller.deletepersonal); //http://localhost:3000/api/rutas/personal/--(insertar numero del id de la tabla)--
router.patch('/personal/:id' , personalcontroller.patchpersonal);//http://localhost:3000/api/rutas/personal/--(insertar numero del id de la tabla)--



// rutas para clientes
router.get('/clientes' , clientescontroller.getclientes);//http://localhost:3000/api/rutas/clientes
router.post('/clientes' , clientescontroller.postclientes);//http://localhost:3000/api/rutas/clientes
router.put('/clientes/:id' , clientescontroller.upclientes)//http://localhost:3000/api/rutas/clientes/--(insertar numero del id de la tabla)--
router.delete('/clientes/:id',clientescontroller.deleteclientes) //http://localhost:3000/api/rutas/clientes/--(insertar numero del id de la tabla)--
router.patch('/clientes/:id' , clientescontroller.patchclientes)//http://localhost:3000/api/rutas/clientes/--(insertar numero del id de la tabla)--


// rutas para producto
router.get('/productos' , productoscontroller.getproductos);//http://localhost:3000/api/rutas/productos
router.post('/productos' ,  productoscontroller.postproductos);//http://localhost:3000/api/rutas/productos
router.put('/productos/:id' ,  productoscontroller.upproductos)//http://localhost:3000/api/rutas/productos/--(insertar numero del id de la tabla)--
router.delete('/productos/:id', productoscontroller.deleteproductos) //http://localhost:3000/api/rutas/productos/--(insertar numero del id de la tabla)--
router.patch('/productos/:id' , productoscontroller.patchproductos)//http://localhost:3000/api/rutas/productos/--(insertar numero del id de la tabla)--*/



//rutas para ventas
router.get('/ventas' , ventascontroller.getventas);//http://localhost:3000/api/rutas/ventas
router.post('/ventas' , ventascontroller.postventas);//http://localhost:3000/api/rutas/ventas
router.put('/ventas/:id' , ventascontroller.upventas)//http://localhost:3000/api/ventas--(insertar numero del id de la tabla)--
router.delete('/ventas/:id',ventascontroller.deleteventas) //http://localhost:3000/api/rutas/ventas/--(insertar numero del id de la tabla)--
router.patch('/ventas/:id' , ventascontroller.patchventas)//http://localhost:3000/api/rutas/ventas--(insertar numero del id de la tabla)--*/





module.exports = router;