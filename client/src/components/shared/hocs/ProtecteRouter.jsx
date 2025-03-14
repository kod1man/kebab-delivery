import React from 'react';
import { Navigate, Outlet } from 'react-router';

export default function ProtecteRouter({ children, isAllowed, redirectTo }) {
  if (!isAllowed) return <Navigate to={redirectTo} />;
  return children || <Outlet />;
}
