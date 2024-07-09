import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

export default function Output({ password }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert('Text copied to clipboard!');
        }).catch((err) => {
            console.error('Could not copy text: ', err);
        });
    }
    return (
        <div className="output">
            <p>{password}</p>
            <FontAwesomeIcon icon={faCopy} style={{ color: "#ba55d3", }} onClick={copyToClipboard}/>
        </div>
    )
}