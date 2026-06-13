"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export default function Wedding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Grand Palace Theme",
      subtitle: "Premium Stage Setup",
      image: publicAsset("/images/wedding_stage.png"),
      description: "Our signature stage features a massive floral mandap, a velvet royal sofa, hanging crystal chandeliers, and soft pink and gold accent lighting.",
    },
    {
      id: 2,
      title: "Royal Canopy Tent",
      subtitle: "VIP Guest Seating",
      image: publicAsset("/images/wedding_stage.png"), // Re-using but with different focus description
      description: "Custom premium overhead ceiling fabric overlays with integrated fairy lights, marigold garlands, and royal VIP chairs.",
    },
    {
      id: 3,
      title: "Floral Pathway Entrance",
      subtitle: "Decorative Entry Arch",
      image: publicAsset("/images/wedding_stage.png"),
      description: "A breathtaking entry path lined with rose strings, marigold garlands, traditional brass lamps, and spotlighting.",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    "Floral Mandap & Backdrop",
    "Luxury Handcrafted Sofas",
    "Crystal Chandeliers & Lighting",
    "Decorative Entrance Arches",
    "VIP Tent Ceiling Cloths",
    "Haldi & Mehendi Event Sets",
  ];

  return (
    <section
      id="wedding"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-maroon-950/20 to-neutral-950"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-royal/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-gold-400 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Royal Ceremonies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-gold-200">
            WEDDING EVENTS
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-pink-royal to-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Crafting fairytale weddings with grand layouts, pristine flower arrangements, and majestic seating configurations in Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Features & Story (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-pink-royal/10 border border-pink-royal/20">
                <ShieldCheck className="w-4 h-4 text-pink-royal-light" />
                <span className="text-xs font-sans font-bold text-pink-royal-light uppercase tracking-wider">
                  Premium Experience Guaranteed
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-neutral-100">
                Making Your Special Day Magnificently Royal
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                At Jai Bhavani Tent House, we understand that a wedding is a lifetime memory. We specialize in high-budget, royal-finish wedding decorations, creating massive floral backdrops, mandaps, and stage structures that wow your guests from the moment they enter.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-300 font-sans font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA link to booking */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 rounded bg-gradient-to-r from-pink-royal to-maroon-800 border border-pink-royal/20 text-white font-sans font-bold uppercase tracking-widest text-xs transition-transform duration-300 hover:scale-103 cursor-pointer shadow-[0_4px_15px_rgba(224,17,95,0.2)]"
                >
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Image Slider (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-gold-500/30 bg-neutral-900 shadow-2xl flex items-end"
            >
              {/* Slider Image Container */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      fill
                      priority
                      className="object-cover"
                    />
                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slide Details Content */}
              <div className="relative z-10 p-6 sm:p-8 w-full">
                <span className="text-[10px] sm:text-xs font-sans font-bold text-gold-400 uppercase tracking-widest">
                  {slides[currentSlide].subtitle}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {slides[currentSlide].title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 max-w-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* Slider Controls */}
                <div className="flex justify-between items-center mt-6">
                  {/* Indicators */}
                  <div className="flex space-x-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === idx ? "w-6 bg-gold-400" : "bg-neutral-600"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-neutral-950/60 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-colors cursor-pointer"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-neutral-950/60 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-colors cursor-pointer"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
