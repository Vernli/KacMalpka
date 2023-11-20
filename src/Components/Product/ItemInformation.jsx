import './ItemInformation.css';

const ItemInformation = ({ data }) => {
  return (
    <>
      <img src={data.source} alt={data.alt_text} className="product-image" />
      <h5 className="product-name">{data.product_name}</h5>
      <p>{data.description}</p>
      <p className="product-price">
        <strong>{data.price} zł</strong>
      </p>
    </>
  );
};
export default ItemInformation;
