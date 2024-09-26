const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Trasa do dodawania użytkownika do gry
router.get('/addUser/:username', gameController.addUser);

// Trasa do aktualizacji punktów
router.get('/updateScore/:username/:points', gameController.updateScore);

module.exports = router;
