/* global React */
const COURSES = [
  {
    id: 'cdjs',
    eyebrow: 'Online-Kurs · Einsteiger',
    title: 'Von 0\nauf CDJs',
    body: 'Beatmatching, EQ, Cueing. Acht Module, vier Stunden, kein Bullshit.',
    cta: 'Modul-Übersicht',
    theme: 'dark',
  },
  {
    id: 'phrasing',
    eyebrow: 'Online-Kurs · Fortgeschritten',
    title: 'Phrase,\nnicht Beat',
    body: 'Saubere Übergänge auf der musikalischen Phrase — der nächste Level-Up.',
    cta: 'Mehr erfahren',
    theme: 'yellow',
  },
  {
    id: '1to1',
    eyebrow: '1:1 · Hamburg / Online',
    title: 'Personal\nCoaching',
    body: '90 Minuten an deinem Setup. Wir arbeiten an genau deinem Bottleneck.',
    cta: 'Termin sichern',
    theme: 'grey',
  },
];

function CourseGrid({ onOpen, onBook }) {
  return (
    <section className="ddc-courses">
      <div className="ddc-section-head">
        <div className="eyebrow">01 — Kurse</div>
        <h2 className="h2 accent">Lern DJing,<br/>Schritt für Schritt.</h2>
      </div>
      <div className="ddc-courses__grid">
        {COURSES.map((c) => (
          <article key={c.id} className={`card card--${c.theme} ddc-course-card`} onClick={() => onOpen(c.id)}>
            <div className="card__eyebrow">{c.eyebrow}</div>
            <div className="card__title">{c.title.split('\n').map((l,i)=>(<span key={i}>{l}<br/></span>))}</div>
            <p className="ddc-course-card__body">{c.body}</p>
            <div className="ddc-course-card__foot">
              <span className="btn btn--ghost" style={{padding:0, color:'inherit'}}>{c.cta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.CourseGrid = CourseGrid;
window.COURSES = COURSES;
