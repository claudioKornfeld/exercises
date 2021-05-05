const express = require('express');
const app = express();
const puerto = process.env.PORT;
const path = require('path');

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter')

// para que encuentre las imagenes y css
app.use(express.static('public'));
// configuro EJS
app.set('view engine', 'ejs')

// llamo al ruteo
app.use('/', homeRouter);
app.use('/products', productRouter);
//app.use('/', userRouter);


/*app.get('/login', (req, res) =>
    res.render('login')
);
app.get('/register', (req, res) =>
    res.render('register')
);*/

/*app.use((req, res, next) => {
    res.status(404).render('error404')
});*/

app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});