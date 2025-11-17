# Badges

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![CI/CD](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white)

---

# Índice

0. [Projeto no Ar](#-projeto-no-ar)
1. [Visão Geral e Personas](#1-visão-geral-e-personas-atendidas)
2. [Arquitetura da Solução](#2-arquitetura-da-solução)
3. [Tecnologias Utilizadas](#3-tecnologias-utilizadas)
4. [Estrutura de Pastas](#4-estrutura-de-pastas)
5. [Próximos Passos](#5-próximos-passos)
6. [Como Executar](#6-como-executar)

---

# Plataforma Web para ONGs - MiauApoio (Estudo de Caso)

Este repositório contém o código-fonte do "MiauApoio", uma plataforma web completa desenvolvida como um estudo de caso prático para a disciplina de Desenvolvimento Front-End da gradução de Análise e Desenvolvimento de Sistemas.

O projeto simula um ambiente profissional, implementando um site público responsivo, um dashboard administrativo dinâmico e um back-end serverless funcional para captura de dados.

---

## 🚀 Projeto no Ar

A versão de produção deste projeto está hospedada no GitHub Pages e pode ser acessada aqui:

[https://camilooliveira15.github.io/ProjetoFaculdade_ONGs/](https://camilooliveira15.github.io/ProjetoFaculdade_ONGs/)


---

## 1. Visão Geral e Personas Atendidas

O objetivo deste estudo de caso é projetar e implementar uma solução web que atenda às necessidades de três personas principais, aplicando os fundamentos de desenvolvimento front-end em um contexto realista.

### **O Visitante (Público Geral):**

* **Necessidade:** Conhecer a ONG, seus projetos, ler notícias (blog) e entender como ajudar.
* **Solução:** Um site institucional estático (index.html, projetos.html, blog.html, transparencia.html) totalmente responsivo, acessível (Modo Escuro) e com carregamento otimizado (lazy loading).

### **O Voluntário em Potencial:**

* **Necessidade:** Encontrar informações sobre como ser voluntário e enviar seus dados de forma segura para análise.
* **Solução:** A página cadastro.html, com layout focado (estilo card), validação de formulário moderna (sem alert) e integração com um back-end AWS real.

### **O Administrador da ONG:**

* **Necessidade:** Acessar uma área restrita para gerenciar projetos, voluntários cadastrados e postagens do blog.
* **Solução:** Um "Dashboard" (dashboard.html e sub-páginas) com autenticação simulada (via localStorage) e renderização de dados dinâmica (via Templates JavaScript).

---

## 2. Arquitetura da Solução

A plataforma é dividida em três componentes principais que se comunicam:

### **Front-End (Site Público):**

Construído com HTML5 Semântico, Tailwind CSS e JavaScript (ES6+) puro. Todos os assets (CSS, JS) são organizados em pastas para manutenção. As interações, como o envio do formulário de cadastro.html, são conectadas a um back-end funcional.

### **Front-End (Dashboard Admin):**

Uma Single Page Application (SPA) simulada, protegida por localStorage (assets/js/login.js, assets/js/dashboard-auth.js) e que renderiza conteúdo dinamicamente usando Templates JavaScript (assets/js/dashboard.js).

### **Back-End (Serverless):**

O formulário de cadastro.html utiliza a fetch API do JavaScript para enviar dados de forma assíncrona para um back-end real hospedado na AWS.

Fluxo de dados do cadastro:

```
Formulário → [AWS API Gateway] → [AWS Lambda (Python)] → [AWS DynamoDB]
```

Essa arquitetura garante que o site público seja extremamente rápido (estático) enquanto processa dados complexos (cadastros) de forma escalável e segura.

---

## 3. Tecnologias Utilizadas

### **Front-End**

* **HTML5:** Utilizado para construir a espinha dorsal de todas as páginas, com uso rigoroso de tags como <main>, <nav>, <section> e <article> para garantir acessibilidade (SEO) e facilitar a leitura de tela. Atributos ARIA (aria-label, aria-expanded) são usados para componentes interativos.
* **CSS3 (Tailwind CSS):** Framework utility-first principal, usado para estilizar 90% do projeto. Permitiu a rápida prototipação e a criação de um design mobile-first totalmente responsivo, com breakpoints (sm:, md:, lg:) controlando o layout.
* **CSS3 (Variáveis):** O arquivo assets/css/style.css complementa o Tailwind definindo um Design System central. Variáveis CSS (:root) são usadas para cores temáticas (primária, fundo, texto) e para implementar o Modo Escuro (html.dark), além de estilizar componentes reutilizáveis como .btn e .tag.
* **JavaScript (ES6+):** Usado para adicionar toda a interatividade e lógica da aplicação:

Manipulação do DOM: Controla o menu "hambúrguer" mobile, o dropdown de navegação e o seletor de Modo Escuro.

Event Listeners: Captura cliques, inputs (para máscaras de CPF/Telefone/CEP) e o evento submit do formulário.

Validação de Formulário: Lógica customizada em assets/js/script.js que usa form.checkValidity() e a classe .form-submitted para uma validação moderna sem alert()s.

LocalStorage: Usado para persistir a preferência do Modo Escuro do usuário e para simular a sessão de login do Administrador.

Fetch API: Realiza a chamada assíncrona (async/await) para o endpoint do back-end no formulário de cadastro.

Templates Literais: Usados no assets/js/dashboard.js para renderizar dinamicamente o HTML das tabelas do dashboard (simulando uma SPA).

### **Back-End (Serverless)**

* **AWS API Gateway:** Endpoint REST.
* **AWS Lambda:** Função Python que valida e insere dados no banco.
* **AWS DynamoDB:** Banco NoSQL.

### **DevOps e Ferramentas**

* Git / GitHub: Utilizado para todo o controle de versão, gerenciamento de branches e hospedagem do código.
* GitHub Actions (CI/CD): Configurado um workflow de CI/CD (.github/workflows/static.yml) que automatiza o deploy do site estático para o GitHub Pages a cada push na branch main.

---

## 4. Estrutura de Pastas

```
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
│   └── lambda_function.py     # (Python) Código do Back-end Serverless
│
├── images/
│   ├── vecteezy_lovely-cat-sitting_23027565.jpg
│   ├── vecteezy_portrait-head-black-cat...jpg
│   └── ... (todas as outras imagens)
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
├── PROXIMOS_PASSOS.md         # Documentação de evolução do projeto
└── README.md                  # Esta documentação
```

---

## 5. Próximos Passos

A evolução futura (como Cognito, otimização e APIs avançadas) está documentada em:

**PROXIMOS_PASSOS.md**

---

## 6. Como Executar

### **1. Site Público e Dashboard (Front-End)**

* Clone o repositório.
* Abra qualquer `.html` no navegador.

**Para testar o Dashboard:**

1. Abra `login.html`
2. Use as credenciais:

   * E-mail: [admin@miauapoio.org](mailto:admin@miauapoio.org)
   * Senha: admin123
3. Você será redirecionado para `dashboard.html`.

### **2. Cadastro de Voluntários (Back-End)**

O formulário envia dados para um endpoint AWS API Gateway.

Para testar:
Preencha `cadastro.html` e envie. A resposta será JSON indicando sucesso se Lambda + DynamoDB estiverem operacionais.
