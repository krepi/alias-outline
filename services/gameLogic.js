// Example of game logic - managing users, scores, etc.

let users = [];

// Adding a user
function addUser(username) {
    const user = { username, score: 0 };
    users.push(user);
    return user;
}

// Updating the score
function updateScore(username, points) {
    const user = users.find(u => u.username === username);
    if (user) {
        user.score += points;
    }
}

// Retrieving users
function getUsers() {
    return users;
}

module.exports = {
    addUser,
    updateScore,
    getUsers
};
