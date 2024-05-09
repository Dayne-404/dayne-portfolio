import '../styles/projects.css';
import Line from '../assets/horizontalLine.svg?react';
import projectImg from '../assets/stare.jpg';
import ProjectCard from './ProjectCard';

function Projects() {
	return (
		<div className="projects content-container">
			<div className="content-header-container">
				<h2 className="code-font content-header">
					<span className="text-purple-gradient">02.</span>PROJECTS
				</h2>
				<div className="content-seperator">
					<Line />
				</div>
			</div>
			<div className="projects-container">
				<ProjectCard projectImg={projectImg} projectDescription='Hello' liveLink='#' gitHubLink='#' />
			</div>
		</div>
	);
}

export default Projects;
