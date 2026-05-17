/* global React */
const CP_GAMES = [
  {
    id: 'eq-hero',
    title: 'EQ Hero',
    subtitle: 'Lows, Mids, Highs — blind erkennen',
    url: 'https://deindjcoach.de/interaktiv/eq-hero.html',
    module: '03',
    level: 'Mittel',
    duration: '5–10 min',
  },
  {
    id: 'beat-trainer',
    title: 'Beat Trainer',
    subtitle: 'Tempo by ear angleichen',
    url: 'https://deindjcoach.de/interaktiv/beat-trainer.html',
    module: '02',
    level: 'Einsteiger',
    duration: '8 min',
    soon: true,
  },
  {
    id: 'phrase-detect',
    title: 'Phrase Detect',
    subtitle: 'Den Phrase-Wechsel hören',
    url: 'https://deindjcoach.de/interaktiv/phrase-detect.html',
    module: '04',
    level: 'Mittel',
    duration: '6 min',
    soon: true,
  },
  {
    id: 'cue-drill',
    title: 'Cue-Point Drill',
    subtitle: 'Cue genau auf die 1 setzen',
    url: 'https://deindjcoach.de/interaktiv/cue-drill.html',
    module: '06',
    level: 'Mittel',
    duration: '4 min',
    soon: true,
  },
];

const { useState: useStateCP, useEffect: useEffectCP } = React;

const CP_MODULES = [
  { num: '01', title: 'Equipment & Signalfluss',     dur: '30 min', state: 'done' },
  { num: '02', title: 'Beatmatching by ear',         dur: '42 min', state: 'done' },
  { num: '03', title: 'EQ-Mixing — Lows, Mids, Highs', dur: '38 min', state: 'playing' },
  { num: '04', title: 'Phrasing & Song-Struktur',    dur: '28 min', state: 'next' },
  { num: '05', title: 'Saubere Übergänge bauen',     dur: '35 min', state: 'next' },
  { num: '06', title: 'Cue-Points & Loops',          dur: '32 min', state: 'next' },
  { num: '07', title: 'Set-Aufbau · Energy Curve',   dur: '40 min', state: 'next' },
  { num: '08', title: 'Dein erstes Mini-Set',        dur: '25 min', state: 'locked' },
];

const CP_CHAPTERS = [
  { t: '00:00', label: 'Intro · Worum geht es' },
  { t: '03:12', label: 'Lows — wo der Bass wohnt' },
  { t: '11:48', label: 'Mids — Vocals & Drums' },
  { t: '21:30', label: 'Highs — Hihats & Cymbals' },
  { t: '29:50', label: 'Drei-Band-Drill am Mixer' },
  { t: '34:22', label: 'Übung: blind EQ-Mix' },
];

function CourseSidebar({ activeIdx, onPick }) {
  return (
    <aside className="cp-side">
      <a className="cp-side__brand">
        <img src="../../assets/logos/dein-dj-coach-wht.png" alt="Dein DJ Coach" />
      </a>

      <div className="cp-side__crumb">
        <div className="eyebrow accent">Online-Kurs</div>
        <div className="cp-side__course">Von 0 auf CDJs</div>
        <div className="cp-side__progress">
          <div className="cp-side__progress-bar"><span style={{width: '32%'}}></span></div>
          <div className="cp-side__progress-meta">2 / 8 Module · 32% durch</div>
        </div>
      </div>

      <nav className="cp-side__list">
        {CP_MODULES.map((m, i) => (
          <button
            key={m.num}
            className={`cp-mod cp-mod--${m.state} ${i === activeIdx ? 'is-active' : ''}`}
            onClick={() => m.state !== 'locked' && onPick(i)}
            disabled={m.state === 'locked'}
          >
            <span className="cp-mod__num">{m.num}</span>
            <span className="cp-mod__body">
              <span className="cp-mod__title">{m.title}</span>
              <span className="cp-mod__meta">
                {m.state === 'done'    && <span className="cp-tag">✓ Abgeschlossen</span>}
                {m.state === 'playing' && <span className="cp-tag cp-tag--now">▶ Läuft jetzt</span>}
                {m.state === 'next'    && <span className="cp-tag cp-tag--muted">Bereit</span>}
                {m.state === 'locked'  && <span className="cp-tag cp-tag--muted">Gesperrt</span>}
                <span className="cp-mod__dur">· {m.dur}</span>
              </span>
            </span>
          </button>
        ))}
      </nav>

      <div className="cp-side__foot">
        <div className="eyebrow">Bonus</div>
        <a className="cp-side__link">↗ Setlist-Vorlage (PDF)</a>
        <a className="cp-side__link">↗ Cue-Punkt-Workbook</a>
      </div>
    </aside>
  );
}

function CoursePlayer() {
  const [active, setActive] = useStateCP(2);
  const [playing, setPlaying] = useStateCP(true);
  const [pos, setPos] = useStateCP(38); // % through current video
  const [tab, setTab] = useStateCP('chapters');
  const [activeGame, setActiveGame] = useStateCP(null);
  const mod = CP_MODULES[active];

  // fake clock advance
  useEffectCP(() => {
    if (!playing) return;
    const id = setInterval(() => setPos((p) => (p >= 100 ? 0 : p + 0.6)), 1500);
    return () => clearInterval(id);
  }, [playing]);

  const totalSec = 38 * 60; // 38 min
  const currentSec = Math.floor((pos / 100) * totalSec);
  const mm = String(Math.floor(currentSec / 60)).padStart(2, '0');
  const ss = String(currentSec % 60).padStart(2, '0');
  const totalMm = '38';
  const totalSs = '00';

  return (
    <div className="cp-app">
      <CourseSidebar activeIdx={active} onPick={setActive} />

      <main className="cp-main">
        <header className="cp-topbar">
          <div className="cp-crumbs">
            <span className="cp-crumb">Kurs</span>
            <span className="cp-crumb cp-crumb--sep">/</span>
            <span className="cp-crumb">Modul {mod.num}</span>
            <span className="cp-crumb cp-crumb--sep">/</span>
            <span className="cp-crumb cp-crumb--current">{mod.title}</span>
          </div>
          <div className="cp-topbar__right">
            <button className="cp-icon-btn" title="Notizen">✎</button>
            <button className="cp-icon-btn" title="Vollbild">⤢</button>
            <div className="cp-avatar">LM</div>
          </div>
        </header>

        <section className="cp-video">
          <div className="cp-video__frame">
            <div className="cp-video__poster">
              <div className="cp-eyebrow">Modul {mod.num} · Läuft jetzt</div>
              <div className="cp-video__title">{mod.title}</div>
              <button className="cp-play" onClick={() => setPlaying(!playing)}>
                <span className="cp-play__icon">{playing ? '❚❚' : '▶'}</span>
              </button>
            </div>

            <div className="cp-video__controls">
              <div className="cp-progress">
                <div className="cp-progress__bar" style={{width: `${pos}%`}}></div>
                <div className="cp-progress__head" style={{left: `${pos}%`}}></div>
              </div>
              <div className="cp-controls-row">
                <div className="cp-controls-left">
                  <button className="cp-icon-btn" onClick={() => setPlaying(!playing)}>{playing ? '❚❚' : '▶'}</button>
                  <button className="cp-icon-btn">⏮</button>
                  <button className="cp-icon-btn">⏭</button>
                  <span className="cp-time">{mm}:{ss} <span className="cp-time__sep">/</span> {totalMm}:{totalSs}</span>
                </div>
                <div className="cp-controls-right">
                  <button className="cp-speed">1.0×</button>
                  <button className="cp-icon-btn">CC</button>
                  <button className="cp-icon-btn">⤢</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cp-below">
          <nav className="cp-tabs">
            {['chapters', 'games', 'notes', 'transcript', 'resources'].map((t) => (
              <button
                key={t}
                className={`cp-tab ${tab === t ? 'is-active' : ''}`}
                onClick={() => { setTab(t); if (t !== 'games') setActiveGame(null); }}
              >
                {t === 'chapters'  ? 'Kapitel' :
                 t === 'games'     ? 'Übungen' :
                 t === 'notes'     ? 'Deine Notizen' :
                 t === 'transcript'? 'Transkript' : 'Material'}
                {t === 'games' && <span className="cp-tab__badge">{CP_GAMES.filter(g => !g.soon).length}</span>}
              </button>
            ))}
          </nav>

          {tab === 'chapters' && (
            <ul className="cp-chapters">
              {CP_CHAPTERS.map((c, i) => (
                <li key={c.t} className={`cp-chapter ${i === 1 ? 'is-current' : ''}`}>
                  <span className="cp-chapter__t">{c.t}</span>
                  <span className="cp-chapter__l">{c.label}</span>
                  <span className="cp-chapter__a">{i === 1 ? '▶ Hier' : 'Spring'}</span>
                </li>
              ))}
            </ul>
          )}

          {tab === 'games' && !activeGame && (
            <div className="cp-games">
              <div className="cp-games__intro">
                <div className="eyebrow accent">Interaktive Übungen</div>
                <h3 className="cp-games__title">Hände an die Decks.</h3>
                <p className="cp-games__lede">Mini-Spiele, die das Gehörte direkt drillen — ohne den Player zu verlassen.</p>
              </div>
              <div className="cp-games__grid">
                {CP_GAMES.map((g) => (
                  <button
                    key={g.id}
                    className={`cp-game-card ${g.soon ? 'is-soon' : ''}`}
                    disabled={g.soon}
                    onClick={() => setActiveGame(g)}
                  >
                    <div className="cp-game-card__num">{g.module}</div>
                    <div className="cp-game-card__body">
                      <div className="cp-game-card__title">{g.title}</div>
                      <div className="cp-game-card__sub">{g.subtitle}</div>
                      <div className="cp-game-card__meta">
                        <span>{g.level}</span>
                        <span className="cp-game-card__dot">·</span>
                        <span>{g.duration}</span>
                      </div>
                    </div>
                    <div className="cp-game-card__cta">
                      {g.soon ? <span className="cp-game-card__soon">Bald</span> : <span>Start →</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === 'games' && activeGame && (
            <div className="cp-game-stage">
              <div className="cp-game-stage__head">
                <button className="cp-game-stage__back" onClick={() => setActiveGame(null)}>← Übungen</button>
                <div className="cp-game-stage__title">
                  <span className="eyebrow accent">Übung · Modul {activeGame.module}</span>
                  <span className="cp-game-stage__name">{activeGame.title}</span>
                </div>
                <div className="cp-game-stage__actions">
                  <a className="cp-game-stage__link" href={activeGame.url} target="_blank" rel="noopener">↗ Vollbild</a>
                </div>
              </div>
              <div className="cp-game-stage__frame">
                <iframe
                  key={activeGame.id}
                  src={activeGame.url}
                  title={activeGame.title}
                  allow="autoplay; microphone"
                  loading="lazy"
                  className="cp-game-iframe"
                />
              </div>
              <div className="cp-game-stage__foot">
                <span>Tipp: nimm Kopfhörer · Latenz ist niedriger.</span>
                <span>Trainingsfortschritt wird automatisch gespeichert.</span>
              </div>
            </div>
          )}

          {tab === 'notes' && (
            <div className="cp-notes">
              <div className="cp-note">
                <div className="cp-note__time">11:48</div>
                <div className="cp-note__body">EQ-Drill: Lows komplett zu bei Mid-Kick. Cleaner als gedacht.</div>
              </div>
              <div className="cp-note">
                <div className="cp-note__time">29:50</div>
                <div className="cp-note__body">Blind-Mix-Übung — drei Versuche aufnehmen, am Sonntag anhören.</div>
              </div>
              <button className="cp-note-add">＋ Notiz hinzufügen bei {mm}:{ss}</button>
            </div>
          )}

          {tab === 'transcript' && (
            <div className="cp-transcript">
              <p><strong className="cp-tc-t">{`[11:48]`}</strong> Mids — das ist da wo dein Mix lebt. Vocals, Snare, Lead-Synth. Wenn du hier zu viel reindrehst klingt's wie ein Mittelwellen-Radio…</p>
              <p><strong className="cp-tc-t">{`[12:14]`}</strong> Faustregel: cut, don't boost. Lieber leise machen was stört, als laut was fehlt.</p>
              <p><strong className="cp-tc-t">{`[12:38]`}</strong> Versuch mal — nimm deinen aktuellen Track, dreh die Mids 6dB runter. Hör was passiert.</p>
            </div>
          )}

          {tab === 'resources' && (
            <ul className="cp-resources">
              <li><span className="cp-res__t">↓ PDF</span><span className="cp-res__l">Modul 03 — EQ Cheat Sheet</span><span className="cp-res__m">240 KB</span></li>
              <li><span className="cp-res__t">↓ WAV</span><span className="cp-res__l">Übungs-Loop · 124 BPM</span><span className="cp-res__m">8.2 MB</span></li>
              <li><span className="cp-res__t">→ Link</span><span className="cp-res__l">Empfohlene Tracks — Spotify Playlist</span><span className="cp-res__m">deindjcoach.de/03</span></li>
            </ul>
          )}
        </section>

        <section className="cp-next">
          <div className="cp-next__left">
            <div className="eyebrow">Als nächstes</div>
            <div className="cp-next__title">04 · Phrasing &amp; Song-Struktur</div>
            <div className="cp-next__sub">28 min · Auf Basis dieser Stunde</div>
          </div>
          <button className="cp-next__cta" onClick={() => setActive(3)}>Weiter →</button>
        </section>
      </main>
    </div>
  );
}
window.CoursePlayer = CoursePlayer;
