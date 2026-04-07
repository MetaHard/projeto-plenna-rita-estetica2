"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Sparkles,
  Droplet,
  User,
  MessageCircle,
  MapPin,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Heart,
  Star,
  Leaf,
} from "lucide-react";

// Instagram SVG (not available in lucide-react v1.7)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { useState } from "react";
import clsx from "clsx";

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_LINK = "https://wa.me/message/YAYO5KSVWYLVJ1";
const INSTAGRAM_LINK =
  "https://www.instagram.com/plennaestetica?utm_source=qr&igsh=MXhzMGdpNXhyMWN1eA==";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const treatments = [
  {
    title: "Lipedema\nPós-op",
    icon: Droplet,
    description: "Tratamento especializado para controle e redução do lipedema",
  },
  {
    title: "Gordura\nLocalizada",
    icon: User,
    description: "Protocolos avançados para eliminar gordura teimosa",
  },
  {
    title: "Seca\nBarriga",
    icon: Heart,
    description: "Resultados visíveis desde a primeira sessão",
  },
  {
    title: "Diástase",
    icon: CheckCircle,
    description: "Recuperação abdominal com técnicas especializadas",
  },
  {
    title: "Drenagem\nLinfática",
    icon: Leaf,
    description: "Redução de inchaço e melhora da circulação",
  },
  {
    title: "Emagrecimento",
    icon: Sparkles,
    description: "Programas personalizados de emagrecimento corporal",
  },
];

const galleryTabs = [
  {
    label: "Resultados",
    images: [
      { src: "/resultado-1.jpg", caption: "Transformação Corporal" },
      { src: "/resultado-2.jpg", caption: "Transformação Corporal" },
      { src: "/resultado-3.jpg", caption: "Transformação Corporal" },
      { src: "/resultado-4.jpg", caption: "Transformação Corporal" },
    ],
  },
  {
    label: "Lipedema",
    images: [
      { src: "/lipedema-1.jpg", caption: "Lipedema + Emagrecimento" },
      { src: "/lipedema-2.jpg", caption: "Lipedema + Emagrecimento" },
      { src: "/lipedema-3.jpg", caption: "Lipedema + Emagrecimento" },
    ],
  },
  {
    label: "Seca Barriga",
    images: [
      { src: "/seca-barriga-1.jpg", caption: "Protocolo Seca Barriga" },
      { src: "/seca-barriga-2.jpg", caption: "Protocolo Seca Barriga" },
      { src: "/seca-barriga-3.jpg", caption: "Protocolo Seca Barriga" },
      { src: "/crio-power-1.jpg", caption: "Seca Barriga Crio Power" },
      { src: "/enzimatico-1.jpg", caption: "Seca Barriga Enzimático" },
    ],
  },
];

const testimonials = [
  {
    name: "Ana Carolina",
    text: "Incrível! Já na primeira sessão de seca barriga senti a diferença. A Dra. Rita é extremamente cuidadosa e atenciosa. Resultado maravilhoso!",
    stars: 5,
    treatment: "Seca Barriga",
  },
  {
    name: "Fernanda Lima",
    text: "Finalmente encontrei um tratamento eficaz para o meu lipedema. Resultados visíveis desde o início! Recomendo demais para todas.",
    stars: 5,
    treatment: "Lipedema",
  },
  {
    name: "Mariana Costa",
    text: "O ambiente da clínica é lindo e o atendimento impecável. Minha autoestima voltou completamente. Obrigada Plenna!",
    stars: 5,
    treatment: "Gordura Localizada",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentImages = galleryTabs[activeTab].images;

  const nextSlide = () =>
    setActiveSlide((p) => (p === currentImages.length - 1 ? 0 : p + 1));

  const prevSlide = () =>
    setActiveSlide((p) => (p === 0 ? currentImages.length - 1 : p - 1));

  const changeTab = (i: number) => {
    setActiveTab(i);
    setActiveSlide(0);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F4] font-sans text-[#2C2C2C] selection:bg-[#E8B4C2] selection:text-white">
      {/* ── Floating WhatsApp ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "#25D366",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
        }}
      >
        <MessageCircle size={28} fill="white" strokeWidth={0} />
      </a>

      <div className="max-w-[480px] mx-auto bg-white min-h-screen shadow-sm overflow-hidden">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section
          className="relative flex flex-col items-center pt-10 pb-10 px-6 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #FAF7F4 0%, #ffffff 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, #E8B4C2 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(circle, #E5C8A0 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-center w-full relative z-10"
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="w-44 mb-7">
              <Image
                src="/logo.jpg"
                alt="Plenna Estética e Emagrecimento"
                width={440}
                height={200}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(232,180,194,0.12)" }}
            >
              <Sparkles size={13} style={{ color: "#E8B4C2" }} />
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#E8B4C2" }}
              >
                Especialista em Transformação Corporal
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[30px] font-bold text-center leading-tight mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Resultados Reais.{" "}
              <span style={{ color: "#E8B4C2" }}>Autoestima de Volta.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-[15px] text-center max-w-[300px] leading-relaxed mb-8"
            >
              Protocolos avançados para lipedema, gordura localizada, diástase e
              muito mais.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="w-full flex flex-col gap-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-semibold text-[16px] text-white transition-all duration-300 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #E8B4C2 0%, #D89EB0 100%)",
                  boxShadow: "0 8px 24px rgba(232,180,194,0.45)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                <Calendar size={20} strokeWidth={2.5} />
                Agende sua Avaliação Gratuita
              </a>

              <a
                href="#tratamentos"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-[15px] transition-all duration-300 border-2 active:scale-95"
                style={{
                  borderColor: "#E5C8A0",
                  color: "#E5C8A0",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Ver Tratamentos
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            SOBRE
        ════════════════════════════════════════ */}
        <section className="px-6 py-8" style={{ background: "#FAF7F4" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-sm"
            style={{ border: "1px solid rgba(232,180,194,0.15)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #E8B4C2 0%, #E5C8A0 100%)",
                }}
              >
                <Heart size={22} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <h2
                  className="text-[18px] font-bold mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Plenna Estética
                </h2>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Especializada em{" "}
                  <strong className="text-[#2C2C2C]">cuidado humanizado</strong>
                  , a Plenna une tecnologia de ponta e técnicas avançadas para
                  devolver sua autoestima com{" "}
                  <strong className="text-[#2C2C2C]">
                    resultados que você pode ver e sentir
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
              {[
                { value: "500+", label: "Pacientes" },
                { value: "4+", label: "Anos" },
                { value: "98%", label: "Satisfação" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-[24px] font-bold"
                    style={{
                      color: "#E8B4C2",
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            TRATAMENTOS
        ════════════════════════════════════════ */}
        <section id="tratamentos" className="px-6 py-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "#E5C8A0" }}
            >
              O que fazemos
            </span>
            <h2
              className="text-[22px] font-bold mt-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Nossas Especialidades
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {treatments.map((item, i) => (
              <motion.a
                key={item.title}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#E8B4C2] group transition-all duration-300 gap-3"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #FEF0F3 0%, #FFF5EC 100%)",
                  }}
                >
                  <item.icon
                    size={20}
                    style={{ color: "#E8B4C2" }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold text-[14px] whitespace-pre-line leading-tight"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
                <span
                  className="text-[11px] font-bold mt-auto"
                  style={{ color: "#E8B4C2" }}
                >
                  Saiba mais →
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            ANTES & DEPOIS
        ════════════════════════════════════════ */}
        <section className="py-8" style={{ background: "#FAF7F4" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5 px-6"
          >
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "#E5C8A0" }}
            >
              Transformações reais
            </span>
            <h2
              className="text-[22px] font-bold mt-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Antes &amp; Depois
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 px-6 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {galleryTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => changeTab(i)}
                className={clsx(
                  "shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300",
                  activeTab === i
                    ? "text-white shadow-md"
                    : "bg-white text-gray-500 border border-gray-200"
                )}
                style={
                  activeTab === i
                    ? {
                        background:
                          "linear-gradient(135deg, #E8B4C2, #D89EB0)",
                        boxShadow: "0 4px 12px rgba(232,180,194,0.4)",
                      }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="px-6">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeSlide}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImages[activeSlide].src}
                    alt={currentImages[activeSlide].caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, 440px"
                  />
                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 py-4 pt-16">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-[13px] font-semibold">
                        {currentImages[activeSlide].caption}
                      </span>
                      <span className="text-white/70 text-[12px]">
                        {activeSlide + 1}/{currentImages.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev/Next buttons */}
              <button
                onClick={prevSlide}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md z-10 active:scale-90 transition-transform"
                style={{ color: "#E8B4C2" }}
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md z-10 active:scale-90 transition-transform"
                style={{ color: "#E8B4C2" }}
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={clsx(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeSlide === i ? "w-5 bg-white" : "w-1.5 bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            DEPOIMENTOS
        ════════════════════════════════════════ */}
        <section className="px-6 py-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "#E5C8A0" }}
            >
              Depoimentos
            </span>
            <h2
              className="text-[22px] font-bold mt-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O que dizem nossas pacientes
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{
                  background: "#FAF7F4",
                  border: "1px solid rgba(232,180,194,0.18)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} fill="#E8B4C2" stroke="none" />
                  ))}
                </div>

                <p className="text-[14px] text-gray-600 leading-relaxed italic mb-3">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[13px] text-[#2C2C2C]">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-gray-400 ml-2">
                      • {t.treatment}
                    </span>
                  </div>
                  <CheckCircle
                    size={16}
                    style={{ color: "#7BC8C1" }}
                    strokeWidth={2.5}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section
          className="px-6 py-10"
          style={{
            background: "linear-gradient(135deg, #E8B4C2 0%, #E5C8A0 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} className="text-white" />
            </div>
            <h2
              className="text-[24px] font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Pronta para sua Transformação?
            </h2>
            <p className="text-white/85 text-[14px] mb-6 max-w-[280px] mx-auto leading-relaxed">
              Agende sua avaliação gratuita e descubra o tratamento ideal para
              você.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white py-3.5 px-8 rounded-2xl font-semibold text-[15px] transition-all duration-300 active:scale-95"
              style={{
                color: "#E8B4C2",
                fontFamily: "var(--font-poppins)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <MessageCircle size={20} strokeWidth={2.5} />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            FOOTER / CONTATO
        ════════════════════════════════════════ */}
        <footer className="px-6 py-8 bg-white">
          {/* Location card */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Grande+do+Sul,+517+-+Centro,+Divinópolis+-+MG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl mb-5 border border-gray-100 transition-all duration-300 hover:border-[#7BC8C1] active:scale-95"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7BC8C1 0%, #5BB5AE 100%)",
              }}
            >
              <MapPin size={20} className="text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-[14px] text-[#2C2C2C]">
                Clínica Plenna
              </h4>
              <p className="text-[12px] text-gray-500 mt-0.5">
                Av. Rio Grande do Sul, 517 — Centro
                <br />
                Divinópolis - MG
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </a>

          {/* Social buttons */}
          <div className="flex gap-3 mb-8">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 font-semibold text-[14px] transition-all duration-300 active:scale-95"
              style={{ borderColor: "#E8B4C2", color: "#E8B4C2" }}
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[14px] text-white transition-all duration-300 active:scale-95"
              style={{
                background: "#25D366",
                boxShadow: "0 4px 15px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle size={18} strokeWidth={2} />
              WhatsApp
            </a>
          </div>

          {/* Logo + copyright */}
          <div className="text-center pt-5 border-t border-gray-100">
            <div className="w-24 mx-auto mb-3 opacity-50">
              <Image
                src="/logo.jpg"
                alt="Plenna Estética"
                width={96}
                height={48}
                className="w-full h-auto"
              />
            </div>
            <p className="text-[11px] text-gray-400 font-medium">
              © {new Date().getFullYear()} Plenna Estética e Emagrecimento
            </p>
            <p className="text-[11px] text-gray-300 mt-1 italic">
              A beleza de ser você.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
