import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import Reveal from 'react-awesome-reveal'
interface ProjectProps {
    projectImg: string;
    projectDescription?: string;
	gitHubLink: string;
	liveLink: string;
	rightFormat?: boolean;
}

function Project({projectImg, projectDescription, gitHubLink, liveLink, rightFormat} : ProjectProps) {
	const format = rightFormat ? 'right-format' : '';

	const customAnimation = keyframes `
		from {
			opacity: 0;
			transform: translate3d(0, 0.8rem, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	`;
	
	return (
		<Reveal keyframes={customAnimation} fraction={0.3} triggerOnce>
			<div className={"project " + format}>
				<div className="project-img">
					<img src={projectImg} alt="First project image" />
				</div>
				<div className="project-text-content">
					<p className="project-feature accent-text">Featured Project</p>
					<h3 className="project-header">Project Name</h3>
					<div className="project-description">
						<p>
							This application provides a feature-rich communication
							platform where users can register invite friends, and
							engage in text chat, video chat, and group video chat.
							It combines a user friendly interface, Real-time
							communication technologies, and robust backend
							functionality to create an immersive and interactive
							experience
						</p>
						<p>{projectDescription}</p>
					</div>
					<ul className="project-technologies-used">
						<li>React</li>
						<li>Redux</li>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>MongoDB</li>
					</ul>
					<div className="project-actions">
						<a className="icon" href={gitHubLink}>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a className="icon" href={liveLink}>
							<FontAwesomeIcon icon={faUpRightFromSquare} />
						</a>
					</div>
				</div>
			</div>
		</Reveal>
	);
}

export default Project;
