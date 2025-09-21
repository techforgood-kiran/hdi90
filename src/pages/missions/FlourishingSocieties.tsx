import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Home, 
  Users, 
  Vote, 
  Briefcase, 
  Target, 
  Clock, 
  Shield, 
  Handshake,
  TrendingUp,
  Award,
  Lightbulb,
  Smile,
  Building,
  Scale
} from 'lucide-react';
import { SDGIcon } from '@/components/SDGIcon';
import Navbar from '@/components/Navbar';
import societyHero from '@/assets/society-hero.jpg';
import socialPrograms from '@/assets/social-programs.jpg';

export default function FlourishingSocieties() {
  const interventions = [
    {
      title: "Social Protection Enterprises",
      description: "Community-owned social enterprises providing targeted support and pathways to economic opportunity",
      icon: Shield
    },
    {
      title: "Housing Cooperatives & Social Ventures",
      description: "Social enterprises developing affordable housing with community ownership and dignified services",
      icon: Home
    },
    {
      title: "Community Wellness Social Enterprises",
      description: "Locally-owned mental health, social connection, and violence prevention social businesses",
      icon: Heart
    },
    {
      title: "Civic Engagement Social Platforms",
      description: "Social enterprises facilitating participatory governance, community budgeting, and accountability",
      icon: Vote
    },
    {
      title: "Work-Life Balance Social Ventures",
      description: "Social enterprises creating meaningful employment, flexible work models, and well-being services",
      icon: Briefcase
    },
    {
      title: "Community Building Social Enterprises",
      description: "Social ventures fostering dialogue, cultural preservation, and conflict resolution through business models",
      icon: Users
    }
  ];

  const kpis = [
    "Poverty headcount (extreme & relative) reduced to best-practice levels <3%",
    "Social protection coverage (% population with at least one benefit) >90%",
    "National Life Satisfaction index → target mean consistent with 0.90",
    "Trust-in-institutions metrics improved by 40% within 5 years",
    "Civic participation rates doubled from baseline",
    "Community safety index achieving top global quartile performance"
  ];

  const earlyWins = [
    {
      title: "Top-up Cash Transfers",
      timeline: "90 days",
      description: "Time-limited transfers to poorest quintile plus case management and pathway support"
    },
    {
      title: "Community Mental Health",
      timeline: "120 days", 
      description: "Rapid rollout of community mental-health groups and social prescribing programs"
    },
    {
      title: "Neighborhood Labs",
      timeline: "180 days",
      description: "Small capital grants for local public space improvement & micro-enterprise development"
    }
  ];

  const governance = [
    {
      title: "National Social Compact",
      description: "Multi-stakeholder pacts with private sector and civil society for shared prosperity goals"
    },
    {
      title: "Subsidy Reorientation",
      description: "Redirecting fuel/fertilizer subsidies toward human capital transfers and social investments"
    },
    {
      title: "Local Revenue Mobilization",
      description: "Land value capture, municipal bonds, and participatory budgeting for local development"
    }
  ];

  const risks = [
    {
      title: "Political Pushback to Cash Transfers",
      description: "Resistance to universal social protection from fiscal conservatives and political opponents",
      mitigation: "Phased pilots with visible local results, rigorous impact evaluation, and broad coalition building"
    },
    {
      title: "Corruption at Local Level",
      description: "Misappropriation of funds and elite capture of community development programs",
      mitigation: "Mobile cash systems, biometric verification, community monitoring, and transparent grievance mechanisms"
    },
    {
      title: "Social Fragmentation & Polarization",
      description: "Rising inequality and political polarization undermining social cohesion efforts",
      mitigation: "Cross-cutting identity programs, shared public spaces, inter-group contact interventions, media literacy campaigns"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(20, 184, 166, 0.8)), url(${societyHero})` 
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
              <SDGIcon number="10" size="md" />
              <SDGIcon number="16" size="md" />
              <SDGIcon number="11" size="md" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Flourishing Societies
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Happiness, Security & Civic Trust"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Build inclusive, resilient societies through social entrepreneurship that creates 
              sustainable social protection systems, community-owned enterprises, and locally-led 
              solutions. Social enterprises as the primary vehicle for achieving a Happiness Score of 0.90.
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
            <p className="text-xl text-gray-600">Building the foundations of thriving, inclusive communities</p>
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
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-emerald-600" />
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

      {/* Social Protection & Community Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Safety Nets to Springboards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transforming social protection from mere survival assistance to comprehensive 
                systems that enable human flourishing. Our approach combines financial security 
                with pathway programs that build capabilities and foster community resilience.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Universal basic income pilots with activation support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-emerald-600" />
                  <span>Community-owned housing cooperatives and land trusts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smile className="w-5 h-5 text-emerald-600" />
                  <span>Mental health first aid and peer support networks</span>
                </li>
                <li className="flex items-center gap-3">
                  <Vote className="w-5 h-5 text-emerald-600" />
                  <span>Citizen assemblies and participatory democracy platforms</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={socialPrograms} 
                alt="Community Social Programs"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs and Early Wins */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Key Performance Indicators</h3>
              </div>
              <div className="space-y-3">
                {kpis.map((kpi, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5" />
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
                <Clock className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Three High-Leverage Early Wins</h3>
              </div>
              <div className="space-y-4">
                {earlyWins.map((win, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-emerald-900">{win.timeline}</span>
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
            <p className="text-xl text-gray-600">Innovative partnerships for sustainable social transformation</p>
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
                        <Handshake className="w-6 h-6 text-emerald-600" />
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
            <p className="text-xl text-gray-600">Building resilient systems for lasting social change</p>
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Building Societies Where Everyone Thrives</h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in creating communities where happiness, security, and civic trust 
              are not privileges but fundamental rights. Together, we can build flourishing societies.
            </p>
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Champion Social Flourishing
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}