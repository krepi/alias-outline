document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-chat-btn');

    if (sendButton) {
        sendButton.addEventListener('click', (e) => {
            const messageInput = document.getElementById('chat-message');
            const message = messageInput.value.trim();
            
            if (message !== '') {
                // Temporarily add the message to the chat window
                const chatWindow = document.querySelector('.chat-messages');
                chatWindow.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
                messageInput.value = '';  // Clear the text input field
            }
        });
    }
});




