"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ZoomIn, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { publicAsset } from "@/lib/assetPath";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All", id: "all" },
    { label: "Weddings", id: "weddings" },
    { label: "VIP Events", id: "vip" },
    { label: "School Functions", id: "school" },
    { label: "Transportation", id: "transport" },
  ];

  const items: GalleryItem[] = [
    {
      id: 1,
      title: "Royal Mandap with Chandelier",
      category: "weddings",
      image: publicAsset("/images/function_decor.jpeg"),
      description: "A grand wedding mandap featuring gold frames, dense floral arches, ceiling draping, and sparkling crystal chandeliers.",
    },
    {
      id: 2,
      title: "VIP Stage & Red Carpet",
      category: "vip",
      image: publicAsset("/images/vip_stage.png"),
      description: "High-profile VIP stage configuration with red velvet carpeting, gold frames, and custom spotlight rigging.",
    },
    {
      id: 3,
      title: "School Annual Day Stage",
      category: "school",
      image: publicAsset("/images/school_stage.png"),
      description: "Grand school event stage setup with color-themed backdrops, professional sound systems, and front row VIP guest seating.",
    },
    {
      id: 4,
      title: "Logistics Carrier Showcase",
      category: "transport",
      image: publicAsset("/images/transport_carrier.png"),
      description: "Our dedicated heavy transport carrier fleet delivering stage panels, tents, and audio speakers on schedule.",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-pink-royal uppercase flex items-center justify-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-pink-royal" /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-500">
            OUR EVENT GALLERY
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Take a look at our successful setups across various categories. Every event is styled to reflect premium high-budget grandeur.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                ? "bg-gradient-to-r from-gold-600 to-gold-400 text-neutral-950 shadow-[0_4px_12px_rgba(212,175,55,0.25)]"
                : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="relative h-64 rounded-2xl overflow-hidden border border-white/5 cursor-pointer group shadow-lg bg-neutral-900"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Overlay details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-white mt-1 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Expand content on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 mt-2">
                    <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] font-sans font-bold text-pink-royal-light mt-3 uppercase tracking-wider">
                      <ZoomIn size={12} />
                      <span>View Closer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-gold-500/20 bg-neutral-950 shadow-2xl grid grid-cols-1 md:grid-cols-12 cursor-default"
              >
                {/* Lightbox Image (7 Columns) */}
                <div className="relative h-64 md:h-[480px] md:col-span-8 bg-neutral-900 flex items-center justify-center">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                  {/* Left / Right Nav Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 p-2 rounded-full bg-neutral-950/70 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 p-2 rounded-full bg-neutral-950/70 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Lightbox Details (4 Columns) */}
                <div className="p-6 sm:p-8 md:col-span-4 flex flex-col justify-between bg-neutral-950">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-widest">
                        {selectedItem.category}
                      </span>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="p-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-neutral-400 hover:text-white cursor-pointer"
                        aria-label="Close Lightbox"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mt-4">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-3 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    <div className="mt-6 border-t border-white/5 pt-6">
                      <span className="text-xs text-neutral-400 font-sans block mb-2">
                        Location Service
                      </span>
                      <span className="text-xs text-gold-500 font-sans font-bold">
                        Navanihal, Kamalapur, Kalaburagi
                      </span>
                    </div>
                  </div>

                  {/* Action Booking via WhatsApp */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <a
                      href={`https://wa.me/916366447720?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20following%20service%3A%20${encodeURIComponent(
                        selectedItem.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded bg-[#25D366] hover:bg-[#1ebd58] text-neutral-950 text-xs font-sans font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-102 cursor-pointer shadow-lg"
                    >
                      <MessageCircle size={16} fill="#0a0a0a" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
