import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../../../shared/components/PageLoader';

const AttendancePage = lazy(() => import('../pages/AttendancePage'));

export const attendanceRoutes = [
  {
    path: 'attendance',
    element: (
      <Suspense fallback={<PageLoader />}>
        <AttendancePage />
      </Suspense>
    ),
  },
];
