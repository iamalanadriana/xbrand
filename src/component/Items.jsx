import React from 'react';
import '../styles/component/Item.css'

const Items = (props) => {
  return (
    <div className="Products-item">
      <img  src={props.img} alt="galeres" />
      <div className="description">
        <h2 >{props.name}</h2>
          <p>{props.description}</p>
          <span>
              $
              {' '}
              {props.price}
            </span>
          <div className="button">
            <button type="button">Comprar</button>
          </div>
      </div>
    </div>
)
}

export default Items;