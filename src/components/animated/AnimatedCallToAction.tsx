import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Target } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { CountdownTimer } from "@/components/CountdownTimer";

export const AnimatedCallToAction = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const urgencyItems = [
    {
      icon: Clock,
      title: <CountdownTimer />,
      description: "Time remaining to achieve HDI 2030 goal"
    },
    {
      icon: Users,
      title: "8 Billion Lives",
      description: "Global population depending on our collective action"
    },
    {
      icon: Target,
      title: "17 SDGs",
      description: "UN Sustainable Development Goals at stake"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-hero relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-white">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {urgencyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <IconComponent className="w-12 h-12 text-hdi-gold mx-auto mb-4" />
                  <div className="text-xl font-bold mb-2">{item.title}</div>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Time is Now
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join us in creating a world where human development transcends economic metrics, 
            where every individual has the opportunity to thrive holistically.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-4 text-lg transition-all hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4 leading-relaxed">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </blockquote>
          <p className="text-lg opacity-80">Ancient Proverb</p>
        </motion.div>
      </div>
    </section>
  );
};