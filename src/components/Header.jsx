//Mode Components
import DarkModeButton from './modeComponents/DarkModeToggle';

const Header = () => {
  return (
    <div className="absolute w-full flex bg-transparent top-0 py-4 text-white justify-end z-10 pr-4">
      <DarkModeButton />
    </div>
  );
};

export default Header;
