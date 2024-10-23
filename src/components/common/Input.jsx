import React from 'react'

function Input({ label, type, placeholder, classes }) {
    return (
        <div className="mb-4">
            <label htmlFor="name">{label}</label>
            <input type={type}
                id="name"
                name="name"
                placeholder={placeholder}
                className={`w-full p-2 border border-gray-400 rounded-lg ${classes}`}
            />
        </div>
    )
}

export default Input