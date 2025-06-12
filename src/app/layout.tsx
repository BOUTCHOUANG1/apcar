import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APCAR - Association Professionnelle des Courtiers d'Assurances et de Réassurance du Cameroun",
  description: "Association Professionnelle des Courtiers d'Assurances et de Réassurance du Cameroun (APCAR)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
