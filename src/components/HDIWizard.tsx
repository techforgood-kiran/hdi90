import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Copy, RotateCcw, Save } from "lucide-react";

/**
 * HDIWizardWithSaveAndPDF
 * Multi-step wizard for HDI 2.0 assessment with improvements:
 * - Enhanced UI using design system components
 * - Better validation and error handling
 * - Improved accessibility and responsive design
 * - Auto-save functionality with localStorage
 * - PDF export capability
 */

const STORAGE_KEY = "hdi2_wizard_v1";
const eps = 1e-4;

function normalizeMinMax(x: number, min: number, max: number): number {
  if (x === null || x === undefined || isNaN(x)) return 0;
  if (max === min) return x > min ? 1 : 0;
  return Math.max(0, Math.min(1, (x - min) / (max - min)));
}

const boolTo01 = (b: boolean): number => (b ? 1 : 0);

function geometricMean(arr: number[]): number {
  const prod = arr.reduce((s, v) => s * Math.max(v, eps), 1);
  return Math.pow(prod, 1 / arr.length);
}

interface HDIScores {
  AarogyaShree: number;
  EducationScore: number;
  HappinessScore: number;
  NetImpact: number;
  HDI20: number;
}

interface HDIWizardProps {
  onScores?: (scores: HDIScores) => void;
}

const defaultState = {
  // Health
  hasRecentCheckup: true,
  hba1c: 5.6,
  systolicBP: 120,
  phq9: 4,
  expectQualityLater: 7,
  hasGeneticRiskKnown: false,
  geneticRiskScorePct: 50,
  exerciseMinsPerWeek: 120,
  dietScore: 7,
  // Education
  literacyMotherTongue: 8,
  literacyEnglish: 6,
  cognitiveTestScorePct: 60,
  growthMindset: 7,
  designThinkingScore: 6,
  ikigaiCompetence: 5,
  entrepreneurialSkill: 4,
  // Happiness
  psychWellbeing: 6,
  hHealthDomain: 7,
  hEducationDomain: 6,
  timeUse: 5,
  culturalResilience: 5,
  goodGovernance: 4,
  communityVitality: 6,
  ecologicalConnection: 4,
  livingStandards: 5,
  // Environment
  monthlyCO2eKg: 200,
  groupEmissionsKg: 1000,
  positiveActionsCount: 2,
  planetaryBoundaryScore: 6,
};

export default function HDIWizardWithSaveAndPDF({ onScores }: HDIWizardProps) {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  // Load state from localStorage or use defaults
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...defaultState, ...parsed };
      }
    } catch (e) {
      console.error("Failed to load saved progress:", e);
    }
    return defaultState;
  });

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save progress:", e);
    }
  }, [state]);

  // Update state field
  function setField(key: string, value: any) {
    setState((s) => ({ ...s, [key]: value }));
  }

  // Calculate scores
  const scores = useMemo((): HDIScores => {
    const {
      hasRecentCheckup, hba1c, systolicBP, phq9, expectQualityLater,
      hasGeneticRiskKnown, geneticRiskScorePct, exerciseMinsPerWeek, dietScore,
      literacyMotherTongue, literacyEnglish, cognitiveTestScorePct,
      growthMindset, designThinkingScore, ikigaiCompetence, entrepreneurialSkill,
      psychWellbeing, hHealthDomain, hEducationDomain, timeUse,
      culturalResilience, goodGovernance, communityVitality,
      ecologicalConnection, livingStandards, monthlyCO2eKg,
      groupEmissionsKg, positiveActionsCount, planetaryBoundaryScore,
    } = state;

    // Health calculations
    const hb = normalizeMinMax(9 - hba1c, 4.5, 9);
    const bp = normalizeMinMax(160 - systolicBP, 100, 160);
    const biomarkers = (hb + bp) / 2;
    const preventiveDiagnostic = 0.4 * boolTo01(hasRecentCheckup) + 0.6 * biomarkers;
    const phqNorm = normalizeMinMax(27 - phq9, 0, 27);
    const psychosomatic = phqNorm;
    const eol = normalizeMinMax(expectQualityLater, 0, 10);
    const genetic = hasGeneticRiskKnown ? Math.max(0, Math.min(1, 1 - geneticRiskScorePct / 100)) : 0.5;
    const exerciseNorm = normalizeMinMax(exerciseMinsPerWeek, 0, 420);
    const dietNorm = normalizeMinMax(dietScore, 0, 10);
    const lifestyle = (exerciseNorm + dietNorm) / 2;
    const AarogyaShree = 0.2 * preventiveDiagnostic + 0.2 * psychosomatic + 0.2 * eol + 0.2 * genetic + 0.2 * lifestyle;

    // Education calculations
    const litMT = normalizeMinMax(literacyMotherTongue, 0, 10);
    const litEN = normalizeMinMax(literacyEnglish, 0, 10);
    const literacy = (litMT + litEN) / 2;
    const cog = normalizeMinMax(cognitiveTestScorePct, 0, 100);
    const att = normalizeMinMax(growthMindset, 0, 10);
    const aptAtt = 0.6 * cog + 0.4 * att;
    const dt = normalizeMinMax(designThinkingScore, 0, 10);
    const ikigai = normalizeMinMax(ikigaiCompetence, 0, 10);
    const ent = normalizeMinMax(entrepreneurialSkill, 0, 10);
    const EducationScore = (literacy + aptAtt + dt + ikigai + ent) / 5;

    // Happiness calculations
    const D = {
      psych: normalizeMinMax(psychWellbeing, 0, 10),
      health: normalizeMinMax(hHealthDomain, 0, 10),
      education: normalizeMinMax(hEducationDomain, 0, 10),
      timeUse: normalizeMinMax(timeUse, 0, 10),
      cultural: normalizeMinMax(culturalResilience, 0, 10),
      governance: normalizeMinMax(goodGovernance, 0, 10),
      community: normalizeMinMax(communityVitality, 0, 10),
      ecological: normalizeMinMax(ecologicalConnection, 0, 10),
      living: normalizeMinMax(livingStandards, 0, 10),
    };
    const HappinessScore = 0.15 * D.psych + 0.1 * D.health + 0.1 * D.education + 
                          0.1 * D.timeUse + 0.1 * D.cultural + 0.1 * D.governance + 
                          0.1 * D.community + 0.1 * D.ecological + 0.15 * D.living;

    // Environment calculations
    const personal_emis_score = 1 - normalizeMinMax(monthlyCO2eKg, 0, 3000);
    const group_emis_score = 1 - normalizeMinMax(groupEmissionsKg, 0, 20000);
    const pba = normalizeMinMax(planetaryBoundaryScore, 0, 10);
    const posActions = normalizeMinMax(Math.log(1 + positiveActionsCount), 0, Math.log(1 + 50));
    const NetImpact = 0.3 * pba + 0.2 * personal_emis_score + 0.2 * group_emis_score + 0.3 * posActions;

    const HDI20 = geometricMean([AarogyaShree, EducationScore, HappinessScore, NetImpact]);

    return {
      AarogyaShree: Math.max(eps, AarogyaShree),
      EducationScore: Math.max(eps, EducationScore),
      HappinessScore: Math.max(eps, HappinessScore),
      NetImpact: Math.max(eps, NetImpact),
      HDI20,
    };
  }, [state]);

  // Notify parent of score changes
  useEffect(() => {
    if (onScores) onScores(scores);
  }, [scores, onScores]);

  // Validation
  function validateStep(currentStep: number): string[] {
    const errors: string[] = [];
    
    if (currentStep === 1) {
      if (state.hba1c <= 0 || state.hba1c > 20) errors.push("HbA1c must be between 0.1 and 20");
      if (state.systolicBP < 40 || state.systolicBP > 260) errors.push("Systolic BP must be between 40 and 260");
      if (state.phq9 < 0 || state.phq9 > 27) errors.push("PHQ-9 score must be between 0 and 27");
    }
    
    if (currentStep === 2) {
      if (state.cognitiveTestScorePct < 0 || state.cognitiveTestScorePct > 100) {
        errors.push("Cognitive test percentile must be between 0 and 100");
      }
    }
    
    if (currentStep === 4) {
      if (state.monthlyCO2eKg < 0) errors.push("Personal CO2 emissions cannot be negative");
      if (state.groupEmissionsKg < 0) errors.push("Group emissions cannot be negative");
      if (state.positiveActionsCount < 0) errors.push("Positive actions count cannot be negative");
    }
    
    return errors;
  }

  // Navigation
  function goNext() {
    const errors = validateStep(step);
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors.join(". "),
        variant: "destructive",
      });
      return;
    }
    
    if (step < 5) {
      setStep(s => s + 1);
      toast({
        title: "Progress Saved",
        description: `Moved to step ${step + 1}. Your progress is automatically saved.`,
      });
    }
  }

  function goBack() {
    if (step > 1) setStep(s => s - 1);
  }

  // Clear progress
  function clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
    setState(defaultState);
    setStep(1);
    toast({
      title: "Progress Cleared",
      description: "All answers have been reset and saved draft cleared.",
    });
  }

  // Generate PDF
  async function generatePDF() {
    const element = document.getElementById("hdi2_review");
    if (!element) {
      toast({
        title: "Error",
        description: "Review element not found.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Dynamic import of html2pdf
      const html2pdf = (await import('html2pdf.js')).default;
      
      const opt = {
        margin: 10,
        filename: `HDI2_Assessment_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "PDF Generated",
        description: "Your HDI assessment has been downloaded as PDF.",
      });
    } catch (err) {
      console.error("PDF generation failed:", err);
      toast({
        title: "PDF Generation Failed",
        description: "Unable to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  }

  // Copy to clipboard
  function copyToClipboard() {
    const data = JSON.stringify({ state, scores }, null, 2);
    navigator.clipboard.writeText(data).then(() => {
      toast({
        title: "Copied to Clipboard",
        description: "Assessment data copied successfully.",
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      });
    });
  }

  const progressValue = ((step - 1) / 4) * 100;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">HDI 2.0 Multi-Step Assessment</CardTitle>
            <CardDescription>
              Comprehensive holistic development evaluation with auto-save functionality
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={clearProgress}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Clear Progress
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Step {step} of 5</span>
            <span>Auto-saved</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Health Assessment (AarogyaShree)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive health evaluation including preventive care, biomarkers, and lifestyle factors.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Recent Health Checkup (past 12 months)</Label>
                    <RadioGroup
                      value={state.hasRecentCheckup.toString()}
                      onValueChange={(value) => setField("hasRecentCheckup", value === "true")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="checkup-yes" />
                        <Label htmlFor="checkup-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="checkup-no" />
                        <Label htmlFor="checkup-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hba1c">HbA1c Level (%)</Label>
                    <Input
                      id="hba1c"
                      type="number"
                      min="3"
                      max="15"
                      step="0.1"
                      value={state.hba1c}
                      onChange={(e) => setField("hba1c", parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="systolic">Systolic Blood Pressure (mmHg)</Label>
                    <Input
                      id="systolic"
                      type="number"
                      min="40"
                      max="260"
                      value={state.systolicBP}
                      onChange={(e) => setField("systolicBP", parseInt(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phq9">PHQ-9 Depression Score (0-27)</Label>
                    <Input
                      id="phq9"
                      type="number"
                      min="0"
                      max="27"
                      value={state.phq9}
                      onChange={(e) => setField("phq9", parseInt(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Expected Quality of Life (0-10): {state.expectQualityLater}</Label>
                    <Slider
                      value={[state.expectQualityLater]}
                      onValueChange={(value) => setField("expectQualityLater", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Genetic Risk Assessment Available</Label>
                    <RadioGroup
                      value={state.hasGeneticRiskKnown.toString()}
                      onValueChange={(value) => setField("hasGeneticRiskKnown", value === "true")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="genetic-yes" />
                        <Label htmlFor="genetic-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="genetic-no" />
                        <Label htmlFor="genetic-no">No</Label>
                      </div>
                    </RadioGroup>

                    {state.hasGeneticRiskKnown && (
                      <div className="mt-3 space-y-2">
                        <Label htmlFor="genetic-risk">Genetic Risk Percentile (0-100)</Label>
                        <Input
                          id="genetic-risk"
                          type="number"
                          min="0"
                          max="100"
                          value={state.geneticRiskScorePct}
                          onChange={(e) => setField("geneticRiskScorePct", parseInt(e.target.value) || 0)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exercise">Exercise Minutes per Week</Label>
                    <Input
                      id="exercise"
                      type="number"
                      min="0"
                      value={state.exerciseMinsPerWeek}
                      onChange={(e) => setField("exerciseMinsPerWeek", parseInt(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Diet Quality (0-10): {state.dietScore}</Label>
                    <Slider
                      value={[state.dietScore]}
                      onValueChange={(value) => setField("dietScore", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Evaluate literacy, cognitive abilities, and practical skills for lifelong learning.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Mother Tongue Literacy (0-10): {state.literacyMotherTongue}</Label>
                    <Slider
                      value={[state.literacyMotherTongue]}
                      onValueChange={(value) => setField("literacyMotherTongue", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>English Literacy (0-10): {state.literacyEnglish}</Label>
                    <Slider
                      value={[state.literacyEnglish]}
                      onValueChange={(value) => setField("literacyEnglish", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cognitive">Cognitive Test Percentile (0-100)</Label>
                    <Input
                      id="cognitive"
                      type="number"
                      min="0"
                      max="100"
                      value={state.cognitiveTestScorePct}
                      onChange={(e) => setField("cognitiveTestScorePct", parseInt(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Growth Mindset (0-10): {state.growthMindset}</Label>
                    <Slider
                      value={[state.growthMindset]}
                      onValueChange={(value) => setField("growthMindset", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Design Thinking Skills (0-10): {state.designThinkingScore}</Label>
                    <Slider
                      value={[state.designThinkingScore]}
                      onValueChange={(value) => setField("designThinkingScore", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Ikigai Competence (0-10): {state.ikigaiCompetence}</Label>
                    <Slider
                      value={[state.ikigaiCompetence]}
                      onValueChange={(value) => setField("ikigaiCompetence", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Entrepreneurial Skills (0-10): {state.entrepreneurialSkill}</Label>
                    <Slider
                      value={[state.entrepreneurialSkill]}
                      onValueChange={(value) => setField("entrepreneurialSkill", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Happiness Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Evaluate well-being across nine key domains of life satisfaction.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Psychological Well-being", key: "psychWellbeing" },
                    { label: "Health Domain", key: "hHealthDomain" },
                    { label: "Education Domain", key: "hEducationDomain" },
                    { label: "Time Use & Work-Life Balance", key: "timeUse" },
                    { label: "Cultural Diversity & Resilience", key: "culturalResilience" },
                    { label: "Good Governance", key: "goodGovernance" },
                    { label: "Community Vitality", key: "communityVitality" },
                    { label: "Ecological Connection", key: "ecologicalConnection" },
                    { label: "Living Standards", key: "livingStandards" },
                  ].map((domain) => (
                    <div key={domain.key} className="space-y-3">
                      <Label>{domain.label} (0-10): {state[domain.key as keyof typeof state]}</Label>
                      <Slider
                        value={[state[domain.key as keyof typeof state] as number]}
                        onValueChange={(value) => setField(domain.key, value[0])}
                        max={10}
                        min={0}
                        step={1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Environment Assessment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Assess environmental impact and sustainability practices.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="personal-co2">Personal CO₂e per Month (kg)</Label>
                    <Input
                      id="personal-co2"
                      type="number"
                      min="0"
                      value={state.monthlyCO2eKg}
                      onChange={(e) => setField("monthlyCO2eKg", parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="group-emissions">Group/Workplace Emissions (kg/month)</Label>
                    <Input
                      id="group-emissions"
                      type="number"
                      min="0"
                      value={state.groupEmissionsKg}
                      onChange={(e) => setField("groupEmissionsKg", parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="positive-actions">Positive Environmental Actions (count)</Label>
                    <Input
                      id="positive-actions"
                      type="number"
                      min="0"
                      value={state.positiveActionsCount}
                      onChange={(e) => setField("positiveActionsCount", parseInt(e.target.value) || 0)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Planetary Boundary Adherence (0-10): {state.planetaryBoundaryScore}</Label>
                    <Slider
                      value={[state.planetaryBoundaryScore]}
                      onValueChange={(value) => setField("planetaryBoundaryScore", value[0])}
                      max={10}
                      min={0}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div id="hdi2_review" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Assessment Results</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your comprehensive HDI 2.0 scores based on the geometric mean calculation.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Health (AarogyaShree)", value: scores.AarogyaShree, color: "bg-red-50 text-red-900" },
                    { label: "Education", value: scores.EducationScore, color: "bg-blue-50 text-blue-900" },
                    { label: "Happiness", value: scores.HappinessScore, color: "bg-yellow-50 text-yellow-900" },
                    { label: "Environment", value: scores.NetImpact, color: "bg-green-50 text-green-900" },
                  ].map((score) => (
                    <Card key={score.label} className={score.color}>
                      <CardContent className="p-4">
                        <div className="text-xs font-medium opacity-75">{score.label}</div>
                        <div className="text-2xl font-bold">{score.value.toFixed(3)}</div>
                        <Progress value={score.value * 100} className="h-1 mt-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90">HDI 2.0 Overall Score</div>
                        <div className="text-4xl font-bold">{scores.HDI20.toFixed(3)}</div>
                        <div className="text-xs opacity-75 mt-2">
                          Geometric Mean: (Health × Education × Happiness × Environment)^(1/4)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Separator />

                <div className="flex flex-wrap gap-3">
                  <Button onClick={copyToClipboard} variant="outline">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Results
                  </Button>
                  
                  <Button onClick={generatePDF} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  
                  {onScores && (
                    <Button onClick={() => onScores(scores)}>
                      <Save className="h-4 w-4 mr-2" />
                      Send to Calculator
                    </Button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={goBack}
            disabled={step === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          {step < 5 ? (
            <Button onClick={goNext}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={clearProgress} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Start New Assessment
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}