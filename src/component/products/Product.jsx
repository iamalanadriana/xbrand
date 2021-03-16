import React from 'react'
import '../../styles/component/Products.css';

const Product = ({ product, handleAddToCard }) => {
    return (
        <div className="Products-item">
          <img src={product.image} alt={product.name} />
            <div className="Product-item-info">
              <h2> {product.name} <br/> </h2>
                <p>{product.description}</p>
                <span>
                  <h2>
                    $
                    {' '}
                    {product.price}
                  </h2>
                </span>
                <div>
                  <button type="button" onClick={handleAddToCard(product)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Product;