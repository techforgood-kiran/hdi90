import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HDICalculator from "./pages/HDICalculator";
import Methodology from "./pages/Methodology";
import JoinMovement from "./pages/JoinMovement";
import NotFound from "./pages/NotFound";
import HealthyHumanCapital from "./pages/missions/HealthyHumanCapital";
import LearningToLead from "./pages/missions/LearningToLead";
import FlourishingSocieties from "./pages/missions/FlourishingSocieties";
import RegenerateProsper from "./pages/missions/RegenerateProsper";
import CrossMissionEnablers from "./pages/missions/CrossMissionEnablers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hdi-calculator" element={<HDICalculator />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/join-movement" element={<JoinMovement />} />
          <Route path="/missions/healthy-human-capital" element={<HealthyHumanCapital />} />
          <Route path="/missions/learning-to-lead" element={<LearningToLead />} />
          <Route path="/missions/flourishing-societies" element={<FlourishingSocieties />} />
          <Route path="/missions/regenerate-prosper" element={<RegenerateProsper />} />
          <Route path="/missions/enablers" element={<CrossMissionEnablers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
