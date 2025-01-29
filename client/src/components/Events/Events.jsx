import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/events");
                if (isMounted) {
                    setEvents(response.data.events);
                }
            } catch (err) {
                if (isMounted) {
                    setError("Failed to fetch events.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setIsAdmin(parsedUser.role === "admin");
        }

        fetchEvents();

        return () => {
            isMounted = false;
        };
    }, []);

    // const handleUpdateEvent = async (eventId) => {
    //     // navigate(`/events/add?id=${eventId}`);
    //     try {
    //         const token = localStorage.getItem('token');
    //         await axios.delete(`http://localhost:5000/api/events/${eventId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setEvents(events.filter((event) => event._id !== eventId));
    //     } catch (err) {
    //         setError('Failed to update event.');
    //     }
    // };

    // eslint-disable-next-line
    const handleUpdateEvent = (event) => {
        navigate('/events/edit', {
            state: {
                event: {
                    id: event._id,
                    title: event.title,
                    description: event.description,
                    date: new Date(event.date).toISOString().split('T')[0],
                    price: event.price,
                    category: event.category || '',
                    image: event.image
                }
            }
        });
    };


    const handleDeleteEvent = async (eventId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setEvents(events.filter((event) => event._id !== eventId));
        } catch (err) {
            setError('Failed to delete event.');
        }
    };



    if (loading) {
        return (
            <div className="events-page min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Events</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white shadow-md rounded overflow-hidden animate-pulse">
                                <div className="w-full h-48 bg-gray-300"></div>
                                <div className="p-4">
                                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                                    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                        <div className="h-8 w-20 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        // min-h-screen bg-gray-100 flex items-center justify-center p-6
        <div className="events-page min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 relative top-14 mb-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
                    Explore our Events
                </h1>
                {isAdmin && (
                    <div className="flex justify-center mb-6">
                        <Link to="/events/add">
                            <button className="px-6 py-3 bg-blue-500 cursor-pointer text-white font-medium rounded-xl hover:bg-blue-600 transition shadow-md">
                                Create Event
                            </button>
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="text-red-500 text-center font-medium mb-4">
                        {error}
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
                        >
                            {event.image && event.image.url ? (
                                <img
                                    src={event.image.url}
                                    alt={event.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
                                    <span className="text-lg font-semibold text-gray-600">
                                        No Image Available
                                    </span>
                                </div>
                            )}
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {event.description}
                                </p>
                                <p>
                                    <span className="text-gray-600 font-medium">Date:{new Date(event.date).toLocaleDateString('en-GB')}</span>
                                </p>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {event.price}
                                </p>

                                {isAdmin && (
                                    <div className="flex justify-between">
                                        {/* <button
                                            onClick={() => handleUpdateEvent(event)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                        >
                                            Update
                                        </button> */}

                                        <button
                                            onClick={() => handleDeleteEvent(event._id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
