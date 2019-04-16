var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Ovi'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Ovi'})
})

module.exports = router;