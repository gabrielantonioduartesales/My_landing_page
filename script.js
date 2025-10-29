
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

// Criar as bolinhas dinamicamente
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

const experience = [
    {
    year: "2025 - Presente",
    title: "Instrutor Cisco Network Academy (Parceira com Senac)",
    institution: "Cisco Network Academy",
    activities: [
      "Em parceria com o Senac Minas, atuo como instrutor credenciado pela Cisco Networking Academy (NetAcad), com acesso à plataforma oficial para criação e gestão de turmas. Essa parceria permite ministrar cursos nas áreas de Redes, Cibersegurança, Hardware e Programação, incluindo formações preparatórias para certificações como o CCNA."
    ],
    side: "right",
    delay: 0,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1763596800&v=beta&t=bzQRcF8IVlrzZsE1I5WG3CnhplTiNRsZdKfrcnreRWg"
  },
  {
    year: "2024 - Presente",
    title: "Professor de TI",
    institution: "Senac Minas",
    activities: [
      "Ensino sobre hardware, montagem e manutenção de computadores:",
      "Windows e Linux, VirtualBox, VMware e Proxmox;",
      "Instalação de softwares e uso do Trello para gestão das equipes;",
      "Uso de multímetros, ferramentas de eletrônica, arduínos e impressora 3D para projetos maker.",
      "Ensino sobre redes e manutenção de redes Cisco:",
      "Cisco Packet Tracer, Linux, Windows, Windows Server, aapanel, XAMPP;",
      "VMware Workstation, Proxmox, Firewall PFSense e Fortinet;",
      "Equipamentos de rede: switches, access points, roteadores, racks e patch panels.",
      "Desenvolvimento de softwares, sites e análise de dados:",
      "Python, SQL Server, Pandas, Matplotlib e Power BI;",
      "PostgreSQL, DBeaver, MariaDB, MySQL Server;",
      "Figma, Penpot, Framer e Canva para prototipagem;",
      "Engenharia de requisitos e uso de IA's como ChatGPT, Lovable, N8N, DeepSeek;",
      "HTML, CSS, JavaScript, PHP, Node, SQL Server e WordPress CMS."
    ],
    side: "left",
    delay: 1,
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1763596800&v=beta&t=jJuWfJSvEkFrhTb7YSLfmAQlTh6GN5J-AZKwzaXeL6A"
  },
  {
    year: "2024 - 2025",
    title: "Analista de Sistemas",
    institution: "Stefanini (clientes: Vallourec e Zurich Seguros)",
    activities: [
      "No cliente Zurich Seguros – time de TI Comercial Insurance:",
      "Suporte ao sistema ERP I4PRO (aplicação de pacotes e intermediação com equipe I4PRO);",
      "Uso de SQL Server, DesktopRemote, PowerCenter e Azure DevOps;",
      "Gestão de chamados via WEX (I4PRO) e ServiceNow;",
      "Aplicação de fechamentos mensais e análise de negócios e sistemas.",
      "No cliente Vallourec/VSB:",
      "Manutenção e montagem de computadores, instalação e configuração de softwares;",
      "Suporte a reuniões ao vivo e configuração de usuários via Azure;",
      "Gestão de chamados via ServiceAide."
    ],
    side: "right",
    delay: 2,
    img: "https://media.licdn.com/dms/image/v2/D560BAQGxw8ejZKpVTA/company-logo_100_100/company-logo_100_100/0/1689014804966/stefanini_logo?e=1763596800&v=beta&t=zqm51X0Q7bbVRS4WCGdoBuJH2dKLRtvF4vgdm5oL9B8"
  },
  {
    year: "2022 - 2024",
    title: "Técnico em Informática",
    institution: "UNA - Centro Universitário UNA",
    activities: [
      "Montagem e manutenção de computadores e periféricos;",
      "Instalação e manutenção de softwares e suporte a aulas ao vivo;",
      "Gravação de aulas e apoio a visitas do MEC;",
      "Configuração de IPs e inclusão em domínios (Active Directory);",
      "Manutenção de ramais telefônicos e dispositivos de rede;",
      "Abertura de chamados via ServiceNow;",
      "Colaboração com analistas de redes e programadores;",
      "Uso de CMS SharePoint para gestão interna."
    ],
    side: "left",
    delay: 2,
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1763596800&v=beta&t=C9y0ibRIiyLBo5EggfEqrtYLa_Ox75cZTQgeOl4P8hE"
  },
  {
    year: "Nov 2021 (temporário Black Friday)",
    title: "Operador de Loja",
    institution: "Americanas S.A.",
    activities: [
      "Atendimento ao cliente e operação de caixa;",
      "Controle de estoque e reposição de mercadorias;",
      "Trabalho com metas e estratégias de vendas."
    ],
    side: "right",
    delay: 3,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQEoMTZW5hktPw/company-logo_100_100/company-logo_100_100/0/1688744936290/americanas_sa_logo?e=1763596800&v=beta&t=cZFInAytRgMEQwFvrLk2m2Be19lrd_xMJ-A655EXUEk"
  },
  {
    year: "Out 2021 (temporário – final de ano)",
    title: "Auxiliar de Serviços Gerais",
    institution: "Sartori Serviços / Gerdau Açominas",
    activities: [
      "Checklist de EPIs e inspeção de áreas da Aciaria;",
      "Suporte à segurança durante operações de parada;",
      "Limpeza e organização dos locais de trabalho;",
      "Inspeção de pontes rolantes e procedimentos de evacuação."
    ],
    side: "left",
    delay: 4,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQE5umfEkkCDpQ/company-logo_100_100/B4DZnDvvo1JEAU-/0/1759925704297?e=1763596800&v=beta&t=UhB2Y4KJrqHGpV5zgxFN_0U1pgjnQV_QpTCD2dy6m84"
  },
  {
    year: "Out 2021 (temporário – final de ano)",
    title: "Operador de Checkout",
    institution: "Supermercado Brasil",
    activities: [
      "Atendimento ao cliente e controle de estoque;",
      "Abertura e fechamento de caixa;",
      "Logística reversa e entregas domiciliares;",
      "Organização de prateleiras e suporte ao setor de vendas."
    ],
    side: "right",
    delay: 5,
    img: ""
  }
];

experience.forEach(cert => {
    const ativivies = cert.activities.map(d => `<li>${d}</li>`).join('');

    document.querySelector('.jobs_timeline').insertAdjacentHTML('beforeend', `
        <div class="timeline-item ${cert.side} fade-in ${cert.delay}">
            <div class="timeline-content">
                <div class="timeline-date">
                    <i data-feather="calendar" style="margin-right: 5px;"></i> ${cert.year}
                </div>
                <h3>${cert.title}</h3>
                <h4 class="institution_certi" >${cert.institution} <img class="img_icons" src=${cert.img}></h4>
                <h2>Disciplinas</h2>
                <ul>
                    ${ativivies}
                </ul>
            </div>
        </div>
    `);
});


const formation = [
    {
        year: "2025 - Em Andamento (2026)",
        title: "Pós-Graduação Lato Sensu em Docência no Ensino Técnico",
        institution: "Universidade Senac",
        disciplines: ["Formação em andamento"],
        side: "right",
        delay: 1,
        diploma: "",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHaxCRA92zMjQ/company-logo_100_100/company-logo_100_100/0/1713573963371/senacbrasil_logo?e=1763596800&v=beta&t=WWQZKThvXi5-1WL9jrCaVOTnihkYJuKqjWLKgd5MMns"
    },
    {
        year: "2025 - Em andamento (2026)",
        title: "MBA em Business Intelligence",
        institution: "Universidade Descomplica",
        disciplines: [
            "Coleta e Tratamento de Dados (30h)",
            "DataViz (30h)",
            "Python (30h)",
            "Big Data Analytics (30h)",
            "Arquitetura e Modelagem de Dados (30h)",
            "Estratégia e Modelos de Negócios (30h)",
            "Cultura de Dados (30h)",
            "Governança de Dados (30h)"
        ],
        side: "left",
        delay: 2,
        diploma: "",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQH1QLryW1IEFQ/company-logo_100_100/company-logo_100_100/0/1630552069493/faculdade_descomplica_logo?e=1763596800&v=beta&t=DiFaI3a_wrqFUK_hHxptbqnWycXreYzOABicjsF0-ZY"
    },
    {
        year: "2021 - 2024",
        title: "Graduação em Análise e Desenvolvimento de Sistemas",
        institution: "Centro Universitário Unicesumar",
        disciplines: [
            "Fundamentos e Arquiteturas de Computadores",
            "Gestão de Pessoas e Desenvolvimento de Equipes",
            "Algoritmos e Lógica de Programação 1 (C, Python)",
            "Algoritmos e Lógica de Programação 2 (C, Python)",
            "Design de Interação (Penpot, Figma...)",
            "Lógica para Computação",
            "Engenharia de Software (Scrum, UML)",
            "Banco de Dados (PostgreSQL, SQL Server, MariaDB)",
            "Matemática para Computação",
            "Sistemas Operacionais",
            "Formação Sociocultural e Ética 1",
            "Formação Sociocultural e Ética 2",
            "Estrutura de Dados 1 (C, Python)",
            "Estrutura de Dados 2 (C, Python)",
            "Programação 1 (Java)",
            "Programação 2 (Java)",
            "Programação 3 (Java)",
            "Processos de Negócios (COBIT, ITIL, Governança de TI)",
            "Tópicos Especiais (GitHub...)",
            "Empreendedorismo",
            "Gestão de Projetos",
            "Go – Projeto de Vida",
            "Go – Identificação de Oportunidades",
            "Go – Oportunidade e Resultados"
        ],
        side: "right",
        delay: 3,
        diploma: "https://media.licdn.com/dms/image/v2/D4D2DAQHAjo6n9Thgtg/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1730812553289?e=1762372800&v=beta&t=kDkxFnhaHrr5J5XYdetqcTrHS4HLdVuz0eBr6wy2eJk",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHwFH100tDQrQ/company-logo_100_100/company-logo_100_100/0/1708013055513/unicesumaroficial_logo?e=1763596800&v=beta&t=wHAEsqTI7NSpE0EOstUF9yo-OZ-P6fEnOcUW6MvFUBY"
    },
    {
        year: "2022 - 2023",
        title: "Curso Técnico em Informática",
        institution: "Senac Minas",
        disciplines: [
            "Montagem e Manutenção de Computadores",
            "Instalação de Hardware e Software para Computadores",
            "Projeto Integrador – Suporte e Manutenção de Computadores",
            "Instalação e Manutenção de Redes Locais de Computadores",
            "Instalação, Configuração e Monitoramento de Sistemas Operacionais de Redes Locais (Servidores, Win Server, Ubuntu Server)",
            "Projeto Integrador – Operação de Redes de Computadores",
            "Concepção, Análise e Planejamento de Desenvolvimento de Software (Python)",
            "Análise e Web Scraping de Dados (Python)",
            "Codificação, Manutenção e Documentação de Aplicativos Computacionais para Desktop e Dispositivos Móveis",
            "Codificação, Manutenção e Documentação de Aplicativos Computacionais para Internet (Sites)",
            "Execução de Testes e Implantação de Aplicativos Computacionais",
            "Desenvolvimento e Organização de Elementos Estruturais de Sites",
            "Manipulação e Otimização de Imagens Vetoriais, Bitmap e Elementos Visuais de Navegação para Web",
            "Projeto Integrador – Desenvolvimento Desktop, Mobile e Web"
        ],
        side: "left",
        delay: 4,
        diploma: "https://media.licdn.com/dms/image/v2/D4E2DAQEkc8Nz2W8Zwg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700600986346?e=1762372800&v=beta&t=c06oJXZQ5B8gXFeYXhEuWoMlpHAjN0-RyqEXftp6dxU",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1763596800&v=beta&t=jJuWfJSvEkFrhTb7YSLfmAQlTh6GN5J-AZKwzaXeL6A"
    },
    {
        year: "2016 - 2019",
        title: "Ensino Médio Técnico em Mecânica",
        institution: "Instituto Federal de Minas Gerais IFMG",
        disciplines: [
            "Ensino Médio integrado com curso técnico em mecânica",
            "Língua Portuguesa e Literatura",
            "Matemática",
            "Biologia",
            "Física",
            "Química",
            "História",
            "Geografia",
            "Filosofia",
            "Sociologia",
            "Língua Estrangeira Inglês",
            "Arte",
            "Educação Física",
            "Tecnologia dos Materiais",
            "Desenho Técnico AutoCad",
            "Automação",
            "Processos de Soldagem",
            "Física para Mecânica",
            "Informática"
        ],
        side: "right",
        delay: 5,
        diploma: "https://media.licdn.com/dms/image/v2/D4E2DAQFDP79RvQOkGg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700600856737?e=1762372800&v=beta&t=TGM1BNjkUyqHhfnx9AFNChjGT-j7N0EhuzqwYWOhIiY",
        img: "https://media.licdn.com/dms/image/v2/C510BAQGUy0hSknH6bw/company-logo_100_100/company-logo_100_100/0/1631313020185?e=1763596800&v=beta&t=685iLAPwCcC_-vB1wZ0Pu069DfOscNFxgu6btJE1U0Q"
    }
];


formation.forEach(cert => {
    const disciplinasHTML = cert.disciplines.map(d => `<li>${d}</li>`).join('');

    document.querySelector('.education_timeline').insertAdjacentHTML('beforeend', `
        <div class="timeline-item ${cert.side} fade-in ${cert.delay}">
            <div class="timeline-content">
                <div class="timeline-date">
                    <i data-feather="calendar" style="margin-right: 5px;"></i> ${cert.year}
                </div>
                <h3>${cert.title}</h3>
                <h4 class="institution_certi" >${cert.institution} <img class="img_icons" src=${cert.img}></h4>
                <h2>Disciplinas</h2>
                <ul>
                    ${disciplinasHTML}
                </ul>
                <img class="certificate_img" src='${cert.diploma}' >
            </div>
        </div>
    `);
});

const certificates = [
    {
        name: "Desenvolvimento Seguro",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso sobre utilização de práticas e verificações de códigos em busca de vulnerabilidades por meio do SonarQube.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk",
        file: "https://media.licdn.com/dms/image/v2/D562DAQHY60HZEkJoUg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1727191149264?e=1762293600&v=beta&t=tSswba847qnRt5Z66AMNY_RCaB3HoA6ZUE0LUT4zGew"
    },
    {
        name: "Design Thinking",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso focado na metodologia Design Thinking com ênfase em empatia, definição, ideação e prototipagem centrada no usuário.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQGqxFgrP0wPkQ/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1727872875607?e=1762293600&v=beta&t=QSNjslzDpn0I0lqKOjkcuGwJJNAIhWf8hcsgCP95BxQ"
    },
    {
        name: "Power BI",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso introdutório sobre uso de dashboards e visualização de dados no Power BI.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQFLHHXya24t7g/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1727465449826?e=1762293600&v=beta&t=zDUeV58wHG_tAU6_A72-P8cEuLox49YtuhuE8NOwQPE"
    },
    {
        name: "Prompt para ChatGPT",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Boas práticas de escrita de prompts, técnicas avançadas e conceitos de temperatura e top-p.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQGKCFTMIWOeag/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1726686372160?e=1762293600&v=beta&t=WYpFHFTZ0SbpEsiFulWseYlspaykRDWn0I6NofvIdds"
    },
    {
        name: "Criação de Prompts - SAI APP",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre criação de prompts otimizados para IA no aplicativo SAI APP.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQHXibio-EfHLQ/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1726686785729?e=1762293600&v=beta&t=-ME9nR624B8pfrZoPPHrB8PikE3J26x9HZBACc3oDso"
    },
    {
        name: "Fundamentos Design Gráfico",
        institution: "Fundação Bradesco",
        year: 2024,
        description: "Curso de fundamentos de design gráfico e composição visual.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQERxHfFUY--_A/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1720835949793?e=1762293600&v=beta&t=jjnxs2juCSIKc56tlnx7MKzMxWIgDafzWI3ifXwNmKg"
    },
    {
        name: "Gestão Inteligente de Tempo",
        institution: "Workover Academy",
        year: 2024,
        description: "Gestão e priorização de tarefas, produtividade e foco pessoal.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4E2DAQEJDnOOUFu1Mg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1717774970694?e=1762293600&v=beta&t=XuhsKWm92FpZuIew4RAjouIJtGzebBPW1DGWtTUc8Sw",
        code: "7e0b9b93d838b360c92a983ecc4439d8"
    },
    {
        name: "Negociação Estratégica",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre técnicas e estratégias de negociação corporativa.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4E2DAQFf29BCQArd8g/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1717453519297?e=1762293600&v=beta&t=hx7vsLKFQ6vX2TJDa-ks6puovszFo2OuFnchUPjabW4",
        code: "556d3ce2f3f7b6d1e0f04b9c0c71d68a"
    },
    {
        name: "Negociações Eficazes",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre técnicas de comunicação e persuasão em negociações.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4E2DAQEbL9tMXMN2gA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1717453498723?e=1762293600&v=beta&t=Nn8lhsp8XmJQXDZBxBHkZQEyl3BYvm3R1bti_YCoQpM",
        code: "d1ef23bb83a55d361edc68a37c928400"
    },
    {
        name: "Scrum",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso introdutório sobre metodologia ágil Scrum e seus papéis, artefatos e eventos.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQHxCfqExI1YXw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1719068172620?e=1762293600&v=beta&t=q0tJiOYuVx42cBqZQGBXrOTkB47mC7rfAYituFueaf8",
        code: "666c27e17e0aec65788ffff8c960deea"
    },
    {
        name: "TypeScript do Básico ao Avançado",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso completo de TypeScript com fundamentos, tipos, classes e integração com frameworks.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQEdmVidYwwvfg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1717431194756?e=1762293600&v=beta&t=SBbkjCC-od6v-z_njF9JnpKvQoiBlzTB_We8yzVIiTM",
        code: "7bd0f51f9d1e55a8fc6ad206ce0dc02c"
    },
    {
        name: "Mindset",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso sobre mentalidade de crescimento e comportamento profissional.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQEJtvFELclT3A/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1727885669350?e=1762293600&v=beta&t=OJhh-aiB6sns0eMMlm9fxd5TTWp7P6f2TAT0TY4Nybo"
    },
    {
        name: "Análise de Dados com Microsoft Power BI",
        institution: "BHS",
        year: 2023,
        description: "Curso sobre criação de dashboards e relatórios interativos no Power BI.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFIN_BXyw4dAQ/company-logo_100_100/company-logo_100_100/0/1657568147168/bhsoficial_logo?e=1762992000&v=beta&t=0QgmXxwt_zoVGCanMAS87W9DaZnWkE8BFiYRurTP0W0",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQHNY1OgUKbLBw/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1697584932913?e=1762293600&v=beta&t=yuTjdIFBqp-4N-p-LfEc3tGm-TAdrMgFCYCKfQjrvF8"
    },
    {
        name: "Instrutor Python — Programando com Games",
        institution: "Centro Universitário Una",
        year: 2023,
        description: "Atuação como instrutor no curso de programação com games usando Python.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1762992000&v=beta&t=zTurN6GjmKYFHuKOiLyT18QsUrnTu_VAAac1rz56FcI",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQFunL0NznYzsw/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1697583514264?e=1762293600&v=beta&t=jSA_omaLv7UU15zsNHfz62-q5-LYhWTFtkKfzQh6aPU"
    },
    {
        name: "AWS Educate: Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        year: 2023,
        description: "Introdução à computação em nuvem com AWS Educate.",
        img: "https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_100_100/B4EZgOay6gHEAY-/0/1752588562343/amazon_web_services_logo?e=1762992000&v=beta&t=cTvB_H0qvjOVGLJ1KcdpU592UHsbLzfw6wPYPwluDFg",
        file: "img/certificates_imgs/aws.png"
    },
    {
        name: "Introdução à Análise de Dados - Microsoft Power BI",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Curso introdutório de análise de dados com Power BI.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQH0hx5gZa2zOQ/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1697584758181?e=1762293600&v=beta&t=hCD4zblqBAjogVBLoGZxPLm3QavXh-TJcmFX-G8W1jQ"
    },
    {
        name: "Segurança em Tecnologia da Informação",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Conceitos básicos de segurança digital, redes e proteção de dados.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQHXR828D2Xe0w/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1697584695877?e=1762293600&v=beta&t=yIcUzrrjZai1a0YNFPxXk0kqtKylPJ7XKCXsDxPTfQE"
    },
    {
        name: "Facilitador do Curso de Operação de Informática Básica",
        institution: "Centro Universitário Una",
        year: 2022,
        description: "Certificação de facilitador no curso de operação de informática básica.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1762992000&v=beta&t=zTurN6GjmKYFHuKOiLyT18QsUrnTu_VAAac1rz56FcI",
        file: "https://media.licdn.com/dms/image/v2/D562DAQFUXysKWAYHUg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697635241826?e=1762293600&v=beta&t=3C1Y2zPMGcvXcTwNNeGf1DX5Dh7zqupikmax-CW-kE4"
    },
    {
        name: "Get Connected",
        institution: "Cisco Networking Academy",
        year: 2022,
        description: "Curso introdutório de redes e sistemas operacionais Windows.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1762992000&v=beta&t=gDzYkWH1X_w4gwhZJqATukCQXz1pEamtzywu8Xonuhs",
        file: "https://media.licdn.com/dms/image/v2/D4D2DAQHnXu5coYTXfA/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1697584968161?e=1762293600&v=beta&t=-rAXThOnOr1qfFjGjH-U8IeLDwVuYPjVlziLbMH_4TU"
    },
    {
        name: "Operação de Checkout",
        institution: "Supermercado Brasil",
        year: 2020,
        description: "Treinamento em operação de caixa e atendimento ao cliente.",
        img: "",
        file: "img/certificates_imgs/checkout.png"
    },
    {
        name: "Assiduidade — Exército Brasileiro",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Reconhecimento por assiduidade e disciplina exemplar.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQExH1wSx3J7Ag/company-logo_100_100/company-logo_100_100/0/1630567269629/exercitobrasileiro_logo?e=1762992000&v=beta&t=i_UT_gZemJyN0rYJMu-9m56EzIuXFJgW0DJX7qE2ejk",
        file: "https://media.licdn.com/dms/image/v2/D562DAQFb5z5Lqv0USQ/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1697635474444?e=1762293600&v=beta&t=J73HWyzyJPI-P8rT8ZWoolMvI4XWNJYitzK8zHVcQwg"
    },
    {
        name: "Honra ao Mérito — Exército Brasileiro",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Reconhecimento por destaque em desempenho e conduta.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQExH1wSx3J7Ag/company-logo_100_100/company-logo_100_100/0/1630567269629/exercitobrasileiro_logo?e=1762992000&v=beta&t=i_UT_gZemJyN0rYJMu-9m56EzIuXFJgW0DJX7qE2ejk",
        file: "img/certificates_imgs/merito.png"
    },
    {
        name: "XII Jornada de Foguetes da MOBFOG",
        institution: "OBAFOG, SAB e AEB ",
        year: 2017,
        description: "Participação na competição nacional de foguetes com medalha de bronze.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHx_2UUGSDX0w/company-logo_100_100/company-logo_100_100/0/1667305897462?e=1762992000&v=beta&t=63wLjXuYq5EQhvN4B8a_128dki4ePxTiSRt1lrLhfGE",
        file: "https://media.licdn.com/dms/image/v2/D562DAQFnDkp510D3rw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697635544545?e=1762293600&v=beta&t=EjFFoQ94ddWdp3L06pppYGJ_w09ZVA6rhQW-BnFB57E"
    },
    {
        name: "Especialista AutoCAD",
        institution: "Compuway",
        year: 2015,
        description: "Curso profissional de AutoCAD com práticas de modelagem e desenho técnico.",
        img: "img/certificates_imgs/autocad.jpg",
        file: "https://media.licdn.com/dms/image/v2/D562DAQEmLENpHAOJkA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697635567908?e=1762293600&v=beta&t=ZwisTsDBbRc7llPHYvlgbYhAQfMbhhWZMCbRlRrmI8k"
    },
    {
        name: "Programa Vamos Falar de Ética",
        institution: "JA Brasil",
        year: 2015,
        description: "Curso sobre valores éticos e responsabilidade social no ambiente profissional.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFyu-1Z2RRuLg/company-logo_100_100/company-logo_100_100/0/1659387742634?e=1762992000&v=beta&t=e0PxSQGYXm1-Cw32pvE_JPulVbOPu6MqP8-UsdC3B8k",
        file: "https://media.licdn.com/dms/image/v2/D562DAQGn016OzQvcqg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697635587877?e=1762293600&v=beta&t=4yMUjq1r4g55asDmCrNDC5c6kkbRYmR-q8k0rJOonHc"
    },
    {
        name: "Programa As Vantagens de Permanecer na Escola",
        institution: "JA Brasil",
        year: 2014,
        description: "Programa educacional sobre a importância da continuidade dos estudos.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFyu-1Z2RRuLg/company-logo_100_100/company-logo_100_100/0/1659387742634?e=1762992000&v=beta&t=e0PxSQGYXm1-Cw32pvE_JPulVbOPu6MqP8-UsdC3B8k",
        file: "https://media.licdn.com/dms/image/v2/D562DAQG2ROWawgl8Zg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697635612117?e=1762293600&v=beta&t=ZonJuoZV5J4KtynyO_7Mx9XTwtmroBRR7W_ame07p0o"
    }
];


certificates.forEach(cert => {
    document.querySelector(".certificates-container").insertAdjacentHTML('beforeend', `
    
        <div class="certificate-card fade-in">
            <h3>${cert.name}</h3>
            <p class="institution_certi"><strong>Instituição:</strong> ${cert.institution} <img class="img_icons" src="${cert.img}" alt=""></p>
            <p><strong>Ano:</strong> ${cert.year}</p>
            <p class="cert_desc">${cert.description}</p>
            <img class="certificate_img" src="${cert.file}" alt="">
        </div>

    `);
});






