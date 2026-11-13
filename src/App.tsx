import { useStore } from './notice';
import { TranslatorPage } from './ui/Translator';

export default function App() {
  const toast = useStore((s) => s.notice);
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          Особняки безумия <small>переводчик сценариев</small>
        </div>
        <div className="title" />
      </header>
      <main className="workspace">
        <TranslatorPage />
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
