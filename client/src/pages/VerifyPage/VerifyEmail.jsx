import React, { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import axios from "axios";

import { Base_URL } from '../../utils/api'; // Import Base_URL
const REACT_APP_BACKEND_URL = Base_URL; // Use Base_URL instead


const VerifyEmail = () => {

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    // eslint-disable-next-line
    const [message, setMessage] = useState('Verifying email...');
    
    useEffect(() => {
        if (!token) {
            setMessage('User ID and verification code are required');
            return;
        }

        axios.get(`${REACT_APP_BACKEND_URL}/api/auth/verify-email?token=${token}`)
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                setMessage(error.response?.data?.message || 'Verification failed');
            });
    }, [token]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white shadow rounded-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Email Verification Success
                    </h2>
                    {/* <p className="mt-2 text-sm text-gray-600">
                        {message}
                    </p> */}
                    <p>
                        Try to login now <a href="/login">here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
