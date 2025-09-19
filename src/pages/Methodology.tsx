import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Type declaration for MathJax
declare global {
  interface Window {
    MathJax: any;
  }
}

export default function Methodology() {
  const navigate = useNavigate();

  useEffect(() => {
    // Load MathJax
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);

    // Configure MathJax
    window.MathJax = {
      tex: { inlineMath: [['$','$'], ['\\(','\\)']] },
      svg: { fontCache: 'global' }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="mr-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="hsl(var(--primary))" strokeWidth="1.2"/>
            <path d="M7 12h10M12 7v10" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div>
            <div className="text-lg font-semibold">Holistic Development Index</div>
            <div className="text-sm text-muted-foreground">HDI 2.0 — measuring human flourishing for the 21st century</div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary/10 to-hdi-blue/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The Science Behind <span className="text-hdi-blue">Human Flourishing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                HDI 2.0 represents a paradigm shift from economic-centric development metrics to a comprehensive, 
                evidence-based framework that captures the full spectrum of human well-being and planetary health.
              </p>
              <p className="text-muted-foreground mb-8">
                Built on decades of research in development economics, public health, positive psychology, 
                and environmental science, our methodology provides actionable insights for individuals, 
                communities, and policymakers committed to measurable progress.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/hdi-calculator')}
                  className="bg-hdi-blue hover:bg-hdi-blue/90"
                >
                  Try HDI 2.0 Assessment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('/hdi-methodology.pdf', '_blank')}
                >
                  Download Technical Paper
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-hdi-green rounded-full" />
                  <span>Peer-reviewed methodology</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-hdi-gold rounded-full" />
                  <span>Open-source calculations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-hdi-blue rounded-full" />
                  <span>Privacy-first design</span>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-elegant">
              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground mb-2">Sample HDI 2.0 Assessment</div>
                <div className="text-4xl font-bold text-hdi-blue mb-2">0.742</div>
                <div className="text-sm text-muted-foreground">
                  Above global median • Updated {new Date().toLocaleDateString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                  <div className="text-xs text-red-600 font-medium mb-1">Health (AarogyaShree)</div>
                  <div className="text-2xl font-bold text-red-700">0.76</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="text-xs text-blue-600 font-medium mb-1">Education</div>
                  <div className="text-2xl font-bold text-blue-700">0.71</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="text-xs text-purple-600 font-medium mb-1">Happiness</div>
                  <div className="text-2xl font-bold text-purple-700">0.68</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="text-xs text-green-600 font-medium mb-1">Environment</div>
                  <div className="text-2xl font-bold text-green-700">0.82</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong>Geometric Mean:</strong> HDI 2.0 uses multiplicative aggregation to ensure 
                balanced progress across all dimensions. Low performance in any area significantly 
                impacts the overall score, encouraging holistic development.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why HDI 2.0 */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Holistic measurement</h3>
            <p className="mt-2 text-muted-foreground text-sm">HDI 2.0 captures health, education, happiness and environmental impact in one transparent index — designed to guide better decisions for people and policy.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Research-grade calculations</h3>
            <p className="mt-2 text-muted-foreground text-sm">Every domain uses validated instruments, robust normalizations, and uncertainty estimates. Suitable for deployment at individual, community or national scale.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Actionable insights</h3>
            <p className="mt-2 text-muted-foreground text-sm">Domain cards show strengths, weaknesses and smart levers — e.g., how much preventive screening or renewable energy adoption moves the needle.</p>
          </Card>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold">Four domains — short microcopy</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold">AarogyaShree Score (Health)</h4>
            <p className="mt-2 text-muted-foreground text-sm">Combines biomarkers, mental health, projected quality of life, genetic risk and lifestyle adherence. Designed to be predictive of morbidity and well-being.</p>
            <div className="mt-3 text-xs text-muted-foreground">Practical: lab inputs, validated questionnaires, wearables, EHR-derived survival models.</div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold">Education Score</h4>
            <p className="mt-2 text-muted-foreground text-sm">Measures literacy, cognitive & non-cognitive skills, design thinking, domain mastery (Ikigai) and entrepreneurship readiness.</p>
            <div className="mt-3 text-xs text-muted-foreground">Practical: adaptive tests, project rubrics, verified apprenticeships and wage-prediction models.</div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold">Happiness Score</h4>
            <p className="mt-2 text-muted-foreground text-sm">Inspired by GNH. Subjective well-being across nine domains including psychological health, governance, community vitality and living standards.</p>
            <div className="mt-3 text-xs text-muted-foreground">Practical: stratified surveys, time-use diaries, anchor vignettes to improve cross-cultural comparability.</div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold">Net Impact on Environment</h4>
            <p className="mt-2 text-muted-foreground text-sm">Assesses both environmental footprint (CO₂e, water use) and positive actions (restoration, renewables, circular practices).</p>
            <div className="mt-3 text-xs text-muted-foreground">Practical: emission conversion tables, verified project claims, and planetary boundary alignment.</div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <Card className="p-8 bg-primary/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Have HDI 2.0 for yourself or your community</h3>
              <p className="mt-2 text-muted-foreground text-sm">Run a confidential assessment, receive domain-level diagnostics, and an evidence-based action plan.</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => navigate('/hdi-calculator')}>
                Start Individual Assessment
              </Button>
              <Button variant="outline">
                Enterprise / Community Pilot
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Methodology Collapsible */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold">Methodology — research-grade</h2>
        <div className="mt-4">
          <details className="bg-card rounded-lg p-6 shadow-lg open:shadow-xl">
            <summary className="cursor-pointer font-medium">Open detailed methodology & equations</summary>

            <div className="mt-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HDI 2.0 Methodology Document</h3>
                <p className="text-gray-600 mb-6">Complete technical specification with formulas, data pipelines, and implementation guidelines for research-grade HDI 2.0 calculations.</p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => window.open('/hdi-methodology.pdf', '_blank')}>
                    📄 Open Full PDF Document
                  </Button>
                  <Button variant="outline">
                    Request Research Demo
                  </Button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Research Grade Methods */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold">Research-grade calculation methods — full detail</h2>
        <Card className="mt-4 p-6">
          <h3 className="text-lg font-semibold">1. AarogyaShree Score (Health)</h3>
          <p>This score measures physical, mental, and preventive health based on advanced diagnostics and lifestyle factors.</p>

          <h4 className="mt-4 font-medium">Inputs (examples & data sources)</h4>
          <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
            <li>Biomarkers: HbA1c, fasting glucose, LDL, HDL, blood pressure, BMI, CRP, eGFR.</li>
            <li>Preventive checks: frequency of screenings, vaccination status.</li>
            <li>Psychosomatic: PHQ-9, GAD-7, Perceived Stress Scale.</li>
            <li>End-of-life quality expectancy: predicted QALYs from survival model (EHR + cohort life tables).</li>
            <li>Genetic risk: polygenic risk scores (if available).</li>
            <li>Lifestyle adherence: steps/day, minutes/week activity, diet score, yoga/meditation minutes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">2. Education Score</h3>
          <p>Focus on practical competencies rather than years of schooling.</p>

          <h4 className="mt-4 font-medium">Inputs</h4>
          <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
            <li>Adaptive literacy & numeracy tests</li>
            <li>Cognitive assessments (e.g., Raven's matrices)</li>
            <li>Growth-mindset surveys</li>
            <li>Project rubrics and apprenticeship verification</li>
            <li>Wage-prediction model outputs as earning potential proxy</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">3. Happiness Score</h3>
          <p>Inspired by Bhutan's GNH. Mix of subjective survey items and objective proxies.</p>

          <h4 className="mt-4 font-medium">Domains & weights</h4>
          <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
            <li>Psychological Well-being — 15%</li>
            <li>Health — 10%</li>
            <li>Education — 10%</li>
            <li>Time Use — 10%</li>
            <li>Cultural Diversity & Resilience — 10%</li>
            <li>Good Governance — 10%</li>
            <li>Community Vitality — 10%</li>
            <li>Ecological Diversity & Resilience — 10%</li>
            <li>Living Standards — 15%</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">4. Net Impact on Environment</h3>
          <p>Measures footprint and positive contributions.</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Aggregation & sensitivity</h3>
            <p className="mb-4">Final HDI with floor to avoid zeros:</p>
            
            {/* Main Equation - Prominently Displayed */}
            <div className="bg-gradient-to-br from-hdi-gold/10 to-hdi-navy/10 border-2 border-hdi-gold rounded-lg p-6 mb-4">
              <div className="text-center">
                <h4 className="text-sm font-semibold text-hdi-navy mb-3 uppercase tracking-wide">HDI 2.0 Formula</h4>
                <div className="bg-white border-2 border-hdi-navy rounded-lg p-4 shadow-lg">
                  <code className="text-2xl md:text-3xl font-bold text-hdi-navy font-mono">
                    HDI₂.₀ = (∏<sub className="text-lg">k=1 to 4</sub> max(ε, S<sub className="text-lg">k</sub>))<sup className="text-lg">1/4</sup>
                  </code>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <code className="text-lg text-gray-600 font-mono">
                      where ε = 1×10⁻⁴
                    </code>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">Perform sensitivity analysis (elasticities) and Monte Carlo uncertainty propagation. Report CI and share underlying codebook for transparency.</p>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10 border-t">
        <div className="md:flex md:justify-between">
          <div>
            <div className="font-semibold">Holistic Development Index — HDI 2.0</div>
            <p className="mt-2 text-sm text-muted-foreground">Questions, pilots or enterprise partnerships? <a href="mailto:sai@hdi90.com" className="text-primary">sai@hdi90.com</a></p>
          </div>

          <div className="mt-6 md:mt-0 text-sm text-muted-foreground">
            <div>Privacy: We require informed consent for personal data and offer aggregated public reporting only.</div>
            <div className="mt-2">© {new Date().getFullYear()} HDI 2.0</div>
          </div>
        </div>
      </footer>
    </div>
  );
}