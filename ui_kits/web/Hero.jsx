/* global React */
function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="ddc-hero">
      <div className="ddc-hero__bg" aria-hidden="true" />
      <div className="ddc-hero__inner">
        <div className="eyebrow accent">Online-Kurs · Coaching · Hamburg</div>
        <h1 className="ddc-hero__h">
          Von 0<span>auf CDJs</span>
        </h1>
        <p className="ddc-hero__sub">
          Der strukturierte Einstieg ins DJ-ing. Lerne Timing,
          EQ-Mixing und saubere Übergänge — auf Basis solider Grundlagen.
        </p>
        <div className="ddc-hero__cta">
          <a className="btn btn--primary btn--lg" onClick={onPrimary}>Kurs buchen</a>
          <a className="btn btn--secondary btn--lg" onClick={onSecondary}>Kurse ansehen</a>
        </div>
        <div className="ddc-hero__meta">
          <div><strong>200+</strong><span>DJs gecoacht</span></div>
          <div><strong>4.9 / 5</strong><span>Rating</span></div>
          <div><strong>Hamburg</strong><span>Studio · St. Pauli</span></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
