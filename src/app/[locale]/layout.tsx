import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import { routing } from '../../../i18n/routing';
import { routing as routingConfig } from '../../../i18n/routing';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routingConfig.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "APCAR - Association Professionnelle des Courtiers d'Assurances et de Réassurance du Cameroun",
  description: "Association Professionnelle des Courtiers d'Assurances et de Réassurance du Cameroun (APCAR), représentant et défendant les intérêts des courtiers d'assurance au Cameroun.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
