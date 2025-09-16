import { motion, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target } from "lucide-react";
import { Globe3D } from "@/components/3D/Globe3D";
import { ParticleSystem } from "@/components/Canvas/ParticleSystem";
import heroImage from "@/assets/hdi-hero.jpg";

export const AnimatedHero = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: useTransform(scrollProgress, [0, 1], [0, 50]) }}
      >
        <img 
          src={heroImage} 
          alt="Global development and human connectivity" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </motion.div>

      {/* 3D Globe Background */}
      <div className="absolute inset-0 opacity-30">
        <Globe3D scrollProgress={0.5} />
      </div>

      {/* Particle System */}
      <ParticleSystem scrollProgress={0.8} theme="health" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div 
          className="flex items-center justify-center mb-6 space-x-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Globe className="w-8 h-8 text-hdi-gold" />
          <span className="text-hdi-gold font-semibold tracking-wide">HDI 2030 PROJECT</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          True Human Development
          <motion.span 
            className="block text-hdi-gold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond Economic Growth
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A commitment to achieving <strong>Holistic Development Index of 0.90 by 31.12.2030</strong> through 
          principled entrepreneurship, ethical governance and meaningful impact.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-4 text-lg shadow-medium hover-scale">
            Join the Movement
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg hover-scale">
            Understanding HDI
          </Button>
        </motion.div>
        
        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { value: "0.90", label: "Target HDI by 2030" },
            { value: "195", label: "Nation States to Impact" },
            { value: "17", label: "UN SDGs Aligned" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-hdi-gold mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};