import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HDIWizardWithSaveAndPDF from "@/components/HDIWizard";

/**
 * HDI2Landing — React + Tailwind component
 * - Default export a single component
 * - Interactive domain sliders, live HDI calculation (geometric mean)
 *
 * Usage:
 * 1. Save as `HDI2Landing.jsx` inside your React app.
 * 2. Ensure TailwindCSS is configured in the project.
 * 3. Install framer-motion: `npm install framer-motion`.
 * 4. Import and use: `import HDI2Landing from './HDI2Landing'`
 */

const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);
const geometricMean = (arr) => {
  const eps = 1e-4;
  const prods = arr.map((x) => Math.max(x, eps)).reduce((s, v) => s * v, 1);
  return Math.pow(prods, 1 / arr.length);
};

const HDI2Landing = ({ initial = { health: 0.76, education: 0.7, happiness: 0.68, environment: 0.78 } }) => {
  const [scores, setScores] = useState(() => ({ ...initial }));
  const [showModal, setShowModal] = useState(false);

  const domainArray = useMemo(() => [scores.health, scores.education, scores.happiness, scores.environment], [scores]);
  const hdi = useMemo(() => geometricMean(domainArray), [domainArray]);

  function updateScore(key, val) {
    setScores((s) => ({ ...s, [key]: clamp(Number(val)) }));
  }

  function formatPct(n) {
    return `${(n * 100).toFixed(0)}%`;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
      
      {/* HDI Wizard Component */}
      <HDIWizardWithSaveAndPDF onScores={(wizardScores) => {
        // Update simple calculator with wizard results
        setScores({
          health: wizardScores.AarogyaShree,
          education: wizardScores.EducationScore,
          happiness: wizardScores.HappinessScore,
          environment: wizardScores.NetImpact
        });
      }} />
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
          <button onClick={() => window.location.href = '/methodology'} className="border px-4 py-2 rounded-lg">Methodology</button>
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
              { key: "health", label: "AarogyaShree (Health)" },
              { key: "education", label: "Education" },
              { key: "happiness", label: "Happiness" },
              { key: "environment", label: "Environment" },
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

        </aside>
      </div>

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
    </div>
  );
};

export default HDI2Landing;