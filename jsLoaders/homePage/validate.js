export function validate() {
    const button = document.getElementById('initButton');
    
    button.addEventListener('click', () => {
        console.log('Cliquei');

        const login = document.getElementById('loginField').value;
        const password = document.getElementById('passwordField').value;

        try {
            if (login !== 'user@gmail.com' && password !== '1234') {
                throw new Error(`O usuario não existe`);
            } else if (login !== 'user@gmail.com') {
                throw new Error(`O usuario ${login} está incorreto.`);
            } else if (password !== '1234') {
                throw new Error(`A senha ${password} está incorreta.`);
            } else {
                alert('Login realizado com sucesso!');
                window.location.href = 'nextPage.html'; // Substitua 'nextPage.html' pelo caminho da sua próxima página
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });
}
