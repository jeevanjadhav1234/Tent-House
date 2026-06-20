"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
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

  // Lightbox and zoom/pan states
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const dragStart = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const [touchStartDist, setTouchStartDist] = useState<number | null>(null);

  // Device type detection for touch-drag-to-close behavior on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Motion values and refs for swipe gesture tracking
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const gestureDirection = useRef<"horizontal" | "vertical" | null>(null);
  const dragY = useMotionValue(0);
  const backdropBg = useTransform(dragY, [0, 300], ["rgba(0, 0, 0, 0.95)", "rgba(0, 0, 0, 0.25)"]);

  // Lock body scroll when lightbox is open
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  }, []);

  const handleNextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % sliderSlides.length);
    setScale(1);
    setOffset({ x: 0, y: 0 });
    dragY.set(0);
  }, [dragY]);

  const handlePrevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
    setScale(1);
    setOffset({ x: 0, y: 0 });
    dragY.set(0);
  }, [dragY]);

  const handleOpen = (idx: number) => {
    setLightboxIndex(idx);
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
    dragY.set(0);
    setCurrentIndex(lightboxIndex);
  }, [lightboxIndex, dragY]);

  // Autoplay functionality - Paused if hover OR lightbox is open
  useEffect(() => {
    if (isHovered || isOpen) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [handleNext, isHovered, isOpen]);

  // Swipe gesture support variables
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

  // Lightbox Zoom toggle on double click/tap
  const handleDoubleTap = () => {
    if (scale > 1) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2.5);
      setOffset({ x: 0, y: 0 });
    }
  };

  // Wheel zoom in/out with limits (1.0x to 4.0x)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const newScale = Math.min(Math.max(scale - e.deltaY * zoomFactor * 0.01, 1), 4);
    setScale(newScale);
    if (newScale === 1) {
      setOffset({ x: 0, y: 0 });
    }
  };

  // Pointer panning (handles mouse and touchscreen drag panning)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setOffset({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Pinch-to-zoom touch logic + Touch swipes + swipe-down-to-close on mobile
  const handleTouchStartLightbox = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchStartDist(dist);
      gestureDirection.current = null;
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };
      gestureDirection.current = null;
      if (scale === 1) {
        setTouchEnd(null);
        setTouchStart(touch.clientX);
      }
    }
  };

  const handleTouchMoveLightbox = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDist) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDist;
      const newScale = Math.min(Math.max(scale * factor, 1), 4);
      setScale(newScale);
      setTouchStartDist(dist);
      if (newScale === 1) {
        setOffset({ x: 0, y: 0 });
      }
    } else if (e.touches.length === 1 && touchStartPos.current) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartPos.current.x;
      const deltaY = touch.clientY - touchStartPos.current.y;

      if (scale === 1) {
        if (!gestureDirection.current) {
          const absX = Math.abs(deltaX);
          const absY = Math.abs(deltaY);
          if (absX > 10 || absY > 10) {
            if (absY > absX && isMobile) {
              gestureDirection.current = "vertical";
            } else {
              gestureDirection.current = "horizontal";
            }
          }
        }

        if (gestureDirection.current === "vertical") {
          // Drag downward with standard response, upward with visual resistance
          if (deltaY > 0) {
            dragY.set(deltaY);
          } else {
            dragY.set(deltaY * 0.2);
          }
        } else if (gestureDirection.current === "horizontal") {
          setTouchEnd(touch.clientX);
        }
      }
    }
  };

  const handleTouchEndLightbox = () => {
    setTouchStartDist(null);
    touchStartPos.current = null;

    if (scale > 1) return;

    if (gestureDirection.current === "vertical") {
      const currentY = dragY.get();
      const threshold = window.innerHeight * 0.25; // 25% of screen height

      if (currentY > threshold) {
        // Smoothly slide off screen downward and dismiss
        animate(dragY, window.innerHeight + 100, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        }).then(() => {
          handleClose();
        });
      } else {
        // Bounce back to center
        animate(dragY, 0, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
      }
    } else if (gestureDirection.current === "horizontal") {
      if (touchStart !== null && touchEnd !== null) {
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
          handleNextLightbox();
        } else if (isRightSwipe) {
          handlePrevLightbox();
        }
      }
    }
    gestureDirection.current = null;
  };

  // Keyboard controls for Lightbox (Esc to close, Arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        handleNextLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrevLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNextLightbox, handlePrevLightbox]);

  const currentSlide = sliderSlides[currentIndex];

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-[94%] sm:w-[90%] max-w-7xl mx-auto h-[300px] sm:h-[420px] lg:h-[560px] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-gold-500/20 mt-[28px] sm:mt-[175px] lg:mt-[200px] mb-16 sm:mb-20 lg:mb-24 relative group/slider select-none"
      >
        {/* Slider Image Container */}
        <div
          onClick={() => handleOpen(currentIndex)}
          className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-950 cursor-zoom-in"
        >
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
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="p-2.5 sm:p-3.5 rounded-full bg-neutral-950/50 backdrop-blur-md border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transform -translate-x-2 group-hover/slider:translate-x-0"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
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
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Preload adjacent slides in the background to avoid loading flash */}
        <div className="hidden" aria-hidden="true">
          <Image
            src={sliderSlides[(currentIndex + 1) % sliderSlides.length].src}
            alt=""
            width={10}
            height={10}
            priority
          />
          <Image
            src={sliderSlides[(currentIndex - 1 + sliderSlides.length) % sliderSlides.length].src}
            alt=""
            width={10}
            height={10}
            priority
          />
        </div>
      </div>

      {/* Lightbox full-screen modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: backdropBg }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md select-none"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-950/60 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all cursor-pointer z-50 flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Nav Arrow (Desktop/Tablet Only) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevLightbox();
              }}
              className="absolute left-6 p-3 rounded-full bg-neutral-950/60 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all cursor-pointer z-40 hidden md:flex items-center justify-center"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Nav Arrow (Desktop/Tablet Only) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextLightbox();
              }}
              className="absolute right-6 p-3 rounded-full bg-neutral-950/60 border border-white/10 hover:border-gold-500/50 hover:bg-neutral-950 text-white transition-all cursor-pointer z-40 hidden md:flex items-center justify-center"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Zoomable / Pannable Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTouchStart={handleTouchStartLightbox}
              onTouchMove={handleTouchMoveLightbox}
              onTouchEnd={handleTouchEndLightbox}
              className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden"
              style={{ touchAction: "none", y: dragY }}
              onDoubleClick={handleDoubleTap}
            >
              <div
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                  transition: isDragging.current ? "none" : "transform 0.15s ease-out",
                }}
                className={`flex items-center justify-center w-full h-full select-none transform-gpu ${
                  scale > 1 ? (isDragging.current ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
                }`}
              >
                <img
                  src={sliderSlides[lightboxIndex].src}
                  alt={sliderSlides[lightboxIndex].title}
                  className="max-w-[92vw] max-h-[85vh] sm:max-w-[85vw] sm:max-h-[80vh] object-contain select-none pointer-events-none rounded-lg border border-white/5 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Indicator Dots inside Modal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex space-x-2 bg-neutral-950/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
              {sliderSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                    setScale(1);
                    setOffset({ x: 0, y: 0 });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    lightboxIndex === idx
                      ? "w-6 bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
