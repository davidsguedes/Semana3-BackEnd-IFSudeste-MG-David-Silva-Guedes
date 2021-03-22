let express = require('express');
let router = express.Router();

router.get('/:p', (req, res) => {
    res.send("Você informou o parâmetro " + req.params.p);

});

router.get('/post/login/:user', (req, res) => {
    res.send("Você acessou informações do usuário " + req.params.user);

});

module.exports = router;