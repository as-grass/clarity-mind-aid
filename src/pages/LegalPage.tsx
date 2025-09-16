import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Scale, AlertTriangle, Shield, Brain, FileText, Users, Phone, Mail } from "lucide-react";

const LegalPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Critical Disclaimer */}
      <Alert className="border-red-500 bg-red-50 text-red-900">
        <AlertTriangle className="h-5 w-5" />
        <AlertDescription className="text-base font-medium">
          <strong>ADVERTENCIA CRÍTICA:</strong> Esta herramienta de inteligencia artificial está diseñada 
          ÚNICAMENTE para apoyo en decisiones clínicas y NO reemplaza el juicio profesional médico, 
          la evaluación clínica directa, ni las decisiones de tratamiento.
        </AlertDescription>
      </Alert>

      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Scale className="h-8 w-8 text-medical-blue" />
          <h1 className="text-3xl font-bold">Información Legal y Ética</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descargos de responsabilidad, limitaciones del sistema y directrices para uso profesional
        </p>
      </div>

      {/* Section 1: Purpose and Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-medical-blue" />
            1. Propósito y Limitaciones del Sistema
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Propósito Técnico</h4>
            <p className="text-sm text-muted-foreground">
              MentalCare AI utiliza algoritmos de Stacking Classifier y análisis K-Means para proporcionar 
              estimaciones estadísticas de riesgo suicida basadas en factores demográficos, clínicos y sociales. 
              El sistema ha sido entrenado con datos históricos y validado con métricas de 96% F1-Score y 100% Recall.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Limitaciones Fundamentales</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• No considera el contexto clínico completo ni factores situacionales únicos</li>
              <li>• Los resultados son probabilísticos y no determinísticos</li>
              <li>• Puede contener sesgos inherentes a los datos de entrenamiento</li>
              <li>• No evalúa riesgo inmediato ni crisis agudas</li>
              <li>• Requiere interpretación profesional calificada</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Medical Responsibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-medical-blue" />
            2. Responsabilidad Médica y Profesional
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Obligaciones del Profesional</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Mantener supervisión clínica directa en todas las decisiones de tratamiento</li>
              <li>• Integrar resultados de IA con evaluación clínica comprehensiva</li>
              <li>• Aplicar juicio profesional independiente en todas las recomendaciones</li>
              <li>• Seguir protocolos institucionales y guías clínicas establecidas</li>
              <li>• Documentar apropiadamente el uso de herramientas de apoyo tecnológico</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Decisiones Críticas</h4>
            <p className="text-sm text-muted-foreground">
              Las decisiones sobre hospitalización, medicación, restricciones de libertad, y planes de seguridad 
              DEBEN basarse en evaluación clínica directa y no pueden delegarse a sistemas automatizados.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Privacy and Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-medical-blue" />
            3. Privacidad y Protección de Datos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Cumplimiento HIPAA</h4>
            <p className="text-sm text-muted-foreground">
              El sistema maneja información de salud protegida (PHI) bajo regulaciones HIPAA. Los datos 
              del paciente son procesados de forma segura y no se almacenan permanentemente sin 
              consentimiento explícito del paciente.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Derechos del Paciente</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Derecho a conocer el uso de herramientas de IA en su evaluación</li>
              <li>• Derecho a solicitar evaluación exclusivamente humana</li>
              <li>• Derecho a acceder y corregir información procesada</li>
              <li>• Derecho a rechazar el uso de sistemas automatizados</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-medical-blue" />
            4. Especificaciones Técnicas y Sesgos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Métricas de Validación</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>F1-Score:</strong> 96% - Equilibrio entre precisión y recall
              </div>
              <div>
                <strong>Recall:</strong> 100% - Detección de casos positivos verdaderos
              </div>
              <div>
                <strong>Especificidad:</strong> 92% - Identificación de casos negativos verdaderos
              </div>
              <div>
                <strong>Clústeres K-Means:</strong> 3 perfiles optimizados de riesgo
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sesgos Potenciales</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Sesgo demográfico: Mayor representación de ciertos grupos etarios</li>
              <li>• Sesgo geográfico: Datos principalmente de entornos urbanos</li>
              <li>• Sesgo temporal: Modelos entrenados con datos históricos específicos</li>
              <li>• Sesgo de confirmación: Tendencia a confirmar patrones existentes</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Liability Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-medical-blue" />
            5. Limitación de Responsabilidad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              Los desarrolladores y distribuidores de MentalCare AI no asumen responsabilidad por:
            </p>
            <ul className="space-y-1 ml-4">
              <li>• Decisiones clínicas basadas total o parcialmente en resultados del sistema</li>
              <li>• Resultados falsos positivos o falsos negativos</li>
              <li>• Interpretación incorrecta de probabilidades de riesgo</li>
              <li>• Fallos técnicos o interrupciones del servicio</li>
              <li>• Consecuencias derivadas del uso inapropiado del sistema</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Professional Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-medical-blue" />
            6. Directrices para Uso Profesional
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Usuarios Autorizados</h4>
            <p className="text-sm text-muted-foreground">
              Este sistema está destinado exclusivamente para profesionales licenciados en salud mental: 
              psiquiatras, psicólogos clínicos, trabajadores sociales clínicos, y enfermeros especializados 
              en salud mental con credenciales verificadas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contextos Apropiados de Uso</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Evaluaciones de rutina en consulta ambulatoria</li>
              <li>• Triaje inicial en servicios de emergencia</li>
              <li>• Seguimiento longitudinal de pacientes conocidos</li>
              <li>• Investigación clínica con protocolos aprobados</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Contact and Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-medical-blue" />
            7. Contacto y Soporte
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Soporte Técnico</h4>
              <p className="text-muted-foreground">
                Para problemas técnicos, fallos del sistema, o preguntas sobre especificaciones.
              </p>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>tech-support@mentalcare.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1-800-MENTAL-AI</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ética y Cumplimiento</h4>
              <p className="text-muted-foreground">
                Para consultas sobre uso ético, sesgos del modelo, o cumplimiento regulatorio.
              </p>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ethics@mentalcare.ai</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Crisis y Emergencias</h4>
              <p className="text-muted-foreground">
                Para situaciones de crisis, contacte servicios de emergencia locales.
              </p>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>911 (Emergencias)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>988 (Línea Crisis Suicida)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 8: Updates and Versions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-medical-blue" />
            8. Actualizaciones y Versiones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Control de Versiones</h4>
              <p className="text-sm text-muted-foreground">
                Este documento y el sistema MentalCare AI se actualizan periódicamente. Los usuarios 
                son responsables de utilizar la versión más reciente y revisar actualizaciones legales.
              </p>
            </div>
            <Separator />
            <div className="text-center text-sm text-muted-foreground">
              <p><strong>Versión del Sistema:</strong> MentalCare AI v2.1.0</p>
              <p><strong>Última Actualización Legal:</strong> 15 de Septiembre, 2024</p>
              <p><strong>Próxima Revisión Programada:</strong> 15 de Marzo, 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Disclaimer */}
      <Alert className="border-medical-blue/20 bg-medical-blue/5">
        <Brain className="h-4 w-4" />
        <AlertDescription>
          Al utilizar MentalCare AI, usted acepta estos términos y reconoce que ha leído y comprende 
          las limitaciones del sistema. El uso continuado constituye aceptación de futuras actualizaciones 
          a estos términos legales.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default LegalPage;