export default function resetPassword() {
    const app = document.getElementById('app');
    app.innerHTML = '';
    
    const main = document.createElement("section");
    main.className = 'container-xxl d-flex flex-column align-items-center justify-content-center min-vh-100';
    main.style.backgroundColor = '#D9D9D9';

    const button = document.createElement("button");
    button.innerText = 'ENVIAR';
    button.className = 'btn btn-success';
    button.id = 'sendButton'

    const divTitle = document.createElement("div");
    divTitle.className = 'text-center';

    const h1Title = document.createElement("h1");
    h1Title.innerText = 'RECUPERAR SENHA';

    const p = document.createElement('p')
    p.innerText = 'Coloque seu endereço de email para enviarmos o email de reset na sua caixa.'

    const h1Logo = document.createElement("img");
    // h1Logo.src = "/jsLoaders/homePage/img/empresaModelo.png";

    const divFields = document.createElement("div");
    divFields.className = 'text-center';

    const formGroup = document.createElement("div");
    formGroup.className = 'row justify-content-center';


    const loginInputDiv = document.createElement("div");
    loginInputDiv.className = 'col-lg-15 m-5';

    const loginInput = document.createElement("input");
    loginInput.placeholder = 'EMAIL :';
    loginInput.className = 'form-control';
    loginInput.id = 'emailField'


    divTitle.appendChild(h1Title);
    divTitle.appendChild(h1Logo);
    divTitle.appendChild(p);

    loginInputDiv.appendChild(loginInput);

    formGroup.appendChild(loginInputDiv);

    divFields.appendChild(formGroup);
    divFields.appendChild(button);
    
    main.appendChild(divTitle);
    main.appendChild(divFields);
    app.appendChild(main);
}
