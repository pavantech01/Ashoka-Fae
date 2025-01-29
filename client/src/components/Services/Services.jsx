// import React from 'react';

// function Services() {
//     return (
//         <div className="max-w-6xl mx-auto p-6">
//     <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
//     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
//     <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//         <img src="https://picsum.photos/200/300" alt="Decoration" className="w-full h-48 object-cover mb-4 rounded-lg" />
//         <h2 className="text-xl font-semibold">Decoration</h2>
//         <p className="text-gray-600">Beautiful and elegant decorations for your events.</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
//             Learn More
//         </button>
//     </li>
//     <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//         <img src="https://picsum.photos/200/301" alt="Food & Catering" className="w-full h-48 object-cover mb-4 rounded-lg" />
//         <h2 className="text-xl font-semibold">Food & Catering</h2>
//         <p className="text-gray-600">Delicious food options tailored to your needs.</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
//             Learn More
//         </button>
//     </li>
//     <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//         <img src="https://picsum.photos/200/302" alt="Cinematography" className="w-full h-48 object-cover mb-4 rounded-lg" />
//         <h2 className="text-xl font-semibold">Cinematography</h2>
//         <p className="text-gray-600">Capturing your moments with stunning visuals.</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
//             Learn More
//         </button>
//     </li>
//     <li className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//         <img src="https://picsum.photos/200/303" alt="AV & Lighting" className="w-full h-48 object-cover mb-4 rounded-lg" />
//         <h2 className="text-xl font-semibold">AV & Lighting</h2>
//         <p className="text-gray-600">Professional audio and lighting solutions for events.</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-110">
//             Learn More
//         </button>
//     </li>
// </ul>
// </div>
//     );
// }

// export default Services;

// import React from 'react';
// import { Camera, Flower2, MapPin, Music, Utensils, Palette } from 'lucide-react';

// function Services() {
//     const services = [
//         {
//             icon: <Camera size={32} className="text-blue-500" />,
//             title: "Photography & Video",
//             description: "Capture every precious moment of your special day with our professional photography and videography services.",
//         },
//         {
//             icon: <Flower2 size={32} className="text-blue-500" />,
//             title: "Floral Arrangements",
//             description: "Beautiful and elegant floral designs to match your wedding theme and style perfectly.",
//         },
//         {
//             icon: <MapPin size={32} className="text-blue-500" />,
//             title: "Venue Selection",
//             description: "Find the perfect location for your dream wedding with our venue scouting services.",
//         },
//         {
//             icon: <Music size={32} className="text-blue-500" />,
//             title: "Entertainment",
//             description: "Professional DJs and live music options to keep your guests entertained throughout the event.",
//         },
//         {
//             icon: <Utensils size={32} className="text-blue-500" />,
//             title: "Catering",
//             description: "Exquisite menu options and professional catering services for your wedding reception.",
//         },
//         {
//             icon: <Palette size={32} className="text-blue-500" />,
//             title: "Decor & Styling",
//             description: "Transform your venue with our stunning decorations and styling services.",
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-b from-blue-50 to-white">
//             <div className="max-w-6xl mx-auto px-6 py-16">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h1>
//                     <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                         We offer a comprehensive range of wedding planning services to make your special day perfect.
//                     </p>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div key={index} 
//                             className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                             <div className="flex flex-col items-center text-center">
//                                 <div className="mb-4 p-3 bg-blue-100 rounded-full">
//                                     {service.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-3 text-navy-900">{service.title}</h3>
//                                 <p className="text-gray-600 mb-4">{service.description}</p>
//                                 <button className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Additional Information */}
//                 <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
//                     <h2 className="text-2xl font-bold text-navy-900 mb-4">Customized Packages Available</h2>
//                     <p className="text-gray-600 mb-6">
//                         We understand that every wedding is unique. Contact us to create a custom package that perfectly suits your needs and budget.
//                     </p>
//                     <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300">
//                         Contact Us
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Services;

import React from 'react';
import { Camera, Flower2, MapPin, Music, Utensils, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white relative top-16">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer a comprehensive range of wedding planning services to make your special day perfect.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <Camera size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Photography & Video</h3>
                            <p className="text-gray-600 mb-4">
                                Capture every precious moment of your special day with our professional photography and videography services.
                            </p>
                            <button className="mt-2 px-6 py-2 border-2 border-blue-400 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <Flower2 size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Floral Arrangements</h3>
                            <p className="text-gray-600 mb-4">
                                Beautiful and elegant floral designs to match your wedding theme and style perfectly.
                            </p>
                            <button className="mt-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                            
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <MapPin size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Venue Selection</h3>
                            <p className="text-gray-600 mb-4">
                                Find the perfect location for your dream wedding with our venue scouting services.
                            </p>
                            <button className="mt-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <Music size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Entertainment</h3>
                            <p className="text-gray-600 mb-4">
                                Professional DJs and live music options to keep your guests entertained throughout the event.
                            </p>
                            <button className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <Utensils size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Catering</h3>
                            <p className="text-gray-600 mb-4">
                                Exquisite menu options and professional catering services for your wedding reception.
                            </p>
                            <button className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                <Palette size={32} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Decor & Styling</h3>
                            <p className="text-gray-600 mb-4">
                                Transform your venue with our stunning decorations and styling services.
                            </p>
                            <button className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">Customized Packages Available</h2>
                    <p className="text-gray-600 mb-6">
                        We understand that every wedding is unique. Contact us to create a custom package that perfectly suits your needs and budget.
                    </p>
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300">
                        <Link to="/contact" className='text-white no-underline'>Contact Us</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;
