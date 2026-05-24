import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const SchoolsPage = lazy(() => import('../pages/SchoolsPage'));

export const schoolsRoutes = [
  {
    path: 'schools',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SchoolsPage />
      </Suspense>
    ),
  },
];
