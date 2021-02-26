const { Router } = require('express');

const router = Router();

// Page d'accueil
router.get('/');

// Page aec tout les quiz
router.get('/quiz');

module.exports = router;