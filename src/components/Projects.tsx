import '../styles/projects.css';
import Line from '../assets/horizontalLine.svg?react';
import projectImg from '../assets/stare.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
				<div className="project">
					<div className="project-img">
						<img src={projectImg} alt="First project image" />
					</div>
					<div className="project-text-content">
						<p className="project-feature accent-text">
							Featured Project
						</p>
						<h3 className="project-header">Project Name</h3>
						<div className="project-description">
							<p>
								This application provides a feature-rich
								communication platform where users can register
								invite friends, and engage in text chat, video
								chat, and group video chat. It combines a user
								friendly interface, Real-time communication
								technologies, and robust backend functionality
								to create an immersive and interactive
								experience
							</p>
						</div>
						<ul className="project-technologies-used">
							<li>React</li>
							<li>Redux</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MongoDB</li>
						</ul>
						<div className="project-actions">
							<a className="icon" href="#">
								{' '}
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a className="icon" href="#">
								{' '}
								<FontAwesomeIcon icon={faUpRightFromSquare} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
