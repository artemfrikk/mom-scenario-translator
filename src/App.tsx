import { useStore } from './notice';
import { TranslatorPage } from './ui/Translator';

export default function App() {
  const toast = useStore((s) => s.notice);
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">✶</span>
          Особняки безумия
        </div>
        <span className="topbar-rule" />
        <span className="topbar-label">Переводчик сценариев Valkyrie</span>
      </header>
      <main className="workspace">
        <TranslatorPage />
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
