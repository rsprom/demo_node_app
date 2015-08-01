var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

/* POST users to create if none exists. */
router.post('/create', function (req, res) {
    models.User.findOrCreate({
        where: { username: req.body.username }
    }).then(function (user) {
            redirect(res, user[0]);
    })
});

/* POST answers to create answer once user submits. */
router.post('/saveanswer', function (req, res) {
    models.Answer.create({
        QuestionChoiceId: req.body.questionChoice,
        UserId: req.query.userid
    }).then(function () {
        res.redirect('/questions?user=' + req.query.userid);
    })
});

function redirect(res, user){
    if (user.username.toLowerCase() == 'admin') {
        res.redirect('/admin');
    }
    else {
        res.redirect('/questions?user=' + user.id);
    }
}

module.exports = router;