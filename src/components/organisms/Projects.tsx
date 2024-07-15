import SectionButton from "../atoms/SectionButton";
import ProjectCard from "../molecules/ProjectCard";

import { projectData } from "../../data/projects";

const Projects = () => {
  const projects = projectData.map((project) => ({
    key: project.key,
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    githubLink: project.githubLink,
  }));

  return (
    <div className="flex flex-col font-montserrat" id="projects">
      <div className="px-8 md:px-16 mb-4 md:mb-8">
        <p className="font-bold md:text-2xl xl:text-3xl">featured projects</p>
      </div>
      <div className="overflow-x-auto flex flex-col md:flex-row md:flex-wrap space-y-4 md:space-y-0 px-8 md:px-14">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.key} />
        ))}
      </div>
      <SectionButton
        label="more projects"
        link="https://github.com/jacobbalane?tab=repositories"
      />
    </div>
  );
};

export default Projects;
