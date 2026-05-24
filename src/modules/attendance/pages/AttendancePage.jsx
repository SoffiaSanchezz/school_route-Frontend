import React from 'react';
import { CheckCircle2, Circle, AlertCircle, Search, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../../../shared/ui/Table';
import { cn } from '../../../core/utils/cn';
import { useAttendance } from '../hooks/useAttendance';

const AttendancePage = () => {
  const { records, selectedDate, isLoading, markStatus } = useAttendance();

  const counts = {
    recogidos: records.filter((r) => r.status === 'Recogido').length,
    enCamino: records.filter((r) => r.status === 'En Camino').length,
    ausentes: records.filter((r) => r.status === 'Ausente').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Asistencia Diaria</h1>
          <p className="text-slate-400 mt-1">Control de recogida y entrega de estudiantes en tiempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm font-medium text-slate-300">
            <CalendarIcon size={16} className="text-primary" />
            {selectedDate}
          </div>
          <Button variant="outline">Descargar Reporte</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-success/5 border-success/20">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-success">{counts.recogidos}</span>
            <span className="text-xs text-slate-500 font-medium uppercase mt-1">Recogidos</span>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-primary">{counts.enCamino}</span>
            <span className="text-xs text-slate-500 font-medium uppercase mt-1">En Camino</span>
          </CardContent>
        </Card>
        <Card className="bg-danger/5 border-danger/20">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-danger">{counts.ausentes}</span>
            <span className="text-xs text-slate-500 font-medium uppercase mt-1">Ausentes</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-white">
              {records.length > 0 ? Math.round((counts.recogidos / records.length) * 100) : 0}%
            </span>
            <span className="text-xs text-slate-500 font-medium uppercase mt-1">Eficiencia</span>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Filtrar por estudiante o ruta..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">Cargando asistencia...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Estudiante</TableHead>
                  <TableHead>Ruta</TableHead>
                  <TableHead>Punto de Recogida</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-white">{item.student}</TableCell>
                    <TableCell>{item.route}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <AlertCircle size={12} className="text-slate-500" /> {item.stop}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-500 text-xs font-mono">{item.time}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {item.status === 'Recogido' && <CheckCircle2 size={16} className="text-success" />}
                        {item.status === 'En Camino' && <Circle size={16} className="text-primary animate-pulse" />}
                        {item.status === 'Ausente' && <AlertCircle size={16} className="text-danger" />}
                        <span className={cn(
                          'text-xs font-semibold',
                          item.status === 'Recogido' ? 'text-success' :
                          item.status === 'En Camino' ? 'text-primary' : 'text-danger'
                        )}>
                          {item.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-xs h-8" onClick={() => markStatus(item.id, 'Recogido')}>
                        Marcar <ChevronRight size={14} className="ml-1" />
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

export default AttendancePage;
