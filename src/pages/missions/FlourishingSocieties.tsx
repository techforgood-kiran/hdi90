import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Home, Users, Vote, Briefcase, Target, Clock, Shield, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function FlourishingSocieties() {
  const interventions = [
    {
      title: "Universal Social Protection Floor",
      description: "Targeted cash transfers + activation pathways into work/education",
      icon: Shield
    },
    {
      title: "Affordable Dignified Housing",
      description: "Basic services for slum/rural households",
      icon: Home
    },
    {
      title: "Community-Based Programs",
      description: "Mental health, social connectedness, and violence prevention",
      icon: Heart
    },
    {
      title: "Participatory Governance",
      description: "Local HDI councils, grievance redress, and community budgeting",
      icon: Vote
    },
    {
      title: "Work-Life Balance Policies",
      description: "Parental leave, meaningful employment, and leisure policies",
      icon: Briefcase
    }
  ];

  const kpis = [
    "Poverty headcount (extreme & relative) reduced to best-practice",
    "Social protection coverage (% population with at least one benefit)",
    "National Life Satisfaction index → target mean consistent with 0.90",
    "Trust-in-institutions metrics and civic participation rates"
  ];

  const earlyWins = [
    {
      title: "Top-up Cash Transfers",
      timeline: "90 days",
      description: "Time-limited transfers to poorest quintile plus case management"
    },
    {
      title: "Community Mental Health",
      timeline: "120 days", 
      description: "Rapid rollout of community mental-health groups and social prescribing"
    },
    {
      title: "Neighborhood Labs",
      timeline: "180 days",
      description: "Small capital grants for local public space & micro-enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Users className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission Flourishing Societies
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Happiness, Security & Civic Trust"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Raise measurable well-being (subjective & objective) by building social protection, 
              civic inclusion, and community resilience so Happiness Score reaches 0.90.
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
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-emerald-600" />
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
                <Target className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-sm text-emerald-600 font-semibold mb-2">{win.timeline}</div>
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
      <section className="py-16 px-6 bg-emerald-50">
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
                <Handshake className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">National Social Compact</h3>
                <p className="text-sm text-muted-foreground">Multi-stakeholder pacts with private sector and civil society</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Subsidy Reorientation</h3>
                <p className="text-sm text-muted-foreground">Fuel/fertilizer subsidies → human capital transfers</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Local Revenue Mobilization</h3>
                <p className="text-sm text-muted-foreground">Land value capture, municipal bonds</p>
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
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Political Pushback to Cash Transfers</h3>
                    <p className="text-sm text-muted-foreground">Resistance to universal social protection</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Phased pilots with visible local results, rigorous evaluation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Corruption at Local Level</h3>
                    <p className="text-sm text-muted-foreground">Misappropriation of funds</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Mobile cash, biometric verification, community monitoring</p>
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