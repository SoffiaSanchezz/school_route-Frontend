import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, User } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import { Badge } from '../../../shared/ui/Badge';

const stops = [
  { time: '06:00 AM', label: 'María Gómez', type: 'student', status: 'recogido', color: 'success' },
  { time: '06:05 AM', label: 'Juan Pérez', type: 'student', status: 'pendiente', color: 'warning' },
  { time: '06:12 AM', label: 'Lucas Miller', type: 'student', status: 'ausente', color: 'danger' },
  { time: '06:20 AM', label: 'Colegio San José', type: 'school', status: 'llegada', color: 'info' },
  { time: '06:40 AM', label: 'Colegio Cambridge', type: 'school', status: 'programado', color: 'muted' },
];

export const RouteTimeline = () => {
  return (
    <div className="relative pl-8 space-y-8">
      {/* Vertical Line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-slate-800 to-slate-900" />

      {stops.map((stop, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative flex items-start gap-4"
        >
          {/* Node Icon */}
          <div className={cn(
            "absolute -left-[25px] w-6 h-6 rounded-full border-4 border-background flex items-center justify-center z-10",
            stop.color === 'success' ? 'bg-success' :
            stop.color === 'warning' ? 'bg-warning' :
            stop.color === 'danger' ? 'bg-danger' :
            stop.color === 'info' ? 'bg-info' : 'bg-slate-700'
          )}>
            {stop.type === 'school' ? <Building2 size={10} className="text-white" /> : <User size={10} className="text-white" />}
          </div>

          <div className="flex-1 glass p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-primary font-bold">{stop.time}</span>
              <Badge variant={stop.color} className="uppercase text-[10px] tracking-wider">
                {stop.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                {stop.label}
              </h4>
              {stop.type === 'school' && <MapPin size={12} className="text-slate-500" />}
            </div>
            
            {index < stops.length - 1 && (
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: stop.status === 'recogido' ? '100%' : '0%' }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};


