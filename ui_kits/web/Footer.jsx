/* global React */
function Footer({ onNav }) {
  return (
    <footer className="ddc-footer">
      <div className="ddc-footer__top">
        <a className="ddc-footer__brand" onClick={() => onNav('home')}>
          <img src="../../assets/logos/dein-dj-coach-wht.png" alt="Dein DJ Coach" />
        </a>
        <div className="ddc-footer__cols">
          <div>
            <div className="eyebrow">Lern</div>
            <a className="ddc-footer__link">Von 0 auf CDJs</a>
            <a className="ddc-footer__link">Phrase, nicht Beat</a>
            <a className="ddc-footer__link">1:1 Coaching</a>
          </div>
          <div>
            <div className="eyebrow">Über</div>
            <a className="ddc-footer__link">Der Coach</a>
            <a className="ddc-footer__link">Studio Hamburg</a>
            <a className="ddc-footer__link">Kontakt</a>
          </div>
          <div>
            <div className="eyebrow">Folge</div>
            <a className="ddc-footer__link">YouTube</a>
            <a className="ddc-footer__link">Instagram</a>
            <a className="ddc-footer__link">Newsletter</a>
          </div>
        </div>
      </div>
      <div className="ddc-footer__bot">
        <div>© 2026 Dein DJ Coach — Hamburg</div>
        <div><a className="ddc-footer__link">Impressum</a> · <a className="ddc-footer__link">Datenschutz</a></div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
