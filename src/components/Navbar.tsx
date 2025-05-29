import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import { useEffect, useState } from 'react';
import Toggle from './Toggle';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [menuClass, setMenuClass] = useState('hidden');
    const [menuButton, setMenuButton] = useState(faBars);
    const [navbarHidden, setNavbarHidden] = useState<boolean>(false);
    const [prevScrollPosition, setPrevScrollPosition] = useState<number>(window.scrollY);
    const [notesHidden, setNotesHidden] = useState<boolean>(true);
    const [theme, setTheme] = useState('light');
    const scrollThreshold = 10;

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollPosition = window.scrollY;
            const distanceScrolled = currentScrollPosition - prevScrollPosition;
            console.log(distanceScrolled);
            if(currentScrollPosition > prevScrollPosition + scrollThreshold) {
                setNavbarHidden(true);

                setMenuOpen(true);
                setMenuClass('hidden');
                setMenuButton(faBars);
            } else if(prevScrollPosition > currentScrollPosition + scrollThreshold) {
                setNavbarHidden(false);
            }
            setPrevScrollPosition(window.scrollY);
        }
        
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    
    }, [prevScrollPosition]);
    
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

    const toggleNotes = () => {
        setNotesHidden(!notesHidden);
        const notesEl = document.getElementById('notes');
        notesEl?.classList.remove('hidden');
    }

    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }

        const portfolioElement = document.getElementById('portfolio');
        if(portfolioElement) {
            portfolioElement.setAttribute('data-theme', theme);
        }

        console.log('setting theme to: ' + theme);
    }
  
    return (
        
            <div className={'navbar ' + ((navbarHidden) ? 'navbar-scroll-up' : 'navbar-scroll-down')}>
                <div className='navbar-content-container '>
                    <a href='#' className='navbar-home-button'>&lt;<span className='text-purple-gradient'>Dayne</span> /&gt;</a>
                    <button className='navbar-button' onClick={toggleHamburger}>
                        <FontAwesomeIcon icon={menuButton} className='text-color'/>
                    </button>
                    <div className={'navbar-page-links ' + menuClass}>
                        <a href='#about' onClick={toggleHamburger}><span className='text-purple-gradient'>01.</span> ABOUT</a>
                        <a href='#projects' onClick={toggleHamburger}><span className='text-purple-gradient'>02.</span> PROJECTS</a>
                        {/* <a href='#contact' onClick={toggleHamburger}><span className='text-purple-gradient'>03.</span> CONTACT</a> */}
                        <a href='#notes' onClick={toggleNotes}><span className='text-purple-gradient'>03.</span> NOTES</a>
                        <Toggle handleChange={toggleTheme} isChecked={theme} />
                    </div>
                </div>
            </div>
        
  )
}

export default Navbar;
