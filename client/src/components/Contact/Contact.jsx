import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative top-16 min-h-screen">

            {/* Main Title */}
            <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Contact US</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Contact Form Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                placeholder="Number"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="date"
                                placeholder="Dd/Mm/Yyyy"
                                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        <select
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                            defaultValue=""
                        >
                            <option value="" disabled>Basic Plan</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                        <textarea
                            placeholder="Your Message"
                            rows={6}
                            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors float-right"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Help & Support Section */}
                <div className="space-y-8">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Help & Support</h2>
                        <p className="text-gray-600">
                            For any assistance, reach out to us via the methods below:
                        </p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Email</h2>
                        <p className="text-gray-600">
                            Email us at{' '}
                            <a href="mailto:support@eventmanagement.com" className="text-black no-underline hover:text-blue-700">
                                support@eventmanagement.com
                            </a>
                        </p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Social Media</h2>
                        <ul className="flex flex-wrap gap-4 list-none"> {/* Remove default list styling */}
                            <li>
                                <a
                                    href="#facebook"
                                    className="text-black no-underline font-normal"
                                >
                                    <i className="fab fa-facebook fa-lg mr-2"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#twitter"
                                    className="text-black no-underline font-normal"
                                >
                                    <i className="fab fa-twitter fa-lg mr-2"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#instagram"
                                    className="text-black no-underline font-normal"
                                >
                                    <i className="fab fa-instagram fa-lg mr-2"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Social Media</h2>
                        <ul className="flex flex-wrap gap-4">
                            <li>
                                <a href="#facebook" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    <i className="fab fa-facebook fa-lg mr-2"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#twitter" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    <i className="fab fa-twitter fa-lg mr-2"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#instagram" className="text-pink-500 hover:text-pink-600 flex items-center">
                                    <i className="fab fa-instagram fa-lg mr-2"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </section> */}

                </div>
            </div>
        </div>
    );
};

export default Contact;