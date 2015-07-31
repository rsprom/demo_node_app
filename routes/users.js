var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function (req, res) {

    res.send('respond with a resource');
});

router.post('/create', function (req, res) {
    models.User.findOne({
        where: { username: 'req.body.username'}
    }).then(function (user) {
        if (user == null) {
            models.User.create({
                username: req.body.username
            })
        }
        else {

        }
    }).then(function () {
        if (req.body.username.toLowerCase() == 'admin') {
            models.Question.findAll({
                include: [models.QuestionChoice]
            }).then(function (questions) {
                res.render('admin', {
                    questions: questions
                });
            });
        }
        else {
            res.render('questions');
        }
        
    });
});

module.exports = router;