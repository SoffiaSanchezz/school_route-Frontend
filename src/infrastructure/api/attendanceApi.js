// import { httpClient } from './httpClient';

const mockAttendance = [
  { id: '1', student: 'Sophia Chen', route: 'Ruta A-12', stop: 'Calle 100 #45', status: 'Recogido', time: '07:12 AM' },
  { id: '2', student: 'Lucas Miller', route: 'Ruta B-05', stop: 'Av. Siempre Viva 123', status: 'En Camino', time: '-' },
  { id: '3', student: 'Emma Wilson', route: 'Ruta A-12', stop: 'Carrera 7 #12-34', status: 'Ausente', time: '07:30 AM' },
  { id: '4', student: 'Noah Garcia', route: 'Ruta C-03', stop: 'Calle 80 #15-20', status: 'Recogido', time: '07:45 AM' },
];

export const attendanceApi = {
  getByDate: async (_date) => mockAttendance,
  // getByDate: (date) => httpClient.get('/attendance', { params: { date } }),
  markStatus: async (id, status) => ({ id, status }),
  // markStatus: (id, status) => httpClient.patch(`/attendance/${id}`, { status }),
};
