MiauApoio - Plataforma Web para ONG de Adoção Felina

Este projeto é uma plataforma web completa e profissional desenvolvida para a MiauApoio, uma ONG fictícia de resgate e adoção de gatos. O sistema foi criado como parte de um projeto acadêmico de desenvolvimento front-end, aplicando de forma integrada conceitos de HTML5, CSS3 avançado, JavaScript e integração básica de backend com serviços AWS.

A plataforma simula um ambiente real, atendendo às necessidades de diferentes personas (Visitantes, Doadores, Voluntários e Administradores) e fornecendo uma presença digital vital para uma organização do terceiro setor.

🚀 Funcionalidades Implementadas

O projeto é dividido em duas áreas principais: o Site Público (para visitantes, doadores e potenciais voluntários) e o Dashboard Administrativo (para a gestão da ONG).

1. Site Público

Página Home (index.html): Apresenta a missão da ONG, métricas de impacto, informações de contato e uma seção "hero" com as imagens reais fornecidas.

Página de Projetos (projetos.html): Detalha os projetos sociais (Resgate, Feiras de Adoção), explica como ser voluntário e como doar (Captação de Recursos).

Página de Cadastro (cadastro.html): Formulário complexo para inscrição de novos voluntários. Esta página está integrada com um backend AWS (API Gateway + Lambda) para salvar os cadastros em um banco de dados DynamoDB.

Página de Blog (blog.html): Lista de notícias, dicas e histórias de adoção, servindo como ferramenta de comunicação.

Post de Blog (blog-post.html): Modelo de artigo individual.

Página de Transparência (transparencia.html): Área para relatórios, prestação de contas e documentos públicos.

Newsletter: Seção no rodapé de todas as páginas para engajamento de apoiadores.

2. Dashboard Administrativo (Acesso Restrito)

Página de Login (login.html): Portal de entrada para a área de gestão (simulado via localStorage).

Visão Geral (dashboard.html): Painel com métricas de engajamento (simuladas).

Gerenciar Projetos (dashboard-projetos.html): Tabela para listar projetos existentes.

Adicionar Projeto (dashboard-projetos-novo.html): Formulário para cadastrar novos projetos (simulado).

Gerenciar Voluntários (dashboard-voluntarios.html): Tabela para listar voluntários (simulada, mas alimentada pelo formulário de cadastro real).

Gerenciar Blog (dashboard-blog.html): Tabela para listar posts.

Adicionar Post (dashboard-blog-novo.html): Formulário para criar novos posts (simulado).

✅ Atendimento aos Requisitos do Projeto

Este projeto foi meticulosamente estruturado para atender a todos os requisitos do briefing acadêmico.

1. Requisitos da "Primeira Entrega" (Fundamentos de HTML5)

Estrutura Semântica (3+ páginas): O projeto excede o requisito, entregando 13 arquivos HTML (index.html, projetos.html, cadastro.html, blog.html, transparencia.html, etc.), todos utilizando tags semânticas modernas (<header>, <main>, <section>, <article>, <nav>, <aside>, <footer>).

Hierarquia de Títulos: Todas as páginas possuem uma estrutura lógica de títulos (um único <h1> por página, seguido de <h2>, <h3>, etc.), garantindo acessibilidade e SEO.

Imagens: Imagens são usadas em todas as páginas públicas, com alt-text descritivos e atribuição de licença no rodapé.

Formulário Complexo (cadastro.html):

Inputs HTML5: Utiliza type="email", type="date", type="tel", etc.

Campos Obrigatórios: Nome Completo, e-mail, CPF, telefone, Data de Nascimento, Endereço, CEP, Cidade e Estado.

Validação Nativa: Usa atributos required, pattern e title para validação no lado do cliente.

Agrupamento Lógico: Utiliza <fieldset> e <legend> para agrupar "Dados Pessoais" e "Endereço".

Máscaras de Input (JavaScript): O arquivo script.js implementa as máscaras obrigatórias para CPF, Telefone e CEP.

2. Objetivos Específicos e Requisitos Técnicos

HTML5 Semântico: Atendido, como descrito acima.

CSS3 Avançado e Layout Responsivo:

O projeto utiliza Tailwind CSS (via Play CDN) para implementar um design mobile-first profissional e totalmente responsivo.

Todos os componentes, tabelas e formulários se adaptam a tablets e desktops.

O arquivo style.css contém estilos globais (fonte, cor de fundo, :focus-visible).

Nota Importante sobre o @apply: As classes customizadas do Tailwind (como .btn e .btn-primary) que usam @apply foram movidas do style.css para dentro de uma tag <style type="text/tailwindcss"> em cada arquivo .html. Isso é um requisito técnico do Tailwind Play CDN, que não processa a regra @apply em arquivos .css externos.

JavaScript Interativo e Dinâmico:

script.js: Controla o menu mobile (hamburguer), aplica as máscaras de formulário e envia os dados do formulário de cadastro para a API Gateway da AWS via fetch.

login.js: Simula a autenticação de login (usuário e senha) usando localStorage.

dashboard-auth.js: Atua como um "gatekeeper", protegendo todas as páginas do dashboard e implementando a função de "Sair" (logout).

Acessibilidade (WCAG):

Uso de HTML semântico e hierarquia de títulos.

alt-text em imagens.

Foco visível (:focus-visible em style.css).

Uso de aria-label e role="navigation" para leitores de tela (ex: redes sociais).

SEO e Descoberta:

Cada página possui <title> e <meta name="description"> únicos e otimizados.

A página login.html e os arquivos do dashboard usam <meta name="robots" content="noindex"> para evitar indexação.

Simulação de Ambiente Profissional:

O projeto lida com múltiplas personas e um fluxo de usuário completo.

O código é separado, organizado e comentado.

Integração com AWS: O projeto demonstra um fluxo real de front-end para back-end, conectando o site estático (S3/CloudFront) a um serviço serverless (Lambda/DynamoDB) através de uma API Gateway.

🛠️ Tecnologias Utilizadas

HTML5: Estruturação semântica.

CSS3 (com Tailwind CSS): Estilização avançada e responsividade (via Play CDN).

JavaScript (ES6+): Interatividade, manipulação de DOM, chamadas de API (fetch) e simulação de autenticação (localStorage).

AWS (Backend):

AWS S3: Hospedagem do site estático.

AWS CloudFront: Distribuição de conteúdo (CDN) e domínio personalizado com HTTPS.

AWS API Gateway: Criação do endpoint POST para o formulário.

AWS Lambda (Python): Função serverless para processar o formulário e lidar com CORS.

AWS DynamoDB: Banco de dados NoSQL para armazenar os cadastros de voluntários.

📂 Estrutura de Pastas (Recomendada)

Para a entrega no GitHub, os arquivos devem ser organizados da seguinte forma:

/ (raiz do projeto)
├── README.md             (Este arquivo)
├── index.html
├── projetos.html
├── cadastro.html
├── blog.html
├── blog-post.html
├── transparencia.html
├── login.html
├── dashboard.html
├── dashboard-projetos.html
├── dashboard-projetos-novo.html
├── dashboard-voluntarios.html
├── dashboard-blog.html
├── dashboard-blog-novo.html
├── style.css
├── script.js
├── login.js
├── dashboard-auth.js
│
└── /backend/
│   └── lambda_function.py
│
└── /images/              (Pasta para as imagens)
    ├── vecteezy_lovely-cat-sitting_23027565.jpg
    ├── vecteezy_portrait-head-black-cat-on-black-background_11375006.jpg
    └── vecteezy_silver-tabby-cat-sitting-on-green-background_2098203.jpg



Nota: Se você colocar as imagens na pasta /images/, lembre-se de atualizar o caminho src nos arquivos .html (ex: src="images/vecteezy_...jpg").

⚙️ Como Executar

Clone este repositório.

Abra o arquivo index.html em qualquer navegador web.

A navegação entre as páginas é feita por links de hipertexto padrão.

Acesso ao Dashboard

Para acessar a área administrativa e testar as funcionalidades de login:

Navegue até login.html.

Use as seguintes credenciais de simulação:

E-mail: admin@miauapoio.org

Senha: admin123

📄 Licença e Créditos

Este projeto é um trabalho acadêmico e não deve ser distribuído ou utilizado comercialmente.

Fotos de Gatos: As imagens utilizadas nas páginas públicas são cortesia da Vecteezy.