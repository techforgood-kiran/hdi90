import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Zap, TreePine, Factory, Briefcase, Target, Clock, Globe, Recycle } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function RegenerateProsper() {
  const interventions = [
    {
      title: "National 10-year Transition Plans",
      description: "Energy decarbonization, regenerative agriculture, urban circularity",
      icon: Globe
    },
    {
      title: "Nature-Based Solutions",
      description: "Reforestation, watershed restoration, peatland protection",
      icon: TreePine
    },
    {
      title: "Rural Livelihood Transition",
      description: "Finance & training for agroecology, sustainable fisheries, eco-tourism",
      icon: Leaf
    },
    {
      title: "Circular Economy Policy",
      description: "Materials-as-service, extended producer responsibility",
      icon: Recycle
    },
    {
      title: "Green Job Guarantees",
      description: "Re-skilling programs for carbon-intensive sectors",
      icon: Briefcase
    }
  ];

  const kpis = [
    "Net Environmental Impact index → target net positive contribution",
    "% economy in green/circular sectors and green job creation",
    "Renewable energy share and energy intensity reductions",
    "Environmental component scaled to 0.90"
  ];

  const earlyWins = [
    {
      title: "National Scale Reforestation",
      timeline: "2 years",
      description: "20% degraded-land restoration in hotspots within 2 years"
    },
    {
      title: "Renewables + Microgrid",
      timeline: "180 days", 
      description: "Fast-track renewables + microgrid pilots for rural electrification"
    },
    {
      title: "Circular Packaging Mandates",
      timeline: "120 days",
      description: "FMCG/retailers + incentives for composting/recycling hubs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Leaf className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission Regenerate & Prosper
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Net Positive Nature + Inclusive Growth"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Shift economic activity to regenerative, low-carbon, circular systems so 
              Net Environmental Impact is positive while preserving prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Interventions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Core Interventions
          </motion.h2>
          
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
                        <p className="text-sm text-muted-foreground">{intervention.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Key Performance Indicators
          </motion.h2>
          
          <div className="grid gap-4">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <Target className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">{kpi}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Wins */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Three High-Leverage Early Wins
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {earlyWins.map((win, index) => (
              <motion.div
                key={win.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm text-green-600 font-semibold mb-2">{win.timeline}</div>
                    <h3 className="text-lg font-semibold mb-3">{win.title}</h3>
                    <p className="text-sm text-muted-foreground">{win.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Financing */}
      <section className="py-16 px-6 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Governance & Financing
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Green Transition Funds</h3>
                <p className="text-sm text-muted-foreground">Blended climate finance + fiscal restructuring</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Factory className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Carbon Pricing</h3>
                <p className="text-sm text-muted-foreground">Carbon pricing/removal credits with social safeguards</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Just Transition Framework</h3>
                <p className="text-sm text-muted-foreground">Compensation + re-skilling for affected workers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Risks & Mitigations
          </motion.h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Job Losses in Fossil Sectors</h3>
                    <p className="text-sm text-muted-foreground">Economic disruption from transition</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Guaranteed re-skilling + phased transition funds</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Greenwashing / Ineffective Offsets</h3>
                    <p className="text-sm text-muted-foreground">False environmental claims</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Strict MRV (monitoring, reporting, verification) and public disclosure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}