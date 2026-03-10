"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
      ${isScrolled 
        ? "bg-white/70 backdrop-blur-md border-blue-100/50 py-3 shadow-sm" 
        : "bg-transparent border-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-around">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: -5, scale: 1.05 }}
            className="relative bg-white p-1 rounded-xl shadow-sm border border-blue-50"
          >
            <Image 
              src="/logo.png" 
              alt="Blue Mist Logo" 
              width={45} 
              height={45} 
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
          >
            Order Now
          </Button>
          
          {/* Mobile Icon Version of Order Now */}
          <Button 
            size="icon" 
            className="md:hidden bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shadow-lg shadow-blue-100"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </nav>
  );
}