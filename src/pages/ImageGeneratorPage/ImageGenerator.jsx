//Components
import PromptBar from "./PromptBar/PromptBar.jsx"
import ImageBar from "./ImageBar/ImageBar.jsx"

//Style
import "./ImageGenerator.css";

const ImageGenerator = ({ theme }) => {
    return (
        <>
            <div className={`image-generator-layout ${!theme ? "text-[white]" : "text-[black]"}`}>
                {/* Prompt Area */}
                <div className="prompt-bar">
                    <PromptBar theme={theme} />
                </div>
                {/* Images Area */}
                <div className="image-bar">
                    <ImageBar theme={theme}  />
                </div>
            </div>
        </>
    )
}

export default ImageGenerator