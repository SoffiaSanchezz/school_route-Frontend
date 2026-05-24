import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Bus, 
  Building2, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Car,
  AlertCircle,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { RouteTimeline } from '../components/RouteTimeline';
import { cn } from '../../../core/utils/cn';

const stats = [
  { label: 'Rutas en Progreso', value: '18', icon: Activity, color: 'text-primary', trend: '+2' },
  { label: 'Colegios Cubiertos', value: '12', icon: Building2, color: 'text-info', trend: '100%' },
  { label: 'Conductores Activos', value: '24', icon: Users, color: 'text-success', trend: 'Online' },
  { label: 'Ocupación Flota', value: '84%', icon: Car, color: 'text-warning', trend: 'Óptima' },
];

const pendingStudents = [
  { id: 1, name: 'Emma Wilson', school: 'Colegio Cambridge', time: '06:40 AM', stop: 'Calle 127 #45-12' },
  { id: 2, name: 'Noah Garcia', school: 'Colegio San José', time: '06:45 AM', stop: 'Carrera 15 #80-22' },
];

const DashboardPage = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Control de Logística
          </h1>
          <p className="text-slate-400 mt-1 flex items-center gap-2">
            <Activity size={16} className="text-primary animate-pulse" />
            Operación activa: 14 rutas en movimiento
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" className="px-3 py-1">
            Sistema Online
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass glass-hover border-white/5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
              <CardContent className="p-6 relative">
                <div className="flex justify-between items-start">
                  <div className={cn("p-3 rounded-2xl bg-slate-900/50", stat.color)}>
                    <stat.icon size={22} />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded-full uppercase">
                    {stat.trend}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-white mt-1 tracking-tight">
                    {stat.value}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Route Timeline Section */}
        <Card className="lg:col-span-2 glass border-white/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Timeline de Ruta Activa</CardTitle>
              <CardDescription>Seguimiento en tiempo real: Ruta Norte A-12</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              Ver Mapa <ArrowUpRight size={14} />
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <RouteTimeline />
          </CardContent>
        </Card>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          <Card className="glass border-white/5">
            <CardHeader>
              <CardTitle className="text-lg">Próximas Recogidas</CardTitle>
              <CardDescription>Estudiantes pendientes en los próximos 15 min.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingStudents.map((student) => (
                <div key={student.id} className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-primary font-bold">{student.time}</span>
                    <Badge variant="warning" className="text-[10px]">Pendiente</Badge>
                  </div>
                  <h4 className="font-semibold text-white text-sm">{student.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Building2 size={10} /> {student.school}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <MapPin size={10} /> {student.stop}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/20 to-blue-600/5 border-primary/20">
            <CardContent className="p-6">
              <h4 className="text-white font-bold flex items-center gap-2">
                <AlertCircle size={18} className="text-primary" />
                Aviso Operativo
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Se reporta tráfico pesado en la Autopista Norte. Las rutas A-12 y B-05 presentan un retraso estimado de 10 minutos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
