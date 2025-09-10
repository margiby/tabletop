import { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import InteractiveDiagram from "./InteractiveDiagram";

// Globaler Zähler für eindeutige React Keys in FormattedMessage
let elementCounter = 0;

// Hauptkomponente der Startseite
const HomePage = (): ReactElement => {
  return (
    <section className="section">
      <div className="container">
        {/* Willkommenstitel */}
        <h1 className="title is-1 has-text-centered">
          <FormattedMessage
            id="homePage_welcome"
            defaultMessage="Willkommen bei BET APP"
          />
        </h1>
        <div className="content">
          <div className="box">
            <div className="content is-medium">
              {/* Präsentationstext mit Rich-Text-Formatierung */}
              <FormattedMessage
                id="presentation_text"
             values={{
              p: (chunks) => <p key={`p-${++elementCounter}`} className="subtitle">{chunks}</p>,
              ul: (chunks) => <ul key={`ul-${++elementCounter}`} className="presentation-list">{chunks}</ul>,
              li: (chunks) => <li key={`li-${++elementCounter}`}>{chunks}</li>,
              b: (chunks) => <b key={`b-${++elementCounter}`}>{chunks}</b>,
              link: (chunks) => (
                <a 
                  key={`link-${++elementCounter}`}
                  href="https://doi.org/10.1016/j.heliyon.2024.e25434" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{textDecoration: 'underline'}}
                >
                  {chunks}
                </a>
              ),
            }}
                defaultMessage="Platzhalter Text.."
              />
            </div>
          </div>
          {/* Interaktives Diagramm */}
          <div className="mt-5">
            <InteractiveDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
