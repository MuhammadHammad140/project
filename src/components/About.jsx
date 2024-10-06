import React from "react";
import profilePic from '../assets/hammad4.jpg';

const About = () => {
  return (
    <div id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">About</h2>
    
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          <div className="md:w-1/3 w-full mb-6 md:mb-0">
            <img
              src={profilePic}
              alt="Muhammad Hammad"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>

          <div className="md:w-2/3 w-full md:pl-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Web Developer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600"><span className="font-bold">Age:</span> 25</p>
                <p className="text-gray-600"><span className="font-bold">Birthday:</span> Feb 12, 1999</p>
                <p className="text-gray-600"><span className="font-bold">Degree:</span> Bachelor's in Information Technology</p>
              </div>
              <div>
                <p className="text-gray-600"><span className="font-bold">Contact:</span> +92 3068592792</p>
                <p className="text-gray-600"><span className="font-bold">City:</span> Karachi, Pakistan</p>
              </div>
            </div>

            <p className="mt-6 text-lg text-gray-700 ">
              I am a passionate and creative Web Developer with a knack for crafting responsive, user-friendly websites.
              I specialize in building front-end web applications with modern technologies like React, Tailwind CSS, and JavaScript. 
              My focus is on writing clean, efficient code and solving real-world problems through development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
