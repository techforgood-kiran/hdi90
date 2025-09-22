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

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-sm text-white/70">
                        <span className="font-semibold text-hdi-gold">{area.volunteers}</span> active volunteers
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold w-full sm:w-auto text-xs sm:text-sm px-3 py-2"
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
              className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Begin Your Systems Impact Journey</span>
              <span className="sm:hidden">Start Impact Journey</span>
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
      commitment: "2+ hours/week + ₹90/month",
      contribution: "Time + Skills + Support",
      benefits: [
        "Personal development assessment and growth roadmap",
        "Skills training and certification in community impact areas",
        "Workshop access on problem-solving and project management",
        "Impact reports showing how your contributions create change",
        "Leadership development through real-world experience",
        "Network with changemakers across industries and backgrounds"
      ]
    },
    {
      name: "Systems Catalyst",
      commitment: "4+ hours/week + ₹900/month",
      contribution: "Leadership + Resources",
      benefits: [
        "Everything in Community Volunteer",
        "Advanced training in project management and impact measurement",
        "One-on-one mentoring with experienced professionals and academics",
        "Leadership opportunities in high-impact community projects",
        "Platform to share your work and insights with broader audiences",
        "Access to free career focused courses + internships",
        "Monthly coaching sessions for career and personal development",
        "Early access to new programs, research findings, and opportunities"
      ]
    },
    {
      name: "Movement Builder",
      commitment: "8+ hours/week + ₹9000/month",
      contribution: "Strategy + Implementation",
      benefits: [
        "Everything in Systems Catalyst",
        "Access to exclusive learning resources and webinars",
        "Direct partnerships with universities, NGOs, and policy organizations",
        "Training in grant writing, fundraising, and social entrepreneurship",
        "Access to impact investing networks and funding opportunities",
        "Advisory roles in partner organizations and new initiatives",
        "Featured recognition in annual reports and media coverage",
        "Exclusive retreats, summits, and networking with global leaders",
        "Personal branding support and thought leadership development"
      ]
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

                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base py-2 sm:py-3">
                      <span className="hidden sm:inline">Join as {tier.name}</span>
                      <span className="sm:hidden">Join as {tier.name.split(' ')[0]}</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Social Entrepreneur Section */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-hdi-gold/5 via-hdi-blue/5 to-hdi-navy/5 border-2 border-hdi-gold/20 rounded-xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-hdi-navy">Transform Your Purpose Into Profit</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Launch your ikigai-based social enterprise with comprehensive incubation, mentorship, and funding support. 
                  Turn your unique purpose into sustainable impact and meaningful income.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-hdi-navy">Your Investment</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Time:</strong> Full-time commitment</div>
                    <div><strong>Capital:</strong> ₹50,000+ initial investment</div>
                    <div><strong>Mindset:</strong> Purpose-driven entrepreneurship</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-hdi-navy">Our Support</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Ikigai-based business model development</li>
                    <li>• 1:1 mentorship from successful entrepreneurs</li>
                    <li>• Seed funding access (₹2-10 lakhs potential)</li>
                    <li>• Purpose-driven market validation</li>
                    <li>• Comprehensive incubation program</li>
                    <li>• Global impact network access</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-hdi-navy">Your Returns</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>₹5-50 lakhs</strong> annual earning potential</li>
                    <li>• 15-25% equity in successful ventures</li>
                    <li>• Meaningful work aligned with purpose</li>
                    <li>• Scalable impact on communities</li>
                    <li>• Thought leadership positioning</li>
                    <li>• Legacy business creation</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-bold px-8 py-3 text-lg">
                  Apply to be a Social Entrepreneur
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Philanthropy/CSR/HNI Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-hdi-gold/10 to-hdi-blue/10 border-2 border-hdi-gold/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-hdi-navy">Philanthropy, CSR & HNI Partnerships</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                For organizations and high net worth individuals seeking strategic impact partnerships, 
                custom program development, or large-scale initiative funding.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
                <div className="bg-white/80 p-4 rounded-lg">
                  <strong className="text-hdi-navy">Corporate CSR Programs</strong>
                  <p className="mt-2 text-muted-foreground">Align your corporate social responsibility initiatives with measurable HDI 2.0 outcomes</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg">
                  <strong className="text-hdi-navy">Strategic Philanthropy</strong>
                  <p className="mt-2 text-muted-foreground">Design evidence-based giving strategies with transparent impact measurement</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg">
                  <strong className="text-hdi-navy">Custom Partnerships</strong>
                  <p className="mt-2 text-muted-foreground">Develop tailored programs for foundations, family offices, and impact investors</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="inline-block bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700">
                  For partnerships. email to sai@hdi90.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}