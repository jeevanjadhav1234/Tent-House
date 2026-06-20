"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
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
    <footer className="relative bg-neutral-950 border-t border-gold-500/10 pt-16 pb-8 overflow-hidden">
      
      {/* Footer Top Hanging Garlands SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none h-6 select-none opacity-80">
        <svg
          className="w-full h-4 absolute top-0 left-0 drop-shadow-[0_1px_3px_rgba(212,175,55,0.3)]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2 Q 75 10 150 2 Q 225 10 300 2 Q 375 10 450 2 Q 525 10 600 2 Q 675 10 750 2 Q 825 10 900 2 Q 975 10 1050 2 Q 1125 10 1200 2"
            stroke="#5c3f15"
            strokeWidth="1"
            fill="none"
          />
          {Array.from({ length: 33 }).map((_, i) => {
            const x = (i / 32) * 1200;
            const y = 2 + (i % 2 === 0 ? 5 : 2);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill={i % 2 === 0 ? "#FF8C00" : "#FFD700"}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Brand Column (4 Columns) */}
        <div className="md:col-span-4 space-y-4">
          <div
            onClick={() => handleScrollTo("home")}
            className="flex flex-col cursor-pointer select-none group"
          >
            <h3 className="text-xl font-serif font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500 transition-all duration-300">
              JAI BHAVANI
            </h3>
            <span className="text-[10px] tracking-[0.25em] text-pink-royal font-sans font-semibold uppercase">
              Tent House & Events
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-sm">
            Providing premium event decorations, grand wedding setups, VIP seating, sound systems, and cultural celebrations in Karnataka. Making your special days magnificently royal.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3.5 pt-2">
            {[
              { 
                icon: <InstagramIcon />, 
                href: "https://www.instagram.com/jai_bhavani_tenthouse?igsh=MWtnb3RyaTFsYXgxag==", 
                ariaLabel: "Visit Jai Bhavani Tent House Instagram" 
              },
              { 
                icon: <FacebookIcon />, 
                href: "https://facebook.com", 
                ariaLabel: "Visit Jai Bhavani Tent House Facebook" 
              },
              { 
                icon: <YoutubeIcon />, 
                href: "https://youtube.com/@jaibhavanitenthouse996?si=hYbWYW7qk_exV-ep", 
                ariaLabel: "Visit Jai Bhavani Tent House YouTube Channel" 
              },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.ariaLabel}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10 text-neutral-400 hover:text-gold-300 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column (3 Columns) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-sans">
            {[
              { label: "Home Base", id: "home" },
              { label: "Our Services", id: "services" },
              { label: "Wedding Stages", id: "wedding" },
              { label: "Jayanthi Setups", id: "jayanthi" },
              { label: "Image Gallery", id: "gallery" },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className="hover:text-gold-300 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours (2 Columns) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
            Business Hours
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
            <li>
              <span className="text-neutral-500 block">Mon - Sun:</span>
              <span className="font-semibold text-neutral-300">Open 24 Hours</span>
            </li>
            <li>
              <span className="text-neutral-500 block">Inquiries:</span>
              <span className="font-semibold text-neutral-300">8:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact Info (3 Columns) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
            Contact Info
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 font-sans">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
              <span>Navanihal, Kamalapur, Kalaburagi, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-royal shrink-0" />
              <a href="tel:+916366447720" className="hover:text-gold-300 font-semibold">
                +91 63664 47720
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-pink-royal shrink-0" />
              <a href="mailto:jeevandayanandjadhav990@gmail.com" className="hover:text-gold-300">
                jeevandayanandjadhav990@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Divider & Footer Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
        <p className="text-[11px] font-sans text-neutral-500">
          © 2026 Jai Bhavani Tent House | All Rights Reserved
        </p>
        <p className="text-[11px] font-sans text-neutral-500 flex items-center gap-1.5 justify-center">
          <span>Premium Staging & Sound Systems</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>Navanihal</span>
        </p>
      </div>
    </footer>
  );
}
