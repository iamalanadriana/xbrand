import React from 'react';
import { Link } from 'react-router-dom'
import Item from '../component/item'

const Home = () => {
  return (
    <div className="title">
      <h1>Categorias ...</h1>
      <div className="Products-item">
        <Link to='/licras'>
          <Item name="Licras" img="https://prochampions.vteximg.com.br/arquivos/ids/261196-250-280/AH3362-063_1.jpg?v=637236253045800000" />
        </Link>
        <Link to='/tapabocas'>
          <Item name="Tapabocas" img="https://www.bazzarbog.com/28281-large_default/tapabocasen-hilos-de-cobre-copper-mask-ajustable.jpg" />
        </Link>
        <Link to="/jerseys">
          <Item name="Jerseys"  img="https://m.media-amazon.com/images/I/414ucyFeX-L.jpg" />
        </Link>
        <Link to='/blusas'>
          <Item name="Blusas" img="https://http2.mlstatic.com/D_NQ_NP_949785-MCO31535590381_072019-V.jpg" />
        </Link>
      </div>
    </div>
)
}

export default Home;