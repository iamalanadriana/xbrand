import React from 'react';
import '../styles/component/Item.css'

const Item = (props) => {
  return (
    <div className="Products-item">
      <img  src={props.img} alt="galery" />
      <h2 >{props.name}</h2>
    </div>
  )
}

export default Item;