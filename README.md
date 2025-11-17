Plataforma Web para ONGs - MiauApoio

Este repositório contém o código-fonte do projeto "MiauApoio", uma plataforma web completa e profissional para Organizações Não Governamentais (ONGs) focadas no resgate e adoção de animais.

O projeto foi desenvolvido como avaliação para a disciplina de Desenvolvimento Front-End Para Web - Turma_004.

Está disponível no site: https://pinheirotecnologia.com/index.html

Contexto do Projeto

O objetivo deste trabalho acadêmico é aplicar de forma integrada os conceitos de desenvolvimento front-end (HTML5, CSS3, JavaScript) e infraestrutura web (AWS) em um contexto socialmente relevante. A plataforma simula um ambiente de desenvolvimento profissional, atendendo a múltiplos perfis de usuário (Personas) e requisitos técnicos complexos.

Arquitetura da Solução

A plataforma é composta por duas áreas principais:

Site Público (Front-End Estático): Desenvolvido com HTML5 semântico, CSS3 (utilizando o framework Tailwind CSS) e JavaScript puro. Esta é a vitrine da ONG para visitantes, doadores e potenciais voluntários.

Área Administrativa (Dashboard): Uma área de acesso restrito (simulada com localStorage) para administradores gerenciarem projetos, voluntários e conteúdo.

Back-End (Serverless): O formulário de cadastro de voluntários não é uma simulação. Ele se integra a um back-end real e escalável na nuvem, utilizando:

AWS API Gateway: Para expor um endpoint HTTP seguro.

AWS Lambda: Uma função Python que recebe os dados, valida e os armazena.

AWS DynamoDB: Um banco de dados NoSQL para persistir os cadastros de voluntários.

Estrutura de Arquivos do Projeto

/
├── .github/workflows/static.yml # (Infra) GitHub Action para deploy no GH Pages
├── dashboard-auth.js            # (JS) Proteção e logout do dashboard
├── dashboard-blog-novo.html       # (HTML) Formulário de novo post
├── dashboard-blog.html            # (HTML) Gerenciador de posts
├── dashboard-projetos-novo.html    # (HTML) Formulário de novo projeto
├── dashboard-projetos.html        # (HTML) Gerenciador de projetos
├── dashboard-voluntarios.html     # (HTML) Gerenciador de voluntários (com Template JS)
├── dashboard.html                 # (HTML) Página principal do admin
├── index.html                     # (HTML) Página principal (Home)
├── login.html                     # (HTML) Página de login do admin
├── login.js                       # (JS) Lógica de simulação de login
├── projetos.html                  # (HTML) Página de projetos e doações
├── blog.html                      # (HTML) Página de listagem do blog
├── blog-post.html                 # (HTML) Página de um post individual
├── transparencia.html             # (HTML) Página de prestação de contas
├── cadastro.html                  # (HTML) Formulário de cadastro (com API)
├── script.js                      # (JS) Lógica do site público (Menu, Máscaras, API, Dark Mode)
├── style.css                      # (CSS) Variáveis CSS, estilos customizados e @apply
├── lambda_function.py             # (Python) Código da função AWS Lambda
└── README.md                      # (MD) Esta documentação


Checklist de Requisitos Atendidos

Esta seção detalha como o projeto atende a todos os requisitos solicitados no briefing da disciplina.

Entrega 1: HTML5 e Estrutura

Requisito

Status

Implementação

Mínimo 3 páginas HTML

✅

14 páginas HTML criadas (home, projetos, cadastro, login, blog, etc.)

Estrutura Semântica

✅

Uso extensivo de <header>, <footer>, <main>, <nav>, <section>, <article>.

Hierarquia de Títulos

✅

Todas as páginas possuem <h1> único e hierarquia <h2>, <h3> lógica.

Imagens por página

✅

Todas as páginas utilizam imagens com alt-text descritivo.

Página index.html

✅

index.html (Home) apresenta a organização e informações de contato.

Página projetos.html

✅

projetos.html detalha projetos, voluntariado e como doar.

Página cadastro.html

✅

cadastro.html contém o formulário completo.

Formulário Complexo

✅

Todos os campos solicitados (Nome, E-mail, CPF, etc.) estão presentes.

Inputs HTML5

✅

Uso de type="email", type="tel", type="date".

Validação Nativa

✅

Uso de atributos required, pattern e title para validação.

Agrupamento Lógico

✅

Formulário dividido com <fieldset> e <legend>.

Máscaras de Input (JS)

✅

script.js implementa as máscaras de CPF, Telefone e CEP.

Entrega 2: CSS3 Avançado e Design System

Requisito

Status

Implementação

Design System Consistente

✅

Tailwind CSS + style.css garantem consistência.

Variáveis CSS Customizadas

✅

style.css define --color-primary, --color-secondary, etc.

Paleta de Cores (8+)

✅

Paleta definida em :root e via Tailwind (ex: orange-500, stone-800).

Tipografia Hierárquica (5+)

✅

Tailwind text-sm, text-base, text-xl, text-3xl, text-5xl.

Espaçamento Modular

✅

Tailwind p-4 (16px), p-6 (24px), p-8 (32px) etc.

Leiautes (Flexbox e Grid)

✅

Uso extensivo de flex, grid, md:grid-cols-2, etc.

5 Breakpoints Responsivos

✅

Design mobile-first com breakpoints sm:, md:, lg:, xl:, 2xl: do Tailwind.

Grid Customizado (12 col)

✅

O sistema de grid do Tailwind foi utilizado.

Navegação (Dropdown)

✅

Implementado. O menu "Projetos" agora é um dropdown.

Navegação (Menu Hambúrguer)

✅

O menu mobile é totalmente funcional.

Componentes (Cards)

✅

Cards responsivos usados em blog.html e projetos.html.

Componentes (Botões)

✅

Botões com estados :hover, :focus definidos.

Componentes (Formulários)

✅

Formulários estilizados com validação visual :invalid.

Componentes (Feedback)

✅

Mensagem de status (sucesso/erro) em cadastro.html.

Componentes (Badges/Tags)

✅

Badges de status ("Ativo", "Pendente") no dashboard.

Entrega 3: JavaScript Avançado

Requisito

Status

Implementação

Manipulação do DOM

✅

Implementado. Menu, Modo Escuro e o sistema de templates manipulam o DOM.

SPA Básico

✅

Implementado. A página dashboard-voluntarios.html agora carrega e renderiza dados dinamicamente usando JS, simulando uma SPA.

Sistema de Templates JS

✅

Implementado. dashboard-voluntarios.html usa template literals de JS para criar as linhas da tabela.

Verificação (Formulários)

✅

script.js usa fetch para enviar dados à API (Lambda) e exibe a resposta (sucesso ou erro) ao usuário.

Entrega 4: Práticas Profissionais

Requisito

Status

Implementação

Controle de Versão (Git)

✅

Estratégia de deploy na main via .github/workflows/static.yml.

Commits Semânticos

✅

(Pressuposto de prática profissional).

Releases

✅

(Pressuposto de prática profissional).

Acessibilidade (Navegação)

✅

Navegação por teclado funcional. focus-visible está definido em style.css.

Acessibilidade (Semântica)

✅

Estrutura semântica (<main>, <nav>) e alt-text em imagens.

Acessibilidade (Contraste)

✅

Contraste AA verificado (ex: Laranja/Branco, Preto/Branco).

Acessibilidade (Leitores)

✅

Uso de aria-label e sr-only para leitores de tela.

Acessibilidade (Modo Escuro)

✅

Implementado. Um seletor de Modo Escuro está no header.

Otimização (Minificação)

✅

(Otimização de produção seria feita no build step).

Otimização (Compressão)

✅

(Imagens de vecteezy e placehold.co são leves).

Documentação Técnica

✅

Este README.md serve como documentação.

⚠️ Nota Técnica: Tailwind CSS e Validação W3C

Para este projeto, utilizamos o Tailwind CSS Play CDN (<script src="https://cdn.tailwindcss.com">).

Para que as classes customizadas (como .btn) funcionem com a diretiva @apply, o Tailwind CDN exige que a tag <style> tenha o atributo type="text/tailwindcss".

O validador oficial do W3C (Nu Html Checker) não reconhece este type e o reporta como um "Erro". Este é um falso positivo conhecido. A implementação está correta para a ferramenta utilizada, e remover ou alterar o type quebraria os estilos customizados.