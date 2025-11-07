/*
  ARQUIVO: script.js
  (Lógica para todas as páginas públicas: menu mobile, máscaras, API)
*/
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: Menu Mobile (Hamburguer) ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' para mostrar/esconder o menu
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- LÓGICA 2: Máscaras de Formulário (Página de Cadastro) ---
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
    
    // --- LÓGICA 3: Envio do Formulário de Cadastro para API AWS ---
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
    statusMessage.innerHTML = ''; // Limpa mensagens antigas

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

        // 3. Lida com a resposta da API
        if (response.ok) {
            // Sucesso (Status 200)
            statusMessage.innerHTML = `
                <div class="rounded-md bg-green-100 p-4 text-green-700">
                    <strong>Sucesso!</strong> ${result.message}
                </div>
            `;
            form.reset(); // Limpa o formulário
        } else {
            // Erro vindo da Lambda (Status 400 ou 500)
            statusMessage.innerHTML = `
                <div class="rounded-md bg-red-100 p-4 text-red-700">
                    <strong>Erro no cadastro:</strong> ${result.message}
                </div>
            `;
        }
    } catch (error) {
        // Erro de rede (API fora do ar, sem internet, etc.)
        console.error('Erro de rede ao enviar formulário:', error);
        statusMessage.innerHTML = `
            <div class="rounded-md bg-red-100 p-4 text-red-700">
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