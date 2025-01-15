import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex items-center mb-4">
      {project.icon}
      <h3 className="text-xl font-semibold ml-2">{project.title}</h3>
    </div>
    <div className="space-y-4">
      {project.items.map((item, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectCard;
