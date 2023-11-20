import ItemButton from './ItemButton';
import ItemInformation from './ItemInformation';
import './ItemCard.css';

const data = {
  source: './images/belt-6.jpg',
  alt_text: 'żubr',
  product_name: 'Piwo',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque earum rem aliquam quod a ullam unde! Et modi minus similique.',
  price: '19.99',
};

const ItemCard = () => {
  return (
    <div className="item-card">
      <ItemInformation data={data} />
      <ItemButton text={'Dodaj do koszyka'} />
    </div>
  );
};
export default ItemCard;
