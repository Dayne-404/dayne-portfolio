import Technologies from './Technologies';
import SectionHeader from './SectionHeader';
import stareImg from '../assets/stare.jpg';
import pfpImg from '../assets/pfp.jpg';
import blackjackImg from '../assets/blackjack.png';
import '../styles/about.css';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

function About() {
	const images = [
		stareImg,
		pfpImg,
		blackjackImg,
	];
	
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	
	const customAnimation = keyframes`
		from {
			opacity: 0;
			transform: translate3d(0, 0.8rem, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	`;
	
	// useEffect(() => {
	// 	const interalId = setInterval(() => {
	// 		if(currentIndex + 1 >= images.length) {
	// 			setCurrentIndex(0);
	// 		} else {
	// 			setCurrentIndex(currentIndex + 1);
	// 		}
	// 	}, 10000);

	// 	return () => clearInterval(interalId);
	// }, [currentIndex, images.length]);
	

	return (
		<>
			<div id="about" className="about content-container">
				<SectionHeader number="01." title="ABOUT" />
				<Reveal keyframes={customAnimation} fraction={0.3} triggerOnce>
					<div className="about-content">
						<div className="about-img">
							<img
								src={images[currentIndex]}
								alt="Dayne doing something he likes"
							/>
						</div>
						<div className="about-text">
							<h3>Passion</h3>
							<p>
								I've studied various programming languages and I
								love building cool, innovative experiences.
								Although I may be new to the field, I am a very
								quick learner with a passion for technology.
							</p>
							<h3>Work</h3>
							<p>
								Outside of coding I've worked as a lifeguard,
								where I developed strong leadership and teamwork
								skills. This experience has taught me to stay
								calm under high stress situations and working
								effectively within a team.
							</p>
							<h3>Hobbies</h3>
							<p>
								When I'm not coding you can find my trying to
								stay active and step away from the computer,
								whether that be at a swimming pool or gym,
								skiing when the weather allows, or getting away
								from it all and going on a camping trip with
								some friends.
							</p>
						</div>
					</div>
				</Reveal>
			</div>
			<Reveal keyframes={customAnimation} fraction={0.3} triggerOnce>
				<Technologies />
			</Reveal>
		</>
	);
}

export default About;
