import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { apiClient } from '../../utils/apiClient';
import '../../styles/admin.css';

interface Booking {
    id: string;
    name: string;
    email: string;
    phone?: string;
    trek: string;
    preferredDate: string;
    numberOfPeople: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    message?: string;
    adminNotes?: string;
    createdAt: string;
}

export const BookingsManagement: React.FC = () => {
    const { token } = useAdmin();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [statusFilter, setStatusFilter] = useState<string>('');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editStatus, setEditStatus] = useState<string>('');
    const [editNotes, setEditNotes] = useState<string>('');

    useEffect(() => {
        fetchBookings();
    }, [page, statusFilter, token]);

    const fetchBookings = async () => {
        try {
            setIsLoading(true);
            if (!token) return;

            const response: any = await apiClient.bookings.getAll(
                token,
                page,
                10,
                statusFilter || undefined
            );

            setBookings(response.bookings || []);
            setTotalPages(response.pagination?.pages || 1);
        } catch (error) {
            console.error('Failed to fetch bookings:', error);
            alert('Failed to load bookings');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditBooking = (booking: Booking) => {
        setSelectedBooking(booking);
        setEditStatus(booking.status);
        setEditNotes(booking.adminNotes || '');
        setIsModalOpen(true);
    };

    const handleSaveBooking = async () => {
        if (!selectedBooking || !token) return;

        try {
            await apiClient.bookings.update(token, selectedBooking.id, {
                status: editStatus as 'pending' | 'confirmed' | 'cancelled',
                adminNotes: editNotes,
            });

            setIsModalOpen(false);
            setSelectedBooking(null);
            fetchBookings();
            alert('Booking updated successfully');
        } catch (error) {
            console.error('Failed to update booking:', error);
            alert('Failed to update booking');
        }
    };

    const handleDeleteBooking = async (id: string) => {
        if (!token || !confirm('Are you sure you want to delete this booking?')) return;

        try {
            await apiClient.bookings.delete(token, id);
            fetchBookings();
            alert('Booking deleted successfully');
        } catch (error) {
            console.error('Failed to delete booking:', error);
            alert('Failed to delete booking');
        }
    };

    return (
        <div className="management-page">
            <h1>Bookings Management</h1>

            <div className="management-toolbar">
                <div className="filter-group">
                    <label>Filter by Status</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(1);
                        }}
                    >
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {isLoading ? (
                <div className="loading">Loading bookings...</div>
            ) : bookings.length > 0 ? (
                <>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Trek</th>
                                <th>Date</th>
                                <th>People</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.trek}</td>
                                    <td>{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                    <td>{booking.numberOfPeople}</td>
                                    <td>
                                        <span className={`status-badge status-${booking.status}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons-compact">
                                            <button
                                                className="admin-btn admin-btn-small"
                                                onClick={() => handleEditBooking(booking)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="admin-btn admin-btn-danger-small"
                                                onClick={() => handleDeleteBooking(booking.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="pagination">
                        <button
                            onClick={() => setPage(Math.max(1, page - 1))}
                            disabled={page === 1}
                        >
                            ← Previous
                        </button>
                        <span>
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={() => setPage(Math.min(totalPages, page + 1))}
                            disabled={page === totalPages}
                        >
                            Next →
                        </button>
                    </div>
                </>
            ) : (
                <p>No bookings found</p>
            )}

            {/* Edit Modal */}
            {isModalOpen && selectedBooking && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Edit Booking</h2>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={selectedBooking.name} disabled />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" value={selectedBooking.email} disabled />
                        </div>

                        <div className="form-group">
                            <label>Trek</label>
                            <input type="text" value={selectedBooking.trek} disabled />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Admin Notes</label>
                            <textarea
                                value={editNotes}
                                onChange={(e) => setEditNotes(e.target.value)}
                                placeholder="Add your notes about this booking..."
                            />
                        </div>

                        <div className="modal-actions">
                            <button
                                className="admin-btn admin-btn-primary"
                                onClick={handleSaveBooking}
                            >
                                Save Changes
                            </button>
                            <button
                                className="admin-btn admin-btn-secondary"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
