const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

//hacer los get es mi tarea. con Gaby hicimos '/' y '/:id/

router.get('/', productController.listar); //hecho


router.get('/create', productController.create); //hecho

router.get('/:id', productController.show); //hecho

router.post('/', productController.store); // hecho parcial lo estoy guardando en el JSON, pero no lo veo x pantalla

router.get('/edits/:id', productController.edit); //hecho pero hay una diferencia con el modelo final de Gaby.Revisar


//Hasta aca llegue.

router.put('/', (req, res) => {
    res.send("Modificar producto")
})

router.delete('/:id', (req, res) => {
    res.send("Borra producto")
})

module.exports = router;