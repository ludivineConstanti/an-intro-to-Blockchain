const { Router } = require('express');

const quizController = require('./controllers/quizController');

const router = Router();

// Page d'accueil
router.get('/');

// Pages quiz
router.get('/quizzes', quizController.allQuiz);
router.get('/quiz/:id', quizController.quizById);
router.get('/quiz/category/:id', quizController.quizByCategoryId);

module.exports = router;