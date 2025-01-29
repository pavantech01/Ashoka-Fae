// import React from 'react';

// function Home() {
//     return (
//         <div className="home-page">
//             {/* Hero Section */}
//             <section className="hero-section flex flex-col items-center text-center p-8 bg-gray-100 ">
//                 <h1 className="text-4xl font-bold mb-4">Welcome to Event Management</h1>
//                 <p className="mb-4">Plan your dream event with us!</p>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105">
//                     Get Started
//                 </button>
//                 {/* <img src="https://picsum.photos/800/400" alt="Hero-Image" className="mt-4 w-full max-w-md rounded-lg shadow-lg" /> */}
//                 <img src="https://picsum.photos/800/400" alt="Hero-Image" className="mt-4 w-full object-cover rounded-lg shadow-lg max-h-72" />

//             </section>

//             {/* Popular Events Section */}
//             <section className="popular-events p-8">
//                 <h2 className="text-3xl font-bold mb-4">Popular Events</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     <div className="event-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
//                         <img src="https://picsum.photos/300/200" alt="Event 1" className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold transition-all duration-300 hover:text-blue-600">Wedding Planning</h3>
//                         <p className="text-gray-600 transition-all duration-300 hover:text-gray-800">Plan your dream wedding with us!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                     <div className="event-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50">
//                         <img src="https://picsum.photos/300/201" alt="Event 2" className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold transition-all duration-300 hover:text-green-600">Corporate Events</h3>
//                         <p className="text-gray-600 transition-all duration-300 hover:text-gray-800">Host your corporate events with us!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                     <div className="event-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50">
//                         <img src="https://picsum.photos/300/202" alt="Event 3" className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold transition-all duration-300 hover:text-red-600">Birthday Parties</h3>
//                         <p className="text-gray-600 transition-all duration-300 hover:text-gray-800">Celebrate your birthday with us!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Discounts & Offers Section */}
//             <section className="discounts-offers p-8 bg-gray-100">
//                 <h2 className="text-3xl font-bold mb- 4">Discounts & Offers</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     <div className="discount-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50">
//                         <h3 className="text-xl font-semibold">10% Off on Wedding Planning</h3>
//                         <p>Use code WED10 at checkout</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Redeem Now</button>
//                     </div>
//                     <div className="discount-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50">
//                         <h3 className="text-xl font-semibold">20% Off on Corporate Events</h3>
//                         <p>Use code CORP20 at checkout</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Redeem Now</button>
//                     </div>
//                     <div className="discount-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50">
//                         <h3 className="text-xl font-semibold">Free Consultation on Birthday Parties</h3>
//                         <p>Use code BDAYFREE at checkout</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Redeem Now</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Specialized Vendors Section */}
//             <section className="specialized-vendors p-8">
//                 <h2 className="text-3xl font-bold mb-4">Specialized Vendors</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     <div className="vendor-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
//                         <img src="https://picsum.photos/300/203" alt="Vendor 1" className="w-full h-32 object-cover rounded-t-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold mt-2">Catering Services</h3>
//                         <p>Delicious food for your events!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Learn More</button>
//                     </div>
//                     <div className="vendor-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50">
//                         <img src="https://picsum.photos/300/204" alt="Vendor 2" className="w-full h-32 object-cover rounded-t-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold mt-2">Photography Services</h3>
//                         <p>Capture your memories with us!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Learn More</button>
//                     </div>
//                     <div className="vendor-card bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50">
//                         <img src="https://picsum.photos/300/205" alt="Vendor 3" className="w-full h-32 object -cover rounded-t-lg mb-4 transition-all duration-300 hover:opacity-90" />
//                         <h3 className="text-xl font-semibold mt-2">Decor Services</h3>
//                         <p>Transform your event space with us!</p>
//                         <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-lg">Learn More</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer className="p-4 bg-gray-800 text-white text-center">
//                 <p>&copy; 2025 Event Management</p>
//             </footer>
//         </div>
//     );
// }

// export default Home;

import React from 'react';

function Home() {
    let name =localStorage.getItem('fullName'); // Store name

    return (
        <div className="home-page relative top-16">
            {/* Hero Section */}
            <section className="hero-section flex flex-col items-center text-center p-8 bg-gradient-to-b from-pink-50 to-white min-h-[60vh] justify-center">
                
                <h2 className="text-4xl font-bold mb-4 text-navy-900">Hello {name}!! Your Dream Event</h2>
                <p className="text-xl text-gray-600 mb-8">As Simple As Pie</p>

                {/* <button className="bg-pink-500 text-white py-3 px-8 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 text-lg" onClick={() => window.scrollTo({ top: document.querySelector('.p-12.bg-white').offsetTop, behavior: 'smooth' })}>
                    See More Info
                </button> */}
                <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300" onClick={() => window.scrollTo({ top: document.querySelector('.p-12.bg-white').offsetTop, behavior: 'smooth' })}>
                    See More Info
                </button>
            

                <img src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542790/Sideview_decor_cmqvli.jpg" alt="Hero" className="mt-8 w-full max-w-4xl rounded-lg shadow-lg" />
            </section>

            {/* Popular Events Section */}
            <section className="p-12 bg-white">
                <h2 className="text-3xl font-bold mb-8 text-center text-navy-900">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Full Video And Camera Service",
                            icon: "📸",
                            description: "Capture every moment of your special day"
                        },
                        {
                            title: "We Arrange Flowers And Decorations",
                            icon: "🌸",
                            description: "Beautiful floral arrangements and decor"
                        },
                        {
                            title: "Finding The Right Place For You",
                            icon: "🏰",
                            description: "Perfect venues for your perfect day"
                        }
                    ].map((service, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-navy-900">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Preview Section */}
            {/* <section className="p-12 bg-pink-50">
                <h2 className="text-3xl font-bold mb-8 text-center text-navy-900">Our Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {[1, 2, 3].map((img, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg group">
                            <img 
                                src={`https://res.cloudinary.com/your-cloud-name/image/upload/v1618895370/gallery-${index+1}.jpg`}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Testimonial Section */}
            <section className="p-12 bg-white">
                <h2 className="text-3xl font-bold mb-8 text-center text-navy-900">Client's Review</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                        <img src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434633/samples/people/kitchen-bar.jpg"
                            alt="Client" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Happy Couple</h3>
                        <p className="text-gray-600 mb-4">
                            "They made our special day absolutely perfect! Highly recommended for any couple planning their dream wedding."
                        </p>
                        <div className="flex justify-center text-pink-500">
                            {"★".repeat(5)}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
