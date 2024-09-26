const gameChat = require('../services/gameChat');

// Pobieranie historii czatu dla gry
exports.getChatHistory = (req, res) => {
    const gameId = req.params.gameId;
    
    // Tworzymy nową grę, jeśli nie istnieje
    gameChat.createGame(gameId);

    // Pobieramy historię czatu dla tej gry
    const chatHistory = gameChat.getChatHistoryForGame(gameId);

    // Renderowanie widoku z wiadomościami czatu
    res.render('room', {
        gameId: gameId,
        messages: chatHistory,
        currentUser: 'Alice' // Zakładamy, że Alice jest użytkownikiem
    });
};

// Dodawanie wiadomości do czatu
exports.addMessage = (req, res) => {
    const { gameId } = req.params;
    const { username, message } = req.body;

    // Dodajemy wiadomość do czatu gry
    gameChat.addMessageToGame(gameId, username, message);

    // Przekierowanie z powrotem do pokoju gry
    res.redirect(`/game/${gameId}`);
};
