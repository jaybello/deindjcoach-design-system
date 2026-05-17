/* global React */
const TIPS = [
  { tag: 'Tipp #07', title: 'Phrase,\nnicht Beat.', theme: 'grey' },
  { tag: 'Tipp #12', title: 'Der häufigste\nFehler beim\nBeatmatching', theme: 'dark', strip: true },
  { tag: 'Tipp #19', title: 'Timing\nist alles.', theme: 'yellow' },
];

function TipsStrip() {
  return (
    <section className="ddc-tips theme-white-on-black">
      <div className="ddc-section-head">
        <div className="eyebrow">03 — Tipps</div>
        <h2 className="h2 accent">Direkt aus<br/>dem Studio.</h2>
      </div>
      <div className="ddc-tips__grid">
        {TIPS.map((t, i) => (
          <a key={i} className={`ddc-tip ddc-tip--${t.theme} ${t.strip ? 'accent-strip' : ''}`}>
            <div className="ddc-tip__tag">{t.tag}</div>
            <div className="ddc-tip__title">
              {t.title.split('\n').map((l, j) => (<span key={j}>{l}<br/></span>))}
            </div>
            <div className="ddc-tip__cta">Ansehen <span aria-hidden="true">→</span></div>
          </a>
        ))}
      </div>
    </section>
  );
}
window.TipsStrip = TipsStrip;
