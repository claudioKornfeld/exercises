const express = require('express');

const router = express.Router();

const controladorHome = require('../controller/homeController');

console.log("Entro al homeRouter que me lleva al homecontroller");

router.get('/', controladorHome.listar);

router.get('/login', (req, res) =>
    res.render('login')
);
router.get('/register', (req, res) =>
    res.render('register')
);

module.exports = router;