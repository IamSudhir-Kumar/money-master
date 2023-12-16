import React from 'react';
import logo from './images/logo.svg';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
      {/* Row 1 */}
      <div className="bg-white">
        <img src={logo} alt="" className='w-80 h-80 float-left rounded-lg ps-5'/>
        <div className=""
        >Mobilizing Ambition, Nurturing Dreams, Empowering Success
        </div>
    </div>
      <div className="bg-[#1cb95c] p-8">Item 2</div>

      {/* Row 2 */}
      <div className="bg-[#1cb95c] p-8">Item 3</div>
      <div className="bg-[#1cb95c] p-8">Item 4</div>
    </div>
  );
};

export default Home;
