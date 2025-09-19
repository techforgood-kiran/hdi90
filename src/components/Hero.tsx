import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hdi-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Global development and human connectivity" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Globe className="w-8 h-8 text-hdi-gold" />
          <span className="text-hdi-gold font-semibold tracking-wide">HDI 2030 PROJECT</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          True Human Development
          <span className="block text-hdi-gold">Beyond Economic Growth</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          A commitment to achieving <strong>Holistic Development Index of 0.90 by 31.12.2030</strong> through 
          principled entrepreneurship, ethical governance and meaningful impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-4 text-lg shadow-medium">
            Join the Movement
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hdi-navy px-8 py-4 text-lg font-semibold">
            <Link to="/methodology">
              UNDERSTANDING HDI 2.0
            </Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-hdi-gold mb-2">0.90</div>
            <div className="text-lg opacity-90">Target HDI by 2030</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-hdi-gold mb-2">195</div>
            <div className="text-lg opacity-90">Nation States to Impact</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-hdi-gold mb-2">17</div>
            <div className="text-lg opacity-90">UN SDGs Aligned</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;