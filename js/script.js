AOS.init({
  duration: 600,
  easing: "ease-out-quad",
  once: false,
  mirror: true,
  offset: 60,
});

const progressBars = document.querySelectorAll(".progress-bar[data-width]");
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const targetWidth = entry.target.getAttribute("data-width");
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.width = targetWidth + "%";
        }, 200);
      } else {
        entry.target.style.width = "0%";
      }
    });
  },
  { threshold: 0.3 },
);
progressBars.forEach((bar) => progressObserver.observe(bar));

const themeBtn = document.querySelector(".theme-btn");

function applyTheme(dark) {
  document.body.classList.toggle("dark-mode", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

themeBtn.addEventListener("click", () => {
  applyTheme(!document.body.classList.contains("dark-mode"));
});

const saved = localStorage.getItem("theme");
if (
  saved === "dark" ||
  (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  applyTheme(true);
}

const translations = {
  pageTitle: {
    pt: "Wanny Barreto Almeida: Mapa de Carreira",
    en: "Wanny Barreto Almeida: Career Map",
  },

  jobTitle: { pt: "Desenvolvedora Full Stack", en: "Full Stack Developer" },

  sectionAbout: { pt: "Prazer em Conhecer", en: "Nice to Meet You" },
  aboutText: {
    pt: "Faço faculdade de análise e desenvolvimento de sistemas e sou integrante do Instituto PROA, estou aprimorando minhas competências teóricas e técnicas. Além disso, utilizo os finais de semana para estudar automação pelo n8n. Meu objetivo é aprender e aplicar na prática todo esse conhecimento. Tenho grande interesse na área de Análise de Dados e bastante curiosidade pelo setor de Segurança da Informação, sempre valorizando novas experiências e aprendizados. Já atuei e tenho experiência na área de análise de dados com o sistema Databricks e Tableau.",
    en: "I am a Systems Analysis and Development student and a member of Instituto PROA, constantly enhancing my theoretical and technical skills. Additionally, I dedicate my weekends to studying automation with n8n. My goal is to learn and put all of this knowledge into practice. I have a strong interest in Data Analysis and a keen curiosity about the Information Security sector, always valuing new experiences and continuous learning. I already have experience working in data analysis using Databricks and Tableau.",},
  btnCV: { pt: "Baixar o meu CV", en: "Download my CV" },

  sectionCareer: { pt: "Mapa de Carreira", en: "Career Map" },

  titleJunior: { pt: "Desenvolvedora Junior", en: "Junior Developer" },
  titlePleno: { pt: "Desenvolvedora Pleno", en: "Mid-level Developer" },
  titleSenior: { pt: "Desenvolvedora Senior", en: "Senior Developer" },

  headingSoft: { pt: "Soft Skills exigidas:", en: "Required Soft Skills:" },
  headingRoadmap: { pt: "Roadmap de Aprendizado:", en: "Learning Roadmap:" },

  descJunior: {
    pt: "Meu foco atual é estruturar uma base sólida de conhecimentos teóricos, aprimorando minhas competências a cada projeto. Busco exercer minha função com cada vez mais autonomia e responsabilidade, sem deixar de lado o espírito colaborativo. Tenho uma enorme vontade de aprender e estou constantemente me atualizando para acompanhar as demandas do mercado e evoluir profissionalmente.",
    en: "My current focus is on building a solid foundation of theoretical knowledge, improving my skills with each project. I strive to perform my role with increasing autonomy and responsibility, without neglecting a collaborative spirit. I have a strong desire to learn and am constantly updating myself to keep up with market demands and evolve professionally.",
  },
  descPleno: {
    pt: "Assumindo maior autonomia na condução de estudos e participando ativamente nas decisões técnicas e estratégicas da área. Busco traduzir grandes volumes de dados em insights acionáveis, entregando relatórios, dashboards e análises preditivas com máxima precisão para apoiar o crescimento do negócio.",
    en: "Taking on greater autonomy in conducting studies and actively participating in the technical and strategic decisions of the area. I seek to translate large volumes of data into actionable insights, delivering reports, dashboards, and predictive analyses with maximum precision to support business growth.",
  },
  descSenior: {
    pt: "Meu propósito é atuar de forma estratégica na definição e evolução dos padrões de arquitetura e modelagem de dados, garantindo escalabilidade e confiança nas informações. Dedico-me a orientar e mentorar profissionais em desenvolvimento, fortalecendo a cultura analítica do time, além de apoiar as tomadas de decisões técnicas e de negócio mais complexas, sempre fundamentadas em dados sólidos e no contexto macro da organização.",
    en: "My purpose is to act strategically in defining and evolving data architecture and modeling standards, ensuring scalability and reliability in information. I dedicate myself to guiding and mentoring developing professionals, strengthening the team's analytical culture, and supporting the most complex technical and business decision-making, always based on solid data and the organization's macro context.",
  },
  softJunior: {
    pt: [
      "Boa comunicação para trabalhar em equipe e entender demandas",
      "Proatividade para buscar soluções e aprender constantemente",
      "Organização e responsabilidade com prazos",
      "Capacidade de receber feedback e evoluir rapidamente",
    ],
    en: [
      "Good communication to work in teams and understand requirements",
      "Proactivity to seek solutions and keep learning",
      "Organization and accountability with deadlines",
      "Ability to receive feedback and grow quickly",
    ],
  },
  softPleno: {
    pt: [
      "Autonomia na resolução de problemas",
      "Boa comunicação técnica com o time",
      "Pensamento crítico e tomada de decisão",
      "Colaboração e mentoria de desenvolvedores juniores",
    ],
    en: [
      "Autonomy in problem-solving",
      "Strong technical communication with the team",
      "Critical thinking and decision-making",
      "Collaboration and mentoring of junior developers",
    ],
  },
  softSenior: {
    pt: [
      "Liderança técnica e tomada de decisão",
      "Capacidade de mentoria e desenvolvimento de equipe",
      "Visão estratégica de produto e tecnologia",
      "Comunicação clara com áreas técnicas e não técnicas",
    ],
    en: [
      "Technical leadership and decision-making",
      "Ability to mentor and develop the team",
      "Strategic vision of product and technology",
      "Clear communication with both technical and non-technical areas",
    ],
  },

  sectionSkills: { pt: "Soft e Hard Skills", en: "Soft & Hard Skills" },
  skillsSubtitle: {
    pt: "Afinidade com as seguintes tecnologias e técnicas:",
    en: "Proficiency with the following technologies and techniques:",
  },
  catFrontend: { pt: "Frontend", en: "Frontend" },
  catBackend: { pt: "Backend", en: "Backend" },
  catDB: { pt: "Banco de Dados", en: "Databases" },
  catOther: { pt: "Outras", en: "Other" },
  sectionLang: { pt: "Idiomas", en: "Languages" },
  langPT: { pt: "Português", en: "Portuguese" },
  langEN: { pt: "Inglês", en: "English" },
  langES: { pt: "Espanhol", en: "Spanish" },
  levelNative: { pt: "(Nativo)", en: "(Native)" },
  levelInter: { pt: "(Intermediário)", en: "(Intermediate)" },
  levelBasic: { pt: "(Básico)", en: "(Basic)" },
};

const textMap = [
  { sel: ".title", key: "jobTitle" },
  { sel: ".summary-section .resume-section-title", key: "sectionAbout" },
  { sel: ".summary-section .resume-section-content p", key: "aboutText" },
  { sel: ".btn", key: "btnCV" },
  { sel: ".experience-section .resume-section-title", key: "sectionCareer" },
  { sel: ".skills-section .resume-section-title", key: "sectionSkills" },
  { sel: ".skills-section > p", key: "skillsSubtitle" },
  { sel: ".language-section .resume-section-title", key: "sectionLang" },
];

const badgeKeys = [
  {
    en: [
      "Programming Logic",
      "HTML5/CSS3",
      "JavaScript",
      "Data Analysis",
    ],
  },
  {
    en: [
      "HTML5/CSS3",
      "JavaScript",
      "Python/Flask",
      "MySQL",
      "Data Analyst and Data Storytelling",
    ],
  },
  {
    en: [
      "Data Engineering",
      "Machine Learning",
      "MySQL/PostgreSQL",
      "Business Intelligence (BI)",
      "Data Storytelling",
      "Business Domain",
      "Leadership",
    ],
  },
];

const badgeOriginals = [];
document.querySelectorAll(".resume-timeline-item").forEach((item, i) => {
  const badges = item.querySelectorAll(".list-inline .badge");
  badgeOriginals[i] = Array.from(badges).map((b) => b.textContent.trim());
});

const timelineItems = document.querySelectorAll(".resume-timeline-item");
const timelineKeys = [
  { title: "titleJunior", desc: "descJunior", soft: "softJunior" },
  { title: "titlePleno", desc: "descPleno", soft: "softPleno" },
  { title: "titleSenior", desc: "descSenior", soft: "softSenior" },
];

const skillsCats = document.querySelectorAll(".resume-skills-cat");
const skillsCatKeys = ["catFrontend", "catBackend", "catDB", "catOther"];

const langItems = [
  { nameKey: "langPT", levelKey: "levelNative" },
  { nameKey: "langEN", levelKey: "levelInter" },
  { nameKey: "langES", levelKey: "levelBasic" },
];

const softHeadings = document.querySelectorAll(
  ".resume-timeline-item-desc-heading:first-of-type",
);

let currentLang = localStorage.getItem("lang") || "pt";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelector(".lang-btn").textContent = lang === "pt" ? "EN" : "PT";

  document.title = translations.pageTitle[lang];

  textMap.forEach(({ sel, key }) => {
    const el = document.querySelector(sel);
    if (el && translations[key]) el.textContent = translations[key][lang];
  });

  const cvBtn = document.getElementById("cv-btn");
  if (cvBtn) {
    cvBtn.href = "assets/Curriculo.docx";
  }

  timelineItems.forEach((item, i) => {
    const keys = timelineKeys[i];
    if (!keys) return;

    const titleEl = item.querySelector(".resume-position-title");
    if (titleEl) {
      titleEl.firstChild.textContent = translations[keys.title][lang];
    }

    const descEl = item.querySelector(".resume-timeline-item-desc > p");
    if (descEl) descEl.textContent = translations[keys.desc][lang];

    const headings = item.querySelectorAll(
      ".resume-timeline-item-desc-heading",
    );

    if (headings[0])
      headings[0].textContent =
        lang === "pt" ? "Soft Skills exigidas:" : "Required Soft Skills:";

    if (headings[1])
      headings[1].textContent =
        lang === "pt" ? "Roadmap de Aprendizado:" : "Learning Roadmap:";

    const softList = item.querySelectorAll(
      ".resume-timeline-item-desc > ul li",
    );

    const softArr = translations[keys.soft][lang];
    softList.forEach((li, j) => {
      if (softArr[j]) li.textContent = softArr[j];
    });

    const badges = item.querySelectorAll(".list-inline-item .badge");
    const enBadges = badgeKeys[i]?.en;
    const ptBadges = badgeOriginals[i];
    badges.forEach((badge, j) => {
      if (lang === "en" && enBadges && enBadges[j])
        badge.textContent = enBadges[j];
      else if (lang === "pt" && ptBadges && ptBadges[j])
        badge.textContent = ptBadges[j];
    });
  });

  skillsCats.forEach((cat, i) => {
    if (skillsCatKeys[i])
      cat.textContent = translations[skillsCatKeys[i]][lang];
  });

  const langListItems = document.querySelectorAll(".resume-lang-list li");
  langListItems.forEach((li, i) => {
    const map = langItems[i];
    if (!map) return;

    const nameEl = li.querySelector(".resume-lang-name");
    const levelEl = li.querySelector("small");
    if (nameEl) nameEl.textContent = translations[map.nameKey][lang];
    if (levelEl) levelEl.textContent = translations[map.levelKey][lang];
  });

  document.head.appendChild(style);
}

document.querySelector(".lang-btn").addEventListener("click", () => {
  applyLang(currentLang === "pt" ? "en" : "pt");
});

applyLang(currentLang);