import { useEffect } from 'react';
import { useSchoolsStore } from '../store/schoolsStore';

export const useSchools = () => {
  const { schools, isLoading, error, fetchSchools } = useSchoolsStore();

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  return { schools, isLoading, error };
};
