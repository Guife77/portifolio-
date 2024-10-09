// Definir o idioma padrão como português
let currentLanguage = 'pt';

// Função para definir o idioma
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    updateActiveButton();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Função para atualizar o conteúdo com base no idioma selecionado
function updateLanguage() {
    // Selecionar todos os elementos com os atributos data-en e data-pt
    const elements = document.querySelectorAll('[data-en][data-pt]');

    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Função para atualizar a classe ativa nos botões de idioma
function updateActiveButton() {
    const buttons = document.querySelectorAll('.language-switcher button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function loadLanguage() {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
        currentLanguage = storedLanguage;
    }
    updateLanguage();
    updateActiveButton();
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
}

// Carregar o idioma ao iniciar
document.addEventListener('DOMContentLoaded', loadLanguage);
