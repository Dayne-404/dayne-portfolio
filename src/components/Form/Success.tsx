import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SuccessProps {
    resetForm: () => void;
}

function Success({resetForm}: SuccessProps) {
    return (
        <div className="form-response">
            <FontAwesomeIcon icon={faPaperPlane} className="form-icon accent-text" bounce />
            <h3>Success</h3>
            <button onClick={resetForm}>Send Another</button>
        </div>
    );
}

export default Success;