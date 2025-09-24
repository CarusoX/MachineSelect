import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine 5900 · Concesionaria multimarca",
  description:
    "Concesionaria boutique con ADN deportivo. Descubrí nuestra selección curada de vehículos y conectá con un asesor al instante.",
  metadataBase: new URL("https://www.machine5900.com.ar"),
  openGraph: {
    title: "Machine 5900 · Concesionaria multimarca",
    description:
      "Experiencia premium para comprar, vender o permutar tu auto. Agenda una prueba de manejo en minutos.",
    url: "https://www.machine5900.com.ar",
    siteName: "Machine 5900",
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.machine5900.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
