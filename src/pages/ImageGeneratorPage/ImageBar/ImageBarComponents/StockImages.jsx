
import { useTheme } from "../../../../providers/ThemeContext.jsx";

// Generated Images
import Image1 from "../../../../assets/GeneratedImages/Image1.jpeg"
import Image2 from "../../../../assets/GeneratedImages/Image2.jpeg"
import Image3 from "../../../../assets/GeneratedImages/Image3.jpeg"
import Image4 from "../../../../assets/GeneratedImages/Image4.jpeg"

//Components
import YourFavoriteImageButton from "./YourFavoriteImageButton"

const StockImages = () => {


  const { darkMode } = useTheme();

  return (
    <>
      {/* Stock Images */}
      <div className={`stock-images-box ${!darkMode ? "bg-[#1a1a1adf]" : "bg-[#eaeaeadf]"}`}>
        <div className="stock-img-container">
          <img className="stock-img" src={Image1} alt="" />
          <div className="img-info">
             A cute cat with big eyes showing its cute paws.
          </div>
        </div>

        <div className="stock-img-container">
          <img className="stock-img" src={Image2} alt="" />
          <div className="img-info">
           A tropical island sunset, a large ship approaching, high details.

          </div>
        </div>

        <div className="stock-img-container">
          <img className="stock-img" src={Image3} alt="" />
          <div className="img-info">
          Black motorcycle passing on a highway, sea in the background, cinematic angle, ultra realistic.
          </div>
        </div>
        
        <div className="stock-img-container">
          <img className="stock-img" src={Image4} alt="" />
          <div className="img-info">
            Close-up astronaut looking towards the screen, very charismatic pose, high details.
          </div>
        </div>
      </div>

      {/*Your Favorite Images Button */}
      <div className="your-favorites-button-box">
        <YourFavoriteImageButton />
      </div>
    </>

  )
}

export default StockImages