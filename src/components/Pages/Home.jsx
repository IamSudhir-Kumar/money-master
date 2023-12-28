import React from 'react';
import logo from './images/ll.svg';
import animate from './images/ww.svg';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {/* Row 1 */}
      <div className="bg-white flex items-center ">
        <img src={logo} alt="" className='w-100 h-80 rounded-lg border-8' />
        <div className="text-center text-2xl font-normal ps-4 font-poppins">
          <span className="font-bold text-green-500 font-pacifico hover:text-green-800">E</span> mpowering <br />
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">A</span> spirations <br />
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">S</span> haping <br />
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">Y</span> outh<br />
        </div>
      </div>

      {/* Row 2 */}
      <div className="p-8 justify-center items-center space-y-1.5">
        <p className="text-left text-5xl font-poppins">
          <span className="font-bold text-green-500 font-pacifico hover:text-green-800">F</span> inancial
          <br />
          <span className="font-bold text-green-500 font-pacifico hover:text-green-800">L</span> iteracy <br />
        </p>
        <h5 className='font-poppins'>Embark on a transformative journey with MoneyMaster, where financial empowerment takes a new form. We usher in a
          revolutionary approach to navigating the complexities of the financial world, offering a beacon of guidance for those seeking a new way to achieve freedom.
          Through comprehensive tools, educational resources, and a community-driven ethos, we empower you to chart your unique path to financial liberation.
          Join us on this enriching expedition, redefine your relationship with money, and embrace a future of newfound freedom in the world of finance.</h5>
      </div>
      {/* Row 3 */}
      <div className="bg-white p-8 font-poppins">
  <a href="" className="font-poppins text-[#1cb95c] text-4xl pointer-events-auto hover:text-black mb-0 px-0">
    Join Us
  </a>
  <div className="border-b-2 border-black mt-1"></div>
  <form className="mt-4">
    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border-2 border-gray-300 p-2" required />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-2 border-gray-300 p-2" required />
    </div>

    <div className="mb-4">
      <label htmlFor="dob" className="block text-lg font-bold mb-2">Date of Birth</label>
      <input type="date" id="dob" name="dob" className="w-full border-2 border-gray-300 p-2" required />
    </div>

    {/* Add more form fields as needed */}
    
    <button type="submit" className="bg-[#1cb95c] text-white p-2 rounded-md hover:bg-green-700">
      Join Us
    </button>
  </form>
</div>
        {/* Row 4 */}
        <img className="w-85 h-85"  src={animate} alt="" />
    </div>
  );
};

export default Home;
