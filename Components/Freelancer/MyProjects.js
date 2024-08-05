import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/MyProjects.css';

const initialCompletedProjects = [
  { id: 1, title: "Completed Web Application", type: "WebApp", description: "Description of completed project." },
  { id: 2, title: "Completed Desktop Application", type: "DesktopApp", description: "Description of completed project." },
];

const initialOngoingProjects = [
  { id: 3, title: "Ongoing Web Application", type: "WebApp", description: "Description of ongoing project." },
  { id: 4, title: "Ongoing Desktop Application", type: "DesktopApp", description: "Description of ongoing project." },
];

const MyProjects = () => {
  const [completedProjects, setCompletedProjects] = useState(initialCompletedProjects);
  const [ongoingProjects, setOngoingProjects] = useState(initialOngoingProjects);
  
  //const navigate = useNavigate(); // Initialize useNavigate

  const handleCompleteClick = (projectId) => {
    const project = ongoingProjects.find(p => p.id === projectId);
    if (project) {
      setCompletedProjects([...completedProjects, project]);
      setOngoingProjects(ongoingProjects.filter(p => p.id !== projectId));
    }
  };

 

  return (
    <div className="my-projects">
      <h1>My Projects</h1>
      <section className="completed-projects">
        <h2>Completed Projects</h2>
        {completedProjects.length > 0 ? (
          completedProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>Type: {project.type}</p>
              <p>Description: {project.description}</p>
            </div>
          ))
        ) : (
          <p>No completed projects.</p>
        )}
      </section>
      <section className="ongoing-projects">
        <h2>Ongoing Projects</h2>
        {ongoingProjects.length > 0 ? (
          ongoingProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>Type: {project.type}</p>
              <p>Description: {project.description}</p>
              <button className="complete-button" onClick={() => handleCompleteClick(project.id)}>Mark as Completed</button>
            </div>
          ))
        ) : (
          <p>No ongoing projects.</p>
        )}
      </section>
    </div>
  );
};

export default MyProjects;
