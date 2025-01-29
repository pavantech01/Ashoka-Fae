// import React from 'react';

// function Gallery() {
//     return (
//         <div>
//             <h1>Gallery</h1>
//             <section>
//                 <h2>Images</h2>
//                 {/* Replace with dynamic image rendering */}
//                 <img src="https://via.placeholder.com/150" alt="Sample Event" />
//                 <img src="https://via.placeholder.com/150" alt="Sample Event" />
//             </section>
//             <section>
//                 <h2>Videos</h2>
//                 {/* Replace with dynamic video rendering */}
//                 <video width="320" height="240" controls>
//                     <source src="sample.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </section>
//             <section>
//                 <h2>Client Reviews</h2>
//                 <blockquote>
//                     "Amazing service and attention to detail!" - Client A
//                 </blockquote>
//                 <blockquote>
//                     "Highly recommend for any event!" - Client B
//                 </blockquote>
//             </section>
//         </div>
//     );
// }

// export default Gallery;


// import React from 'react';

// function Gallery() {
//     const galleryImages = [
//         {
//             category: "Weddings",
//             images: [
//                 { url: "/api/placeholder/600/400", alt: "Wedding Ceremony" },
//                 { url: "/api/placeholder/600/401", alt: "Reception Decor" },
//                 { url: "/api/placeholder/600/402", alt: "Wedding Details" },
//                 { url: "/api/placeholder/600/403", alt: "Floral Arrangements" }
//             ]
//         },
//         {
//             category: "Decorations",
//             images: [
//                 { url: "/api/placeholder/600/404", alt: "Table Settings" },
//                 { url: "/api/placeholder/600/405", alt: "Venue Decoration" },
//                 { url: "/api/placeholder/600/406", alt: "Lighting Design" },
//                 { url: "/api/placeholder/600/407", alt: "Floral Design" }
//             ]
//         }
//     ];

//     const testimonials = [
//         {
//             name: "Sarah & James",
//             review: "Our wedding day was absolutely perfect thanks to the amazing team!",
//             rating: 5
//         },
//         {
//             name: "Emily & Michael",
//             review: "They took care of every detail and made our dream wedding come true.",
//             rating: 5
//         },
//         {
//             name: "Jessica & David",
//             review: "Professional, creative, and absolutely wonderful to work with!",
//             rating: 5
//         }
//     ];

//     return (
//         <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen relative top-16">
//             <div className="max-w-7xl mx-auto px-4 py-16">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Gallery</h1>
//                     <p className="text-gray-600 text-lg">Beautiful moments from our wonderful events</p>
//                 </div>

//                 {/* Gallery Grid */}
//                 {galleryImages.map((section, index) => (
//                     <div key={index} className="mb-16">
//                         <h2 className="text-2xl font-bold text-navy-900 mb-8">{section.category}</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                             {section.images.map((image, imgIndex) => (
//                                 <div key={imgIndex} className="group relative overflow-hidden rounded-lg shadow-md">
//                                     <img 
//                                         src={image.url}
//                                         alt={image.alt}
//                                         className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
//                                         <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                             {image.alt}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 {/* Testimonials */}
//                 <div className="mt-16">
//                     <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Client Reviews</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {testimonials.map((testimonial, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
//                                 <div className="text-pink-500 mb-4">
//                                     {"★".repeat(testimonial.rating)}
//                                 </div>
//                                 <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
//                                 <p className="font-semibold text-navy-900">{testimonial.name}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;

import React from 'react';

function Gallery() {
    const galleryImages = [
        {
            category: "Weddings",
            images: [
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542788/Birthday_50_exz1nu.jpg", alt: "Wedding Ceremony" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542789/Chidren_birthday_qz9dwn.jpg", alt: "Floral Arrangements" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542787/Birthday_35th_ugprgs.jpg", alt: "Reception Decor" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542790/Sideview_decor_cmqvli.jpg", alt: "Wedding Details" }
                
            ]
        },
        {
            category: "Decorations",
            images: [
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737623167/WhatsApp_Image_2025-01-22_at_1.25.09_PM_2_zkytq6.jpg", alt: "Table Settings" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737623166/WhatsApp_Image_2025-01-22_at_1.25.08_PM_v4av6w.jpg", alt: "Venue Decoration" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542788/Birthday_50_exz1nu.jpg", alt: "Lighting Design" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542789/Chidren_birthday_qz9dwn.jpg", alt: "Floral Design" }
            ]
        }
    ];

    const testimonials = [
        {
            name: "Sarah & James",
            review: "Our wedding day was absolutely perfect thanks to the amazing team!",
            rating: 5
        },
        {
            name: "Emily & Michael",
            review: "They took care of every detail and made our dream wedding come true.",
            rating: 5
        },
        {
            name: "Jessica & David",
            review: "Professional, creative, and absolutely wonderful to work with!",
            rating: 5
        }
    ];

    return (
        <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen relative top-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Gallery</h1>
                    <p className="text-gray-600 text-lg">Beautiful moments from our wonderful events</p>
                </div>

                {/* Gallery Grid */}
                {galleryImages.map((section, index) => (
                    <div key={index} className="mb-16">
                        <h2 className="text-2xl font-bold text-navy-900 mb-8">{section.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {section.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="group relative overflow-hidden rounded-lg shadow-md">
                                    <img 
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Testimonials */}
                <div className="mt-16 mb-16">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Client Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-pink-500 mb-4">
                                    {"★".repeat(testimonial.rating)}
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Gallery;
