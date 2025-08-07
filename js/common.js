const translations = {
  en: {
    navHome: "Home",
    navContacts: "Contacts",
    headerTitle: "My Portfolio",
    typewriter: "Designer. Developer. Innovator.",
    whoIAmTitle: "Who I Am",
    whoIAmText: "I am a creative developer passionate about modern and functional design. I create impactful digital experiences.",
    recentProjectsTitle: "Recent Projects",
    project1: "🌐 Personal Website",
    project2: "📊 Interactive Dashboard",
    contactButton: "Contact Me",
    footerText: "© 2025 - Biagio Carannante",
    contactTitle: "Contact Me",
    contactLabelName: "Name",
    contactLabelMessage: "Message",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber"
  },
  it: {
    navHome: "Home",
    navContacts: "Contatti",
    headerTitle: "Il Mio Portfolio",
    typewriter: "Designer. Developer. Innovatore.",
    whoIAmTitle: "Chi Sono",
    whoIAmText: "Sono uno sviluppatore creativo con la passione per il design moderno e funzionale. Realizzo esperienze digitali di impatto.",
    recentProjectsTitle: "Progetti Recenti",
    project1: "🌐 Sito personale",
    project2: "📊 Dashboard interattiva",
    contactButton: "Contattami",
    footerText: "© 2025 - Biagio Carannante",
    contactTitle: "Contattami",
    contactLabelName: "Nome",
    contactLabelMessage: "Messaggio",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber"
  },
  el: {
    navHome: "Αρχική",
    navContacts: "Επικοινωνία",
    headerTitle: "Το Portfolio μου",
    typewriter: "Σχεδιαστής. Προγραμματιστής. Καινοτόμος.",
    whoIAmTitle: "Ποιος Είμαι",
    whoIAmText: "Είμαι ένας δημιουργικός προγραμματιστής με πάθος για μοντέρνο και λειτουργικό design. Δημιουργώ εντυπωσιακές ψηφιακές εμπειρίες.",
    recentProjectsTitle: "Πρόσφατα Έργα",
    project1: "🌐 Προσωπικός Ιστότοπος",
    project2: "📊 Διαδραστικός Πίνακας Ελέγχου",
    contactButton: "Επικοινωνήστε μαζί μου",
    footerText: "© 2025 - Biagio Carannante",
    contactTitle: "Επικοινωνήστε μαζί μου",
    contactLabelName: "Όνομα",
    contactLabelMessage: "Μήνυμα",
    btnWhatsApp: "WhatsApp",
    btnViber: "Viber"
  }
};

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function typeWriterEffect(text, target, speed = 60) {
  clearChildren(target);
  let i = 0;

  function type() {
    if (i < text.length) {
      const charNode = document.createTextNode(text.charAt(i));
      target.appendChild(charNode);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function translatePage(lang) {
  const t = translations[lang] || translations["en"];
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "contatti.html") {
    // Traduci pagina contatti

    // Titolo
    const title = document.querySelector("h1.text-center");
    if (title) title.textContent = t.contactTitle;

    // Label nome
    const labelName = document.querySelector("label[for='name']");
    if (labelName) labelName.textContent = t.contactLabelName;

    // Label messaggio
    const labelMsg = document.querySelector("label[for='message']");
    if (labelMsg) labelMsg.textContent = t.contactLabelMessage;

    // Pulsanti WhatsApp e Viber (testo senza toccare icone)
    const btnWhatsApp = document.querySelector(".btn-whatsapp");
    if (btnWhatsApp) {
      // Lascio l'icona, rimuovo solo testo (nodi testo)
      btnWhatsApp.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) n.textContent = "";
      });
      btnWhatsApp.appendChild(document.createTextNode(t.btnWhatsApp));
    }

    const btnViber = document.querySelector(".btn-viber");
    if (btnViber) {
      btnViber.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) n.textContent = "";
      });
      btnViber.appendChild(document.createTextNode(t.btnViber));
    }

    // Footer
    const footer = document.querySelector("footer p");
    if (footer) footer.textContent = t.footerText;

  } else {
    // Traduci homepage e altre pagine

    // Nav
    const navHome = document.querySelector('a.nav-link[href*="index.html"]');
    const navContacts = document.querySelector('a.nav-link[href*="contatti.html"]');
    if (navHome) navHome.textContent = t.navHome;
    if (navContacts) navContacts.textContent = t.navContacts;

    // Header
    const headerTitle = document.querySelector("header h1");
    if (headerTitle) headerTitle.textContent = t.headerTitle;

    // Typewriter
    const typewriterTextEl = document.getElementById("typewriter-text");
    if (typewriterTextEl) {
      typeWriterEffect(t.typewriter, typewriterTextEl);
    }

    // Sections - Chi Sono
    const whoIAmTitle = document.querySelector("main section:nth-of-type(1) h2");
    if (whoIAmTitle) whoIAmTitle.textContent = t.whoIAmTitle;

    const whoIAmText = document.querySelector("main section:nth-of-type(1) p");
    if (whoIAmText) whoIAmText.textContent = t.whoIAmText;

    // Recent Projects Section
    const recentProjectsTitle = document.querySelector("main section:nth-of-type(2) h2");
    if (recentProjectsTitle) recentProjectsTitle.textContent = t.recentProjectsTitle;

    const projects = document.querySelectorAll("main section:nth-of-type(2) .list-group-item");
    if (projects.length >= 2) {
      projects[0].textContent = t.project1;
      projects[1].textContent = t.project2;
    }

    // Contact button
    const contactBtn = document.querySelector("main a.btn-custom");
    if (contactBtn) contactBtn.textContent = t.contactButton;

    // Footer
    const footer = document.querySelector("footer p");
    if (footer) footer.textContent = t.footerText;
  }
}

function saveLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
}

function loadLanguage() {
  return localStorage.getItem("siteLanguage") || "en";
}

function setLanguage(lang) {
  saveLanguage(lang);
  translatePage(lang);
  const selector = document.getElementById("language-selector");
  if (selector) selector.value = lang;
}

window.addEventListener("DOMContentLoaded", () => {
  // Inserisco dropdown lingua in navbar (assumendo esista <nav>)
  const navContainer = document.querySelector(".custom-navbar .container");
  if (navContainer && !document.getElementById("language-selector")) {
    const wrapper = document.createElement("div");
    wrapper.style.marginLeft = "1rem";

    const select = document.createElement("select");
    select.id = "language-selector";
    select.style.background = "transparent";
    select.style.color = "white";
    select.style.border = "1px solid white";
    select.style.borderRadius = "4px";
    select.style.padding = "2px 8px";
    select.style.fontWeight = "600";
    select.style.fontSize = "0.9rem";
    select.style.cursor = "pointer";

    const options = [
      { val: "en", label: "EN" },
      { val: "it", label: "IT" },
      { val: "el", label: "EL" },
    ];

    options.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.val;
      option.textContent = opt.label;
      select.appendChild(option);
    });

    wrapper.appendChild(select);
    navContainer.appendChild(wrapper);

    select.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // Carica lingua salvata o default EN
  const lang = loadLanguage();
  setLanguage(lang);
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
