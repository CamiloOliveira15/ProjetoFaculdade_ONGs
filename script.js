// Script Global - script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado e pronto.');

    // Funções de máscara para o formulário de cadastro (cadastro.html)
    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');
    const telefoneInput = document.getElementById('telefone');

    if (cpfInput) {
        cpfInput.addEventListener('input', formatCPF);
    }
    if (cepInput) {
        cepInput.addEventListener('input', formatCEP);
    }
    if (telefoneInput) {
        telefoneInput.addEventListener('input', formatTelefone);
    }
});

/**
 * Formata o valor do input para o padrão de CPF (000.000.000-00).
 * @param {Event} e - O evento de input.
 */
function formatCPF(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.substring(0, 11); // Limita a 11 dígitos

    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    
    e.target.value = value;
}

/**
 * Formata o valor do input para o padrão de CEP (00000-000).
 * @param {Event} e - O evento de input.
 */
function formatCEP(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.substring(0, 8); // Limita a 8 dígitos

    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }
    
    e.target.value = value;
}

/**
 * Formata o valor do input para o padrão de Telefone (00) 90000-0000 ou (00) 0000-0000.
 * @param {Event} e - O evento de input.
 */
function formatTelefone(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.substring(0, 11); // Limita a 11 dígitos (com 9)

    if (value.length > 10) {
        // Celular (00) 90000-0000
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        // Fixo (00) 0000-0000
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{1,4})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/(\d{1,2})/, '($1');
    }
    
    e.target.value = value;
}
