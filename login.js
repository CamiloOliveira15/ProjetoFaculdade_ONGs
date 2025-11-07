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
            // Em um app real, isso seria uma chamada de API (fetch)
            if (email === 'admin@miauapoio.org' && password === 'admin123') {
                
                // 1. Armazena o "token" de sessão no localStorage
                // Isso simula que o usuário está logado
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userName', 'Admin');

                // 2. Redireciona para o dashboard
                window.location.href = 'dashboard.html';

            } else {
                // Exibe a mensagem de erro
                errorMessage.classList.remove('hidden');
            }
        });
    }
});