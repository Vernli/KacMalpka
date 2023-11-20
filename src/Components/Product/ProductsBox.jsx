import { useLoaderData } from 'react-router';
import './ProductBox.css';

const ProductsBox = () => {
  const data = useLoaderData();
  console.log(data);
  return <div className="product-box">XAXAX</div>;
};

export const productBoxDetails = async ({ params }) => {
  const res = await fetch('./data.json');
  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
};

export default ProductsBox;
