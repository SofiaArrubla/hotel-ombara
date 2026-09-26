export default function Footer() {
  return (
    <footer className="ombara-footer">
      <div className="container mx-auto max-w-7xl">
        <div className="ombara-footer-shell">
          <div>
            <h3 className="font-serif-ombara ombara-footer-brand">OMBARA</h3>
            <p className="ombara-footer-text">
              Beachfront living with understated coastal luxury, crafted for slow mornings and elevated resort stays.
            </p>
          </div>
          <div className="ombara-footer-groups">
            <div className="ombara-footer-group">
              <span className="ombara-footer-label">Explore</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://waze.com" target="_blank" rel="noreferrer">Waze</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="ombara-footer-group">
              <span className="ombara-footer-label">Contact</span>
              <a href="tel:+62111222333">+62 111 222 333</a>
              <a href="mailto:hello@ombara.com">hello@ombara.com</a>
              <span>Bali, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="ombara-footer-bottom">
          <span>Private coastal residences with a resort point of view.</span>
          <span>© 2026 Ombara Bali. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}