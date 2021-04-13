const express = require ('express');
const app = express();
const puerto = process.env.PORT;
const path = require ('path');

// le decimos cual es la carpeta publica
const publicPath = path.join(__dirname, './public');
// para que encuentre las imagenes y css
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) =>
res.render('home')
);

app.get('/home', (req, res) =>
res.render('home')
);

app.get('/login', (req, res) =>
res.render('login')
);

app.get('/register', (req, res) =>
res.render('register')
);

app.get('/producto', (req, res) =>
res.render('producto')
);

app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});