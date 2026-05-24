import React from 'react';
import { Plus, Truck, Activity, Gauge, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { motion } from 'framer-motion';
import { useVehicles } from '../hooks/useVehicles';

const VehiclesPage = () => {
  const { vehicles, isLoading } = useVehicles();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Flota de Vehículos</h1>
          <p className="text-slate-400 mt-1">Control técnico, capacidad y estado de la flota operativa.</p>
        </div>
        <Button className="gap-2"><Plus size={18} /> Registrar Vehículo</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary w-fit mb-4"><Truck size={20} /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Vehículos</p>
            <h3 className="text-2xl font-bold text-white mt-1">{vehicles.length} Unidades</h3>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="p-3 bg-success/10 rounded-2xl text-success w-fit mb-4"><Activity size={20} /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Disponibilidad</p>
            <h3 className="text-2xl font-bold text-white mt-1">92%</h3>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="p-3 bg-info/10 rounded-2xl text-info w-fit mb-4"><Gauge size={20} /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ocupación Promedio</p>
            <h3 className="text-2xl font-bold text-white mt-1">84%</h3>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="p-3 bg-warning/10 rounded-2xl text-warning w-fit mb-4"><ShieldCheck size={20} /></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mantenimientos</p>
            <h3 className="text-2xl font-bold text-white mt-1">2 Pendientes</h3>
          </CardContent>
        </Card>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-slate-500">Cargando vehículos...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass glass-hover border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{vehicle.model}</CardTitle>
                      <CardDescription className="font-mono text-primary font-bold">{vehicle.plate}</CardDescription>
                    </div>
                    <Badge variant={vehicle.status === 'Operativo' ? 'success' : vehicle.status === 'En Ruta' ? 'primary' : 'warning'}>
                      {vehicle.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Ocupación</span>
                      <span className="text-white font-bold">{vehicle.students} / {vehicle.capacity}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${(vehicle.students / vehicle.capacity) * 100}%` }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Combustible</p>
                      <p className="text-sm font-bold text-white">{vehicle.fuel}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Próximo Mantenimiento</p>
                      <p className="text-sm font-bold text-white">{vehicle.maintenance}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">Historial</Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">Técnico</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehiclesPage;
