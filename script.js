/*
  ARQUIVO: script.js
  (Lógica para todas as páginas públicas)
*/

// Espera o DOM estar totalmente carregado para executar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: Menu Mobile (Hamburguer) (Entrega 2) ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' para mostrar/esconder o menu
            mobileMenu.classList.toggle('hidden');
            // Altera o atributo de acessibilidade
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- LÓGICA 2: Dropdown da Navegação (Entrega 2) ---
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        // Mostrar/Ocultar com clique
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a navegação do link pai
            const isHidden = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '';
            dropdownMenu.style.display = isHidden ? 'block' : 'none';
            
            // Acessibilidade
            dropdownToggle.setAttribute('aria-expanded', isHidden);
        });
        
        // Ocultar se clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
                dropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- LÓGICA 3: Modo Escuro (Dark Mode) (Entrega 4) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement; // A tag <html>

    // Função para aplicar o modo (dark/light)
    const applyDarkMode = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Verifica a preferência do usuário no localStorage ou no sistema
    const preferredTheme = localStorage.getItem('theme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica o tema ao carregar a página
    applyDarkMode(preferredTheme === 'dark');

    // Adiciona o evento de clique no botão
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isCurrentlyDark = htmlElement.classList.contains('dark');
            applyDarkMode(!isCurrentlyDark);
        });
    }

    // --- LÓGICA 4: Máscaras de Formulário (Entrega 1) ---
    const cpfField = document.getElementById('cpf');
    const telefoneField = document.getElementById('telefone');
    const cepField = document.getElementById('cep');

    if (cpfField) {
        cpfField.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove não-números
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value.slice(0, 14); // Limita a 14 caracteres
        });
    }

    if (telefoneField) {
        telefoneField.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value.slice(0, 15); // Limita a 15 caracteres
        });
    }

    if (cepField) {
        cepField.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value.slice(0, 9); // Limita a 9 caracteres
        });
    }
    
    // --- LÓGICA 5: Envio do Formulário de Cadastro (Entrega 3) ---
    // (Sistema de verificação de consistência de dados)
    const cadastroForm = document.getElementById('cadastro-form');
    
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', handleCadastroFormSubmit);
    }

});


/**
 * Função para lidar com o envio do formulário de cadastro.
 * Captura os dados, envia para a API Gateway e exibe o status.
 */
async function handleCadastroFormSubmit(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const submitButton = document.getElementById('submit-button');
    const statusMessage = document.getElementById('status-message');

    // Desativa o botão e mostra "Enviando..."
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    // Limpa mensagens antigas e define cor base
    statusMessage.innerHTML = ''; 
    statusMessage.className = 'mt-8 text-center';

    // 1. Coleta os dados do formulário
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // URL da sua API Gateway
    const apiUrl = 'https://yo8fe552ca.execute-api.us-west-2.amazonaws.com/production/cadastro';

    try {
        // 2. Envia os dados para a API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        // 3. Lida com a resposta da API (Componente de Feedback - Entrega 2)
        if (response.ok) {
            // Sucesso (Status 200)
            statusMessage.innerHTML = `
                <div class="rounded-md bg-green-100 p-4 text-green-700 dark:bg-green-900 dark:text-green-200">
                    <strong>Sucesso!</strong> ${result.message}
                </div>
            `;
            form.reset(); // Limpa o formulário
        } else {
            // Erro vindo da Lambda (Status 400 ou 500)
            statusMessage.innerHTML = `
                <div class="rounded-md bg-red-100 p-4 text-red-700 dark:bg-red-900 dark:text-red-200">
                    <strong>Erro no cadastro:</strong> ${result.message}
                </div>
            `;
        }
    } catch (error) {
        // Erro de rede (API fora do ar, sem internet, etc.)
        console.error('Erro de rede ao enviar formulário:', error);
        statusMessage.innerHTML = `
            <div class="rounded-md bg-red-100 p-4 text-red-700 dark:bg-red-900 dark:text-red-200">
                <strong>Erro de conexão.</strong> Não foi possível enviar seu cadastro. 
                Por favor, tente novamente mais tarde.
            </div>
        `;
    } finally {
        // Reativa o botão
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Cadastro';
    }
}