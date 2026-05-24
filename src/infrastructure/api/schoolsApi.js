// import { httpClient } from './httpClient';

const mockSchools = [
  { id: 1, name: 'Colegio San José', address: 'Calle 100 #45-12', students: 450, routes: 12, status: 'Active' },
  { id: 2, name: 'Colegio Cambridge', address: 'Av. Siempre Viva 123', students: 320, routes: 8, status: 'Active' },
  { id: 3, name: 'Liceo Francés', address: 'Carrera 7 #127-10', students: 580, routes: 15, status: 'Warning' },
];

export const schoolsApi = {
  getAll: async () => mockSchools,
  // getAll: () => httpClient.get('/schools'),
  getById: async (id) => mockSchools.find((s) => s.id === id) ?? null,
  create: async (data) => ({ id: Date.now(), ...data }),
  update: async (id, data) => ({ id, ...data }),
  remove: async (id) => ({ id }),
};
