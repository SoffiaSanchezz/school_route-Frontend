import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Route, 
  Calendar, 
  UserSquare2, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Building2,
  Clock,
  Car,
  Bus
} from 'lucide-react';
import { cn } from '../../core/utils/cn';
import { useAuthStore } from '../../app/store/authStore';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Building2, label: 'Colegios', path: '/schools' },
  { icon: Users, label: 'Estudiantes', path: '/students' },
  { icon: Route, label: 'Rutas', path: '/routes' },
  { icon: Clock, label: 'Horarios', path: '/schedules' },
  { icon: UserSquare2, label: 'Conductores', path: '/drivers' },
  { icon: Car, label: 'Vehículos', path: '/vehicles' },
  { icon: Calendar, label: 'Asistencia', path: '/attendance' },
  { icon: BarChart3, label: 'Reportes', path: '/reports' },
];

export const Sidebar = ({ isMobile = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const logout = useAuthStore(state => state.logout);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className={cn(
        "bg-card/50 backdrop-blur-xl border-r border-white/5 z-50 flex flex-col transition-all duration-300 ease-in-out",
        isMobile ? "h-full w-full" : "fixed left-0 top-0 h-screen hidden md:flex"
      )}
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        {(!isCollapsed || isMobile) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Bus className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Logistics<span className="text-primary text-xl">.</span>
            </span>
          </motion.div>
        )}
        {(isCollapsed && !isMobile) && (
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
             <Bus className="text-white" size={20} />
          </div>
        )}
        {!isMobile && (
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-10 w-6 h-6 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <NavItem key={item.path} {...item} isCollapsed={isCollapsed && !isMobile} />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-white/5 space-y-1.5">
        <NavItem icon={Settings} label="Configuración" path="/settings" isCollapsed={isCollapsed && !isMobile} />
        <button
          onClick={logout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-danger/10 hover:text-danger transition-all group",
            (isCollapsed && !isMobile) && "justify-center"
          )}
        >
          <LogOut size={20} />
          {(!isCollapsed || isMobile) && <span className="font-medium">Cerrar Sesión</span>}
        </button>
      </div>
    </motion.aside>
  );
};

const NavItem = ({ icon: Icon, label, path, isCollapsed }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative",
        isActive 
          ? "bg-primary/10 text-primary" 
          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200",
        isCollapsed && "justify-center"
      )}
    >
      <Icon size={20} />
      {!isCollapsed && (
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-medium"
        >
          {label}
        </motion.span>
      )}
      {isCollapsed && (
        <div className="absolute left-14 bg-slate-800 text-white px-2 py-1 rounded text-xs invisible group-hover:visible whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </NavLink>
  );
};
