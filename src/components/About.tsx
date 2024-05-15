import Technologies from './Technologies';
import aboutImg from '../assets/stare.jpg';
import SectionHeader from './SectionHeader';
import '../styles/about.css';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

function About() {
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

	return (
		<>
			<div id="about" className="about content-container">
				<SectionHeader number="01." title="ABOUT" />
				<Reveal keyframes={customAnimation} fraction={0.3} triggerOnce>
				<div className="about-content">
					<div className="about-img">
						<img
							src={aboutImg}
							alt="Dayne doing something he likes"
						/>
					</div>
					<div className="about-text">
						<p>
							During my studies as a{' '}
							<b>computer science student.</b> I delved into
							back-end development and realized my nautral flair
							for UI/UX design. Motivated by this realization, I
							began learning front-end evelopment alongside my
							studies
						</p>
						<p>
							I aim to build upon my current back-end knowledge
							and combine it with my front-end skills, working
							towards becoming a full-stack developer. I am
							committed to explore and experiment with
							technologies in pursuit of building seamless and
							engaging user experiences.
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
