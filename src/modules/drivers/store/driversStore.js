import { create } from 'zustand';
import { driversApi } from '../../../infrastructure/api/driversApi';

export const useDriversStore = create((set) => ({
  drivers: [],
  isLoading: false,
  error: null,

  fetchDrivers: async () => {
    set({ isLoading: true, error: null });
    try {
      const drivers = await driversApi.getAll();
      set({ drivers });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar conductores' });
    } finally {
      set({ isLoading: false });
    }
  },

  removeDriver: async (id) => {
    await driversApi.remove(id);
    set((state) => ({ drivers: state.drivers.filter((d) => d.id !== id) }));
  },
}));
