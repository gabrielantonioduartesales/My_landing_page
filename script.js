const tickerContainer = document.querySelectorAll('.tech-ticker');

tickerContainer.forEach(container => {
    const container_func = container.querySelector('.ticker-container');

    container.addEventListener('mouseenter', () => {
        container_func.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseleave', () => {
        container_func.style.animationPlayState = 'running';
    });

});

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const leftBtn = document.getElementById('left_bt');
const rightBtn = document.getElementById('right_bt');
const dotsContainer = document.querySelector('.dots');

let index = 0;

items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}

rightBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

leftBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();

        const startY = window.scrollY;
        const targetY = target.getBoundingClientRect().top + startY;
        const distance = targetY - startY;
        const duration = 800;
        let startTime = null;

        function animateScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percent = Math.min(progress / duration, 1);
            const ease = percent < 0.5
                ? 2 * percent * percent
                : -1 + (4 - 2 * percent) * percent;
            window.scrollTo(0, startY + distance * ease);
            if (progress < duration) requestAnimationFrame(animateScroll);
            else history.replaceState(null, null, href);
        }

        requestAnimationFrame(animateScroll);
    });
});

function checkScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
