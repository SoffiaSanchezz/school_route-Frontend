import { create } from 'zustand';
import { schoolsApi } from '../../../infrastructure/api/schoolsApi';

export const useSchoolsStore = create((set) => ({
  schools: [],
  isLoading: false,
  error: null,

  fetchSchools: async () => {
    set({ isLoading: true, error: null });
    try {
      const schools = await schoolsApi.getAll();
      set({ schools });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar colegios' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
