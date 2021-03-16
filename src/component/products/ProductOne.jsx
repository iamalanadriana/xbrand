import React from 'react'
import '../../styles/component/Products.css';

const productOne = ({ productsOne, handleAddToCardOne }) => {
    return (
        <div className="Products-item">
          <img src={productsOne.image} alt={productsOne.name} />
            <div className="Product-item-info">
              <h2>{productsOne.name} <br/></h2>
                <p>{productsOne.description}</p>
                <span>
                  <h2>
                    $
                    {' '}
                    {productsOne.price}
                  </h2>
                </span>
                <div>
                  <button type="button" onClick={handleAddToCardOne(productsOne)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default productOne;