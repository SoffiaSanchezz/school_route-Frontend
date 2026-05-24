import { useEffect } from 'react';
import { useStudentsStore } from '../store/studentsStore';

export const useStudents = () => {
  const { schoolsWithStudents, isLoading, error, fetchStudents } = useStudentsStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return { schoolsWithStudents, isLoading, error };
};
