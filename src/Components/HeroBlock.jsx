import './HeroBlock.css';
import { Button } from 'react-bootstrap';
const HeroBlock = ({ imageInfo }) => {
  return (
    <div className="hero">
      <div className="block">
        <div className="text">
          <h1>{imageInfo.title}</h1>
          <p>{imageInfo.text}</p>
        </div>
        <button className="btn-hero">Więcej...</button>
      </div>

      <img src={imageInfo.src} alt={imageInfo.alt} />
    </div>
  );
};
export default HeroBlock;
