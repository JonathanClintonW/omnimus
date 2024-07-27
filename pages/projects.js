import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of project one.',
    link: '/projects/one'
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: '/projects/two'
  },
];

const Projects = () => {
  return (
    <main className="h-[calc(100vh-64px)] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 text-black rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-turquoise hover:text-dark_turquoise">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;