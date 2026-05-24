// import { httpClient } from './httpClient';

const mockSchoolsWithStudents = [
  {
    id: 1,
    name: 'Colegio San José',
    schedules: [
      {
        id: 's1',
        time: '06:00 AM',
        type: 'Recogida',
        students: [
          { id: 1, name: 'María Gómez', route: 'Ruta A-12', address: 'Calle 100 #45', guardian: 'John Gómez', status: 'Recogido' },
          { id: 2, name: 'Juan Pérez', route: 'Ruta A-12', address: 'Calle 80 #15', guardian: 'Ana Pérez', status: 'Pendiente' },
        ],
      },
      {
        id: 's2',
        time: '07:30 AM',
        type: 'Entrega',
        students: [
          { id: 3, name: 'Lucas Miller', route: 'Ruta B-05', address: 'Av. Siempre Viva 123', guardian: 'Sarah Miller', status: 'Pendiente' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Colegio Cambridge',
    schedules: [
      {
        id: 's3',
        time: '06:40 AM',
        type: 'Recogida',
        students: [
          { id: 4, name: 'Emma Wilson', route: 'Ruta A-12', address: 'Carrera 7 #12-34', guardian: 'Robert Wilson', status: 'Ausente' },
          { id: 5, name: 'Noah Garcia', route: 'Ruta C-03', address: 'Calle 127 #45', guardian: 'Maria Garcia', status: 'Pendiente' },
        ],
      },
    ],
  },
];

export const studentsApi = {
  getGroupedBySchool: async () => mockSchoolsWithStudents,
  // getGroupedBySchool: () => httpClient.get('/students/grouped'),
};
