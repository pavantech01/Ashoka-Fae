// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// const EditEventForm = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         id: '',
//         title: '',
//         description: '',
//         date: '',
//         price: '',
//         category: '',
//         image: null
//     });

//     // eslint-disable-next-line     
//     const [imagePreview, setImagePreview] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const eventToEdit = location.state?.event;
//         if (eventToEdit) {
//             setFormData({
//                 id: eventToEdit.id,
//                 title: eventToEdit.title,
//                 description: eventToEdit.description,
//                 date: eventToEdit.date,
//                 price: eventToEdit.price,
//                 category: eventToEdit.category,
//                 image: null
//             });

//             if (eventToEdit.image && eventToEdit.image.url) {
//                 setImagePreview(eventToEdit.image.url);
//             }
//         } else {
//             navigate('/events');
//         }
//     }, [location, navigate]);


//     // eslint-disable-next-line     
//     const handleChange = (e) => {
//         const { name, value, files } = e.target;

//         if (name === 'image') {
//             const file = files[0];
//                 setFormData(prev => ({
//                 ...prev,
//                 image: file
//             }));

//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };
//             if (file) {
//                 reader.readAsDataURL(file);
//             }
//         } else {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 throw new Error('No authentication token');
//             }

//             const formDataToSubmit = new FormData();

//             // Explicitly append ID for backend reference
//             formDataToSubmit.append('id', formData.id);

//             Object.keys(formData).forEach(key => {
//                 if (key !== 'id' && formData[key] !== null && formData[key] !== undefined) {
//                     formDataToSubmit.append(key, formData[key]);
//                 }
//             });

//             const response = await axios.put(
//                 `http://localhost:5000/api/events/${formData.id}`,
//                 formDataToSubmit,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 }
//             );

//             console.log('Event Update Response:', response.data);
//             navigate('/events');
//         } catch (error) {
//             console.error('Update Error:', error.response?.data);
//             console.error('Detailed Error:', {
//                 message: error.message,
//                 response: error.response?.data,
//                 status: error.response?.status
//             });
//             setError(error.response?.data?.message || 'Update failed');
//         }
//     };


//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div className="divide-y divide-gray-200">
//                             <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <h2 className="text-3xl font-extrabold text-center text-blue-600">
//                                     Edit Event
//                                 </h2>
//                                 {error && (
//                                     <div className="text-red-500 text-center mb-4">
//                                         {error}
//                                     </div>
//                                 )}
//                                 <form onSubmit={handleSubmit} className="space-y-4">
//                                     {/* Form fields remain the same as previous implementation */}
//                                     <div className="mt-6">
//                                         <button
//                                             type="submit"
//                                             className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         >
//                                             Update Event
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditEventForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditEventForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        date: '',
        price: '',
        category: '',
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const eventToEdit = location.state?.event;
        if (eventToEdit) {
            setFormData({
                id: eventToEdit.id,
                title: eventToEdit.title,
                description: eventToEdit.description,
                date: eventToEdit.date,
                price: eventToEdit.price,
                category: eventToEdit.category,
                image: null
            });

            if (eventToEdit.image && eventToEdit.image.url) {
                setImagePreview(eventToEdit.image.url);
            }
        } else {
            navigate('/events');
        }
    }, [location, navigate]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            setFormData(prev => ({
                ...prev,
                image: file
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token');
            }

            const formDataToSubmit = new FormData();
            formDataToSubmit.append('id', formData.id);

            Object.keys(formData).forEach(key => {
                if (key !== 'id' && formData[key] !== null && formData[key] !== undefined) {
                    formDataToSubmit.append(key, formData[key]);
                }
            });

            const response = await axios.put(
                `http://localhost:5000/api/events/${formData.id}`,
                formDataToSubmit,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            console.log('Event Update Response:', response.data);
            navigate('/events');
        } catch (error) {
            console.error('Update Error:', error.response?.data);
            console.error('Detailed Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            setError(error.response?.data?.message || 'Update failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h2 className="text-3xl font-extrabold text-center text-blue-600">
                                    Edit Event
                                </h2>
                                {error && (
                                    <div className="text-red-500 text-center mb-4">
                                        {error}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Title */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows="4"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Image Preview and Upload */}
                                    <div>
                                        {imagePreview && (
                                            <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover mt-2" />
                                        )}
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-4">
                                            Upload Image
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            Update Event
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditEventForm;
