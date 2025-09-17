import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);
const geometricMean = (arr: number[]) => {
  const eps = 1e-4;
  const prods = arr.map((x) => Math.max(x, eps)).reduce((s, v) => s * v, 1);
  return Math.pow(prods, 1 / arr.length);
};

interface HDICalculatorProps {
  initial?: { health: number; education: number; happiness: number; environment: number };
}

export default function HDICalculator({ 
  initial = { health: 0.76, education: 0.7, happiness: 0.68, environment: 0.78 } 
}: HDICalculatorProps) {
  const [scores, setScores] = useState(() => ({ ...initial }));
  const [showMethod, setShowMethod] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const domainArray = useMemo(() => [scores.health, scores.education, scores.happiness, scores.environment], [scores]);
  const hdi = useMemo(() => geometricMean(domainArray), [domainArray]);

  function updateScore(key: keyof typeof scores, val: string) {
    setScores((s) => ({ ...s, [key]: clamp(Number(val)) }));
  }

  function formatPct(n: number) {
    return `${(n * 100).toFixed(0)}%`;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-sky-400 to-cyan-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2" />
              <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-extrabold">Holistic Development Index — HDI 2.0</h1>
            <p className="text-sm text-slate-500">Interactive research-ready calculator • health · education · happiness · environment</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setShowModal(true)} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg shadow">Get my HDI</button>
          <button onClick={() => setShowMethod((v) => !v)} className="border px-4 py-2 rounded-lg">Methodology</button>
        </div>
      </header>

      {/* Main grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Sliders */}
        <section className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">Adjust domain scores (0–1)</h2>
          <p className="text-sm text-slate-500 mt-1">Use these sliders to simulate interventions and see live impact on HDI 2.0. Values are normalized domain scores.</p>

          <div className="mt-6 space-y-4">
            {[
              { key: "health" as keyof typeof scores, label: "AarogyaShree (Health)" },
              { key: "education" as keyof typeof scores, label: "Education" },
              { key: "happiness" as keyof typeof scores, label: "Happiness" },
              { key: "environment" as keyof typeof scores, label: "Environment" },
            ].map((d) => (
              <div key={d.key} className="flex items-center gap-4">
                <div className="w-44">
                  <div className="text-sm font-medium">{d.label}</div>
                  <div className="text-xs text-slate-400">{formatPct(scores[d.key])}</div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={scores[d.key]}
                  onChange={(e) => updateScore(d.key, e.target.value)}
                  className="w-full"
                />
                <div className="w-12 text-right font-medium">{scores[d.key].toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="p-4 rounded-lg bg-slate-50">
              <div className="text-xs text-slate-500">HDI 2.0 (geometric mean)</div>
              <motion.div
                key={hdi}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-3xl font-bold"
              >
                {hdi.toFixed(3)}
              </motion.div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <div className="text-sm text-slate-500">What-if simulations</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setScores({ health: 0.85, education: 0.75, happiness: 0.72, environment: 0.8 })}
                  className="px-3 py-2 bg-white border rounded shadow-sm text-sm"
                >
                  Ambitious policy
                </button>
                <button
                  onClick={() => setScores({ health: 0.65, education: 0.6, happiness: 0.55, environment: 0.6 })}
                  className="px-3 py-2 bg-white border rounded shadow-sm text-sm"
                >
                  Baseline
                </button>
                <button
                  onClick={() => setScores({ health: 0.9, education: 0.9, happiness: 0.9, environment: 0.9 })}
                  className="px-3 py-2 bg-sky-600 text-white rounded shadow-sm text-sm"
                >
                  Ideal
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500">Tip: HDI 2.0 uses geometric mean. Raising the lowest domain yields the largest relative gains.</div>
        </section>

        {/* Right: Domain Summary */}
        <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-slate-500">Live sample</div>
              <div className="text-xl font-bold">HDI 2.0 — {hdi.toFixed(3)}</div>
            </div>
            <div className="text-right text-xs text-slate-400">Updated just now</div>
          </div>

          <div className="grid gap-3">
            {[
              { label: "Health", value: scores.health },
              { label: "Education", value: scores.education },
              { label: "Happiness", value: scores.happiness },
              { label: "Environment", value: scores.environment },
            ].map((x) => (
              <div key={x.label} className="p-3 rounded-lg bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{x.label}</div>
                  <div className="text-sm font-semibold">{x.value.toFixed(2)}</div>
                </div>
                <div className="mt-2 w-full bg-white h-2 rounded overflow-hidden">
                  <div className="h-2 rounded" style={{ width: `${x.value * 100}%`, background: "linear-gradient(90deg,#06b6d4,#3b82f6)" }} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <button onClick={() => alert('Exported: PDF / CSV (demo)')} className="w-full bg-sky-600 text-white py-2 rounded">Export report</button>
          </div>
        </aside>
      </div>

      {/* Methodology panel (animated) */}
      <AnimatePresence>
        {showMethod && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="text-lg font-semibold">Methodology (research-grade)</h3>
            <p className="text-sm text-slate-600 mt-2">This panel describes the equations and practical steps used to compute each domain. It's designed for data teams and researchers.</p>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Final aggregation</h4>
                <pre className="bg-slate-900 text-white p-3 rounded mt-2 text-sm">HDI₂.₀ = (S_H × S_E × S_Hp × S_Env)^(1/4)</pre>

                <h4 className="font-medium mt-4">Health (example)</h4>
                <pre className="bg-slate-800 text-white p-3 rounded text-sm">S_H = 0.2I_bio + 0.2I_psy + 0.2I_eol + 0.2I_gen + 0.2I_life</pre>

                <p className="text-xs text-slate-400 mt-2">Each I_* is a normalized composite (0–1). Use min–max or logistic transforms, winsorize outliers and bootstrap for CI.</p>
              </div>

              <div>
                <h4 className="font-medium">Environment (example)</h4>
                <pre className="bg-slate-800 text-white p-3 rounded text-sm">S_Env = 0.3 PBA + 0.2 E_personal + 0.2 E_group + 0.3 I_positive</pre>

                <p className="text-xs text-slate-400 mt-2">Convert actions and emissions to CO₂e equivalents where possible. Require verification for positive claims to avoid double counting.</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500">
              <ul className="list-disc pl-5">
                <li>Normalization: min–max with clinically-informed bounds or logistic mapping for skewed metrics.</li>
                <li>Missingness: multiple imputation (MICE) or hierarchical Bayesian imputation for fairness-preserving estimates.</li>
                <li>Validation: correlate domain scores with hard outcomes (mortality, employment) and perform psychometric tests for survey domains.</li>
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={() => { navigator.clipboard.writeText(JSON.stringify(scores)); alert('Copied sample scores to clipboard'); }} className="px-4 py-2 bg-white border rounded">Copy sample scores</button>
              <a className="px-4 py-2 bg-sky-600 text-white rounded" href="#contact">Request research demo</a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Modal for Get my HDI (simple) */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowModal(false)} />
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative z-10 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold">Start your confidential HDI 2.0 assessment</h3>
              <p className="text-sm text-slate-500 mt-2">We will create a private, evidence-based report and a prioritized action plan. This demo modal is a placeholder — connect your data sources for a full assessment.</p>

              <div className="mt-4 grid md:grid-cols-2 gap-3">
                <input placeholder="Full name" className="border p-2 rounded" />
                <input placeholder="Email" className="border p-2 rounded" />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={() => { setShowModal(false); alert('Thanks — we will contact you about the pilot.'); }} className="px-4 py-2 bg-sky-600 text-white rounded">Request assessment</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} HDI 2.0 — Built for research and policy teams</footer>
    </div>
  );
}