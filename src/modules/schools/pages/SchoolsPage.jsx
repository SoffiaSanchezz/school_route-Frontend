import React from 'react';
import { Building2, MapPin, Plus, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { motion } from 'framer-motion';
import { useSchools } from '../hooks/useSchools';

const SchoolsPage = () => {
  const { schools, isLoading } = useSchools();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Gestión de Colegios</h1>
          <p className="text-slate-400 mt-1">Administra los centros educativos vinculados a la red de transporte.</p>
        </div>
        <Button className="flex items-center gap-2"><Plus size={18} /> Vincular Colegio</Button>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-slate-500">Cargando colegios...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass glass-hover border-white/5 group h-full flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Building2 size={24} />
                  </div>
                  <Badge variant={school.status === 'Active' ? 'success' : 'warning'}>{school.status}</Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{school.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1.5"><MapPin size={14} /> {school.address}</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Estudiantes</p>
                      <p className="text-lg font-bold text-white">{school.students}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Rutas</p>
                      <p className="text-lg font-bold text-white">{school.routes}</p>
                    </div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full justify-between group/btn">
                    Ver Detalles <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SchoolsPage;
