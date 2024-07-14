//React Hooks
import { useState,useContext } from "react";

//Providers
import { useTheme } from "../../../../providers/ThemeContext";
import { AImageContext } from '../../../../providers/AImageContext'

//Styles
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { LuPaintbrush2 } from "react-icons/lu";

const PromptOptions = () => {

    const { darkMode } = useTheme();

    const {setQuality,setStyle} = useContext(AImageContext);

    // For Styles
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedQuality, setSelectedQuality] = useState('');

    const handleButtonClick = (style) => {
        setSelectedStyle(style);
        setStyle(style);        
    };

    const handleSizeButtonClick = (quality) => {
        setSelectedQuality(quality);
        setQuality(quality);
    };

    return (
        <>
            {/* Image Size Box */}
            <div className="image-size-box">
                <MdPhotoSizeSelectActual className="info-icons" />
                <button className={`size-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedQuality === 'Low' ? 'active' : ''}`} onClick={() => handleSizeButtonClick('Low')}>Low</button>
                <button className={`size-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedQuality === 'Medium' ? 'active' : ''}`} onClick={() => handleSizeButtonClick('Medium')}>Medium</button>
                <button className={`size-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedQuality === 'High' ? 'active' : ''}`} onClick={() => handleSizeButtonClick('High')}>High</button>
            </div>

            {/* hr * */}
            <div className="hr-tag w-full flex ml-[80px] mt-[20px]">
                <hr className="border-[2px] rounded-xl border-[#55555556] w-[60%]" />
            </div>

            {/* Image Style Box */}
            <div className="image-style-box flex">
                <LuPaintbrush2 className="info-icons" />
                <div className="style-buttons">
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Realistic' ? 'active' : ''}`} onClick={() => handleButtonClick('Realistic')}>Realistic</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Cinematic' ? 'active' : ''}`} onClick={() => handleButtonClick('Cinematic')}>Cinematic</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Origami' ? 'active' : ''}`} onClick={() => handleButtonClick('Origami')}>Origami</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Animation' ? 'active' : ''}`} onClick={() => handleButtonClick('Animation')}>Animation</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Cartoon' ? 'active' : ''}`} onClick={() => handleButtonClick('Cartoon')}>Cartoon</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === 'Pixel Art' ? 'active' : ''}`} onClick={() => handleButtonClick('Pixel Art')}>Pixel Art</button>
                    <button className={`style-btn ${!darkMode ? "bg-[#222222] text-[#d4d4d4]" : "bg-[#d3d3d3] text-[#212121]"} ${selectedStyle === '3D' ? 'active' : ''}`} onClick={() => handleButtonClick('3D')}>3D</button>
                </div>
            </div>
        </>
    )
}

export default PromptOptions