import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import '../styles/toggle.css'

interface ToggleProps {
    handleChange: ()=>void;
    isChecked: string;
}

function Toggle({handleChange, isChecked}: ToggleProps) {
    return (
        <label className="switch">
            <input
                type="checkbox"
                onChange={handleChange}
                checked={isChecked === 'light'}
            />
            <span className='slider'>
                <FontAwesomeIcon icon={faSun} className="slider-icon slider-left"/>
                <FontAwesomeIcon icon={faMoon} className="slider-icon slider-right"/>
            </span>
        </label>
    );
}

export default Toggle;