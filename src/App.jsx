import { useState } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { profile } from './data/profile';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <main className="app-shell" data-theme={theme}>
      <section
        className="learning-header"
        aria-labelledby="page-title"
      >
        <div className="header-row">
          <div>
            <p className="kicker">
              React Project 01
            </p>

            <h2 id="page-title">
              Profile Card
            </h2>

            <p>
              Practice JSX, components, props, composition,
              lists, and semantic HTML.
            </p>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'dark' ? 'light' : 'dark'
            } theme`}
          >
            <span aria-hidden="true">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>

            <span>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
      </section>

      <ProfileCard profile={profile} />
    </main>
  );
}