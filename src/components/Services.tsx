"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Tent,
  Volume2,
  Truck,
  Flame,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Wedding Decoration",
      description:
        "Royal wedding mandaps, majestic floral designs, entryways, luxury sofas, and elegant drapery in gold, white, and pink themes.",
      icon: <Heart className="w-8 h-8 text-pink-royal" />,
      gradient: "from-pink-royal via-gold-500 to-maroon-800",
      glow: "rgba(224, 17, 95, 0.35)",
    },

    {
      title: "VIP Tent Setup",
      description:
        "Spacious premium VIP tents, climate comfort, high-quality ceiling cloth overlays, and luxury furniture seating.",
      icon: <Tent className="w-8 h-8 text-gold-500" />,
      gradient: "from-maroon-800 via-gold-500 to-neutral-900",
      glow: "rgba(212, 175, 55, 0.35)",
    },
    {
      title: "Sound System Rental",
      description:
        "Cinematic high-fidelity 3D line-array sound systems with 4 tops and dual subwoofers for crystal-clear concert audio.",
      icon: <Volume2 className="w-8 h-8 text-indigo-400" />,
      gradient: "from-indigo-600 via-purple-premium to-pink-royal",
      glow: "rgba(106, 13, 173, 0.35)",
    },
    {
      title: "Transportation Services",
      description:
        "Reliable on-time logistics and goods carrier transport for smooth setup of stage, tent, and audio equipment.",
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      gradient: "from-amber-600 via-gold-500 to-maroon-950",
      glow: "rgba(245, 158, 11, 0.35)",
    },
    {
      title: "Jayanthi Celebrations",
      description:
        "Respectful setups for Dr. B. R. Ambedkar, Shivaji Maharaj, and Sant Sevalal Maharaj Jayanthi programs.",
      icon: <Flame className="w-8 h-8 text-red-500" />,
      gradient: "from-red-600 via-amber-500 to-blue-600",
      glow: "rgba(239, 68, 68, 0.35)",
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
              <div className="h-full rounded-2xl p-6 glass-panel flex flex-col justify-between relative overflow-hidden transition-all duration-300 group-hover:border-gold-500/40 min-h-[280px]">
                {/* Thin Gradient Border Line at the top */}
                <div
                  className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${service.gradient}`}
                ></div>

                {/* Content */}
                <div>
                  {/* Animated Icon Circle */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 group-hover:bg-gradient-to-tr group-hover:from-white/10 group-hover:to-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold tracking-wide text-neutral-100 group-hover:text-gold-200 transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* CTA Line */}
                <div className="mt-8 flex items-center justify-between text-xs font-bold font-sans tracking-widest text-gold-400 group-hover:text-gold-200 uppercase">
                  <span>Explore More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
