var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res) {
    models.User.findAll({
        include: [
            { model: models.Answer, required: true }
        ]
    })
    .then(function (users) {
        models.Question.findAll({
            include: [models.QuestionChoice],
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(function (questions) {
            res.render('admin', {
                questions: questions,
                users: users
            });
        });
    });
});

router.get('/answers', function (req, res) {
    models.User.findById(req.query.userId)
    .then(function (user) {
        models.Answer.findAll({
            where: { UserId: user.id },
            include: [ { model: models.QuestionChoice, include: [models.Question]} ]
        })
        .then(function (answers) {
            res.render('answers', {
                answers: answers
            });
        });
    });
});


module.exports = router;