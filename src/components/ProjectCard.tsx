import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import Reveal from 'react-awesome-reveal'
interface ProjectProps {
	projectName: string;
    projectImg: string;
    projectDescription?: string;
	projectTopics?: string[];
	gitHubLink: string;
	liveLink: string;
	rightFormat?: boolean;
}

const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function Project({projectName, projectImg, projectDescription, projectTopics, gitHubLink, liveLink, rightFormat} : ProjectProps) {
	
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
					<h3 className="project-header">{capitalizeFirstLetter(projectName)}</h3>
					<div className="project-description">
						<p>{projectDescription}</p>
					</div>
					<ul className="project-technologies-used">
						{projectTopics && projectTopics.map((tag, index) => (
							<li key={index}>{capitalizeFirstLetter(tag)}</li>
						))}
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
