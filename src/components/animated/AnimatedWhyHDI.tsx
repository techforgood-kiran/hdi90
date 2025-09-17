import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, GraduationCap, DollarSign, AlertTriangle } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const AnimatedWhyHDI = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-hdi-light-blue/20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hdi-navy">
            Why not GDP? Why HDI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Economic growth alone doesn't tell the complete story of human flourishing
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 shadow-strong bg-gradient-hero text-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-hdi-gold mr-3" />
                    <span className="text-2xl font-bold">GDP Growth</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                      <span>India: #4 World Economy as of September 2025</span>
                    </div>
                    <div className="text-lg font-semibold text-hdi-gold">$4 Trillion GDP</div>
                  </div>
                </div>
                
                <div className="text-left border-l-4 border-hdi-gold pl-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
                    <span className="text-2xl font-bold">Human Development</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-red-400 mr-2" />
                      <span>India: Ranked #132/193</span>
                    </div>
                    <div className="text-lg font-semibold text-red-400">HDI Score: 0.633</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-hdi-navy mb-6">
              Our Vision: Systems Thinking for Holistic Development
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in <strong className="text-hdi-blue">genuine well-being</strong> over GDP metrics alone. 
              Our commitment extends to <strong className="text-hdi-navy">systems thinking</strong>, 
              <strong className="text-hdi-green"> ethical business practices</strong>, 
              and <strong className="text-hdi-gold">circular economy principles</strong> 
              that create lasting positive impact for all.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};