import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

function Footer() {
	return (
		<div className="footer">
            <div className='footer-content'>
                <p>Thank you!</p>
                <a
                    href="https://ca.linkedin.com/in/dayne-dellaire-954916291"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://ca.linkedin.com/in/dayne-dellaire-954916291"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://ca.linkedin.com/in/dayne-dellaire-954916291"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
		</div>
	);
}

export default Footer;
