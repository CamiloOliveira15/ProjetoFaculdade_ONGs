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
├── dashboard-auth.js         # (JS) Proteção e logout do dashboard
├── dashboard-blog-novo.html    # (HTML) Formulário de novo post
├── dashboard-blog.html         # (HTML) Gerenciador de posts
├── dashboard-projetos-novo.html # (HTML) Formulário de novo projeto
├── dashboard-projetos.html     # (HTML) Gerenciador de projetos
├── dashboard-voluntarios.html  # (HTML) Gerenciador de voluntários
├── dashboard.html              # (HTML) Página principal do admin
├── index.html                  # (HTML) Página principal (Home)
├── login.html                  # (HTML) Página de login do admin
├── login.js                    # (JS) Lógica de simulação de login
├── projetos.html               # (HTML) Página de projetos e doações
├── blog.html                   # (HTML) Página de listagem do blog
├── blog-post.html              # (HTML) Página de um post individual
├── transparencia.html          # (HTML) Página de prestação de contas
├── cadastro.html               # (HTML) Formulário de cadastro (com API)
├── script.js                   # (JS) Lógica do site público (Menu, Máscaras, API)
├── style.css                   # (CSS) Estilos customizados e @apply
├── lambda_function.py          # (Python) Código da função AWS Lambda
└── README.md                   # (MD) Esta documentação


Checklist de Requisitos Atendidos

Esta seção detalha como o projeto atende a todos os requisitos solicitados no briefing da disciplina.

1. Requisitos da Primeira Entrega (HTML5)

Requisito

Status

Implementação

Mínimo 3 páginas HTML

✅

14 páginas HTML criadas (home, projetos, cadastro, login, blog, etc.)

Estrutura Semântica

✅

Uso extensivo de tags como <header>, <footer>, <main>, <nav>, <section>, <article>.

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

2. Personas e Casos de Uso

Persona

Caso de Uso

Status

Implementação

Administrador

Gerenciar projetos

✅

dashboard-projetos.html, dashboard-projetos-novo.html



Gerenciar voluntários

✅

dashboard-voluntarios.html (dados viriam da AWS)



Acompanhar métricas

✅

dashboard.html (simulação de métricas)

Voluntário

Descobrir oportunidades

✅

projetos.html



Candidatar-se

✅

cadastro.html (integrado com AWS Lambda)



Acompanhar histórico

❌

Requeriria back-end de login para voluntários.

Doador

Conhecer projetos

✅

projetos.html



Realizar doações

✅

projetos.html (informações de PIX e conta)



Relatórios

✅

transparencia.html

Visitante

Conhecer a organização

✅

index.html



Acessar contato

✅

index.html (seção de contato no rodapé)



Compartilhar

✅

Links de redes sociais no rodapé.

3. Funcionalidades Principais

Funcionalidade

Status

Implementação

Área Institucional

✅

index.html (Missão), transparencia.html (Relatórios)

Gestão de Projetos

✅

Simulada no Dashboard com dashboard-projetos.html.

Engajamento (Voluntários)

✅

Portal em projetos.html e cadastro funcional em cadastro.html.

Captação de Recursos

✅

projetos.html com informações de doação.

Comunicação/Transparência

✅

blog.html, blog-post.html, transparencia.html e Newsletter no rodapé.

4. Requisitos Técnicos Gerais

Requisito

Status

Implementação

Responsividade

✅

Design Mobile-First aplicado com Tailwind CSS. O layout se adapta a celulares, tablets e desktops.

Desempenho

✅

Imagens otimizadas (placeholders/Vecteezy), uso de CDN para Tailwind.

Acessibilidade (WCAG)

✅

Contraste de cores verificado, uso de alt-text, aria-label, role e hierarquia de títulos correta.

Segurança

✅

Validação de formulários (HTML5 nativo + API). HTTPS é configurado na AWS (CloudFront).

SEO e Descoberta

✅

Meta tags (<title>, <meta name="description">) otimizadas em todas as páginas.

CSS3 Avançado

✅

Uso do framework Tailwind CSS com classes utilitárias e diretivas @apply.

JavaScript Dinâmico

✅

Menu mobile, máscaras de formulário e chamada de API (AWS) com fetch.

Infraestrutura Web

✅

Uso de AWS API Gateway, Lambda e DynamoDB para o cadastro.

⚠️ Nota Técnica Importante: Tailwind CSS e @apply

Para este projeto, utilizamos o Tailwind CSS Play CDN (<script src="https://cdn.tailwindcss.com">). Esta abordagem é excelente para prototipagem e projetos que não possuem um build step (como npm run build).

No entanto, o Play CDN possui uma limitação conhecida: ele não processa a diretiva @apply dentro de arquivos CSS externos (como o style.css).

Problema: Seu editor de código (VS Code, etc.) pode exibir um "aviso" ou "erro" na diretiva @apply, pois ele não a reconhece como CSS padrão.
Solução: Este aviso do editor deve ser ignorado. O código está correto.

Atenção: Para que as classes customizadas (como .btn) funcionem, movemos as regras de @apply do style.css para dentro de uma tag <style type="text/tailwindcss"> no <head> de cada arquivo HTML. Esta é a abordagem oficial recomendada pelo Tailwind para usar @apply com o Play CDN.

A tentativa de mover o @apply de volta para o style.css fará com que os estilos dos botões e do blog deixem de funcionar no navegador, mesmo que o "erro" no editor desapareça.

Como Executar o Projeto

1. Modo Local (Simulado)

Clone este repositório.

Abra qualquer arquivo .html (ex: index.html) diretamente no seu navegador.

Funcionalidades:

O site público é 100% navegável.

O Dashboard (dashboard.html, etc.) é 100% funcional (simulado com localStorage).

O formulário de cadastro.html irá funcionar, pois está apontando para a API pública na AWS.


📄 Licença e Créditos

Este projeto é um trabalho acadêmico e não deve ser distribuído ou utilizado comercialmente.

Fotos de Gatos: As imagens utilizadas nas páginas públicas são cortesia da Vecteezy.
