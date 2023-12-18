import React from 'react';
import Slider from 'react-slick';
import logo from './images/ll.svg';
import animate from './images/ww.svg';

const Home = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the interval in milliseconds
  };

  const headlines = [
    {
      title: "Asian Development Bank",
      content: "Only 27% of Indian adults – and 24% of women – meet the minimum level of financial literacy as defined by the Reserve Bank of India. Women are particularly responsive to financial literacy outreach. Traditionally they manage the household budget and are often eager to start home-based businesses. When armed with foundational knowledge, financial literacy tools, and small-scale business opportunities, women entrepreneurs can make a remarkable impact on their families and communities.",
      link: "https://www.adb.org/results/india-financial-literacy-programs-lifting-families-out-debt-fueling-new-prosperity#:~:text=Only%2027%25%20of%20Indian%20adults,the%20Reserve%20Bank%20of%20India.",
    },
   
    // Add more headlines as needed
  ];

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



      {/* Row 2 */}
      {/* <div className="bg-[#1cb95c] p-8 rounded-md">
        <Slider {...slickSettings}>
          {headlines.map((headline, index) => (
            <div key={index}>
              <div className="border-t-2 border-white mb-4"></div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white text-center font-poppins">{headline.title}</h2>

              <div className="text-gray-200 text-center mb-4">
                <span className='text-2xl md:text-3xl lg:text-4xl font-extralight mb-0'>&#x201C;</span>
              </div>

              <p className="text-gray-200 text-base md:text-lg lg:text-xl">{headline.content}</p>
              <br />
              <a
                className='text-white text-center font-poppins hover:text-black text-lg md:text-xl lg:text-2xl'
                href={headline.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                Read More...
              </a>

              <div className="text-gray-200 text-center mt-4">
                <span className='text-2xl md:text-3xl lg:text-4xl font-extralight'>&#x201D;</span>
              </div>

              <div className="border-b-2 border-white mt-4"></div>
            </div>



          ))}
        </Slider>
      </div> */}

      {/* Row 3 */}
      <div className="bg-white p-8">
        <a href="" className="font-poppins text-[#1cb95c] text-4xl pointer-events-auto hover:text-black mb-0 px-0">Join Us</a>
        <div className="border-b-2 border-black mt-1 "></div>
        <form>
    {/* Add your form fields here */}
    {/* Example: */}
    <input type="email" placeholder="Enter your email" className="mb-4 p-2 w-full border border-gray-300" required />

    <button type="submit" className="bg-[#1cb95c] text-white p-2 rounded-md hover:bg-green-700">
      Join Us
    </button>
    <img className="w-85 h-85"  src={animate} alt="" />
  </form>
      </div>
    </div>
  );
};

export default Home;
