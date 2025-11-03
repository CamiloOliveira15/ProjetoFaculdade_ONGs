Plataforma de Gestão para ONGs - Conecta Vidas (Projeto Acadêmico)

Este projeto é uma plataforma web front-end completa, desenvolvida como parte de um projeto acadêmico, simulando um sistema profissional para Organizações Não Governamentais (ONGs). O sistema permite a gestão de projetos, voluntários e doações, utilizando HTML semântico, Tailwind CSS e JavaScript com integração em tempo real ao Firebase (Firestore).

🚀 Visão Geral

O objetivo é criar uma presença digital profissional para a "ONG Conecta Vidas", permitindo que ela gerencie suas atividades, capte recursos e engaje voluntários. A plataforma é dividida em uma área pública (para visitantes, doadores e potenciais voluntários) e uma área administrativa (para a equipe da ONG).

✨ Funcionalidades Principais

O projeto implementa funcionalidades para diversas personas, com destaque para o painel de administrador, que possui operações de CRUD (Criar, Ler, Atualizar, Excluir) conectadas a um banco de dados NoSQL (Firestore).

Páginas Públicas (Estáticas)

Página Inicial (index.html): Apresentação da ONG, missão, valores e formulário de contato.

Projetos (projetos.html): Detalhamento dos projetos sociais, com chamadas para doação e voluntariado.

Nossa Equipe (equipe.html): Apresentação dos fundadores e da equipe.

Blog (blog.html): Página para notícias e atualizações.

Transparência (transparencia.html): Seção para relatórios, prestação de contas e documentos públicos.

Newsletter: Componente de captura de e-mails presente no rodapé de todas as páginas.

Páginas de Engajamento

Cadastro (cadastro.html): Formulário completo para novos voluntários e apoiadores, com máscaras de input (CPF, Telefone, CEP) via JavaScript.

Login (login.html): Página de login simulada, que direciona para os dashboards de cada persona.

Dashboards (Áreas Autenticadas)

1. Administrador (admin_dashboard.html) - (Funcionalidade Dinâmica)

Este é o núcleo do sistema, com integração direta ao Firebase Firestore:

Gestão de Projetos (CRUD):

Criar (Create): Adiciona novos projetos através de um modal (pop-up). Os dados são salvos na coleção projects do Firestore.

Ler (Read): Lista todos os projetos existentes em tempo real (onSnapshot), exibindo-os na tabela.

Excluir (Delete): Remove projetos do Firestore.

Gestão de Voluntários (CRUD):

Ler (Read): Lista voluntários pendentes da coleção volunteers do Firestore.

Atualizar (Update): Permite "Aprovar" um voluntário, alterando seu status no banco de dados.

2. Voluntário (voluntario_dashboard.html) - (Protótipo)

Simula a área onde o voluntário pode descobrir novas oportunidades, ver seu histórico de horas e certificados.

3. Doador (doador_dashboard.html) - (Protótipo)

Simula a área onde o doador acompanha o progresso de campanhas, vê seu histórico de doações e acessa relatórios de transparência.

🛠️ Tecnologias Utilizadas

HTML5: Estruturação semântica.

Tailwind CSS (via CDN): Estilização e design responsivo (Mobile-First).

JavaScript (ESM - Módulos): Manipulação do DOM, máscaras de formulário, lógica de modais e interação com o banco de dados.

Firebase (BaaS - Backend as a Service):

Firestore: Banco de dados NoSQL em tempo real para projetos e voluntários.

Firebase Auth: Autenticação (neste projeto, simulada com login anônimo ou token).

📁 Estrutura dos Arquivos

/
├── index.html           # Página Inicial
├── projetos.html        # Página de Projetos
├── equipe.html          # Página da Equipe
├── blog.html            # Página do Blog
├── transparencia.html   # Página de Transparência
├── cadastro.html        # Formulário de Cadastro
├── login.html           # Página de Login
|
├── admin_dashboard.html     # (Contém a lógica JS/Firebase principal)
├── voluntario_dashboard.html
├── doador_dashboard.html
|
├── style.css            # CSS customizado (mínimo)
├── script.js            # JS global (máscaras de formulário)
└── README.md            # Este arquivo


⚙️ Como Rodar o Projeto (Configuração do Firebase)

Como este projeto depende de um banco de dados na nuvem, ele não funcionará totalmente apenas abrindo o index.html. Você precisa configurá-lo com seu próprio Firebase.

Clone o Repositório

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)


Crie um Projeto no Firebase

Acesse o Console do Firebase.

Crie um novo projeto.

No menu lateral, vá para Cloud Firestore e crie um banco de dados.

IMPORTANTE: Inicie no Modo de Teste (isso permite leitura e escrita sem regras de segurança complexas, o que é necessário para este projeto).

Obtenha suas Credenciais do Firebase

Nas "Configurações do Projeto" (ícone de engrenagem), role para baixo até "Seus aplicativos".

Crie um novo "Aplicativo Web" (ícone </>).

Copie o objeto firebaseConfig que será exibido.

Configure o Código

Abra o arquivo admin_dashboard.html.

Encontre a seção <script type="module"> no final do arquivo.

Localize a constante firebaseConfig no código:

// ...
const firebaseConfig = typeof __firebase_config !== 'undefined' 
    ? JSON.parse(__firebase_config) 
    : { apiKey: "YOUR_API_KEY", authDomain: "YOUR_AUTH_DOMAIN", projectId: "YOUR_PROJECT_ID" }; // Fallback
// ...


Substitua o objeto de Fallback (com "YOUR_API_KEY"...) pelo objeto firebaseConfig que você copiou do seu projeto Firebase.

🚀 Testando a Funcionalidade

Após configurar o Firebase, você pode testar o CRUD:

Abra o arquivo login.html no seu navegador.

Clique no botão "Simular Login (Admin)".

Você será levado ao admin_dashboard.html.

Clique em "+ Adicionar Novo Projeto", preencha o formulário e salve. O projeto deve aparecer instantaneamente na tabela (pois foi salvo no Firestore e lido em tempo real).

Clique em "Excluir" em um projeto. Ele deve desaparecer da tabela e do seu banco de dados no Firestore.

Para testar voluntários: Vá ao seu console do Firebase, crie manualmente a coleção /artifacts/default-app-id/public/data/volunteers e adicione um documento com os campos nome, email, telefone e status: "Pendente". Ele aparecerá na tabela de voluntários no dashboard, pronto para ser "Aprovado".