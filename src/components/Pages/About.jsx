// components/Pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to MoneyMaster, where we believe in empowering individuals with the knowledge and tools to master their finances.
        Our mission is to make financial literacy accessible and enjoyable for everyone, from students learning the basics to aspiring entrepreneurs shaping their financial future.
      </p>
      <p className="text-lg mt-4">
        Through innovative educational resources, practical tools, and a supportive community, MoneyMaster is your companion on the journey to financial freedom.
        Join us as we embark on a mission to reshape the way people approach and understand personal finance.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
      <p className="text-lg">
        We envision a world where financial knowledge is not a barrier but a bridge to achieving dreams and aspirations.
        Our goal is to create a community that learns, grows, and thrives together, fostering a culture of financial well-being and empowerment.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
