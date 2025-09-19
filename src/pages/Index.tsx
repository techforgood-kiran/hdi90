import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedHero } from "@/components/animated/AnimatedHero";
import { AnimatedWhyHDI } from "@/components/animated/AnimatedWhyHDI";
import { AnimatedHDI2 } from "@/components/animated/AnimatedHDI2";
import { AnimatedCallToAction } from "@/components/animated/AnimatedCallToAction";
import { useScrollController, initSmoothScrolling } from "@/hooks/useScrollController";
import Navbar from "@/components/Navbar";

const Index = () => {
  const { scrollYProgress } = useScrollController();

  useEffect(() => {
    initSmoothScrolling();
    
    // Debug scroll progress
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log('Scroll progress:', latest);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <AnimatedHero />
      <AnimatedWhyHDI />
      <AnimatedHDI2 />
      <AnimatedCallToAction />
    </motion.div>
  );
};

export default Index;
