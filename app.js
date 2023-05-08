require('dotenv').config();
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

//Contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Gino Su',
        titulo: 'Node JS'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Gino Su',
        titulo: 'Node JS'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Gino Su',
        titulo: 'Node JS'
    });
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/back/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})