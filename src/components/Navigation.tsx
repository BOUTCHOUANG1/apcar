'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Obtenir le chemin sans locale
  const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const navigationItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/missions', label: t('missions') },
    { href: '/blog', label: t('blog') },
    { href: '/calendar', label: t('calendar') },
    { href: '/contact', label: t('contact') },
  ];

  return (
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm" role="banner">
        <nav
            aria-label={t('menuLabel')}
            className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
              href="/"
              className="flex items-center"
              aria-label="APCAR"
          >
            <Image
                src="/images/apcar-logo-new.jpeg"
                alt="Logo APCAR"
                width={150}
                height={60}
                className="h-12 w-auto"
                priority
            />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigationItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors hover:text-blue-600 ${
                        isActive(item.href)
                            ? 'text-blue-600 font-semibold'
                            : 'text-slate-800'
                    }`}
                    role="menuitem"
                >
                  {item.label}
                </Link>
            ))}
          </div>

          {/* Sélecteur de langue et menu mobile */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Bouton menu mobile */}
            <button
                className="md:hidden p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={t('menuLabel')}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-2 font-medium transition-colors hover:text-blue-600 ${
                            isActive(item.href)
                                ? 'text-blue-600 font-semibold'
                                : 'text-slate-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                ))}
              </div>
            </div>
        )}
      </header>
  );
}

// Exports
export { Navigation };
export default Navigation;
