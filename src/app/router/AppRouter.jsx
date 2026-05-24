import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';

import { authRoutes } from '../../modules/auth/routes/authRoutes';
import { dashboardRoutes } from '../../modules/dashboard/routes/dashboardRoutes';
import { studentsRoutes } from '../../modules/students/routes/studentsRoutes';
import { driversRoutes } from '../../modules/drivers/routes/driversRoutes';
import { schoolsRoutes } from '../../modules/schools/routes/schoolsRoutes';
import { schedulesRoutes } from '../../modules/schedules/routes/schedulesRoutes';
import { attendanceRoutes } from '../../modules/attendance/routes/attendanceRoutes';

const router = createBrowserRouter([
  ...authRoutes,
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      ...dashboardRoutes,
      ...schoolsRoutes,
      ...studentsRoutes,
      ...driversRoutes,
      ...schedulesRoutes,
      ...attendanceRoutes,
      {
        path: 'routes',
        element: <div className="p-8 text-2xl font-bold text-white">Rutas (Próximamente)</div>,
      },
      {
        path: 'reports',
        element: <div className="p-8 text-2xl font-bold text-white">Reportes (Próximamente)</div>,
      },
      {
        path: 'settings',
        element: <div className="p-8 text-2xl font-bold text-white">Configuración (Próximamente)</div>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
