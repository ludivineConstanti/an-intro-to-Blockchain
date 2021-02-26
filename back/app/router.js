const { Router } = require('express');

const quizController = require('./controllers/quizController');

const router = Router();

// Page d'accueil
router.get('/');

// Pages quiz
router.get('/quiz', quizController.allQuiz);
router.get('/quiz/:id', quizController.quizById);

module.exports = router;