import React from 'react';
import { 
  Plus, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  Route,
  Navigation,
  Edit2,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';

const mockRoutes = [
  { id: 'R-101', name: 'Ruta Norte A-12', driver: 'Carlos Rodriguez', students: 24, stops: 12, startTime: '06:30 AM', status: 'En Operación' },
  { id: 'R-105', name: 'Ruta Sur B-05', driver: 'Marta Gomez', students: 18, stops: 8, startTime: '06:45 AM', status: 'Inactiva' },
  { id: 'R-108', name: 'Ruta Centro C-03', driver: 'Juan Perez', students: 22, stops: 15, startTime: '06:15 AM', status: 'Completada' },
];

const RoutesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Rutas</h1>
          <p className="text-slate-400 mt-1">Optimización y seguimiento de recorridos escolares.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={18} />
          Crear Nueva Ruta
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockRoutes.map((route) => (
          <Card key={route.id} className="group hover:border-primary/40 transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Route size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg">{route.name}</CardTitle>
                  <CardDescription>{route.id}</CardDescription>
                </div>
              </div>
              <Badge variant={
                route.status === 'En Operación' ? 'primary' : 
                route.status === 'Completada' ? 'success' : 'default'
              }>
                {route.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users size={16} className="text-slate-500" />
                  <span>{route.students} Estudiantes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} className="text-slate-500" />
                  <span>{route.stops} Paradas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock size={16} className="text-slate-500" />
                  <span>Inicia: {route.startTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Navigation size={16} className="text-slate-500" />
                  <span>Conductor: {route.driver}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8">Ver Mapa</Button>
                  <Button variant="outline" size="sm" className="h-8">Estudiantes</Button>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit2 size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-danger hover:bg-danger/10">
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;
