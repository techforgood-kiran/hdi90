import { motion, useTransform, MotionValue } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, GraduationCap, DollarSign, AlertTriangle } from "lucide-react";
import { ParticleSystem } from "@/components/Canvas/ParticleSystem";
import { useInView } from "react-intersection-observer";

export const AnimatedWhyHDI = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [100, -100]);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
      style={{ y }}
    >
      {/* Background Particles */}
      <ParticleSystem scrollProgress={0.5} theme="education" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-hdi-navy"
            variants={itemVariants}
          >
            Why not GDP? Why HDI?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Understanding the difference between economic growth and true human development
          </motion.p>
        </motion.div>
        
        {/* India Example with Advanced Animations */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Card className="p-8 shadow-medium bg-gradient-card overflow-hidden relative">
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-hdi-blue/5 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <CardContent className="p-0 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-hdi-navy flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-hdi-blue" />
                    India: A Tale of Two Metrics
                  </h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-hdi-blue/10 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-hdi-blue" />
                      </div>
                      <div>
                        <div className="font-semibold text-hdi-navy">GDP Ranking: 4th Globally</div>
                        <div className="text-sm text-muted-foreground">After USA, China & Germany</div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(239, 68, 68, 0.4)",
                            "0 0 0 10px rgba(239, 68, 68, 0)",
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      >
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-hdi-navy">HDI: 0.685 (Rank 130/195)</div>
                        <div className="text-sm text-muted-foreground">Massive disparity in human development</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/50 p-6 rounded-lg backdrop-blur-sm"
                  initial={{ x: 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h4 className="font-semibold mb-4 text-hdi-navy">The Reality:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Maximum part of India lives like urban poor or in rural villages where there is 
                    <strong> no access to good education, healthcare or high paying employment</strong> or 
                    enough support for entrepreneurship.
                  </p>
                  <motion.div 
                    className="mt-4 p-3 bg-hdi-light-blue rounded"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm font-medium text-hdi-navy">
                      GDP can increase if the rich gets richer! But for HDI to increase, 
                      Education, Health, and Income Equity must improve for ALL.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        
        {/* Vision Statement */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-hero rounded-2xl shadow-strong relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: [-200, 800] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Our Commitment: Genuine Well-being Over Economic Metrics
            </h3>
            <p className="text-lg text-white/90 leading-relaxed relative z-10">
              Through <strong>Systems Thinking</strong>, <strong>Ethical Business Models</strong>, 
              and <strong>Circular Economy</strong> principles — we believe authentic development 
              must honor planetary boundaries while ensuring no one is left behind.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};