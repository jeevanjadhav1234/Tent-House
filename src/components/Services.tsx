"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Tent,
  Volume2,
  Truck,
  Flame,
  Monitor,
} from "lucide-react";
import { publicAsset } from "@/lib/assetPath";

interface ServiceItem {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  bgImage?: string;
  innerGlow?: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Wedding Decoration",
      tagline: "Timeless Wedding Elegance",
      icon: <Heart className="w-8 h-8 text-gold-300 group-hover:text-pink-royal-light transition-colors duration-300" />,
      gradient: "from-gold-400 via-pink-royal-light to-gold-600",
      glow: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(224,17,95,0.2) 100%)",
      bgImage: publicAsset("/images/wedding_card_bg.jpeg"),
      innerGlow: "radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, rgba(224, 17, 95, 0.08) 100%)",
    },

    {
      title: "VIP Tent Setup",
      tagline: "Premium Event Comfort",
      icon: <Tent className="w-8 h-8 text-gold-400 group-hover:text-amber-200 transition-colors duration-300" />,
      gradient: "from-amber-600 via-gold-300 to-amber-900",
      glow: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(245,158,11,0.2) 100%)",
      bgImage: publicAsset("/images/vip_tent_bg.jpeg"),
      innerGlow: "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(253, 253, 250, 0.05) 100%)",
    },
    {
      title: "Sound System & LED Wall",
      tagline: "Professional Event Production",
      icon: (
        <div className="relative w-8 h-8">
          <Volume2 className="w-5 h-5 text-blue-400 absolute top-0 left-0" />
          <Monitor className="w-5 h-5 text-gold-300 group-hover:text-purple-400 absolute bottom-0 right-0 transition-colors duration-300" />
        </div>
      ),
      gradient: "from-blue-600 via-purple-premium to-gold-400",
      glow: "radial-gradient(circle, rgba(106,13,173,0.45) 0%, rgba(30,58,138,0.3) 50%, rgba(212,175,55,0.2) 100%)",
      bgImage: publicAsset("/images/sound_led_bg.jpeg"),
      innerGlow: "radial-gradient(circle at center, rgba(106, 13, 173, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(212, 175, 55, 0.05) 100%)",
    },
    {
      title: "Jayanthi Celebrations",
      tagline: "Traditional Stage Excellence",
      icon: <Flame className="w-8 h-8 text-orange-500 group-hover:text-gold-300 transition-colors duration-300" />,
      gradient: "from-orange-600 via-gold-400 to-amber-800",
      glow: "radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(212,175,55,0.25) 50%, rgba(180,83,9,0.1) 100%)",
      bgImage: publicAsset("/images/jayanthi_bg.jpeg"),
      innerGlow: "radial-gradient(circle at center, rgba(249, 115, 22, 0.12) 0%, rgba(212, 175, 55, 0.08) 50%, rgba(245, 158, 11, 0.04) 100%)",
    },
    {
      title: "Transportation Services",
      tagline: "Safe & Timely Transport",
      icon: <Truck className="w-8 h-8 text-orange-500 group-hover:text-gold-300 transition-colors duration-300" />,
      gradient: "from-orange-500 via-zinc-400 to-gold-500",
      glow: "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(148,163,184,0.25) 50%, rgba(212,175,55,0.15) 100%)",
      bgImage: publicAsset("/images/transportation_bg.jpeg"),
      innerGlow: "radial-gradient(circle at center, rgba(249, 115, 22, 0.12) 0%, rgba(148, 163, 184, 0.08) 50%, rgba(212, 175, 55, 0.04) 100%)",
    },
  ];

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
      id="services"
      className="py-24 relative overflow-hidden bg-neutral-950"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-maroon-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-premium-dark/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-pink-royal uppercase">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-600">
            Exclusive Luxury Services
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            We specialize in designing premium setups that bring grand vision to life.
            Explore our professional services crafted to perfection.
          </p>
        </div>

        {/* Symmetrical Flex Grid of Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: 2,
              }}
              className="perspective-1000 group cursor-pointer relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-[380px] flex flex-col"
              onClick={() => {
                // Scroll to relevant section based on service type
                if (service.title.toLowerCase().includes("wedding")) {
                  handleScrollTo("wedding");
                } else if (service.title.toLowerCase().includes("jayanthi")) {
                  handleScrollTo("jayanthi");
                } else if (service.title.toLowerCase().includes("transport")) {
                  handleScrollTo("transport");
                } else {
                  handleScrollTo("contact");
                }
              }}
            >
              {/* Glowing Card Shadow background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{
                  background: service.glow,
                }}
              ></div>

              {/* Main Card */}
              <div className={`h-full rounded-2xl p-6 glass-panel flex flex-col justify-between relative overflow-hidden transition-all duration-300 group-hover:border-gold-500/40 min-h-[280px] ${
                service.bgImage ? "group-hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] group-hover:border-gold-400/50" : ""
              }`}>
                {/* Thin Gradient Border Line at the top */}
                <div
                  className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${service.gradient}`}
                ></div>

                {/* Background Image with Zoom and Overlay (if present) */}
                {service.bgImage && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={service.bgImage}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Dark gradient overlay to ensure readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/55"></div>
                    {/* Inner gold/pink gradient overlay for luxury feel */}
                    {service.innerGlow && (
                      <div
                        className="absolute inset-0 mix-blend-color-dodge opacity-60 pointer-events-none"
                        style={{
                          background: service.innerGlow
                        }}
                      ></div>
                    )}
                  </>
                )}

                {/* Top Section: Icon */}
                <div className="relative z-10">
                  {/* Animated Icon Circle */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 group-hover:bg-gradient-to-tr group-hover:from-white/10 group-hover:to-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Title + CTA */}
                <div className="relative z-10 mt-auto flex flex-col gap-3">
                  <div>
                    <h3 className="text-lg font-serif font-bold tracking-wide text-neutral-100 group-hover:text-gold-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[13px] font-serif text-[#F8F8F8]/90 italic tracking-wide font-medium mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* CTA Line */}
                  <div className="flex items-center justify-between text-xs font-bold font-sans tracking-widest text-gold-400 group-hover:text-gold-200 uppercase">
                    <span>Explore More</span>
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
