import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (err) {
                setError('Failed to fetch user profile.');
            }
        };

        fetchUserProfile();
    }, []);

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put('http://localhost:5000/api/user/updateProfile', user, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
            setIsEditing(false);
        } catch (err) {
            setError('Failed to update profile.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-700">Profile</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            readOnly={!isEditing}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            readOnly={!isEditing}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg"
                        />
                    </div>
                    {isEditing ? (
                        <button onClick={handleUpdate} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            Save Changes
                        </button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
