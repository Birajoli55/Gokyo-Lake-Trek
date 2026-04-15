import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import '../../styles/admin.css';

export const AdminDashboard: React.FC = () => {
    const { user, logout } = useAdmin();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const navItems = [
        { label: 'Dashboard', icon: '📊', path: '/admin/dashboard' },
        { label: 'Bookings', icon: '📋', path: '/admin/bookings' },
        { label: 'Departures', icon: '📅', path: '/admin/departures' },
        { label: 'Itineraries', icon: '🗺️', path: '/admin/itineraries' },
        { label: 'Blog Posts', icon: '📝', path: '/admin/blog' },
    ];

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(item.path);
                            }}
                            className="nav-item"
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {sidebarOpen && <span className="nav-label">{item.label}</span>}
                        </a>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="user-avatar">{user?.email?.[0].toUpperCase()}</div>
                        {sidebarOpen && (
                            <div className="user-details">
                                <p className="user-email">{user?.email}</p>
                                <p className="user-role">{user?.role}</p>
                            </div>
                        )}
                    </div>
                    <button className="logout-btn" onClick={handleLogout}>
                        {sidebarOpen ? '🚪 Logout' : '🚪'}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <button
                        className="mobile-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                    <h1>Gokyo Lake Trek - Admin Panel</h1>
                    <div className="header-actions">
                        <span className="user-greeting">Welcome, {user?.firstName || user?.email}!</span>
                    </div>
                </header>

                <div className="admin-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
