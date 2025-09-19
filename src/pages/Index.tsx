import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Globe, Target, CheckCircle } from "lucide-react";
import { useScrollController, initSmoothScrolling } from "@/hooks/useScrollController";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHDI from "@/components/WhyHDI";
import HDI2 from "@/components/HDI2";
import CallToAction from "@/components/CallToAction";
import { BigCountdownTimer } from "@/components/BigCountdownTimer";

const Index = () => {
  const { scrollYProgress } = useScrollController();

  useEffect(() => {
    initSmoothScrolling();
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      
      {/* Evidence-Based Impact Section */}
      <section className="bg-gradient-card py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Beyond GDP: Measuring What Actually Matters
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional economic indicators fail to capture human flourishing. HDI 2.0 provides a science-backed framework 
              that measures health, education, happiness, and environmental impact in one actionable index.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center p-6 shadow-soft">
                <CardContent>
                  <BarChart3 className="w-12 h-12 text-hdi-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Research-Grade Methods</h3>
                  <p className="text-muted-foreground">
                    Built on validated instruments, peer-reviewed methodologies, and transparent calculations 
                    used by leading development economists and public health researchers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center p-6 shadow-soft">
                <CardContent>
                  <Target className="w-12 h-12 text-hdi-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Actionable Insights</h3>
                  <p className="text-muted-foreground">
                    Get specific, evidence-based recommendations for improving health outcomes, 
                    educational achievement, well-being, and environmental impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="text-center p-6 shadow-soft">
                <CardContent>
                  <Globe className="w-12 h-12 text-hdi-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Global Movement</h3>
                  <p className="text-muted-foreground">
                    Join organizations, policymakers, and individuals worldwide using HDI 2.0 
                    to drive meaningful progress toward the UN Sustainable Development Goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="bg-primary/5 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">The HDI 2.0 Difference</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hdi-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Captures health beyond life expectancy using biomarkers and lifestyle factors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hdi-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Measures practical skills and competencies, not just years of schooling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hdi-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Integrates subjective well-being with objective quality of life indicators</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hdi-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Accounts for environmental footprint and positive environmental actions</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-hdi-blue hover:bg-hdi-blue/90 text-white w-full sm:w-auto" asChild>
                  <Link to="/hdi-calculator">
                    Calculate Your HDI 2.0
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3">
                  Free assessment • Evidence-based recommendations • Privacy protected
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Big Countdown Timer */}
      <BigCountdownTimer />

      <Hero />
      <WhyHDI />
      <HDI2 />
      <CallToAction />
    </motion.div>
  );
};

export default Index;
