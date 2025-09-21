import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  Zap, 
  TreePine, 
  Factory, 
  Briefcase, 
  Target, 
  Clock, 
  Globe, 
  Recycle,
  TrendingUp,
  Award,
  Lightbulb,
  Shield,
  Wind,
  Droplets,
  Sun
} from 'lucide-react';
import { SDGIcon } from '@/components/SDGIcon';
import Navbar from '@/components/Navbar';
import environmentHero from '@/assets/environment-hero.jpg';
import greenTransition from '@/assets/green-transition.jpg';

export default function RegenerateProsper() {
  const interventions = [
    {
      title: "Green Transition Social Enterprises",
      description: "Community-owned social ventures driving energy decarbonization and regenerative practices with local ownership",
      icon: Globe
    },
    {
      title: "Ecosystem Restoration Social Cooperatives",
      description: "Community-based social enterprises earning revenue through reforestation, watershed restoration, and conservation",
      icon: TreePine
    },
    {
      title: "Rural Green Economy Social Ventures",
      description: "Local social enterprises in agroecology, sustainable fisheries, eco-tourism creating community wealth",
      icon: Leaf
    },
    {
      title: "Circular Economy Social Enterprises",
      description: "Community-owned social ventures in waste management, recycling, and circular manufacturing",
      icon: Recycle
    },
    {
      title: "Green Jobs Social Cooperatives",
      description: "Worker-owned cooperatives providing green skills training and guaranteed employment in clean industries",
      icon: Briefcase
    },
    {
      title: "Community Energy Social Enterprises",
      description: "Village-owned renewable energy cooperatives generating clean power and community income",
      icon: Zap
    }
  ];

  const kpis = [
    "Net Environmental Impact index → target net positive contribution by 2035",
    "% economy in green/circular sectors increased to >40% of GDP",
    "Green job creation: 10 million new jobs in renewable energy and restoration",
    "Renewable energy share achieving >80% by 2030",
    "Energy intensity reductions of 50% from baseline levels",
    "Environmental component scaled to 0.90 HDI contribution"
  ];

  const earlyWins = [
    {
      title: "National Scale Reforestation",
      timeline: "2 years",
      description: "20% degraded-land restoration in climate hotspots with community-based forest management"
    },
    {
      title: "Renewables + Microgrid",
      timeline: "180 days", 
      description: "Fast-track renewables deployment + microgrid pilots for rural electrification and energy access"
    },
    {
      title: "Circular Packaging Mandates",
      timeline: "120 days",
      description: "FMCG/retailers compliance + incentives for composting/recycling hubs in urban centers"
    }
  ];

  const governance = [
    {
      title: "Green Transition Funds",
      description: "Blended climate finance + fiscal restructuring with international climate partnerships"
    },
    {
      title: "Carbon Pricing with Justice",
      description: "Carbon pricing/removal credits with social safeguards and community benefit sharing"
    },
    {
      title: "Just Transition Framework",
      description: "Comprehensive compensation + re-skilling for affected workers and communities"
    }
  ];

  const risks = [
    {
      title: "Job Losses in Fossil Fuel Sectors",
      description: "Economic disruption and unemployment from rapid transition away from carbon-intensive industries",
      mitigation: "Guaranteed re-skilling programs, phased transition funds, early retirement packages, and green job placement guarantees"
    },
    {
      title: "Greenwashing & Ineffective Offsets",
      description: "False environmental claims and carbon offset programs that don't deliver real climate benefits",
      mitigation: "Strict MRV (monitoring, reporting, verification) systems, third-party auditing, public disclosure requirements, and satellite monitoring"
    },
    {
      title: "Elite Capture of Green Economy",
      description: "Wealthy interests monopolizing green transition benefits while excluding marginalized communities",
      mitigation: "Community ownership requirements, benefit-sharing mechanisms, progressive taxation of green profits, and participatory governance structures"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(5, 150, 105, 0.8)), url(${environmentHero})` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center gap-2 mb-6">
              <SDGIcon number="13" size="md" />
              <SDGIcon number="15" size="md" />
              <SDGIcon number="7" size="md" />
              <SDGIcon number="8" size="md" />
              <SDGIcon number="12" size="md" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Regenerate & Prosper
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Net Positive Nature + Inclusive Growth"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Transform economic systems through environmental social enterprises that restore 
              ecosystems while creating community prosperity. Social entrepreneurship as the 
              engine for building regenerative economies where environmental and human flourishing unite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Interventions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Interventions</h2>
            <p className="text-xl text-gray-600">Transforming economies for planetary and human health</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interventions.map((intervention, index) => {
              const IconComponent = intervention.icon;
              return (
                <motion.div
                  key={intervention.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{intervention.title}</h3>
                        <p className="text-gray-600 text-sm">{intervention.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Green Transition Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Great Economic Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Moving from extractive capitalism to regenerative economics that heals ecosystems 
                while creating millions of good jobs. This isn't just about going green—it's about 
                building an economy that works for people and planet simultaneously.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-green-600" />
                  <span>100% renewable energy with community ownership models</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wind className="w-5 h-5 text-green-600" />
                  <span>Carbon removal through nature-based solutions at scale</span>
                </li>
                <li className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-green-600" />
                  <span>Circular water systems and watershed restoration</span>
                </li>
                <li className="flex items-center gap-3">
                  <TreePine className="w-5 h-5 text-green-600" />
                  <span>Biodiversity conservation integrated with economic planning</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={greenTransition} 
                alt="Green Economic Transition"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs and Early Wins */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Key Performance Indicators</h3>
              </div>
              <div className="space-y-3">
                {kpis.map((kpi, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{kpi}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Early Wins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Three High-Leverage Early Wins</h3>
              </div>
              <div className="space-y-4">
                {earlyWins.map((win, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-900">{win.timeline}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{win.title}</h4>
                    <p className="text-gray-600 text-sm">{win.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance & Financing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Governance & Financing</h2>
            <p className="text-xl text-gray-600">Mobilizing resources for just and sustainable transition</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {governance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks & Mitigations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Risks & Mitigations</h2>
            <p className="text-xl text-gray-600">Ensuring equitable and effective environmental transformation</p>
          </motion.div>

          <div className="space-y-8">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-6 h-6 text-red-600" />
                          <h3 className="text-xl font-semibold text-gray-900">{risk.title}</h3>
                        </div>
                        <p className="text-gray-600">{risk.description}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="w-6 h-6 text-green-600" />
                          <h4 className="text-lg font-semibold text-gray-900">Mitigation Strategy</h4>
                        </div>
                        <p className="text-gray-600">{risk.mitigation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Heal the Planet, Build Prosperity</h2>
            <p className="text-xl mb-8 text-white/90">
              Join the regenerative revolution. Together, we can create an economy that 
              restores ecosystems, fights climate change, and creates millions of good jobs.
            </p>
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Lead the Green Transition
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}