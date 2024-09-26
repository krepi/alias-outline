const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Trasa do pobierania historii czatu
router.get('/game/:gameId', chatController.getChatHistory);

// Trasa do dodawania wiadomości do czatu metodą POST
router.post('/game/:gameId/send', chatController.addMessage);

module.exports = router;

