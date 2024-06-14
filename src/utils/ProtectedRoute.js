import React, { useContext } from 'react';
import { AuthContext } from '../App';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isLogin } = useContext(AuthContext);

  return isLogin ? <Outlet /> : <Navigate to={'/auth/login'} />;
};

export default ProtectedRoute;
