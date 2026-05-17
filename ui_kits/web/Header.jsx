/* global React */
const { useState } = React;

function Header({ onNav, currentPage }) {
  const links = [
    { id: 'home',     label: 'Kurse' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'about',    label: 'Über' },
    { id: 'blog',     label: 'Blog' },
  ];
  return (
    <header className="ddc-header">
      <a className="ddc-header__brand" onClick={() => onNav('home')}>
        <img src="../../assets/logos/dein-dj-coach-wht.png" alt="Dein DJ Coach" />
      </a>
      <nav className="ddc-header__nav">
        {links.map((l) => (
          <a
            key={l.id}
            className={`nav-link ${currentPage === l.id ? 'nav-link--active' : ''}`}
            onClick={() => onNav(l.id)}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="ddc-header__cta">
        <a className="nav-link" onClick={() => onNav('login')}>Login</a>
        <a className="btn btn--primary btn--sm" onClick={() => onNav('book')}>Jetzt starten</a>
      </div>
    </header>
  );
}

window.Header = Header;
