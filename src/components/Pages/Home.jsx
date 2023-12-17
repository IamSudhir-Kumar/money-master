import React from 'react';
import logo from './images/7.png';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">{/*<img src={logo} alt="" className='w-110 h-80 rounded-lg border-8' /> */}
      {/* Row 1 */}
       <div className="bg-white flex items-center ">
        <img src={logo} alt="" className='w-90 h-80 rounded-lg border-8' />
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
      <div className="bg-[#1cb95c] p-8">Item 3</div>

      {/* Row 3 */}
      <div className="bg-[#1cb95c] p-8">Item 4</div>
    </div>
  );
};

export default Home;
