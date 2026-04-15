import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { apiClient } from '../../utils/apiClient';
import '../../styles/admin.css';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishDate: string;
    imageUrl?: string;
    author: string;
    category: 'Comparison' | 'Safety' | 'Gear' | 'Guide';
}

export const BlogManagement: React.FC = () => {
    const { token } = useAdmin();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [formData, setFormData] = useState<Partial<BlogPost>>({});

    useEffect(() => {
        fetchPosts();
    }, [token]);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const response: any = await apiClient.blog.getAll(1, 100);
            setPosts(response.posts || []);
        } catch (error) {
            console.error('Failed to fetch blog posts:', error);
            alert('Failed to load blog posts');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddNew = () => {
        setSelectedPost(null);
        setFormData({
            category: 'Guide',
        });
        setIsModalOpen(true);
    };

    const handleEdit = (post: BlogPost) => {
        setSelectedPost(post);
        setFormData(post);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        if (!token) return;

        try {
            if (selectedPost) {
                // Update existing
                await apiClient.blog.update(token, selectedPost.id, formData);
                alert('Blog post updated successfully');
            } else {
                // Create new
                await apiClient.blog.create(token, {
                    ...formData,
                    publishDate: new Date().toISOString(),
                });
                alert('Blog post created successfully');
            }

            setIsModalOpen(false);
            fetchPosts();
        } catch (error) {
            console.error('Failed to save blog post:', error);
            alert('Failed to save blog post');
        }
    };

    const handleDelete = async (id: string) => {
        if (!token || !confirm('Are you sure you want to delete this blog post?')) return;

        try {
            await apiClient.blog.delete(token, id);
            fetchPosts();
            alert('Blog post deleted successfully');
        } catch (error) {
            console.error('Failed to delete blog post:', error);
            alert('Failed to delete blog post');
        }
    };

    return (
        <div className="management-page">
            <div className="management-header">
                <h1>Blog Management</h1>
                <button className="admin-btn admin-btn-primary" onClick={handleAddNew}>
                    + Write New Post
                </button>
            </div>

            {isLoading ? (
                <div className="loading">Loading blog posts...</div>
            ) : posts.length > 0 ? (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Published</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td>{post.category}</td>
                                <td>{post.author}</td>
                                <td>{new Date(post.publishDate).toLocaleDateString()}</td>
                                <td>
                                    <div className="action-buttons-compact">
                                        <button
                                            className="admin-btn admin-btn-small"
                                            onClick={() => handleEdit(post)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="admin-btn admin-btn-danger-small"
                                            onClick={() => handleDelete(post.id)}
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
                <p>No blog posts found</p>
            )}

            {/* Form Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedPost ? 'Edit Blog Post' : 'Write New Blog Post'}</h2>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={formData.title || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, title: e.target.value })
                                    }
                                />
                            </div>

                            {!selectedPost && (
                                <div className="form-group">
                                    <label>Slug</label>
                                    <input
                                        type="text"
                                        value={formData.slug || ''}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                slug: e.target.value.toLowerCase().replace(/\s+/g, '-'),
                                            })
                                        }
                                        placeholder="blog-post-slug"
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label>Category</label>
                                <select
                                    value={formData.category || 'Guide'}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            category: e.target.value as any,
                                        })
                                    }
                                >
                                    <option value="Comparison">Comparison</option>
                                    <option value="Safety">Safety</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Guide">Guide</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Author</label>
                                <input
                                    type="text"
                                    value={formData.author || ''}
                                    onChange={(e) =>
                                        setFormData({ ...formData, author: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Excerpt</label>
                            <textarea
                                value={formData.excerpt || ''}
                                onChange={(e) =>
                                    setFormData({ ...formData, excerpt: e.target.value })
                                }
                                rows={3}
                            />
                        </div>

                        <div className="form-group">
                            <label>Content</label>
                            <textarea
                                value={formData.content || ''}
                                onChange={(e) =>
                                    setFormData({ ...formData, content: e.target.value })
                                }
                                rows={8}
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

                        <div className="modal-actions">
                            <button
                                className="admin-btn admin-btn-primary"
                                onClick={handleSave}
                            >
                                {selectedPost ? 'Update Post' : 'Publish Post'}
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
