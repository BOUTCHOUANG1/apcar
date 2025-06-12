'use client';

import Link from 'next/link';
import './globals.css';

export default function RootPage() {
    return (
        <html lang="fr">
        <head>
            <title>APCAR - Choisissez votre langue</title>
            <meta name="description" content="Association Professionnelle des Courtiers d'Assurances et de Réassurance du Cameroun" />
        </head>
        <body className="antialiased">
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center space-y-8 p-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">APCAR</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Association Professionnelle des Courtiers d'Assurances<br />
                        et de Réassurance du Cameroun
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Choisissez votre langue / Choose your language</h2>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/fr"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <span>🇫🇷</span>
                            <span>Français</span>
                        </Link>
                        <Link
                            href="/en"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <span>🇺🇸</span>
                            <span>English</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
