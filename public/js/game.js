document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-chat-btn');

    if (sendButton) {
        sendButton.addEventListener('click', (e) => {
            const messageInput = document.getElementById('chat-message');
            const message = messageInput.value.trim();
            
            if (message !== '') {
                // Tymczasowe dodanie wiadomości do okna czatu
                const chatWindow = document.querySelector('.chat-messages');
                chatWindow.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
                messageInput.value = '';  // Wyczyszczenie pola tekstowego
            }
        });
    }
});


