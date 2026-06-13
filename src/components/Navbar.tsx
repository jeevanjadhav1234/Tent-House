"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLightMode, setIsLightMode] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Wedding", id: "wedding" },
    { label: "Jayanthi", id: "jayanthi" },
    { label: "Gallery", id: "gallery" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link highlight on scroll
      const scrollPos = window.scrollY + 100;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("light");
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      <header
        className={`fixed top-0 left-0 w-full z-50 h-[72px] transition-all duration-300 border-b border-gold-500/30 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-black/50 backdrop-blur-md"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-6 xl:px-10 flex items-center justify-between h-full">
          {/* Logo Section */}
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center space-x-2 xl:space-x-3 cursor-pointer select-none group py-1 shrink-0"
          >
            {/* Logo Image */}
            <div className="relative w-10 h-7.5 lg:w-12 lg:h-9 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Jai Bhavani Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <h1 className="text-lg lg:text-xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500 transition-all duration-300 group-hover:scale-102">
                JAI BHAVANI
              </h1>
              <span className="text-[8px] lg:text-[9px] tracking-[0.25em] text-pink-royal font-sans font-semibold uppercase group-hover:text-gold-300 transition-colors duration-300">
                Tent House & Events
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Flex Centered Flow */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-2 lg:space-x-3 xl:space-x-5 px-2 xl:px-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-sans font-bold tracking-wider uppercase transition-all duration-300 hover:text-gold-200 cursor-pointer whitespace-nowrap ${
                  activeSection === item.id ? "text-gold-300" : "text-neutral-200"
                }`}
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}
              >
                {item.label}
                {/* Underline for active link */}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-4px] left-2 xl:left-3 right-2 xl:right-3 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right utilities (Theme Toggle + Call CTA) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-full border border-gold-500/20 hover:border-gold-500/60 hover:bg-gold-500/10 transition-all duration-300 text-gold-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-5 py-2 text-xs uppercase tracking-widest font-sans font-bold border border-gold-500 text-gold-300 bg-transparent relative overflow-hidden rounded group transition-all duration-500 hover:text-neutral-950 cursor-pointer shadow-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 -z-10" />
              Book Event
            </button>
          </div>

          {/* Mobile triggers (Theme toggle + Hamburger) */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-full border border-gold-500/20 text-gold-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gold-300 border border-gold-500/20 hover:border-gold-500/60 cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full mt-0 transition-all duration-500 ease-in-out z-30 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="glass-panel border-t border-gold-500/20 px-4 pt-4 pb-6 space-y-2 shadow-2xl bg-black/95 backdrop-blur-md w-full">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-sans font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "bg-gold-500/10 text-gold-300 border-l-2 border-gold-500"
                    : "text-neutral-300 hover:bg-neutral-800/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex justify-between items-center px-4 border-t border-gold-500/10">
              <span className="text-xs text-neutral-400">Need Help?</span>
              <a
                href="tel:+916366447720"
                className="text-xs font-bold text-gold-300 tracking-wider hover:underline"
              >
                +91 63664 47720
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
