/* global React */
function CoachingBlock({ onBook }) {
  return (
    <section className="ddc-coaching theme-black-on-yellow">
      <div className="ddc-coaching__inner">
        <div className="eyebrow" style={{color:'rgba(0,0,0,0.5)'}}>02 — 1:1 Coaching</div>
        <h2 className="h1" style={{color:'var(--black)'}}>Dein Setup.<br/>Dein Tempo.</h2>
        <p className="ddc-coaching__body">
          Wir arbeiten zusammen an genau dem Punkt, an dem du steckst —
          Beatmatching by ear, Phrasing, deine ersten Sets oder
          deine Bewerbung für den ersten Gig.
        </p>
        <a className="btn btn--dark btn--lg" onClick={onBook}>Termin sichern</a>
      </div>
      <ul className="ddc-coaching__stats">
        <li><span className="num">90</span><span className="lbl">Minuten / Session</span></li>
        <li><span className="num">1:1</span><span className="lbl">Voller Fokus</span></li>
        <li><span className="num">HH</span><span className="lbl">Hamburg + Online</span></li>
      </ul>
    </section>
  );
}
window.CoachingBlock = CoachingBlock;
