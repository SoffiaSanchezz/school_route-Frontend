// import { httpClient } from './httpClient';

const mockDrivers = [
  { id: '1', name: 'Carlos Rodriguez', license: 'LIC-7822', phone: '+57 312 456 7890', email: 'carlos.r@school.com', status: 'En Ruta', vehicle: 'Microbús #4' },
  { id: '2', name: 'Marta Gomez', license: 'LIC-1029', phone: '+57 300 123 4567', email: 'marta.g@school.com', status: 'Disponible', vehicle: 'Microbús #12' },
  { id: '3', name: 'Juan Perez', license: 'LIC-5541', phone: '+57 321 987 6543', email: 'juan.p@school.com', status: 'Descanso', vehicle: 'Camioneta #2' },
];

export const driversApi = {
  getAll: async () => mockDrivers,
  // getAll: () => httpClient.get('/drivers'),
  getById: async (id) => mockDrivers.find((d) => d.id === id) ?? null,
  create: async (data) => ({ id: String(Date.now()), ...data }),
  update: async (id, data) => ({ id, ...data }),
  remove: async (id) => ({ id }),
};
