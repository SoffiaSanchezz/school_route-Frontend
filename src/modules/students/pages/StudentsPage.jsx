import React, { useState } from 'react';
import { Search, Filter, Plus, Building2, Clock, User, Phone, MoreVertical, ChevronDown, ChevronUp, MapPin, Route } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../core/utils/cn';
import { useStudents } from '../hooks/useStudents';

const StudentsPage = () => {
  const { schoolsWithStudents, isLoading } = useStudents();
  const [expandedSchools, setExpandedSchools] = useState([]);

  const toggleSchool = (id) => {
    setExpandedSchools((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  if (isLoading) return <div className="p-8 text-center text-slate-500">Cargando estudiantes...</div>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Directorio Logístico</h1>
          <p className="text-slate-400 mt-1">Gestión de estudiantes agrupados por colegio y horarios de operación.</p>
        </div>
        <Button className="gap-2"><Plus size={18} /> Nuevo Estudiante</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre, acudiente o dirección..."
            className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <Button variant="outline" className="gap-2"><Filter size={18} /> Filtros Avanzados</Button>
      </div>

      <div className="space-y-6">
        {schoolsWithStudents.map((school) => (
          <div key={school.id} className="space-y-4">
            <button
              onClick={() => toggleSchool(school.id)}
              className="w-full flex items-center justify-between p-4 bg-slate-900/40 rounded-2xl border border-white/5 hover:bg-slate-900/60 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Building2 size={20} /></div>
                <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{school.name}</h2>
                <Badge variant="default" className="ml-2">
                  {school.schedules.reduce((acc, s) => acc + s.students.length, 0)} Estudiantes
                </Badge>
              </div>
              {expandedSchools.includes(school.id) ? <ChevronUp /> : <ChevronDown />}
            </button>

            <AnimatePresence>
              {expandedSchools.includes(school.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pl-4 md:pl-10 space-y-8 border-l border-slate-800 ml-6"
                >
                  {school.schedules.map((schedule) => (
                    <div key={schedule.id} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-slate-800 rounded-lg text-slate-400"><Clock size={16} /></div>
                        <span className="font-mono text-sm font-bold text-slate-400">{schedule.time}</span>
                        <div className="h-px flex-1 bg-slate-800" />
                        <Badge variant="primary" className="uppercase text-[10px]">{schedule.type}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {schedule.students.map((student) => (
                          <motion.div
                            key={student.id}
                            whileHover={{ y: -4 }}
                            className="glass p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-2xl rounded-full -mr-8 -mt-8" />
                            <div className="flex justify-between items-start mb-4">
                              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-primary font-bold text-lg">
                                {student.name.charAt(0)}
                              </div>
                              <Badge variant={student.status === 'Recogido' ? 'success' : student.status === 'Pendiente' ? 'warning' : 'danger'}>
                                {student.status}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{student.name}</h3>
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center gap-2 text-xs text-slate-400"><Route size={14} className="text-primary" /><span>{student.route}</span></div>
                              <div className="flex items-center gap-2 text-xs text-slate-400"><MapPin size={14} className="text-slate-500" /><span className="truncate">{student.address}</span></div>
                              <div className="flex items-center gap-2 text-xs text-slate-400"><User size={14} className="text-slate-500" /><span>{student.guardian}</span></div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end gap-2">
                              <Button variant="ghost" className="p-2 h-auto text-slate-500 hover:text-white"><Phone size={16} /></Button>
                              <Button variant="ghost" className="p-2 h-auto text-slate-500 hover:text-white"><MoreVertical size={16} /></Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
