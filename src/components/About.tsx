import Technologies from './Technologies';
import SectionHeader from './SectionHeader';
import stareImg from '../assets/stare.jpg';
import pfpImg from '../assets/pfp.jpg';
import blackjackImg from '../assets/blackjack.png';
import '../styles/about.css';
import Arrow from '../assets/rightArrow.svg?react'
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { useState, useEffect, useRef, useCallback } from 'react';

function About() {
	const images = [
		stareImg,
		pfpImg,
		blackjackImg,
	];
	
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const intervalRef = useRef<number | null>(null);
	
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
	
	const nextImage = useCallback((increaseAmount: number) => {
		if(currentIndex + increaseAmount >= images.length) {
			setCurrentIndex(0);
		} else if (currentIndex + increaseAmount < 0) {
			setCurrentIndex(images.length - 1);
		} else {
			setCurrentIndex(currentIndex + increaseAmount);
		}
	}, [currentIndex, images.length])

	const resetTimer = useCallback(() => {
		if(intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		intervalRef.current = setInterval(() => {
			nextImage(1);
		}, 10000)
	}, [nextImage]);

	useEffect(() => {
		resetTimer();

		return () => {
			if(intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		}
	}, [resetTimer]);
	

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
							<div className='image-actions'>
								<button className='right-arrow' onClick={() => {nextImage(1); resetTimer(); }}><Arrow /></button>
								<button className='left-arrow' onClick={() => {nextImage(-1); resetTimer(); }}><Arrow /></button>
							</div>
							<div className='image-swap'>
								{
									images.map((_, index) => (
										<button
											key={index}
											id={index === currentIndex ? 'selected-img' : undefined}
											onClick={() => setCurrentIndex(index)}
										></button>
									))
								}
							</div>
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
