import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import waves from './waves.svg';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#232c2b] text-white">
      {/* Waves as the background covering the entire footer */}
      <img className="w-full h-full object-cover absolute inset-0 z-0" src={waves} alt="Waves" />

      <div className="container mx-auto flex flex-col items-center relative z-10 py-8">
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="text-center">
          © 2023 MoneyMaster. All rights reserved. | Designed by Sudhir Kumar
        </p>

        <p className="text-gray-300 mt-2">
          Contact us: <a href="mailto:info@moneymaster.com" className="text-[#1cb95c]">info@moneymaster.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
