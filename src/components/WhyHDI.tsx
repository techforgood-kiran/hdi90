import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, GraduationCap, DollarSign, AlertTriangle } from "lucide-react";

const WhyHDI = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hdi-navy">
            Why not GDP? Why HDI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the difference between economic growth and true human development
          </p>
        </div>
        
        {/* India Example */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="p-8 shadow-medium bg-gradient-card">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-hdi-navy flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-hdi-blue" />
                    India: A Tale of Two Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-hdi-blue/10 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-hdi-blue" />
                      </div>
                      <div>
                        <div className="font-semibold text-hdi-navy">GDP Ranking: 4th Globally</div>
                        <div className="text-sm text-muted-foreground">After USA, China & Germany</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-hdi-navy">HDI: 0.685 (Rank 130/195)</div>
                        <div className="text-sm text-muted-foreground">Massive disparity in human development</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-hdi-navy">The Reality:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Maximum part of India lives like urban poor or in rural villages where there is 
                    <strong> no access to good education, healthcare or high paying employment</strong> or 
                    enough support for entrepreneurship.
                  </p>
                  <div className="mt-4 p-3 bg-hdi-light-blue rounded">
                    <p className="text-sm font-medium text-hdi-navy">
                      GDP can increase if the rich gets richer! But for HDI to increase, 
                      Education, Health, and Income Equity must improve for ALL.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Key Differences */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-hdi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-hdi-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-hdi-navy">Health</h3>
              <p className="text-muted-foreground">
                Life expectancy, healthcare access, and overall well-being for every citizen
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-hdi-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-hdi-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-hdi-navy">Education</h3>
              <p className="text-muted-foreground">
                Quality education access, literacy rates, and skills development opportunities
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-hdi-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-hdi-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-hdi-navy">Income Equity</h3>
              <p className="text-muted-foreground">
                Fair distribution of wealth and economic opportunities for sustainable growth
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-hero rounded-2xl shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Commitment: Genuine Well-being Over Economic Metrics
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Through <strong>Systems Thinking</strong>, <strong>Ethical Business Models</strong>, 
              and <strong>Circular Economy</strong> principles — we believe authentic development 
              must honor planetary boundaries while ensuring no one is left behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHDI;