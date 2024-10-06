import React from 'react';
import resumeImage from '../assets/Resumepdf.jpg'; 
import resumePDF from '../../public/cv.pdf'; 

const Resume = () => {
  return (
    <section id="resume" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Resume</h2>
        
    
        <img src={resumeImage} alt="Resume" className="w-full h-auto mb-6 rounded-lg shadow-lg" />

        
        <a
          href={resumePDF}
          download
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
