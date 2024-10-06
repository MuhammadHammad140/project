import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hammad1 from "../assets/hammad5.jpg";

const Hero = () => {
  return (
    <div id="home" className="relative p-0">

      <img src={hammad1} alt="Hero" className="w-full h-[600px] md:h-[800px] object-cover m-0 p-0" />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Muhammad Hammad</h1>
        <TypeAnimation
          sequence={[
            "I'm a Web Developer", // First animation text
            2000, // Pause for 2 seconds
            '', // Clear text
            1000, // Pause for 1 second before repeating
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-2xl md:text-3xl mt-2"
        />
      </div>
    </div>
  );
};

export default Hero;
