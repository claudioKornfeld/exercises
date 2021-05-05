// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');
// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

//let visitados = productModel
let homeController = {

    listar: (req, res) => {
        console.log('entro listado de productos')
        const products = productModel.all();
        res.render('products', { products });
    }
}




module.exports = homeController