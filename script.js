const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const yearSpan = document.getElementById('year');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
