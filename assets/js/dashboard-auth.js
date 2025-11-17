/*
  ARQUIVO: dashboard-auth.js
  (Lógica para proteger as páginas do dashboard)
*/
document.addEventListener('DOMContentLoaded', () => {

    // --- VERIFICAÇÃO DE "SESSÃO" (Gatekeeper) ---
    // Este script deve rodar em TODAS as páginas do dashboard
    
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    if (userLoggedIn !== 'true') {
        // Se o usuário NÃO está logado, expulsa ele para a página de login
        alert('Acesso negado. Por favor, faça o login.');
        window.location.href = 'login.html';
        return; // Para a execução do script
    }

    // --- LÓGICA DE LOGOUT ---
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Limpa os dados de simulação de login
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('userName');
            
            // Envia de volta para a página de login
            window.location.href = 'login.html';
        });
    }

    // --- PERSONALIZAÇÃO (Ex: Nome do Usuário) ---
    const userNameElement = document.getElementById('user-name');
    const userName = localStorage.getItem('userName');
    if (userNameElement && userName) {
        userNameElement.textContent = userName;
    }

});