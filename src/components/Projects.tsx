import ProjectCard from "./ProjectCard";
import '../styles/project.css';

function Projects() {
    return (
        <div className="content-container small-content-padding">
            <h2 className="small-bottom-margin">PROJECTS</h2>
            <div className="projects-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;