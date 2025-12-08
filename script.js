// script.js
// Arquivo responsável pelas interações em JavaScript do portfólio
// - Validação do formulário de contato
// - Simulação de envio
// - Troca de tema claro/escuro
// - Menu responsivo em telas pequenas

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemInput = document.getElementById("mensagem");

    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroMensagem = document.getElementById("erro-mensagem");

    const mensagemResultado = document.getElementById("mensagem-resultado");

    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav ul");

    const anoAtualSpan = document.getElementById("ano-atual");
    if (anoAtualSpan) {
        const anoAtual = new Date().getFullYear();
        anoAtualSpan.textContent = anoAtual;
    }

    // Função auxiliar para validar e-mail de forma simples
    function emailValido(email) {
        const regexSimples = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexSimples.test(email);
    }

    // Validação e simulação de envio do formulário de contato
    form.addEventListener("submit", function (evento) {
        evento.preventDefault(); // impede o envio real do formulário

        let formularioValido = true;

        // Limpa mensagens antigas
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";
        mensagemResultado.textContent = "";

        // Validação do campo nome
        if (nomeInput.value.trim() === "") {
            erroNome.textContent = "Por favor, informe seu nome.";
            formularioValido = false;
        }

        // Validação do campo e-mail
        if (emailInput.value.trim() === "") {
            erroEmail.textContent = "Por favor, informe seu e-mail.";
            formularioValido = false;
        } else if (!emailValido(emailInput.value.trim())) {
            erroEmail.textContent = "Informe um e-mail válido (ex: usuario@dominio.com).";
            formularioValido = false;
        }

        // Validação do campo mensagem
        if (mensagemInput.value.trim() === "") {
            erroMensagem.textContent = "Por favor, escreva uma mensagem.";
            formularioValido = false;
        }

        // Se passou em todas as validações
        if (formularioValido) {
            // Simulação de envio: limpa campos e exibe mensagem de sucesso
            nomeInput.value = "";
            emailInput.value = "";
            mensagemInput.value = "";

            mensagemResultado.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
            alert("Mensagem enviada com sucesso!");
        } else {
            mensagemResultado.textContent = "Por favor, corrija os campos destacados antes de enviar.";
        }
    });

    // Alternância de tema claro/escuro
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        // Muda o ícone do botão conforme o tema
        if (document.body.classList.contains("dark-theme")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });

    // Menu responsivo: mostrar/esconder em telas pequenas
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("mostrar");
    });
});
