export type LanguageObj = {
  [key: string]: string;
};

export type LanguageData = {
  [key: string]: [string, string];
};

const lang: LanguageData = {
  // Header & Navigation
  app_title: ["BET APP", "BET APP"], // Der Haupttitel und Home-Link
  nav_upload: ["Upload", "Upload"],
  nav_api: ["API", "API"],

  // HomePage spezifische Texte
  homePage_welcome: [
    "BET - Bio Energy Technology Database",
    "BET - Bio Energy Technology Database",
  ],

  presentation_text: [
    `<p>Die Bio-Energy Technology Database (BET) stellt eine Reihe von Konversionstechnologien und Energieversorgungskonzepten sowie Rohstoffe und Energieträger und deren Eigenschaften dar.</p>
<p>Wir versuchen, der Komplexität der Bioenergietechnologien gerecht zu werden, indem wir fünf Grundbausteine identifizieren, die für die meisten Bioenergietechnologieketten beschrieben werden können:</p>
<ul>
<li><b>Versorgungsaufgaben und Versorgungskonzepte</b> (keine Bioenergie-Technologien an sich, aber oft verwendet, um Bioenergie-Anwendungen zu kontextualisieren)</li>
<li><b>Konversionsverfahren und Prozessketten</b> (der thematische Kern der BET)</li>
<li><b>Xdukte</b> (alle Arten von Materialien und Energie wie Rohstoffe und Produkte)</li>
</ul>
<p>Während die Prozessketten die grundlegenden Umwandlungen unterschiedlicher Materialien und Energien darstellen, sind die Konversionsverfahren deren Grundbausteine.</p>
<p>Dotzauer et al. 2024: <link>Advanced SQL-Datenbank für Bioenergietechnologien - Ein Katalog für Bioressourcen, Umwandlungstechnologien, Energieträger und Versorgungsanwendungen</link> gibt einen detaillierteren Überblick.</p>`,
    `<p>The Bio-Energy Technology Database (BET) presents a range of conversion technologies and energy supply concepts as well as feedstocks and energy sources and their characteristics.</p>
<p>We attempt to address the complexity of bioenergy technologies by identifying five basic building blocks that can be described for most bioenergy technology chains:</p>
<ul>
<li><b>Supply tasks and supply concepts</b> (are not bioenergy technologies per se, but have often been used to contextualize bioenergy applications)</li>
<li><b>Conversion procedures and process chains</b> (the thematic core of the BET)</li>
<li><b>Xducts</b> (all types of material and energy such as feedstocks and products)</li>
</ul>
<p>While the process chains represent the fundamental conversions of different materials and energies, the conversion processes are their basic building blocks.</p>
<p>Dotzauer et al. 2024: <link>Advanced SQL-Database for bioenergy technologies - A catalogue for bio-resources, conversion technologies, energy carriers, and supply applications</link> gives a more detailed overview.</p>`,
  ],

  uploadPage_title: ["Datei-Upload", "File Upload"],
  uploadPage_description: [
    "Hier können Sie bald Ihre Daten hochladen.",
    "Here you can soon upload your data.",
  ],
  apiPage_title: ["API Dokumentation", "API Documentation"],
  apiPage_description: [
    "Hier finden Sie bald die API-Dokumentation.",
    "Here you can find soon the API documentation.",
  ],

  // Schlüssel für Content.tsx
  content_diagram_placeholder: [
    "Hier wird das interaktive Diagramm angezeigt.",
    "The interactive diagram will be displayed here.",
  ],
  diagram_title: ["Datenübersicht", "Data Overview"],
  diagram_loading: ["Layout wird berechnet...", "Calculating layout..."],
  diagram_initializing: [
    "Diagramm wird initialisiert...",
    "Diagram is initializing...",
  ],
  diagram_back_button: ["Zurück zur Übersicht", "Back to overview"],
  diagram_fetch_error: [
    "Fehler beim Laden der Diagrammdaten:",
    "Error loading diagram data:",
  ],
  diagram_expand_all: ["Alles aufklappen", "Expand all"],
  diagram_collapse_all: ["Alles zuklappen", "Collapse all"],

  // Diagram Titels
  diagram_root_name: ["Hauptdiagramm", "Main Diagram"],
  diagram_konversionsverfahren_name: [
    "Konversionsverfahren",
    "Conversion Procedures",
  ],
  diagram_versorgungskonzepte_name: ["Versorgungskonzepte", "Supply Concepts"],
  diagram_prozessketten_name: ["Prozessketten", "Process Chains"],

  // Hauptdiagramm Knoten
  xdukte_label: ["Xdukte", "Xducts"],
  xdukte_description: [
    "Das ist der Ausgangspunkt für alle Produkte und Rohstoffe. -> Klick für mehr Details.",
    "This is the starting point for all products and raw materials. -> Click for more details.",
  ],
  konversionsverfahren_label: ["Konversionsverfahren", "Conversion Procedures"],
  konversionsverfahren_description: [
    "Verschiedene Verfahren zur Umwandlung von Rohstoffen. -> Klick für mehr Details.",
    "Various methods for converting raw materials. -> Click for more details.",
  ],
  mix_label: ["Mix", "Mix"],
  mix_description: [
    "Kombinationen verschiedener Verfahren und Produkte. -> Klick für mehr Details.",
    "Combinations of different processes and products. -> Click for more details.",
  ],
  prozessketten_label: ["Prozessketten", "Process Chains"],
  prozessketten_description: [
    "Beginn mit Biomasseressourcen, transportierte Zwischenprodukte, Umwandlung zu verschiedenen Energieträgern und schließlich Nutzung in allen Energiesektoren (einschließlich potenzieller Nebenprodukte). -> Klick für mehr Details.",
    "Start with biomass resources, transported intermediates, processing into different energy carriers and finally use in all energy sectors (including potential by-products). -> Click for more details.",
  ],
  versorgungsaufgaben_label: ["Versorgungsaufgaben", "Supply Tasks"],
  versorgungsaufgaben_description: [
    "Spezifische Aufgaben zur Versorgung und Bereitstellung. -> Klick für mehr Details.",
    "Specific tasks for supply and provision. -> Click for more details.",
  ],
  versorgungskonzepte_label: ["Versorgungskonzepte", "Supply Concepts"],
  versorgungskonzepte_description: [
    "Strategische Konzepte für die Versorgungsplanung. -> Klick für mehr Details.",
    "Strategic concepts for supply planning. -> Click for more details.",
  ],

  // Prozessketten Knoten
  prozessgruppe_description: [
    "Prozessgruppe mit verschiedenen Prozessketten. -> Klick um die Tabelle zu sehen.",
    "Process group with different process chains. -> Click to see a table.",
  ],
  prozesskettentyp_description: [
    "Diese Kategorie enthält {count} Gruppierungen. -> Klick für mehr Details.",
    "This category contains {count} groups. -> Click for more details.",
  ],
  prozessketten_root_description: [
    "Übersicht aller verfügbaren Prozessketten-Kategorien.",
    "Overview of all available process chain categories.",
  ],

  // Table headers
  table_details: ["Details", "Details"],
  table_header_type: ["Typ", "Type"],
  table_header_group: ["Gruppe", "Group"],
  table_header_chain: ["Kette", "Chain"],

  // Footer spezifische Texte
  footer_version: ["Version", "Version"],
  footer_legal_links: ["Rechtliches", "Legal"],
  footer_imprint: ["Impressum", "Imprint"],
  footer_privacy: ["Datenschutz", "Privacy Policy"],
  footer_contact_us: ["Kontakt", "Contact Us"],
  footer_contact_page: ["Kontaktseite", "Contact Page"],
};

const de: LanguageObj = {};
const en: LanguageObj = {};

Object.entries(lang).forEach(([key, val]) => {
  de[key] = val[0];
  en[key] = val[1];
});

export { de, en };
