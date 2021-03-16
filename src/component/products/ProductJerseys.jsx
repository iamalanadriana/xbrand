import React from 'react'
import '../../styles/component/Products.css';

const productJerseys = ({ productsJerseys, handleAddToCardJerseys }) => {
    return (
        <div className="Products-item">
          <img src={productsJerseys.image} alt={productsJerseys.name} />
            <div className="Product-item-info">
              <h2>{productsJerseys.name} <br/></h2>
                <p>{productsJerseys.description}</p>
                <span>
                  <h2>
                    $
                    {' '}
                    {productsJerseys.price}
                  </h2>
                  </span>
                <div>
                  <button type="button" onClick={handleAddToCardJerseys(productsJerseys)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default productJerseys;