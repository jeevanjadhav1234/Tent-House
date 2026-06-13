"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Truck, Navigation, MapPin, ShieldCheck, Check } from "lucide-react";

export default function Transportation() {
  const [truckPos, setTruckPos] = useState({ x: 40, y: 150 });
  const [currentNode, setCurrentNode] = useState("Navanihal");

  // Animated truck movement simulation along the SVG path
  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t = (t + 0.005) % 1;
      
      // coordinates along a custom Bezier curve representing the route
      // Route nodes approximate coordinates:
      // Node 1 (Navanihal): x=50, y=180
      // Node 2 (Kamalapur): x=220, y=90
      // Node 3 (Kalaburagi): x=380, y=140
      
      let x, y;
      if (t < 0.5) {
        // Navanihal to Kamalapur
        const localT = t * 2;
        x = 50 * (1 - localT) + 220 * localT;
        y = 180 * (1 - localT) + 90 * localT;
        setCurrentNode("On Route to Kamalapur");
      } else {
        // Kamalapur to Kalaburagi
        const localT = (t - 0.5) * 2;
        x = 220 * (1 - localT) + 380 * localT;
        y = 90 * (1 - localT) + 140 * localT;
        setCurrentNode("On Route to Kalaburagi");
      }

      // Snapping close to nodes
      if (Math.abs(x - 50) < 10 && Math.abs(y - 180) < 10) setCurrentNode("Navanihal (Base)");
      if (Math.abs(x - 220) < 10 && Math.abs(y - 90) < 10) setCurrentNode("Kamalapur Hub");
      if (Math.abs(x - 380) < 10 && Math.abs(y - 140) < 10) setCurrentNode("Kalaburagi (City)");

      setTruckPos({ x, y });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const logisticsData = [
    {
      title: "Event Material Transportation",
      desc: "Dedicated heavy carrier trucks transporting steel pipes, premium canvas sheets, and stage platforms safely.",
    },
    {
      title: "Tent & Canopy Logistics",
      desc: "Fast dispatch of VIP tent elements directly to the venue to ensure timely installation.",
    },
    {
      title: "Stage & Speaker Rigging Transit",
      desc: "Specialized secure packing and shockproof transport of sensitive sound speakers, audio rigs, and LED screen controllers.",
    },
  ];

  return (
    <section
      id="transport"
      className="py-24 relative overflow-hidden bg-neutral-950"
    >
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-maroon-900/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-gold-400 uppercase flex items-center justify-center gap-1.5">
            <Truck className="w-4 h-4 text-gold-400" /> Logistics Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-500">
            MATERIAL TRANSPORTATION
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Our private logistics carrier fleet guarantees that your wedding stages, speaker columns, and VIP setups arrive on-site, fully intact, and strictly on schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Transport Showcase details (6 Columns) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/20">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-sans font-bold text-gold-400 uppercase tracking-wider">
                  Reliable Safe Delivery
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-neutral-100">
                On-Time Stage & Sound Logistics
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                Setting up event stages requires precision timing. Jai Bhavani Tent House operates its own heavy transport loaders and materials carriers. We control the supply chain directly, from our storage warehouses in Navanihal to your wedding grounds or political stages in Kalaburagi.
              </p>

              {/* Specs */}
              <div className="space-y-4 pt-2">
                {logisticsData.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-bold text-neutral-200">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: SVG Animated route map (6 Columns) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-2xl border border-gold-500/20 bg-neutral-900/60 p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] tracking-widest font-sans font-bold text-neutral-400 uppercase block">
                    ACTIVE ROUTE TRACKING
                  </span>
                  <span className="text-xs text-gold-400 font-sans font-semibold mt-1 inline-flex items-center gap-1">
                    <Navigation size={12} className="animate-pulse" /> {currentNode}
                  </span>
                </div>
                {/* Legend */}
                <div className="flex gap-4 text-[10px] font-sans text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-500 border border-gold-600 block"></span>
                    <span>Hub Node</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-royal block"></span>
                    <span>Vehicle</span>
                  </div>
                </div>
              </div>

              {/* Map Canvas */}
              <div className="w-full relative h-[240px] bg-neutral-950/80 rounded-xl border border-white/5 flex items-center justify-center">
                <svg
                  className="w-full h-full max-w-[420px]"
                  viewBox="0 0 440 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines Overlay representing coordinates map */}
                  <path d="M 0 50 L 440 50 M 0 100 L 440 100 M 0 150 L 440 150 M 0 200 L 440 200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <path d="M 100 0 L 100 260 M 200 0 L 200 260 M 300 0 L 300 260 M 400 0 L 400 260" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                  {/* Route Paths connecting towns */}
                  {/* Curve 1: Navanihal -> Kamalapur */}
                  <path
                    d="M 50 180 L 220 90"
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 50 180 L 220 90"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="animate-route-path"
                  />

                  {/* Curve 2: Kamalapur -> Kalaburagi */}
                  <path
                    d="M 220 90 L 380 140"
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 220 90 L 380 140"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="animate-route-path"
                  />

                  {/* Node 1: Navanihal */}
                  <g className="cursor-pointer">
                    <circle cx="50" cy="180" r="8" fill="#D4AF37" className="animate-ping" style={{ animationDuration: "3s" }} />
                    <circle cx="50" cy="180" r="6" fill="#D4AF37" stroke="#AA7C11" strokeWidth="2" />
                    <text x="30" y="205" fill="#FFF" className="text-[10px] font-sans font-bold select-none">
                      Navanihal (Base)
                    </text>
                  </g>

                  {/* Node 2: Kamalapur */}
                  <g className="cursor-pointer">
                    <circle cx="220" cy="90" r="8" fill="#D4AF37" className="animate-ping" style={{ animationDuration: "4s" }} />
                    <circle cx="220" cy="90" r="6" fill="#D4AF37" stroke="#AA7C11" strokeWidth="2" />
                    <text x="180" y="70" fill="#FFF" className="text-[10px] font-sans font-bold select-none">
                      Kamalapur Hub
                    </text>
                  </g>

                  {/* Node 3: Kalaburagi */}
                  <g className="cursor-pointer">
                    <circle cx="380" cy="140" r="8" fill="#D4AF37" className="animate-ping" style={{ animationDuration: "5s" }} />
                    <circle cx="380" cy="140" r="6" fill="#D4AF37" stroke="#AA7C11" strokeWidth="2" />
                    <text x="350" y="120" fill="#FFF" className="text-[10px] font-sans font-bold select-none">
                      Kalaburagi City
                    </text>
                  </g>

                  {/* Moving truck icon representation */}
                  <g transform={`translate(${truckPos.x - 8}, ${truckPos.y - 8})`}>
                    <circle cx="8" cy="8" r="8" fill="#E0115F" className="animate-pulse" />
                    {/* Small vehicle drawing */}
                    <path
                      d="M3 6 L9 6 L12 9 L12 12 L3 12 Z M10 12 A 1.5 1.5 0 0 1 8.5 13.5 A 1.5 1.5 0 0 1 7 12 M6 12 A 1.5 1.5 0 0 1 4.5 13.5 A 1.5 1.5 0 0 1 3 12"
                      fill="#FFF"
                      transform="scale(0.85) translate(2, 1)"
                    />
                  </g>
                </svg>
              </div>

              {/* Map footer callout */}
              <div className="mt-4 flex items-center space-x-3 text-xs bg-neutral-950 p-3.5 rounded-lg border border-white/5 font-sans">
                <MapPin className="text-pink-royal shrink-0 w-4.5 h-4.5" />
                <span className="text-neutral-400">
                  Fully servicing all wedding grounds and venues around <strong>Kamalapur</strong>, <strong>Navanihal</strong>, and <strong>Kalaburagi (Gulbarga)</strong>.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
