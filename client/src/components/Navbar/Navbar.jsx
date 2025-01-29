import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [isAdmin, setIsAdmin] = useState(false); // Track admin state
    const navigate = useNavigate(); // Hook for redirection

    // Check login status from localStorage on component mount
    useEffect(() => {
        const user = localStorage.getItem('user'); // Assuming 'user' is stored in localStorage
        if (user) {
            setIsLoggedIn(true);
            const parsedUser = JSON.parse(user);
            setIsAdmin(parsedUser.role === 'admin'); // Check if user is admin
        }
    }, []);

    // Close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('hamburger-button');
            if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.clear(); // Clears the localStorage
        setIsLoggedIn(false); // Update the local state to reflect logged-out status
        setIsAdmin(false); // Reset admin state
        navigate('/'); // Redirect to the home page (or login page if preferred)
    };

    return (
        <nav className="bg-white shadow-md p-6 flex justify-between items-center w-full fixed top-0 z-50 h-20">
            {/* Logo Section */}
            <Link to="/" className="text-xl font-bold text-pink-600 no-underline">
                <img src="/ashoka-events-logo.png" alt="Ashoka Events Logo" className="text-2xl font-bold text-pink-600 no-underline w-16"/>
            </Link>

            {/* Full Navigation Links for Tablet and Larger Screens */}
            {/* <ul className="hidden md:flex gap-6 list-none "> */}
            <ul className="hidden md:flex space-x-6 list-none no-underline">

                <li>
                    <Link to="/" className="text-gray-800 text-2xl no-underline hover:underline hover:text-blue-400 transition duration-200">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-800 text-2xl no-underline hover:underline hover:text-blue-400 transition duration-200 gap-8">About</Link>
                </li>
                <li>
                    <Link to="/services" className="text-gray-800 text-base no-underline hover:underline transition duration-200">Services</Link>
                </li>
                {/* <li>
                    <Link to="/pricing" className="text-gray-800 text-base no-underline hover:underline transition duration-200">Pricing</Link>
                </li> */}
                <li>
                    <Link to="/events" className="text-gray-800 text-base no-underline hover:underline transition duration-200">Events</Link>
                </li>
                <li>
                    <Link to="/products" className="text-gray-800 text-base no-underline hover:underline transition duration-200">
                    Products
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-gray-800 text-base no-underline hover:underline transition duration-200">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-gray-800 text-base no-underline hover:underline transition duration-200">Contact</Link>
                </li>

                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to="/profile" className="text-gray-800 text-base bg-yellow-400 py-1 px-3 rounded-full no-underline hover:underline transition duration-200">Profile</Link>
                        </li>
                        {/* {isAdmin && (
                            <li>
                                <Link to="/admin" className="text-gray-800 text-base bg-blue-400 py-1 px-3 rounded-full no-underline hover:underline transition duration-200">Admin Dashboard</Link>
                            </li>
                        )} */}
                        <li>
                            <Link to="#" onClick={handleLogout} className="text-white text-base bg-red-500 py-1 px-3 rounded-full no-underline hover:underline transition duration-200">Logout</Link>
                        </li>
                    </>
                ) : (
                    // <li>
                    //     <Link to="/signup" className="text-white text-base bg-green-500 py-1 px-3 rounded-full no-underline hover:underline transition duration-200">Signup</Link>
                    // </li>
                    <li>
                        <Link to="/login" className="text-white text-base bg-blue-500 py-1 px-3 rounded-full no-underline hover:underline transition duration-200">Login</Link>
                    </li>
                )}
            </ul>

            {/* Hamburger Button for Mobile */}
            {/* <button
                id="hamburger-button"
                onClick={toggleMenu}
                className={`md:hidden flex flex-col justify-center items-center focus:outline-none transition duration-200 absolute right-4 top-1/2 transform -translate-y-1/2`}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
            > */}

            <button
                id="hamburger-button"
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center focus:outline-none"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
            >

                <span
                    className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-gray-800 my-1 ${isMenuOpen ? "opacity-0" : ""
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                ></span>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="absolute top-16 right-0 bg-white shadow-lg w-48 z-50 md:hidden">
                    <ul className="list-none p-4 space-y-2 ">
                        <li>
                            <Link to="/" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Services</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/events" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Events</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block text-gray-800 py-2 px-4 text-center no-underline transition duration-200">Contact</Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/profile" className="block text-gray-800 py-2 px-4 text-center bg-yellow-400 rounded-full no-underline hover:underline transition duration-200">Profile</Link>
                                </li>
                                {isAdmin && (
                                    <li>
                                        <Link to="/admin" className="block text-gray-800 py-2 px-4 text-center bg-blue-400 rounded-full no-underline hover:underline transition duration-200">Admin Dashboard</Link>
                                    </li>
                                )}
                                <li>
                                    <Link to="#" onClick={handleLogout} className="block text-white py-2 px-4 text-center bg-red-500 rounded-full no-underline hover:no-underline transition duration-200">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/signup" className="block text-white py-2 px-4 text-center bg-green-500 rounded-full no-underline hover:underline transition duration-200">Signup</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}

        </nav>
    );
}

export default Navbar;

