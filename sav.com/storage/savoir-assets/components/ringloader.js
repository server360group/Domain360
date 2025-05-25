// loading-overlay.js
import { provideSevoltDesignSystem, sevoltProgressRing } from "https://server360sites.pages.dev/sav.com/storage/savoir-assets/components/components.js";

provideSevoltDesignSystem().register(sevoltProgressRing());

class LoadingOverlay extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.3s ease;
        }

        sevolt-progress-ring {
          width: 64px;
          height: 64px;
        }
      </style>
      <div class="overlay">
        <sevolt-progress-ring></sevolt-progress-ring>
      </div>
    `;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "color") {
      const ring = this.shadowRoot.querySelector("sevolt-progress-ring");
      if (ring) {
        ring.style.setProperty("--accent-fill-rest", newVal);
      }
    }
  }

  show() {
    this.style.display = "flex";
  }

  hide() {
    this.style.display = "none";
  }
}

customElements.define("loading-overlay", LoadingOverlay);

// Expose API
window.LoadingOverlay = {
  show: () => {
    let overlay = document.querySelector("loading-overlay");
    if (overlay) overlay.show();
  },
  hide: () => {
    let overlay = document.querySelector("loading-overlay");
    if (overlay) overlay.hide();
  }
};
