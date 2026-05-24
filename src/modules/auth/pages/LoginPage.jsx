import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bus, Mail, Lock, Loader2 } from 'lucide-react';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../shared/ui/Card';
import { useAuthStore } from '../../../app/store/authStore';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

const LoginPage = () => {
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 mb-4 rotate-3">
            <Bus className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SchoolRoute</h1>
          <p className="text-slate-500 mt-2">Plataforma de gestión inteligente</p>
        </div>

        <Card className="border-slate-800/50 backdrop-blur-sm bg-card/80">
          <CardHeader>
            <CardTitle>Bienvenido de nuevo</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder al panel.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Correo Electrónico"
                placeholder="nombre@colegio.com"
                icon={Mail}
                error={errors.email?.message}
                {...register('email')}
              />
              <Input
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                icon={Lock}
                error={errors.password?.message}
                {...register('password')}
              />
              <Button 
                type="submit" 
                className="w-full h-12 text-base" 
                isLoading={isLoading}
              >
                Iniciar Sesión
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-slate-500 mt-8 text-sm">
          ¿Problemas para entrar? <a href="#" className="text-primary hover:underline font-medium">Contacta a soporte</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
