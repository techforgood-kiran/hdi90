import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Users, BarChart3, Brain, DollarSign, Leaf, Network, Shield } from 'lucide-react';

const Principles = () => {
  const principles = [
    {
      id: 1,
      title: "Antyodaya First — Design for the Last Person",
      icon: <Users className="w-8 h-8" />,
      rationale: "Real development is measured by the poorest and least-served. Lifting the last person drives systemic gains across all HDI2.0 dimensions (Health, Education, Happiness, Environment).",
      nationalLeaders: [
        "Guarantee a minimum floor of universal basic services (primary healthcare, nutritious food, basic education, safe water, electricity, sanitation)",
        "Target budgets and pilots to the lowest-quartile communities until parity narrows"
      ],
      ceos: [
        "Design products/services for affordability and accessibility (frugal innovation, micro-payment models)",
        "Adopt supplier and workforce inclusion targets focused on under-served regions"
      ],
      kpis: [
        "% population below minimum service floor (target → 0%)",
        "Gap between national average and bottom 20% on each HDI2.0 sub-score"
      ],
      quickWin: "Mobile outreach clinics + tele-education pilot in two high-need districts",
      longTerm: "National policy linking public procurement to suppliers meeting inclusion scores"
    },
    {
      id: 2,
      title: "Balance by Geometry — Use Geometric Mean & Reject Trade-offs",
      icon: <BarChart3 className="w-8 h-8" />,
      rationale: "HDI2.0 is a geometric mean — progress must be balanced. Big gains in one domain cannot mask collapse in another.",
      nationalLeaders: [
        "Set balanced targets: raise the lowest of the four dimension scores first",
        "Require ministries to report paired-tradeoff impact statements for any major policy"
      ],
      ceos: [
        "Ensure corporate KPIs don't over-index financial growth at the cost of employee wellbeing or environmental net-impact",
        "Tie executive pay to a balanced HDI2.0-aligned scorecard"
      ],
      kpis: [
        "Ratio of highest to lowest dimension score nationally and company-level (aim → 1:1 narrowing)",
        "Number of policies/products requiring cross-domain impact assessment"
      ],
      quickWin: "Mandate cross-ministry impact statements for any major infrastructure or fiscal policy",
      longTerm: "Law requiring corporate non-financial reporting aligned to HDI2.0 dimensions"
    },
    {
      id: 3,
      title: "Outcomes, Not Inputs — Measure What Matters in Real Time",
      icon: <Target className="w-8 h-8" />,
      rationale: "Inputs (spending) are necessary but not sufficient. Outcomes and lived experience must drive decisions.",
      nationalLeaders: [
        "Build real-time dashboards for HDI2.0 indicators disaggregated by region/ethnicity/gender/age",
        "Use randomized pilots and rapid iteration for scaled policy"
      ],
      ceos: [
        "Track worker health, capability growth, and community impact as business metrics",
        "Embed impact dashboards into ERP/BI systems"
      ],
      kpis: [
        "% of HDI2.0 indicators published in real-time and disaggregated",
        "Time from policy pilot to scale decision"
      ],
      quickWin: "Publish a monthly HDI2.0 dashboard for a pilot state/district",
      longTerm: "National impact data lake with privacy-preserving citizen access"
    },
    {
      id: 4,
      title: "Guarantee Capability & Agency — Invest in People's Power",
      icon: <Brain className="w-8 h-8" />,
      rationale: "Lasting HDI gains require agency: skills, civic voice, and mental/psychological health (Happiness score).",
      nationalLeaders: [
        "Universal early childhood development + targeted adult reskilling (digital, health literacy, climate resilience)",
        "Legal and institutional reforms that strengthen community voice (local budgeting, participatory planning)"
      ],
      ceos: [
        "Invest in workforce upskilling, mental health programs, and employee decision-making autonomy",
        "Sponsor community capability hubs that align local learning to market opportunities"
      ],
      kpis: [
        "Literacy/functional skills rates among 15–35 age cohort",
        "Measures of civic participation and self-reported agency in household surveys"
      ],
      quickWin: "Launch 12-week community micro-skills bootcamps in partnership with local NGOs",
      longTerm: "National lifelong learning entitlement + portable skill credits"
    },
    {
      id: 5,
      title: "Economic Inclusion + Ethical Growth — Rewire Incentives",
      icon: <DollarSign className="w-8 h-8" />,
      rationale: "Growth must be inclusive and regenerative; market incentives must reward HDI2.0 outcomes.",
      nationalLeaders: [
        "Tax and subsidy reforms that favor job-rich, inclusive, and green sectors",
        "Public procurement favouring enterprises with verified HDI2.0 impact"
      ],
      ceos: [
        "Redesign business models to create shared-value (community ROI as part of product P&L)",
        "Launch affordability tiers and revenue-share with local micro-entrepreneurs"
      ],
      kpis: [
        "Share of GDP from inclusive/green sectors",
        "% of procurement directed to HDI2.0-verified suppliers"
      ],
      quickWin: "Pilot a social-procurement clause for one major ministry",
      longTerm: "National incentive architecture (tax breaks, concessional finance) tied to HDI2.0 performance"
    },
    {
      id: 6,
      title: "Regenerate, Don't Deplete — Net Positive Environment",
      icon: <Leaf className="w-8 h-8" />,
      rationale: "Environmental net-impact is a pillar of HDI2.0. Climate and ecology underwrite health, livelihoods, and happiness.",
      nationalLeaders: [
        "Aggressive nature-positive targets: restore degraded land, prioritize clean air/water",
        "Embed natural capital accounting into national accounts"
      ],
      ceos: [
        "Commit to Net Positive operations and supply chains (beyond net-zero): circular design, waste-to-resource",
        "Product take-back and local resource-cycling partnerships"
      ],
      kpis: [
        "Net ecosystem services change (hectares restored; carbon sequestered; water quality index)",
        "% of materials circularly reused in supply chain"
      ],
      quickWin: "Corporate + municipality partnership for city composting/urban greening",
      longTerm: "National circular-economy regulation + financing facility for restoration projects"
    },
    {
      id: 7,
      title: "Systems Partnerships — Align State, Market & Civil Society",
      icon: <Network className="w-8 h-8" />,
      rationale: "HDI change is systemic; no single actor can deliver it alone. Formalize partnership systems with clear roles and shared metrics.",
      nationalLeaders: [
        "Create cross-sector HDI90 Councils with binding public-private partnership charters",
        "Use outcome-based financing (social impact bonds, blended finance) for scalable interventions"
      ],
      ceos: [
        "Enter outcome-based procurement / blended finance deals",
        "Share anonymized data to improve public service delivery while protecting privacy"
      ],
      kpis: [
        "Number and scale of outcome-based contracts in place",
        "Volume of blended finance mobilized for HDI2.0 projects"
      ],
      quickWin: "One outcome-based pilot (e.g., maternal health outcomes paid per verified improvement)",
      longTerm: "Fully institutionalized national outcome finance platform"
    },
    {
      id: 8,
      title: "Transparent Accountability & Adaptive Governance",
      icon: <Shield className="w-8 h-8" />,
      rationale: "Citizens must see progress and hold systems accountable. Governance should be adaptive — learn, iterate, scale.",
      nationalLeaders: [
        "Citizen-accessible scorecards, independent audits, and citizen juries for major program reviews",
        "Legal frameworks enabling adaptive procurement and fast reallocation of funds to what works"
      ],
      ceos: [
        "Transparent public reporting on HDI2.0 metrics, third-party verification, and whistleblower protections",
        "Regular independent impact evaluations and public responses to findings"
      ],
      kpis: [
        "Frequency of independent audits; public responsiveness index (time to action after audit)",
        "Citizen trust and satisfaction metrics"
      ],
      quickWin: "Publish an independent mid-term evaluation of a major HDI program and commit to a public action plan",
      longTerm: "Legal requirement for third-party verification of national HDI2.0 reporting and corporate HDI-aligned disclosures"
    }
  ];

  const practicalChecklist = [
    "Adopt the Antyodaya lens: any policy/project must pass the \"last person benefit\" test",
    "Scorecard rule: require a 4-dimension HDI2.0 impact statement for any large policy or corporate strategy",
    "Pilot → iterate → scale: favor small, measurable pilots with pre-agreed scale thresholds",
    "Align incentives: shift procurement, tax, and finance to reward HDI2.0 performance",
    "Mandate data transparency: public dashboards, disaggregation, third-party verification",
    "Embed agency building: every program should include capability & voice components",
    "Require environmental net-impact: no HDI program that worsens the environment",
    "Create adaptive law: legal tools for outcome purchasing, blended finance, and adaptive budgeting"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hdi-navy to-hdi-navy/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              8 Principles of All
              <span className="block text-hdi-gold">HDI90 Action</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Fundamental guidelines for achieving Holistic Development Index of 0.90 by 2030
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {principles.map((principle, index) => (
              <Card key={principle.id} className="overflow-hidden border-l-4 border-l-hdi-gold">
                <CardHeader className="bg-gradient-to-r from-hdi-gold/10 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="bg-hdi-gold text-hdi-navy p-3 rounded-lg flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-hdi-navy border-hdi-navy">
                          Principle {principle.id}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-hdi-navy mb-3">
                        {principle.title}
                      </CardTitle>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Rationale:</strong> {principle.rationale}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-hdi-navy mb-3 flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">National Leaders</Badge>
                      </h4>
                      <ul className="space-y-2">
                        {principle.nationalLeaders.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-hdi-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-hdi-navy mb-3 flex items-center">
                        <Badge className="bg-green-100 text-green-800 mr-2">CEOs / Private Sector</Badge>
                      </h4>
                      <ul className="space-y-2">
                        {principle.ceos.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-hdi-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">KPIs</h4>
                      <ul className="space-y-1">
                        {principle.kpis.map((kpi, idx) => (
                          <li key={idx} className="text-sm text-purple-700">• {kpi}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Quick Win</h4>
                      <p className="text-sm text-orange-700">{principle.quickWin}</p>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-emerald-800 mb-2">10-Year Leverage</h4>
                      <p className="text-sm text-emerald-700">{principle.longTerm}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Checklist */}
      <section className="py-16 bg-gradient-to-br from-hdi-navy/5 to-hdi-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-hdi-navy mb-12">
              How to Use These Principles
              <span className="block text-lg font-normal text-gray-600 mt-2">Practical Checklist</span>
            </h2>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {practicalChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-hdi-gold/10 to-transparent">
                      <div className="bg-hdi-gold text-hdi-navy w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hdi-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply These Principles?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your journey towards HDI 2.0 by calculating your current index and exploring actionable pathways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-hdi-gold hover:bg-hdi-gold/90 text-hdi-navy font-semibold">
              <Link to="/hdi-calculator">Calculate Your HDI 2.0</Link>
            </Button>
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold border-2 border-yellow-500 shadow-lg">
              <Link to="/methodology">Learn About HDI 2.0</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principles;