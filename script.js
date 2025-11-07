/*
  ARQUIVO: script.js
  (Lógica para interatividade do site)
*/

document.addEventListener('DOMContentLoaded', () => {
        
  // --- LÓGICA DO MENU MOBILE ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- LÓGICA DE MÁSCARAS DE FORMULÁRIO (Requisito Obrigatório) ---
  
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  // Máscara de CPF: 000.000.000-00
  if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Remove não-dígitos
      value = value.slice(0, 11); // Limita a 11 dígitos
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    });
  }
  
  // Máscara de Telefone: (00) 90000-0000 ou (00) 0000-0000
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.slice(0, 11); // Limita a 11 dígitos (DDD + 9 dígitos)
      
      if (value.length > 10) {
        // (00) 90000-0000
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (value.length > 6) {
        // (00) 0000-0000
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (value.length > 2) {
        // (00) 0000
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (value.length > 0) {
        // (00
        value = value.replace(/^(\d{0,2})$/, '($1');
      }
      e.target.value = value;
    });
  }
  
  // Máscara de CEP: 00000-000
  if (cepInput) {
    cepInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.slice(0, 8); // Limita a 8 dígitos
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = value;
    });
  }

});