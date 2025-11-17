/*
  ARQUIVO: login.js
  (Lógica para a página de login.html)
*/
document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio real do formulário
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // --- SIMULAÇÃO DE AUTENTICAÇÃO ---
            if (email === 'admin@miauapoio.org' && password === 'admin123') {
                
                // 1. Armazena o "token" de sessão no localStorage
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userName', 'Admin');

                // 2. Redireciona para o dashboard (com caminho relativo)
                window.location.href = './dashboard.html';

            } else {
                // Exibe a mensagem de erro
                errorMessage.classList.remove('hidden');
            }
        });
    }
});