const gameLogic = require('../services/gameLogic');

// Example game logic (e.g., adding users, managing scores)
exports.addUser = (req, res) => {
    const { username } = req.params;
    gameLogic.addUser(username);
    res.send(`${username} added to the game`);
};

// Example logic for updating scores
exports.updateScore = (req, res) => {
    const { username, points } = req.params;
    gameLogic.updateScore(username, parseInt(points));
    res.send(`${username}'s score updated by ${points} points`);
};

