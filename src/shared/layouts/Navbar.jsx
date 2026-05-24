import React from 'react';
import { Bell, Search, Menu, User } from 'lucide-react';
import { useAuthStore } from '../../app/store/authStore';
import { Button } from '../ui/Button';

export const Navbar = ({ onMenuClick }) => {
  const { user } = useAuthStore();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </Button>
          
          <div className="hidden md:flex relative group w-64 lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Buscar estudiantes, rutas..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-background"></span>
          </Button>
          
          <div className="h-8 w-px bg-slate-800 mx-1"></div>
          
          <div className="flex items-center gap-3 pl-2">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-white leading-none">{user?.name}</span>
              <span className="text-xs text-slate-500 mt-1">{user?.role}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 p-0.5 overflow-hidden">
              <img 
                src={user?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}`} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
