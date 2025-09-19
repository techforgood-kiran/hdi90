import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Laptop, 
  Target, 
  Clock, 
  Award, 
  TrendingUp, 
  ExternalLink,
  Brain,
  Globe,
  Lightbulb,
  Shield
} from 'lucide-react';
import { SDGIcon } from '@/components/SDGIcon';
import Navbar from '@/components/Navbar';
import educationHero from '@/assets/education-hero.jpg';
import digitalLearning from '@/assets/digital-learning.jpg';

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
    },
    {
      title: "21st Century Skills Integration",
      description: "Critical thinking, creativity, collaboration, and digital literacy across all levels",
      icon: Brain
    }
  ];

  const kpis = [
    "95% children achieving grade-level literacy & numeracy by age 10",
    "Secondary completion + credential attainment to global best quartile",
    "Teacher-student ratio improved to 1:25 in primary, 1:30 in secondary",
    "Teacher competency index improvements of 40% within 3 years",
    "Vocational training completion rate of 80% with job placement >70%",
    "Education Score component calibrated to 0.90 contribution"
  ];

  const earlyWins = [
    {
      title: "Foundations 120",
      timeline: "120 days",
      description: "National literacy acceleration campaigns with volunteer tutors and community mobilization"
    },
    {
      title: "Micro-Credential Platform",
      timeline: "90 days", 
      description: "Launch national platform mapping credentials to jobs with employer partnerships"
    },
    {
      title: "Teacher Boot Camps",
      timeline: "180 days",
      description: "Intensive teacher training in poorest districts with proven pedagogy and mentoring"
    }
  ];

  const governance = [
    {
      title: "Education Outcomes Law",
      description: "Constitutional guarantee to quality education with learning budgets linked to measurable outcomes"
    },
    {
      title: "PPPs for Vocational Hubs",
      description: "Employer co-investment + government vouchers for industry-relevant skill development"
    },
    {
      title: "Global Impact Bonds",
      description: "Innovative financing mechanisms to scale catch-up learning and bridge equity gaps"
    }
  ];

  const risks = [
    {
      title: "Educational Inequity Across Regions",
      description: "Persistent gaps in access and quality between urban-rural and rich-poor communities",
      mitigation: "Formula-based funding prioritizing lowest HDI districts with infrastructure guarantees and teacher incentives"
    },
    {
      title: "Technology Exclusion & Digital Divide",
      description: "Limited connectivity and device access preventing equitable digital learning",
      mitigation: "Hybrid tech + radio/print backup systems, community digital hubs, device lending programs"
    },
    {
      title: "Teacher Shortage & Quality Gaps",
      description: "Insufficient qualified teachers, especially in STEM and rural areas",
      mitigation: "Accelerated teacher training, international recruitment, performance incentives, remote mentoring systems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(79, 70, 229, 0.8)), url(${educationHero})` 
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
              <SDGIcon number="4" size="md" />
              <SDGIcon number="8" size="md" />
              <SDGIcon number="5" size="md" />
              <SDGIcon number="10" size="md" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learning to Lead
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Education for Capability & Character"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Transform education systems to deliver world-class learning outcomes and 
              opportunity access for all, ensuring every learner develops the capabilities 
              needed to lead and thrive in the 21st century.
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
            <p className="text-xl text-gray-600">Building education systems for the future of learning</p>
          </motion.div>
          
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

      {/* Digital Learning Revolution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bridging the Digital Learning Divide
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Leveraging technology to democratize access to world-class education, ensuring 
                no child is left behind regardless of geography, economic status, or social background. 
                Our digital-first approach combines cutting-edge technology with proven pedagogical methods.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>AI-powered personalized learning pathways</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span>Adaptive assessments and real-time feedback systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Virtual classrooms connecting rural and urban learners</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Blockchain-verified credentials and micro-qualifications</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={digitalLearning} 
                alt="Digital Learning Infrastructure"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs and Early Wins */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Key Performance Indicators</h3>
              </div>
              <div className="space-y-3">
                {kpis.map((kpi, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
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
                  <div key={index} className="p-4 bg-white rounded-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Governance & Financing</h2>
            <p className="text-xl text-gray-600">Innovative funding models for educational transformation</p>
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
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-600" />
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
            <p className="text-xl text-gray-600">Addressing challenges in educational system transformation</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Education Transforms Everything</h2>
            <p className="text-xl mb-8 text-white/90">
              Join the movement to ensure every child has access to world-class education. 
              Together, we can build learning systems that prepare leaders for tomorrow.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Champion Educational Excellence
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}