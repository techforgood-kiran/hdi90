import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Leaf, GraduationCap, Clock, ArrowRight, Award, TrendingUp, Shield } from "lucide-react";
import Navbar from '@/components/Navbar';

const impactAreas = [
  {
    id: 'health',
    icon: Heart,
    title: 'Health Systems',
    commitment: '2-3 hours/week',
    impact: 'Evidence-based preventive care',
    description: 'Support community health monitoring, wellness education, and access to preventive screenings in underserved areas.',
    metrics: 'Target: Improve HDI health scores by 15% in pilot communities',
    volunteers: 156
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Learning Systems',
    commitment: '2-4 hours/week',
    impact: 'Skills-based education',
    description: 'Facilitate practical learning programs focusing on literacy, numeracy, critical thinking, and vocational skills.',
    metrics: 'Target: 90% completion rate in digital literacy programs',
    volunteers: 289
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Environmental Systems',
    commitment: '1-3 hours/week',
    impact: 'Sustainable practices',
    description: 'Drive local environmental restoration, renewable energy adoption, and circular economy initiatives.',
    metrics: 'Target: Carbon neutral communities by 2028',
    volunteers: 423
  },
  {
    id: 'happiness',
    icon: Users,
    title: 'Community Systems',
    commitment: '1-2 hours/week',
    impact: 'Well-being support',
    description: 'Build resilient communities through mental health support, social connection, and collective problem-solving.',
    metrics: 'Target: 80% improvement in community well-being indicators',
    volunteers: 334
  }
];

function SystemsApproach() {
  return (
    <section className="bg-gradient-to-br from-hdi-navy to-hdi-blue text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Systems Change Through <span className="text-hdi-gold">Collective Action</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real impact requires systemic intervention. Our volunteers work across four interconnected systems 
            to drive measurable progress toward HDI 2.0 targets by 2030.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {impactAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-hdi-gold/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-hdi-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{area.title}</h3>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{area.commitment}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-lg font-semibold text-hdi-gold mb-2">{area.impact}</div>
                      <p className="text-white/80 text-sm leading-relaxed">{area.description}</p>
                    </div>

                    <div className="border-t border-white/20 pt-4 mb-4">
                      <div className="text-xs text-white/60 mb-1">Success Metric</div>
                      <div className="text-sm text-white/90">{area.metrics}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/70">
                        <span className="font-semibold text-hdi-gold">{area.volunteers}</span> active volunteers
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold"
                      >
                        Join Team
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-hdi-gold/10 border border-hdi-gold/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-hdi-gold">Evidence-Based Impact</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Every volunteer contribution is tracked, measured, and validated using HDI 2.0 metrics. 
              Your time directly translates to measurable improvements in community well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-5 h-5 text-hdi-gold" />
                <span className="text-sm">Verified impact tracking</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp className="w-5 h-5 text-hdi-gold" />
                <span className="text-sm">Quarterly progress reports</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5 text-hdi-gold" />
                <span className="text-sm">Research-grade methodology</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-8 py-3"
            >
              Begin Your Systems Impact Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function JoinMovement() {
  const commitmentTiers = [
    {
      name: "Community Volunteer",
      commitment: "2-4 hours/week",
      contribution: "Time + Skills",
      benefits: [
        "HDI 2.0 assessment and personalized development plan",
        "Skills certification in your chosen impact area",
        "Access to research methods and data analysis training",
        "Quarterly progress reports showing your community impact",
        "Professional development through systems thinking workshops"
      ],
      impact: "Direct community engagement with measurable HDI improvements"
    },
    {
      name: "Systems Catalyst",
      commitment: "4-8 hours/week + $25/month",
      contribution: "Leadership + Resources",
      benefits: [
        "Everything in Community Volunteer",
        "Access to advanced impact measurement tools",
        "Mentorship opportunities with development professionals",
        "Priority placement in high-impact projects",
        "Co-authorship opportunities on research publications",
        "Speaking opportunities at conferences and events"
      ],
      impact: "Lead initiatives that scale solutions across multiple communities"
    },
    {
      name: "Movement Builder",
      commitment: "8+ hours/week + $100/month",
      contribution: "Strategy + Implementation",
      benefits: [
        "Everything in Systems Catalyst",
        "Direct collaboration with academic and policy institutions",
        "Grant writing and fundraising training",
        "Access to impact investing networks",
        "Advisory board positions in partner organizations",
        "Recognition in HDI 2.0 annual impact report"
      ],
      impact: "Drive policy change and institutional adoption of HDI 2.0 framework"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-6 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Join the HDI 2.0 Movement
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Drive systemic change toward <strong>HDI 2.0 of 0.90 by 2030</strong> through 
            evidence-based action and collective impact.
          </motion.p>
          <motion.p 
            className="text-lg mb-10 text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            This isn't about donations or charity. It's about committed individuals working within proven systems 
            to achieve measurable improvements in health, education, well-being, and environmental sustainability.
          </motion.p>
        </div>
      </section>

      {/* Evidence Base Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why HDI 2.0 Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional development metrics fail to capture human flourishing. HDI 2.0 provides a 
              comprehensive, actionable framework based on rigorous research and validated methodologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Heart className="w-10 h-10 text-hdi-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Holistic Health</h3>
              <p className="text-sm text-muted-foreground">Beyond life expectancy: biomarkers, mental health, lifestyle factors</p>
            </Card>
            <Card className="text-center p-6">
              <GraduationCap className="w-10 h-10 text-hdi-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Practical Education</h3>
              <p className="text-sm text-muted-foreground">Skills and competencies that drive real economic mobility</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-10 h-10 text-hdi-gold mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Measured Well-being</h3>
              <p className="text-sm text-muted-foreground">Subjective and objective indicators of quality of life</p>
            </Card>
            <Card className="text-center p-6">
              <Leaf className="w-10 h-10 text-hdi-navy mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Environmental Impact</h3>
              <p className="text-sm text-muted-foreground">Footprint reduction and positive environmental contributions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment Tiers */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Level of Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {commitmentTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="h-full shadow-medium border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-sm text-muted-foreground mb-1">Time Commitment</div>
                      <div className="text-lg font-semibold text-primary mb-2">{tier.commitment}</div>
                      <div className="text-sm text-muted-foreground mb-1">Your Contribution</div>
                      <div className="font-medium">{tier.contribution}</div>
                    </div>
                    
                    <div className="flex-grow mb-6">
                      <h4 className="font-semibold mb-3">What You Receive</h4>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 mb-6">
                      <div className="text-sm font-medium text-primary mb-1">Your Impact</div>
                      <div className="text-sm text-muted-foreground">{tier.impact}</div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Join as {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Approach */}
      <SystemsApproach />

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Drive Systems Change?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a global community of evidence-based changemakers committed to achieving 
            measurable progress in human development by 2030.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/hdi-calculator">
                Calculate Your HDI 2.0
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Read the Methodology
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}