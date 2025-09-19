import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  BarChart3, 
  Smartphone, 
  DollarSign, 
  Users, 
  Globe,
  Target,
  Database,
  Building,
  Handshake
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function CrossMissionEnablers() {
  const enablers = [
    {
      title: "National HDI 2.0 Council",
      description: "Cabinet-level body with multi-stakeholder seats, daily dashboard & quarterly public scorecards",
      icon: Settings,
      details: "Cross-sector coordination mechanism ensuring all missions work in harmony"
    },
    {
      title: "Data & Measurement",
      description: "Harmonized HDI2.0 metrics, regular household surveys + satellite and administrative data",
      icon: BarChart3,
      details: "Open dashboards per district for transparency and accountability"
    },
    {
      title: "Digital Public Infrastructure (DPI)",
      description: "Identity, payments, health & education records, learning platforms to scale services",
      icon: Smartphone,
      details: "Foundational digital systems enabling efficient service delivery"
    },
    {
      title: "Finance Architecture",
      description: "Blended finance model: domestic progressive revenue + international concessional loans",
      icon: DollarSign,
      details: "Private impact capital + outcome bonds for sustainable funding"
    },
    {
      title: "Capacity & Localisation",
      description: "Invest in public sector capability and devolve decision-making to districts",
      icon: Building,
      details: "Operational units, delivery units, data teams at scale"
    },
    {
      title: "Global HDI90 Alliance",
      description: "Knowledge transfer, pooled procurement (vaccines, ed tech), and matched funding",
      icon: Globe,
      details: "International collaboration for shared learning and resources"
    }
  ];

  const keyFeatures = [
    {
      title: "Cross-Mission Coordination",
      description: "Ensuring all four missions work synergistically rather than in silos",
      icon: Target
    },
    {
      title: "Evidence-Based Decision Making",
      description: "Real-time data collection and analysis to guide policy adjustments",
      icon: Database
    },
    {
      title: "Multi-Stakeholder Partnerships",
      description: "Bringing together government, private sector, civil society, and communities",
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Settings className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cross-Mission Enablers
            </h1>
            <p className="text-xl text-white/90 mb-4">
              "Foundational Systems for All Countries"
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Universal enablers that apply to all 195 countries, providing the institutional, 
              technological, and financial infrastructure needed for all four missions to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Why Cross-Mission Enablers Matter
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Enablers */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Six Universal Enablers
          </motion.h2>
          
          <div className="grid gap-8">
            {enablers.map((enabler, index) => {
              const IconComponent = enabler.icon;
              return (
                <motion.div
                  key={enabler.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-purple-100 rounded-xl flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-purple-600" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold mb-3">{enabler.title}</h3>
                          <p className="text-muted-foreground mb-4 text-base">{enabler.description}</p>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-sm font-medium text-purple-900">{enabler.details}</p>
                          </div>
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

      {/* Implementation Framework */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Implementation Framework
          </motion.h2>
          
          <div className="space-y-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Phase 1: Foundation Setting (0-6 months)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Establish National HDI 2.0 Council with multi-stakeholder representation</li>
                  <li>• Launch basic data collection systems and baseline measurements</li>
                  <li>• Begin DPI infrastructure development (identity, payments)</li>
                  <li>• Secure initial funding commitments and governance frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-900">Phase 2: System Scaling (6-18 months)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full deployment of measurement dashboards across all districts</li>
                  <li>• Complete DPI rollout with health and education record integration</li>
                  <li>• Operationalize blended finance mechanisms</li>
                  <li>• Build local capacity through training and knowledge transfer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Phase 3: Full Integration (18+ months)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• All four missions operating with full enabler support</li>
                  <li>• Real-time adaptive management based on data insights</li>
                  <li>• Active participation in Global HDI90 Alliance</li>
                  <li>• Continuous improvement and innovation cycles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Success Metrics for Enablers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Quality & Coverage</h3>
                <p className="text-sm text-muted-foreground">95% data completeness across all HDI 2.0 indicators by district</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Digital Infrastructure Adoption</h3>
                <p className="text-sm text-muted-foreground">80% population with digital identity and service access</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Financial Sustainability</h3>
                <p className="text-sm text-muted-foreground">Stable funding mix with 60% domestic, 40% international sources</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Institutional Capacity</h3>
                <p className="text-sm text-muted-foreground">Fully operational delivery units in all priority districts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}