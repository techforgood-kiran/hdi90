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
        
        
        
        
        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-hero rounded-2xl shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Commitment: Genuine Well-being Over Economic Metrics
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Through <strong>Systems Thinking</strong>, <strong>Enlightened Business Model Innovation</strong>, 
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