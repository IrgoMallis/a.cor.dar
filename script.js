
//document.getElementById('contact-form').addEventListener('submit', function(event) {
//    event.preventDefault();

//    const name = document.getElementById('name').value;
//    const email = document.getElementById('email').value;
//    const phone = document.getElementById('phone').value;
//    const message = document.getElementById('message').value;

//    if (name && email && message) {
//        alert('Obrigado pelo contato, ' + name + '! Nós responderemos em breve.');
//        document.getElementById('contact-form').reset();
//    } else {
//        alert('Por favor, preencha todos os campos obrigatórios.');
//    }
//});

// Menu Responsivo
// Seleciona o menu hamburger e os links de navegação
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
//hamburger.addEventListener('click', () => {
//    navLinks.classList.toggle('active');
//});

// Alterna a visibilidade do menu quando o hamburger é clicado
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu quando um link é clicado
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
