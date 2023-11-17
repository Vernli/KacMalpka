import { NavLink } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <NavLink to="/piwa">Piwa</NavLink>
      <NavLink to="/wodka">Wódka</NavLink>
      <NavLink to="/whisky">Whisky</NavLink>
      <NavLink to="/wina">Wina</NavLink>
    </div>
  );
};
export default Dropdown;
