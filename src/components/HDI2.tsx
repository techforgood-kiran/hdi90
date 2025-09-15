import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, GraduationCap, Smile, Leaf, Sparkles } from "lucide-react";

const HDI2 = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Health Score",
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "Based on preventive diagnostic health profile, psychosomatic profile, end of life quality expectancy, genetic markers and lifestyle (Diet, Exercise and Yoga adherence)",
      link: "https://nura.in/"
    },
    {
      icon: GraduationCap,
      title: "Education Score",
      color: "text-hdi-blue",
      bgColor: "bg-hdi-light-blue",
      description: "Weighted score of 5 indicators: Literacy in Mother Tongue and English, Aptitude, Growth Mindset, Design Thinking, Ikigai domain competence with industry-backed apprenticeship, and Entrepreneurial skillset"
    },
    {
      icon: Smile,
      title: "Happiness Score",
      color: "text-hdi-gold",
      bgColor: "bg-yellow-50",
      description: "Based on Bhutan's Gross National Happiness Index, measuring psychological well-being, life satisfaction, and social harmony"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      color: "text-hdi-green",
      bgColor: "bg-hdi-light-green",
      description: "Net Impact on Environment – whether the individual is living under planetary boundaries. Net emissions + net environmental impact assessment"
    }
  ];

  return (
    <section className="py-20 bg-hdi-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-hdi-gold mr-2" />
            <span className="text-hdi-blue font-semibold tracking-wide text-lg">REVOLUTIONARY APPROACH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hdi-navy">
            HDI 2.0: The Holistic Development Index
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A modern, multidimensional approach to measuring human development based on the 
            <strong className="text-hdi-navy"> Antyodaya Principle</strong> — ensuring progress reaches the last person first.
          </p>
        </div>

        {/* Antyodaya Principle */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 shadow-medium bg-gradient-accent">
            <CardContent className="p-0 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-hdi-navy">
                The Antyodaya Principle
              </h3>
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
        </div>

        {/* Four Pillars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 ${pillar.bgColor} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-hdi-navy">
                      {pillar.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  {pillar.link && (
                    <a 
                      href={pillar.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-hdi-blue hover:underline font-medium"
                    >
                      Learn more →
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Innovation */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-strong bg-gradient-hero">
            <CardContent className="p-0 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Not Based on Statistical Averages
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                The HDI 2.0 is <strong>NOT based on STUPID statistical averages!</strong> 
                But on the total well-being and happiness of currently the poorest and most down-trodden.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                This revolutionary approach is possible with modern technology and AI, 
                ensuring no one is left behind in our journey toward global development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HDI2;