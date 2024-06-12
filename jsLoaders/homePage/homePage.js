export default function homePage() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    
    const main = document.createElement("section");
    main.className = 'container-xxl d-flex flex-column align-items-center justify-content-center min-vh-100';
    main.style.backgroundColor = '#D9D9D9';

    const button = document.createElement("button");
    button.innerText = 'ENTRAR';
    button.className = 'btn btn-primary mt-3';
    button.id = 'initButton'

    const divTitle = document.createElement("div");
    divTitle.className = 'text-center mb-4';

    const h1Title = document.createElement("h1");
    h1Title.innerText = 'NOME DA EMPRESA';

    const h1Logo = document.createElement("img");
    // h1Logo.src = "/jsLoaders/homePage/img/empresaModelo.png";

    const divFields = document.createElement("div");
    divFields.className = 'text-center';

    const formGroup = document.createElement("div");
    formGroup.className = 'row justify-content-center';

    const loginLabel = document.createElement("label");
    loginLabel.innerText = '';
    loginLabel.className = 'form-label col-12 text-center';

    const loginInputDiv = document.createElement("div");
    loginInputDiv.className = 'col-md-6 col-lg-7';

    const loginInput = document.createElement("input");
    loginInput.placeholder = 'LOGIN :';
    loginInput.className = 'form-control mb-3';
    loginInput.id = 'loginField'

    const passwordLabel = document.createElement("label");
    passwordLabel.innerText = '';
    passwordLabel.className = 'form-label col-12 text-center';

    const passwordInputDiv = document.createElement("div");
    passwordInputDiv.className = 'col-md-6 col-lg-7';

    const passwordInput = document.createElement("input");
    passwordInput.placeholder = 'SENHA :';
    passwordInput.className = 'form-control mb-3';
    passwordInput.id = 'passwordField'

    const resetPassword = document.createElement("a");
    resetPassword.innerText = 'RECUPERAR SENHA';
    resetPassword.className = 'd-block mb-3';
    resetPassword.id = 'reset'
    resetPassword.style.marginRight = '8rem'
    resetPassword.href = '#'
    resetPassword.style.textDecoration = 'none'
    resetPassword.style.color = 'grey'

    divTitle.appendChild(h1Title);
    divTitle.appendChild(h1Logo);

    loginInputDiv.appendChild(loginInput);
    passwordInputDiv.appendChild(passwordInput);

    formGroup.appendChild(loginLabel);
    formGroup.appendChild(loginInputDiv);
    formGroup.appendChild(passwordLabel);
    formGroup.appendChild(passwordInputDiv);

    divFields.appendChild(formGroup);
    divFields.appendChild(resetPassword);
    divFields.appendChild(button);
    
    main.appendChild(divTitle);
    main.appendChild(divFields);
    app.appendChild(main);
}
