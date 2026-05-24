import { create } from 'zustand';
import { schedulesApi } from '../../../infrastructure/api/schedulesApi';

export const useSchedulesStore = create((set) => ({
  schedules: [],
  isLoading: false,
  error: null,

  fetchSchedules: async () => {
    set({ isLoading: true, error: null });
    try {
      const schedules = await schedulesApi.getAll();
      set({ schedules });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar horarios' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
