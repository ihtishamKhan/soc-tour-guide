import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/common/Input'

function Contact() {
    return (
        <div>
            <Navbar />

            <div className="container mx-auto w-1/2 m-auto">
                <h1 className="text-3xl font-semibold mt-8 p-4">Contact Us</h1>
                <p className="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quia. Nihil, quod
                    voluptates. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>

                <form className="p-4 bg-gray-100 rounded-lg shadow-lg mt-8">
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        classes="bg-blue-200"
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder={"Enter your email"}
                        classes={"bg-yellow-200"}
                    />

                    <Input
                        label="Phone"
                        type="text"
                    />

                    <Input
                        label="Password"
                        type="password"
                    />

                    <div className="mb-4">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} className="w-full p-2 border border-gray-400 rounded-lg"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-4">Submit</button>
                </form>

            </div >

        </div >
    )
}

export default Contact