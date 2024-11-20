import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Online Parking', description: 'An application to find parking spots in crowded areas.' },
    { name: 'Task Manager', description: 'A task manager built using React and MySQL.' }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
