var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    }); // vai procurar dentro do publico index.html - em routes/index.html
});

module.exports = router;