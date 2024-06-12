export default function resetPassword() {
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    const main = document.createElement("section");
    main.className = 'container-xxl d-flex flex-column align-items-center justify-content-center min-vh-100';
    main.style.backgroundColor = '#D9D9D9';

    const title = document.createElement("h1");
    title.innerText = 'Reset Password';

    main.appendChild(title);
    app.appendChild(main);
}
