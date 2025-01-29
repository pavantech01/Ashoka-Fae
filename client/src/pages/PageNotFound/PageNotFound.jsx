import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (

    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">404 - Page Not Found</h1>
        <p className="text-lg mb-4">The page you are looking for does not exist.</p>

        <Link to="/" className="no-underline text-lg text-black">
        
        <p className='no-underline'>Head back to our interesting <span className='text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out'>Home</span>  Page!</p>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
