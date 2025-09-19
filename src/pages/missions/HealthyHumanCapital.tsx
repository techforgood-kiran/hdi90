import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, TrendingUp, Target, Clock, Award, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function HealthyHumanCapital() {
  const interventions = [
    {
      title: "Universal Primary Health Coverage",
      description: "Prevention-first model with vaccines, maternal care, NCD screening, mental health integration",
      icon: Shield
    },
    {
      title: "Community Health Workforce",
      description: "Task-shifting, digital supervision, telemedicine scale-up",
      icon: Users
    },
    {
      title: "Nutrition & WASH Campaigns",
      description: "Targeting first 1,000 days and adolescent girls",
      icon: Heart
    },
    {
      title: "Mental Health at Scale",
      description: "School counseling, workplace mental health, suicide prevention",
      icon: TrendingUp
    }
  ];

  const kpis = [
    "95% population access to essential health services by 2030",
    "Maternal mortality and under-5 mortality to best-practice thresholds",
    "50% reduction in untreated depression/anxiety prevalence",
    "Healthy life expectancy index → 0.90 contribution"
  ];

  const earlyWins = [
    {
      title: "CHW Rapid Deployment",
      timeline: "90 days",
      description: "National scale community health worker deployment in underserved districts"
    },
    {
      title: "Free Primary Care Access",
      timeline: "120 days", 
      description: "Telemedicine + essential medicines in pilot provinces"
    },
    {
      title: "Immunization Catch-up",
      timeline: "180 days",
      description: "Childhood immunization weeks + nutrition hotspot mapping"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-pink-600 to-rose-500 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Heart className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission Healthy Human Capital
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Universal Prevent, Care & Thrive"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Ensure every person reaches a minimum baseline of physical and mental health 
              required for flourishing (raise AarogyaShree toward 0.90).
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
          
          <div className="grid md:grid-cols-2 gap-6">
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
                        <div className="p-3 bg-red-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{intervention.title}</h3>
                          <p className="text-muted-foreground">{intervention.description}</p>
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
                <Target className="w-5 h-5 text-red-600 flex-shrink-0" />
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
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-sm text-red-600 font-semibold mb-2">{win.timeline}</div>
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
      <section className="py-16 px-6 bg-red-50">
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
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Health Guarantee Law</h3>
                <p className="text-sm text-muted-foreground">Minimum publicly funded package</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Blended Finance</h3>
                <p className="text-sm text-muted-foreground">Progressive taxation + concessional finance + impact bonds</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Public-Private Delivery</h3>
                <p className="text-sm text-muted-foreground">Partnerships with strict equity covenants</p>
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
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Weak Primary Governance</h3>
                    <p className="text-sm text-muted-foreground">Limited institutional capacity</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Ring-fenced budgets, citizen scorecards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Human Resource Shortage</h3>
                    <p className="text-sm text-muted-foreground">Insufficient healthcare workers</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Accelerated mid-level provider training, tele-supervision</p>
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