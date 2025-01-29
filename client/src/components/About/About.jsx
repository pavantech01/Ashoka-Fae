// import React from 'react';

// function About() {
//     return (
//         <div className="about-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             {/* Hero Section */}
//             <section className="hero-section text-center mb-12">
//                 <h1 className="text-4xl font-bold mb-4">About Us</h1>
//                 <p className="text-lg text-gray-600">
//                     We are dedicated to making your events unforgettable with our expertise and passion.
//                 </p>
//             </section>

//             {/* Why Choose Us Section */}
//             <section className="why-choose-us mb-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
//                         <img src="https://picsum.photos/300/200" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
//                         <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
//                         <p className="text-gray-600">
//                             Our team of professionals has years of experience in event planning and execution.
//                         </p>
//                     </div>
//                     <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50">
//                         <img src="https://picsum.photos/300/201" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
//                         <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
//                         <p className="text-gray-600">
//                             We tailor our services to meet your unique needs and preferences.
//                         </p>
//                     </div>
//                     <div className="card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50">
//                         <img src="https://picsum.photos/300/202" alt="Why Choose Us" className="w-full h-48 object-cover rounded-lg mb-4" />
//                         <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
//                         <p className="text-gray-600">
//                             Every detail is meticulously planned to ensure a flawless event.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Previous Clients Section */}
//             <section className="previous-clients mb-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Previous Clients</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/150/150" alt="Client 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Client A</h3>
//                         <p className="text-gray-600">"Amazing service and attention to detail!"</p>
//                     </div>
//                     <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/151/151" alt="Client 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Client B</h3>
//                         <p className="text-gray-600">"Highly recommend for any event!"</p>
//                     </div>
//                     <div className="client-card bg-white shadow-lg rounded-lg p- 6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/152/152" alt="Client 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Client C</h3>
//                         <p className="text-gray-600">"Professional and reliable service!"</p>
//                     </div>
//                     <div className="client-card bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/153/153" alt="Client 4" className="w-24 h-24 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Client D</h3>
//                         <p className="text-gray-600">"They made our event a huge success!"</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Our Team Section */}
//             <section className="our-team mb-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/200/200" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">John Doe</h3>
//                         <p className="text-gray-600">Event Planner</p>
//                     </div>
//                     <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/201/201" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Jane Smith</h3>
//                         <p className="text-gray-600">Catering Specialist</p>
//                     </div>
//                     <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/202/202" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Mike Johnson</h3>
//                         <p className="text-gray-600">Decor Expert</p>
//                     </div>
//                     <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
//                         <img src="https://picsum.photos/203/203" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4" />
//                         <h3 className="text-xl font-semibold">Emily Davis</h3>
//                         <p className="text-gray-600">Logistics Coordinator</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Policies Section */}
//             <section className="policies mb-12">
//                 <h2 className="text-3xl font-bold text-center mb-8">Our Policies</h2>
//                 <p className="text-gray-600 text-center">
//                     We prioritize transparency and reliability in all our dealings. Our policies are designed to ensure that our clients are informed and satisfied at every step of the event planning process.
//                 </p>
//             </section>


//         </div>
//     );
// }

// export default About;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function About() {
    const testimonials = [
        { name: "Client A", quote: "Amazing service and attention to detail!" },
        { name: "Client B", quote: "Highly recommend for any event!" },
        { name: "Client C", quote: "Professional and reliable service!" },
        { name: "Client D", quote: "They made our event a huge success!" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className="about-page min-h-screen bg-gradient-to-b from-white to-pink-50 relative top-10">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-center text-indigo-900 mb-6">
                    About Us
                </h1>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-pink-500">
                            Team Of Passionate People
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We are dedicated to making your events unforgettable with our expertise and passion.
                            Our team of professionals brings years of experience in event planning and execution,
                            ensuring every detail is meticulously planned for a flawless event.
                        </p>
                        <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                            Read More
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/imagecon-group.jpg"
                            alt="Event Planning"
                            className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                        />
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Team",
                                description: "Our team of professionals has years of experience in event planning and execution."
                            },
                            {
                                title: "Custom Solutions",
                                description: "We tailor our services to meet your unique needs and preferences."
                            },
                            {
                                title: "Attention to Detail",
                                description: "Every detail is meticulously planned to ensure a flawless event."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-xl font-semibold text-indigo-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Amazing Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "John Doe", role: "Event Planner" },
                            { name: "Jane Smith", role: "Catering Specialist" },
                            { name: "Mike Johnson", role: "Decor Expert" },
                            { name: "Pavan Tech", role: "Web Developer" }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-4">
                                    <img
                                        src={`https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434642/samples/smile.jpg`}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-pink-100"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-indigo-900">{member.name}</h3>
                                <p className="text-pink-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                {/* <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Client A", quote: "Amazing service and attention to detail!" },
                            { name: "Client B", quote: "Highly recommend for any event!" },
                            { name: "Client C", quote: "Professional and reliable service!" },
                            { name: "Client D", quote: "They made our event a huge success!" }
                        ].map((client, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={`https://picsum.photos/200/201`}
                                        alt={client.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-900 mb-2 flex justify-center">{client.name}</h3>
                                <p className="text-gray-600 italic">"{client.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                
                {/* Testimonials Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">What Our Clients Say</h2>
                    <Slider {...settings}>
                        {testimonials.map((client, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-100">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={`https://picsum.photos/200/201?random=${index}`}
                                        alt={client.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-900 mb-2 flex justify-center">{client.name}</h3>
                                <p className="text-gray-600 italic flex justify-center">"{client.quote}"</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Policies Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Policies</h2>
                    <p className="text-gray-600">
                        We prioritize transparency and reliability in all our dealings. Our policies are designed
                        to ensure that our clients are informed and satisfied at every step of the event planning process.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;