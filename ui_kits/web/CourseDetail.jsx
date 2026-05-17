/* global React, COURSES */
const { useState: useStateCD } = React;

const MODULES = [
  '01 · Equipment-Setup & Signalfluss',
  '02 · Beatmatching by ear',
  '03 · EQ-Mixing — Lows, Mids, Highs',
  '04 · Phrasing & Song-Struktur',
  '05 · Saubere Übergänge bauen',
  '06 · Cue-Points & Loops',
  '07 · Set-Aufbau — Energy Curve',
  '08 · Dein erstes Mini-Set',
];

function CourseDetail({ courseId, onBack, onBook }) {
  const course = (window.COURSES || []).find((c) => c.id === courseId) || window.COURSES[0];
  return (
    <article className="ddc-detail">
      <div className="ddc-detail__crumb">
        <a className="nav-link" onClick={onBack}>← Zurück</a>
      </div>
      <header className="ddc-detail__head">
        <div className="eyebrow accent">{course.eyebrow}</div>
        <h1 className="h-display">{course.title.split('\n').map((l,i)=>(<span key={i} style={{display:'block'}}>{l}</span>))}</h1>
        <p className="ddc-detail__lede">{course.body}</p>
        <div className="ddc-detail__cta">
          <a className="btn btn--primary btn--lg" onClick={onBook}>Jetzt buchen — 149 €</a>
          <a className="btn btn--secondary btn--lg">Inhalt herunterladen</a>
        </div>
      </header>

      <section className="ddc-detail__modules">
        <div className="eyebrow">Inhalt — 8 Module</div>
        <ul>
          {MODULES.map((m) => (
            <li key={m} className="ddc-detail__module">
              <span className="ddc-detail__module-name">{m}</span>
              <span className="ddc-detail__module-time">~30 min</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ddc-detail__quote theme-black-on-yellow">
        <div className="ddc-detail__quote-mark" aria-hidden="true">"</div>
        <p>Nach vier Wochen habe ich meinen ersten Gig in der Roten Flora gespielt. Die Grundlagen saßen.</p>
        <div className="ddc-detail__quote-by">— Lukas, Hamburg</div>
      </section>
    </article>
  );
}
window.CourseDetail = CourseDetail;
