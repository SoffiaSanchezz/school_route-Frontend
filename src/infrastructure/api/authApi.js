import { httpClient } from './httpClient';

// --- Mock data (replace with real httpClient calls when API is ready) ---
const MOCK_DELAY = 800;

const mockLogin = async (credentials) => {
  await new Promise((r) => setTimeout(r, MOCK_DELAY));
  if (!credentials.email || !credentials.password) throw new Error('Credenciales inválidas');
  return {
    token: 'mock_token',
    user: {
      id: '1',
      name: 'Admin User',
      email: credentials.email,
      role: 'ADMIN',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    },
  };
};

export const authApi = {
  login: (credentials) => mockLogin(credentials),
  // login: (credentials) => httpClient.post('/auth/login', credentials),

  logout: () => {
    localStorage.removeItem('auth_token');
  },

  getMe: () => {
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    return {
      id: '1',
      name: 'Admin User',
      role: 'ADMIN',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    };
    // return httpClient.get('/auth/me');
  },
};
