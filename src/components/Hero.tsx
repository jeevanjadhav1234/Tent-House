"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Phone, Image as ImageIcon } from "lucide-react";
import Garlands from "./Garlands";
import { publicAsset } from "@/lib/assetPath";

// 3D Metallic Stage Truss spanning the entire width of the page
const Truss = () => {
  return (
    <div className="absolute top-[72px] left-0 w-full h-[60px] z-30 overflow-visible pointer-events-none select-none">
      <svg width="100%" height="60" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        <defs>
          {/* Metal tube gradient for 3D rounded look */}
          <linearGradient id="truss-tube" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e2022" />
            <stop offset="20%" stopColor="#43484d" />
            <stop offset="45%" stopColor="#8d949c" />
            <stop offset="55%" stopColor="#a3acb5" />
            <stop offset="70%" stopColor="#43484d" />
            <stop offset="100%" stopColor="#111213" />
          </linearGradient>
          {/* Secondary metal gradient for web members */}
          <linearGradient id="truss-web" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1c1e" />
            <stop offset="50%" stopColor="#5d636b" />
            <stop offset="100%" stopColor="#111213" />
          </linearGradient>
          {/* Repeated truss pattern */}
          <pattern id="truss-pattern" width="120" height="60" patternUnits="userSpaceOnUse">
            {/* Top chord */}
            <rect x="0" y="4" width="120" height="10" fill="url(#truss-tube)" />
            {/* Bottom chord */}
            <rect x="0" y="46" width="120" height="10" fill="url(#truss-tube)" />
            {/* Diagonal web members */}
            <line x1="0" y1="9" x2="60" y2="51" stroke="url(#truss-web)" strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="51" x2="120" y2="9" stroke="url(#truss-web)" strokeWidth="4" strokeLinecap="round" />
            <line x1="0" y1="51" x2="60" y2="9" stroke="url(#truss-web)" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="3,3" />
            <line x1="60" y1="9" x2="120" y2="51" stroke="url(#truss-web)" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="3,3" />
            {/* Vertical struts */}
            <rect x="0" y="9" width="6" height="42" fill="url(#truss-web)" />
            <rect x="57" y="9" width="6" height="42" fill="url(#truss-web)" />
            {/* Bolt plates */}
            <rect x="-3" y="1" width="12" height="16" fill="#111" rx="1" />
            <rect x="-3" y="43" width="12" height="16" fill="#111" rx="1" />
            <rect x="54" y="1" width="12" height="16" fill="#111" rx="1" />
            <rect x="54" y="43" width="12" height="16" fill="#111" rx="1" />
          </pattern>
        </defs>
        
        {/* Main Truss Body */}
        <rect x="0" y="0" width="100%" height="60" fill="url(#truss-pattern)" />
        
        {/* Shadow under the truss */}
        <rect x="0" y="58" width="100%" height="2" fill="#000" opacity="0.8" />
      </svg>
    </div>
  );
};

// Spotlight fixture that clamps to the truss and projects a dramatic glow cone
const Spotlight = ({ x, angle, color = "rgba(255, 140, 0, 0.15)" }: { x: string; angle: number; color?: string }) => {
  return (
    <div 
      className="absolute top-[118px] z-30 pointer-events-none select-none"
      style={{ left: x }}
    >
      <svg width="200" height="600" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `translateX(-50%) rotate(${angle}deg)`, transformOrigin: "100px 0px" }} className="overflow-visible">
        <defs>
          {/* Spotlight cone gradient */}
          <linearGradient id={`light-cone-${x.replace('%', '')}`} x1="100" y1="0" x2="100" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={color} />
            <stop offset="25%" stopColor={color} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* Metal housing gradient */}
          <linearGradient id="fixture-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#222" />
            <stop offset="50%" stopColor="#555" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>
        </defs>
        
        {/* Spotlight Beam Cone */}
        <polygon points="95,0 105,0 180,600 20,600" fill={`url(#light-cone-${x.replace('%', '')})`} style={{ mixBlendMode: "screen" }} />
        
        {/* Fixture Body */}
        {/* Clamp */}
        <rect x="94" y="0" width="12" height="6" fill="#111" rx="1" />
        {/* Yoke */}
        <path d="M 88,6 L 88,18 L 112,18 L 112,6" stroke="#222" strokeWidth="3" fill="none" />
        {/* Housing */}
        <rect x="85" y="16" width="30" height="24" rx="3" fill="url(#fixture-metal)" />
        {/* Lens rim */}
        <rect x="82" y="38" width="36" height="4" rx="1" fill="#333" />
        {/* Lens glow */}
        <ellipse cx="100" cy="40" rx="15" ry="3" fill="#ffe066" className="animate-pulse" />
      </svg>
    </div>
  );
};

// RiggingAssembly: handles truss clamps, shackle, chain hoist motor, vertical chain, bottom shackle, hook, shackle, bracket, and speaker stack
const RiggingAssembly = ({ side }: { side: "left" | "right" }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: isLeft ? 0.3 : 0.6 }}
      className={`absolute top-[56px] sm:top-[64px] md:top-[72px] z-20 pointer-events-none select-none origin-top scale-[0.45] sm:scale-[0.56] md:scale-[0.85] lg:scale-100 ${
        isLeft 
          ? "left-[-55px] sm:left-[-35px] md:left-[3%] lg:left-[4%] xl:left-[6%]" 
          : "right-[-55px] sm:right-[-35px] md:right-[3%] lg:right-[4%] xl:right-[6%]"
      }`}
      style={{
        width: "240px",
        height: "520px",
      }}
    >
      {/* Rigging SVG (Clamp, Hoist, Chain, Hook, Shackle, Bracket, Speaker Image) */}
      <svg width="240" height="520" viewBox="0 0 240 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        <defs>
          {/* Metal gradients */}
          <linearGradient id="rig-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2e3135" />
            <stop offset="50%" stopColor="#7e848c" />
            <stop offset="100%" stopColor="#1e2022" />
          </linearGradient>
          <linearGradient id="hoist-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9a1d1f" />
            <stop offset="50%" stopColor="#d32f2f" />
            <stop offset="100%" stopColor="#5f0f10" />
          </linearGradient>
          <linearGradient id="steel-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4b5056" />
            <stop offset="30%" stopColor="#d1d5db" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="70%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          <linearGradient id="steel-grad-dark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="50%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <filter id="rig-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.8" />
          </filter>
          {/* Soft red/golden glow gradient behind the speaker */}
          <radialGradient id={`glow-grad-${side}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9a1d1f" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#d4af37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 0. Soft glow backdrop (underneath everything) */}
        <ellipse cx="120" cy="378" rx="100" ry="120" fill={`url(#glow-grad-${side})`} opacity="0.85" />

        {/* 1. Truss Clamp (attached to bottom chord of truss at y=46) */}
        <rect x="112" y="42" width="16" height="12" fill="url(#rig-metal)" rx="2" />
        <circle cx="120" cy="48" r="3" fill="#111" />
        
        {/* Shackle connecting clamp to hoist */}
        <path d="M 116,52 C 116,60 124,60 124,52" stroke="url(#rig-metal)" strokeWidth="3" fill="none" />
        
        {/* 2. Chain Hoist Motor (Red body) */}
        <rect x="106" y="60" width="28" height="22" rx="3" fill="url(#hoist-body)" stroke="#222" strokeWidth="1" />
        <rect x="126" y="66" width="10" height="18" rx="2" fill="#1a1a1a" />
        <rect x="110" y="64" width="14" height="6" fill="#333" rx="1" />
        <circle cx="114" cy="76" r="2" fill="#fff" opacity="0.8" />
        
        {/* 3. Alternating 3D Chain Links (Visually Interlinked, End-to-End) */}
        <rect x="117.5" y="94" width="5" height="20" rx="2.5" fill="url(#steel-grad-dark)" filter="url(#rig-shadow)" />
        <rect x="117.5" y="120" width="5" height="20" rx="2.5" fill="url(#steel-grad-dark)" filter="url(#rig-shadow)" />
        <rect x="117.5" y="146" width="5" height="20" rx="2.5" fill="url(#steel-grad-dark)" filter="url(#rig-shadow)" />
        <rect x="117.5" y="172" width="5" height="20" rx="2.5" fill="url(#steel-grad-dark)" filter="url(#rig-shadow)" />

        <path d="M120,82 C114,82 114,100 120,100 C126,100 126,82 120,82 Z M120,86 C117,86 117,96 120,96 C123,96 123,86 120,86 Z" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" filter="url(#rig-shadow)" fillRule="evenodd" />
        <path d="M120,108 C114,108 114,126 120,126 C126,126 126,108 120,108 Z M120,112 C117,112 117,122 120,122 C123,122 123,112 120,112 Z" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" filter="url(#rig-shadow)" fillRule="evenodd" />
        <path d="M120,134 C114,134 114,152 120,152 C126,152 126,134 120,134 Z M120,138 C117,138 117,148 120,148 C123,148 123,138 120,138 Z" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" filter="url(#rig-shadow)" fillRule="evenodd" />
        <path d="M120,160 C114,160 114,178 120,178 C126,178 126,160 120,160 Z M120,164 C117,164 117,174 120,174 C123,174 123,164 120,164 Z" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" filter="url(#rig-shadow)" fillRule="evenodd" />

        {/* 4. Forged Steel Main Hook (loops visually inside the lifting shackle) */}
        <circle cx="120" cy="192" r="6" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" />
        <circle cx="120" cy="192" r="3.5" fill="#0d0608" />
        <path d="M 117,196 C 117,204 115,208 111,212 C 107,216 107,222 112,225 C 117,228 123,226 125,220 C 127,214 125,210 124,208 L 121,208 C 122,212 121,216 119,219 C 117,222 113,222 111,218 C 109,214 112,210 115,207 C 119,204 123,198 123,196 Z" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" filter="url(#rig-shadow)" />
        {/* Spring latch on hook */}
        <line x1="122" y1="202" x2="112" y2="212" stroke="#d1d5db" strokeWidth="1.5" />
        <circle cx="122" cy="202" r="1" fill="#111" />

        {/* 5. Animated Group: Speaker Image + Rigid Mounting Hardware (Sways together from the Hook pivot point) */}
        <motion.g
          animate={{ 
            rotate: isLeft ? [0, 0.8, -0.8, 0] : [0, -0.8, 0.8, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: isLeft ? 0 : 0.8 },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: isLeft ? 0 : 0.8 }
          }}
          style={{
            transformOrigin: "120px 222px", // Pivot point at hook bottom bend
          }}
        >
          {/* A. Speaker Image (Drawn FIRST so hardware is layered ON TOP) */}
          <image
            href={publicAsset(isLeft ? "/images/sound_left_cropped.png" : "/images/sound_right_cropped.png")}
            x={isLeft ? -12 : 13}
            y={242}
            width={240}
            height={273.2}
            style={{
              filter: "drop-shadow(0px 25px 30px rgba(0,0,0,0.85)) drop-shadow(0px 8px 10px rgba(224,17,95,0.3))",
            }}
          />

          {/* B. Steel Lifting Bracket (Mounting Plate) - Bolted to top center of speaker cabinet */}
          {/* Subtle shadow on the speaker body */}
          <polygon points="103,245 137,245 130,248 110,248" fill="#000" opacity="0.6" />
          {/* Main steel bracket */}
          <polygon points="105,244 110,226 130,226 135,244" fill="url(#rig-metal)" stroke="#090a0a" strokeWidth="1" filter="url(#rig-shadow)" />
          {/* Mounting bolts */}
          <circle cx="110" cy="240.5" r="1.5" fill="#444" stroke="#111" strokeWidth="0.5" />
          <circle cx="130" cy="240.5" r="1.5" fill="#444" stroke="#111" strokeWidth="0.5" />
          {/* Pin hole inside bracket */}
          <circle cx="120" cy="233" r="3.5" fill="#111" />

          {/* C. Heavy Duty Anchor Shackle (Connects hook to lifting bracket) */}
          {/* Shackle body (U-loop) - loops through the hook bend at y=222 */}
          <path d="M 113,233 L 113,222 C 113,215 127,215 127,222 L 127,233" stroke="url(#steel-grad)" strokeWidth="3" fill="none" filter="url(#rig-shadow)" />
          {/* Shackle ears */}
          <rect x="111.5" y="231" width="3" height="5" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" />
          <rect x="125.5" y="231" width="3" height="5" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" />
          {/* Shackle Pin (Bolt going through bracket hole at y=233) */}
          <rect x="109" y="232" width="22" height="2.5" fill="url(#steel-grad)" stroke="#111" strokeWidth="0.5" rx="0.5" />
          <rect x="107.5" y="230.5" width="2" height="5.5" fill="#222" stroke="#111" strokeWidth="0.5" rx="0.5" />
          <circle cx="131" cy="233.25" r="2.2" fill="#555" stroke="#111" strokeWidth="0.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-44 sm:pt-48 lg:pt-52 pb-16 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-maroon-950 via-neutral-950 to-maroon-950/40"
    >
      {/* Background Decorative Tent Drapes (SVGs & Gradients) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 select-none -z-10">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Ceiling draping fabric layers */}
          <path
            d="M0 0 C 360 180, 1080 180, 1440 0 L1440 100 C 1080 250, 360 250, 0 100 Z"
            fill="url(#drapeGrad1)"
          />
          <path
            d="M0 0 C 360 100, 1080 100, 1440 0 L1440 50 C 1080 150, 360 150, 0 50 Z"
            fill="url(#drapeGrad2)"
          />
          <defs>
            <linearGradient id="drapeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A0E17" />
              <stop offset="50%" stopColor="#2D070B" />
              <stop offset="100%" stopColor="#6A0DAD" />
            </linearGradient>
            <linearGradient id="drapeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#E0115F" />
              <stop offset="100%" stopColor="#4A0E17" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Truss, Spotlights, Garlands & Rigging Assemblies */}
      <Truss />
      <Spotlight x="28%" angle={14} color="rgba(212, 175, 55, 0.16)" />
      <Spotlight x="72%" angle={-14} color="rgba(224, 17, 95, 0.14)" />
      <Garlands top={118} />
      
      <RiggingAssembly side="left" />
      <RiggingAssembly side="right" />

      {/* Spotlights reflecting on stage */}
      <div className="absolute top-0 left-1/4 w-[2px] h-[600px] bg-gradient-to-b from-gold-300/30 to-transparent -rotate-12 blur-sm origin-top"></div>
      <div className="absolute top-0 right-1/4 w-[2px] h-[600px] bg-gradient-to-b from-pink-royal/30 to-transparent rotate-12 blur-sm origin-top"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-premium-dark/20 rounded-full blur-[100px] -z-10 animate-glow-pulse"></div>

      {/* VIP Stage Container Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8 items-center z-30">
        
        {/* Center: Hero Information & VIP Stage Mockup */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 flex flex-col items-center text-center">
          
          {/* Tagline Standalone Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 cursor-default select-none"
          >
            <span className="text-xs sm:text-sm font-sans tracking-[0.35em] font-black uppercase bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.03] inline-block">
              Event Management
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
              JAI BHAVANI TENT HOUSE
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-sans max-w-lg mx-auto leading-relaxed">
              Weddings to VIP political and cultural stage setups in Navanihal, Kamalapur, Kalaburagi.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3 rounded-md bg-gradient-to-r from-gold-600 to-gold-400 text-neutral-950 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(170,124,17,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(170,124,17,0.5)] flex items-center space-x-2 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Book Event</span>
            </button>

            <a
              href="tel:+916366447720"
              className="px-6 py-3 rounded-md border border-neutral-600 hover:border-gold-500 hover:bg-gold-500/10 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 flex items-center space-x-2 cursor-pointer"
            >
              <Phone size={16} className="text-pink-royal" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => handleScrollTo("gallery")}
              className="px-6 py-3 rounded-md border border-neutral-600 hover:border-gold-500 hover:bg-gold-500/10 text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 flex items-center space-x-2 cursor-pointer"
            >
              <ImageIcon size={16} className="text-gold-500" />
              <span>View Gallery</span>
            </button>
          </motion.div>

          {/* VIP Stage photorealistic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative w-full max-w-lg aspect-[16/9] bg-neutral-900 rounded-2xl border border-gold-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group"
          >
            <Image
              src={publicAsset("/images/vip_stage_hero.png")}
              alt="Luxury VIP Ceremony Stage Setup"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
            />
            {/* Premium glass lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20 pointer-events-none" />
            <div className="absolute inset-0 border border-gold-500/10 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
