import React from 'react'
import { IoLogoGoogle } from "react-icons/io";

const signUp = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-3">
                <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>
                
                <h2 className='flex bg-gray-300 text-white px-4 py-2 gap-2 mx-auto rounded-xl items-center w-[200px]'>
                    <IoLogoGoogle />
                    Continue with Google
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md outline-none"
                            placeholder="Enter your password"
                            required    
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
                </p>
            </div>
        </div>
    )
}

export default signUp