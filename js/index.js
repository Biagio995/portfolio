// Typewriter effect senza innerHTML
const text = "Designer. Developer. Innovatore.";
const target = document.getElementById("typewriter-text");
let i = 0;
const speed = 60;

function typeWriter() {
    if (i < text.length) {
        const charNode = document.createTextNode(text.charAt(i));
        target.appendChild(charNode);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Hover effect su progetti
window.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    
    console.log("%c👋 Benvenuto sviluppatore curioso! Hai trovato l'easter egg. ✨", "color: #41BBA6; font-size: 16px; font-weight: bold;");
    
    const items = document.querySelectorAll(".list-group-item");
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.03)";
            item.style.backgroundColor = "rgba(255,255,255,0.1)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.backgroundColor = "transparent";
        });
    });
});
