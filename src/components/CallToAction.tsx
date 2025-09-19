import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join This Movement
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            A principled commitment to achieve HDI 0.90 by 2030. 
            This work requires integrity, persistence, and genuine care for human dignity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="opacity-90">Connect with changemakers worldwide</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Mission</h3>
              <p className="opacity-90">Focused on measurable impact</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2030 Commitment</h3>
              <p className="opacity-90">Accountable action with moral urgency</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-medium w-full sm:w-auto"
            >
              <Link to="/join-movement">
                Make Your Commitment
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-hdi-navy hover:bg-hdi-navy/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              <Link to="/principles">
                Read Our Principles
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-white/80 text-sm">
            This work demands authenticity, patience, and unwavering commitment to human dignity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;