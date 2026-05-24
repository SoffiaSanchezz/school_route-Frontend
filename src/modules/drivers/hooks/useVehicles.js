import { useEffect } from 'react';
import { useVehiclesStore } from '../store/vehiclesStore';

export const useVehicles = () => {
  const { vehicles, isLoading, error, fetchVehicles } = useVehiclesStore();

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return { vehicles, isLoading, error };
};
