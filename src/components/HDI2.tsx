import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, GraduationCap, Smile, Leaf, Sparkles, Target } from "lucide-react";

const HDI2 = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Health Score",
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "Based on preventive diagnostic health profile, psychosomatic profile, end of life quality expectancy, genetic markers and lifestyle (Diet, Exercise and Yoga adherence)",
      link: undefined,
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

        {/* Four Pillars with SDG Mapping */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* SDG Mapping */}
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <Target className="w-4 h-4 text-hdi-blue mr-2" />
                      <span className="text-sm font-semibold text-hdi-navy">Aligned UN SDGs:</span>
                    </div>
                    <div className="space-y-2">
                      {pillar.sdgs.map((sdg, sdgIndex) => (
                        <div key={sdgIndex} className="flex items-start space-x-2">
                          <Badge variant="outline" className="text-xs font-mono font-bold min-w-fit">
                            {sdg.number}
                          </Badge>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-hdi-navy">{sdg.title}</div>
                            <div className="text-xs text-muted-foreground">{sdg.focus}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {pillar.link && (
                    <a 
                      href={pillar.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-hdi-blue hover:underline font-medium text-sm"
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
                HDI 2.0 rejects misleading statistical averages that hide suffering behind numbers. 
                Instead, we measure the actual well-being of those society has forgotten.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Modern technology and AI enable us to truly see and serve the most vulnerable, 
                making authentic development possible for the first time in human history.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HDI2;