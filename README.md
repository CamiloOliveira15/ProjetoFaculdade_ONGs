Plataforma de Gestão para ONGs - Conecta Vidas (Projeto Acadêmico)

Este repositório contém o código-fonte de um projeto académico focado no desenvolvimento front-end de uma plataforma web completa para Organizações Não Governamentais (ONGs), utilizando HTML5, Tailwind CSS e JavaScript moderno (ESM).

O projeto simula a plataforma "Conecta Vidas", um sistema profissional desenhado para ajudar ONGs a gerir projetos, captar recursos, e angariar voluntários, oferecendo uma presença digital robusta e funcional.

🚀 Visão Geral

A plataforma é dividida em duas áreas principais:

Site Público: Um conjunto de páginas estáticas e informativas destinadas a visitantes, potenciais doadores e voluntários. O seu objetivo é apresentar a ONG, os seus projetos e formas de apoio.

Área Restrita (Dashboards): Painéis de gestão para os diferentes perfis de utilizadores (Administrador, Voluntário, Doador), com funcionalidades dinâmicas para gerir as operações da ONG.

🎯 Mapeamento de Requisitos vs. Estado Atual

Esta secção compara os requisitos completos do briefing do projeto com o estado atual do código neste repositório.

Estado Atual: O projeto é um protótipo funcional que estabelece a fundação visual (Front-End) e a lógica de gestão principal (demonstrada com dados estáticos no dashboard admin).

Funcionalidades Principais (Escopo Total)

Área institucional: (🟡 Em Progresso/Protótipo)

(✅) Página inicial com missão, visão e valores (index.html).
(✅) Equipa e estrutura organizacional (equipe.html).
(✅) Relatórios de transparência (página transparencia.html).
(❌) Histórico e conquistas (página dedicada pendente).

Gestão de projetos: (🟡 Em Progresso/Protótipo)

(✅) Cadastro detalhado de projetos sociais (formulário no admin_dashboard.html, dados mock).
(❌) Galeria de fotos e vídeos (pendente).
(❌) Indicadores de impacto e resultados (pendente).
(❌) Sistema de categorização (pendente).

Engajamento de voluntários: (🟡 Em Progresso/Protótipo)

(✅) Portal de oportunidades de voluntariado (protótipo estático no voluntario_dashboard.html).
(✅) Sistema de inscrição (cadastro.html) - Conectado a um endpoint AWS.
(✅) Seleção (aprovação no admin_dashboard.html - dados mock).
(✅) Área do voluntário com histórico (protótipo estático no voluntario_dashboard.html).
(❌) Certificados digitais de participação (pendente).

Captação de recursos: (🟡 Em Progresso/Protótipo)

(✅) Campanhas de arrecadação (protótipo estático no doador_dashboard.html).
(✅) Sistema de doações on-line (simulado na página projetos.html).
(✅) Relatórios de prestação de contas (protótipo estático no doador_dashboard.html).
(❌) Metas e progresso em tempo real (pendente, requer back-end).

Comunicação e transparência: (🟡 Em Progresso/Protótipo)

(✅) Blog com notícias e atualizações (blog.html e artigo-1.html).
(✅) Newsletter para engajamento (componente no rodapé).
(✅) Central de documentos públicos (transparencia.html).
(❌) Área de imprensa com releases (pendente).

Requisitos Técnicos Gerais (Escopo Total)

Responsividade: (✅ Concluído)

O design é mobile-first e adapta-se a tablets e desktops, utilizando Tailwind CSS e a meta tag viewport.

Desempenho: (❌ Pendente)

O protótipo atual utiliza CDNs e não inclui otimizações avançadas como minificação de CSS/JS, otimização de imagens ou lazy loading. O tempo de carregamento não foi otimizado.

Acessibilidade: (🟡 Em Progresso/Protótipo)

A estrutura semântica básica (HTML5) está implementada, o que ajuda na navegação por teclado e leitores de tela.

A conformidade total com WCAG 2.1 Nível AA é um requisito avançado (pendente) que exigiria uma auditoria completa, implementação de roles ARIA e verificação de contraste de cores.

Segurança: (🟡 Em Progresso/Protótipo)

(✅) Validação de formulários (lado do cliente) está implementada.
(❌) Implementação de HTTPS é uma configuração do lado do servidor (hospedagem), não aplicável diretamente ao código HTML/JS.

SEO e descoberta: (✅ Concluído)

Todas as páginas públicas possuem meta tags (título e descrição) otimizadas e uma estrutura de cabeçalhos (H1, H2, etc.) lógica.

🛠️ Tecnologias Utilizadas

HTML5: Utilizado para a estruturação semântica de todas as páginas.

Tailwind CSS (via CDN): Framework CSS utility-first para a estilização rápida e responsiva.

JavaScript (ESM - Módulos):

Manipulação dinâmica do DOM (ex: modais, tabelas).
Máscaras de formulário (CPF, Telefone, CEP) no cadastro.html.
Lógica de interação nos dashboards.

AWS (Amazon Web Services):

O formulário cadastro.html está configurado para enviar dados (via fetch) para um endpoint do AWS API Gateway, que por sua vez aciona uma função Lambda.
Os demais dashboards (admin, voluntario, doador) utilizam dados estáticos (mock) para demonstrar a funcionalidade do front-end, aguardando integração com APIs AWS.

📁 Estrutura do Projeto

/
├── index.html           # Página Inicial (Home)
├── projetos.html        # Página de listagem de projetos
├── equipe.html          # Página "Sobre Nós / A Nossa Equipe"
├── blog.html            # Página de listagem de notícias
├── artigo-1.html        # Página de exemplo de um artigo de blog
├── transparencia.html   # Página de prestação de contas
├── cadastro.html        # Formulário de registo (Conectado à AWS API Gateway)
├── login.html           # Página de login (simulada)
│
├── admin_dashboard.html     # Painel do Administrador (Protótipo com dados estáticos)
├── voluntario_dashboard.html# Painel do Voluntário (protótipo estático)
├── doador_dashboard.html    # Painel do Doador (protótipo estático)
│
├── style.css            # CSS global (mínimo, usado principalmente para o body)
├── script.js            # JS global (usado para as máscaras do formulário de cadastro)
└── README.md            # Este ficheiro

✨ Funcionalidades Implementadas (Estado Atual)

Páginas Públicas

Home (index.html): Apresentação da ONG, missão, valores e formulário de contacto.
Projetos (projetos.html): Listagem dos projetos sociais, com apelos à ação para doação e voluntariado.
Blog (blog.html e artigo-1.html): Secção de notícias com links funcionais para páginas de artigos detalhados.
Equipa (equipe.html): Apresentação dos fundadores e da equipa principal.
Transparência (transparencia.html): Secção para relatórios financeiros e documentos públicos.

Páginas de Interação

Cadastro (cadastro.html): Formulário completo com validação de campos HTML5 e máscaras de input (CPF, Telefone, CEP) via JavaScript. O formulário envia os dados para um endpoint real do AWS API Gateway.
Login (login.html): Página de login simulada que direciona para os três perfis de dashboard.

Dashboards (Área Restrita - Protótipos Estáticos)

O foco principal do projeto reside na demonstração do layout e fluxo do front-end dos dashboards.

Administrador (admin_dashboard.html)

Gestão de Projetos (Dados Estáticos):

Criar (Create): Adiciona novos projetos através de um formulário inline (incorporado na página). (Apenas front-end, não salva os dados).
Ler (Read): Lista os projetos existentes (dados estáticos/mock).

Gestão de Voluntários (Dados Estáticos):

Ler (Read): Lista voluntários pendentes e aprovados (dados estáticos/mock).
Atualizar (Update): O botão "Aprovar" altera o status do voluntário (apenas na visualização).
Ver Perfil: O botão "Ver Perfil" abre um modal (pop-up) com os detalhes do voluntário selecionado.

Visualização de Secções:

As secções "Relatório de Doações" e "Info Institucional" estão preenchidas com dados estáticos para demonstração de layout.

Voluntário e Doador (Protótipos)

voluntario_dashboard.html e doador_dashboard.html: São protótipos estáticos que demonstram como seriam as áreas restritas para esses perfis, preenchidos com dados de exemplo.

🚀 Como Executar

Este projeto não requer um servidor web para a maioria das funcionalidades (exceto a integração com a AWS).

Clone ou faça o download deste repositório.

Abra qualquer um dos ficheiros .html diretamente no seu navegador (ex: index.html ou admin_dashboard.html).
