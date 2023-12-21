import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-center bg-[#1cb95c] text-white p-4 rounded-lg font-pacifico text-4xl mb-8">
        About Us
      </div>

      <div className="border-solid border-black border-2 m-4 rounded-lg font-poppins p-5 bg-white shadow-md">
        <p className="text-lg">
          Welcome to MoneyMaster, where we believe in empowering individuals with the knowledge and tools to master their finances. Our mission is to make financial literacy accessible and enjoyable for everyone, from students learning the basics to aspiring entrepreneurs shaping their financial future.
        </p>
        <p className="text-lg mt-4">
          Through innovative educational resources, practical tools, and a supportive community, MoneyMaster is your companion on the journey to financial freedom. Join us as we embark on a mission to reshape the way people approach and understand personal finance.
        </p>
      </div>

      <div className="border-solid border-black border-2 m-4 rounded-lg font-poppins p-5 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg">
          We envision a world where financial knowledge is not a barrier but a bridge to achieving dreams and aspirations. Our goal is to create a community that learns, grows, and thrives together, fostering a culture of financial well-being and empowerment.
        </p>
      </div>

      <div className="border-solid border-black border-2 m-4 rounded-lg font-poppins p-5 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <p className="text-lg">
          At MoneyMaster, we are guided by core values such as transparency, integrity, and inclusivity. We believe in providing accurate and unbiased information to empower individuals in making informed financial decisions.
        </p>
      </div>

      <div className="border-solid border-black border-2 m-4 rounded-lg font-poppins p-5 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg">
          Become a part of the MoneyMaster community! Connect with like-minded individuals, share experiences, and access valuable resources to enhance your financial knowledge and skills.
        </p>
      </div>
    </div>
  );
};

export default About;
