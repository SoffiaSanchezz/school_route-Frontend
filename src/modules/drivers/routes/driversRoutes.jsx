import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const DriversPage = lazy(() => import('../pages/DriversPage'));
const VehiclesPage = lazy(() => import('../pages/VehiclesPage'));

export const driversRoutes = [
  {
    path: 'drivers',
    element: (
      <Suspense fallback={<PageLoader />}>
        <DriversPage />
      </Suspense>
    ),
  },
  {
    path: 'vehicles',
    element: (
      <Suspense fallback={<PageLoader />}>
        <VehiclesPage />
      </Suspense>
    ),
  },
];
