import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { AnimatedHero } from "@/components/animated/AnimatedHero";
import { AnimatedWhyHDI } from "@/components/animated/AnimatedWhyHDI";
import { AnimatedHDI2 } from "@/components/animated/AnimatedHDI2";
import { AnimatedCallToAction } from "@/components/animated/AnimatedCallToAction";
import { initSmoothScrolling } from "@/hooks/useScrollController";

const Index = () => {
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedHero scrollProgress={scrollProgress} />
      <AnimatedWhyHDI scrollProgress={scrollProgress} />
      <AnimatedHDI2 scrollProgress={scrollProgress} />
      <AnimatedCallToAction scrollProgress={scrollProgress} />
    </motion.div>
  );
};

export default Index;
