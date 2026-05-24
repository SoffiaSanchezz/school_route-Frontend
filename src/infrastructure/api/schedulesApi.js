// import { httpClient } from './httpClient';

const mockSchedules = [
  { id: 1, school: 'Colegio San José', route: 'Ruta A-12', time: '06:00 AM', type: 'Recogida', shift: 'Mañana', students: 12 },
  { id: 2, school: 'Colegio Cambridge', route: 'Ruta A-12', time: '06:40 AM', type: 'Recogida', shift: 'Mañana', students: 8 },
  { id: 3, school: 'Liceo Francés', route: 'Ruta B-05', time: '07:15 AM', type: 'Recogida', shift: 'Mañana', students: 15 },
  { id: 4, school: 'Colegio San José', route: 'Ruta A-12', time: '03:30 PM', type: 'Entrega', shift: 'Tarde', students: 12 },
];

export const schedulesApi = {
  getAll: async () => mockSchedules,
  // getAll: () => httpClient.get('/schedules'),
  create: async (data) => ({ id: Date.now(), ...data }),
  update: async (id, data) => ({ id, ...data }),
  remove: async (id) => ({ id }),
};
