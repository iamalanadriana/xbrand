import React, { useContext } from 'react';
import ProductJerseys from '../component/products/ProductJerseys'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

const Jerseys = () => {
  const { state, addToCartJerseys } = useContext(AppContext)
  const { productsJerseys } = state

  const handleAddToCardJerseys = productJerseys => () => {
    addToCartJerseys(productJerseys)
  }
  return (
    <div>
      <h1>Jerseys</h1>
        {productsJerseys.map(productsJerseys => (
          <ProductJerseys key={productsJerseys.id} productsJerseys={productsJerseys} handleAddToCardJerseys={handleAddToCardJerseys} />
        ))}
      <div className="Blusas-button">
        <Link to='/'>
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Jerseys;