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
import { useState, useEffect } from "react";
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

const resultsGallery = [
  { src: "/lipedema-1.jpg", caption: "Transformação Lipedema" },
  { src: "/seca-barriga-1.jpg", caption: "Protocolo Seca Barriga" },
  { src: "/lipedema-2.jpg", caption: "Redução Corporal" },
  { src: "/seca-barriga-2.jpg", caption: "Resultado Estético" },
  { src: "/lipedema-3.jpg", caption: "Lipedema + Emagrecimento" },
  { src: "/seca-barriga-3.jpg", caption: "Protocolo Seca Barriga" },
  { src: "/crio-power-1.jpg", caption: "Seca Barriga Crio Power" },
  { src: "/enzimatico-1.jpg", caption: "Seca Barriga Enzimático" },
];


const testimonials = [
  {
    name: "Ana Carolina",
    text: "Incrível! Já na primeira sessão de seca barriga senti a diferença. A Dra. Rita Plenna é extremamente profissional, cuidadosa e atenciosa. O ambiente da clínica é muito acolhedor — me senti em casa desde o primeiro momento. Resultado maravilhoso!",
    stars: 5,
    treatment: "Seca Barriga",
  },
  {
    name: "Fernanda Lima",
    text: "Finalmente encontrei um tratamento eficaz para o meu lipedema. A Dra. Rita Plenna tem um conhecimento profundo e uma dedicação que impressiona. O espaço é lindo, aconchegante, e o atendimento é de alto nível. Resultados visíveis desde o início! Recomendo demais.",
    stars: 5,
    treatment: "Lipedema",
  },
  {
    name: "Mariana Costa",
    text: "A clínica transmite acolhimento desde a entrada. O ambiente é elegante e tranquilo, e a Dra. Rita Plenna é super profissional e humanizada — ela realmente se importa com cada paciente. Minha autoestima voltou completamente. Obrigada, Plenna!",
    stars: 5,
    treatment: "Gordura Localizada",
  },
];

const doctorPhotos = [
  { src: "/doutora-1.jpg", alt: "Dra. Rita na Clínica" },
  { src: "/doutora-2.jpg", alt: "Dra. Rita realizando procedimento" },
  { src: "/doutora-3.jpg", alt: "Dra. Rita - Especialista" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.querySelector(".page-scroll-container");
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

  const nextSlide = () =>
    setActiveSlide((p) => (p === resultsGallery.length - 1 ? 0 : p + 1));

  const prevSlide = () =>
    setActiveSlide((p) => (p === 0 ? resultsGallery.length - 1 : p - 1));


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

      <div className="max-w-[480px] mx-auto bg-white min-h-screen shadow-sm overflow-hidden page-scroll-container" style={{ overflowY: "auto", height: "100vh" }}>

        {/* ── Sticky Header ── */}
        <header
          className={clsx(
            "sticky top-0 z-40 transition-all duration-300",
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-md border-b border-plenna-pink/10"
              : "bg-transparent"
          )}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <div className={clsx("w-28 transition-all duration-300", scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}>
              <Image
                src="/logo-sem-fundo.jpg"
                alt="Plenna Estética"
                width={220}
                height={100}
                className="w-full h-auto brightness-110 contrast-125"
              />
            </div>

            {/* Nav links - only when scrolled */}
            <nav className={clsx("flex items-center gap-1 transition-all duration-300 text-[12px] font-semibold text-gray-500", scrolled ? "opacity-100" : "opacity-0")}>
              <a href="#tratamentos" className="px-2 py-1 hover:text-plenna-pink transition-colors">Serviços</a>
              <a href="#doutora" className="px-2 py-1 hover:text-plenna-pink transition-colors">Doutora</a>
            </nav>

            {/* CTA button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold text-white transition-all duration-300",
                scrolled
                  ? "bg-plenna-pink shadow-md shadow-plenna-pink/30 opacity-100"
                  : "bg-white/20 backdrop-blur-sm border border-white/40 opacity-0 pointer-events-none"
              )}
            >
              <Calendar size={13} strokeWidth={2.5} />
              Agendar
            </a>
          </div>
        </header>

        {/* ════════════════════════════════════════
            HERO - FOTO COM TEXTO SOBREPOSTO
        ════════════════════════════════════════ */}
        <section className="relative w-full" style={{ minHeight: 560 }}>
          {/* Foto full-width da doutora */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src="/doutora-1.jpg"
              alt="Dra. Rita Plenna — Especialista em Estética Corporal"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Gradiente escuro de baixo para cima (estilo premium) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,5,15,0.92) 0%, rgba(10,5,15,0.55) 45%, rgba(10,5,15,0.10) 100%)",
            }}
          />

          {/* Logo no topo — área não scrollada */}
          <div className="absolute top-0 left-0 right-0 flex justify-center pt-4 z-10">
            <div className="w-32 bg-white/15 backdrop-blur-sm rounded-[20px] px-3 py-2 border border-white/20">
              <Image
                src="/logo-sem-fundo.jpg"
                alt="Plenna Estética"
                width={220}
                height={100}
                className="w-full h-auto brightness-200 contrast-110"
              />
            </div>
          </div>

          {/* Conteúdo sobreposto — parte inferior */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="absolute inset-x-0 bottom-0 px-6 pb-10 z-10"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-plenna-pink/50 bg-plenna-pink/20 backdrop-blur-sm"
            >
              <Sparkles size={12} className="text-plenna-pink" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">
                Transformação Corporal Avançada
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[38px] font-bold leading-[1.05] mb-3 text-white"
            >
              Sua melhor <br />
              versão{" "}
              <span
                className="relative inline-block"
                style={{ color: "#FFB3CC" }}
              >
                começa aqui.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/70 text-[14px] leading-relaxed mb-8 max-w-[300px]"
            >
              Protocolos exclusivos para lipedema, gordura localizada e emagrecimento saudável com a{" "}
              <span className="text-white font-semibold">Dra. Rita Plenna.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-[16px] text-white active:scale-[0.98] transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, var(--plenna-pink) 0%, var(--plenna-pink-hover) 100%)",
                  boxShadow: "0 10px 28px rgba(255,77,141,0.45)",
                }}
              >
                <Calendar
                  size={19}
                  strokeWidth={2.5}
                  className="group-hover:rotate-12 transition-transform"
                />
                Agendar Avaliação Gratuita
              </a>

              <a
                href="#tratamentos"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-[14px] transition-all border border-white/30 text-white bg-white/10 backdrop-blur-sm active:scale-[0.98]"
              >
                Conhecer Procedimentos
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════
            SOBRE
        ════════════════════════════════════════ */}
        {/* ════════════════════════════════════════
            A CLÍNICA - CONCEITO & EXPERIÊNCIA
        ════════════════════════════════════════ */}
        <section className="px-6 py-12 bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-plenna-gold/5 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex flex-col items-center mb-8">
               <div className="w-16 h-1 flex bg-plenna-gold/30 rounded-full mb-4" />
               <h2 className="text-[24px] font-bold text-center">A Clínica</h2>
            </div>

            <div className="bg-plenna-soft/50 rounded-[32px] p-8 border border-plenna-pink/10 shadow-sm mb-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-plenna-pink flex items-center justify-center shadow-lg shadow-plenna-pink/20">
                  <Heart size={24} className="text-white" fill="white" />
                </div>
                <h3 className="text-[20px] font-bold">Cuidado que Transforma</h3>
              </div>
              
              <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
                Na <span className="font-bold text-plenna-pink">Plenna Estética</span>, não tratamos apenas o corpo, cuidamos da sua autoestima. 
                Com um ambiente exclusivo e tecnologia de ponta, oferecemos um atendimento humanizado para que você se sinta acolhida em cada etapa da sua jornada.
              </p>

              {/* Stats - Circular Counters (inspiração referência) */}
              <div className="grid grid-cols-3 gap-3 py-8 border-y border-plenna-pink/10">
                {[
                  { value: "+1.500", label: "Vidas\nTransformadas", color: "#FF4D8D", ring: "rgba(255,77,141,0.18)" },
                  { value: "20+", label: "Anos de\nExperiência", color: "#D4AF37", ring: "rgba(212,175,55,0.18)" },
                  { value: "100%", label: "Satisfação\ndas Pacientes", color: "#00A69C", ring: "rgba(0,166,156,0.18)" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2 relative"
                      style={{ background: s.ring, border: `2.5px solid ${s.color}30` }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(${s.color} 80%, transparent 80%)`,
                          opacity: 0.15,
                        }}
                      />
                      <span className="text-[15px] font-extrabold relative z-10" style={{ color: s.color }}>
                        {s.value}
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wide text-center whitespace-pre-line leading-tight">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
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
        {/* ════════════════════════════════════════
            RESULTADOS - ANTES & DEPOIS
        ════════════════════════════════════════ */}
        <section className="py-16 bg-plenna-soft/40 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 px-6"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plenna-gold/10 text-plenna-gold text-[12px] font-bold mb-3">
              <Sparkles size={14} /> RESULTADOS REAIS
             </div>
            <h2 className="text-[28px] font-bold">Resultados</h2>
          </motion.div>

          {/* Carousel with Better Borders */}
          <div className="px-6">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border-[8px] border-white shadow-2xl bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={resultsGallery[activeSlide].src}
                    alt={resultsGallery[activeSlide].caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, 440px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-8 pb-10">
                    <h4 className="text-white text-[18px] font-bold leading-tight">
                      {resultsGallery[activeSlide].caption}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-plenna-pink shadow-lg active:scale-90 transition-transform"
                >
                  <ChevronLeft size={24} strokeWidth={3} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-plenna-pink shadow-lg active:scale-90 transition-transform"
                >
                  <ChevronRight size={24} strokeWidth={3} />
                </button>
              </div>

              {/* Counter */}
              <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[12px] text-white/90 font-bold z-10 border border-white/20">
                {activeSlide + 1} / {resultsGallery.length}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            A DOUTORA - DRA. RITA
        ════════════════════════════════════════ */}
        <section id="doutora" className="px-6 py-20 bg-white relative overflow-hidden">
          <div className="absolute -left-20 top-0 w-64 h-64 bg-plenna-gold/10 rounded-full blur-[80px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex flex-col items-center text-center mb-10">
              <span className="text-plenna-pink font-extrabold tracking-[0.2em] text-[11px] uppercase mb-4 py-1.5 px-4 bg-plenna-pink/10 rounded-full">
                Especialista
              </span>
              <h2 className="text-[32px] font-bold leading-none mb-2">Dra. Rita Plenna</h2>
              <p className="text-plenna-gold font-semibold uppercase tracking-widest text-[12px]">
                Plenna Estética & Emagrecimento
              </p>
            </div>

            {/* Doctor Photo Showcase */}
            <div className="grid grid-cols-2 gap-3 mb-12">
               {doctorPhotos.slice(0, 2).map((photo, i) => (
                 <div key={i} className={clsx(
                   "relative overflow-hidden rounded-[30px] border-4 border-plenna-gold-soft shadow-xl",
                   i === 0 ? "aspect-[3/4]" : "aspect-[3/4] translate-y-8"
                 )}>
                   <Image
                     src={photo.src}
                     alt={photo.alt}
                     fill
                     className="object-cover"
                   />
                 </div>
               ))}
            </div>

            <div className="mt-16 bg-plenna-gold-soft/40 p-8 rounded-[40px] border border-plenna-gold/20">
               <p className="text-[17px] text-gray-800 leading-relaxed font-medium italic">
                 &ldquo;Minha missão é ajudar cada mulher a reencontrar sua melhor versão, unindo ciência, tecnologia e um olhar humanizado sobre a beleza.&rdquo;
               </p>
               <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-plenna-gold" />
                  <span className="text-[14px] font-bold text-plenna-gold uppercase tracking-widest">Rita Plenna</span>
               </div>
            </div>
          </motion.div>
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
        {/* ════════════════════════════════════════
            CONTATO & LOCALIZAÇÃO
        ════════════════════════════════════════ */}
        <footer className="px-6 pt-12 pb-8 bg-plenna-soft/50 border-t border-plenna-pink/5">
          <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-plenna-pink/5 border border-plenna-pink/5 mb-10 text-center">
            <div className="w-16 h-16 rounded-full bg-plenna-pink shadow-lg shadow-plenna-pink/30 flex items-center justify-center mx-auto mb-6">
              <MapPin size={30} className="text-white" />
            </div>
            
            <h4 className="text-[22px] font-bold mb-3">Visite nossa Clínica</h4>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
              Av. Rio Grande do Sul, 517, Térreo — Centro <br />
              <span className="font-bold">Divinópolis - MG</span>
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Grande+do+Sul,+517,+T%C3%A9rreo,+Centro,+Divin%C3%B3polis+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-plenna-teal text-white font-bold text-[15px] shadow-lg shadow-plenna-teal/20 transition-transform active:scale-95"
            >
              Abrir no Google Maps
            </a>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <h5 className="text-center text-[12px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Conecte-se conosco</h5>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border border-plenna-pink/20 font-bold text-[14px] text-plenna-pink shadow-sm transition-all active:scale-95"
              >
                <InstagramIcon size={20} />
                Instagram
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] font-bold text-[14px] text-white shadow-lg shadow-green-500/20 transition-all active:scale-95"
              >
                <MessageCircle size={20} strokeWidth={2} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Logo Final - Made Alive */}
          <div className="text-center pt-8 border-t border-gray-100 flex flex-col items-center">
            <div className="w-28 opacity-90 mb-5 brightness-110 contrast-125">
              <Image
                src="/logo-sem-fundo.jpg"
                alt="Plenna Estética"
                width={120}
                height={60}
                className="w-full h-auto brightness-110 contrast-125"
              />
            </div>
            <p className="text-[12px] text-gray-400 font-semibold mb-1">
              © {new Date().getFullYear()} Plenna Estética e Emagrecimento
            </p>
            <p className="text-[11px] text-plenna-pink/60 font-medium italic">
              Realizando o seu sonho de se sentir Plenna.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
