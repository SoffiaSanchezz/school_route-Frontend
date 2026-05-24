import { useEffect } from 'react';
import { useSchedulesStore } from '../store/schedulesStore';

export const useSchedules = () => {
  const { schedules, isLoading, error, fetchSchedules } = useSchedulesStore();

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  return { schedules, isLoading, error };
};
