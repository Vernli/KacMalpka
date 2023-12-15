import "./ProductContainer.css"
import ProductCard from "./ProductCard"

const ProductContainer = ({products}) => {
  return (
    <div className='container'>
      {products.map((product) => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
}

export default ProductContainer
