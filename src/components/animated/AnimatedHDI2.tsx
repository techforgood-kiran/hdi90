import { motion, useTransform, MotionValue } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, GraduationCap, Smile, Leaf, Sparkles, Target } from "lucide-react";
import { ParticleSystem } from "@/components/Canvas/ParticleSystem";
import { useInView } from "react-intersection-observer";

export const AnimatedHDI2 = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const y = useTransform(scrollProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollProgress, [0.5, 0.8], [0, 1]);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  
  console.log('AnimatedHDI2 inView:', inView);

  const pillars = [
    {
      icon: Heart,
      title: "Health Score",
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "Based on preventive diagnostic health profile, psychosomatic profile, end of life quality expectancy, genetic markers and lifestyle (Diet, Exercise and Yoga adherence)",
      link: undefined,
      theme: 'health' as const,
      sdgs: [
        { number: "2", title: "Zero Hunger", focus: "Nutrition & food security" },
        { number: "3", title: "Good Health & Well-being", focus: "Universal health & disease prevention" },
        { number: "6", title: "Clean Water & Sanitation", focus: "Safe water & hygiene" },
        { number: "12.3", title: "Responsible Consumption", focus: "Food waste reduction & better diets" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Education Score",
      color: "text-hdi-blue",
      bgColor: "bg-hdi-light-blue",
      description: "Weighted score of 5 indicators: Literacy in Mother Tongue and English, Aptitude, Growth Mindset, Design Thinking, Ikigai domain competence with industry-backed apprenticeship, and Entrepreneurial skillset",
      theme: 'education' as const,
      sdgs: [
        { number: "4", title: "Quality Education", focus: "Universal, inclusive, equitable education" },
        { number: "5.5", title: "Gender Equality", focus: "Equal access to education" },
        { number: "8.6", title: "Decent Work", focus: "Youth employment & skill-building" },
        { number: "9", title: "Industry & Innovation", focus: "R&D & skills for innovation" },
        { number: "17.6", title: "Global Partnerships", focus: "Knowledge sharing" }
      ]
    },
    {
      icon: Smile,
      title: "Happiness Score",
      color: "text-hdi-gold",
      bgColor: "bg-yellow-50",
      description: "Based on Bhutan's Gross National Happiness Index, measuring psychological well-being, life satisfaction, and social harmony",
      theme: 'happiness' as const,
      sdgs: [
        { number: "1", title: "No Poverty", focus: "Financial security improves happiness" },
        { number: "5", title: "Gender Equality", focus: "Dignity & empowerment" },
        { number: "8", title: "Decent Work", focus: "Meaningful jobs & purpose-driven work" },
        { number: "10", title: "Reduced Inequalities", focus: "Fairness & inclusion" },
        { number: "11", title: "Sustainable Cities", focus: "Safe, connected living" },
        { number: "16", title: "Peace & Justice", focus: "Trust, freedom & security" },
        { number: "17", title: "Partnerships", focus: "Collective solidarity" }
      ]
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      color: "text-hdi-green",
      bgColor: "bg-hdi-light-green",
      description: "Net Impact on Environment – whether the individual is living under planetary boundaries. Net emissions + net environmental impact assessment",
      theme: 'environment' as const,
      sdgs: [
        { number: "7", title: "Clean Energy", focus: "Renewable energy reduces footprint" },
        { number: "9.4", title: "Sustainable Industry", focus: "Sustainable industrialization" },
        { number: "11.6", title: "Sustainable Cities", focus: "Pollution reduction" },
        { number: "12", title: "Responsible Consumption", focus: "Circular economy" },
        { number: "13", title: "Climate Action", focus: "Mitigation & adaptation" },
        { number: "14", title: "Life Below Water", focus: "Ocean health" },
        { number: "15", title: "Life on Land", focus: "Forests & biodiversity" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-hdi-light-blue/30 relative overflow-hidden"
      style={{ y, opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ParticleSystem scrollProgress={0.7} theme="happiness" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={itemVariants}
          >
            <Sparkles className="w-8 h-8 text-hdi-gold mr-2" />
            <span className="text-hdi-blue font-semibold tracking-wide text-lg">REVOLUTIONARY APPROACH</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-hdi-navy"
            variants={itemVariants}
          >
            HDI 2.0: The Holistic Development Index
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A modern, multidimensional approach to measuring human development based on the 
            <strong className="text-hdi-navy"> Antyodaya Principle</strong> — ensuring progress reaches the last person first.
          </motion.p>
        </motion.div>

        {/* Antyodaya Principle with Morphing Background */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Card className="p-8 shadow-medium bg-gradient-accent relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1))",
                  "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(16, 185, 129, 0.1))",
                  "linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <CardContent className="p-0 text-center relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-hdi-navy"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                The Antyodaya Principle
              </motion.h3>
              <p className="text-lg leading-relaxed text-hdi-navy/80 mb-4">
                <em>"Progress is real only when it reaches the last person first."</em>
              </p>
              <p className="text-muted-foreground">
                Rooted in Pandit Deendayal Upadhyaya's vision of integral humanism, 
                Antyodaya means uplifting the last person in society — ensuring the poorest, 
                most vulnerable, and marginalized receive priority in development and welfare.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Four Pillars with Individual Particle Systems */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 shadow-soft hover:shadow-medium transition-all h-full group relative overflow-hidden">
                  {/* Individual Particle System for Each Pillar */}
                  <div className="absolute inset-0 opacity-20">
                    <ParticleSystem scrollProgress={0.3} theme={pillar.theme} />
                  </div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div 
                        className={`w-12 h-12 ${pillar.bgColor} rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-hdi-navy group-hover:text-hdi-blue transition-colors">
                        {pillar.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                    
                    {/* SDG Mapping with Animated Badges */}
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Target className="w-4 h-4 text-hdi-blue mr-2" />
                        </motion.div>
                        <span className="text-sm font-semibold text-hdi-navy">Aligned UN SDGs:</span>
                      </div>
                      <div className="space-y-2">
                        {pillar.sdgs.map((sdg, sdgIndex) => (
                          <motion.div 
                            key={sdgIndex} 
                            className="flex items-start space-x-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: 0.5 + sdgIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-xs font-mono font-bold min-w-fit hover:bg-hdi-blue hover:text-white transition-colors"
                            >
                              {sdg.number}
                            </Badge>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-hdi-navy">{sdg.title}</div>
                              <div className="text-xs text-muted-foreground">{sdg.focus}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {pillar.link && (
                      <a 
                        href={pillar.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-hdi-blue hover:underline font-medium text-sm story-link"
                      >
                        Learn more →
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Innovation with Animated Text Effects */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Card className="p-8 shadow-strong bg-gradient-hero relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <CardContent className="p-0 text-center text-white relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(245,158,11,0.5)",
                    "0 0 10px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Not Based on Statistical Averages
              </motion.h3>
              <motion.p 
                className="text-lg leading-relaxed mb-4"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                HDI 2.0 rejects misleading statistical averages that hide suffering behind numbers. 
                Instead, we measure the actual well-being of those society has forgotten.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed opacity-90"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Modern technology and AI enable us to truly see and serve the most vulnerable, 
                making authentic development possible for the first time in human history.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};