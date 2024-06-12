import homePage from './homePage/homePage.js';
import resetPassword from './homePage/resetPasswordPage.js';
import validade from './homePage/validade.js';

document.addEventListener('DOMContentLoaded', () => {
    homePage();

    const initButton = document.getElementById('initButton');
    initButton.addEventListener('click', validade);

    document.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'reset') {
            event.preventDefault();
            resetPassword();
        }
    });
});
