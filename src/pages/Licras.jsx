import React, { useContext } from 'react'
import Product from '../component/products/Product'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

const Licras = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCard = product => () => {
    addToCart(product )
  }
  return (
    <div>
      <h1>Licras</h1>
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCard={handleAddToCard} />
        ))}

      <div className="Blusas-button">
        <Link to='/'>
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Licras;