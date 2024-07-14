//React Hooks - Router
import { useTheme } from '../../../../providers/ThemeContext'
import { Link } from "react-router-dom"

//Styles
import { IoMdImages } from "react-icons/io";


const YourFavoriteImageButton = () => {

  const { darkMode } = useTheme();

  return (
    <button className={`favorites-button relative ${!darkMode ? "text-[#ffffff]" : "bg-[#ebebebdf] text-[#1e1e1e]"}`}>
      <span>Your Favorite Images</span>
      <span className='ml-2 text-[24px]'><IoMdImages /></span>
      <Link className='w-full h-full absolute' to="/favorite-images"></Link>
    </button>
  )
}

export default YourFavoriteImageButton