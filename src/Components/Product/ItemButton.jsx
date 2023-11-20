import './ItemButton.css';

const ItemButton = ({ position, text }) => {
  return (
    <div className={position}>
      <button className="item-btn">{text}</button>
    </div>
  );
};
export default ItemButton;
