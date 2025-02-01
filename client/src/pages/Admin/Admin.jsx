import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 mt-10 mb-10">
            <h1 className="text-3xl font-bold text-center mb-4">Admin Page is under Development Phase</h1>
            <p className="text-lg text-center mb-6">Try to utilise other features of admin rights</p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Events Page</Link>
                <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Products Page</Link>
            </div>
        </div>
    )
}

export default Admin