import homePage from './homePage.js';

export default function validade() {
    document.addEventListener('DOMContentLoaded', () => {
        homePage();

        const initButton = document.getElementById('initButton');

        initButton.addEventListener('click', () => {
            const login = document.getElementById('loginField').value;
            const password = document.getElementById('passwordField').value;

            if (login === 'user@gmail.com' && password === '1234') {
                alert('Login bem-sucedido');
                return true; 
            } else {
                alert('Login falhou');
                return false; 
            }
        });
    });
}
