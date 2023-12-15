import { useContext } from 'react';
import './CartCard.css'
import { ShopContext } from '../../Context/ShopContext';

const CartCard = ({product}) => {
  const {addToCart, removeFromCart} = useContext(ShopContext);

  return (
      <div className="cart-card">
        <div className='cart-description'>
          <img src={product.image_source} />
          <div className='cart-details'>
            <h3 className='title'>{product.nazwa}</h3>
            <p>{product.opis}</p>
          </div>
        </div>
          <div className='cart-info'>
            <p className='text'>{product.cena} ZŁ</p>
            <div className='cart-btns'>
              <button className='left' onClick={() => removeFromCart(product)}>-</button>
              <input value={product.amount} />
              <button className='right' onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
    </div>
  )
}

export default CartCard
