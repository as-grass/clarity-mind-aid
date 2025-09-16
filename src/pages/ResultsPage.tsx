import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, Download, Share2, Brain, Target, AlertTriangle, 
  Users, Calendar, MapPin, Activity, Briefcase, GraduationCap, 
  Home, FileText, BarChart3 
} from "lucide-react";
import { PredictionResult } from "../App";

interface ResultsPageProps {
  result: PredictionResult;
  onNewEvaluation: () => void;
  onViewDashboard: () => void;
}

const ResultsPage = ({ result, onNewEvaluation, onViewDashboard }: ResultsPageProps) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "high": return "text-risk-high border-risk-high/20 bg-risk-high/5";
      case "moderate": return "text-risk-moderate border-risk-moderate/20 bg-risk-moderate/5";
      case "low": return "text-risk-low border-risk-low/20 bg-risk-low/5";
      default: return "text-muted-foreground";
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case "high": return "Alto Riesgo";
      case "moderate": return "Riesgo Moderado";
      case "low": return "Bajo Riesgo";
      default: return "Indeterminado";
    }
  };

  const getRecommendation = (level: string) => {
    switch (level) {
      case "high": 
        return "ATENCIÓN INMEDIATA REQUERIDA: Supervisión continua, intervención psiquiátrica urgente y medidas de seguridad.";
      case "moderate": 
        return "Seguimiento estrecho recomendado: Evaluación psiquiátrica en 24-48 horas y plan de seguridad.";
      case "low": 
        return "Monitoreo regular: Seguimiento ambulatorio y evaluación de factores protectores.";
      default: 
        return "Evaluación adicional requerida.";
    }
  };

  const identifyRiskFactors = () => {
    const factors = [];
    const { formData } = result;

    if (parseInt(formData.age) < 30) factors.push({ factor: "Edad joven (< 30 años)", risk: "high" });
    if (formData.previousAttempts === "multiple") factors.push({ factor: "Múltiples intentos previos", risk: "high" });
    if (formData.substanceUse.length > 0) factors.push({ factor: "Uso de sustancias", risk: "moderate" });
    if (formData.socialSupport === "isolated") factors.push({ factor: "Aislamiento social", risk: "high" });
    if (formData.employment === "unemployed") factors.push({ factor: "Desempleo", risk: "moderate" });
    if (formData.psychiatricHistory.includes("Depresión")) factors.push({ factor: "Historial de depresión", risk: "moderate" });

    return factors;
  };

  const riskFactors = identifyRiskFactors();
  const timestamp = new Date(result.timestamp).toLocaleString();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Resultados de Evaluación</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Generado el {timestamp}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>

      {/* Main Result Card */}
      <Card className="shadow-medical">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Predicción de Riesgo Suicida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-medical-blue">
              {result.probability}%
            </div>
            <Badge className={`text-lg px-4 py-2 ${getRiskColor(result.riskLevel)}`}>
              {getRiskLabel(result.riskLevel)}
            </Badge>
            <Progress 
              value={result.probability} 
              className="h-3 max-w-md mx-auto"
            />
          </div>

          <Alert className={getRiskColor(result.riskLevel)}>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="font-medium">
              <strong>Recomendación Clínica:</strong> {getRecommendation(result.riskLevel)}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Analysis Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Model Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-medical-blue" />
              Métricas del Modelo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-medical-blue/5 rounded-lg">
                <div className="text-2xl font-bold text-medical-blue">96%</div>
                <div className="text-sm text-muted-foreground">F1-Score</div>
              </div>
              <div className="text-center p-4 bg-medical-green/5 rounded-lg">
                <div className="text-2xl font-bold text-medical-green">100%</div>
                <div className="text-sm text-muted-foreground">Recall</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Predicción generada utilizando Stacking Classifier optimizado con validación cruzada 
              y análisis K-Means para clasificación de perfiles de riesgo.
            </p>
          </CardContent>
        </Card>

        {/* Risk Factors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-medical-blue" />
              Factores de Riesgo Identificados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {riskFactors.length > 0 ? (
                riskFactors.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.factor}</span>
                    <Badge 
                      variant="outline" 
                      className={getRiskColor(item.risk)}
                    >
                      {item.risk === "high" ? "Alto" : "Moderado"}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No se identificaron factores de riesgo significativos.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-medical-blue" />
            Resumen del Caso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Demographics */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Demografía
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Edad:</span>
                  <span>{result.formData.age} años</span>
                </div>
                <div className="flex justify-between">
                  <span>Sexo:</span>
                  <span>{result.formData.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ubicación:</span>
                  <span>{result.formData.location}</span>
                </div>
              </div>
            </div>

            {/* Clinical */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Información Clínica
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Método:</span>
                  <span>{result.formData.method || "No especificado"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Intentos previos:</span>
                  <span>{result.formData.previousAttempts || "Ninguno"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ant. psiquiátricos:</span>
                  <span>{result.formData.psychiatricHistory.length || 0}</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Home className="h-4 w-4" />
                Factores Sociales
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Empleo:</span>
                  <span>{result.formData.employment || "No especificado"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Apoyo social:</span>
                  <span>{result.formData.socialSupport || "No especificado"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sustancias:</span>
                  <span>{result.formData.substanceUse.length || 0}</span>
                </div>
              </div>
            </div>
          </div>

          {(result.formData.triggers || result.formData.additionalNotes) && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                {result.formData.triggers && (
                  <div>
                    <h4 className="font-semibold mb-2">Factores Desencadenantes:</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                      {result.formData.triggers}
                    </p>
                  </div>
                )}
                {result.formData.additionalNotes && (
                  <div>
                    <h4 className="font-semibold mb-2">Notas Adicionales:</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                      {result.formData.additionalNotes}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onNewEvaluation} 
          className="bg-medical-blue hover:bg-medical-blue-dark"
        >
          <FileText className="h-4 w-4 mr-2" />
          Nueva Evaluación
        </Button>
        <Button 
          variant="outline" 
          onClick={onViewDashboard}
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Ver Dashboard
        </Button>
      </div>

      {/* Disclaimer */}
      <Alert className="border-medical-blue/20 bg-medical-blue/5">
        <Brain className="h-4 w-4" />
        <AlertDescription>
          <strong>Recordatorio:</strong> Esta herramienta proporciona apoyo para decisiones clínicas 
          y no reemplaza el juicio profesional médico. Siempre considere el contexto clínico completo 
          y las directrices institucionales.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ResultsPage;