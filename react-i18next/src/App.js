import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const locales = {
  en: { title: 'English' },
  lv: { title: 'Latviski' },
  es: { title: 'Español' },
};

function App() {
  const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState(0);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };

  const handleLanguageChange = (event) => {
    const selectedLocale = event.target.value;
    changeLanguage(selectedLocale);
  };

  const handleReply = () => {
    
    alert(messages === 1 ? t('main.new_button3', { count: 0 }) : t('main.new_button3', { count: messages }));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">{t('main.header')}</h1>
        <div className="language-dropdown">
          <select onChange={handleLanguageChange} value={i18n.language}>
            {Object.keys(locales).map((locale) => (
              <option key={locale} value={locale}>
                {locales[locale].title}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="main-content">
        <button onClick={() => setMessages(messages + 1)} className="increment-button">
        {messages === 1 ? t('main.new_button', { count: 0 }) : t('main.new_button', { count: messages })}
        </button>
        <p className="message-count">
          {messages === 1 ? t('main.new_messages', { count: messages }) : t('main.new_messages', { count: messages })}
        </p>
        <p className="current-date">{t('main.current_date', { date: new Date() })}</p>
        <div className="incoming-message">
          <p>{t('main.incoming_message', { from: 'Someone' })}</p>
          <p>{t('main.message_contents', { body: 'How are you doing?', context: 'context' })}</p>
        </div>
        <button onClick={handleReply} className="reply-button">
        {messages === 1 ? t('main.new_button2', { count: 0 }) : t('main.new_button2', { count: messages })}
        </button>
      </main>
    </div>
  );
}

export default App;
