//React Hooks
import { useContext, useState } from "react";

//Providers
import { AImageContext } from "../../../providers/AImageContext";

//Styles - Icons
import { MdDelete } from "react-icons/md";
import { SiCodereview } from "react-icons/si";

//Components
import SelectedImagesInfos from "./SelectedImagesInfos";


const Image = ({ image, prompts, itemId }) => {

  const [modal, setModal] = useState(false);


  const { setPopup, removeImageFromFavorites } = useContext(AImageContext)

  const handleReviewButton = () => {
    setModal(true);
  }

  const deleteThisImage = () => {
    removeImageFromFavorites(itemId);
  }

  const handleDeleteButton = () => {
    setPopup((prevState) => ({
      ...prevState,
      show: true,
      content:  "Are you sure to delete this image",
      function: deleteThisImage
    }));
  };

  return (
    <>
      <div className="image-box">
        {/* Image */}
        <img src={image} alt="" />

        {/* Review Button */}
        <button onClick={handleReviewButton} className="review-btn" ><SiCodereview /></button>

        {/* Delete Image Button */}
        <button onClick={handleDeleteButton} className="delete-image-btn"><MdDelete /></button>
      </div>

      {modal &&
        <SelectedImagesInfos
          selectedImage={image}
          setModal={setModal}
          selectedPrompts={prompts}
          itemId={itemId}
        />}

    </>
  )
}

export default Image