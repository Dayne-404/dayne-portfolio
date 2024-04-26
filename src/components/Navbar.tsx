import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className='content-container'>
            <a href="#" className="big-text">DD.</a>
            <span className="anchor-container">
                <a href="#">About    </a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
                <button>
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            </span>
        </nav>
    );
}

export default Navbar;