import { create } from 'zustand';
import { attendanceApi } from '../../../infrastructure/api/attendanceApi';

export const useAttendanceStore = create((set) => ({
  records: [],
  selectedDate: new Date().toLocaleDateString(),
  isLoading: false,
  error: null,

  setDate: (date) => set({ selectedDate: date }),

  fetchAttendance: async (date) => {
    set({ isLoading: true, error: null });
    try {
      const records = await attendanceApi.getByDate(date);
      set({ records });
    } catch (err) {
      set({ error: err?.message ?? 'Error al cargar asistencia' });
    } finally {
      set({ isLoading: false });
    }
  },

  markStatus: async (id, status) => {
    await attendanceApi.markStatus(id, status);
    set((state) => ({
      records: state.records.map((r) => (r.id === id ? { ...r, status } : r)),
    }));
  },
}));
