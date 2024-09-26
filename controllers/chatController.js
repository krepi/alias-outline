const gameChat = require('../services/gameChat');

// Retrieving chat history for the game
exports.getChatHistory = (req, res) => {
    const gameId = req.params.gameId;
    
    // Create a new game if it doesn't exist
    gameChat.createGame(gameId);

    // Retrieve the chat history for this game
    const chatHistory = gameChat.getChatHistoryForGame(gameId);

    // Render the view with the chat messages
    res.render('room', {
        gameId: gameId,
        messages: chatHistory,
        currentUser: 'Alice' // Assuming Alice is the current user
    });
};

// Adding a message to the chat
exports.addMessage = (req, res) => {
    const { gameId } = req.params;
    const { username, message } = req.body;

    // Add the message to the game's chat
    gameChat.addMessageToGame(gameId, username, message);

    // Redirect back to the game room
    res.redirect(`/game/${gameId}`);
};
