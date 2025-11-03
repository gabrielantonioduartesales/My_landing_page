
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
    { name: 'Communication', icon: 'https://cdn-icons-png.flaticon.com/512/8103/8103854.png' },
    { name: 'Time Management', icon: 'https://cdn-icons-png.flaticon.com/512/201/201652.png' },
    { name: 'Teamwork', icon: 'https://cdn-icons-png.flaticon.com/512/4859/4859784.png' },
    { name: 'Creativity', icon: 'https://cdn-icons-png.flaticon.com/512/9439/9439709.png' },
    { name: 'Team Leadership', icon: 'https://cdn-icons-png.flaticon.com/512/4168/4168988.png' },
    { name: 'Instructional', icon: 'https://cdn-icons-png.flaticon.com/512/3471/3471600.png' },
    { name: 'Analysis', icon: 'https://cdn-icons-png.flaticon.com/512/3687/3687809.png' },
    { name: 'Flexibility', icon: 'https://cdn-icons-png.flaticon.com/512/5201/5201703.png' },
    { name: 'Willingness to Travel', icon: 'https://cdn-icons-png.flaticon.com/512/2060/2060284.png' },
    { name: 'Negotiation', icon: 'https://cdn-icons-png.flaticon.com/512/6002/6002984.png' },
    { name: 'Adaptability', icon: 'https://cdn-icons-png.flaticon.com/512/3316/3316286.png' },
    { name: 'Intellectual Curiosity', icon: 'https://cdn-icons-png.flaticon.com/512/6747/6747225.png' },
    { name: 'Agile Learning', icon: 'https://cdn-icons-png.flaticon.com/512/17324/17324171.png' }
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

populateTicker();



const experience = [
    {
        year: "2025 - Present",
        title: "Cisco Network Academy Instructor (Partner with Senac)",
        institution: "Cisco Network Academy",
        activities: [
            "In partnership with Senac Minas, I work as an instructor accredited by Cisco Networking Academy (NetAcad), with access to the official platform for creating and managing classes. This partnership allows me to teach courses in Networks, Cybersecurity, Hardware, and Programming, including preparatory training for certifications such as CCNA."
        ],
        side: "right",
        delay: 0,
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1763596800&v=beta&t=bzQRcF8IVlrzZsE1I5WG3CnhplTiNRsZdKfrcnreRWg"
    },
    {
        year: "2024 - Present",
        title: "IT Professor",
        institution: "Senac Minas",
        activities: [
            "Teaching hardware, computer assembly and maintenance:",
            "Windows and Linux, VirtualBox, VMware, and Proxmox;",
            "Software installation and use of Trello for team management;",
            "Use of multimeters, electronics tools, Arduinos, and 3D printers for maker projects.",
            "Teaching networks and Cisco network maintenance:",
            "Cisco Packet Tracer, Linux, Windows, Windows Server, aapanel, XAMPP;",
            "VMware Workstation, Proxmox, PFSense Firewall, and Fortinet;",
            "Network equipment: switches, access points, routers, racks, and patch panels.",
            "Software development, websites, and data analysis:",
            "Python, SQL Server, Pandas, Matplotlib, and Power BI;",
            "PostgreSQL, DBeaver, MariaDB, MySQL Server;",
            "Figma, Penpot, Framer, and Canva for prototyping;",
            "Requirements engineering and use of AI tools like ChatGPT, Lovable, N8N, DeepSeek;",
            "HTML, CSS, JavaScript, PHP, Node, SQL Server, and WordPress CMS."
        ],
        side: "left",
        delay: 1,
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1763596800&v=beta&t=jJuWfJSvEkFrhTb7YSLfmAQlTh6GN5J-AZKwzaXeL6A"
    },
    {
        year: "2024 - 2025",
        title: "Systems Analyst",
        institution: "Stefanini (clients: Vallourec and Zurich Seguros)",
        activities: [
            "At Zurich Seguros – Commercial Insurance IT team:",
            "Support for ERP I4PRO system (package application and liaison with I4PRO team);",
            "Use of SQL Server, DesktopRemote, PowerCenter, and Azure DevOps;",
            "Ticket management via WEX (I4PRO) and ServiceNow;",
            "Monthly closures and business/system analysis.",
            "At Vallourec/VSB client:",
            "Computer assembly and maintenance, software installation and configuration;",
            "Support for live meetings and user setup via Azure;",
            "Ticket management via ServiceAide."
        ],
        side: "right",
        delay: 2,
        img: "https://media.licdn.com/dms/image/v2/D560BAQGxw8ejZKpVTA/company-logo_100_100/company-logo_100_100/0/1689014804966/stefanini_logo?e=1763596800&v=beta&t=zqm51X0Q7bbVRS4WCGdoBuJH2dKLRtvF4vgdm5oL9B8"
    },
    {
        year: "2022 - 2024",
        title: "IT Technician",
        institution: "UNA - Centro Universitário UNA",
        activities: [
            "Assembly and maintenance of computers and peripherals;",
            "Installation and maintenance of software and support for live classes;",
            "Recording classes and supporting MEC visits;",
            "IP configuration and domain inclusion (Active Directory);",
            "Maintenance of telephone extensions and network devices;",
            "Ticket creation via ServiceNow;",
            "Collaboration with network analysts and programmers;",
            "Use of SharePoint CMS for internal management."
        ],
        side: "left",
        delay: 2,
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1763596800&v=beta&t=C9y0ibRIiyLBo5EggfEqrtYLa_Ox75cZTQgeOl4P8hE"
    },
    {
        year: "Nov 2021 (temporary Black Friday)",
        title: "Store Operator",
        institution: "Americanas S.A.",
        activities: [
            "Customer service and cashier operation;",
            "Stock control and merchandise replenishment;",
            "Working with sales targets and strategies."
        ],
        side: "right",
        delay: 3,
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQEoMTZW5hktPw/company-logo_100_100/company-logo_100_100/0/1688744936290/americanas_sa_logo?e=1763596800&v=beta&t=cZFInAytRgMEQwFvrLk2m2Be19lrd_xMJ-A655EXUEk"
    },
    {
        year: "Oct 2021 (temporary – end of year)",
        title: "General Services Assistant",
        institution: "Sartori Serviços / Gerdau Açominas",
        activities: [
            "PPE checklist and inspection of steel mill areas;",
            "Safety support during shutdown operations;",
            "Cleaning and organizing work areas;",
            "Inspection of overhead cranes and evacuation procedures."
        ],
        side: "left",
        delay: 4,
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQE5umfEkkCDpQ/company-logo_100_100/B4DZnDvvo1JEAU-/0/1759925704297?e=1763596800&v=beta&t=UhB2Y4KJrqHGpV5zgxFN_0U1pgjnQV_QpTCD2dy6m84"
    },
    {
        year: "Oct 2021 (temporary – end of year)",
        title: "Checkout Operator",
        institution: "Supermercado Brasil",
        activities: [
            "Customer service and stock control;",
            "Opening and closing cash registers;",
            "Reverse logistics and home deliveries;",
            "Shelf organization and support for sales department."
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
                <h2>Activities</h2>
                <ul>
                    ${ativivies}
                </ul>
            </div>
        </div>
    `);
});


const formation = [
    {
        year: "2025 - Ongoing (2026)",
        title: "Postgraduate Lato Sensu in Teaching in Technical Education",
        institution: "University Senac",
        disciplines: ["Ongoing course"],
        side: "right",
        delay: 1,
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHaxCRA92zMjQ/company-logo_100_100/company-logo_100_100/0/1713573963371/senacbrasil_logo?e=1763596800&v=beta&t=WWQZKThvXi5-1WL9jrCaVOTnihkYJuKqjWLKgd5MMns"
    },
    {
        year: "2025 - Ongoing (2026)",
        title: "MBA in Business Intelligence",
        institution: "University Descomplica",
        disciplines: [
            "Data Collection and Treatment (30h)",
            "Data Visualization (30h)",
            "Python (30h)",
            "Big Data Analytics (30h)",
            "Data Architecture and Modeling (30h)",
            "Business Strategy and Models (30h)",
            "Data Culture (30h)",
            "Data Governance (30h)"
        ],
        side: "left",
        delay: 2,
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQH1QLryW1IEFQ/company-logo_100_100/company-logo_100_100/0/1630552069493/faculdade_descomplica_logo?e=1763596800&v=beta&t=DiFaI3a_wrqFUK_hHxptbqnWycXreYzOABicjsF0-ZY"
    },
    {
        year: "2021 - 2024",
        title: "Bachelor's Degree in Systems Analysis and Development",
        institution: "Center University Unicesumar",
        disciplines: [
            "Computer Fundamentals and Architectures",
            "People Management and Team Development",
            "Programming and Algorithms 1 (C, Python)",
            "Programming and Algorithms 2 (C, Python)",
            "Interaction Design (Penpot, Figma...)",
            "Logic for Computing",
            "Software Engineering (Scrum, UML)",
            "Databases (PostgreSQL, SQL Server, MariaDB)",
            "Mathematics for Computing",
            "Operating Systems",
            "Sociocultural and Ethics Training 1",
            "Sociocultural and Ethics Training 2",
            "Data Structures 1 (C, Python)",
            "Data Structures 2 (C, Python)",
            "Programming 1 (Java)",
            "Programming 2 (Java)",
            "Programming 3 (Java)",
            "Business Processes (COBIT, ITIL, IT Governance)",
            "Special Topics (GitHub...)",
            "Entrepreneurship",
            "Project Management",
            "Go – Life Project",
            "Go – Opportunity Identification",
            "Go – Opportunity and Results"
        ],
        side: "right",
        delay: 3,
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHwFH100tDQrQ/company-logo_100_100/company-logo_100_100/0/1708013055513/unicesumaroficial_logo?e=1763596800&v=beta&t=wHAEsqTI7NSpE0EOstUF9yo-OZ-P6fEnOcUW6MvFUBY"
    },
    {
        year: "2022 - 2023",
        title: "Technical Course in Computer Science",
        institution: "Senac Minas",
        disciplines: [
            "Computer Assembly and Maintenance",
            "Hardware and Software Installation for Computers",
            "Integrator Project – Computer Support and Maintenance",
            "Installation and Maintenance of Local Computer Networks",
            "Installation, Configuration, and Monitoring of Operating Systems for Local Networks (Servers, Win Server, Ubuntu Server)",
            "Integrator Project – Computer Network Operation",
            "Software Development Planning and Analysis (Python)",
            "Data Analysis and Web Scraping (Python)",
            "Desktop and Mobile Application Coding, Maintenance, and Documentation",
            "Web Application Coding, Maintenance, and Documentation (Sites)",
            "Application Testing and Deployment",
            "Development and Organization of Website Structural Elements",
            "Manipulation and Optimization of Vector, Bitmap, and Navigation Visual Elements for Web",
            "Integrator Project – Desktop, Mobile, and Web Development"
        ],
        side: "left",
        delay: 4,
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1763596800&v=beta&t=jJuWfJSvEkFrhTb7YSLfmAQlTh6GN5J-AZKwzaXeL6A"
    },
    {
        year: "2016 - 2019",
        title: "Technical High School in Mechanics",
        institution: "Federal Institute of Minas Gerais IFMG",
        disciplines: [
            "High School integrated with technical course in mechanics",
            "Portuguese Language and Literature",
            "Mathematics",
            "Biology",
            "Physics",
            "Chemistry",
            "History",
            "Geography",
            "Philosophy",
            "Sociology",
            "Foreign Language English",
            "Art",
            "Physical Education",
            "Materials Technology",
            "Technical Drawing AutoCAD",
            "Automation",
            "Welding Processes",
            "Physics for Mechanics",
            "Computer Science"
        ],
        side: "right",
        delay: 5,
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
                <h2>Disciplines</h2>
                <ul>
                    ${disciplinasHTML}
                </ul>
            </div>
        </div>
    `);
});

const certificates = [
    {
        name: "Secure Development",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course on using code practices and checks to identify vulnerabilities through SonarQube.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk"
    },
    {
        name: "Design Thinking",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course focused on the Design Thinking methodology with emphasis on empathy, definition, ideation, and user-centered prototyping.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk"
    },
    {
        name: "Power BI",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Introductory course on using dashboards and data visualization in Power BI.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk"
    },
    {
        name: "ChatGPT Prompting",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Best practices for writing prompts, advanced techniques, and concepts of temperature and top-p.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk"
    },
    {
        name: "Prompt Creation - SAI APP",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on creating optimized AI prompts for the SAI APP application.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "Graphic Design Fundamentals",
        institution: "Fundação Bradesco",
        year: 2024,
        description: "Course on graphic design fundamentals and visual composition.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ"
    },
    {
        name: "Smart Time Management",
        institution: "Workover Academy",
        year: 2024,
        description: "Managing and prioritizing tasks, productivity, and personal focus.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "Strategic Negotiation",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on corporate negotiation techniques and strategies.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "Effective Negotiations",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on communication and persuasion techniques in negotiations.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "Scrum",
        institution: "Workover Academy",
        year: 2024,
        description: "Introductory course on Agile Scrum methodology, including its roles, artifacts, and events.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "TypeScript from Basic to Advanced",
        institution: "Workover Academy",
        year: 2024,
        description: "Comprehensive TypeScript course covering fundamentals, types, classes, and framework integration.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFf6UwQAo7bfA/company-logo_100_100/company-logo_100_100/0/1694958515717/workoveracademy_logo?e=1762992000&v=beta&t=iw46f3XDCwoGnUHlh3ArvA0m8x32Vcg_SLP_rI583PE"
    },
    {
        name: "Mindset",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course on growth mindset and professional behavior.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQFOPyOhO4wTTg/company-logo_100_100/company-logo_100_100/0/1719784126380/stefanini_brasil_logo?e=1762992000&v=beta&t=NGdYaIkHvL6YgAzd7E4zjERuKh0AUrQuY6Lp3N6Ihpk"
    },
    {
        name: "Data Analysis with Microsoft Power BI",
        institution: "BHS",
        year: 2023,
        description: "Course on creating interactive dashboards and reports in Power BI.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFIN_BXyw4dAQ/company-logo_100_100/company-logo_100_100/0/1657568147168/bhsoficial_logo?e=1762992000&v=beta&t=0QgmXxwt_zoVGCanMAS87W9DaZnWkE8BFiYRurTP0W0"
    },
    {
        name: "Python Instructor — Programming with Games",
        institution: "Centro Universitário Una",
        year: 2023,
        description: "Served as instructor in a Python game programming course.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1762992000&v=beta&t=zTurN6GjmKYFHuKOiLyT18QsUrnTu_VAAac1rz56FcI"
    },
    {
        name: "AWS Educate: Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        year: 2023,
        description: "Introduction to cloud computing with AWS Educate.",
        img: "https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_100_100/B4EZgOay6gHEAY-/0/1752588562343/amazon_web_services_logo?e=1762992000&v=beta&t=cTvB_H0qvjOVGLJ1KcdpU592UHsbLzfw6wPYPwluDFg"
    },
    {
        name: "Introduction to Data Analysis - Microsoft Power BI",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Introductory course on data analysis with Power BI.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ"
    },
    {
        name: "Information Technology Security",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Basic concepts of digital security, networks, and data protection.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQFOiaQvbDY3hQ/company-logo_100_100/company-logo_100_100/0/1630591657622/fundacaobradesco_logo?e=1762992000&v=beta&t=pji9RD2DERgsmsDeNgKEVK9gyZMeh7ogUZpZ6GjNXsQ"
    },
    {
        name: "Basic Computer Operations Facilitator",
        institution: "Centro Universitário Una",
        year: 2022,
        description: "Certification as a facilitator in basic computer operations course.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFx2XuglwyZEw/company-logo_100_100/company-logo_100_100/0/1633350538567?e=1762992000&v=beta&t=zTurN6GjmKYFHuKOiLyT18QsUrnTu_VAAac1rz56FcI"
    },
    {
        name: "Get Connected",
        institution: "Cisco Networking Academy",
        year: 2022,
        description: "Introductory course on networking and Windows operating systems.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQEkiQ8pB1hYow/company-logo_100_100/B4DZcSgOD1HMAU-/0/1748362125886/cisco_networking_academy1_logo?e=1762992000&v=beta&t=gDzYkWH1X_w4gwhZJqATukCQXz1pEamtzywu8Xonuhs"
    },
    {
        name: "Checkout Operation",
        institution: "Supermercado Brasil",
        year: 2020,
        description: "Training in cashier operation and customer service.",
        img: ""
    },
    {
        name: "Attendance — Brazilian Army",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Recognition for exemplary attendance and discipline.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQExH1wSx3J7Ag/company-logo_100_100/company-logo_100_100/0/1630567269629/exercitobrasileiro_logo?e=1762992000&v=beta&t=i_UT_gZemJyN0rYJMu-9m56EzIuXFJgW0DJX7qE2ejk"
    },
    {
        name: "Honors of Merit — Brazilian Army",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Recognition for outstanding performance and conduct.",
        img: "https://media.licdn.com/dms/image/v2/C4E0BAQExH1wSx3J7Ag/company-logo_100_100/company-logo_100_100/0/1630567269629/exercitobrasileiro_logo?e=1762992000&v=beta&t=i_UT_gZemJyN0rYJMu-9m56EzIuXFJgW0DJX7qE2ejk"
    },
    {
        name: "XII MOBFOG Rocket Journey",
        institution: "OBAFOG, SAB e AEB ",
        year: 2017,
        description: "Participation in the national rocket competition with bronze medal.",
        img: "https://media.licdn.com/dms/image/v2/D4D0BAQHx_2UUGSDX0w/company-logo_100_100/company-logo_100_100/0/1667305897462?e=1762992000&v=beta&t=63wLjXuYq5EQhvN4B8a_128dki4ePxTiSRt1lrLhfGE"
    },
    {
        name: "AutoCAD Specialist",
        institution: "Compuway",
        year: 2015,
        description: "Professional AutoCAD course with modeling and technical drawing practices.",
        img: "img/certificates_imgs/autocad.jpg"
    },
    {
        name: "Let's Talk Ethics Program",
        institution: "JA Brasil",
        year: 2015,
        description: "Course on ethical values and social responsibility in the professional environment.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFyu-1Z2RRuLg/company-logo_100_100/company-logo_100_100/0/1659387742634?e=1762992000&v=beta&t=e0PxSQGYXm1-Cw32pvE_JPulVbOPu6MqP8-UsdC3B8k"
    },
    {
        name: "The Advantages of Staying in School Program",
        institution: "JA Brasil",
        year: 2014,
        description: "Educational program on the importance of continuing studies.",
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQFyu-1Z2RRuLg/company-logo_100_100/company-logo_100_100/0/1659387742634?e=1762992000&v=beta&t=e0PxSQGYXm1-Cw32pvE_JPulVbOPu6MqP8-UsdC3B8k"
    }
];


certificates.forEach(cert => {
    document.querySelector(".certificates-container").insertAdjacentHTML('beforeend', `
    
        <div class="certificate-card fade-in">
            <h3>${cert.name}</h3>
            <p class="institution_certi"><strong>Institution:</strong> ${cert.institution} <img class="img_icons" src="${cert.img}" alt=""></p>
            <p><strong>Year:</strong> ${cert.year}</p>
            <p class="cert_desc">${cert.description}</p>
        </div>

    `);
});

feather.replace();