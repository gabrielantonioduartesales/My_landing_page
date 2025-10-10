
const hardskills = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PowerBI', icon: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000' },
    { name: 'Pandas', icon: 'https://pandas.pydata.org/static/img/pandas_mark.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'DBeaver', icon: 'https://img.icons8.com/?size=100&id=kjaF4LlvyR6g&format=png&color=000000' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
];

const softskills = [
    { name: 'Comunicação', icon: 'https://cdn-icons-png.flaticon.com/512/8103/8103854.png' },
    { name: 'Gestão do tempo', icon: 'https://cdn-icons-png.flaticon.com/512/201/201652.png' },
    { name: 'Trabalho em equipe', icon: 'https://cdn-icons-png.flaticon.com/512/4859/4859784.png' },
    { name: 'Criatividade', icon: 'https://cdn-icons-png.flaticon.com/512/9439/9439709.png' },
    { name: 'Gestão de equipe', icon: 'https://cdn-icons-png.flaticon.com/512/4168/4168988.png' },
    { name: 'Instrucional', icon: 'https://cdn-icons-png.flaticon.com/512/3471/3471600.png' },
    { name: 'Análise', icon: 'https://cdn-icons-png.flaticon.com/512/3687/3687809.png' },
    { name: 'Flexibilidade', icon: 'https://cdn-icons-png.flaticon.com/512/5201/5201703.png' },
    { name: 'Disponibilidade para viagens', icon: 'https://cdn-icons-png.flaticon.com/512/2060/2060284.png' },
    { name: 'Negociação', icon: 'https://cdn-icons-png.flaticon.com/512/6002/6002984.png' },
    { name: 'Adaptabilidade', icon: 'https://cdn-icons-png.flaticon.com/512/3316/3316286.png' },
    { name: 'Curiosidade intelectual', icon: 'https://cdn-icons-png.flaticon.com/512/6747/6747225.png' },
    { name: 'Aprendizado ágil', icon: 'https://cdn-icons-png.flaticon.com/512/17324/17324171.png' }
];

const ticker_hard = document.getElementById('ticker_hard');
const ticker_soft = document.getElementById('ticker_soft');

// Add all tech items twice to create seamless infinite scrolling
function populateTicker() {
    hardskills.forEach(tech => {
        ticker_hard.appendChild(createTechItem(tech));
    });

    // Add duplicates for seamless scrolling
    hardskills.forEach(tech => {
        ticker_hard.appendChild(createTechItem(tech));
    });

    softskills.forEach(tech => {
        ticker_soft.appendChild(createTechItem(tech));
    });

    // Add duplicates for seamless scrolling
    softskills.forEach(tech => {
        ticker_soft.appendChild(createTechItem(tech));
    });
}

function createTechItem(tech) {
    const item = document.createElement('div');
    item.className = 'tech-item';

    const icon = document.createElement('img');
    icon.className = 'tech-icon';
    icon.src = tech.icon;
    icon.alt = tech.name + ' icon';

    const name = document.createElement('span');
    name.className = 'tech-name';
    name.textContent = tech.name;

    item.appendChild(icon);
    item.appendChild(name);

    return item;
}

// Initialize
populateTicker();

// Pause animation on hover
const tickerContainer = document.querySelectorAll('.tech-ticker');

tickerContainer.forEach( container => {
    const container_func = container.querySelector('.ticker-container');

    container.addEventListener('mouseenter', () => {
        container_func.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseleave', () => {
        container_func.style.animationPlayState = 'running';
    });

});
