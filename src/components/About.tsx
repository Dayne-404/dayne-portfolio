import Technologies from './Technologies';
import aboutImg from '../assets/stare.jpg';
import Line from '../assets/horizontalLine.svg?react';
import './about.css';

function About() {
	return (
		<>
			<div className="about content-container">
				<div className='content-header-container'>
					<h2 className="code-font content-header"><span className="text-purple-gradient">02.</span>ABOUT</h2>
					<div className='content-seperator'><Line /></div>
				</div>
				<div className="about-content">
					<div className="about-img">
						<img src={aboutImg} alt='Dayne doing something he likes' />
					</div>
					<div className="about-text">
						<p>
							During my studies as a <b>computer science student.</b> I
							delved into back-end development and realized my nautral
							flair for UI/UX design. Motivated by this realization, I
							began learning front-end evelopment alongside my studies
						</p>
						<p>
							I aim to build upon my current back-end knowledge and
							combine it with my front-end skills, working towards
							becoming a full-stack developer. I am committed to
							explore and experiment with technologies in pursuit of
							building seamless and engaging user experiences.
						</p>
					</div>
				</div>
			</div>
			<Technologies />
		</>
	);
}

export default About;
