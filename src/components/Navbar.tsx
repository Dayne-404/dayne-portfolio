import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [menuClass, setMenuClass] = useState('hidden');
    const [menuButton, setMenuButton] = useState(faBars);
    
    const [theme, setTheme] = useState({
        type: 'light',
        icon: faSun,
    });

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

    const toggleTheme = () => {
        if(theme.type === 'light') {
            setTheme({
                type: 'dark',
                icon: faMoon
            });
        } else {
            setTheme({
                type: 'light',
                icon: faSun
            });
        }

        const portfolioElement = document.getElementById('portfolio');
        if(portfolioElement) {
            portfolioElement.setAttribute('data-theme', theme.type);
        }
    }
  
    return (
    <div className='navbar content-container'>
        <a href='#' className='navbar-home-button'>&lt;<span className='text-purple-gradient'>Dayne</span> /&gt;</a>
        <button className='navbar-hamburger-button' onClick={toggleHamburger}>
            <FontAwesomeIcon icon={menuButton} className='text-color'/>
        </button>
        <div className={'navbar-page-links ' + menuClass}>
            <a href='#about' onClick={toggleHamburger}><span className='text-purple-gradient'>01.</span> ABOUT</a>
            <a href='#projects' onClick={toggleHamburger}><span className='text-purple-gradient'>02.</span> PROJECTS</a>
            <a href='#contact' onClick={toggleHamburger}><span className='text-purple-gradient'>03.</span> CONTACT</a>
            <button className='navbar-hamburger-button' onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme.icon} className='text-color'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar;
