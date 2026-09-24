const menuButton = document.querySelector(".Titletgl");
const menu = document.querySelector(".Menubtn");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const skills = [
    { 
        name: "CSharp", 
        desc: "Basic Programming using Unreal, Unity, and Godot Game Engines", 
        icon: '<i class="devicon-csharp-plain"></i>' 
    },
    { 
        name: "C++", 
        desc: "Basic Programming using C++", 
        icon: '<i class="devicon-cplusplus-plain"></i>' 
    },
    { 
        name: "Video Editing", 
        desc: "Intermediate Video Editing using DaVinci Resolve", 
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>' 
    },
    { 
        name: "Figma", 
        desc: "Basic UI/UX Design", 
        icon: '<i class="devicon-figma-plain"></i>' 
    },
    { 
        name: "Canva", 
        desc: "Intermediate Design using Canva", 
        icon: '<i class="devicon-canva-plain"></i>' 
    },
];

const projects = [
    {
        title: "Portofolio Web",
        description: "Making my First Portos Web Using Html, css, and Js. This is the web.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ushanka73/Ushk"
    },
    {
        title: "Test Game",
        description: "Simple 2D game for my first game project.",
        tech: ["C#", "GDscript"],
        link: "https://github.com/ushanka73/Game-Test5"
    },
    {
        title: "My Murai (W.I.P)",
        description: "Management and Disease detection and recommendation system based on mobile platform using YOLOv8 and XGBoost AI",
        tech: ["Python"],
        link: "#"
    }
];

const skillContainer = document.getElementById("Skillsgrid");

function createSkillCard(skill) {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    
    const icon = document.createElement("div");
    icon.classList.add("skill-icon");
    
    // UBAH DI SINI: Dari textContent menjadi innerHTML
    icon.innerHTML = skill.icon; 
    
    const title = document.createElement("h3");
    title.textContent = skill.name;
    
    const desc = document.createElement("p");
    desc.textContent = skill.desc;
    
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);
    return card;
}

if (skillContainer) {
    skills.forEach(skill => {
        const card = createSkillCard(skill);
        skillContainer.appendChild(card);
    });
}

const projectContainer = document.getElementById("Projectsgrids");

function createProjectCard(project) {
    const card = document.createElement("article");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const techContainer = document.createElement("div");
    techContainer.classList.add("project-tech");
    project.tech.forEach(tech => {
        const techItem = document.createElement("span");
        techItem.textContent = tech;
        techContainer.appendChild(techItem);
    });

    const button = document.createElement("a");
    button.textContent = "Links ->";
    button.href = project.link;
    button.classList.add("project-link");

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techContainer);
    card.appendChild(button);

    return card;
}

if (projectContainer) {
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectContainer.appendChild(card);
    });
}

const revealElements = document.querySelectorAll(
    ".Profilecard, .Aboutcard-inline, .InfoCard, .SkillsSection, .Projects, .Contactcard"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

const header = document.querySelector(".Header");
window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("click", (event) => {
    if (!menuButton || !menu) return;
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);
    if (!clickedInsideMenu && !clickedButton) {
        menu.classList.remove("active");
    }
});
