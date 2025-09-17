import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/hdi-hero.jpg";

export const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Global development and human connectivity" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div 
          className="flex items-center justify-center mb-6 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Globe className="w-8 h-8 text-hdi-gold" />
          <span className="text-hdi-gold font-semibold tracking-wide">HDI 2030 PROJECT</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          True Human Development
          <span className="block text-hdi-gold">
            Beyond Economic Growth
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A commitment to achieving <strong>Holistic Development Index of 0.90 by 31.12.2030</strong> through 
          principled entrepreneurship, ethical governance and meaningful impact.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-4 text-lg transition-all hover:scale-105">
            Join the Movement
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all hover:scale-105">
            Understanding HDI
          </Button>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: "0.90", label: "Target HDI by 2030" },
            { value: "195", label: "Nation States to Impact" },
            { value: "17", label: "UN SDGs Aligned" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold text-hdi-gold mb-2">
                {stat.value}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};