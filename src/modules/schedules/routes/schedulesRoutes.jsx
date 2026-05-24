import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const SchedulesPage = lazy(() => import('../pages/SchedulesPage'));

export const schedulesRoutes = [
  {
    path: 'schedules',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SchedulesPage />
      </Suspense>
    ),
  },
];
