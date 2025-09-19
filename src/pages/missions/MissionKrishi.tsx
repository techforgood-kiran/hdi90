import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sprout, 
  Users, 
  MapPin, 
  Leaf, 
  Truck, 
  ShoppingCart, 
  Zap, 
  Wifi, 
  GraduationCap,
  Heart,
  Target,
  Clock,
  Award,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react';
import { SDGIcon } from '@/components/SDGIcon';
import Navbar from '@/components/Navbar';
import krishiHero from '@/assets/krishi-hero.jpg';
import farmToPlate from '@/assets/farm-to-plate.jpg';
import puraDevelopment from '@/assets/pura-development.jpg';

export default function MissionKrishi() {
  const interventions = [
    {
      title: "Farm-to-Plate Networks",
      description: "Direct farmer-consumer linkages bypassing corporate middlemen, ensuring fair prices and fresh produce",
      icon: Truck
    },
    {
      title: "Community Seed Banks",
      description: "Local seed preservation and sharing systems to maintain biodiversity and prevent corporate seed monopolies",
      icon: Sprout
    },
    {
      title: "PURA Digital Hubs",
      description: "Village-level digital connectivity and e-commerce platforms for direct market access",
      icon: Wifi
    },
    {
      title: "Organic Transition Support",
      description: "Technical and financial assistance for farmers transitioning to chemical-free, natural farming methods",
      icon: Leaf
    },
    {
      title: "Village Processing Centers",
      description: "Local food processing and value addition facilities owned and operated by farming communities",
      icon: Users
    },
    {
      title: "Rural Healthcare Integration",
      description: "Primary healthcare centers integrated with nutrition and food safety education programs",
      icon: Heart
    }
  ];

  const kpis = [
    "% of villages with direct farm-to-market access",
    "Reduction in chemical pesticide usage",
    "Farmer income increase through value addition",
    "Number of PURA hubs established",
    "Food security index improvement",
    "Rural youth retention in agriculture"
  ];

  const earlyWins = [
    {
      title: "Village Digital Markets",
      timeline: "6 months",
      description: "Establish 100 PURA digital hubs connecting farmers directly to urban consumers"
    },
    {
      title: "Organic Certification Co-ops",
      timeline: "1 year",
      description: "Support 500 farmer cooperatives in obtaining organic certification and premium pricing"
    },
    {
      title: "Seed Sovereignty Program",
      timeline: "18 months",
      description: "Establish community seed banks in 1000+ villages across Global South regions"
    }
  ];

  const governance = [
    {
      title: "Farmer Producer Organizations (FPOs)",
      description: "Strengthen farmer collectives for better bargaining power and resource sharing"
    },
    {
      title: "Village Development Councils",
      description: "Democratic governance structures for PURA implementation and resource allocation"
    },
    {
      title: "Anti-Corporate Safeguards",
      description: "Legal frameworks preventing land grabbing and corporate agriculture monopolization"
    }
  ];

  const risks = [
    {
      title: "Climate Change Impact",
      description: "Unpredictable weather patterns affecting crop yields",
      mitigation: "Climate-resilient crops, water conservation, and weather forecasting systems"
    },
    {
      title: "Corporate Resistance",
      description: "Agribusiness corporations opposing direct farmer-consumer models",
      mitigation: "Strong legal protections, government support, and consumer awareness campaigns"
    },
    {
      title: "Digital Divide",
      description: "Rural communities lacking digital literacy for e-commerce platforms",
      mitigation: "Comprehensive digital literacy programs and multilingual, simple interfaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.8)), url(${krishiHero})` 
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
              <SDGIcon number="1" size="md" />
              <SDGIcon number="2" size="md" />
              <SDGIcon number="8" size="md" />
              <SDGIcon number="12" size="md" />
              <SDGIcon number="15" size="md" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mission Krishi
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Food Freedom Through Village Sovereignty"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Transforming agriculture from corporate control to community ownership through PURA-powered 
              villages, direct farm-to-plate networks, and chemical-free food production that serves 
              people over profit across the Global South.
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
            <p className="text-xl text-gray-600">Building food sovereignty through community-centered agriculture</p>
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
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{intervention.title}</h3>
                          <p className="text-gray-600">{intervention.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Farm to Plate Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Farm to Plate Without Corporate Gates
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Breaking the stranglehold of agribusiness corporations by creating direct pathways 
                from small farmers to consumers. Every rupee, peso, or naira spent on food should 
                reach the hands that grow it, not the shareholders who own it.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Protect farmer land rights from corporate acquisition</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>Strengthen farmer collectives and cooperatives</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                  <span>Direct digital marketplaces bypassing middlemen</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span>Chemical-free farming with traditional wisdom</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={farmToPlate} 
                alt="Farm to Plate System"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PURA Integration */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={puraDevelopment} 
                alt="PURA Development"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                PURA: Villages as Economic Powerhouses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dr. APJ Abdul Kalam's vision of Providing Urban Amenities in Rural Areas (PURA) 
                becomes the backbone for agricultural transformation. Every village becomes a 
                connected, empowered hub of sustainable food production and distribution.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Wifi className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Digital Connectivity</h4>
                    <p className="text-sm text-gray-600">High-speed internet for market access</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Zap className="w-8 h-8 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold">Clean Energy</h4>
                    <p className="text-sm text-gray-600">Solar power for processing centers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold">Education Hubs</h4>
                    <p className="text-sm text-gray-600">Agricultural innovation centers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Heart className="w-8 h-8 text-red-600" />
                  <div>
                    <h4 className="font-semibold">Healthcare Access</h4>
                    <p className="text-sm text-gray-600">Primary health centers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs and Early Wins */}
      <section className="py-20 bg-white">
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
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
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
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Three High-Leverage Early Wins</h3>
              </div>
              <div className="space-y-4">
                {earlyWins.map((win, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">{win.timeline}</span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Governance & Financing</h2>
            <p className="text-xl text-gray-600">Democratic structures for sustainable food systems</p>
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
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <Users className="w-6 h-6 text-emerald-600" />
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Risks & Mitigations</h2>
            <p className="text-xl text-gray-600">Proactive strategies for sustainable success</p>
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
            <h2 className="text-4xl font-bold mb-6">Join the Food Freedom Revolution</h2>
            <p className="text-xl mb-8 text-white/90">
              Every village empowered, every farmer sovereign, every meal free from corporate control. 
              The future of food is in our hands.
            </p>
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Start a PURA Hub in Your Village
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}