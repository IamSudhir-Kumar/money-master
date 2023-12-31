import React from 'react'

const joinus = () => {
    return (
        <>
            <form className="mt-4">

                <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border-2 border-gray-300 p-2" required />

                <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-2 border-gray-300 p-2" required />

                <label htmlFor="dob" className="block text-lg font-bold mb-2">Date of Birth</label>
                <input type="date" id="dob" name="dob" className="w-full border-2 border-gray-300 p-2" required />

                <button type="submit" className="bg-[#1cb95c] text-white p-2 rounded-md hover:bg-green-700">
                    Join Us
                </button>
            </form>
        </>

    )
}

export default joinus