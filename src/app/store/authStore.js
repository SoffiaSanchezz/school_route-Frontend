import { create } from 'zustand';
import { authApi } from '../../infrastructure/api/authApi';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const { token, user } = await authApi.login(credentials);
      localStorage.setItem('auth_token', token);
      set({ user, isAuthenticated: true });
    } catch (err) {
      set({ error: err?.message ?? 'Error al iniciar sesión' });
      throw err;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    authApi.logout();
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const user = authApi.getMe();
    if (user) set({ user, isAuthenticated: true });
  },
}));
