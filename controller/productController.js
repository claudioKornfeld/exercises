let visitados = require('../data/datosProductos');

let productController = {

    leerTodos: function() {
        console.log('leo products desde data')
        return visitados
    },
    /* show: (req, res) => {
          //return res.render('formularioDetalle', { visitados })
          let product = visitados.find(function(value) {
              return value.id === req.params.id;
          })
          if (product) {
              res.render('detailProduct', {product});
          } else {
              res.render('error 404');
          }
      }*/

}

module.exports = productController