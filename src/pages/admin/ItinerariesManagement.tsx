import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { apiClient } from '../../utils/apiClient';
import '../../styles/admin.css';

interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    elevation?: string;
    duration?: string;
}

interface Itinerary {
    id: string;
    name: string;
    duration: string;
    difficulty: string;
    description: string;
    days: ItineraryDay[];
    imageUrl?: string;
}

export const ItinerariesManagement: React.FC = () => {
    const { token } = useAdmin();
    const [itineraries, setItineraries] = useState<Itinerary[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
    const [formData, setFormData] = useState<Partial<Itinerary>>({
        days: [],
    });

    useEffect(() => {
        fetchItineraries();
    }, [token]);

    const fetchItineraries = async () => {
        try {
            setIsLoading(true);
            const response: any = await apiClient.itineraries.getAll();
            setItineraries(response.itineraries || []);
        } catch (error) {
            console.error('Failed to fetch itineraries:', error);
            alert('Failed to load itineraries');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddNew = () => {
        setSelectedItinerary(null);
        setFormData({ days: [] });
        setIsModalOpen(true);
    };

    const handleEdit = (itinerary: Itinerary) => {
        setSelectedItinerary(itinerary);
        setFormData(itinerary);
        setIsModalOpen(true);
    };

    const validateItinerary = () => {
        if (!formData.name?.trim()) {
            alert('Please enter a name for the itinerary.');
            return false;
        }

        if (!formData.duration?.trim()) {
            alert('Please enter the itinerary duration.');
            return false;
        }

        if (!formData.difficulty?.trim()) {
            alert('Please enter the itinerary difficulty.');
            return false;
        }

        if (!formData.description?.trim()) {
            alert('Please enter the itinerary description.');
            return false;
        }

        const days = formData.days || [];
        if (days.length === 0) {
            alert('Please add at least one day to the itinerary.');
            return false;
        }

        for (let i = 0; i < days.length; i += 1) {
            const day = days[i];
            if (!day.title?.trim()) {
                alert(`Please enter a title for day ${i + 1}.`);
                return false;
            }
            if (!day.description?.trim()) {
                alert(`Please enter a description for day ${i + 1}.`);
                return false;
            }
        }

        return true;
    };

    const handleSave = async () => {
        if (!token) {
            alert('You must be logged in to save an itinerary.');
            return;
        }

        if (!validateItinerary()) {
            return;
        }

        try {
            if (selectedItinerary) {
                // Update existing
                await apiClient.itineraries.update(token, selectedItinerary.id, formData);
                alert('Itinerary updated successfully');
            } else {
                // Create new
                await apiClient.itineraries.create(token, formData);
                alert('Itinerary created successfully');
            }

            setIsModalOpen(false);
            fetchItineraries();
        } catch (error) {
            console.error('Failed to save itinerary:', error);
            const message =
                error instanceof Error
                    ? error.message
                    : 'Failed to save itinerary';
            alert(message);
        }
    };

    const handleDelete = async (id: string) => {
        if (!token || !confirm('Are you sure you want to delete this itinerary?')) return;

        try {
            await apiClient.itineraries.delete(token, id);
            fetchItineraries();
            alert('Itinerary deleted successfully');
        } catch (error) {
            console.error('Failed to delete itinerary:', error);
            alert('Failed to delete itinerary');
        }
    };

    const addDay = () => {
        const days = formData.days || [];
        const nextDay = days.length + 1;
        setFormData({
            ...formData,
            days: [
                ...days,
                {
                    day: nextDay,
                    title: '',
                    description: '',
                },
            ],
        });
    };

    const removeDay = (index: number) => {
        const days = (formData.days || [])
            .filter((_, i) => i !== index)
            .map((day, idx) => ({
                ...day,
                day: idx + 1,
            }));
        setFormData({ ...formData, days });
    };

    return (
        <div className="management-page">
            <div className="management-header">
                <h1>Itineraries Management</h1>
                <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
                    + Add New Itinerary
                </button>
            </div>

            {isLoading ? (
                <div className="loading">Loading itineraries...</div>
            ) : itineraries.length > 0 ? (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Difficulty</th>
                            <th>Days</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itineraries.map((itinerary) => (
                            <tr key={itinerary.id}>
                                <td>{itinerary.name}</td>
                                <td>{itinerary.duration}</td>
                                <td>{itinerary.difficulty}</td>
                                <td>{itinerary.days.length}</td>
                                <td>
                                    <div className="action-buttons-compact">
                                        <button
                                            className="admin-btn admin-btn-small"
                                            onClick={() => handleEdit(itinerary)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="admin-btn admin-btn-danger-small"
                                            onClick={() => handleDelete(itinerary.id)}
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
                <p>No itineraries found</p>
            )}

            {/* Form Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedItinerary ? 'Edit Itinerary' : 'Create Itinerary'}</h2>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                value={formData.name || ''}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    placeholder="e.g., 7 Days"
                                    value={formData.duration || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, duration: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Difficulty</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Moderate"
                                    value={formData.difficulty || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, difficulty: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                value={formData.description || ''}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
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

                        {/* Days */}
                        <div className="days-section">
                            <h3>Itinerary Days</h3>
                            {(formData.days || []).map((day, index) => (
                                <div key={index} className="day-form">
                                    <h4>Day {day.day}</h4>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                value={day.title}
                                                onChange={(e) => {
                                                    const days = [...(formData.days || [])];
                                                    days[index].title = e.target.value;
                                                    setFormData({ ...formData, days });
                                                }}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Duration</label>
                                            <input
                                                type="text"
                                                value={day.duration || ''}
                                                onChange={(e) => {
                                                    const days = [...(formData.days || [])];
                                                    days[index].duration = e.target.value;
                                                    setFormData({ ...formData, days });
                                                }}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Elevation</label>
                                            <input
                                                type="text"
                                                value={day.elevation || ''}
                                                onChange={(e) => {
                                                    const days = [...(formData.days || [])];
                                                    days[index].elevation = e.target.value;
                                                    setFormData({ ...formData, days });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            value={day.description}
                                            onChange={(e) => {
                                                const days = [...(formData.days || [])];
                                                days[index].description = e.target.value;
                                                setFormData({ ...formData, days });
                                            }}
                                        />
                                    </div>

                                    <button
                                        className="admin-btn admin-btn-danger-small"
                                        onClick={() => removeDay(index)}
                                    >
                                        Remove Day
                                    </button>
                                </div>
                            ))}

                            <button className="admin-btn admin-btn-secondary" onClick={addDay}>
                                + Add Day
                            </button>
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
