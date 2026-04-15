const API_BASE_URL = (import.meta.env as any).VITE_API_URL || 'http://localhost:3001/api';

interface RequestOptions extends RequestInit {
    token?: string;
}

export const apiClient = {
    async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const { token, ...fetchOptions } = options;

        const headers: any = {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...fetchOptions,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || `API Error: ${response.status}`);
        }

        return response.json() as Promise<T>;
    },

    // Auth endpoints
    auth: {
        login: async (email: string, password: string) => {
            return apiClient.request('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
        },
    },

    // Bookings endpoints
    bookings: {
        getAll: async (token: string, page = 1, limit = 10, status?: string) => {
            let endpoint = `/bookings?page=${page}&limit=${limit}`;
            if (status) endpoint += `&status=${status}`;
            return apiClient.request(endpoint, { token });
        },
        getById: async (token: string, id: string) => {
            return apiClient.request(`/bookings/${id}`, { token });
        },
        create: async (data: any, token?: string) => {
            return apiClient.request('/bookings', {
                token,
                method: 'POST',
                body: JSON.stringify(data),
            });
        },
        update: async (token: string, id: string, data: any) => {
            return apiClient.request(`/bookings/${id}`, {
                token,
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        },
        delete: async (token: string, id: string) => {
            return apiClient.request(`/bookings/${id}`, {
                token,
                method: 'DELETE',
            });
        },
    },

    // Departures endpoints
    departures: {
        getAll: async (token?: string) => {
            return apiClient.request('/departures', { token });
        },
        getById: async (id: string) => {
            return apiClient.request(`/departures/${id}`);
        },
        create: async (token: string, data: any) => {
            return apiClient.request('/departures', {
                token,
                method: 'POST',
                body: JSON.stringify(data),
            });
        },
        update: async (token: string, id: string, data: any) => {
            return apiClient.request(`/departures/${id}`, {
                token,
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        },
        delete: async (token: string, id: string) => {
            return apiClient.request(`/departures/${id}`, {
                token,
                method: 'DELETE',
            });
        },
    },

    // Itineraries endpoints
    itineraries: {
        getAll: async () => {
            return apiClient.request('/itineraries');
        },
        getById: async (id: string) => {
            return apiClient.request(`/itineraries/${id}`);
        },
        create: async (token: string, data: any) => {
            return apiClient.request('/itineraries', {
                token,
                method: 'POST',
                body: JSON.stringify(data),
            });
        },
        update: async (token: string, id: string, data: any) => {
            return apiClient.request(`/itineraries/${id}`, {
                token,
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        },
        delete: async (token: string, id: string) => {
            return apiClient.request(`/itineraries/${id}`, {
                token,
                method: 'DELETE',
            });
        },
    },

    // Blog endpoints
    blog: {
        getAll: async (page = 1, limit = 10) => {
            return apiClient.request(`/blog?page=${page}&limit=${limit}`);
        },
        getBySlug: async (slug: string) => {
            return apiClient.request(`/blog/post/${slug}`);
        },
        create: async (token: string, data: any) => {
            return apiClient.request('/blog', {
                token,
                method: 'POST',
                body: JSON.stringify(data),
            });
        },
        update: async (token: string, id: string, data: any) => {
            return apiClient.request(`/blog/${id}`, {
                token,
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        },
        delete: async (token: string, id: string) => {
            return apiClient.request(`/blog/${id}`, {
                token,
                method: 'DELETE',
            });
        },
    },
};
