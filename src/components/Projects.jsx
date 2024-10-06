import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio to showcase my skills and projects.',
    link: 'https://yourportfolio.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjLxhhrn2AiM0OpyQ7Nv65tZgWjevAEfM7A&s', 
  },
  {
    title: 'E-commerce Website',
    description: 'An online store built with React and Redux for state management.',
    link: 'https://ecommerce-example.com',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/44f38293168233.5e5e2974b43e4.jpg', 
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform where users can write and share articles.',
    link: 'https://blog-example.com',
    image: 'https://www.shutterstock.com/image-vector/3d-online-cinema-portal-landing-260nw-2427628823.jpg', 
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
