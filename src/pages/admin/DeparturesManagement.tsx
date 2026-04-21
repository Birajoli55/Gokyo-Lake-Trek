import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { apiClient } from '../../utils/apiClient';
import '../../styles/admin.css';

interface Departure {
    id: string;
    startDate: string;
    endDate: string;
    days: number;
    package: string;
    difficulty: string;
    price: number;
    spotsTotal: number;
    spotsLeft: number;
    season: string;
    imageUrl?: string;
    status?: string;
}

export const DeparturesManagement: React.FC = () => {
    const { token } = useAdmin();
    const [departures, setDepartures] = useState<Departure[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeparture, setSelectedDeparture] = useState<Departure | null>(null);
    const [formData, setFormData] = useState<Partial<Departure>>({});

    useEffect(() => {
        fetchDepartures();
    }, [token]);

    const fetchDepartures = async () => {
        try {
            setIsLoading(true);
            if (!token) return;

            const response: any = await apiClient.departures.getAll(token);
            setDepartures(response.departures || []);
        } catch (error) {
            console.error('Failed to fetch departures:', error);
            alert('Failed to load departures');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddNew = () => {
        setSelectedDeparture(null);
        setFormData({});
        setIsModalOpen(true);
    };

    const handleEdit = (departure: Departure) => {
        setSelectedDeparture(departure);
        setFormData(departure);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        if (!token) return;

        try {
            if (selectedDeparture) {
                // Update existing
                await apiClient.departures.update(token, selectedDeparture.id, formData);
                alert('Departure updated successfully');
            } else {
                // Create new
                await apiClient.departures.create(token, formData);
                alert('Departure created successfully');
            }

            setIsModalOpen(false);
            fetchDepartures();
        } catch (error) {
            console.error('Failed to save departure:', error);
            alert('Failed to save departure');
        }
    };

    const handleDelete = async (id: string) => {
        if (!token || !confirm('Are you sure you want to delete this departure?')) return;

        try {
            await apiClient.departures.delete(token, id);
            fetchDepartures();
            alert('Departure deleted successfully');
        } catch (error) {
            console.error('Failed to delete departure:', error);
            alert('Failed to delete departure');
        }
    };

    return (
        <div className="management-page">
            <div className="management-header">
                <h1>Departures Management</h1>
                <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
                    + Add New Departure
                </button>
            </div>

            {isLoading ? (
                <div className="loading">Loading departures...</div>
            ) : departures.length > 0 ? (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Start Date</th>
                            <th>Days</th>
                            <th>Difficulty</th>
                            <th>Price</th>
                            <th>Spots Left</th>
                            <th>Season</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departures.map((departure) => (
                            <tr key={departure.id}>
                                <td>{departure.package}</td>
                                <td>{new Date(departure.startDate).toLocaleDateString()}</td>
                                <td>{departure.days}</td>
                                <td>{departure.difficulty}</td>
                                <td>${departure.price}</td>
                                <td>{departure.spotsLeft}</td>
                                <td>{departure.season}</td>
                                <td>
                                    <div className="action-buttons-compact">
                                        <button
                                            className="admin-btn admin-btn-small"
                                            onClick={() => handleEdit(departure)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="admin-btn admin-btn-danger-small"
                                            onClick={() => handleDelete(departure.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No departures found</p>
            )}

            {/* Form Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedDeparture ? 'Edit Departure' : 'Create Departure'}</h2>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Package Name</label>
                                <input
                                    type="text"
                                    value={formData.package || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, package: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={
                                        formData.startDate
                                            ? new Date(formData.startDate).toISOString().split('T')[0]
                                            : ''
                                    }
                                    onChange={(e) =>
                                        setFormData({ ...formData, startDate: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    value={
                                        formData.endDate
                                            ? new Date(formData.endDate).toISOString().split('T')[0]
                                            : ''
                                    }
                                    onChange={(e) =>
                                        setFormData({ ...formData, endDate: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Days</label>
                                <input
                                    type="number"
                                    value={formData.days || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, days: parseInt(e.target.value) })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Difficulty</label>
                                <select
                                    value={formData.difficulty || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, difficulty: e.target.value })
                                    }
                                >
                                    <option value="">Select difficulty</option>
                                    <option value="Easy-Moderate">Easy-Moderate</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Challenging">Challenging</option>
                                    <option value="Strenuous">Strenuous</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    value={formData.price || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, price: parseFloat(e.target.value) })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Total Spots</label>
                                <input
                                    type="number"
                                    value={formData.spotsTotal || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, spotsTotal: parseInt(e.target.value) })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Spots Left</label>
                                <input
                                    type="number"
                                    value={formData.spotsLeft || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, spotsLeft: parseInt(e.target.value) })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Season</label>
                                <input
                                    type="text"
                                    value={formData.season || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, season: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Image URL</label>
                                <input
                                    type="url"
                                    value={formData.imageUrl || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, imageUrl: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                className="admin-btn admin-btn-primary"
                                onClick={handleSave}
                            >
                                Save
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
