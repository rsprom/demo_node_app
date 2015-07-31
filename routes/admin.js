var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('questions.jade', { title: 'Questions' });
});

module.exports = router;