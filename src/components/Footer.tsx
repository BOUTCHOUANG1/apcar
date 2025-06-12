import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const t = useTranslations();
    const currentYear = new Date().getFullYear();

    const navigationItems = [
        { href: '/', label: t('nav.home') },
        { href: '/about', label: t('nav.about') },
        { href: '/missions', label: t('nav.missions') },
        { href: '/blog', label: t('nav.blog') },
        { href: '/calendar', label: t('nav.calendar') },
        { href: '/contact', label: t('nav.contact') },
    ];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/images/apcar-logo-new.jpeg"
                                alt="Logo APCAR"
                                width={120}
                                height={48}
                                className="h-12 w-auto bg-white rounded p-1"
                            />
                        </div>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61573999100481"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/106652166/admin/dashboard/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.navigation.title')}</h3>
                        <ul className="space-y-2">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                                <div>
                                    <p className="text-slate-400 text-sm">{t('footer.contact.address')}</p>
                                    <p className="text-slate-300">{t('footer.contact.addressValue')}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <div>
                                    <p className="text-slate-400 text-sm">{t('footer.contact.phone')}</p>
                                    <a
                                        href={`tel:${t('footer.contact.phoneValue')}`}
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        {t('footer.contact.phoneValue')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <div>
                                    <p className="text-slate-400 text-sm">{t('footer.contact.email')}</p>
                                    <a
                                        href={`mailto:${t('footer.contact.emailValue')}`}
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        {t('footer.contact.emailValue')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                    <p className="text-slate-400">
                        © {currentYear} {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
