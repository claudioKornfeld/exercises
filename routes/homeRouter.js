const express = require('express');

const router = express.Router();

const controladorHome = require('../controller/homeController');

console.log("Entro al homeRouter que me lleva al homecontroller");

router.get('/', (req, res) => {
    // leo todo el array de produts en el controlador homeController
    const products = controladorHome.leerTodos();
    // envío el array product a la vista para que la recorra EJS
    console.log('volvi del controlador con los products ya leidos')
    res.render('home', { products });
});

module.exports = router;