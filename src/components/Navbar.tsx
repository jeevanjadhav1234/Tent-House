"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon, Home, Sparkles, Heart, Crown, Image as ImageIcon, Info, PhoneCall, LucideIcon } from "lucide-react";
import { publicAsset } from "@/lib/assetPath";

interface MenuItem {
  label: string;
  id: string;
  icon: LucideIcon;
}

const menuItems: MenuItem[] = [
  { label: "Home", id: "home", icon: Home },
  { label: "Services", id: "services", icon: Sparkles },
  { label: "Wedding", id: "wedding", icon: Heart },
  { label: "Jayanthi", id: "jayanthi", icon: Crown },
  { label: "Gallery", id: "gallery", icon: ImageIcon },
  { label: "About Us", id: "about", icon: Info },
  { label: "Contact", id: "contact", icon: PhoneCall },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
              <Image
                src={publicAsset("/images/logo.png")}
                alt="Jai Bhavani Logo"
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]"
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

        {/* Mobile Navigation Full-screen Overlay */}
        <div
          className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0d0608]/98 backdrop-blur-md z-[100] transition-all duration-500 ease-in-out flex flex-col ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          {/* Header bar mirroring main navbar */}
          <div className="h-[72px] px-6 sm:px-10 flex items-center justify-between border-b border-gold-500/10 w-full shrink-0">
            <div
              onClick={() => {
                handleScrollTo("home");
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 cursor-pointer select-none"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={publicAsset("/images/logo.png")}
                  alt="Jai Bhavani Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500">
                  JAI BHAVANI
                </h1>
                <span className="text-[8px] tracking-[0.25em] text-pink-royal font-sans font-semibold uppercase">
                  Tent House & Events
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gold-300 border border-gold-500/20 hover:border-gold-500/60 cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Left-aligned navigation items container */}
          <div className="flex-1 overflow-y-auto py-12 px-8 sm:px-10 flex flex-col justify-start items-start">
            <nav className="flex flex-col space-y-6 w-full max-w-sm pl-1 sm:pl-2">
              {menuItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleScrollTo(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-4 py-2 text-2xl sm:text-3xl font-sans font-bold tracking-widest uppercase transition-all duration-300 hover:text-gold-200 cursor-pointer text-left hover:translate-x-2 active:scale-95 group ${
                      activeSection === item.id
                        ? "text-gold-300"
                        : "text-neutral-200"
                    }`}
                    style={{
                      animationDelay: `${idx * 50}ms`,
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                    }}
                  >
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-300 group-hover:scale-110 ${activeSection === item.id ? "text-gold-300" : "text-neutral-400 group-hover:text-gold-200"}`} />
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-pink-royal shadow-[0_0_8px_rgba(212,175,55,0.8)] ml-1" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Premium Footer CTA inside overlay */}
          <div className="pb-10 pt-6 flex flex-col items-start px-8 sm:px-10 border-t border-gold-500/10 w-full shrink-0 bg-[#0d0608]/40">
            <span className="text-[10px] sm:text-xs text-neutral-400 font-sans tracking-widest uppercase mb-1">
              Need Help? Contact Us
            </span>
            <a
              href="tel:+916366447720"
              className="flex items-center space-x-2.5 text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500 tracking-wider hover:underline transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 text-gold-400 shrink-0" />
              <span>+91 63664 47720</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
