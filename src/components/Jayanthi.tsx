"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";

interface JayanthiCard {
  title: string;
  themeColor: string;
  themeBg: string;
  textColor: string;
  badge: string;
  borderColor: string;
  bgGradient: string;
  ledColor: string;
  motif: React.ReactNode;
  specs: string[];
}

export default function Jayanthi() {
  const cards: JayanthiCard[] = [
    {
      title: "Chhatrapati Shivaji Maharaj Jayanti",
      themeColor: "from-amber-950/85 via-orange-950/70 to-neutral-950/90",
      themeBg: "var(--jayanthi-shivaji-bg)",
      textColor: "text-amber-400",
      borderColor: "group-hover:border-amber-400/50",
      ledColor: "rgba(245, 158, 11, 0.55)",
      bgGradient: "bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.6),transparent_70%)]",
      badge: "Royal Saffron Theme",
      specs: [
        "Fort background canvas stage sets",
        "Saffron flag alignments & rigging",
        "Warrior theme swords & shields",
        "High-fidelity live sound & DJ set",
      ],
      motif: (
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-[0_0_18px_rgba(245,158,11,0.45)] bg-neutral-900 z-10">
          <Image
            src={publicAsset("/images/shivaji.jpeg")}
            alt="Chhatrapati Shivaji Maharaj"
            fill
            className="object-cover object-top"
          />
        </div>
      ),
    },
    {
      title: "Dr. B. R. Ambedkar Jayanti",
      themeColor: "from-blue-950/85 via-indigo-950/70 to-neutral-950/90",
      themeBg: "var(--jayanthi-ambedkar-bg)",
      textColor: "text-blue-400",
      borderColor: "group-hover:border-blue-400/50",
      ledColor: "rgba(59, 130, 246, 0.55)",
      bgGradient: "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.6),transparent_70%)]",
      badge: "Respectful Blue Theme",
      specs: [
        "Massive blue LED backdrop screen",
        "Ashoka Wheel floral designs",
        "Elegant podium & photo garlands",
        "VIP seating & red carpet runway",
      ],
      motif: (
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-[0_0_18px_rgba(59,130,246,0.45)] bg-neutral-900 z-10">
          <Image
            src={publicAsset("/images/ambedkar.jpeg")}
            alt="Dr. B. R. Ambedkar"
            fill
            className="object-cover object-top"
          />
        </div>
      ),
    },
    {
      title: "Sant Sevalal Maharaj Jayanti",
      themeColor: "from-red-950/85 via-maroon-950/70 to-neutral-950/90",
      themeBg: "var(--jayanthi-sevalal-bg)",
      textColor: "text-red-400",
      borderColor: "group-hover:border-red-400/50",
      ledColor: "rgba(239, 68, 68, 0.55)",
      bgGradient: "bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.6),transparent_70%)]",
      badge: "Spiritual Floral Theme",
      specs: [
        "Temple backdrop structures & sets",
        "Red and white spiritual flag setups",
        "Dense marigold & rose hanging sets",
        "Cultural stage audio & speech mics",
      ],
      motif: (
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-red-400/50 shadow-[0_0_18px_rgba(239,68,68,0.45)] bg-neutral-900 z-10">
          <Image
            src={publicAsset("/images/sevalal.jpeg")}
            alt="Sant Sevalal Maharaj"
            fill
            className="object-cover object-top"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="jayanthi"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-maroon-950/20 to-neutral-950"
    >
      {/* Background spot */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-premium-dark/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-gold-400 uppercase flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-gold-400" /> Historic Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-500">
            JAYANTHI CELEBRATIONS
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            We provide highly respectful event stage, LED backdrops, traditional flower drapes, and live sound setups for cultural and community jayanthi celebrations.
          </p>
        </div>

        {/* 3 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="perspective-1000 group cursor-pointer relative rounded-2xl overflow-hidden"
            >
              {/* LED Backlight glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ background: card.ledColor }}
              ></div>

              {/* Main Card Frame */}
              <div
                className={`h-full p-8 border border-white/5 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300 ${card.borderColor}`}
                style={{ background: card.themeBg }}
              >
                {/* Cultural Radial Gradient Background */}
                <div className={`absolute inset-0 -z-10 ${card.bgGradient}`}></div>

                {/* Cultural Badge Tag */}
                <span className={`inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded border border-white/10 bg-white/5 mb-6 ${card.textColor}`}>
                  {card.badge}
                </span>

                {/* Motif/Symbol Placement */}
                <div className="w-full h-32 flex items-center justify-center mb-8 relative">
                  {/* Subtle pulsing background ring */}
                  <div className="absolute w-24 h-24 rounded-full border border-white/5 animate-ping" style={{ animationDuration: "3s" }}></div>
                  {card.motif}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold tracking-wide text-neutral-100 mb-6 text-center group-hover:text-gold-200 transition-colors">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                {/* Specs/Services List */}
                <ul className="space-y-3">
                  {card.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2.5">
                      <span className={`text-sm ${card.textColor} leading-none select-none mt-1`}>
                        ✦
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Explore button overlay */}
                <div className="mt-8 flex items-center justify-center text-xs font-bold font-sans tracking-widest text-neutral-400 group-hover:text-gold-300 uppercase transition-colors">
                  <span>View Stage Setups</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
