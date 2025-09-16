import { motion, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Target } from "lucide-react";
import { ParticleSystem } from "@/components/Canvas/ParticleSystem";
import { useInView } from "react-intersection-observer";

export const AnimatedCallToAction = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [100, -50]);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
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

  const urgencyItems = [
    {
      icon: Clock,
      title: "6 Years Remaining",
      description: "Until 31.12.2030 deadline",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "8 Billion Lives",
      description: "Depending on our collective action",
      color: "text-hdi-blue"
    },
    {
      icon: Target,
      title: "0.90 HDI Goal",
      description: "Achievable with principled commitment",
      color: "text-hdi-gold"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-gradient-hero relative overflow-hidden"
      style={{ y }}
    >
      {/* Multi-layered Particle Systems */}
      <ParticleSystem scrollProgress={0.8} theme="health" />
      <div className="absolute inset-0 opacity-50">
        <ParticleSystem scrollProgress={0.6} theme="environment" />
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Urgency Indicators */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={itemVariants}
          >
            {urgencyItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(255, 255, 255, 0.3)",
                      "0 0 0 20px rgba(255, 255, 255, 0)",
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  animate={{ 
                    color: ["#ffffff", item.color.replace('text-', '#'), "#ffffff"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA Content */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            The Time for Principled Action
            <motion.span 
              className="block text-hdi-gold"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 40px rgba(245, 158, 11, 0.8)",
                  "0 0 20px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Is Now
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
            variants={itemVariants}
          >
            Join committed individuals and organizations working toward genuine human development. 
            Together, we can achieve HDI 0.90 by 2030 through ethical entrepreneurship and meaningful impact.
          </motion.p>

          {/* Action Buttons with Advanced Animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(245, 158, 11, 0.4)",
                  "0 0 0 10px rgba(245, 158, 11, 0)",
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 0.2 }
              }}
            >
              <Button 
                size="lg" 
                className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-10 py-6 text-xl shadow-medium"
              >
                Commit to the Movement
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-xl backdrop-blur-sm"
              >
                Learn Our Approach
              </Button>
            </motion.div>
          </motion.div>

          {/* Commitment Statement */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-lg font-medium mb-3"
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "We commit to measuring success not by wealth accumulated, 
                but by lives genuinely improved and dignity restored."
              </motion.p>
              <motion.p 
                className="text-sm opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1 }}
              >
                — HDI 2030 Founding Principles
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-hdi-gold/50 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-6 h-6 bg-white/30 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
};