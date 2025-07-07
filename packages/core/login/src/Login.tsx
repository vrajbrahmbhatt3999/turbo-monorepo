import React from 'react';
import { Button } from '@my-monorepo/ui';
import { useLogin } from './useLogin';

export const Login = () => {
  const { form, handleChange, handleSubmit } = useLogin();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 0, 0, 0.33),rgba(5, 43, 84, 0.69)), url('/background-login.png')", // Added linear-gradient for dark overlay
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div
          className="flex bg-transparent shadow-lg border overflow-hidden max-w-sm lg:max-w-6xl w-full"
          style={{
            borderRadius: '30px',

            border: '1px solid white',
          }}
        >
          <div
            className="hidden md:flex lg:w-5/12 flex-col justify-between p-8 text-white"
            style={{
              backgroundColor: 'rgba(0, 123, 255, 0.69)',
              borderRadius: '30px',
              border: '1px solid white',
            }}
          >
            {/* Top Heading */}
            <div className="text-center mt-7 font-inter">
              <h2 className="text-5xl font-light">Welcome to</h2>
              <h1 className="text-6xl font-extrabold text-white">GT POS</h1>
              <p className="mt-2 text-3xl">We made it for you</p>
            </div>

            {/* Middle Logo */}
            <div className="flex justify-center my-6">
              <img
                src="/ethics-logo-login.png"
                alt="ETHICS"
                className="h-40 w-40 object-contain rounded-full"
              />
            </div>

            {/* Bottom Illustration */}
            <div className="flex justify-center">
              <img
                src="/Food consumption.png"
                alt="POS Illustration"
                className="h-38 object-contain"
              />
            </div>
          </div>

          <div
            className="w-full lg:w-8/12 flex flex-col justify-around bg-transparent py-24 px-28"
            style={{
              borderTopRightRadius: '30px',
              borderBottomRightRadius: '30px',
              backdropFilter: 'blur(6px)',
            }}
          >
            <h2 className="text-5xl font-black text-white font-poppins">Login</h2>

            <div className="">
              <label className="block text-white text-21 mb-2 font-poppins">
                Your Name
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="text"
                placeholder="Username here"
                required
              />
            </div>

            <div className="">
             <label className="block text-white text-21 mb-2 font-poppins">
                Password
              </label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                placeholder="••••••••"
                required
              />
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-21 text-white hover:text-gray-800"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-md transition"
              >
                Lets Go →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
