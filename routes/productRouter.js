const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/', (req, res) => {
    const listProducts = productController.leerTodos();
    res.render('products', { listProducts });
});

router.get('/create', (req, res) => {
    res.render('createProduct')
});

router.get('/:id', (req, res) => {
    res.render('detailProduct')

    console.log("Estoy en productRouter. con /:id Abro la pagina de detailProduct")
        //res.send("Detalle de producto "+ req.params.id)
})

router.post('/', (req, res) => {
    res.send("Trae datos del form de alta")
})

router.get('/edits/:id', (req, res) => {
    res.send("Muestra el formulario para editar el producto")
})

router.put('/', (req, res) => {
    res.send("Modificar producto")
})

router.delete('/:id', (req, res) => {
    res.send("Borra producto")
})

module.exports = router;