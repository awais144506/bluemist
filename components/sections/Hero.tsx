"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplet, Waves, Wind, ShieldCheck } from "lucide-react";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const bottleSizes = [
    { size: "500ml", icon: <Droplet className="w-5 h-5" /> },
    { size: "1.5L", icon: <Droplet className="w-6 h-6" /> },
    { size: "6 Liter", icon: <Waves className="w-6 h-6" /> },
    { size: "19 Liter", icon: <Wind className="w-7 h-7" /> },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* --- Animated Background Layers --- */}
      <div className="absolute inset-0 z-0">
        {/* Soft Blue Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(219,234,254,1)_0%,rgba(255,255,255,1)_100%)]" />
        
        {/* Floating Mist Blobs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        {/* --- Logo with Floating Animation --- */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image 
              src="/logo.png" 
              alt="Blue Mist Logo" 
              width={160} 
              height={160} 
              className="drop-shadow-2xl brightness-105"
              priority
            />
          </motion.div>
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full -z-10" />
        </motion.div>

        {/* --- Typography --- */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 uppercase">
            Pure <span className="text-blue-600">Blue</span> Mist
          </h1>
        </motion.div>
        
        <motion.p 
          {...fadeInUp} 
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light mb-10"
        >
          Pure as a <span className="text-blue-500 font-semibold italic">mountain mist</span>, <br className="hidden md:block"/> that&apos;s Blue Mist.
        </motion.p>

        {/* --- CTAs --- */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 mb-16"
        >
          <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 rounded-full transition-all hover:scale-105">
            Order Your Water
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-2 border-blue-100 text-blue-600 hover:bg-blue-50 rounded-full transition-all">
            <ShieldCheck className="mr-2 w-5 h-5" /> Quality Assurance
          </Button>
        </motion.div>

        {/* --- Feature/Size Grid --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12"
        >
          {bottleSizes.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-md group-hover:shadow-blue-100 group-hover:text-blue-600 transition-all text-slate-400">
                {item.icon}
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400 group-hover:text-blue-800 transition-colors">
                {item.size}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-300"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}