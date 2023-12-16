import React from 'react';
import logo from './images/logo.svg';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {/* Row 1 */}
      <div className="bg-white flex items-center">
        <img src={logo} alt="" className='w-70 h-80 rounded-lg'/>
        <div className="text-center text-2xl font-normal ps-4">
          <span className="font-bold text-green-500 font-pacifico hover:text-green-800">E</span> mpowering <br/>
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">A</span> spirations <br/>
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">S</span> haping <br/>
          <span className="font-bold text-green-500 font-pacifico  hover:text-green-800">Y</span> outh<br/>
        </div>   
      </div>

      {/* Row 2 */}
      <div className="bg-[#1cb95c] p-8">Item 2</div>
      <div className="bg-[#1cb95c] p-8">Item 3</div>

      {/* Row 3 */}
      <div className="bg-[#1cb95c] p-8">Item 4</div>
    </div>
  );
};

export default Home;
