function getFormText() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !message) {
        alert("Per favore compila tutti i campi.");
        return null;
    }
    
    return `Ciao, sono ${name}. Messaggio: ${message}`;
}

function clearForm() {
    document.getElementById("contact-form").reset();
}

function sendWhatsApp() {
    const text = getFormText();
    if (!text) return;
    
    const phoneNumber = "393688046394";
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
    clearForm();
}

function sendViber() {
    const text = getFormText();
    if (!text) return;
    
    const phoneNumber = "306943464283";
    const link = `viber://chat?number=%2B${phoneNumber}&text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
    clearForm();
}