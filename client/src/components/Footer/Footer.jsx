import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PiThreadsLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-16 mt-10 mb-0">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-400">
                            We are dedicated to providing exceptional event management services tailored to your needs. Our team of professionals ensures that every detail is taken care of, allowing you to enjoy your special moments.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 list-none">
                            <li><Link to="/" className="text-base font-medium no-underline text-gray-300 hover:text-white transition duration-300">Home</Link></li>
                            <li><Link to="/services" className="text-base font-medium no-underline text-gray-300 hover:text-white transition duration-300">Services</Link></li>
                            <li><Link to="/events" className="text-base font-medium no-underline text-gray-300 hover:text-white transition duration-300">Events</Link></li>
                            <li><Link to="/about" className="text-base font-medium no-underline text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
                            <li><Link to="/contact" className="text-base font-medium no-underline text-gray-300 hover:text-white transition duration-300">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-400">
                            Email: &nbsp;
                            <a href="mailto:ashokafae@gmail.com" className="text-gray-400 no-underline hover:underline">
                                ashokafae@gmail.com
                            </a>
                        </p>

                        <div>
                            <p className="text-gray-400">Phone: +91-76665 09148</p>
                            <p className="text-gray-400">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                +91-88842 79145
                            </p>

                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="facebook" className="text-gray-400 hover:text-white"><FaFacebookF /></a>

                            {/* <a href="https://www.threads.net/@ashoka_florist" className="text-gray-400 hover:text-white"><FaTwitter /></a> */}

                            <a href="https://www.instagram.com/ashoka_florist?igsh=MWU1YWJ2d3U4dm5m" className="text-gray-400 hover:text-white"><FaInstagram /></a>


                            <a href="https://www.threads.net/@ashoka_florist" className="text-gray-400 hover:text-white"><PiThreadsLogoFill />
                            </a>

                            <a href="https://www.linkedin.com/in/pavanraibagi/" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>

                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-400">&copy; 2025 TechRotz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;