import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './hero.css';
import profilePicture from '../assets/pfp.jpg';

function Hero() {
	return (
		<div className="hero content-container">
			<div className="hero-content">
				<div className="hero-img">
					<img src={profilePicture} alt="image of Dayne" />
				</div>
				<div className="hero-text">
					<p className="hero-greeting">Hey I'm</p>
					<h1 className="hero-name text-purple-gradient">
						Dayne Dellaire
					</h1>
					<p className="hero-bio">
						I'm an aspiring software engineer from Toronto, Canada,
						and a recent graduate in Computer Science.
					</p>
				</div>
				<div className="hero-buttons">
					<button className="text-color">
						<FontAwesomeIcon
							icon={faDownload}
							className="text-color"
						/>{' '}
						Resume
					</button>
					<a href="https://github.com/Dayne-404" target="_blank">
						<FontAwesomeIcon
							icon={faGithub}
							className="secondary-text-color"
						/>
					</a>
					<a
						href="https://ca.linkedin.com/in/dayne-dellaire-954916291"
						target="_blank"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="secondary-text-color"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
