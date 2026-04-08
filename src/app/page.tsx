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
      { src: "/lipedema-1.jpg", caption: "Transformação Lipedema" },
      { src: "/seca-barriga-1.jpg", caption: "Protocolo Seca Barriga" },
      { src: "/lipedema-2.jpg", caption: "Redução Corporal" },
      { src: "/seca-barriga-2.jpg", caption: "Resultado Estético" },
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

const doctorPhotos = [
  { src: "/doutora-1.jpg", alt: "Dra. Rita na Clínica" },
  { src: "/doutora-2.jpg", alt: "Dra. Rita realizando procedimento" },
  { src: "/doutora-3.jpg", alt: "Dra. Rita - Especialista" },
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
        {/* ════════════════════════════════════════
            HERO - IDENTIDADE & IMPACTO
        ════════════════════════════════════════ */}
        <section
          className="relative flex flex-col items-center pt-14 pb-12 px-6 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, var(--plenna-pink-soft) 0%, #ffffff 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col items-center w-full relative z-10"
          >
            {/* Logo Container - Made more visible/alive */}
            <motion.div 
              variants={fadeUp} 
              className="relative w-56 mb-10 p-4 rounded-[40px] bg-white shadow-[0_20px_50px_rgba(255,77,141,0.15)] border border-white"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-plenna-pink/5 to-transparent pointer-events-none" />
              <Image
                src="/logo-sem-fundo.jpg"
                alt="Plenna Estética e Emagrecimento"
                width={500}
                height={250}
                className="w-full h-auto drop-shadow-sm brightness-110 contrast-125"
                style={{ mixBlendMode: 'screen' }}
                priority
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 px-5 py-2 rounded-full mb-6 bg-white shadow-sm border border-plenna-pink/10"
            >
              <Sparkles size={14} className="text-plenna-pink animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-plenna-pink">
                Transformação Corporal Avançada
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[34px] font-bold text-center leading-[1.1] mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Sua melhor versão <br />
              <span className="text-plenna-pink relative inline-block">
                começa aqui.
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-plenna-pink/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-[16px] text-center max-w-[320px] leading-relaxed mb-10"
            >
              Protocolos exclusivos para lipedema, gordura localizada e emagrecimento saudável.
            </motion.p>

            {/* CTAs - More vibrant */}
            <motion.div
              variants={fadeUp}
              className="w-full flex flex-col gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-[17px] text-white transition-all duration-500 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, var(--plenna-pink) 0%, var(--plenna-pink-hover) 100%)",
                  boxShadow: "0 12px 30px rgba(255,107,157,0.4)",
                }}
              >
                <Calendar size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
                Agendar Avaliação Gratuita
              </a>

              <a
                href="#tratamentos"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 border-2 border-plenna-gold text-plenna-gold bg-white hover:bg-plenna-gold-soft active:scale-[0.98]"
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

              {/* Stats - More visual */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-plenna-pink/10">
                {[
                  { value: "+500", label: "Vidas Transf." },
                  { value: "4 Anos", label: "Experiência" },
                  { value: "Selo", label: "Excelência" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[19px] font-bold text-plenna-pink mb-1">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
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
            <h2 className="text-[28px] font-bold">Nossas Transformações</h2>
          </motion.div>

          {/* Tabs - Styled for Vibrancy */}
          <div className="flex gap-2 px-6 mb-8 overflow-x-auto pb-2 no-scrollbar">
            {galleryTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => changeTab(i)}
                className={clsx(
                  "shrink-0 px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-500",
                  activeTab === i
                    ? "bg-plenna-pink text-white shadow-[0_8px_20px_rgba(255,77,141,0.3)] scale-105"
                    : "bg-white text-gray-400 border border-gray-100"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Carousel with Better Borders */}
          <div className="px-6">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border-[8px] border-white shadow-2xl bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeSlide}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImages[activeSlide].src}
                    alt={currentImages[activeSlide].caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, 440px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-8 pb-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-plenna-pink/90 text-[11px] font-bold text-white mb-2 uppercase tracking-widest">
                      {galleryTabs[activeTab].label}
                    </span>
                    <h4 className="text-white text-[18px] font-bold leading-tight">
                      {currentImages[activeSlide].caption}
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
                {activeSlide + 1} / {currentImages.length}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            A DOUTORA - DRA. RITA 
        ════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-white relative overflow-hidden">
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
              <h2 className="text-[32px] font-bold leading-none mb-2">Dra. Rita</h2>
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
                  <span className="text-[14px] font-bold text-plenna-gold uppercase tracking-widest">Rita Vasconcelos</span>
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
              Av. Rio Grande do Sul, 517 — Centro <br />
              <span className="font-bold">Divinópolis - MG</span>
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Grande+do+Sul,+517+-+Centro,+Divinópolis+-+MG"
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
                style={{ mixBlendMode: 'screen' }}
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
