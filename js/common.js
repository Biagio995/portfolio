const translations = {
  en: {
    navBrand: "My Portfolio",
    navHome: "Home",
    navContacts: "Contacts",
    headerTitle: "My Portfolio",
    typewriter: "Designer. Developer. Innovator.",
    whoIAmTitle: "About Me",
    whoIAmText: "I am a creative developer with passion for modern and functional design. I create impactful digital experiences.",
    recentProjectsTitle: "Recent Projects",
    project1: "🌐 Personal website",
    project2: "📊 Interactive dashboard",
    contactButton: "Contact Me",
    footerText: "© 2025 - Biagio Carannante",
    name: "Name",
    message: "Message",
    contactNameForm: "Contact Me"
  },
  it: {
    navBrand: "Il Mio Portfolio",
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
    name: "Nome",
    message: "Messaggio",
    contactNameForm: "Contattami"
  },
  el: {
    navBrand: "Το Portfolio μου",
    navHome: "Αρχική",
    navContacts: "Επικοινωνία",
    headerTitle: "Το Portfolio μου",
    typewriter: "Σχεδιαστής. Προγραμματιστής. Καινοτόμος.",
    whoIAmTitle: "Λίγα λόγια για μένα",
    whoIAmText: "Είμαι ένας δημιουργικός προγραμματιστής με πάθος για μοντέρνο και λειτουργικό σχεδιασμό. Δημιουργώ ψηφιακές εμπειρίες με αντίκτυπο.",
    recentProjectsTitle: "Πρόσφατα Έργα",
    project1: "🌐 Προσωπικός ιστότοπος",
    project2: "📊 Διαδραστικός πίνακας ελέγχου",
    contactButton: "Επικοινωνήστε μαζί μου",
    footerText: "© 2025 - Biagio Carannante",
    name: "Όνομα",
    message: "Μήνυμα",
    contactNameForm: "Επικοινωνήστε μαζί μου"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
let typingTimeout;
let isTyping = false;

function typeWriterEffect(text, element, i = 0) {
  if (isTyping) return;
  isTyping = true;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.appendChild(document.createTextNode(text.charAt(i)));
      i++;
      typingTimeout = setTimeout(type, 60);
    } else {
      isTyping = false;
    }
  }

  type();
}

function translatePage(lang) {
  const t = translations[lang] || translations["en"];

  // Brand
  const navBrand = document.querySelector(".navbar-brand");
  if (navBrand) navBrand.textContent = t.navBrand;

  // Navbar links tramite ID
  const navHome = document.getElementById("nav-home");
  if (navHome) navHome.textContent = t.navHome;

  const navContacts = document.getElementById("nav-contacts");
  if (navContacts) navContacts.textContent = t.navContacts;

  // Labels form
  const labelName = document.querySelector("label[for='name']");
  const labelMessage = document.querySelector("label[for='message']");
  if (labelName) labelName.textContent = t.name;
  if (labelMessage) labelMessage.textContent = t.message;

  // Titolo header
  const headerTitle = document.querySelector("header h1");
  if (headerTitle) headerTitle.textContent = t.headerTitle;

  // Effetto macchina da scrivere
  const typewriterTextEl = document.getElementById("typewriter-text");
  if (typewriterTextEl) {
    typeWriterEffect(t.typewriter, typewriterTextEl);
  }

  //Contattami
  const contactNameForm = document.getElementById("contactNameForm");
  if (contactNameForm) contactNameForm.textContent = t.contactNameForm;

  // Chi sono
  const whoIAmTitle = document.querySelector("section h2");
  if (whoIAmTitle) whoIAmTitle.textContent = t.whoIAmTitle;

  const whoIAmText = document.querySelector("section p");
  if (whoIAmText) whoIAmText.textContent = t.whoIAmText;

  // Progetti recenti
  const sections = document.querySelectorAll("main section");
  if (sections.length > 1) {
    const recentProjectsTitle = sections[1].querySelector("h2");
    if (recentProjectsTitle) recentProjectsTitle.textContent = t.recentProjectsTitle;

    const projects = sections[1].querySelectorAll(".list-group-item");
    if (projects.length >= 2) {
      projects[0].textContent = t.project1;
      projects[1].textContent = t.project2;
    }
  }

  // Bottone contatti
  const contactBtn = document.querySelector("main a.btn-custom");
  if (contactBtn) contactBtn.textContent = t.contactButton;

  // Footer
  const footer = document.querySelector("footer p");
  if (footer) footer.textContent = t.footerText;
}

function createLangSelector() {
  const container = document.getElementById("language-selector-container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const langToggle = document.createElement("a");
  langToggle.className = "nav-link dropdown-toggle";
  langToggle.href = "#";
  langToggle.id = "langDropdown";
  langToggle.setAttribute("role", "button");
  langToggle.setAttribute("data-bs-toggle", "dropdown");
  langToggle.setAttribute("aria-expanded", "false");
  langToggle.textContent = currentLang.toUpperCase();

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.className = "dropdown-menu dropdown-menu-end";
  dropdownMenu.setAttribute("aria-labelledby", "langDropdown");

  ["en", "it", "el"].forEach((langCode) => {
    if (langCode === currentLang) return;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "dropdown-item";
    a.href = "#";
    a.textContent = langCode.toUpperCase();

    a.addEventListener("click", (e) => {
      e.preventDefault();
      currentLang = langCode;
      localStorage.setItem("lang", currentLang);
      translatePage(currentLang);
      createLangSelector();
    });

    li.appendChild(a);
    dropdownMenu.appendChild(li);
  });

  container.appendChild(langToggle);
  container.appendChild(dropdownMenu);
}

function highlightCurrentNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage || (linkPage === "index.html" && (currentPage === "" || currentPage === "/"))) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

// Avvio traduzione e funzioni al caricamento completo
window.addEventListener("load", () => {
  translatePage(currentLang);
  createLangSelector();
  highlightCurrentNav();
});
