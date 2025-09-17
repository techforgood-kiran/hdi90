import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROTOTYPES = [
  {
    id: 'palestine',
    title: 'Palestine',
    tag: 'Solar Telehealth & Community Learning Hubs',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'south-sudan',
    title: 'South Sudan',
    tag: 'Community Midwife Network + Solar Phone Packs',
    img: 'https://images.unsplash.com/photo-1584467735871-2c9f4b3d5f5b?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'syria',
    title: 'Syria',
    tag: 'Trauma Tele-Care + Teachers + Makerspaces',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'supaul',
    title: 'Supaul, India',
    tag: 'Village Learning Labs & Agri Value-chains',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60',
  },
];

const coords = {
  // approximate positions for hotspot circles on the SVG projection used below (viewBox 0 0 1000 500)
  palestine: { x: 585, y: 175 },
  'south-sudan': { x: 560, y: 245 },
  syria: { x: 560, y: 150 },
  supaul: { x: 770, y: 210 },
};

function RegionCard({ p, onSponsor }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex gap-4">
      <img src={p.img} alt={p.title} className="w-28 h-20 rounded-lg object-cover flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold">{p.title}</h4>
            <div className="text-xs text-slate-500">{p.tag}</div>
          </div>
          <div>
            <button onClick={() => onSponsor(p)} className="bg-sky-600 text-white px-3 py-2 rounded">Sponsor</button>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-2">High-leverage prototype to transform health, learning and livelihoods in a focused pilot. Transparent reporting, named sponsorships and local leadership.</p>
      </div>
    </div>
  );
}

function HDI2MapSection() {
  const [active, setActive] = useState(PROTOTYPES[0]);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClickRegion(id) {
    const p = PROTOTYPES.find((x) => x.id === id);
    if (p) setActive(p);
  }

  function openSponsor(p) {
    setActive(p);
    setModalOpen(true);
  }

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">HDI 2.0 — High-Leverage Prototype Sponsorships</h2>
          <p className="text-slate-600">Sponsor a pilot to raise health, education, happiness and environmental impact in fragile and low-HDI regions.</p>
        </header>

        <div className="bg-white rounded-2xl p-6 shadow mb-8">
          <h3 className="text-xl font-semibold">Want to know how your contribution can make a difference?</h3>
          <p className="text-sm text-slate-500 mt-2">Click any region on the map below to explore a prototype, see the impact story, and sponsor a hub, midwife pack, tele-clinic seat or village lab.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <div className="relative bg-slate-100 rounded-lg overflow-hidden" style={{ paddingTop: '40%' }}>
                <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#c7f9f6" />
                      <stop offset="100%" stopColor="#e6f7ff" />
                    </linearGradient>
                  </defs>

                  <g fill="#dbeafe" stroke="#c7def8" strokeWidth="0.5">
                    <path d="M100 150 C160 110, 260 100, 360 140 C420 160, 520 150, 600 120 C680 90, 760 110, 820 160 C880 210, 900 260, 900 300 C880 320, 840 330, 800 320 C760 310, 720 300, 680 310 C640 320, 620 360, 580 380 C540 400, 480 410, 420 400 C360 390, 300 360, 240 350 C200 340, 160 320, 120 300 C90 280, 80 210, 100 150 Z" />
                    <path d="M180 320 C220 300, 260 300, 300 320 C340 340, 380 360, 420 350 C460 340, 500 320, 540 330 C580 340, 620 360, 660 360 C700 360, 740 340, 780 340 C820 340, 860 360, 900 380" />
                  </g>

                  <g stroke="#eef2ff" strokeWidth="0.5">
                    <line x1="0" y1="50" x2="1000" y2="50" />
                    <line x1="0" y1="150" x2="1000" y2="150" />
                    <line x1="0" y1="250" x2="1000" y2="250" />
                    <line x1="0" y1="350" x2="1000" y2="350" />
                    <line x1="0" y1="450" x2="1000" y2="450" />
                  </g>

                  {Object.entries(coords).map(([key, c]) => (
                    <g key={key} transform={`translate(${c.x}, ${c.y})`} style={{ cursor: 'pointer' }} onClick={() => handleClickRegion(key)}>
                      <circle r="16" fill={active && active.id === key ? '#0ea5e9' : '#60a5fa'} stroke="#fff" strokeWidth="3" />
                      <circle r="26" fill="none" stroke="#60a5fa" strokeOpacity="0.08" />
                    </g>
                  ))}

                  <text x="585" y="155" fontSize="12" fill="#0f172a" textAnchor="middle">Palestine</text>
                  <text x="560" y="265" fontSize="12" fill="#0f172a" textAnchor="middle">South Sudan</text>
                  <text x="560" y="135" fontSize="12" fill="#0f172a" textAnchor="middle">Syria</text>
                  <text x="770" y="195" fontSize="12" fill="#0f172a" textAnchor="middle">Supaul</text>
                </svg>
              </div>

              <div className="mt-4 flex gap-3 flex-wrap">
                {PROTOTYPES.map((p) => (
                  <button key={p.id} onClick={() => handleClickRegion(p.id)} className={`px-3 py-2 rounded ${active.id === p.id ? 'bg-sky-600 text-white' : 'bg-white border text-slate-700'}`}>
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            <aside className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold">{active.title}</h4>
              <div className="text-xs text-slate-500">{active.tag}</div>

              <div className="mt-4">
                <img src={active.img} alt={active.title} className="w-full h-36 object-cover rounded" />
              </div>

              <div className="mt-4 text-sm text-slate-600">
                <p><strong>Prototype impact:</strong> Rapid screenings, teleconsults, teacher training, and livelihood pilots depending on the region. Transparent KPI dashboard and monthly reports to donors.</p>
              </div>

              <div className="mt-4 flex gap-3">
                <button onClick={() => openSponsor(active)} className="flex-1 bg-emerald-600 text-white px-3 py-2 rounded">Sponsor this prototype</button>
                <button onClick={() => alert('Share link copied')} className="px-3 py-2 border rounded">Share</button>
              </div>
            </aside>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {PROTOTYPES.map((p) => (
            <RegionCard key={p.id} p={p} onSponsor={openSponsor} />
          ))}
        </div>

        <AnimatePresence>
          {modalOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-black opacity-40" onClick={() => setModalOpen(false)} />
              <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }} className="relative z-10 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Sponsor: {active.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">Choose a named sponsorship and we'll send a detailed monthly ledger, impact videos and stories from the field.</p>
                  </div>
                  <div className="text-sm text-slate-400">Secure • Transparent • Receipts</div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600">Suggested products</label>
                    <div className="mt-2 space-y-2">
                      <button className="w-full text-left px-3 py-2 border rounded">Sponsor one Hub — <span className="font-semibold">$6,000</span></button>
                      <button className="w-full text-left px-3 py-2 border rounded">Sponsor 1 Tele-Clinic Seat — <span className="font-semibold">$2,000</span></button>
                      <button className="w-full text-left px-3 py-2 border rounded">Sponsor 1 CHW Pack — <span className="font-semibold">$1,800</span></button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600">Your details</label>
                    <input placeholder="Full name" className="mt-2 w-full border rounded px-3 py-2" />
                    <input placeholder="Email" className="mt-2 w-full border rounded px-3 py-2" />
                    <textarea placeholder="Message to the field team" className="mt-2 w-full border rounded px-3 py-2 h-24" />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button onClick={() => setModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                  <button onClick={() => { setModalOpen(false); alert('Thank you — sponsor acknowledged (simulated).'); }} className="px-4 py-2 bg-emerald-600 text-white rounded">Confirm Sponsor</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function JoinMovement() {
  const tiers = [
    {
      name: "🌱 Seed Tier",
      price: "$1/month (₹90)",
      perks: [
        "HDI90 Knowledge Hub: short courses, guides & meditation audios",
        "Monthly impact newsletter with global stories of change",
        "HDI90 Badge – show the world you're a Seed Contributor",
        "Access to your HDI90 Well-being Dashboard",
      ],
      impact:
        "Your $1 supports the distribution of education and health resources to underprivileged communities.",
    },
    {
      name: "🌿 Growth Tier",
      price: "$10/month (₹800)",
      perks: [
        "Everything in Seed Tier",
        "Weekly live sessions (health, AI, purpose, sustainability)",
        "Entry into HDI90 peer circles (small accountability groups)",
        "Gamified rewards & Karma Points for learning & volunteering",
        "Eligible for micro-grants, mentorship & projects",
      ],
      impact:
        "Your $10 plants trees, funds student learning kits & supports well-being projects.",
    },
    {
      name: "🔥 Impact Tier",
      price: "$50/month (₹4,000)",
      perks: [
        "Everything in Growth Tier",
        "Monthly masterclass with global experts",
        "Personalized HDI90 dashboard insights",
        "Priority access to internships, volunteering & collabs",
        "Recognition as an official HDI90 Impact Member",
      ],
      impact:
        "Your $50 provides healthcare checkups, digital libraries & livelihood support.",
    },
    {
      name: "🌟 Leader Tier",
      price: "$200/month (₹16,500)",
      perks: [
        "Everything in Impact Tier",
        "Quarterly 1:1 coaching call with HDI90 mentor",
        "Co-create education, healthcare & sustainability pilots",
        "Speaking opportunities at HDI90 events",
        "Your profile featured in the HDI90 Hall of Leaders",
      ],
      impact:
        "Your $200 helps fund a rural library, a village skill-training program, or a community health initiative.",
    },
    {
      name: "🌍 Visionary Tier",
      price: "$500/month (₹41,000)",
      perks: [
        "Everything in Leader Tier",
        "Advisory role in HDI90 DAO – decide where funds go",
        "Dedicated philanthropy alignment team",
        "Legacy recognition: naming rights for projects",
        "Invitation to exclusive Visionary Circle Retreats",
      ],
      impact:
        "Your $500 supports an entire school, a health camp, or a green energy project.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌍 Join the <span className="text-green-600">HDI90 Movement</span>
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Together Towards <strong>0.90 by 2030</strong>  
          <br /> What if just <span className="font-semibold">$1 a month</span> could transform humanity's future?
        </p>
        <p className="text-lg font-medium text-gray-700 max-w-2xl mx-auto mb-10">
          By joining, you don't just donate — you commit to <strong>2 hours a week</strong> of purposeful contribution.  
          Because a movement isn't funded, it's lived. And you are invited to live it.
        </p>
        <Button className="px-6 py-3 text-lg rounded-2xl shadow-lg">
          🚀 Start Your Journey
        </Button>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">🌱 Why HDI90 Exists</h2>
          <p className="text-lg mb-4">
            GDP is not enough. Nations can be rich while people remain unhealthy, uneducated, and unhappy.
          </p>
          <p className="text-lg mb-4">
            HDI90 is a new framework — measuring <strong>Health, Education, Happiness & Environmental Impact</strong>.  
            Progress is real only when it reaches the <em>last person first</em>.
          </p>
          <p className="text-lg font-medium">
            With your subscription and <strong>2 hours a week of volunteering</strong>, we can make it real.
          </p>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          💎 Choose Your Path of Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className="flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="shadow-xl border-2 border-green-200 rounded-2xl overflow-hidden">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-lg font-semibold mb-4">{tier.price}</p>
                  <ul className="text-left mb-6 space-y-2">
                    {tier.perks.map((perk, idx) => (
                      <li key={idx}>✅ {perk}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-green-700 font-medium mb-4">
                    💡 Impact: {tier.impact}
                  </p>
                  <Button className="mt-auto">Join {tier.name}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Call */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">🔑 Why Join Today?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Because every day counts. Every rupee matters. And when you join HDI90, you're not just a donor —  
          you're a <strong>co-creator of humanity's future</strong>.  
        </p>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          👉 For the price of a coffee, you can change a life.  
          👉 For the price of a dinner, you can transform a community.  
          👉 For the price of a holiday, you can build a legacy.  
        </p>
        <Button className="px-8 py-4 text-xl font-semibold bg-white text-green-700 hover:bg-gray-100">
          🌍 Step Into History
        </Button>
      </section>

      {/* HDI Map Section */}
      <HDI2MapSection />
    </div>
  );
}