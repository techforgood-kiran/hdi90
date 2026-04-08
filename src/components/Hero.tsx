import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, DollarSign, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Globe className="w-8 h-8 text-hdi-gold" />
          <span className="text-hdi-gold font-semibold tracking-wide">HDI 2030 PROJECT</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          A Tale of Two Metrics
          <span className="block text-hdi-gold text-xl sm:text-2xl md:text-3xl mt-2">
            Why GDP Alone Fails Humanity
          </span>
        </h1>

        {/* India Card */}
        <div className="max-w-5xl mx-auto mb-10">
          <Card className="p-6 sm:p-8 shadow-strong bg-white/10 backdrop-blur-md border border-white/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-hdi-gold" />
                    Example: India 🇮🇳
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-hdi-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-hdi-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">💰 GDP (Nominal): ~$3.7 Trillion USD</div>
                        <div className="text-sm text-white/70">Rank: 5th in the world (2024–2025 estimates)</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">HDI Score: ~0.64 | Rank: 134th out of 190+ countries</div>
                        <div className="text-sm text-white/70">A staggering gap between economic power and human well-being</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-5 sm:p-6 rounded-lg text-left border border-white/10">
                  <h4 className="font-semibold mb-3 text-hdi-gold">The Reality:</h4>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    The majority of India lives as urban poor or in rural villages with{" "}
                    <strong className="text-white">no access to good education, healthcare, or high-paying employment</strong>{" "}
                    — nor enough support for entrepreneurship.
                  </p>
                  <div className="mt-4 p-3 bg-hdi-gold/15 rounded border border-hdi-gold/30">
                    <p className="text-sm font-medium text-hdi-gold">
                      GDP increases when the rich get richer. But for HDI to rise, 
                      Education, Health &amp; Income Equity must improve for ALL.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-4">
          Your <strong>Holistic Development Index (HDI 2.0)</strong> is an individual, AI-generated dynamic score — not a statistical average.
          A commitment to achieving <strong>0.90 by 31.12.2030</strong> through
          principled entrepreneurship, ethical governance and meaningful impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button asChild size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-medium w-full sm:w-auto">
            <Link to="/join-movement">
              Join the Movement
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto border-2 border-yellow-500 shadow-lg">
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

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
