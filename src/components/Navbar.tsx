import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [menuClass, setMenuClass] = useState('hidden');
    const [menuButton, setMenuButton] = useState(faBars);

    const toggleHamburger = () => {
        setMenuOpen(!menuOpen);

        if(menuOpen) {
            setMenuClass('');
            setMenuButton(faXmark);
        } else {
            setMenuClass('hidden');
            setMenuButton(faBars);
        }
    }
  
    return (
    <div className='navbar content-container'>
        <a href='#' className='navbar-home-button'>&lt;<span className='text-purple-gradient'>Dayne</span> /&gt;</a>
        <button className='navbar-hamburger-button' onClick={toggleHamburger}>
            <FontAwesomeIcon icon={menuButton} className='text-color'/>
        </button>
        <div className={'navbar-page-links ' + menuClass}>
            <a href='#'><span className='text-purple-gradient'>01.</span> ABOUT</a>
            <a href='#'><span className='text-purple-gradient'>02.</span> PROJECTS</a>
            <a href='#'><span className='text-purple-gradient'>03.</span> CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar;
