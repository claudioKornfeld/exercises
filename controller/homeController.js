let visitados = require('../data/datosProductos');

let homeController = {

    leerTodos: function() {
        console.log('leo products desde data en el homeController')
        return visitados
    }

}

module.exports = homeController