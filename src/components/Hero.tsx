import './hero.css';
import profilePicture from '../assets/pfp.jpg';

function Hero() {
	return (
		<div className="hero content-container">
            <div className="hero-img">
                <img src={profilePicture} alt="image of Dayne" />
            </div>
            <div className="hero-text">
                <p className='hero-greeting'>Hey I'm</p>
                <h1 className="hero-name text-purple-gradient">Dayne Dellaire</h1>
                <p className='hero-bio'>
                    I'm an aspiring software engineer from Toronto, Canada, and a
                    recent graduate in Computer Science.
                </p>
            </div>
		</div>
	);
}

export default Hero;
