import { useEffect } from 'react';
import { useDriversStore } from '../store/driversStore';

export const useDrivers = () => {
  const { drivers, isLoading, error, fetchDrivers, removeDriver } = useDriversStore();

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  return { drivers, isLoading, error, removeDriver };
};
