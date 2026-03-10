"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Droplets, MapPin, Send } from "lucide-react";

export default function UnderConstruction() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none bg-transparent shadow-none">
        <DialogTitle className="sr-only">Blue Mist Launching Soon</DialogTitle>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]"
            >
              {/* Animated Blue Mist Background Decorative */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]"
                />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-300/20 rounded-full blur-[60px]" />
              </div>

              <div className="p-8 flex flex-col items-center text-center">
                {/* Live Status Badge */}
                <div className="flex items-center gap-2 bg-blue-100/50 px-3 py-1 rounded-full mb-6 border border-blue-200/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">Brewing Purity</span>
                </div>

                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Image
                    src="/logo.png"
                    alt="Blue Mist"
                    width={120}
                    height={120}
                    className="relative drop-shadow-md"
                  />
                </div>
                <h2 className="text-3xl font-extrabold text-blue-600 tracking-tight">
                  Website Under Construction.
                </h2>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Coming Soon.
                </h2>
                <p className="mt-3 text-slate-600 font-medium leading-relaxed">
                  Pure as a mountain mist, <br />
                  <span className="text-blue-600 italic">that&apos;s Blue Mist.</span>
                </p>

                {/* Footer Info */}
                <div className="mt-10 pt-6 border-t border-slate-200/50 w-full flex items-center justify-around">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[12px] font-semibold">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}