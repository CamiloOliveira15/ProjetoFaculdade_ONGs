/*
  ARQUIVO: dashboard.js
  (Lógica de template e conteúdo para as páginas do dashboard)
*/

document.addEventListener('DOMContentLoaded', () => {
    // Tenta identificar a página atual pela URL
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'dashboard-projetos.html') {
        renderProjectTable();
    }
    
    if (currentPage === 'dashboard-voluntarios.html') {
        renderVolunteerTable();
    }
    
    if (currentPage === 'dashboard-blog.html') {
        renderBlogTable();
    }
});

/**
 * REQUISITO: "Templates JavaScript"
 * Esta função gera a tabela de projetos dinamicamente.
 */
function renderProjectTable() {
    // Dados de simulação (em um app real, viriam de uma API)
    const projectsData = [
        {
            title: 'Projeto Resgate e Reabilitação',
            status: 'Ativo',
            statusClass: 'tag-green',
            volunteers: '8 / 10'
        },
        {
            title: 'Feiras de Adoção Responsável',
            status: 'Ativo',
            statusClass: 'tag-green',
            volunteers: '15 / 15'
        },
        {
            title: 'Campanha de Castração',
            status: 'Planejamento',
            statusClass: 'tag-yellow', // Usando uma tag de style.css
            volunteers: '2 / 5'
        },
        {
            title: 'Bazar Beneficente',
            status: 'Concluído',
            statusClass: 'tag-gray', // Usando uma tag de style.css
            volunteers: '20 / 20'
        }
    ];

    const tableBody = document.getElementById('projects-table-body');
    if (!tableBody) return;

    let html = ''; // String de template

    projectsData.forEach(project => {
        // Este é o "template JavaScript"
        html += `
            <tr class="hover:bg-light/50">
                <td class="px-6 py-4 font-medium text-secondary">${project.title}</td>
                <td class="px-6 py-4">
                    <span class="tag ${project.statusClass}">${project.status}</span>
                </td>
                <td class="px-6 py-4 text-secondary-light">${project.volunteers}</td>
                <td class="px-6 py-4 space-x-2">
                    <button class="font-medium text-primary hover:text-primary-dark">Editar</button>
                    <button class="font-medium text-red-500 hover:text-red-700">Excluir</button>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = html; // Manipulação do DOM
}


/**
 * REQUISITO: "Templates JavaScript"
 * Esta função gera a tabela de voluntários dinamicamente.
 */
function renderVolunteerTable() {
    const volunteersData = [
        {
            nome: 'Ana Clara Souza',
            email: 'ana.souza@email.com',
            telefone: '(11) 98888-7777',
            status: 'Ativo',
            statusClass: 'tag-green'
        },
        {
            nome: 'Bruno Mendes',
            email: 'bruno.mendes@email.com',
            telefone: '(21) 97777-6666',
            status: 'Ativo',
            statusClass: 'tag-green'
        },
        {
            nome: 'Carla Dias',
            email: 'carla.dias@email.com',
            telefone: '(31) 96666-5555',
            status: 'Inativo',
            statusClass: 'tag-gray'
        },
        {
            nome: 'Daniel Moreira',
            email: 'daniel.m@email.com',
            telefone: '(41) 95555-4444',
            status: 'Pendente',
            statusClass: 'tag-yellow'
        }
    ];

    const tableBody = document.getElementById('volunteers-table-body');
    if (!tableBody) return;

    let html = '';
    volunteersData.forEach(vol => {
        html += `
            <tr class="hover:bg-light/50">
                <td class="px-6 py-4 font-medium text-secondary">${vol.nome}</td>
                <td class="px-6 py-4 text-secondary-light">${vol.email}</td>
                <td class="px-6 py-4 text-secondary-light">${vol.telefone}</td>
                <td class="px-6 py-4">
                    <span class="tag ${vol.statusClass}">${vol.status}</span>
                </td>
                <td class="px-6 py-4 space-x-2">
                    <button class="font-medium text-primary hover:text-primary-dark">Editar</button>
                    <button class="font-medium text-red-500 hover:text-red-700">Excluir</button>
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = html;
}

/**
 * REQUISITO: "Templates JavaScript"
 * Esta função gera a tabela do blog dinamicamente.
 */
function renderBlogTable() {
    const postsData = [
        {
            title: 'O Final Feliz de Frajola',
            category: 'Histórias de Adoção',
            date: '05/11/2025'
        },
        {
            title: '5 Dicas para Manter seu Gato Saudável no Inverno',
            category: 'Dicas de Saúde',
            date: '01/11/2025'
        },
        {
            title: 'Sucesso no Bazar Beneficente!',
            category: 'Eventos',
            date: '28/10/2025'
        }
    ];

    const tableBody = document.getElementById('blog-table-body');
    if (!tableBody) return;

    let html = '';
    postsData.forEach(post => {
        html += `
            <tr class="hover:bg-light/50">
                <td class="px-6 py-4 font-medium text-secondary">${post.title}</td>
                <td class="px-6 py-4 text-secondary-light">${post.category}</td>
                <td class="px-6 py-4 text-secondary-light">${post.date}</td>
                <td class="px-6 py-4 space-x-2">
                    <button class="font-medium text-primary hover:text-primary-dark">Editar</button>
                    <button class="font-medium text-red-500 hover:text-red-700">Excluir</button>
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = html;
}