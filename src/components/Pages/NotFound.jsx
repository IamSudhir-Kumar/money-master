// components/Pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-poppins">
      <div className="text-5xl font-bold text-[#1cb95c] mb-4">404</div>
      <div className="text-xl font-semibold mb-4">Page Not Found</div>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for might be in another universe.
      </p>
      <DotLottieReact
      src="https://lottie.host/63262af7-bc51-47fe-8635-1c6275d7a5ed/hA57OIEC1y.lottie"
      loop
      autoplay
      className='h-3/5 w-3/5'
    />
      <Link
        to="/"
        className="text-[#1cb95c] hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
