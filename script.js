// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-color', '#ecf0f1');
        themeToggle.textContent = 'Light Theme';
    } else {
        document.documentElement.style.setProperty('--background-color', '#ecf0f1');
        document.documentElement.style.setProperty('--text-color', '#34495e');
        themeToggle.textContent = 'Dark Theme';
    }
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (prevent default for demo)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo, no actual submission occurred)');
});

// Typing effect
const typingElement = document.querySelector('.typing-effect');
const text = typingElement.textContent;
typingElement.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Staggered section animation
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`;
});