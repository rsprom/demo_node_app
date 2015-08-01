var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET single question */
router.get('/', function (req, res) {
    models.Answer.findAll({
        where: { UserId: req.query.user },
        include: [
            {
                model: models.QuestionChoice
            }]
    }).then(function (answers) {
        if (answers.length == 0) {
            models.Question.findOne({
                include: [
                    {
                        model: models.QuestionChoice
                    }],
            }).then(function (question) {
                renderQuestion(question, res, req);
            });
        }
        else {
            var answeredQuestions = [];
            answers.forEach(function (answer) {
                answeredQuestions.push(answer.QuestionChoice.QuestionId);
            });
            
            models.Question.findOne({
                where: {
                    id: {
                        $notIn: answeredQuestions
                    }
                },
                include: [
                    {
                        model: models.QuestionChoice
                    }]
            }).then(function (question) {
                if (question == null) {
                    res.render('questions', {
                        question: question,
                        userid: req.query.user
                    });
                }
                else {
                    renderQuestion(question, res, req);
                }
            });
        }
            

    });
});

/* POST Create question */
router.post('/create', function (req, res) {
    models.Question.create({
        question: req.body.questionInputNew,
        isActive: true
    }).then(function (question) {
        res.redirect('/admin');
    });
});

/* POST Create choice */
router.post('/addChoice', function (req, res) {
    models.QuestionChoice.create({
        questionChoice: req.body.questionChoiceNew,
        QuestionId: req.query.questionId,
        isActive: true
    }).then(function (question) {
        res.redirect('/admin');
    });
});


module.exports = router;

function renderQuestion(question, res, req) {
    res.render('questions', {
        question: question,
        userid: req.query.user
    });
}