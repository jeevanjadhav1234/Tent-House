"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send, Star, CheckCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    date: "",
    type: "wedding",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", phone: "", date: "", type: "wedding", message: "" });
      }, 5000);
    }, 1200);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hi Jai Bhavani Tent House, I would like to inquiry about booking an event. \nName: ${formState.name || "Guest"}\nPhone: ${formState.phone || "N/A"}\nEvent Date: ${formState.date || "N/A"}\nType: ${formState.type}\nMessage: ${formState.message || "N/A"}`;
    const url = `https://wa.me/916366447720?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-neutral-950"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-premium-dark/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-maroon-900/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] font-bold text-pink-royal uppercase flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 text-pink-royal" /> Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-white to-gold-500">
            BOOK AN EVENT
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-pink-royal mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Ready to design your grand event stage? Send us an inquiry, click to call us directly, or drop us a message on WhatsApp for custom budget designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Form (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call CTA */}
              <a
                href="tel:+916366447720"
                className="p-5 rounded-2xl border border-gold-500/20 bg-neutral-900 hover:border-gold-500/50 flex items-center gap-4 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-neutral-950 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-sans font-bold text-neutral-400 block uppercase">
                    Call Now (Primary)
                  </span>
                  <span className="text-sm sm:text-base font-sans font-bold text-white mt-1 block group-hover:text-gold-300">
                    +91 63664 47720
                  </span>
                </div>
              </a>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppInquiry}
                className="p-5 rounded-2xl border border-green-500/20 bg-neutral-900 hover:border-green-500/50 flex items-center gap-4 transition-all duration-300 text-left w-full group hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/30 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-neutral-950 transition-all">
                  <MessageCircle size={20} fill="currentColor" className="stroke-none" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest font-sans font-bold text-neutral-400 block uppercase">
                    Chat on WhatsApp
                  </span>
                  <span className="text-sm sm:text-base font-sans font-bold text-white mt-1 block group-hover:text-[#25D366]">
                    +91 63664 47720
                  </span>
                </div>
              </button>
            </div>

            {/* Glassmorphism Form Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-gold-500/20 glass-panel shadow-2xl relative overflow-hidden">
              {/* Submission Overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-neutral-950/95 z-20 flex flex-col items-center justify-center text-center p-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 animate-bounce mb-4" />
                    <h4 className="text-2xl font-serif font-bold text-white">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-neutral-400 font-sans mt-2 max-w-sm">
                      Thank you. We will get back to you shortly to discuss your custom event staging arrangements.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-6">
                Send Event Setup Query
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-neutral-950 border border-white/10 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-white font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="w-full bg-neutral-950 border border-white/10 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-white font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/10 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-white font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Service Category
                    </label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/10 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-white font-sans outline-none transition-colors"
                    >
                      <option value="wedding">Wedding Decoration</option>
                      <option value="vip-tent">VIP Tent Arrangements</option>
                      <option value="sound-system">Sound System & LED Wall</option>
                      <option value="jayanthi">Jayanthi Setup</option>
                      <option value="other">Other Event Setups</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                    Inquiry Notes / Specifics
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Enter stage dimensions, sound system need, or setup location details..."
                    className="w-full bg-neutral-950 border border-white/10 hover:border-gold-500/30 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-white font-sans outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 disabled:opacity-50 text-neutral-950 text-xs font-sans font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-102 cursor-pointer shadow-lg"
                  >
                    <Send size={14} />
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="py-3 px-6 rounded-lg border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 text-xs font-sans font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle size={14} fill="currentColor" className="stroke-none" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Embedded Google Maps frame (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full flex flex-col justify-between"
            >
              {/* Address detail card */}
              <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900 mb-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-royal/10 border border-pink-royal/20 flex items-center justify-center shrink-0 text-pink-royal-light mt-0.5 animate-bounce">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-neutral-100">
                    Business Address
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 leading-relaxed">
                    Jai Bhavani Tent House,<br />
                    Navanihal, Kamalapur, Kalaburagi (Gulbarga),<br />
                    Karnataka, India.
                  </p>
                  <span className="text-[10px] text-gold-500 font-sans block mt-3 font-semibold uppercase tracking-wider">
                    📍 Located at Navanihal, Kamalapur taluk.
                  </span>
                </div>
              </div>

              {/* Map frame viewport */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/40 bg-neutral-900 shadow-[0_0_30px_rgba(212,175,55,0.25)] relative group">
                
                {/* Floating "Open in Maps" Button */}
                <a
                  href="https://www.google.com/maps?cid=5446970792604097249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 px-4 py-2 bg-neutral-950/80 hover:bg-neutral-950 backdrop-blur-md border border-gold-500/30 hover:border-gold-500/80 text-gold-400 hover:text-white rounded-xl text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group/btn hover:scale-105"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                {/* Embed Map Iframe */}
                <iframe
                  title="Jai Bhavani Tent House Navanihal Google Map location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.44933161933!2d76.9600663754074!3d17.581385383339292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8cd026c131e97%3A0x4b9787139b185ae1!2sJai%20Bhavani%20Tent%20House%20Navanihal!5e0!3m2!1sen!2sin!4v1781414051839!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
