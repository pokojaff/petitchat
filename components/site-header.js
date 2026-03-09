class SiteHeader extends HTMLElement {
  connectedCallback() {
    const base = this.getAttribute('base') || '';

    this.innerHTML = `
      <style>
        site-header header {
          background-image: url('${base}background.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 1rem 0;
          position: relative;
        }
        site-header header::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(248,249,250,0.8);
          backdrop-filter: saturate(0.5);
          -webkit-backdrop-filter: saturate(0.5);
        }
        site-header .header-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 12px;
          position: relative;
          z-index: 1;
        }
        site-header .header-logo {
          height: 40px;
          width: auto;
          display: block;
        }
      </style>
      <header>
        <div class="header-container">
          <a href="${base}/">
            <img src="${base}logo.png" alt="Petit chat" class="header-logo">
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
