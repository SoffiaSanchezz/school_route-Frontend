import { useEffect } from 'react';
import { useAttendanceStore } from '../store/attendanceStore';

export const useAttendance = () => {
  const { records, selectedDate, isLoading, error, fetchAttendance, setDate, markStatus } =
    useAttendanceStore();

  useEffect(() => {
    fetchAttendance(selectedDate);
  }, [selectedDate, fetchAttendance]);

  return { records, selectedDate, isLoading, error, setDate, markStatus };
};
