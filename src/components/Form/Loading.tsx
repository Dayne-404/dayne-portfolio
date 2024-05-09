import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Failure() {
    return (
        <div className="form-response">
            <FontAwesomeIcon icon={faSpinner} className="loading-icon accent-text" spinPulse />
        </div>
    );
}

export default Failure;