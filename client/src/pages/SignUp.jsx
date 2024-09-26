import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white p-10 items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Chatter</h1>
          <p className="text-lg">Create an account to start chatting.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign Up
            </button>

            <div className="flex items-center justify-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button className="w-full p-3 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition">
              <FaGoogle className="mr-2" />
              Sign In with Google
            </button>
          </form>

          <p className="mt-4">
            Already a user?{' '}
            <NavLink to="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
