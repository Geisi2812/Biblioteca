function leerLibro(url) {
    window.open(url, '_blank');
}

window.addEventListener('DOMContentLoaded', (event) => {
    const books = document.querySelectorAll('.book');
    books.forEach((book, index) => {
        setTimeout(() => {
            book.style.transform = 'scale(1)';
            book.style.opacity = '1';
        }, index * 100);
    });
});

let hasResponded = false;
let isOpen = true; 
window.addEventListener('DOMContentLoaded', (event) => {
    if (isOpen) {
        startChat();
    }
});

function startChat() {
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML = ""; 


    const botMessage = document.createElement('div');
    botMessage.textContent = "Hola, ¿qué tal? ¿Qué libro te gustaría añadir?";
    botMessage.style.color = 'green';
    messages.appendChild(botMessage);

    hasResponded = false;
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');

    if (input.value.trim() === "") return;


    const userMessage = document.createElement('div');
    userMessage.textContent = input.value;
    userMessage.style.color = 'black';
    messages.appendChild(userMessage);

    input.value = "";

    if (!hasResponded) {
        setTimeout(() => {
          
            const responseMessage = document.createElement('div');
            responseMessage.textContent = "Gracias por tu mensaje, seguiremos trabajando para que nuestros usuarios se sientan a gusto con nuestra biblioteca.";
            responseMessage.style.color = 'green';
            messages.appendChild(responseMessage);
            hasResponded = true;
        }, 500);
    }


    messages.scrollTop = messages.scrollHeight;
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');

    if (isOpen) {
        chatbot.classList.add('minimized');
        isOpen = false;
    } else {
        chatbot.classList.remove('minimized');
        isOpen = true;
        startChat();
    }
}


document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
