import { HiMenuAlt3 } from 'react-icons/hi';
import './MobileMenu.css';

const MobileMenu = ({ onClick }) => {
  return (
    <button className="flex-center menu">
      <HiMenuAlt3 onClick={() => onClick()} />
    </button>
  );
};
export default MobileMenu;
