const translations = {
  en: {
    navHome: "Home",
    navContacts: "Contacts",
    headerTitle: "My Portfolio",
    typewriter: "Designer. Developer. Innovator.",
    whoIAmTitle: "Who I Am",
    whoIAmText: "I am a creative developer with a passion for modern and functional design. I create impactful digital experiences.",
    recentProjectsTitle: "Recent Projects",
    project1: "🌐 Personal website",
    project2: "📊 Interactive dashboard",
    contactButton: "Contact Me",
    footerText: "© 2025 - Biagio Carannante"
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
    footerText: "© 2025 - Biagio Carannante"
  },
  el: {
    navHome: "Αρχική",
    navContacts: "Επικοινωνία",
    headerTitle: "Το Portfolio μου",
    typewriter: "Σχεδιαστής. Προγραμματιστής. Καινοτόμος.",
    whoIAmTitle: "Ποιος Είμαι",
    whoIAmText: "Είμαι ένας δημιουργικός προγραμματιστής με πάθος για μοντέρνο και λειτουργικό σχεδιασμό. Δημιουργώ ψηφιακές εμπειρίες με αντίκτυπο.",
    recentProjectsTitle: "Πρόσφατα Έργα",
    project1: "🌐 Προσωπικός ιστότοπος",
    project2: "📊 Διαδραστικός πίνακας ελέγχου",
    contactButton: "Επικοινωνήστε μαζί μου",
    footerText: "© 2025 - Biagio Carannante"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
let typingTimeout;
let isTyping = false;

function typeWriterEffect(text, element, i = 0) {
  if (isTyping) return; // blocca chiamate multiple
  isTyping = true;
  
  element.textContent = ""; // pulisce prima di scrivere
  
  function type() {
    if (i < text.length) {
      element.appendChild(document.createTextNode(text.charAt(i)));
      i++;
      typingTimeout = setTimeout(type, 60);
    } else {
      isTyping = false; // fine scrittura
    }
  }
  
  type();
}

function translatePage(lang) {
  const t = translations[lang] || translations["en"];
  
  // Nav
  const navHome = document.querySelector('a.nav-link[href*="index.html"]');
  const navContacts = document.querySelector('a.nav-link[href*="contatti.html"]');
  if(navHome) navHome.textContent = t.navHome;
  if(navContacts) navContacts.textContent = t.navContacts;
  
  // Header
  const headerTitle = document.querySelector("header h1");
  if(headerTitle) headerTitle.textContent = t.headerTitle;
  
  // Typewriter
  const typewriterTextEl = document.getElementById("typewriter-text");
  if(typewriterTextEl){
    typeWriterEffect(t.typewriter, typewriterTextEl);
  }
  
  // Sections
  const whoIAmTitle = document.querySelector("section h2");
  if(whoIAmTitle) whoIAmTitle.textContent = t.whoIAmTitle;
  
  const whoIAmText = document.querySelector("section p");
  if(whoIAmText) whoIAmText.textContent = t.whoIAmText;
  
  // Recent Projects Section
  const sections = document.querySelectorAll("main section");
  if(sections.length > 1){
    const recentProjectsTitle = sections[1].querySelector("h2");
    if(recentProjectsTitle) recentProjectsTitle.textContent = t.recentProjectsTitle;
    
    const projects = sections[1].querySelectorAll(".list-group-item");
    if(projects.length >= 2){
      projects[0].textContent = t.project1;
      projects[1].textContent = t.project2;
    }
  }
  
  // Contact button
  const contactBtn = document.querySelector("main a.btn-custom");
  if(contactBtn) contactBtn.textContent = t.contactButton;
  
  // Footer
  const footer = document.querySelector("footer p");
  if(footer) footer.textContent = t.footerText;
}

function createLangSelector() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.right = "10px";
  container.style.backgroundColor = "rgba(25,22,84,0.85)";
  container.style.padding = "6px 10px";
  container.style.borderRadius = "8px";
  container.style.zIndex = "9999";
  container.style.fontFamily = "'Segoe UI', sans-serif";
  container.style.color = "white";
  container.style.userSelect = "none";
  container.style.cursor = "pointer";
  
  const langDisplay = document.createElement("span");
  langDisplay.textContent = currentLang.toUpperCase();
  langDisplay.style.fontWeight = "bold";
  
  const dropdown = document.createElement("div");
  dropdown.style.position = "absolute";
  dropdown.style.top = "100%";
  dropdown.style.right = "0";
  dropdown.style.backgroundColor = "rgba(25,22,84,0.95)";
  dropdown.style.borderRadius = "6px";
  dropdown.style.marginTop = "4px";
  dropdown.style.minWidth = "50px";
  dropdown.style.display = "none";
  dropdown.style.flexDirection = "column";
  dropdown.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
  
  ["en","it","el"].forEach(langCode => {
    if(langCode === currentLang) return; // non mostrare la lingua corrente nella lista
    
    const option = document.createElement("div");
    option.textContent = langCode.toUpperCase();
    option.style.padding = "6px 10px";
    option.style.userSelect = "none";
    
    option.addEventListener("mouseenter", () => {
      option.style.backgroundColor = "#41BBA6";
      option.style.color = "#191654";
    });
    option.addEventListener("mouseleave", () => {
      option.style.backgroundColor = "transparent";
      option.style.color = "white";
    });
    
    option.addEventListener("click", () => {
      currentLang = langCode;
      localStorage.setItem("lang", currentLang);
      langDisplay.textContent = currentLang.toUpperCase();
      dropdown.style.display = "none";
      translatePage(currentLang);
    });
    
    dropdown.appendChild(option);
  });
  
  container.appendChild(langDisplay);
  container.appendChild(dropdown);
  
  container.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });
  
  document.body.appendChild(container);
}

window.addEventListener("DOMContentLoaded", () => {
  translatePage(currentLang);
  createLangSelector();
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
