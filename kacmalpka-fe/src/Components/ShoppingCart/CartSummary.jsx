import { useContext } from 'react'
import './CardSummary.css'
import { ShopContext } from '../../Context/ShopContext'

const CartSummary = () => {
  const {cart} = useContext(ShopContext);
  let price = 0;
  cart.forEach((item) => price += (item.amount*item.cena));
  const podatek = price * 0.23;
  return (
    <div className="cart-summary">
        <p>Łączna kwota: {(price+podatek).toFixed(2)} ZŁ</p>
        <div className='underline'></div>
        <div className='btns-cart-summary'>
            <button className='done'>Przejdź do dostawy</button>
        </div>
    </div>
  )
}

export default CartSummary
