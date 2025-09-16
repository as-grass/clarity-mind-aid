import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, Home, FileText, BarChart3, PieChart, Scale } from "lucide-react";
import LandingPage from "./LandingPage";
import PredictionForm from "./PredictionForm";
import ResultsPage from "./ResultsPage";
import Dashboard from "./Dashboard";
import LegalPage from "./LegalPage";
import { PredictionResult } from "../App";

interface MainAppProps {
  predictionResult: PredictionResult | null;
  setPredictionResult: (result: PredictionResult | null) => void;
}

const MainApp = ({ predictionResult, setPredictionResult }: MainAppProps) => {
  const [activeTab, setActiveTab] = useState("landing");

  return (
    <div className="min-h-screen bg-medical-gradient">
      <div className="min-h-screen bg-background/95 backdrop-blur">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-medical-blue" />
                <h1 className="text-2xl font-bold bg-medical-gradient bg-clip-text text-transparent">
                  MentalCare AI
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Disclaimer */}
        <div className="container mx-auto px-4 py-4">
          <Alert className="border-medical-blue/20 bg-medical-blue/5">
            <Brain className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Aviso Médico:</strong> Esta herramienta de IA está diseñada para apoyo en decisiones clínicas 
              y NO reemplaza el juicio profesional médico. Siempre consulte con un profesional de salud mental calificado.
            </AlertDescription>
          </Alert>
        </div>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-5 h-auto p-1 bg-card">
              <TabsTrigger value="landing" className="flex items-center gap-2 py-3">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Inicio</span>
              </TabsTrigger>
              <TabsTrigger value="prediction" className="flex items-center gap-2 py-3">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Evaluación</span>
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className="flex items-center gap-2 py-3"
                disabled={!predictionResult}
              >
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Resultados</span>
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2 py-3">
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="legal" className="flex items-center gap-2 py-3">
                <Scale className="h-4 w-4" />
                <span className="hidden sm:inline">Legal</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="landing" className="mt-0">
                <LandingPage onStartEvaluation={() => setActiveTab("prediction")} />
              </TabsContent>
              
              <TabsContent value="prediction" className="mt-0">
                <PredictionForm 
                  onPredictionComplete={(result) => {
                    setPredictionResult(result);
                    setActiveTab("results");
                  }} 
                />
              </TabsContent>
              
              <TabsContent value="results" className="mt-0">
                {predictionResult ? (
                  <ResultsPage 
                    result={predictionResult} 
                    onNewEvaluation={() => {
                      setPredictionResult(null);
                      setActiveTab("prediction");
                    }}
                    onViewDashboard={() => setActiveTab("dashboard")}
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No hay resultados disponibles. Complete una evaluación primero.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="dashboard" className="mt-0">
                <Dashboard />
              </TabsContent>
              
              <TabsContent value="legal" className="mt-0">
                <LegalPage />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainApp;