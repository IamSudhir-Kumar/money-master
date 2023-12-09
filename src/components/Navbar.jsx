import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className="bg-[#232c2b] text-white px-4 py-2 flex justify-between items-center"
            style={{ fontFamily: '"Roboto", sans-serif', borderBottom: '3px solid #1cb95c' }}
        >
            <a href="/" className="flex items-center font-pacifico font-thin text-2xl hover:text-[#1cb95c]" id="logo">
                Money Master
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="/home" className="hover:text-[#1cb95c] text-lg">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-[#1cb95c] text-lg">About</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-[#1cb95c] text-lg">Contact</a>
                </li>
            </ul>
            <button
                type="button"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
                className="md:hidden focus:outline-none"
            >
                <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 18H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M3 6H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M3 12H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className="fixed top-0 right-0 bg-gray-800 text-white w-full md:hidden px-4 py-2">
                    <li>
                        <a href="/home" className="block text-xl py-2 hover:text-gray-200">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="block text-xl py-2 hover:text-gray-200">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="block text-xl py-2 hover:text-gray-200">Contact</a>
                    </li>
                </ul>
            )}
            <a href="/login" className="ml-4 text-white bg-[#1bc060] rounded-md px-3 py-2 hover:bg-gray-700">Login</a>
        </nav>
    );
};

export default Navbar;
