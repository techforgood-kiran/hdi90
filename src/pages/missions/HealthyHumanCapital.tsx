import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Users, 
  Shield, 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  CheckCircle,
  Stethoscope,
  Brain,
  Baby,
  Activity,
  Lightbulb,
  Leaf,
  FlowerIcon,
  Zap,
  Music,
  Sun,
  Star,
  Sparkles
} from 'lucide-react';
import { SDGIcon } from '@/components/SDGIcon';
import Navbar from '@/components/Navbar';
import healthHero from '@/assets/health-hero.jpg';
import communityHealth from '@/assets/community-health.jpg';

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
      icon: Brain
    },
    {
      title: "Maternal & Child Health",
      description: "Comprehensive care from pregnancy through early childhood development",
      icon: Baby
    },
    {
      title: "Digital Health Infrastructure",
      description: "Electronic health records, AI diagnostics, and remote monitoring systems",
      icon: Activity
    }
  ];

  const kpis = [
    "95% population access to essential health services by 2030",
    "Maternal mortality reduced to <50 per 100,000 live births",
    "Under-5 mortality to best-practice thresholds (<25 per 1,000)",
    "50% reduction in untreated depression/anxiety prevalence",
    "Universal health insurance coverage achieved",
    "Healthy life expectancy index → 0.90 contribution"
  ];

  const earlyWins = [
    {
      title: "CHW Rapid Deployment",
      timeline: "90 days",
      description: "National scale community health worker deployment in underserved districts with digital tools"
    },
    {
      title: "Free Primary Care Access",
      timeline: "120 days", 
      description: "Telemedicine + essential medicines in pilot provinces with mobile health units"
    },
    {
      title: "Immunization Catch-up",
      timeline: "180 days",
      description: "Childhood immunization weeks + nutrition hotspot mapping with community mobilization"
    }
  ];

  const governance = [
    {
      title: "Health Guarantee Law",
      description: "Constitutional right to healthcare with minimum publicly funded package for all citizens"
    },
    {
      title: "Blended Finance Mechanisms",
      description: "Progressive taxation + concessional finance + impact bonds for health infrastructure"
    },
    {
      title: "Public-Private Partnerships",
      description: "Strategic partnerships with strict equity covenants and quality standards"
    }
  ];

  const risks = [
    {
      title: "Weak Primary Healthcare Governance",
      description: "Limited institutional capacity at district and community levels",
      mitigation: "Ring-fenced budgets, citizen scorecards, performance-based financing with transparency measures"
    },
    {
      title: "Human Resource Shortage",
      description: "Insufficient healthcare workers, especially in rural and remote areas",
      mitigation: "Accelerated mid-level provider training, tele-supervision, incentive packages for rural service"
    },
    {
      title: "Health System Fragmentation",
      description: "Lack of coordination between different health programs and levels of care",
      mitigation: "Integrated service delivery models, unified health information systems, single governance structure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(220, 38, 127, 0.8), rgba(190, 24, 93, 0.8)), url(${healthHero})` 
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
              <SDGIcon number="3" size="md" />
              <SDGIcon number="1" size="md" />
              <SDGIcon number="5" size="md" />
              <SDGIcon number="10" size="md" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Healthy Human Capital
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Universal Prevent, Care & Thrive"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Ensure every person reaches a minimum baseline of physical and mental health 
              required for flourishing, raising AarogyaShree toward 0.90 through comprehensive, 
              accessible, and equitable healthcare systems.
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
            <p className="text-xl text-gray-600">Building resilient health systems for universal coverage</p>
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
                        <div className="p-3 bg-red-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-red-600" />
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

      {/* Community Health Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Community-Centered Healthcare Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transforming healthcare from hospital-centric to community-based models that reach 
                every person where they live, work, and learn. Our approach prioritizes prevention, 
                early intervention, and culturally appropriate care.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-red-600" />
                  <span>Door-to-door health screenings and preventive care</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>Community health workers as first point of contact</span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-red-600" />
                  <span>Digital health records linking all levels of care</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-red-600" />
                  <span>Integrated mental health and social support services</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={communityHealth} 
                alt="Community Health Programs"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs and Early Wins */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Key Performance Indicators</h3>
              </div>
              <div className="space-y-3">
                {kpis.map((kpi, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <TrendingUp className="w-5 h-5 text-red-600 mt-0.5" />
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
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Three High-Leverage Early Wins</h3>
              </div>
              <div className="space-y-4">
                {earlyWins.map((win, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-red-900">{win.timeline}</span>
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
            <p className="text-xl text-gray-600">Sustainable financing mechanisms for universal health coverage</p>
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
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Shield className="w-6 h-6 text-red-600" />
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

      {/* SHUNSY-A-PATCH Healing Modalities for Movement Builders */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SHUNSY-A-PATCH</h2>
            <p className="text-xl text-gray-600 mb-2">Holistic Disease Cure Through Lifestyle Coaching</p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              We coach and guide individuals to cure diseases through 
              comprehensive lifestyle changes integrating ancient wisdom with modern science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Satvic Plant Based Diet",
                subtitle: "TLT Subah Saraf Method",
                description: "Pure plant-based nutrition from satvicmovement.org for cellular healing and vitality",
                icon: Leaf,
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "German Homeopathy",
                subtitle: "Deutschland Protocols",
                description: "Precise micro-dose healing based on German homeopathic principles and research",
                icon: FlowerIcon,
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                title: "Unani Medicine",
                subtitle: "Islamic & Sufi Traditions",
                description: "Arabic and Indian Sufi master formulations for constitutional healing",
                icon: Star,
                gradient: "from-purple-500 to-violet-600"
              },
              {
                title: "Naturopathy & Fasting",
                subtitle: "Natural Healing Force",
                description: "Therapeutic fasting protocols and natural healing methodologies",
                icon: Sun,
                gradient: "from-orange-500 to-amber-600"
              },
              {
                title: "Siddha Medicine",
                subtitle: "Tamil & Tribal Wisdom",
                description: "Ancient Indian tribal medicine from Tamil Nadu, Andaman & Andhra Pradesh traditions",
                icon: Sparkles,
                gradient: "from-red-500 to-pink-600"
              },
              {
                title: "Yoga & Divine Unity",
                subtitle: "Tao Life Force Connection",
                description: "Becoming one with the Tao/Life force/Divine within through yogic practices",
                icon: Heart,
                gradient: "from-rose-500 to-pink-600"
              },
              {
                title: "Holistic Allopathy",
                subtitle: "Mayo Clinic Protocols",
                description: "Best of western holistic medicine with Mayo Clinic USA treatment protocols",
                icon: Stethoscope,
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                title: "Physiotherapy & Chiropractic",
                subtitle: "Lymph System Mobilization",
                description: "Lymphatic activation and post-surgical rehabilitation through bodywork",
                icon: Activity,
                gradient: "from-teal-500 to-green-600"
              },
              {
                title: "Ayurveda Panchakarma",
                subtitle: "Kottakal + Mayo Clinic R&D",
                description: "Joint venture protocols between Arya Vaidya Shala and Mayo Clinic",
                icon: Leaf,
                gradient: "from-yellow-500 to-orange-600"
              },
              {
                title: "Tai Chi Mastery",
                subtitle: "Chi Healing & Nature",
                description: "Engage the Chi for self-healing and positive influence on natural forces",
                icon: Zap,
                gradient: "from-indigo-500 to-purple-600"
              },
              {
                title: "Chinese Meridian Science",
                subtitle: "Energy Channel Therapy",
                description: "Traditional Chinese meridian system for energy flow and healing",
                icon: Target,
                gradient: "from-emerald-500 to-teal-600"
              },
              {
                title: "Healing Music Therapy",
                subtitle: "Ragas & Baroque Harmonics",
                description: "Indian Ragas and European Baroque music for therapeutic sound healing",
                icon: Music,
                gradient: "from-violet-500 to-purple-600"
              }
            ].map((modality, index) => {
              const IconComponent = modality.icon;
              return (
                <motion.div
                  key={modality.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${modality.gradient}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${modality.gradient} rounded-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{modality.title}</h3>
                          <p className="text-sm font-medium text-purple-600 mb-2">{modality.subtitle}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{modality.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Integrated Healing Journey</h3>
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We provide personalized coaching that combines these ancient and modern healing modalities 
                into a comprehensive lifestyle transformation program. Each approach is carefully integrated to address the root 
                causes of disease while supporting the body's natural healing intelligence.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg"
              >
                Start Your Healing Journey
              </Button>
            </div>
          </motion.div>
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
            <p className="text-xl text-gray-600">Proactive strategies for sustainable health system transformation</p>
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Health is a Human Right</h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in building healthcare systems that leave no one behind. 
              Every person deserves access to quality, affordable, and dignified healthcare.
            </p>
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Support Universal Health Coverage
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}