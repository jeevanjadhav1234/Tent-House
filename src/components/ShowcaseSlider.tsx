"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";

const sliderSlides = [
  {
    src: publicAsset("/images/home-page/Wedding stage.png"),
    title: "Royal Wedding Stage",
    description: "Grand mandap setups with exquisite floral designs and premium stage illumination.",
  },
  {
    src: publicAsset("/images/home-page/Wedding entry.png"),
    title: "Luxurious Entrance Arch",
    description: "Welcoming guests with grand entryway decor, floral arches, and pathway lights.",
  },
  {
    src: publicAsset("/images/home-page/Vip chairs.png"),
    title: "VIP Lounge & Seating",
    description: "Plush velvet sofas and luxury chairs designed for high-profile wedding events.",
  },
  {
    src: publicAsset("/images/home-page/base and top.png"),
    title: "Premium Dome Tents",
    description: "Large-scale waterproof canvas canopy and ceiling drapes for majestic spacing.",
  },
  {
    src: publicAsset("/images/home-page/fromt stage.png"),
    title: "Stage Frontage Decor",
    description: "Intricately designed stage front layouts adorned with fresh flowers and gold frames.",
  },
  {
    src: publicAsset("/images/home-page/mixer.png"),
    title: "Live Sound Control Console",
    description: "Professional audio mixing equipment for crystal-clear acoustics and music distribution.",
  },
  {
    src: publicAsset("/images/home-page/podium.png"),
    title: "Ceremony Speech Podium",
    description: "Premium gold-trimmed lecterns and speech platforms for public and political gatherings.",
  },
  {
    src: publicAsset("/images/home-page/podiymm.png"),
    title: "VIP Public Address Platform",
    description: "Elegantly finished speech stands equipped with professional goose-neck microphones.",
  },
  {
    src: publicAsset("/images/home-page/political setup.png"),
    title: "Grand Political Stage Layout",
    description: "Robust heavy-duty truss scaffolding and large staging for high-capacity public programs.",
  },
  {
    src: publicAsset("/images/home-page/political settup.png"),
    title: "VIP Political Event Assembly",
    description: "Massive seating and structural setup customized for administrative and political summits.",
  },
  {
    src: publicAsset("/images/home-page/round table.png"),
    title: "Round Table Banquet Theme",
    description: "Premium linen-covered tables and gold chiavari chairs for royal receptions.",
  },
  {
    src: publicAsset("/images/home-page/top.png"),
    title: "Elite Ceiling Cloth Draping",
    description: "Flowing fabric ceiling designs that transform regular venues into luxury event domes.",
  },
];

export default function ShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return; // Pause on hover (desktop only)

    const timer = setInterval(() => {
      handleNext();
    }, 4500); // 4.5 seconds

    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  // Swipe gesture support
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentSlide = sliderSlides[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-[90%] max-w-7xl mx-auto h-[260px] sm:h-[420px] lg:h-[560px] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-gold-500/20 mt-[165px] sm:mt-[175px] lg:mt-[200px] mb-16 sm:mb-20 lg:mb-24 relative group/slider select-none"
    >
      {/* Slider Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-950">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.04 }}
              transition={{ duration: 4.5, ease: "linear" }}
              className="w-full h-full relative"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="object-cover object-center transform-gpu"
              />
            </motion.div>
            {/* Cinematic Overlay - Gold/Maroon blended gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/20 to-neutral-950/80 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Info Overlay (Bottom Left) */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 pointer-events-none">
        <div className="bg-neutral-950/40 backdrop-blur-md py-2.5 px-4 sm:py-3 sm:px-6 rounded-2xl border border-white/5 shadow-2xl w-fit">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] font-black uppercase text-gold-400 block">
            PREMIUM EVENT SHOWCASE
          </span>
        </div>
      </div>

      {/* Navigation Arrows (Hidden on mobile, fade in on hover on desktop) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-2.5 sm:p-3.5 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transform -translate-x-2 group-hover/slider:translate-x-0"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-2.5 sm:p-3.5 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transform translate-x-2 group-hover/slider:translate-x-0"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Navigation Dots (Centered Bottom) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2 bg-neutral-950/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
        {sliderSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-6 bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
