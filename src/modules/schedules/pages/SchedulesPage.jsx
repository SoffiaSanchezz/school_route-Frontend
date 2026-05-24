import React from 'react';
import { Plus, Clock, Building2, Route, Calendar, Filter, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../../../shared/ui/Table';
import { useSchedules } from '../hooks/useSchedules';

const SchedulesPage = () => {
  const { schedules, isLoading } = useSchedules();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Cronograma Logístico</h1>
          <p className="text-slate-400 mt-1">Planificación inteligente de horarios, colegios y rutas.</p>
        </div>
        <Button className="gap-2"><Plus size={18} /> Crear Horario</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Calendar size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Jornada Mañana</span>
            </div>
            <h3 className="text-2xl font-bold text-white">24 Horarios</h3>
            <p className="text-xs text-slate-500 mt-1">Inicia: 05:30 AM | Finaliza: 08:30 AM</p>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-info mb-2">
              <Clock size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Jornada Tarde</span>
            </div>
            <h3 className="text-2xl font-bold text-white">18 Horarios</h3>
            <p className="text-xs text-slate-500 mt-1">Inicia: 02:30 PM | Finaliza: 05:30 PM</p>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-success mb-2">
              <Building2 size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Cumplimiento</span>
            </div>
            <h3 className="text-2xl font-bold text-white">99.2%</h3>
            <p className="text-xs text-slate-500 mt-1">Basado en los últimos 7 días</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass border-white/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Horarios Programados</CardTitle>
            <Button variant="outline" size="sm" className="gap-2"><Filter size={14} /> Filtros</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">Cargando horarios...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hora</TableHead>
                  <TableHead>Colegio</TableHead>
                  <TableHead>Ruta</TableHead>
                  <TableHead>Operación</TableHead>
                  <TableHead>Jornada</TableHead>
                  <TableHead>Estudiantes</TableHead>
                  <TableHead className="text-right">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.map((schedule) => (
                  <TableRow key={schedule.id} className="group cursor-pointer">
                    <TableCell><div className="font-mono font-bold text-primary">{schedule.time}</div></TableCell>
                    <TableCell className="font-medium text-white">{schedule.school}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2"><Route size={14} className="text-slate-500" />{schedule.route}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={schedule.type === 'Recogida' ? 'primary' : 'info'}>{schedule.type}</Badge>
                    </TableCell>
                    <TableCell>{schedule.shift}</TableCell>
                    <TableCell><div className="font-semibold text-white">{schedule.students}</div></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Editar <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SchedulesPage;
