import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-[#1cb95c] mb-6 font-pacifico">Contact Us</h1>
      <p className="text-lg mb-8 font-poppins">
        Have a question or want to get in touch? Feel free to contact us using the form below.
      </p>

      <form className="max-w-md mx-auto font-poppins" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-2 text-[#1cb95c]">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1cb95c]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2 text-[#1cb95c]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1cb95c]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2 text-[#1cb95c]">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#1cb95c]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#1cb95c] text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
