/* global React */
const { useState: useStateBM } = React;

function BookingModal({ open, onClose }) {
  const [submitted, setSubmitted] = useStateBM(false);
  if (!open) return null;
  return (
    <div className="ddc-modal-scrim" onClick={onClose}>
      <div className="ddc-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ddc-modal__close" onClick={onClose} aria-label="Schließen">×</button>
        {!submitted ? (
          <>
            <div className="eyebrow accent">Buchung · Schritt 1 / 1</div>
            <h2 className="h2 accent" style={{marginTop:12}}>Lass uns starten.</h2>
            <p className="ddc-modal__lede">Trag deine Daten ein, ich melde mich innerhalb von 24h zurück.</p>
            <form
              className="ddc-modal__form"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="ddc-modal__row">
                <div className="field">
                  <label className="field-label">Vorname</label>
                  <input className="input" required placeholder="Lukas" />
                </div>
                <div className="field">
                  <label className="field-label">E-Mail</label>
                  <input className="input" type="email" required placeholder="du@example.de" />
                </div>
              </div>
              <div className="field">
                <label className="field-label">Was möchtest du lernen?</label>
                <textarea className="textarea" rows="3" placeholder="Beatmatching, EQ-Mixing, Phrasing…" />
              </div>
              <div className="ddc-modal__interest">
                <div className="field-label">Interesse</div>
                <label className="ddc-pill"><input type="radio" name="i" defaultChecked /><span>Online-Kurs</span></label>
                <label className="ddc-pill"><input type="radio" name="i" /><span>1:1 Coaching</span></label>
                <label className="ddc-pill"><input type="radio" name="i" /><span>Beides</span></label>
              </div>
              <div className="ddc-modal__cta">
                <button type="submit" className="btn btn--primary btn--lg btn--block">Anfrage senden</button>
              </div>
            </form>
          </>
        ) : (
          <div className="ddc-modal__done">
            <div className="eyebrow accent">Erhalten</div>
            <h2 className="h1 accent">Drauf!<br/>Bis bald.</h2>
            <p className="ddc-modal__lede">Ich melde mich innerhalb von 24h. Bis dahin: leg dir Tracks bereit, die du immer schon mixen wolltest.</p>
            <a className="btn btn--secondary btn--lg" onClick={onClose}>Schließen</a>
          </div>
        )}
      </div>
    </div>
  );
}
window.BookingModal = BookingModal;
