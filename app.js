require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home',{
      nombre: 'Luis cortes',
      titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Luis cortes',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Luis cortes',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.render('404');
});



app.listen( port, () => {
    console.log(`Ejemplo app corriendo por http://localhost:${port}`);
})