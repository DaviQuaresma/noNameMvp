export function sendEmail() {
        const sendButton = document.getElementById('sendButton');

            sendButton.addEventListener('click', () => {
                console.log('Cliquei');
                const email = document.getElementById('emailField').value;

                try {
                    if (email !== 'user@gmail.com') {
                        throw new Error(`O usuario não existe`);
                    } else {
                        alert('Email enviado com sucesso!');
                    }
                } catch (error) {
                    alert(`Error: ${error.message}`);
                }
            });
}


ERRO NO LOG

// resetRule.js:4 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//     at sendEmail (resetRule.js:4:24)
//     at HTMLDocument.<anonymous> (main.js:9:5)