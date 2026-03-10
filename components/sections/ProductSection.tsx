"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/components/constants/products";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function ProductSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden" id="products">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] -z-10" />

      <div className="container px-4 mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Purely Lahore
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Hydration for <span className="text-blue-600">Every Need</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            From pocket-sized 500ml bottles to our signature 19L home carboys, Blue Mist delivers purity to your doorstep.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {PRODUCTS.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <Card className="group relative border-none bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 rounded-[2.5rem] p-4 flex flex-col items-center">
              
              {/* Product Image Container */}
              <div className="w-full aspect-[4/5] relative mb-6 bg-gradient-to-br from-blue-50 to-white rounded-[2rem] flex items-center justify-center overflow-hidden">
                {/* Visual "Water Ripple" Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_70%)] animate-pulse" />
                </div>

                {/* The "Size" Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white px-3 py-1 rounded-full shadow-sm">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-tighter">
                    {product.size}
                  </span>
                </div>

                {/* Placeholder/Icon for the bottle */}
                <div className="text-blue-100 group-hover:text-blue-200 transition-colors duration-500 text-8xl font-black select-none transform group-hover:scale-110 transition-transform duration-500">
                  {product.size.split(' ')[0]}
                </div>
              </div>
              
              <CardHeader className="p-0 text-center px-2">
                <CardTitle className="text-2xl font-black text-slate-800 tracking-tight">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 mt-3 text-center px-4">
                <p className="text-sm text-slate-400 font-medium leading-snug">
                  {product.description}
                </p>
              </CardContent>

              <CardFooter className="p-0 mt-8 w-full">
                <Button className="group/btn w-full h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden">
                  <span className="flex items-center gap-2 group-hover:translate-x-[-10px] transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4" /> 
                    Order Now
                  </span>
                  <ArrowRight className="absolute right-[-20px] group-hover:right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}