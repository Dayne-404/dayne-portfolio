import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faLaptop, faRuler } from "@fortawesome/free-solid-svg-icons";

function Technologies() {
    return (
        <div className="technologies content-container">
            <h3>TECHNOLOGIES I'VE USED</h3>
            <p className="header-subtext">You name it.. I've probably learned it</p>
            <div className="technologies-cards-container">
                <div className="technologies-card">
                    <div className="technologies-icon"> <FontAwesomeIcon icon={faLaptop} className="accent-text"/> </div>
                    <h4>FRONT END</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="technologies-card">
                <div className="technologies-icon"> <FontAwesomeIcon icon={faCode} className="accent-text"/> </div>
                    <h4>BACK END</h4>
                    <ul>
                        <li>C#</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Websockets</li>
                        <li>Typescript</li>
                    </ul>
                </div>
                <div className="technologies-card">
                <div className="technologies-icon"> <FontAwesomeIcon icon={faRuler} className="accent-text"/> </div>
                    <h4>STYLING</h4>
                    <ul>
                        <li>SCSS</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>
                <div className="technologies-card">
                    <div className="technologies-icon"> <FontAwesomeIcon icon={faDatabase} className="accent-text"/> </div>
                    <h4>OTHER</h4>
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>SQL</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Technologies;