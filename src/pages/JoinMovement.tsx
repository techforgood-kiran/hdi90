import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Leaf, GraduationCap, Clock, ArrowRight } from "lucide-react";

const impactStories = [
  {
    id: 'health',
    icon: Heart,
    title: 'Health Champions',
    commitment: '30 min/week',
    impact: '2,847 people screened',
    story: 'Remote health monitoring in rural communities',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
    color: 'from-red-500 to-pink-500',
    volunteers: 156
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Learning Facilitators',
    commitment: '45 min/week',
    impact: '1,234 students mentored',
    story: 'Digital literacy programs for underserved youth',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    color: 'from-blue-500 to-cyan-500',
    volunteers: 289
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Eco Warriors',
    commitment: '1 hour/week',
    impact: '15,678 trees planted',
    story: 'Community-led environmental restoration projects',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    color: 'from-green-500 to-emerald-500',
    volunteers: 423
  },
  {
    id: 'happiness',
    icon: Users,
    title: 'Wellbeing Guides',
    commitment: '20 min/week',
    impact: '892 support circles formed',
    story: 'Mental health and community resilience building',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    color: 'from-purple-500 to-indigo-500',
    volunteers: 334
  }
];

function ImpactShowcase() {
  const [activeStory, setActiveStory] = useState(impactStories[0]);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2 Hours a Week</span> Changes Lives
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real volunteers. Real impact. Real transformation happening right now across four pillars of human development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impactStories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{story.title}</h3>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{story.commitment}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-2xl font-bold text-white">{story.impact}</div>
                      <div className="text-right text-sm text-gray-300">
                        <div>{story.volunteers} volunteers</div>
                        <div>active now</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{story.story}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold">
                      Join {story.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-2xl p-8 backdrop-blur-md border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Make Your Impact?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose your path, commit your time, and join thousands of changemakers building a better world together.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 text-lg">
              Start Your Volunteer Journey
            </Button>
          </div>
        </motion.div>
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
        "Free access to premium meditation & wellness apps (worth $120/year)",
        "Personal HDI score tracking with monthly improvement insights",
        "Exclusive discounts on health checkups & eco-friendly products",
        "Digital certificate for volunteer hours (boost your resume)",
        "Access to global networking community of 10,000+ changemakers",
      ],
      impact:
        "Your $1 supports the distribution of education and health resources to underprivileged communities.",
    },
    {
      name: "🌿 Growth Tier",
      price: "$10/month (₹800)",
      perks: [
        "Everything in Seed Tier",
        "Free skill-building courses: AI, sustainability, leadership (worth $500)",
        "Monthly 1:1 career coaching session with industry experts",
        "Priority job referrals & internship opportunities at partner organizations",
        "Micro-grants up to $1,000 for your own social impact projects",
        "Personalized health & wellness plan with quarterly reviews",
      ],
      impact:
        "Your $10 plants trees, funds student learning kits & supports well-being projects.",
    },
    {
      name: "🔥 Impact Tier",
      price: "$50/month (₹4,000)",
      perks: [
        "Everything in Growth Tier",
        "LinkedIn profile optimization & professional headshots (worth $300)",
        "Invitation to exclusive networking events & conferences",
        "Personal brand building support & social media strategy",
        "Access to executive mentors from Fortune 500 companies",
        "Travel stipends for volunteering trips & leadership retreats",
        "Priority healthcare concierge services",
      ],
      impact:
        "Your $50 provides healthcare checkups, digital libraries & livelihood support.",
    },
    {
      name: "🌟 Leader Tier",
      price: "$200/month (₹16,500)",
      perks: [
        "Everything in Impact Tier",
        "Quarterly wealth management & investment consulting sessions",
        "Speaking fee opportunities at global conferences ($5,000+ per event)",
        "Co-author research papers with academic institutions",
        "Board positions on HDI90 advisory committees",
        "Exclusive access to impact investing opportunities",
        "Personal assistant support for volunteering activities",
      ],
      impact:
        "Your $200 helps fund a rural library, a village skill-training program, or a community health initiative.",
    },
    {
      name: "🌍 Visionary Tier",
      price: "$500/month (₹41,000)",
      perks: [
        "Everything in Leader Tier",
        "Direct access to UN Sustainable Development Goals working groups",
        "Lifetime access to all HDI90 digital courses & future content (worth $10,000+)",
        "Personal documentary feature about your impact journey",
        "Legacy fund management: multiply your impact through strategic investments",
        "Monthly featured spotlight in HDI90's global newsletter (500K+ subscribers)",
        "Dedicated team to amplify your personal brand & thought leadership",
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

      {/* Impact Showcase */}
      <ImpactShowcase />
    </div>
  );
}