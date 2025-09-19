import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join This Movement
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            A principled commitment to achieve HDI 0.90 by 2030. 
            This work requires integrity, persistence, and genuine care for human dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-4 text-lg shadow-medium"
            >
              Make Your Commitment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-hdi-navy hover:bg-hdi-navy/90 text-white px-8 py-4 text-lg font-semibold"
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