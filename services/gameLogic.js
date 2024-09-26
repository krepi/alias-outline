// Przykład logiki gry - zarządzanie użytkownikami, punktami itp.

let users = [];

// Dodawanie użytkownika
function addUser(username) {
    const user = { username, score: 0 };
    users.push(user);
    return user;
}

// Aktualizacja punktów
function updateScore(username, points) {
    const user = users.find(u => u.username === username);
    if (user) {
        user.score += points;
    }
}

// Pobieranie użytkowników
function getUsers() {
    return users;
}

module.exports = {
    addUser,
    updateScore,
    getUsers
};
