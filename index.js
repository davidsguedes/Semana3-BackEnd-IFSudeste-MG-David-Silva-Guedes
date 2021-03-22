const express = require('express');
const app = express();
const path = require('path');

let port = 3000;


//Carregar arquivos estáticos
app.use(express.static(path.join(__dirname,"public")));


app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));

});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname + '/services.html'));

});

app.get('/solutions', (req, res) => {
    res.sendFile(path.join(__dirname + '/solutions.html'));

});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname + '/portfolio.html'));

});

app.get('/[a-z][a-z][a-z][a-z][a-z]', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));

});

app.get('*', (req, res) => {
    res.send("Link inválido: 404");

});

app.get('./public/images/json', (req, res) => {
    res.status(200).json({id: req.params.id, arquivo: req.params.path});

});


let params_module = require('./params.js')
app.use('/', params_module);


app.post('/post/login', (req, res) => {
    res.send("Você enviou os dados do usuário para login");

});


app.listen(port, () => console.log(`Escutando na porta ${port}`));