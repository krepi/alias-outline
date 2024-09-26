const fs = require('fs');
const path = require('path');

// Ścieżka do pliku JSON z historią czatów
const chatHistoryFilePath = path.join(__dirname, '../chatHistory.json');

// Funkcja do odczytu pliku JSON
function loadChatHistory() {
    const data = fs.readFileSync(chatHistoryFilePath, 'utf8');
    return JSON.parse(data);
}

// Funkcja do zapisywania zmian w pliku JSON
function saveChatHistory(chatData) {
    fs.writeFileSync(chatHistoryFilePath, JSON.stringify(chatData, null, 2));
}

// Pobieranie historii czatu dla konkretnej gry
function getChatHistoryForGame(gameId) {
    const chatData = loadChatHistory();
    return chatData.games[gameId] ? chatData.games[gameId].chatHistory : [];
}

// Dodawanie nowej gry, jeśli nie istnieje
function createGame(gameId) {
    const chatData = loadChatHistory();
    
    if (!chatData.games[gameId]) {
        chatData.games[gameId] = { chatHistory: [] };
        saveChatHistory(chatData);
    }
}

// Dodawanie wiadomości do czatu gry
function addMessageToGame(gameId, username, message) {
    const chatData = loadChatHistory();
    
    if (chatData.games[gameId]) {
        chatData.games[gameId].chatHistory.push({ username, message });
        saveChatHistory(chatData);
    }
}

module.exports = {
    createGame,
    addMessageToGame,
    getChatHistoryForGame
};
