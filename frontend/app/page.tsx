"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";

const heroStats = [
  { label: "Años de trayectoria", value: "20+" },
  { label: "Autos entregados", value: "3.500" },
  { label: "Puntaje de satisfacción", value: "4.9/5" },
];

const carInventory = [
  {
    brand: "Toyota",
    tagline: "Tecnología híbrida y la confiabilidad japonesa",
    highlight: "Curaduría Machine para uso urbano",
    vehicles: [
      {
        model: "Corolla SEG Hybrid",
        year: 2023,
        price: "USD 29.800",
        details: ["Automático CVT", "18.200 km", "Garantía oficial vigente"],
      },
      {
        model: "SW4 SRX",
        year: 2022,
        price: "USD 64.500",
        details: ["4x4", "Service oficial al día", "Pack seguridad Toyota Safety Sense"],
      },
    ],
  },
  {
    brand: "BMW",
    tagline: "Performance con ADN deportivo Machine",
    highlight: "Unidades certificadas con historial completo",
    vehicles: [
      {
        model: "330i M Sport",
        year: 2021,
        price: "USD 52.900",
        details: ["Paquete M Performance", "26.000 km", "Llantas 19\" diamantadas"],
      },
      {
        model: "X1 sDrive 20i",
        year: 2022,
        price: "USD 44.200",
        details: ["Nuevo diseño xLine", "17.500 km", "Techo panorámico"],
      },
    ],
  },
  {
    brand: "Mercedes-Benz",
    tagline: "Lujo urbano con estilo Machine",
    highlight: "Garantía extendida + detailing premium",
    vehicles: [
      {
        model: "GLA 200 Progressive",
        year: 2022,
        price: "USD 47.500",
        details: ["Motor turbo 163 cv", "20.300 km", "MBUX con realidad aumentada"],
      },
      {
        model: "C 300 AMG-Line",
        year: 2021,
        price: "USD 59.900",
        details: ["Suspensión adaptativa", "32.000 km", "Interior AMG Artico"],
      },
    ],
  },
  {
    brand: "Ford",
    tagline: "Pickups y muscle cars listos para rodar",
    highlight: "Vehículos listos para trabajar o disfrutar",
    vehicles: [
      {
        model: "Bronco Sport Wildtrak",
        year: 2023,
        price: "USD 54.800",
        details: ["Tracción 4x4 GOAT", "9.400 km", "Motor EcoBoost 2.0"],
      },
      {
        model: "Mustang GT Premium",
        year: 2020,
        price: "USD 69.000",
        details: ["V8 5.0 460 cv", "22.000 km", "Modo Track + Launch Control"],
      },
    ],
  },
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
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 pb-32 pt-10 sm:px-8 lg:px-0">
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Empresa, objetivos y ADN Machine</h2>
            <p className="text-pretty text-base text-white/70">
              Nacimos como un garaje boutique especializado en vehículos deportivos y premium. Dos décadas después seguimos con la misma obsesión: encontrar la unidad perfecta para cada cliente y acompañarlo en todo el recorrido.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#f1c40f]/10 p-6 shadow-inner shadow-[#f1c40f]/30">
                <h3 className="text-lg font-semibold text-[#f1c40f]">Objetivos 2024</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                    Expandir la oferta electrificada y híbrida.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                    Lanzar la membresía Machine Club con beneficios exclusivos.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#f1c40f]" />
                    Reducir tiempos de entrega a menos de 48 horas.
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
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>{vehicle.year}</span>
                      <span className="rounded-full bg-[#f1c40f]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f1c40f]">
                        Premium
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white">{vehicle.model}</h4>
                    <p className="text-lg font-semibold text-[#f1c40f]">{vehicle.price}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {vehicle.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f1c40f]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
            className="section-card px-8 py-10"
          >
            <h3 className="text-xl font-semibold text-white">Armemos tu plan a medida</h3>
            <p className="mt-2 text-sm text-white/70">
              Completá el formulario y un asesor Machine te responde en menos de 30 minutos hábiles.
            </p>
            <form className="mt-8 space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Nombre y apellido</label>
                <input
                  type="text"
                  required
                  placeholder="Juan Pérez"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f1c40f]/60 focus:outline-none"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="mail@machine.com"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f1c40f]/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Teléfono</label>
                  <input
                    type="tel"
                    required
                    placeholder="11 5555 5555"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f1c40f]/60 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Interés</label>
                <select
                  defaultValue="comprar"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white focus:border-[#f1c40f]/60 focus:outline-none"
                >
                  <option value="comprar">Quiero comprar</option>
                  <option value="vender">Quiero vender</option>
                  <option value="tasar">Quiero tasar</option>
                  <option value="test-drive">Agendar test drive</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Contanos en qué unidad estás interesado y cómo preferís que te contactemos."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#f1c40f]/60 focus:outline-none"
                />
              </div>
              <button type="submit" className="glass-button w-full justify-center">
                Enviar consulta
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 7-7 7 7" />
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="section-card flex flex-col gap-6 px-8 py-10"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">Plantillas inteligentes</h3>
              <p className="mt-2 text-sm text-white/70">
                Seleccioná una plantilla y abrí tu servicio de mail favorito con el mensaje listo para enviar.
              </p>
            </div>
            <div className="space-y-4">
              {contactTemplates.map((template) => {
                const query = new URLSearchParams({
                  subject: template.subject,
                  body: template.body,
                }).toString();

                return (
                  <div key={template.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h4 className="text-lg font-semibold text-white">{template.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{template.description}</p>
                    <a
                      href={`mailto:ventas@machine5900.com.ar?${query}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f1c40f] transition hover:border-[#f1c40f]/50 hover:text-white"
                    >
                      Usar plantilla
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
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-[#f1c40f]/30 bg-[#f1c40f]/10 p-5 text-sm text-white/80">
              <p className="font-semibold text-[#f1c40f]">Horario extendido</p>
              <p className="mt-1 text-white/80">Lunes a viernes de 9 a 19 hs · Sábados de 10 a 14 hs.</p>
              <p className="mt-2 text-white/60">Av. del Libertador 5900 · CABA · +54 11 4567 8900</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 px-8 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/80">
            © {new Date().getFullYear()} Machine 5900. Concesionaria multimarca · Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#sobre-nosotros" className="hover:text-white">
              Sobre nosotros
            </Link>
            <Link href="#inventario" className="hover:text-white">
              Inventario
            </Link>
            <Link href="#contacto" className="hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/40">
          Diseñado con el ADN Machine: colores icónicos, textura metalizada y animaciones fluidas para una experiencia digital premium.
        </p>
      </footer>

      <a
        href="https://wa.me/5491145678900"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-3 font-semibold text-[#041007] shadow-[0_20px_45px_-20px_rgba(37,211,102,0.8)] transition hover:scale-105 hover:shadow-[0_30px_60px_-25px_rgba(37,211,102,0.95)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M16.027 3C9.395 3 4 8.395 4 15.027c0 2.653.869 5.11 2.338 7.11L5 29l7.063-1.31A11.96 11.96 0 0 0 16.027 27C22.66 27 28 21.605 28 14.973 28 8.34 22.66 3 16.027 3Zm6.896 16.78c-.28.787-1.64 1.52-2.266 1.61-.58.086-1.327.123-2.14-.134-.493-.156-1.13-.365-1.948-.71-3.43-1.48-5.66-4.94-5.832-5.17-.173-.23-1.395-1.855-1.395-3.54 0-1.685.885-2.513 1.198-2.863.28-.318.745-.463 1.197-.463.145 0 .276.007.396.013.346.015.52.036.75.58.28.675.962 2.337 1.046 2.507.086.173.145.376.026.605-.115.23-.173.375-.347.58-.173.202-.366.454-.523.61-.173.173-.353.362-.152.71.202.347.9 1.48 1.93 2.39 1.33 1.19 2.452 1.56 2.8 1.733.347.173.55.145.75-.086.23-.26.86-1 1.09-1.346.23-.347.462-.288.78-.173.318.115 2.033.96 2.38 1.135.347.173.58.26.665.405.087.144.087.83-.192 1.617Z" />
        </svg>
        WhatsApp inmediato
      </a>
    </main>
  );
}
