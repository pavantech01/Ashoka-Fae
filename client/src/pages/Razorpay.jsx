import React from 'react';
import { useLocation } from 'react-router-dom';

const Razorpay = () => {
    const location = useLocation();
    const { cartItems, address } = location.state;

    const handlePayment = async () => {
        try {
            // Step 1: Create an order on the server
            const response = await fetch('http://localhost:5000/api/payments/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    amount: cartItems.reduce((total, item) => total + item.price, 0), // Total amount calculation
                }),
            });

            const orderData = await response.json();
            if (!orderData.id) {
                alert('Failed to create payment order.');
                return;
            }

            // Step 2: Load Razorpay SDK and process the payment
            const razorpayScript = document.createElement('script');
            razorpayScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
            razorpayScript.onload = () => {
                const options = {
                    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Replace with Razorpay Key ID
                    amount: orderData.amount,
                    currency: 'INR',
                    name: 'Ashoka Events',
                    description: 'Order Payment',
                    order_id: orderData.id,
                    handler: async (response) => {
                        const verifyResponse = await fetch('http://localhost:5000/api/payments/verify', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            },
                            body: JSON.stringify(response),
                        });

                        const result = await verifyResponse.json();
                        alert(result.message || 'Payment successful!');
                    },
                    prefill: {
                        name: 'Customer Name',
                        email: 'customer@example.com',
                        contact: '7894567892',
                    },
                    theme: {
                        color: '#3399cc',
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.on('payment.failed', (response) => {
                    alert('Payment failed. Please try again.');
                });
                rzp.open();
            };
            document.body.appendChild(razorpayScript);
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0); // Total amount calculation

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">Payment Page</h1>
                <h2 className="text-lg font-medium mb-2 text-gray-700">Items to be paid for:</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600">Price: Rs {item.price}</p>
                        </div>
                    </div>
                ))}
                <h2 className="text-lg font-medium mt-4 text-gray-700">Total Amount:</h2>
                <p className="text-gray-800 font-semibold">Rs {totalAmount}</p>
                <h2 className="text-lg font-medium mt-4 text-gray-700">Selected Address:</h2>
                <p className="text-gray-600 mb-6">{address}</p>
                <button 
                    onClick={handlePayment} 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Razorpay;
