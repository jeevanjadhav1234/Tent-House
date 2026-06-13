"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Users, ShieldCheck, Heart } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      label: "Years of Trust",
      value: "15+",
      icon: <Award className="w-5 h-5 text-gold-500" />,
    },
    {
      label: "Events Decorated",
      value: "500+",
      icon: <Sparkles className="w-5 h-5 text-pink-royal" />,
    },
    {
      label: "Happy Families",
      value: "100%",
      icon: <Heart className="w-5 h-5 text-pink-royal-light" />,
    },
    {
      label: "Logistics Loaders",
      value: "12+",
      icon: <Users className="w-5 h-5 text-gold-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-neutral-950"
    >
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-maroon-900/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Stats grid (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl glass-panel border border-white/5 bg-white/2 hover:border-gold-500/30 transition-all text-center flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                  
                  {/* Icon wrap */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/15">
                    {stat.icon}
                  </div>

                  <span className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500">
                    {stat.value}
                  </span>
                  
                  <span className="text-xs text-neutral-400 font-sans tracking-wide mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Copywriting Content (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/20">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-sans font-bold text-gold-400 uppercase tracking-wider">
                  Established Leadership
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-400">
                Creating Memorable Events Since Years
              </h2>

              <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal rounded-full"></div>

              <div className="space-y-4 text-neutral-300 font-sans leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>Jai Bhavani Tent House</strong> is a trusted event management company based in <strong>Navanihal, Kamalapur, Kalaburagi (Gulbarga), Karnataka, India</strong>. We provide complete event solutions including wedding decorations, VIP tent arrangements, live sound systems, HD LED walls, logistics transportation, stage decorations, public programs, and Jayanthi events setup.
                </p>
                <p>
                  Our primary goal is to deliver memorable, safe, and professional events with premium quality services. By owning our setup hardware, stages, acoustic speakers, and logistics carriers directly, we cut out middlemen to guarantee a premium luxury finish at appropriate budgets.
                </p>
              </div>

              {/* Quote bubble */}
              <div className="p-4 border-l-4 border-gold-500 bg-white/2 rounded-r-lg font-serif italic text-xs sm:text-sm text-gold-300/95 max-w-xl leading-relaxed">
                "Our business is built on trust, punctuality, and royal elegance. From a simple village ceremony to a massive city convention stage, we treat every occasion as our own family gathering."
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
