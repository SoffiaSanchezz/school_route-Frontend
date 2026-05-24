// import { httpClient } from './httpClient';

const mockVehicles = [
  { id: 'V-101', model: 'Mercedes Sprinter', plate: 'ABC-123', capacity: 19, students: 18, status: 'Operativo', fuel: '75%', maintenance: 'En 15 días' },
  { id: 'V-102', model: 'Volkswagen Crafter', plate: 'XYZ-789', capacity: 22, students: 20, status: 'En Ruta', fuel: '40%', maintenance: 'Al día' },
  { id: 'V-103', model: 'Toyota Hiace', plate: 'DEF-456', capacity: 15, students: 12, status: 'Mantenimiento', fuel: '20%', maintenance: 'Hoy' },
];

export const vehiclesApi = {
  getAll: async () => mockVehicles,
  // getAll: () => httpClient.get('/vehicles'),
  getById: async (id) => mockVehicles.find((v) => v.id === id) ?? null,
  create: async (data) => ({ id: `V-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  remove: async (id) => ({ id }),
};
