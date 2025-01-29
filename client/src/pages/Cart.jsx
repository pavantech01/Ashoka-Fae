import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ setIsPaymentActive }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [address, setAddress] = useState("");

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedItems);
    }, []);

    const handleQuantityChange = (index, change) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity += change;
        if (updatedItems[index].quantity < 1) updatedItems[index].quantity = 1;
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };

    const handleRemoveItem = (index) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleProceedToPayment = () => {
        if (!address) {
            alert("Please select an address before proceeding.");
            return;
        }
        setIsPaymentActive(true);
        navigate("/razorpay", { state: { cartItems, address } });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 relative top-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <p className="text-lg text-gray-600">Your cart is empty</p>
                        <button
                            onClick={() => navigate("/products")}
                            className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Cart Items */}
                        <div className="lg:w-2/3 bg-white rounded-lg shadow p-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-b p-4">
                                    {/* Product Image */}
                                    <img src={item.image?.url} alt={item.title} className="w-20 h-20 object-cover" />

                                    {/* Product Info */}
                                    <div className="flex-grow ml-4">
                                        <h2 className="text-md font-semibold">{item.title}</h2>
                                        <p className="text-gray-500">₹{item.price.toLocaleString()}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => handleQuantityChange(index, -1)}
                                            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="mx-3">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(index, 1)}
                                            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className="ml-4 text-red-500 hover:text-red-700"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724 1.447A1 1 0 0011 3V2a1 1 0 00-1-1zm5 9a1 1 0 00-1 1v6a1 1 0 100 2h-8a1 1 0 100-2V6a1 1 0 001-1 1 1 0 00-1-1H7a1 1 0 000 2h5a1 1 0 001 1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3 bg-white rounded-lg shadow p-4">
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>₹{calculateTotal().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Delivery</span>
                                <span className="text-green-600">₹79</span>
                            </div>
                            <div className="flex justify-between mb-2 text-red-600">
                                <span>Promotion Applied</span>
                                <span>- ₹79</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>₹{calculateTotal().toLocaleString()}</span>
                            </div>

                            {/* Address Input Field */}
                            <input
                                type="text"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-4 p-2 border rounded"
                            />

                            {/* Proceed Button */}
                            <button
                                onClick={handleProceedToPayment}
                                className="mt-4 w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600"
                                disabled={!address}
                            >
                                Proceed to Buy
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
