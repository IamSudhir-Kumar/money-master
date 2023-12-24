import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md border-4 border-[#1bc060]">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1bc060] text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
