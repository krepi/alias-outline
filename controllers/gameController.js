const gameLogic = require('../services/gameLogic');

// Przykładowa logika gry (np. dodawanie użytkowników, zarządzanie punktami)
exports.addUser = (req, res) => {
    const { username } = req.params;
    gameLogic.addUser(username);
    res.send(`${username} added to the game`);
};

// Przykładowa logika aktualizacji punktów
exports.updateScore = (req, res) => {
    const { username, points } = req.params;
    gameLogic.updateScore(username, parseInt(points));
    res.send(`${username}'s score updated by ${points} points`);
};
