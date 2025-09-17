import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    </div>
  );
}