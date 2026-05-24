import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const LoginPage = lazy(() => import('../pages/LoginPage'));

export const authRoutes = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    ),
  },
];
