import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const StudentsPage = lazy(() => import('../pages/StudentsPage'));

export const studentsRoutes = [
  {
    path: 'students',
    element: (
      <Suspense fallback={<PageLoader />}>
        <StudentsPage />
      </Suspense>
    ),
  },
];
