import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { 
  Users, TrendingUp, Brain, Target, Calendar, MapPin, 
  Activity, AlertTriangle, User, GraduationCap, Briefcase 
} from "lucide-react";

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState("6m");
  const [locationFilter, setLocationFilter] = useState("all");

  // Mock data for K-Means clusters
  const clusters = [
    {
      id: 1,
      name: "Jóvenes con Múltiples Factores de Riesgo",
      ageRange: "18-30 años",
      avgAge: 24,
      size: 198,
      characteristics: ["Consumo sustancias", "Desempleo", "Métodos letales"],
      remissionRate: 89,
      avgStay: 7.2,
      color: "#ef4444"
    },
    {
      id: 2,
      name: "Adultos con Comorbilidades Médicas",
      ageRange: "35-55 años",
      avgAge: 45,
      size: 164,
      characteristics: ["Enfermedades crónicas", "Depresión", "Dolor crónico"],
      remissionRate: 67,
      avgStay: 4.8,
      color: "#f59e0b"
    },
    {
      id: 3,
      name: "Adultos Mayores con Aislamiento Social",
      ageRange: "60+ años",
      avgAge: 68,
      size: 125,
      characteristics: ["Pérdidas recientes", "Aislamiento", "Métodos letales"],
      remissionRate: 78,
      avgStay: 9.1,
      color: "#10b981"
    }
  ];

  const totalCases = clusters.reduce((sum, cluster) => sum + cluster.size, 0);
  const avgRemission = Math.round(clusters.reduce((sum, cluster) => sum + cluster.remissionRate, 0) / clusters.length);

  // Trends data
  const trendsData = [
    { month: "Ene", cases: 72, remissions: 61 },
    { month: "Feb", cases: 85, remissions: 68 },
    { month: "Mar", cases: 91, remissions: 75 },
    { month: "Abr", cases: 78, remissions: 62 },
    { month: "May", cases: 82, remissions: 67 },
    { month: "Jun", cases: 79, remissions: 64 }
  ];

  // Triggers data
  const triggersData = [
    { trigger: "Pérdida trabajo", count: 124 },
    { trigger: "Ruptura relación", count: 98 },
    { trigger: "Muerte familiar", count: 87 },
    { trigger: "Problemas financieros", count: 76 },
    { trigger: "Enfermedad crónica", count: 65 }
  ];

  // Demographics data
  const ageData = [
    { age: "18-30", value: 198, color: "#3b82f6" },
    { age: "31-45", value: 132, color: "#10b981" },
    { age: "46-60", value: 98, color: "#f59e0b" },
    { age: "60+", value: 59, color: "#ef4444" }
  ];

  const methodsByGender = [
    { method: "Sobredosis", male: 45, female: 67 },
    { method: "Cortes", male: 23, female: 89 },
    { method: "Ahorcamiento", male: 34, female: 12 },
    { method: "Envenenamiento", male: 18, female: 31 }
  ];

  // Geographic data
  const geographicData = [
    { region: "Norte", cases: 142, riskLevel: "Alto", color: "#ef4444" },
    { region: "Sur", cases: 98, riskLevel: "Moderado", color: "#f59e0b" },
    { region: "Este", cases: 156, riskLevel: "Alto", color: "#ef4444" },
    { region: "Oeste", cases: 91, riskLevel: "Bajo", color: "#10b981" }
  ];

  const locationRiskData = [
    { location: "Urbana", risk: 0.72, cases: 298 },
    { location: "Rural", risk: 0.45, cases: 134 },
    { location: "Suburbana", risk: 0.58, cases: 55 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard de Análisis</h1>
          <p className="text-muted-foreground">Perfiles K-Means y estadísticas poblacionales</p>
        </div>
        <div className="flex gap-4">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 mes</SelectItem>
              <SelectItem value="3m">3 meses</SelectItem>
              <SelectItem value="6m">6 meses</SelectItem>
              <SelectItem value="1y">1 año</SelectItem>
            </SelectContent>
          </Select>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="urban">Urbana</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
              <SelectItem value="suburban">Suburbana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-medical-blue mx-auto mb-2" />
            <div className="text-3xl font-bold text-medical-blue">{totalCases}</div>
            <div className="text-sm text-muted-foreground">Total Casos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-medical-green mx-auto mb-2" />
            <div className="text-3xl font-bold text-medical-green">{avgRemission}%</div>
            <div className="text-sm text-muted-foreground">Remisión Promedio</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-medical-blue mx-auto mb-2" />
            <div className="text-3xl font-bold text-medical-blue">3</div>
            <div className="text-sm text-muted-foreground">Clústeres K-Means</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 text-medical-green mx-auto mb-2" />
            <div className="text-3xl font-bold text-medical-green">96%</div>
            <div className="text-sm text-muted-foreground">Precisión IA</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="profiles" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profiles">Perfiles de Riesgo</TabsTrigger>
          <TabsTrigger value="trends">Tendencias</TabsTrigger>
          <TabsTrigger value="demographics">Demografía</TabsTrigger>
          <TabsTrigger value="geography">Geografía</TabsTrigger>
        </TabsList>

        {/* Risk Profiles Tab */}
        <TabsContent value="profiles" className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Clústeres K-Means Identificados</h3>
            <div className="space-y-6">
              {clusters.map((cluster) => (
                <Card key={cluster.id} className="border-l-4" style={{ borderLeftColor: cluster.color }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{cluster.name}</CardTitle>
                        <p className="text-muted-foreground">
                          {cluster.ageRange} • Promedio: {cluster.avgAge} años • {cluster.size} casos
                        </p>
                      </div>
                      <Badge style={{ backgroundColor: cluster.color, color: "white" }}>
                        Clúster {cluster.id}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Características Principales</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {cluster.characteristics.map((char, index) => (
                            <li key={index}>• {char}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tasa de Remisión</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{cluster.remissionRate}%</span>
                            <span className="text-muted-foreground">de {cluster.size} casos</span>
                          </div>
                          <Progress value={cluster.remissionRate} className="h-2" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Estancia Promedio</h4>
                        <div className="text-2xl font-bold" style={{ color: cluster.color }}>
                          {cluster.avgStay} días
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Evolución de Casos vs Remisiones</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="cases" stroke="#3b82f6" name="Casos" />
                    <Line type="monotone" dataKey="remissions" stroke="#10b981" name="Remisiones" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Factores Desencadenantes Más Comunes</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={triggersData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="trigger" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Edad</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={ageData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ age, value }) => `${age}: ${value}`}
                    >
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métodos por Género</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={methodsByGender}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="method" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#3b82f6" name="Masculino" />
                    <Bar dataKey="female" fill="#ec4899" name="Femenino" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Geography Tab */}
        <TabsContent value="geography" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribución Regional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicData.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: region.color }}
                        />
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{region.cases} casos</span>
                        <Badge 
                          variant="outline" 
                          style={{ 
                            borderColor: region.color, 
                            color: region.color 
                          }}
                        >
                          {region.riskLevel}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Correlación Ubicación-Riesgo</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={locationRiskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cases" name="Casos" />
                    <YAxis dataKey="risk" name="Riesgo" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === "risk" ? `${(value as number * 100).toFixed(0)}%` : value,
                        name === "risk" ? "Nivel de Riesgo" : "Casos"
                      ]}
                      labelFormatter={(label) => locationRiskData.find(d => d.cases === label)?.location}
                    />
                    <Scatter dataKey="risk" fill="#3b82f6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;