import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 70 },
  ];

  return (
    <section id="skill" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-lg mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-lg"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
