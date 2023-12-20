// components/Pages/Contact.js
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Have a question or want to get in touch? Feel free to contact us using the form below.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border-2 border-gray-300 p-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border-2 border-gray-300 p-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border-2 border-gray-300 p-2" required></textarea>
        </div>

        <button type="submit" className="bg-[#1cb95c] text-white px-4 py-2 rounded-md hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
