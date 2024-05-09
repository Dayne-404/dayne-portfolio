import projectImg from '../assets/stare.jpg';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

import '../styles/projects.css';

function Projects() {
	return (
		<div id='projects' className="projects content-container">
			<SectionHeader number='02.' title='PROJECTS' />
			<div className="projects-container">
				<ProjectCard projectImg={projectImg} projectDescription='Hello' liveLink='#' gitHubLink='#' />
				<ProjectCard projectImg={projectImg} projectDescription='Hello' liveLink='#' gitHubLink='#' />
			</div>
		</div>
	);
}

export default Projects;
