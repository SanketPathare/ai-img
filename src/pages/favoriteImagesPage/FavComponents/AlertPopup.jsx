//React Hooks
import { useContext } from 'react';

//Providers
import { useTheme } from '../../../providers/ThemeContext'
import { useModal } from '../../../providers/AlertModalContext.jsx';
import { AImageContext } from '../../../providers/AImageContext.jsx';

//Styles
import "../../textGeneratorPage/AlertPopup.css";

const AlertPopup = () => {

    const { darkMode } = useTheme();
    const { toggleModal } = useModal();
    const { popup, setPopup } = useContext(AImageContext);

    const handleDeleteButton = () => {
        popup.function();
        setPopup({ ...popup, show: false });
        toggleModal(true, "The deletion completed successfully");
    }
    const handleCancelButton = () => {
        setPopup(false);
    }

    return (popup.show) ? (
        <div className="popup">
            <div className={`popup-box ${!darkMode ? "bg-[#131313] border-[#2b2b2b]" : "bg-[#e8e8e8] border-[#c9c9c9]"}`}>
                <div className={`flex justify-center my-3 ${!darkMode ? "text-[#dddddd]" : "text-[#232323]"} `}>
                    <h1>{popup.content}</h1>
                </div>
                <hr className={`border-2  ${!darkMode ? "border-[#272727ae]" : "border-[#c9c9c9]"} rounded-sm w-[100%]`} />
                <div className="flex justify-evenly flex-row my-4 text-[#dddddd]">
                    <button onClick={handleDeleteButton} id="delete-btn" className="btns">Delete</button>
                    <button onClick={handleCancelButton} id="cancel-btn" className={`btns ${darkMode ? "text-[#282828] border-[#282828] hover:border-[#313131]" : "text-[#dddddd]"} `}>Cancel</button>
                </div>
            </div>

        </div>
    ) : null;
}

export default AlertPopup;