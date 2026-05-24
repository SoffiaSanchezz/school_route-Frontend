import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));

export const dashboardRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={<PageLoader />}>
        <DashboardPage />
      </Suspense>
    ),
  },
];
