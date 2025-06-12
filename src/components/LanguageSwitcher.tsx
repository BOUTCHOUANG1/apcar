'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extraire la locale actuelle du pathname
  const currentLocale = pathname.split('/')[1] || 'fr';

  const handleLanguageChange = (newLocale: string) => {
    // Remplacer la locale dans le pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
      <div className="relative">
        <button
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Changer de langue"
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              {languages.map((language) => (
                  <button
                      key={language.code}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-3"
                      onClick={() => handleLanguageChange(language.code)}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLocale === language.code && (
                        <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
              ))}
            </div>
        )}
      </div>
  );
}
