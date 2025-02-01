import React from 'react'

function TopButton() {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button className="rounded-full p-2 w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Top
            </button>
        </div>
    )
}

export default TopButton