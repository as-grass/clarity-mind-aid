import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Calendar, MapPin, Activity, AlertTriangle, Brain, Heart, Users, Briefcase, GraduationCap, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { PredictionResult } from "../App";

interface PredictionFormProps {
  onPredictionComplete: (result: PredictionResult) => void;
}

const PredictionForm = ({ onPredictionComplete }: PredictionFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Paso 1: Demografía
    age: "",
    gender: "",
    location: "",
    
    // Paso 2: Método e Historial
    method: "",
    previousAttempts: "",
    psychiatricHistory: [] as string[],
    medicalHistory: [] as string[],
    
    // Paso 3: Factores Sociales
    employment: "",
    education: "",
    livingSituation: "",
    socialSupport: "",
    substanceUse: [] as string[],
    
    // Paso 4: Información Adicional
    triggers: "",
    additionalNotes: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePrediction = () => {
    // Simular análisis de IA
    const age = parseInt(formData.age);
    const hasMultipleAttempts = formData.previousAttempts === "multiple";
    const hasSubstanceUse = formData.substanceUse.length > 0;
    const hasLowSupport = formData.socialSupport === "isolated";
    
    // Calcular probabilidad basada en factores de riesgo
    let probability = 0.2; // Base
    if (age < 30) probability += 0.3;
    if (hasMultipleAttempts) probability += 0.25;
    if (hasSubstanceUse) probability += 0.15;
    if (hasLowSupport) probability += 0.1;
    
    probability = Math.min(probability, 0.95);
    
    const riskLevel = probability > 0.7 ? "high" : probability > 0.4 ? "moderate" : "low";
    
    const result: PredictionResult = {
      probability: Math.round(probability * 100),
      riskLevel,
      timestamp: new Date().toISOString(),
      formData
    };

    onPredictionComplete(result);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="age">Edad</Label>
          </div>
          <Input
            id="age"
            type="number"
            placeholder="Edad del paciente"
            value={formData.age}
            onChange={(e) => updateFormData("age", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="gender">Sexo</Label>
          </div>
          <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar sexo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Masculino</SelectItem>
              <SelectItem value="female">Femenino</SelectItem>
              <SelectItem value="other">Otro</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefiero no decir</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="location">Ubicación</Label>
          </div>
          <Select value={formData.location} onValueChange={(value) => updateFormData("location", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar ubicación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urban">Urbana</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
              <SelectItem value="suburban">Suburbana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="method">Método del Intento</Label>
          </div>
          <Select value={formData.method} onValueChange={(value) => updateFormData("method", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar método" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overdose">Sobredosis</SelectItem>
              <SelectItem value="cutting">Cortes</SelectItem>
              <SelectItem value="hanging">Ahorcamiento</SelectItem>
              <SelectItem value="poisoning">Envenenamiento</SelectItem>
              <SelectItem value="other">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="previousAttempts">Intentos Previos</Label>
          </div>
          <Select value={formData.previousAttempts} onValueChange={(value) => updateFormData("previousAttempts", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Frecuencia de intentos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Ninguno</SelectItem>
              <SelectItem value="single">Un intento previo</SelectItem>
              <SelectItem value="multiple">Múltiples intentos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-4 w-4 text-medical-blue" />
          <Label>Antecedentes Psiquiátricos</Label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {["Depresión", "Ansiedad", "Trastorno Bipolar", "Esquizofrenia", "TEPT", "Abuso de Sustancias"].map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={condition}
                checked={formData.psychiatricHistory.includes(condition)}
                onCheckedChange={(checked) => updateArrayField("psychiatricHistory", condition, checked as boolean)}
              />
              <Label htmlFor={condition}>{condition}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="h-4 w-4 text-medical-blue" />
          <Label>Antecedentes Médicos</Label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {["Diabetes", "Hipertensión", "Dolor Crónico", "Cáncer", "Enfermedad Cardíaca", "Discapacidad"].map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={condition}
                checked={formData.medicalHistory.includes(condition)}
                onCheckedChange={(checked) => updateArrayField("medicalHistory", condition, checked as boolean)}
              />
              <Label htmlFor={condition}>{condition}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="employment">Situación Laboral</Label>
          </div>
          <Select value={formData.employment} onValueChange={(value) => updateFormData("employment", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar situación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employed">Empleado</SelectItem>
              <SelectItem value="unemployed">Desempleado</SelectItem>
              <SelectItem value="student">Estudiante</SelectItem>
              <SelectItem value="retired">Jubilado</SelectItem>
              <SelectItem value="disabled">Discapacitado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="education">Nivel Educativo</Label>
          </div>
          <Select value={formData.education} onValueChange={(value) => updateFormData("education", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar nivel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Primaria</SelectItem>
              <SelectItem value="secondary">Secundaria</SelectItem>
              <SelectItem value="university">Universidad</SelectItem>
              <SelectItem value="postgraduate">Postgrado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Home className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="livingSituation">Situación de Vivienda</Label>
          </div>
          <Select value={formData.livingSituation} onValueChange={(value) => updateFormData("livingSituation", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar situación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family">Con familia</SelectItem>
              <SelectItem value="alone">Solo</SelectItem>
              <SelectItem value="institutional">Institucional</SelectItem>
              <SelectItem value="homeless">Sin hogar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-medical-blue" />
            <Label htmlFor="socialSupport">Apoyo Social</Label>
          </div>
          <Select value={formData.socialSupport} onValueChange={(value) => updateFormData("socialSupport", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Nivel de apoyo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">Alto</SelectItem>
              <SelectItem value="moderate">Moderado</SelectItem>
              <SelectItem value="low">Bajo</SelectItem>
              <SelectItem value="isolated">Aislado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Uso de Sustancias</Label>
        <div className="grid md:grid-cols-3 gap-4">
          {["Alcohol", "Drogas Ilícitas", "Medicamentos no Prescritos"].map((substance) => (
            <div key={substance} className="flex items-center space-x-2">
              <Checkbox
                id={substance}
                checked={formData.substanceUse.includes(substance)}
                onCheckedChange={(checked) => updateArrayField("substanceUse", substance, checked as boolean)}
              />
              <Label htmlFor={substance}>{substance}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label htmlFor="triggers">Factores Desencadenantes</Label>
        <Textarea
          id="triggers"
          placeholder="Describa los factores o eventos que pudieron haber desencadenado el comportamiento suicida..."
          value={formData.triggers}
          onChange={(e) => updateFormData("triggers", e.target.value)}
          rows={4}
        />
      </div>

      <div className="space-y-4">
        <Label htmlFor="additionalNotes">Notas Adicionales</Label>
        <Textarea
          id="additionalNotes"
          placeholder="Observaciones adicionales del profesional..."
          value={formData.additionalNotes}
          onChange={(e) => updateFormData("additionalNotes", e.target.value)}
          rows={4}
        />
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Revise toda la información antes de generar la predicción. Los datos ingresados serán procesados 
          por el algoritmo de Stacking Classifier para determinar el nivel de riesgo.
        </AlertDescription>
      </Alert>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-medical-blue" />
            Formulario de Evaluación de Riesgo
          </CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Paso {currentStep} de {totalSteps}</span>
              <span>{Math.round(progress)}% completado</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-medical-blue hover:bg-medical-blue-dark"
              >
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={generatePrediction}
                className="flex items-center gap-2 bg-medical-gradient hover:opacity-90"
                disabled={!formData.age || !formData.gender}
              >
                <Brain className="h-4 w-4" />
                Generar Predicción
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionForm;