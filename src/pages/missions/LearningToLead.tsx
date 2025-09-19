import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Laptop, Target, Clock, Award, TrendingUp, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function LearningToLead() {
  const interventions = [
    {
      title: "National Curriculum Reset",
      description: "Foundational literacy & numeracy by age 10; socio-emotional & civic skills by secondary",
      icon: BookOpen
    },
    {
      title: "Universal Vocational Access",
      description: "Accredited vocational & digital micro-credentials linked to local labor markets",
      icon: Award
    },
    {
      title: "Teacher Force Multiplier",
      description: "Intensive in-service retraining, coaching, and performance-linked incentives",
      icon: Users
    },
    {
      title: "Digital Learning Backbone",
      description: "Digital learning platform + low-tech offline packages for rural inclusion",
      icon: Laptop
    },
    {
      title: "Aurobindo Kalam AI Gurukul",
      description: "Advanced AI-powered learning platform for next-generation education",
      icon: ExternalLink,
      isLink: true,
      url: "https://www.aurobindokalam.org"
    }
  ];

  const kpis = [
    "95% children achieving grade-level literacy & numeracy by age 10",
    "Secondary completion + credential attainment to global best quartile",
    "Teacher-student ratio and competency index improvements",
    "Education Score component calibrated to 0.90 contribution"
  ];

  const earlyWins = [
    {
      title: "Foundations 120",
      timeline: "120 days",
      description: "National literacy acceleration campaigns with volunteer tutors"
    },
    {
      title: "Micro-Credential Platform",
      timeline: "90 days", 
      description: "Launch national platform mapping credentials to jobs"
    },
    {
      title: "Teacher Boot Camps",
      timeline: "180 days",
      description: "Intensive teacher training in poorest districts with proven pedagogy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <GraduationCap className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mission Learning to Lead
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Education for Capability & Character"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Move whole-population learning outcomes and opportunity access to world-class levels 
              so the Education Score contributes to 0.90.
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
              const isLink = intervention.isLink;
              
              if (isLink) {
                return (
                  <motion.div
                    key={intervention.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-orange-200 bg-gradient-to-r from-yellow-50 to-orange-50">
                      <CardContent className="p-6">
                        <a 
                          href={intervention.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 group"
                        >
                          <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg group-hover:from-yellow-500 group-hover:to-orange-600 transition-all">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2 text-orange-800 group-hover:text-orange-900">{intervention.title}</h3>
                            <p className="text-orange-700 mb-2">{intervention.description}</p>
                            <span className="text-sm text-orange-600 font-medium">Visit Platform →</span>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              }
              
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
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-blue-600" />
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
                <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-sm text-blue-600 font-semibold mb-2">{win.timeline}</div>
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
      <section className="py-16 px-6 bg-blue-50">
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
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Education Outcomes Law</h3>
                <p className="text-sm text-muted-foreground">Learning budgets linked to outcomes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">PPPs for Vocational Hubs</h3>
                <p className="text-sm text-muted-foreground">Employer co-investment + government vouchers</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Impact Bonds</h3>
                <p className="text-sm text-muted-foreground">Finance catch-up learning at scale</p>
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
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Inequity Across Regions</h3>
                    <p className="text-sm text-muted-foreground">Uneven access and quality</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Formula-based funding prioritizing lowest HDI districts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-amber-700 mb-2">Risk: Technology Exclusion</h3>
                    <p className="text-sm text-muted-foreground">Digital divide limiting access</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Mitigation</h3>
                    <p className="text-sm text-muted-foreground">Hybrid tech + radio/print backup systems</p>
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