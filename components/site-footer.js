class SiteFooter extends HTMLElement {
  connectedCallback() {
    const base = this.getAttribute('base') || '';

    this.innerHTML = `
      <style>
        site-footer footer {
          background-image: url('${base}background.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 1.5rem 0;
          margin-top: auto;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        site-footer footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(248,249,250,0.8);
          backdrop-filter: saturate(0.5);
          -webkit-backdrop-filter: saturate(0.5);
        }
        site-footer .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 12px;
          position: relative;
          z-index: 1;
        }
        site-footer .footer-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        site-footer .footer-left,
        site-footer .footer-center,
        site-footer .footer-right {
          display: flex;
          flex-direction: column;
        }
        site-footer .footer-center {
          margin: 0 auto;
          width: fit-content;
          text-align: left;
        }
        site-footer .footer-right {
          text-align: right;
        }
        site-footer .footer-text {
          color: #6c757d;
          font-size: 0.875rem;
          margin: 0 0 0.25rem;
          line-height: 1.5;
        }
        site-footer .footer-text:last-child {
          margin-bottom: 0;
        }
        site-footer .footer-text.fw-semibold {
          font-weight: 600;
        }
        site-footer .footer-link {
          color: #6c757d;
          font-size: 0.875rem;
          text-decoration: none;
          display: block;
          margin-bottom: 0.25rem;
          line-height: 1.5;
        }
        site-footer .footer-link:last-child {
          margin-bottom: 0;
        }
        site-footer .footer-link:hover {
          color: #9b6cff;
        }
        site-footer .footer-link-accent {
          color: #333;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.875rem;
        }
        site-footer .footer-link-accent:hover {
          color: #9b6cff;
        }
        @media (max-width: 767.98px) {
          site-footer .footer-flex {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          site-footer .footer-center {
            margin: 0;
            text-align: center;
          }
          site-footer .footer-right {
            text-align: center;
          }
        }
        site-footer .footer-divider {
          border: none;
          border-top: 1px solid #6c757d;
          margin: 1rem 0 0.75rem;
        }
        site-footer .footer-copyright {
          color: #6c757d;
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 767.98px) {
          site-footer .footer-copyright {
            text-align: center;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-flex">
            <div class="footer-left">
              <p class="footer-text fw-semibold">Petit chat s.r.o.</p>
              <p class="footer-text">VAT CZ22013962</p>
              <p class="footer-text">DUNS 764449629</p>
              <p class="footer-text">Ke Dvoru 123, Praha 6, Czech Republic</p>
            </div>
            <div class="footer-center">
              <a href="${base}policy-privacy.html" class="footer-link">Privacy Policy</a>
              <a href="${base}policy-data-management.html" class="footer-link">Data Management</a>
              <a href="${base}policy-sustainability.html" class="footer-link">Sustainability</a>
              <a href="${base}policy-accessibility.html" class="footer-link">Accessibility</a>
            </div>
            <div class="footer-right">
              <a href="${base}support.html" class="footer-link-accent">Technical support</a>
            </div>
          </div>
          <hr class="footer-divider">
          <p class="footer-copyright">© Petit chat, 2026. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
