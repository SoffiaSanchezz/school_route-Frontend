import React, { useEffect } from 'react';
import { AppRouter } from './app/router/AppRouter';
import { useAuthStore } from './app/store/authStore';

function App() {
  const checkAuth = useAuthStore(state => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <AppRouter />;
}

export default App;
