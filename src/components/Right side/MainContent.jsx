// MainContent.jsx
import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Hero from '../Hero';
import Skill from '../Skill'
import Resume from '../Resume';


 const MainContent = ( ) => {

  return (
    <main className="w-full md:w-3/4 bg-white p-6 md:p-8">
        <Hero/>
        <About/>
        <Skill/>
        <Resume/>
        <Contact/>
        <Projects/>
    </main>
     

   
  );
};

export default MainContent;
