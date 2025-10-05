import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' }
  ];

  return (
    <div className="language-switcher">
      <select 
        value={i18n.language} 
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="form-select"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;