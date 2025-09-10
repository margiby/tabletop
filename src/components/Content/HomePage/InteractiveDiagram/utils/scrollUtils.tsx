import type { ScrollToOptions } from "../data/flow-types";
/**
 * Scrollt zu einem Element basierend auf einem CSS-Selektor mit einem konfigurierbaren Offset.
 * Verwendet die native `window.scrollTo`-Methode.
 * @param selector - Der CSS-Selektor für das Ziel-Element
 * @param headerOffset - Der Offset in Pixeln für den Header
 * @param behavior - Das Scroll-Verhalten
 * @param timeout - Verzögerung in Millisekunden bevor das Scrollen ausgeführt wird
 */
export const scrollToSelector = (
  selector: string,
  options: ScrollToOptions = {}
): void => {
  // Standardwerte für alle Optionen definieren
  const { headerOffset = 100, behavior = "smooth", timeout = 0 } = options;
  // Timeout, um sicherzustellen, dass das Element gerendert ist, bevor gescrollt wird
  setTimeout(() => {
    const element = document.querySelector(selector);

    if (element) {
      // Position des Elements relativ zum Viewport ermitteln
      const elementPosition = element.getBoundingClientRect().top;

      // Absolute Zielposition unter Berücksichtigung der aktuellen Scroll-Position und des Offsets berechnen
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Zum berechneten Punkt scrollen
      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    } else {
      // Eine Warnung, wenn das Element nicht gefunden wurde.
      console.warn(
        `[scrollToSelector] Das Element mit dem Selektor "${selector}" wurde nicht gefunden.`
      );
    }
  }, timeout);
};
