Plataforma Web para ONGs - MiauApoio (Estudo de Caso)

Este repositório contém o código-fonte do "MiauApoio", uma plataforma web completa desenvolvida como um estudo de caso prático para a disciplina de Desenvolvimento Front-End.

O projeto simula um ambiente profissional, implementando um site público responsivo, um dashboard administrativo dinâmico e um back-end serverless funcional para captura de dados.

🚀 Projeto no Ar

A versão de produção deste projeto está hospedada no GitHub Pages e pode ser acessada aqui:

https://camilooliveira15.github.io/ProjetoFaculdade_ONGs/

1. Visão Geral e Personas Atendidas

O objetivo deste estudo de caso é projetar e implementar uma solução web que atenda às necessidades de três personas principais, aplicando os fundamentos de desenvolvimento front-end em um contexto realista.

O Visitante (Público Geral):

Necessidade: Conhecer a ONG, seus projetos, ler notícias (blog) e entender como ajudar.

Solução: Um site institucional estático (index.html, projetos.html, blog.html, transparencia.html) totalmente responsivo, acessível (Modo Escuro) e com carregamento otimizado (lazy loading).

O Voluntário em Potencial:

Necessidade: Encontrar informações sobre como ser voluntário e enviar seus dados de forma segura para análise.

Solução: A página cadastro.html, com layout focado (estilo card), validação de formulário moderna (sem alert) e integração com um back-end AWS real.

O Administrador da ONG:

Necessidade: Acessar uma área restrita para gerenciar projetos, voluntários cadastrados e postagens do blog.

Solução: Um "Dashboard" (dashboard.html e sub-páginas) com autenticação simulada (via localStorage) e renderização de dados dinâmica (via Templates JavaScript).

2. Arquitetura da Solução

A plataforma é dividida em três componentes principais que se comunicam:

Front-End (Site Público): Construído com HTML5 Semântico, Tailwind CSS e JavaScript (ES6+) puro. Todos os assets (CSS, JS, imagens) são organizados em pastas para manutenção.

Front-End (Dashboard Admin): Uma Single Page Application (SPA) simulada, protegida por localStorage (assets/js/login.js, assets/js/dashboard-auth.js) e que renderiza conteúdo dinamicamente usando Templates JavaScript (assets/js/dashboard.js).

Back-End (Serverless): O formulário de cadastro.html utiliza a fetch API do JavaScript para enviar dados de forma assíncrona para um back-end real hospedado na AWS.

O fluxo de dados do cadastro é:
Formulário → [AWS API Gateway] → [AWS Lambda (Python)] → [AWS DynamoDB]

Esta arquitetura garante que o site público seja extremamente rápido (estático) enquanto processa dados complexos (cadastros) de forma escalável e segura.

3. Tecnologias Utilizadas

Front-End

HTML5: Estrutura semântica (<main>, <nav>, <article>, <section>, role, aria-label).

CSS3 (Tailwind CSS): Framework utility-first para rápida prototipação e consistência visual.

CSS3 (Variáveis): Arquivo assets/css/style.css para definir o Design System (cores primárias, de tema claro/escuro) e componentes customizados (.btn, .tag).

JavaScript (ES6+): Manipulação do DOM, fetch API, localStorage, Event Listeners, Máscaras de formulário e Templates Literais.

Back-End (Serverless)

AWS API Gateway: Criação do endpoint REST (POST) para receber os dados do formulário.

AWS Lambda: Função Python (lambda_function.py) que recebe os dados, valida e os insere no banco.

AWS DynamoDB: Banco de dados NoSQL para armazenar os cadastros de voluntários.

DevOps e Ferramentas

Git / GitHub: Controle de versão.

GitHub Actions: Workflow (.github/workflows/static.yml) para deploy automático (CI/CD) no GitHub Pages.

4. Estrutura de Pastas

O projeto segue uma estrutura de pastas organizada, separando os arquivos HTML dos seus assets (CSS, JS, Imagens), conforme o requisito da "Entrega 1".

ProjetoFaculdade_ONGs/
│
├── .github/
│   └── workflows/
│       └── static.yml         # (DevOps) CI/CD para GitHub Pages
│
├── assets/
│   ├── css/
│   │   └── style.css          # (CSS) Design System e estilos customizados
│   │
│   ├── js/
│   │   ├── dashboard-auth.js  # (JS) Proteção de rotas do Dashboard
│   │   ├── dashboard.js       # (JS) Templates JS para o Dashboard
│   │   ├── login.js           # (JS) Lógica de simulação de login
│   │   └── script.js          # (JS) Lógica do Site Público (Menu, Modo Escuro, API)
│   │
│   └── images/
│       ├── vecteezy_lovely-cat-sitting_23027565.jpg
│       ├── vecteezy_portrait-head-black-cat...jpg
│       └── ... (todas as outras imagens)
│
├── index.html                 # Página Home
├── projetos.html              # Página de Projetos e Doações
├── blog.html                  # Listagem de posts do Blog (atende Galeria)
├── blog-post.html             # Post individual do Blog
├── transparencia.html         # Página de Transparência
├── login.html                 # Tela de Login (Admin)
├── cadastro.html              # Formulário de Voluntário (com API)
│
├── dashboard.html             # Dashboard - Visão Geral
├── dashboard-projetos.html
├── dashboard-projetos-novo.html
├── dashboard-voluntarios.html
├── dashboard-blog.html
├── dashboard-blog-novo.html
│
├── lambda_function.py         # (Python) Back-end Serverless (AWS Lambda)
└── README.md                  # Esta documentação




5. Como Executar

1. Site Público e Dashboard (Front-End)

O front-end é totalmente estático.

Clone este repositório.

Abra qualquer arquivo .html (ex: index.html) diretamente no seu navegador.

Para testar o Dashboard:

Abra o arquivo login.html.

Use as credenciais de simulação:

E-mail: admin@miauapoio.org

Senha: admin123

Você será redirecionado para o dashboard.html (a autenticação é simulada via localStorage).

2. Cadastro de Voluntários (Back-End)

O formulário em cadastro.html aponta para um endpoint real da AWS API Gateway.

Para Testar: Basta preencher o formulário na página cadastro.html com dados válidos e clicar em "Enviar Cadastro". Você receberá uma mensagem de sucesso (JSON) se a função Lambda e o DynamoDB estiverem operacionais.