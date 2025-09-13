import { useState } from "react";
import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json"

type Project = {
  id: number,
  title: string,
  skills: string[],
  url: {
    frontend?: string,
    backend?: string,
    design?: string,
    deployed?: string
  },
  content?: string
}


export function Projects() {

  const sortedData = [...projects].sort((a, b) => b.id - a.id);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects" id="projects">
      <h4>Projects -</h4>
      <h2>Stuff I've Worked On</h2>
      <div className="project-grid">
        {sortedData.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)}>
            <Project title={project.title} skills={project.skills} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectCard project={selectedProject} closePopup={closePopup} />
      )}
    </div>
  );
}
