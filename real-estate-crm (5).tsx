import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Globe,
  Settings,
  LineChart,
  PieChart,
  BarChart,
  Map,
  Calendar,
  Timer,
  Bell,
  Plus 
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const InmobiliariaCRM = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  
  const [analyticsData] = useState({
    general: {
      visitas: 15780,
      leads: 234,
      conversion: 12.5,
      tiempoPromedio: '2:45'
    },
    porPortal: {
      idealista: {
        visitas: 8450,
        leads: 145,
        ctr: 3.2,
        conversion: 13.8
      },
      fotocasa: {
        visitas: 4890,
        leads: 67,
        ctr: 2.8,
        conversion: 11.2
      },
      pisos: {
        visitas: 2440,
        leads: 22,
        ctr: 2.1,
        conversion: 9.5
      }
    },
    comportamiento: {
      paginasMasVistas: [
        { pagina: 'Casa Centro', vistas: 1245 },
        { pagina: 'Ático Nuevo', vistas: 890 },
        { pagina: 'Chalet Jardín', vistas: 678 }
      ],
      tiempoPromedioPagina: [
        { pagina: 'Casa Centro', tiempo: '3:20' },
        { pagina: 'Ático Nuevo', tiempo: '2:45' },
        { pagina: 'Chalet Jardín', tiempo: '2:15' }
      ],
      tasaRebote: {
        total: 45.2,
        porDispositivo: {
          desktop: 42.1,
          mobile: 48.3,
          tablet: 44.7
        }
      }
    },
    adquisicion: {
      fuentes: [
        { nombre: 'Búsqueda Orgánica', sesiones: 5670, conversion: 14.2 },
        { nombre: 'Directo', sesiones: 3450, conversion: 11.8 },
        { nombre: 'Redes Sociales', sesiones: 2340, conversion: 9.5 },
        { nombre: 'Email', sesiones: 1230, conversion: 15.3 }
      ],
      dispositivos: {
        desktop: 45,
        mobile: 42,
        tablet: 13
      }
    },
    comportamientoUsuario: {
      flujoNavegacion: [
        { ruta: 'Inicio → Buscar → Detalle', porcentaje: 45 },
        { ruta: 'Inicio → Mapa → Detalle', porcentaje: 25 },
        { ruta: 'Buscar → Filtros → Detalle', porcentaje: 30 }
      ],
      interacciones: {
        clicks: 23450,
        scrolls: 45670,
        favoritos: 1234,
        compartidos: 567
      }
    }
  });

  // Analytics Dashboard Components
  const GeneralMetrics = () => (
    <div className="grid grid-cols-4 gap-4">
      {Object.entries(analyticsData.general).map(([key, value]) => (
        <Card key={key}>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const PortalPerformance = () => (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento por Portal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(analyticsData.porPortal).map(([portal, data]) => (
            <div key={portal} className="p-4 border rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium capitalize">{portal}</span>
                <span className="text-green-600">+{data.conversion}%</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Visitas</div>
                  <div className="font-medium">{data.visitas}</div>
                </div>
                <div>
                  <div className="text-gray-600">Leads</div>
                  <div className="font-medium">{data.leads}</div>
                </div>
                <div>
                  <div className="text-gray-600">CTR</div>
                  <div className="font-medium">{data.ctr}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const UserBehavior = () => (
    <Card>
      <CardHeader>
        <CardTitle>Comportamiento de Usuario</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="text-sm font-medium mb-2">Páginas más vistas</div>
            <div className="space-y-2">
              {analyticsData.comportamiento.paginasMasVistas.map(pagina => (
                <div key={pagina.pagina} className="flex justify-between">
                  <span className="text-sm">{pagina.pagina}</span>
                  <span className="font-medium">{pagina.vistas}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Tiempo promedio</div>
            <div className="space-y-2">
              {analyticsData.comportamiento.tiempoPromedioPagina.map(pagina => (
                <div key={pagina.pagina} className="flex justify-between">
                  <span className="text-sm">{pagina.pagina}</span>
                  <span className="font-medium">{pagina.tiempo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const AcquisitionMetrics = () => (
    <Card>
      <CardHeader>
        <CardTitle>Fuentes de Tráfico</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analyticsData.adquisicion.fuentes.map(fuente => (
            <div key={fuente.nombre} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{fuente.nombre}</div>
                <div className="text-sm text-gray-600">{fuente.sesiones} sesiones</div>
              </div>
              <div className="text-green-600">{fuente.conversion}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const DeviceMetrics = () => (
    <Card>
      <CardHeader>
        <CardTitle>Dispositivos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(analyticsData.adquisicion.dispositivos).map(([device, percentage]) => (
            <div key={device} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="capitalize">{device}</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const UserFlow = () => (
    <Card>
      <CardHeader>
        <CardTitle>Flujo de Navegación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analyticsData.comportamientoUsuario.flujoNavegacion.map(flujo => (
            <div key={flujo.ruta} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{flujo.ruta}</span>
                <span>{flujo.porcentaje}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${flujo.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Analytics</h1>
        </div>
        <nav className="mt-4">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Vista General' },
            { id: 'portals', icon: Globe, label: 'Portales' },
            { id: 'behavior', icon: LineChart, label: 'Comportamiento' },
            { id: 'acquisition', icon: BarChart, label: 'Adquisición' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full p-4 ${
                activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Últimos 30 días ▼
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Exportar Datos
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="space-y-6">
            <GeneralMetrics />
            
            <div className="grid grid-cols-2 gap-6">
              <PortalPerformance />
              <UserBehavior />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <AcquisitionMetrics />
              <DeviceMetrics />
            </div>
            
            <UserFlow />
          </div>
        </main>
      </div>
    </div>
  );
};

export default InmobiliariaCRM;