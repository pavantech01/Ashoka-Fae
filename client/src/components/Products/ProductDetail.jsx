import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaRupeeSign, FaTags } from 'react-icons/fa';

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state;

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert('Product added to cart!');
    };

    const handleBuyNow = () => {
        // Logic to route to the cart page
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/cart');
    };

    return (
        <div className="container mx-auto px-4 py-8 relative top-16 min-h-screen">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="product-image w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src={product.image.url}
                        alt={product.title}
                        className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="product-info w-full lg:w-1/2 lg:pl-8">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-4">{product.title}</h1>
                    <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                        <FaRupeeSign className="text-xl text-black mr-2" />
                        <span className="text-2xl font-semibold">Rs {product.price}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaTags className="text-xl text-blue-500 mr-2" />
                        <span className="text-md font-medium">{product.category}</span>
                    </div>
                    <div className="flex space-x-6 mt-6">
                        <button
                            onClick={handleBuyNow}
                            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                        >
                            Buy Now
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                        >
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
