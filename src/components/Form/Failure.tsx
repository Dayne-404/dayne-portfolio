import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FailureProps {
    resetForm: () => void;
}

function Failure({resetForm}: FailureProps) {
    return (
        <div className="form-response">
            <FontAwesomeIcon icon={faCircleExclamation} className="form-icon rejected-red" shake />
            <h3>Something went wrong..</h3>
            <button onClick={resetForm}>Restart</button>
        </div>
    );
}

export default Failure;