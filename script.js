document.addEventListener('DOMContentLoaded', () => {

    const fadeSections = document.querySelectorAll('.fade-in');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Controle do Modal do Chatbot
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotClose = document.querySelector('.chatbot-close');

    // Abrir chatbot
    window.openChatbot = function() {
        chatbotModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Fechar chatbot ao clicar no botão de fechar
    chatbotClose.addEventListener('click', function() {
        chatbotModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Fechar chatbot ao clicar fora do container
    chatbotModal.addEventListener('click', function(e) {
        if (e.target === chatbotModal) {
            chatbotModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar chatbot com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatbotModal.classList.contains('active')) {
            chatbotModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

});

