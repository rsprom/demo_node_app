var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res) {
    models.Question.findAll({
        include: [models.QuestionChoice],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function (questions) {
        res.render('admin', {
            questions: questions
        });
    });
});

module.exports = router;