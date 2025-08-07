const translations = {
  it: {
    home: "Home",
    contacts: "Contatti",
    title: "Il Mio Portfolio",
    typewriter: "Designer. Developer. Innovatore.",
    who: "Chi Sono",
    whoText: "Sono uno sviluppatore creativo con la passione per il design moderno e funzionale. Realizzo esperienze digitali di impatto.",
    projects: "Progetti Recenti",
    project1: "🌐 Sito personale",
    project2: "📊 Dashboard interattiva",
    contactBtn: "Contattami",
    footer: "© 2025 - Biagio Carannante",
    contactTitle: "Contattami",
    labelName: "Nome",
    labelMessage: "Messaggio",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber",
    alertFill: "Per favore compila tutti i campi."
  },
  en: {
    home: "Home",
    contacts: "Contacts",
    title: "My Portfolio",
    typewriter: "Designer. Developer. Innovator.",
    who: "About Me",
    whoText: "I am a creative developer passionate about modern and functional design. I create impactful digital experiences.",
    projects: "Recent Projects",
    project1: "🌐 Personal Website",
    project2: "📊 Interactive Dashboard",
    contactBtn: "Contact Me",
    footer: "© 2025 - Biagio Carannante",
    contactTitle: "Contact Me",
    labelName: "Name",
    labelMessage: "Message",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber",
    alertFill: "Please fill all fields."
  },
  el: {
    home: "Αρχική",
    contacts: "Επικοινωνία",
    title: "Το Portfolio μου",
    typewriter: "Σχεδιαστής. Προγραμματιστής. Καινοτόμος.",
    who: "Ποιος Είμαι",
    whoText: "Είμαι δημιουργικός προγραμματιστής με πάθος για μοντέρνο και λειτουργικό design. Δημιουργώ εντυπωσιακές ψηφιακές εμπειρίες.",
    projects: "Πρόσφατα Έργα",
    project1: "🌐 Προσωπικός ιστότοπος",
    project2: "📊 Διαδραστικός πίνακας ελέγχου",
    contactBtn: "Επικοινωνήστε μαζί μου",
    footer: "© 2025 - Biagio Carannante",
    contactTitle: "Επικοινωνία",
    labelName: "Όνομα",
    labelMessage: "Μήνυμα",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber",
    alertFill: "Παρακαλώ συμπληρώστε όλα τα πεδία."
  }
};

function translatePage(lang) {
  const t = translations[lang] || translations.en;

  // Navbar
  const homeLink = document.querySelector('a[href="index.html"]');
  if(homeLink) homeLink.textContent = t.home;

  // Cerca in modo più robusto il link Contatti
  const contactLink = Array.from(document.querySelectorAll(".navbar-nav a")).find(a => {
    const href = a.getAttribute("href");
    return href && href.endsWith("contatti.html");
  });
  if(contactLink) contactLink.textContent = t.contacts;

  // Footer
  const footerP = document.querySelector("footer p");
  if (footerP) footerP.textContent = t.footer;

  // Index page
  if (document.querySelector("header h1")) {
    const headerH1 = document.querySelector("header h1");
    headerH1.textContent = t.title;

    const typewriterTextEl = document.getElementById("typewriter-text");
    if(typewriterTextEl){
      typewriterTextEl.textContent = "";
      typeWriterEffect(t.typewriter, typewriterTextEl);
    }

    const whoH2 = document.querySelector("section:nth-of-type(1) h2");
    if(whoH2) whoH2.textContent = t.who;

    const whoP = document.querySelector("section:nth-of-type(1) p");
    if(whoP) whoP.textContent = t.whoText;

    const projectsH2 = document.querySelector("section:nth-of-type(2) h2");
    if(projectsH2) projectsH2.textContent = t.projects;

    const projectItems = document.querySelectorAll("section:nth-of-type(2) .list-group-item");
    if(projectItems.length >= 2){
      projectItems[0].textContent = t.project1;
      projectItems[1].textContent = t.project2;
    }

    const contactBtn = document.querySelector("section.text-center a.btn-custom");
    if(contactBtn) contactBtn.textContent = t.contactBtn;
  }

  // Contacts page
  if(document.querySelector("form#contact-form")){
    const title = document.querySelector("h1.text-center");
    if(title) title.textContent = t.contactTitle;

    const labelName = document.querySelector("label[for='name']");
    if(labelName) labelName.textContent = t.labelName;

    const labelMessage = document.querySelector("label[for='message']");
    if(labelMessage) labelMessage.textContent = t.labelMessage;

    const btnWhats = document.querySelector("button.btn-whatsapp");
    if(btnWhats){
      while(btnWhats.firstChild) btnWhats.removeChild(btnWhats.firstChild);

      const icon = document.createElement("i");
      icon.className = "bi bi-whatsapp";
      icon.style.fontSize = "1.2rem";
      btnWhats.appendChild(icon);
      btnWhats.appendChild(document.createTextNode(" " + t.btnWhatsApp));
    }

    const btnViber = document.querySelector("button.btn-viber");
    if(btnViber){
      while(btnViber.firstChild) btnViber.removeChild(btnViber.firstChild);

      const icon = document.createElement("i");
      icon.className = "bi bi-telephone-fill";
      icon.style.fontSize = "1.2rem";
      btnViber.appendChild(icon);
      btnViber.appendChild(document.createTextNode(" " + t.btnViber));
    }
  }

  localStorage.setItem("lang", lang);
}

function typeWriterEffect(text, element, i = 0) {
  if(i < text.length){
    element.appendChild(document.createTextNode(text.charAt(i)));
    setTimeout(() => typeWriterEffect(text, element, i+1), 60);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  translatePage(savedLang);

  const navList = document.querySelector(".navbar-nav");
  if(navList && !document.getElementById("lang-dropdown")){
    const li = document.createElement("li");
    li.className = "nav-item dropdown";
    li.id = "lang-dropdown";

    // Crea il link del dropdown
    const a = document.createElement("a");
    a.className = "nav-link dropdown-toggle";
    a.href = "#";
    a.setAttribute("role", "button");
    a.setAttribute("data-bs-toggle", "dropdown");
    a.setAttribute("aria-expanded", "false");
    a.style.cursor = "pointer";
    a.textContent = savedLang.toUpperCase();

    // Crea il menu dropdown
    const ul = document.createElement("ul");
    ul.className = "dropdown-menu dropdown-menu-end";

    ["it","en","el"].forEach(lang => {
      const liOpt = document.createElement("li");
      const aOpt = document.createElement("a");
      aOpt.className = "dropdown-item";
      aOpt.href = "#";
      aOpt.dataset.lang = lang;
      aOpt.textContent = lang.toUpperCase();
      aOpt.addEventListener("click", (e) => {
        e.preventDefault();
        translatePage(lang);
        a.textContent = lang.toUpperCase();
      });
      liOpt.appendChild(aOpt);
      ul.appendChild(liOpt);
    });

    li.appendChild(a);
    li.appendChild(ul);
    navList.appendChild(li);
  }
});




window.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // es. "index.html" o "contatti.html"
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    // Ottieni href solo filename, senza path o query string
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage || (linkPage === "index.html" && (currentPage === "" || currentPage === "/"))) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
});
