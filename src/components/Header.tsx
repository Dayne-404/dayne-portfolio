import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Header() {
	return (
		<header className='content-container content-padding'>
            <div className='header-text'>
                <p>Hey, I'm</p>
                <h1 className="portfolio-name-header">Dayne Dellaire</h1>
                <p>
                    I'm a software engineer based in Toronto, Canada and also a
                    communication and journalism student. I enjoy creating things
                    that live on the internet, whether that be websites,
                    applications, or anything in between. I have been freelancing
                    for a year now while studying at the university and I've manage
                    to gain a decent amount of experience and valuable knowledge
                    from all different kinds of fields throughout my projects/work.
                </p>
            </div>
            <div className="social-buttons-container">
                <a href="#">
                    <div className="social-button border-purple-gradient">
                        <FontAwesomeIcon icon={faGithub} style={{width:"1.25rem", height:"1.25rem"}}/>
                        Github
                    </div>
                </a>
                <a href="#">
                    <div className="social-button border-blue-gradient">
                        <FontAwesomeIcon icon={faLinkedin} style={{width:"1.25rem", height:"1.25rem"}}/>
                        LinkedIn
                    </div>
                </a>
                
            </div>
		</header>
	);
}

export default Header;
