import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Sparkles, Send, CheckCircle, Leaf, BookOpen, Stethoscope, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const causeAreas = [
  { id: 'health', label: 'AarogyaShri — Health', icon: Stethoscope, color: 'text-red-500' },
  { id: 'education', label: 'VidyaShri — Education', icon: BookOpen, color: 'text-blue-500' },
  { id: 'agriculture', label: 'FarmerFirst — Agriculture', icon: Wheat, color: 'text-amber-600' },
  { id: 'environment', label: 'Regenerate & Prosper', icon: Leaf, color: 'text-emerald-500' },
  { id: 'society', label: 'Flourishing Societies', icon: Users, color: 'text-purple-500' },
  { id: 'cross', label: 'Cross-Mission Enablers', icon: Globe, color: 'text-teal-500' },
];

const skillOptions = [
  'Teaching & Mentoring', 'Healthcare / Medical', 'Tech & Digital', 'Fundraising',
  'Content & Communications', 'Field Research', 'Project Management', 'Legal & Policy',
  'Design & Creative', 'Data & Analytics', 'Agriculture & Farming', 'Community Organizing',
];

const availabilityOptions = [
  { id: 'weekdays', label: 'Weekdays' },
  { id: 'weekends', label: 'Weekends' },
  { id: 'remote', label: 'Remote / Online' },
  { id: 'onsite', label: 'On-site / Field Work' },
];

const Serve = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    causes: [] as string[],
    skills: [] as string[],
    availability: [] as string[],
    hoursPerWeek: '',
    superpower: '',
    whyServe: '',
    dreamProject: '',
  });

  const toggleArrayField = (field: 'causes' | 'skills' | 'availability', value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || form.causes.length === 0) {
      toast({ title: 'Please fill required fields', description: 'Name, email, and at least one cause area are required.', variant: 'destructive' });
      return;
    }

    setLoading(true);

    // Build mailto body
    const body = `
VOLUNTEER APPLICATION — HDI90 Serve
====================================

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}
City: ${form.city || 'Not provided'}

CAUSE AREAS:
${form.causes.join(', ')}

SKILLS:
${form.skills.join(', ') || 'Not specified'}

AVAILABILITY:
${form.availability.join(', ') || 'Not specified'}

Hours per week: ${form.hoursPerWeek || 'Flexible'}

SUPERPOWER:
${form.superpower || 'Not shared yet'}

WHY I WANT TO SERVE:
${form.whyServe || 'Not shared yet'}

DREAM PROJECT IDEA:
${form.dreamProject || 'Not shared yet'}
    `.trim();

    const mailtoLink = `mailto:sai@hdi90.com?subject=${encodeURIComponent(`Volunteer Application: ${form.name}`)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hdi-light-blue via-background to-hdi-light-green px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-center max-w-lg"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Stepping Up! 🙏
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Your email client should have opened with your application details. Please send the email to complete your sign-up. We'll be in touch soon.
            </p>
            <Button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', city: '', causes: [], skills: [], availability: [], hoursPerWeek: '', superpower: '', whyServe: '', dreamProject: '' }); }}>
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hdi-navy via-primary to-hdi-teal py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">HDI90 Serve</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Time Can Change<br />Someone's <span className="text-accent">Entire Life</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Join a community of changemakers who believe that service is the highest form of purpose. 
              Volunteer with HDI90 and make your skills count where they matter most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Basic Info */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">About You</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Where are you based?" value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cause Areas */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Where Do You Want to Serve? *</h2>
                  </div>
                  <p className="text-muted-foreground text-sm">Pick all the missions that call to you.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {causeAreas.map(cause => {
                      const Icon = cause.icon;
                      const selected = form.causes.includes(cause.id);
                      return (
                        <button
                          type="button"
                          key={cause.id}
                          onClick={() => toggleArrayField('causes', cause.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            selected
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-border hover:border-primary/40 hover:bg-muted/50'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${cause.color}`} />
                          <span className="text-sm font-medium text-foreground">{cause.label}</span>
                          {selected && <CheckCircle className="w-4 h-4 text-primary ml-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-hdi-light-green flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-hdi-green" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Your Skills & Strengths</h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map(skill => {
                      const selected = form.skills.includes(skill);
                      return (
                        <button
                          type="button"
                          key={skill}
                          onClick={() => toggleArrayField('skills', skill)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selected
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-hdi-light-blue flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Your Availability</h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {availabilityOptions.map(opt => {
                      const selected = form.availability.includes(opt.id);
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => toggleArrayField('availability', opt.id)}
                          className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            selected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-border text-muted-foreground hover:border-primary/40'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hours">How many hours per week can you dedicate?</Label>
                    <Input id="hours" placeholder="e.g. 5-10 hours" value={form.hoursPerWeek} onChange={e => setForm(p => ({ ...p, hoursPerWeek: e.target.value }))} />
                  </div>
                </CardContent>
              </Card>

              {/* Creative Questions */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">The Fun Part ✨</h2>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="superpower">If you had one superpower to change India, what would it be?</Label>
                      <Textarea id="superpower" placeholder="I would..." value={form.superpower} onChange={e => setForm(p => ({ ...p, superpower: e.target.value }))} className="min-h-[80px]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whyServe">Why do you want to serve with HDI90?</Label>
                      <Textarea id="whyServe" placeholder="Share your motivation..." value={form.whyServe} onChange={e => setForm(p => ({ ...p, whyServe: e.target.value }))} className="min-h-[80px]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dreamProject">Describe your dream volunteer project in 2 sentences</Label>
                      <Textarea id="dreamProject" placeholder="If I could create any project..." value={form.dreamProject} onChange={e => setForm(p => ({ ...p, dreamProject: e.target.value }))} className="min-h-[80px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="text-center">
                <Button type="submit" size="lg" disabled={loading} className="bg-gradient-to-r from-primary to-hdi-teal hover:opacity-90 text-primary-foreground px-12 py-6 text-lg font-bold rounded-xl shadow-lg">
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? 'Sending...' : 'Submit & Serve'}
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  Your application will be sent to our team at sai@hdi90.com
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-hdi-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            "The best way to find yourself is to lose yourself in the service of others."
          </h2>
          <p className="text-white/60 text-lg">— Mahatma Gandhi</p>
        </div>
      </section>
    </>
  );
};

export default Serve;
