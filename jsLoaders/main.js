import homePage from './homePage/homePage.js';
import resetPassword from './homePage/resetPasswordPage.js';
import { validate } from './homePage/validate.js';
import { sendEmail } from './homePage/resetRule.js';

document.addEventListener('DOMContentLoaded', () => {
    homePage();
    validate();
    sendEmail();

    document.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'reset') {
            event.preventDefault();
            resetPassword();
        }
    });
});
