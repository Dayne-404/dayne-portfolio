import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact, faJs, faHtml5, faCss3Alt, faGitAlt, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <div className="about-container">
            <h2 className="small-bottom-margin">ABOUT ME</h2>
            <div className="about-container-buttons">
                <button>Skills</button>
                <button>Education</button>
                <button>Work</button>
                <button>Hobbies</button>
                <button>Hobbies</button>
                <button>Hobbies</button>
            </div>
            <div className="about-container-text">
                <div id="skills-container">
                    <h2 className="big-text">Experience</h2>
                    <FontAwesomeIcon icon={faPython} style={{color: "#FFD43B", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faJs} style={{color: "#f7df1e", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faHtml5} style={{color: "#e34c26", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faCss3Alt} style={{color: "#264de4", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faGitAlt} style={{color: "#F1502F", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faJava} style={{color: "#ec2025", width:"3rem", height:"3rem"}}/>
                    <FontAwesomeIcon icon={faNodeJs} style={{color: "#83ce27", width:"3rem", height:"3rem"}}/>
                </div>
            </div>
        </div>
    );
}

export default About;