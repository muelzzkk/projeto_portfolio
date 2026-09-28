/* =====================================================
   MENU MOBILE
   ===================================================== */

// Seleciona o botão responsável por abrir o menu
const menuButton = document.getElementById("menuButton");

// Seleciona o menu que será exibido no celular
const mobileMenu = document.getElementById("mobileMenu");


// Adiciona um evento de clique ao botão
menuButton.addEventListener("click", function () {

    // Alterna a classe "hidden" do Tailwind
    mobileMenu.classList.toggle("hidden");

    // Verifica se o menu está visível
    const menuAberto =
        !mobileMenu.classList.contains("hidden");

    // Atualiza o atributo de acessibilidade
    menuButton.setAttribute(
        "aria-expanded",
        menuAberto
    );

});


// Seleciona todos os links do menu mobile
const mobileLinks =
    document.querySelectorAll(".mobile-link");


// Adiciona um evento para cada link
mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Fecha o menu depois que o usuário
        // seleciona uma seção
        mobileMenu.classList.add("hidden");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* =====================================================
   CABEÇALHO AO ROLAR A PÁGINA
   ===================================================== */

// Seleciona o cabeçalho
const header = document.getElementById("header");


// Detecta quando o usuário rola a página
window.addEventListener("scroll", function () {

    // Se a página estiver mais de 50 pixels abaixo
    // do topo, adiciona um estilo ao cabeçalho
    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});



/* =====================================================
   CAROUSEL DE PROJETOS
   ===================================================== */

// Seleciona o elemento que contém todos os slides
const carouselTrack =
    document.getElementById("carouselTrack");

// Seleciona os botões do carousel
const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");

// Seleciona os indicadores
const indicators =
    document.querySelectorAll(".indicator");

// Define qual projeto está sendo exibido
let projetoAtual = 0;

// Quantidade de projetos
const totalProjetos = 3;


// Atualiza a posição do carousel
function atualizarCarousel() {

    // Cada projeto ocupa 100% da largura.
    // Por isso, multiplicamos o índice por 100.
    const deslocamento =
        projetoAtual * 100;

    // Move o conteúdo horizontalmente
    carouselTrack.style.transform =
        `translateX(-${deslocamento}%)`;


    // Atualiza os indicadores
    indicators.forEach(function (indicator, index) {

        // Remove o estado ativo
        indicator.classList.remove("active");

        // Adiciona o estado ativo ao indicador atual
        if (index === projetoAtual) {

            indicator.classList.add("active");

        }

    });

}


// Botão para projeto anterior
prevButton.addEventListener("click", function () {

    projetoAtual--;

    // Se estiver no primeiro projeto,
    // vai para o último
    if (projetoAtual < 0) {

        projetoAtual =
            totalProjetos - 1;

    }

    atualizarCarousel();

});


// Botão para próximo projeto
nextButton.addEventListener("click", function () {

    projetoAtual++;

    // Se chegar ao final,
    // volta para o primeiro projeto
    if (projetoAtual >= totalProjetos) {

        projetoAtual = 0;

    }

    atualizarCarousel();

});


// Permite clicar diretamente nos indicadores
indicators.forEach(function (indicator, index) {

    indicator.addEventListener("click", function () {

        projetoAtual = index;

        atualizarCarousel();

    });

});



/* =====================================================
   MODAL DOS PROJETOS
   ===================================================== */

// Informações utilizadas pelo modal
const projetos = [

    {
        numero: "PROJETO 01",
        titulo: "Sistema de Gestão",
        descricao:
            "Sistema desenvolvido para gerenciamento de informações, usuários e processos. O projeto utiliza conceitos de desenvolvimento web e organização de interfaces.",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    {
        numero: "PROJETO 02",
        titulo: "Aplicativo Mobile",
        descricao:
            "Aplicação mobile criada para facilitar tarefas do cotidiano. O projeto tem como objetivo proporcionar uma experiência simples e intuitiva para o usuário.",
        tecnologias: [
            "React Native",
            "JavaScript"
        ]
    },

    {
        numero: "PROJETO 03",
        titulo: "API REST",
        descricao:
            "API desenvolvida para gerenciamento e consulta de informações utilizando requisições HTTP. O projeto trabalha conceitos de backend, banco de dados e APIs REST.",
        tecnologias: [
            "Python",
            "Django",
            "PostgreSQL"
        ]
    }

];


// Seleciona o modal
const modal =
    document.getElementById("modal");

// Seleciona os elementos que receberão
// as informações do projeto
const modalProjeto =
    document.getElementById("modalProjeto");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalDescricao =
    document.getElementById("modalDescricao");

const modalTecnologias =
    document.getElementById("modalTecnologias");


// Função responsável por abrir o modal
function abrirModal(indice) {

    // Obtém os dados do projeto escolhido
    const projeto = projetos[indice];


    // Insere as informações no HTML
    modalProjeto.textContent =
        projeto.numero;

    modalTitulo.textContent =
        projeto.titulo;

    modalDescricao.textContent =
        projeto.descricao;


    // Limpa as tecnologias anteriores
    modalTecnologias.innerHTML = "";


    // Cria uma tag para cada tecnologia
    projeto.tecnologias.forEach(function (tecnologia) {

        const tag =
            document.createElement("span");

        tag.classList.add("tech-tag");

        tag.textContent =
            tecnologia;

        modalTecnologias.appendChild(tag);

    });


    // Remove a classe que esconde o modal
    modal.classList.remove("hidden");

    // Adiciona display flex para centralizar
    modal.classList.add("flex");

    // Impede a rolagem da página
    document.body.style.overflow = "hidden";

}


// Fecha o modal
function fecharModal() {

    // Esconde o modal
    modal.classList.add("hidden");

    // Remove o display flex
    modal.classList.remove("flex");

    // Libera novamente a rolagem
    document.body.style.overflow = "";

}


// Botão de fechar
document
    .getElementById("closeModal")
    .addEventListener("click", fecharModal);


// Permite fechar o modal clicando fora dele
modal.addEventListener("click", function (event) {

    // Verifica se o clique foi no fundo do modal
    if (event.target === modal) {

        fecharModal();

    }

});


// Permite fechar o modal pressionando ESC
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});



/* =====================================================
   FORMULÁRIO DE CONTATO
   ===================================================== */

// Seleciona o formulário
const contactForm =
    document.getElementById("contactForm");


// Adiciona evento quando o formulário for enviado
contactForm.addEventListener("submit", function (event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    // Obtém os valores dos campos
    const nome =
        document.getElementById("nome").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mensagem =
        document.getElementById("mensagem").value.trim();


    // Seleciona os elementos que mostrarão os erros
    const nomeErro =
        document.getElementById("nomeErro");

    const emailErro =
        document.getElementById("emailErro");

    const mensagemErro =
        document.getElementById("mensagemErro");

    const sucesso =
        document.getElementById("sucesso");


    // Limpa mensagens antigas
    nomeErro.textContent = "";
    emailErro.textContent = "";
    mensagemErro.textContent = "";
    sucesso.textContent = "";


    // Variável que controla se o formulário
    // está preenchido corretamente
    let formularioValido = true;


    /* ---------------------------------------------
       VALIDAÇÃO DO NOME
       --------------------------------------------- */

    if (nome === "") {

        nomeErro.textContent =
            "Informe seu nome.";

        formularioValido = false;

    } else if (nome.length < 3) {

        nomeErro.textContent =
            "O nome deve possuir pelo menos 3 caracteres.";

        formularioValido = false;

    }


    /* ---------------------------------------------
       VALIDAÇÃO DO E-MAIL
       --------------------------------------------- */

    // Expressão regular simples para verificar
    // o formato básico de um endereço de e-mail
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailErro.textContent =
            "Informe seu e-mail.";

        formularioValido = false;

    } else if (!emailRegex.test(email)) {

        emailErro.textContent =
            "Informe um e-mail válido.";

        formularioValido = false;

    }


    /* ---------------------------------------------
       VALIDAÇÃO DA MENSAGEM
       --------------------------------------------- */

    if (mensagem === "") {

        mensagemErro.textContent =
            "Informe uma mensagem.";

        formularioValido = false;

    } else if (mensagem.length < 10) {

        mensagemErro.textContent =
            "A mensagem deve possuir pelo menos 10 caracteres.";

        formularioValido = false;

    }


    /* ---------------------------------------------
       RESULTADO DA VALIDAÇÃO
       --------------------------------------------- */

    if (formularioValido) {

        // Exibe mensagem de sucesso
        sucesso.textContent =
            "Mensagem enviada com sucesso!";


        // Limpa os campos do formulário
        contactForm.reset();

    }

});

