import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">A single, science-backed number that measures real human progress</h1>
              <p className="mt-4 text-lg text-muted-foreground">HDI 2.0 blends health, education, happiness, and environmental impact into a transparent, actionable index. Designed for individuals, communities, and policymakers who want meaningful, measurable improvement.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => navigate('/hdi-calculator')}>
                  Get my HDI 2.0
                </Button>
                <Button variant="outline" size="lg">
                  Request a demo
                </Button>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">Trusted methods • Reproducible pipeline • Privacy-first</div>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Current HDI 2.0 (sample)</div>
                  <div className="text-3xl font-bold mt-1">0.72 <span className="text-sm text-muted-foreground">(±0.03)</span></div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Updated</div>
                  <div className="text-sm">Sep 17, 2025</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Health</div>
                  <div className="text-xl font-semibold">0.76</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Education</div>
                  <div className="text-xl font-semibold">0.70</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Happiness</div>
                  <div className="text-xl font-semibold">0.68</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Environment</div>
                  <div className="text-xl font-semibold">0.78</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-muted-foreground">Tip: HDI 2.0 uses a geometric mean so low scores in any dimension matter more — this encourages balanced progress.</div>
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

            <div className="mt-4 prose max-w-none text-foreground">
              <h3>Overview & final aggregation</h3>
              <p>The HDI 2.0 score combines four domain scores (each in [0,1]) using a geometric mean to ensure balance between domains:</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>HDI_2.0 = (S_H * S_E * S_Hp * S_Env)^(1/4)</code></pre>

              <h3>AarogyaShree (Health) — practical calculation</h3>
              <p>Compute five normalized indicator composites: I_bio, I_psy, I_eol, I_gen, I_life. Then:</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>S_H = 0.2*I_bio + 0.2*I_psy + 0.2*I_eol + 0.2*I_gen + 0.2*I_life</code></pre>

              <p><strong>Normalization options</strong>: Min–max mapping or logistic mapping for skewed measures. Example (min–max):</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>x' = (x - x_min) / (x_max - x_min)</code></pre>

              <h3>Education — practical calculation</h3>
              <p>Five domain composites (literacy, aptitude×attitude, design thinking, ikigai competence, entrepreneurship) normalized and averaged:</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>S_E = ∑(j=1 to 5) 0.2 * J_j</code></pre>

              <h3>Happiness — practical calculation</h3>
              <p>Nine domains with specified weights (psychological 15%, living standards 15%, others 10%). Use psychometric validation (factor analysis / IRT) then:</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>S_Hp = ∑(d=1 to 9) ω_d * D_d</code></pre>

              <h3>Environment — practical calculation</h3>
              <p>Four indicators: planetary boundary adherence (PBA), personal net emissions, group emissions, and positive impact. Example aggregation:</p>
              <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>S_Env = 0.3*PBA + 0.2*E_p + 0.2*E_group + 0.3*I_pos</code></pre>

              <h3>Robustness, uncertainty & validation</h3>
              <ul>
                <li>Bootstrap 95% CI of each domain score and of the composite.</li>
                <li>Use Monte Carlo propagation for measurement error (especially for lab & emissions data).</li>
                <li>Sensitivity analysis: compute elasticities of HDI with respect to each domain.</li>
              </ul>

              <div className="mt-6">
                <Button className="mr-3">
                  Download full methodology (PDF)
                </Button>
                <Button variant="outline">
                  Request a research demo
                </Button>
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
            <p>Final HDI with floor to avoid zeros:</p>
            <pre className="bg-slate-900 text-white p-3 rounded text-sm"><code>HDI_2.0 = (∏(k=1 to 4) max(ε, S_k))^(1/4), ε = 1e-4</code></pre>
            <p className="text-sm text-muted-foreground mt-2">Perform sensitivity analysis (elasticities) and Monte Carlo uncertainty propagation. Report CI and share underlying codebook for transparency.</p>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10 border-t">
        <div className="md:flex md:justify-between">
          <div>
            <div className="font-semibold">Holistic Development Index — HDI 2.0</div>
            <p className="mt-2 text-sm text-muted-foreground">Questions, pilots or enterprise partnerships? <a href="mailto:hello@hdi2.org" className="text-primary">hello@hdi2.org</a></p>
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