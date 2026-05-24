import { create } from 'zustand';
import { studentsApi } from '../../../infrastructure/api/studentsApi';

export const useStudentsStore = create((set) => ({
  schoolsWithStudents: [],
  isLoading: false,
  error: null,

  fetchStudents: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await studentsApi.getGroupedBySchool();
      set({ schoolsWithStudents: data });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar estudiantes' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
