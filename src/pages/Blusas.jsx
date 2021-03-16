import React, { useContext } from 'react';
import ProductOne from '../component/products/ProductOne'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'
 
const Blusas = () => {
  const { state, addToCartOne } = useContext(AppContext)
  const { productsOne } = state
  
  const handleAddToCardOne = productOne => () => {
    addToCartOne(productOne)
  }
  return (
    <div>
      <h1>Blusas</h1>
        {productsOne.map(productsOne => (
          <ProductOne key={productsOne.id} productsOne={productsOne} handleAddToCardOne={handleAddToCardOne} />
        ))}
      <div className="Blusas-button">
        <Link to='/'>
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Blusas;