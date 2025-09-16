import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainApp from "./pages/MainApp";
import LegalPage from "./pages/LegalPage";

const queryClient = new QueryClient();

export interface PredictionResult {
  probability: number;
  riskLevel: "high" | "moderate" | "low";
  timestamp: string;
  formData: any;
}

const App = () => {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <MainApp 
                  predictionResult={predictionResult} 
                  setPredictionResult={setPredictionResult} 
                />
              } 
            />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;