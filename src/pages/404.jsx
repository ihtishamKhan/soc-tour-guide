import React from 'react'
import Navbar from '../components/Navbar'

function NotFound() {
    return (
        <div>
            <Navbar />


            <div className="container flex justify-center align-center flex-col h-100">
                <h1 className="text-3xl font-semibold mt-8 p-4">404 Not Found</h1>
                <p className="p-4">
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    )
}

export default NotFound