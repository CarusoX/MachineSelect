"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Inventario", href: "#inventario" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
];

const heroStats = [
  { label: "Años de trayectoria", value: "20+" },
  { label: "Autos entregados", value: "3.500" },
  { label: "Puntaje de satisfacción", value: "4.9/5" },
];

const carInventory = [
  {
    brand: "Toyota",
    tagline: "Tecnología híbrida y la confiabilidad japonesa",
    highlight: "Curaduría Machine para uso urbano y aventuras familiares",
    vehicles: [
      {
        model: "Corolla SEG Hybrid",
        year: 2023,
        price: "USD 29.800",
        description:
          "Sedán híbrido full con asistencia Toyota Safety Sense y consumo promedio de 4,5 l/100 km.",
        details: ["Automático CVT", "18.200 km", "Garantía oficial vigente"],
        image: "/vehicles/toyota-lineup.svg",
      },
      {
        model: "SW4 SRX",
        year: 2022,
        price: "USD 64.500",
        description:
          "SUV 7 asientos con tracción 4x4 permanente, ideal para viajes largos y uso off-road premium.",
        details: ["4x4", "Service oficial al día", "Pack Toyota Safety Sense"],
        image: "/vehicles/toyota-lineup.svg",
      },
    ],
  },
  {
    brand: "Ford",
    tagline: "Innovación americana para cada desafío",
    highlight: "Vehículos listos para trabajar, explorar y disfrutar el camino",
    vehicles: [
      {
        model: "Bronco Sport Wildtrak",
        year: 2023,
        price: "USD 54.800",
        description:
          "4x4 con modo GOAT, llantas beadlock y paquete de asistencia para senderos extremos.",
        details: ["Tracción 4x4 GOAT", "9.400 km", "Motor EcoBoost 2.0"],
        image: "/vehicles/ford-lineup.svg",
      },
      {
        model: "Mustang GT Premium",
        year: 2020,
        price: "USD 69.000",
        description:
          "Coupé V8 con paquete Performance y escape activo, calibrado por nuestro equipo Machine.",
        details: ["V8 5.0 460 cv", "22.000 km", "Modo Track + Launch Control"],
        image: "/vehicles/ford-lineup.svg",
      },
    ],
  },
  {
    brand: "Fiat",
    tagline: "Eficiencia urbana con actitud aventurera",
    highlight: "Unidades compactas certificadas y listas para financiar al instante",
    vehicles: [
      {
        model: "Pulse Impetus Turbo",
        year: 2023,
        price: "USD 25.400",
        description:
          "SUV compacto con motor turbo 1.0, ADAS nivel 1 y conectividad completa Fiat Connect Me.",
        details: ["Caja CVT", "12.600 km", "Techo bitono"],
        image: "/vehicles/fiat-lineup.svg",
      },
      {
        model: "Cronos Precision",
        year: 2022,
        price: "USD 18.900",
        description:
          "Sedán producido en Córdoba con pantalla Uconnect 7\" y mantenimiento programado incluido.",
        details: ["Motor 1.8 E.torQ", "24.300 km", "Pantalla Uconnect 7\""],
        image: "/vehicles/fiat-lineup.svg",
      },
    ],
  },
  {
    brand: "Audi",
    tagline: "Performance con ADN deportivo",
    highlight: "Curaduría premium con historial digitalizado de cada unidad",
    vehicles: [
      {
        model: "Q5 45 TFSI quattro",
        year: 2022,
        price: "USD 58.200",
        description:
          "SUV híbrido ligero con quattro ultra y asistente de conducción Audi pre sense front.",
        details: ["Suspensión adaptativa", "21.800 km", "Sonido Bang & Olufsen"],
        image: "/vehicles/audi-lineup.svg",
      },
      {
        model: "A3 Sportback S line",
        year: 2021,
        price: "USD 36.900",
        description:
          "Hatchback turbo con paquete S line, Virtual Cockpit y historial de mantenimiento certificado.",
        details: ["Motor 1.4 TFSI", "28.400 km", "Faros Matrix LED"],
        image: "/vehicles/audi-lineup.svg",
      },
    ],
  },
  {
    brand: "Jeep",
    tagline: "Aventura y sofisticación en un mismo ADN",
    highlight: "Pre-entrega Machine con detailing cerámico y protección off-road",
    vehicles: [
      {
        model: "Compass Limited Plus",
        year: 2023,
        price: "USD 43.700",
        description:
          "SUV mediano con ADAS completo, 4x4 on demand y tapizados en cuero premium.",
        details: ["Motor 1.3 Turbo", "15.800 km", "Uconnect 10\""],
        image: "/vehicles/jeep-lineup.svg",
      },
      {
        model: "Gladiator Rubicon",
        year: 2022,
        price: "USD 78.900",
        description:
          "Pickup con ejes Dana 44, neumáticos Mud Terrain y winche Warn instalado por Machine.",
        details: ["Caja automática 8 vel.", "19.500 km", "Trail Rated"],
        image: "/vehicles/jeep-lineup.svg",
      },
    ],
  },
  {
    brand: "Renault",
    tagline: "Ingeniería francesa adaptada a tu negocio",
    highlight: "Garantía certificada y programas de mantenimiento predictivo",
    vehicles: [
      {
        model: "Alaskan Intens 4x4",
        year: 2022,
        price: "USD 44.300",
        description:
          "Pickup doble cabina con 4x4 low, caja automática y cobertura ExtendCare 3 años.",
        details: ["Motor 2.3 biturbo", "27.600 km", "Multimedia Easy Link"],
        image: "/vehicles/renault-lineup.svg",
      },
      {
        model: "Stepway Intens",
        year: 2023,
        price: "USD 19.800",
        description:
          "Crossover urbano con ESP, carrocería elevada y pack multimedia con cámara HD.",
        details: ["Motor 1.6 SCe", "9.800 km", "Sistema Media Evolution"],
        image: "/vehicles/renault-lineup.svg",
      },
    ],
  },
  {
    brand: "Peugeot",
    tagline: "Diseño francés con tecnología de vanguardia",
    highlight: "Selección boutique con protocolos de detailing y software actualizado",
    vehicles: [
      {
        model: "3008 GT Pack Hybrid4",
        year: 2022,
        price: "USD 52.400",
        description:
          "SUV plug-in hybrid con 300 cv, i-Cockpit y asistencia semiautónoma nivel 2.",
        details: ["Tracción AWD", "23.100 km", "Tapizados Nappa"],
        image: "/vehicles/peugeot-lineup.svg",
      },
      {
        model: "208 GT Line",
        year: 2023,
        price: "USD 26.700",
        description:
          "Hatchback producido en El Palomar con i-Cockpit 3D y paquete ADAS Drive Assist.",
        details: ["Motor 1.2 PureTech", "11.400 km", "Full LED"],
        image: "/vehicles/peugeot-lineup.svg",
      },
    ],
  },
];

const brandLogos = [
  { name: "Ford", image: "/logos/ford.svg" },
  { name: "Fiat", image: "/logos/fiat.svg" },
  { name: "Audi", image: "/logos/audi.svg" },
  { name: "Jeep", image: "/logos/jeep.svg" },
  { name: "Toyota", image: "/logos/toyota.svg" },
  { name: "Renault", image: "/logos/renault.svg" },
  { name: "Peugeot", image: "/logos/peugeot.svg" },
];

const contactTemplates = [
  {
    title: "Quiero vender mi auto",
    description:
      "Compartinos marca, modelo, año y kilometraje para cotizarlo en 24 hs.",
    subject: "Tasación inmediata",
    body: "Hola Machine 5900, quiero vender mi auto. Marca/modelo: ____. Año: ____. Km: ____. Estado general: ____.",
  },
  {
    title: "Reservar un test drive",
    description:
      "Elegí día y horario, y prepararemos la unidad para vos.",
    subject: "Reserva de test drive",
    body: "Hola equipo Machine 5900, quiero agendar un test drive para el modelo ____ el día ____ a las ____ hs.",
  },
  {
    title: "Consultar financiación",
    description:
      "Te diseñamos un plan a medida con bancos aliados.",
    subject: "Consulta financiación",
    body: "Hola Machine 5900, quisiera conocer opciones de financiación para el modelo ____ con entrega estimada en ____.",
  },
];

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(carInventory[0].brand);

  const activeBrand = useMemo(
    () => carInventory.find((brand) => brand.brand === selectedBrand) ?? carInventory[0],
    [selectedBrand],
  );

  return (
    <div className="relative">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050a0e]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8 lg:px-0">
          <Link href="#hero" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f1c40f]/20 text-lg font-semibold text-[#f1c40f]">
              M
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm uppercase tracking-[0.4em] text-white/60">Machine 5900</span>
              <span className="text-lg font-semibold text-white">Garage Boutique</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contacto"
            className="glass-button hidden text-sm md:inline-flex"
          >
            Pedir asesor
          </Link>
          <Link
            href="#contacto"
            className="glass-button text-xs md:hidden"
          >
            Contacto
          </Link>
        </div>
      </header>

      <main
        id="hero"
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 pb-32 pt-32 sm:px-8 lg:px-0"
      >
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#f1c40f]/90 via-[#f39c12]/80 to-[#34495e]/90 p-[1px]">
          <div className="relative h-full w-full rounded-[38px] bg-[#050a0e]/90 px-6 py-12 sm:px-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(241,196,15,0.35),_transparent_55%)]" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-10 lg:flex-row lg:items-center"
            >
              <div className="flex-1 space-y-6">
                <span className="glass-chip">CONCESIONARIA MACHINE</span>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  El garaje boutique para los que aman manejar.
                </h1>
                <p className="text-pretty text-lg text-white/80 sm:max-w-xl">
                  Autos seleccionados uno a uno, procesos digitales y un equipo obsesionado con cada detalle. Comprá, vendé o permutá en una experiencia 100% Machine.
                </p>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]">
                  <Image
                    src="/images/hero-garage.svg"
                    alt="Showroom boutique de Machine con un deportivo iluminado"
                    width={960}
                    height={640}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="#inventario" className="glass-button">
                    Ver inventario
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                  >
                    Hablar con un asesor
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 5h13" />
                      <path d="M8 12h13" />
                      <path d="M8 19h13" />
                      <path d="M3 5h.01" />
                      <path d="M3 12h.01" />
                      <path d="M3 19h.01" />
                    </svg>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="section-card flex-1 space-y-6 p-8"
              >
                <h2 className="text-lg font-semibold text-white">Machine Experience</h2>
                <p className="text-sm text-white/70">
                  Coordinamos la experiencia completa: detailing premium, gestoría express, entrega en el día y seguimiento post venta.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/5 p-4 text-center shadow-inner shadow-black/30">
                      <p className="text-3xl font-semibold text-[#f1c40f]">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="sobre-nosotros" className="section-card relative overflow-hidden px-8 py-12 sm:px-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-white/0" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-[1fr_0.8fr]"
          >
            <div className="space-y-6">
              <span className="glass-chip">SOBRE NOSOTROS</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Veinte años construyendo confianza</h2>
              <p className="text-pretty text-base text-white/70">
                Nacimos como un garaje boutique especializado en vehículos deportivos y premium. Dos décadas después seguimos con la misma obsesión: encontrar la unidad perfecta para cada cliente y acompañarlo en todo el recorrido.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#f1c40f]/10 p-6 shadow-inner shadow-[#f1c40f]/30">
                  <h3 className="text-lg font-semibold text-[#f1c40f]">Historia Machine</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                      Apertura del primer showroom boutique en Palermo en 2004.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                      Equipo interno de tasación y detailing certificado por fabricantes premium.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                      Red nacional de entregas puerta a puerta con logística asegurada.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">Nuestro diferencial</h3>
                  <ul className="mt-4 space-y-4 text-sm text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f1c40f]">AI</span>
                      Diagnóstico técnico asistido por inteligencia artificial.
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f1c40f]">VR</span>
                      Recorridos virtuales y seguimiento online de cada unidad.
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#f1c40f]">24H</span>
                      Asesoramiento personalizado 24/7 vía WhatsApp Business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8">
                <p className="text-lg text-white/80">
                  “Machine nació para hacer fácil algo que suele ser complejo. Si estás comprando, sabemos que querés emoción y seguridad. Si estás vendiendo, buscás agilidad y confianza. Nuestro equipo combina datos, tecnología y pasión por los autos para superar esa expectativa.”
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
                  <span className="font-semibold text-white">Marcos Cabrera</span>
                  · Director Comercial Machine 5900
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Gestoría", value: "48 hs" },
                  { label: "Detalle premium", value: "Incluido" },
                  { label: "Cobertura", value: "Nacional" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="inventario" className="space-y-10">
          <div className="flex flex-col gap-4">
            <span className="glass-chip">LOS AUTOS DISPONIBLES</span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Descubrí por marca</h2>
              <p className="text-sm text-white/60">
                Stock actualizado y chequeado diariamente. Seleccioná la marca para ver unidades destacadas.
              </p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="section-card space-y-8 px-6 py-8 sm:px-10"
          >
            <div className="flex flex-wrap gap-3">
              {carInventory.map((brand) => (
                <button
                  key={brand.brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand.brand)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedBrand === brand.brand
                      ? "border-[#f1c40f]/80 bg-[#f1c40f]/20 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#f1c40f]" />
                  {brand.brand}
                </button>
              ))}
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f1c40f]/80">
                  {activeBrand.brand}
                </p>
                <h3 className="text-2xl font-semibold text-white">{activeBrand.tagline}</h3>
                <p className="text-sm text-white/70">{activeBrand.highlight}</p>
                <div className="flex flex-wrap gap-3 text-sm text-white/60">
                  <span className="rounded-full border border-white/10 px-4 py-1">Financiación flexible</span>
                  <span className="rounded-full border border-white/10 px-4 py-1">Toma de usado</span>
                  <span className="rounded-full border border-white/10 px-4 py-1">Entrega inmediata</span>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {activeBrand.vehicles.map((vehicle) => (
                  <motion.article
                    key={vehicle.model}
                    whileHover={{ y: -6 }}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]"
                  >
                    <div className="space-y-4">
                      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={vehicle.image}
                          alt={`Imagen ilustrativa del ${vehicle.model}`}
                          fill
                          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 85vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>{vehicle.year}</span>
                          <span className="rounded-full bg-[#f1c40f]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f1c40f]">
                            Certificado
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-white">{vehicle.model}</h4>
                        <p className="text-lg font-semibold text-[#f1c40f]">{vehicle.price}</p>
                        <p className="text-sm text-white/70">{vehicle.description}</p>
                        <ul className="space-y-2 text-sm text-white/70">
                          {vehicle.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#f1c40f]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button className="mt-6 inline-flex items-center justify-between rounded-full border border-white/10 bg-[#34495e]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[#f1c40f]/40 hover:text-white">
                      Ver ficha completa
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="marcas" className="section-card space-y-8 px-6 py-10 sm:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="glass-chip">MARCAS ALIADAS</span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trabajamos con los mejores fabricantes</h2>
            </div>
            <p className="max-w-xl text-sm text-white/60">
              Nuestro equipo técnico se capacita directamente con cada marca para garantizar diagnósticos precisos, repuestos originales y experiencias de entrega premium.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <Image
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  width={160}
                  height={120}
                  className="h-auto w-32 object-contain sm:w-36"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="space-y-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="glass-chip">CONTACTO</span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Conectá con Machine</h2>
            </div>
            <p className="max-w-xl text-sm text-white/60">
              Elegí la vía que prefieras: escribinos directo por WhatsApp, enviá un formulario o usá nuestras plantillas inteligentes para acelerar tu consulta.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="section-card space-y-6 p-8"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Vías directas</h3>
                <p className="text-sm text-white/70">
                  Respondemos en menos de 10 minutos de lunes a lunes. Coordiná una videollamada, una visita al showroom o una inspección a domicilio.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://wa.me/5491144444444"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#25D366]/60 hover:bg-[#25D366]/20"
                >
                  WhatsApp Machine
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.5 12a9.5 9.5 0 0 1-13.89 8.31L3 21l.69-4.11A9.5 9.5 0 1 1 21.5 12z" />
                    <path d="m8.88 9.94.09-.05a2 2 0 0 1 2.58.32l.45.51a2 2 0 0 1 .23 2.36l-.07.12a3.5 3.5 0 0 0 1.27 1.37 4 4 0 0 0 1.79.65 2 2 0 0 1 1.65 2v.11" />
                  </svg>
                </a>
                <a
                  href="mailto:contacto@machine5900.com"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  contacto@machine5900.com
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 4 8 8 8-8" />
                    <path d="M20 4H4v16h16V4Z" />
                  </svg>
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Showroom Machine 5900</h4>
                <p className="mt-2 text-white/80">Gorriti 5900, Palermo - Buenos Aires</p>
                <p className="text-sm text-white/60">Lunes a sábado de 10 a 20 hs · Domingos con cita previa</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="section-card space-y-6 p-8"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Plantillas rápidas</h3>
                <p className="text-sm text-white/70">
                  Copiá y pegá en tu mail o WhatsApp y recibí una respuesta personalizada en minutos.
                </p>
              </div>
              <div className="space-y-4">
                {contactTemplates.map((template) => (
                  <div key={template.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{template.title}</h4>
                        <p className="text-sm text-white/60">{template.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const subject = encodeURIComponent(template.subject);
                          const body = encodeURIComponent(template.body);
                          window.open(`mailto:contacto@machine5900.com?subject=${subject}&body=${body}`);
                        }}
                        className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/30 hover:text-white"
                      >
                        Enviar
                      </button>
                    </div>
                    <p className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs font-mono text-white/70">
                      {template.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
