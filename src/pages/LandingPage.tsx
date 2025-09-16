import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

interface LandingPageProps {
  onStartEvaluation: () => void;
}

const LandingPage = ({ onStartEvaluation }: LandingPageProps) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-medical-green-light text-medical-green px-4 py-2">
            IA para Salud Mental
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Predicción Inteligente de
            <span className="bg-medical-gradient bg-clip-text text-transparent block">
              Riesgo Suicida
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema avanzado de apoyo para decisiones clínicas utilizando Stacking Classifier 
            y análisis K-Means para evaluación precisa del riesgo en pacientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-medical-green" />
            <span><strong>96% F1-Score</strong> de precisión</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-medical-green" />
            <span><strong>100% Recall</strong> en detección</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-medical-green" />
            <span><strong>3 Clústeres</strong> K-Means optimizados</span>
          </div>
        </div>

        <Button 
          size="lg" 
          onClick={onStartEvaluation}
          className="bg-medical-gradient hover:opacity-90 text-lg px-8 py-6 h-auto shadow-medical"
        >
          Iniciar Evaluación
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="border-medical-blue/20 shadow-card hover:shadow-medical transition-shadow">
          <CardHeader>
            <Target className="h-8 w-8 text-medical-blue mb-2" />
            <CardTitle>Predicción Precisa</CardTitle>
            <CardDescription>
              Stacking Classifier con 96% F1-Score y 100% Recall para máxima precisión
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ensemble de algoritmos optimizados</li>
              <li>• Validación cruzada robusta</li>
              <li>• Métricas validadas clínicamente</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-medical-green/20 shadow-card hover:shadow-medical transition-shadow">
          <CardHeader>
            <Users className="h-8 w-8 text-medical-green mb-2" />
            <CardTitle>Perfiles de Riesgo</CardTitle>
            <CardDescription>
              3 clústeres K-Means identifican patrones específicos de riesgo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Jóvenes con múltiples factores</li>
              <li>• Adultos con comorbilidades</li>
              <li>• Adultos mayores aislados</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-medical-blue/20 shadow-card hover:shadow-medical transition-shadow">
          <CardHeader>
            <BarChart3 className="h-8 w-8 text-medical-blue mb-2" />
            <CardTitle>Analytics Profesional</CardTitle>
            <CardDescription>
              Dashboard completo con estadísticas poblacionales y tendencias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Análisis temporal de casos</li>
              <li>• Distribución demográfica</li>
              <li>• Métricas de efectividad</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Cómo Funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proceso de evaluación en 3 pasos respaldado por algoritmos de machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-medical-blue">1</span>
            </div>
            <h3 className="text-xl font-semibold">Recolección de Datos</h3>
            <p className="text-muted-foreground">
              Formulario estructurado captura información demográfica, clínica y social
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-medical-green">2</span>
            </div>
            <h3 className="text-xl font-semibold">Análisis IA</h3>
            <p className="text-muted-foreground">
              Stacking Classifier procesa datos y clasifica en clústeres K-Means
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-medical-blue">3</span>
            </div>
            <h3 className="text-xl font-semibold">Recomendación</h3>
            <p className="text-muted-foreground">
              Predicción de riesgo con recomendaciones clínicas específicas
            </p>
          </div>
        </div>
      </section>

      {/* Stats Panel */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-6">
          <CardContent className="p-0">
            <div className="text-3xl font-bold text-medical-blue">96%</div>
            <div className="text-sm text-muted-foreground">F1-Score</div>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent className="p-0">
            <div className="text-3xl font-bold text-medical-green">100%</div>
            <div className="text-sm text-muted-foreground">Recall</div>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent className="p-0">
            <div className="text-3xl font-bold text-medical-blue">3</div>
            <div className="text-sm text-muted-foreground">Clústeres K-Means</div>
          </CardContent>
        </Card>
        <Card className="text-center p-6">
          <CardContent className="p-0">
            <div className="text-3xl font-bold text-medical-green">24/7</div>
            <div className="text-sm text-muted-foreground">Disponibilidad</div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Final */}
      <section>
        <Card className="bg-medical-gradient text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Comience la Evaluación Ahora
            </h3>
            <p className="mb-6 opacity-90">
              Herramienta profesional para apoyo en decisiones clínicas
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onStartEvaluation}
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              Iniciar Evaluación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default LandingPage;