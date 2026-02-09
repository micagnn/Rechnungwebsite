# RechnungPro - Professional Invoice Management System

Eine moderne, professionelle Rechnungsverwaltungssoftware inspiriert von SevDesk und anderen führenden Rechnungsprogrammen.

## 📥 Download / Herunterladen

### Direkt herunterladen (ohne Git):
**[⬇️ Als ZIP-Datei herunterladen](https://github.com/micagnn/Rechnungwebsite/archive/refs/heads/main.zip)**

Nach dem Download:
1. ZIP-Datei entpacken
2. `index.html` im Browser öffnen
3. Fertig! 🎉

### Mit Git klonen:
```bash
git clone https://github.com/micagnn/Rechnungwebsite.git
cd Rechnungwebsite
```

### Direktlinks:
- 🌐 **[Online Demo](https://micagnn.github.io/Rechnungwebsite/)** - Sofort testen ohne Download
- 📦 **[ZIP Download](https://github.com/micagnn/Rechnungwebsite/archive/refs/heads/main.zip)** - Alle Dateien auf einmal
- 💻 **[GitHub Repository](https://github.com/micagnn/Rechnungwebsite)** - Quellcode ansehen

---

## 🚀 Schnellstart

Die einfachste Art, die Anwendung zu nutzen:

1. **Online**: Besuchen Sie [https://micagnn.github.io/Rechnungwebsite/](https://micagnn.github.io/Rechnungwebsite/)
2. **Download**: [ZIP-Datei herunterladen](https://github.com/micagnn/Rechnungwebsite/archive/refs/heads/main.zip) und `index.html` öffnen

Das war's! Keine Installation, keine Konfiguration erforderlich.

## Features

### 📊 Dashboard
- Übersichtliche Statistiken (Offene Rechnungen, Bezahlte Rechnungen, Überfällige, Umsatz)
- Letzte Rechnungen auf einen Blick
- Farbcodierte Status-Badges

### 📝 Rechnungsverwaltung
- Vollständige Rechnungsliste mit Filteroptionen
- Suchfunktion für schnellen Zugriff
- Aktionen: Ansehen, Bearbeiten, Download

### 👥 Kundenverwaltung
- Übersichtliche Karten-basierte Darstellung
- Kundenstatistiken und Kontaktinformationen
- Schnellzugriff auf Kundendetails

### ➕ Rechnungserstellung
- Intuitive Formularfelder
- Dynamisches Hinzufügen von Positionen
- Automatische Berechnung von Zwischensumme, MwSt. (19%) und Gesamtbetrag
- Vordefinierte Zahlungsbedingungen

### ⚙️ Einstellungen
- Firmendaten konfigurieren
- Rechnungsnummer-Präfix anpassen
- MwSt.-Satz einstellen
- Zahlungsziel und Währung festlegen

## Design

Das Design wurde mit Fokus auf Benutzerfreundlichkeit und professionelles Erscheinungsbild erstellt:

- **Saubere, moderne Oberfläche** mit dezenten Farbakzenten
- **Responsive Design** für Desktop und Mobile
- **Intuitive Navigation** über die Sidebar
- **Farbcodierte Elemente** für bessere Übersichtlichkeit
  - Blau: Allgemeine Informationen
  - Grün: Bezahlte/Erfolgreiche Aktionen
  - Orange: Ausstehende Aktionen
  - Rot: Überfällige/Kritische Aktionen

## Installation

### Option 1: Online Demo (Empfohlen)
Besuchen Sie einfach die [Live Demo](https://micagnn.github.io/Rechnungwebsite/) - keine Installation erforderlich!

### Option 2: Lokal ausführen

1. **Klonen Sie das Repository**
   ```bash
   git clone https://github.com/micagnn/Rechnungwebsite.git
   cd Rechnungwebsite
   ```

2. **Im Browser öffnen**
   
   **Methode A: Direkt öffnen (einfachste Methode)**
   - Doppelklicken Sie einfach auf `index.html`
   - Die Website öffnet sich in Ihrem Standard-Browser
   
   **Methode B: Mit lokalem Webserver (empfohlen für volle Funktionalität)**
   
   Mit Python:
   ```bash
   python3 -m http.server 8000
   ```
   
   Mit Node.js:
   ```bash
   npx serve
   ```
   
   Mit PHP:
   ```bash
   php -S localhost:8000
   ```
   
   Dann öffnen Sie `http://localhost:8000` im Browser

3. **Fertig!** Die Anwendung läuft nun lokal auf Ihrem Computer.

## Technologie-Stack

- **HTML5** - Semantische Struktur
- **CSS3** - Moderne Styling mit Flexbox und Grid
- **Vanilla JavaScript** - Keine Frameworks erforderlich
- **Font Awesome 6** - Icons (via CDN)

## Browser-Kompatibilität

- Chrome/Edge (empfohlen)
- Firefox
- Safari
- Andere moderne Browser mit ES6-Unterstützung

## Zukünftige Erweiterungen

- PDF-Generierung für Rechnungen
- Backend-Integration für Datenpersistenz
- E-Mail-Versand von Rechnungen
- Mehrere Sprachen
- Erweiterte Berichterstellung
- Export/Import von Daten

## Lizenz

Dieses Projekt ist Open Source und steht unter der MIT-Lizenz.

## Autor

Erstellt mit ❤️ für professionelle Rechnungsverwaltung