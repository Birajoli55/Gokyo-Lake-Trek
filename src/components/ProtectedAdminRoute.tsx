import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedAdminRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAdmin();

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return <>{children}</>;
};
