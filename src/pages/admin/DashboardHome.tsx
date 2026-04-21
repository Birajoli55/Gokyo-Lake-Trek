import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { apiClient } from '../../utils/apiClient';
import '../../styles/admin.css';

interface DashboardStats {
    totalBookings: number;
    pendingBookings: number;
    confirmedBookings: number;
    departures: number;
    itineraries: number;
    blogPosts: number;
}

export const DashboardHome: React.FC = () => {
    const { token } = useAdmin();
    const [stats, setStats] = useState<DashboardStats>({
        totalBookings: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        departures: 0,
        itineraries: 0,
        blogPosts: 0,
    });
    const [bookings, setBookings] = useState<any[]>([]);
    const [departures, setDepartures] = useState<any[]>([]);
    const [itineraries, setItineraries] = useState<any[]>([]);
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setIsLoading(true);

                const bookingsPromise = token
                    ? apiClient.bookings.getAll(token, 1, 1000)
                    : Promise.resolve({ bookings: [], pagination: { total: 0 } });
                const departuresPromise = token
                    ? apiClient.departures.getAll(token)
                    : Promise.resolve({ departures: [] });
                const itinerariesPromise = apiClient.itineraries.getAll();
                const blogPromise = apiClient.blog.getAll(1, 100);

                const [bookingsResponse, departuresResponse, itinerariesResponse, blogResponse] =
                    (await Promise.all([
                        bookingsPromise,
                        departuresPromise,
                        itinerariesPromise,
                        blogPromise,
                    ])) as any;

                const allBookings = bookingsResponse?.bookings || [];
                const departureList = departuresResponse?.departures || [];
                const itineraryList = itinerariesResponse?.itineraries || [];
                const blogList = blogResponse?.posts || [];

                setBookings(allBookings);
                setDepartures(departureList);
                setItineraries(itineraryList);
                setBlogPosts(blogList);

                setStats({
                    totalBookings: bookingsResponse?.pagination?.total || allBookings.length,
                    pendingBookings: allBookings.filter((b: any) => b.status === 'pending').length,
                    confirmedBookings: allBookings.filter((b: any) => b.status === 'confirmed')
                        .length,
                    departures: departureList.length,
                    itineraries: itineraryList.length,
                    blogPosts: blogList.length,
                });
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [token]);

    if (isLoading) {
        return <div className="loading">Loading dashboard...</div>;
    }

    return (
        <div className="dashboard-home">
            <h1>Dashboard</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">📋</div>
                    <div className="stat-content">
                        <p>Total Bookings</p>
                        <h3>{stats.totalBookings}</h3>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">⏳</div>
                    <div className="stat-content">
                        <p>Pending</p>
                        <h3>{stats.pendingBookings}</h3>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-content">
                        <p>Confirmed</p>
                        <h3>{stats.confirmedBookings}</h3>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📅</div>
                    <div className="stat-content">
                        <p>Departures</p>
                        <h3>{stats.departures}</h3>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">🗺️</div>
                    <div className="stat-content">
                        <p>Itineraries</p>
                        <h3>{stats.itineraries}</h3>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📝</div>
                    <div className="stat-content">
                        <p>Blog Posts</p>
                        <h3>{stats.blogPosts}</h3>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Bookings</h2>
                {bookings.length > 0 ? (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Trek</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>People</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.trek}</td>
                                    <td>{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`status-badge status-${booking.status}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>{booking.numberOfPeople}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No bookings available</p>
                )}
            </div>

            <div className="section">
                <h2>Departures</h2>
                {departures.length > 0 ? (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Package</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Days</th>
                                <th>Difficulty</th>
                                <th>Price</th>
                                <th>Season</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departures.map((departure) => (
                                <tr key={departure.id}>
                                    <td>{departure.package}</td>
                                    <td>{new Date(departure.startDate).toLocaleDateString()}</td>
                                    <td>{new Date(departure.endDate).toLocaleDateString()}</td>
                                    <td>{departure.days}</td>
                                    <td>{departure.difficulty}</td>
                                    <td>${departure.price}</td>
                                    <td>{departure.season}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No departures available</p>
                )}
            </div>

            <div className="section">
                <h2>Itineraries</h2>
                {itineraries.length > 0 ? (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Difficulty</th>
                                <th>Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itineraries.map((itinerary) => (
                                <tr key={itinerary.id}>
                                    <td>{itinerary.name}</td>
                                    <td>{itinerary.duration}</td>
                                    <td>{itinerary.difficulty}</td>
                                    <td>{itinerary.days?.length || 0}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No itineraries available</p>
                )}
            </div>

            <div className="section">
                <h2>Blog Posts</h2>
                {blogPosts.length > 0 ? (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Published</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogPosts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.category}</td>
                                    <td>{post.author}</td>
                                    <td>{new Date(post.publishDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No blog posts available</p>
                )}
            </div>

            <div className="section">
                <h2>Quick Actions</h2>
                <div className="action-buttons">
                    <a href="/admin/bookings" className="admin-btn admin-btn-secondary">
                        View All Bookings
                    </a>
                    <a href="/admin/departures" className="admin-btn admin-btn-secondary">
                        Manage Departures
                    </a>
                    <a href="/admin/itineraries" className="admin-btn admin-btn-secondary">
                        Manage Itineraries
                    </a>
                    <a href="/admin/blog" className="admin-btn admin-btn-secondary">
                        Manage Blog
                    </a>
                </div>
            </div>
        </div>
    );
};
