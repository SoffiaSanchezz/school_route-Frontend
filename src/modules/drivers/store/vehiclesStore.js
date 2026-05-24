import { create } from 'zustand';
import { vehiclesApi } from '../../../infrastructure/api/vehiclesApi';

export const useVehiclesStore = create((set) => ({
  vehicles: [],
  isLoading: false,
  error: null,

  fetchVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const vehicles = await vehiclesApi.getAll();
      set({ vehicles });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar vehículos' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
