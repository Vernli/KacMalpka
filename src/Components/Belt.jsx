import './Belt.css';

function generateBelts() {
  let list = [];
  for (let i = 1; i < 6; i++) {
    list.push(`belt-${i}.jpg`);
  }
  return list;
}

const Belt = () => {
  const images = generateBelts();
  return (
    <div className="belt">
      {images.map((item, idx) => (
        <img key={idx} src={`./images/${item}`}></img>
      ))}
    </div>
  );
};
export default Belt;
