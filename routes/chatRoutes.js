const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Route to retrieve chat history
router.get('/game/:gameId', chatController.getChatHistory);

// Route to add a message to the chat via POST method
router.post('/game/:gameId/send', chatController.addMessage);

module.exports = router;

