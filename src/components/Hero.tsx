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
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          True Human Development
          <span className="block text-hdi-gold">Beyond Economic Growth</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-4">
          A commitment to achieving <strong>Holistic Development Index of 0.90 by 31.12.2030</strong> through 
          principled entrepreneurship, ethical governance and meaningful impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-medium w-full sm:w-auto">
            Join the Movement
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button asChild size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
            <Link to="/methodology">
              UNDERSTANDING HDI 2.0
            </Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-hdi-gold mb-1 sm:mb-2">0.90</div>
            <div className="text-base sm:text-lg opacity-90">Target HDI by 2030</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-hdi-gold mb-1 sm:mb-2">195</div>
            <div className="text-base sm:text-lg opacity-90">Nation States to Impact</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-hdi-gold mb-1 sm:mb-2">17</div>
            <div className="text-base sm:text-lg opacity-90">UN SDGs Aligned</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;