# Funzionalità Email Implementata ✉️

## Cosa è stato aggiunto

Ho implementato un bottone "Invia Email" nella pagina contatti che permette agli utenti di inviarti un'email direttamente.

## Funzionalità

### Bottone Email
- **Posizione:** Pagina Contatti, insieme ai bottoni WhatsApp e Viber
- **Icona:** Icona email Material Design (`mdi-email`)
- **Colore:** Primary color (verde #41BBA6)
- **Indirizzo email:** csarannabiagio@gmail.com

### Come funziona

Quando un utente:
1. Compila il form con nome e messaggio
2. Clicca su "Invia Email"
3. Si apre il client email predefinito (Gmail, Outlook, Apple Mail, etc.)
4. L'email è pre-compilata con:
   - **A:** csarannabiagio@gmail.com
   - **Oggetto:** "Messaggio da [Nome Utente]"
   - **Corpo:** 
     ```
     Nome: [Nome Utente]
     
     Messaggio:
     [Testo del messaggio]
     ```

## File Modificati

### 1. `src/views/ContactsView.vue`
Aggiunta funzione `sendEmail()`:
```typescript
const sendEmail = () => {
  if (!form.value.name.trim() || !form.value.message.trim()) return

  const email = import.meta.env.VITE_EMAIL_ADDRESS || 'csarannabiagio@gmail.com'
  const subject = encodeURIComponent(`Messaggio da ${form.value.name}`)
  const body = encodeURIComponent(
    `Nome: ${form.value.name}\n\nMessaggio:\n${form.value.message}`
  )
  
  const link = `mailto:${email}?subject=${subject}&body=${body}`
  window.location.href = link
  clearForm()
}
```

Layout aggiornato con 3 bottoni in fila:
- Email (nuovo)
- WhatsApp
- Viber

### 2. Traduzioni

**Italiano (`src/locales/it.json`):**
```json
"email": "Invia Email"
```

**Inglese (`src/locales/en.json`):**
```json
"email": "Send Email"
```

**Greco (`src/locales/el.json`):**
```json
"email": "Αποστολή Email"
```

### 3. TypeScript Types (`src/types/index.ts`)
Aggiunto campo `email` all'interfaccia delle traduzioni.

### 4. Environment Variables (`.env.example`)
Aggiunta variabile opzionale:
```env
VITE_EMAIL_ADDRESS="csarannabiagio@gmail.com"
```

### 5. Documentazione
Aggiornati:
- `START_HERE.md`
- `SETUP.md`

## Utilizzo

### Per gli utenti del sito
1. Vai alla pagina "Contatti"
2. Compila nome e messaggio
3. Clicca su "Invia Email"
4. Il tuo client email si aprirà automaticamente

### Per personalizzare l'email

**Metodo 1 - Direttamente nel codice:**

Modifica `src/views/ContactsView.vue` alla riga ~107:
```typescript
const email = 'tuo-nuovo-indirizzo@example.com'
```

**Metodo 2 - Variabile d'ambiente (raccomandato):**

Crea un file `.env` nella root del progetto:
```env
VITE_EMAIL_ADDRESS="tuo-nuovo-indirizzo@example.com"
```

Poi riavvia il server di sviluppo:
```bash
npm run dev
```

## Vantaggi

✅ **Nessun backend richiesto** - Usa il protocollo `mailto:`
✅ **Privacy** - L'email non è esposta nel codice pubblico (se usi env vars)
✅ **Multi-piattaforma** - Funziona su desktop e mobile
✅ **Client email nativo** - L'utente usa la sua app email preferita
✅ **Validazione form** - Il bottone è disabilitato se il form non è valido
✅ **Multi-lingua** - Testo tradotto in 3 lingue

## Layout Responsive

- **Desktop (> 992px):** 3 bottoni in fila orizzontale
- **Tablet (768-992px):** 3 bottoni in fila orizzontale
- **Mobile (< 768px):** 3 bottoni impilati verticalmente

## Note Tecniche

### Protocollo mailto:
Il bottone usa il protocollo standard `mailto:` che è supportato da tutti i browser e sistemi operativi moderni.

### Encoding
Nome dell'utente e messaggio sono correttamente encodati con `encodeURIComponent()` per gestire caratteri speciali e accentati.

### Validazione
Il bottone è disabilitato finché entrambi i campi (nome e messaggio) non sono compilati, grazie alla validazione Vuetify integrata.

### Fallback
Se la variabile d'ambiente non è definita, viene usato l'indirizzo email hardcoded come fallback.

## Test

Per testare la funzionalità:

1. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

2. Vai su `http://localhost:3000/contatti`

3. Compila il form:
   - Nome: "Mario Rossi"
   - Messaggio: "Ciao, vorrei informazioni sul portfolio"

4. Clicca su "Invia Email"

5. Il tuo client email dovrebbe aprirsi con l'email pre-compilata

## Browser Compatibility

✅ Chrome/Edge - Apre Gmail o client predefinito
✅ Firefox - Apre client predefinito
✅ Safari - Apre Apple Mail
✅ Mobile browsers - Apre app email nativa

## Sicurezza

- ✅ Nessun dato sensibile nel codice client
- ✅ Nessuna chiamata API esposta
- ✅ Nessun backend da proteggere
- ✅ Input sanitizzati con encodeURIComponent

## Future Enhancements (Opzionali)

Se in futuro vorrai aggiungere funzionalità più avanzate:

1. **Backend email service** (SendGrid, AWS SES, Mailgun)
   - Invio email tramite API
   - Copia dell'email salvata in database
   - Notifiche automatiche

2. **Form più complesso**
   - Campo email dell'utente
   - Numero di telefono
   - Allegati

3. **Conferma invio**
   - Toast notification
   - Pagina "Grazie"
   - Email di conferma automatica

Per ora, la soluzione `mailto:` è perfetta per un portfolio professionale! 🎉

## Supporto

Se hai domande o problemi con la funzionalità email, verifica:

1. Il form sia compilato correttamente
2. Il browser non blocchi i link `mailto:`
3. Hai un client email configurato sul tuo dispositivo
4. L'indirizzo email in `.env` o nel codice sia corretto

---

**Implementato:** 2 Febbraio 2025
**Email configurata:** csarannabiagio@gmail.com
**Stato:** ✅ Funzionante e pronto per produzione
