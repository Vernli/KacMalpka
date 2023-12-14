import "./ProductCard.css"
import { ShopContext } from "../../Context/ShopContext"
import { useContext } from "react"

const ProductCard = ({product}) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-card'>
      <h3 className="product-title">{product.nazwa}</h3>
      <img src={product.image_source} alt="" className="product-image"/>
      <p>{product.opis}</p>
      <p className="product-price">{product.cena}</p>
      <button className='add-to-cart-button' onClick={() => addToCart(product)}>Dodaj do koszyka</button>

    </div>
  )
}

export default ProductCard
