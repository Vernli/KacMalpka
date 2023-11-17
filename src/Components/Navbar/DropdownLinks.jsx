import { NavLink } from 'react-router-dom';

const DropdownLinks = () => {
  return (
    <>
      <NavLink to="/piwa">Piwa</NavLink>
      <div className="underline"></div>
      <NavLink to="/wodka">Wódka</NavLink>
      <div className="underline"></div>
      <NavLink to="/whisky">Whisky</NavLink>
      <div className="underline"></div>
      <NavLink to="/wina">Wina</NavLink>
      <div className="underline"></div>
    </>
  );
};
export default DropdownLinks;
