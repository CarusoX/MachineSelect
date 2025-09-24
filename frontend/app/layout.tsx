import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050a0e]/90 backdrop-blur supports-[backdrop-filter]:bg-[#050a0e]/80">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8 lg:px-0">
            <Link href="/" className="flex items-center gap-3 text-white transition hover:text-white/80">
              <Image
                src="/file.svg"
                alt="Logo Machine Select"
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="text-lg font-semibold tracking-tight">Machine Select</span>
            </Link>
            <nav>
              <ul className="flex items-center gap-6 text-sm font-medium text-white/70">
                <li>
                  <Link href="#inicio" className="transition hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#sobre-nosotros" className="transition hover:text-white">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#inventario" className="transition hover:text-white">
                    Inventario
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center rounded-full bg-[#f1c40f] px-4 py-2 font-semibold text-[#1b1b1b] shadow-[0_12px_24px_-12px_rgba(241,196,15,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-14px_rgba(241,196,15,0.8)]"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
