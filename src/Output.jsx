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
        <div className="mt-[20px] p-[8px] bg-white h-[50px] w-full flex justify-between items-center border-solid border-[rbg(199,198,198)] border-[2px] " >
            <p className='h-[20px] break-all overflow-x-auto'>{password}</p>
            <FontAwesomeIcon icon={faCopy} style={{ color: "#ba55d3", }} onClick={copyToClipboard} className='h-[30px] pl-[2px] cursor-pointer sticky'/>
        </div>
    )
}