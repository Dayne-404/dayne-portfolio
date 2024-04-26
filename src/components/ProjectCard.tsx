import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Blackjack from '../assets/blackjack.png';

function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-image-container">
                <img src={Blackjack} alt='Blackjack project' />
            </div>
            <div className='project-description-wrapper'>
                <div className="project-name-wrapper">
                    <h3 className="big-text">Project Name</h3>
                    <div className="project-links-wrapper">
                        <a href="#"><FontAwesomeIcon icon={faGithub} style={{width:"1.5rem", height:"1.5rem"}}/></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} style={{width:"1.5rem", height:"1.5rem"}}/></a>
                        <a href="#"><FontAwesomeIcon icon={faLink} style={{width:"1.5rem", height:"1.5rem"}}/></a>
                    </div>
                </div>
                <p>This is the description for the project which is also part of a test which shouldn't be too big of a problem</p>
                <p className='blue-text'>React - Bootstrap - Styled Components</p>
                </div>
        </div>
    );
}

export default ProjectCard;