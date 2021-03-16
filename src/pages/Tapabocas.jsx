import React from 'react';
import { Link } from 'react-router-dom'
import Items from '../component/Items'

const Tapabocas = () => {
  return (
    <div>
      <h1>Tapabocas</h1>
      <div>
        <Items
          img="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b497119b13824571bf1cabb20120469d_9366/Tapabocas_de_tela_adidas_TALLA_XS-S_(PACK_DE_3)_(UNISEX)_Negro_H13185_01_laydown.jpg"
          name="Sport adidas"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="15.000" />
      </div>
      <div>
        <Items
          img="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7cfc44a7b47746e4aee7abc901273d32_9366/Tapabocas_de_tela_adidas_TALLA_XS-S_(PACK_DE_3)_(UNISEX)_Azul_H32392_01_laydown.jpg"
          name="Slated"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="12.000" />
      </div>
      <div>
        <Items
          img="https://imgcdn.larepublica.co/i/288/2020/07/02164804/Under-Armour.jpg"
          name="Grand"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="15.000" />
      </div>
      <div>
        <Items
          img="https://imgcdn.larepublica.co/i/768/2020/05/08074339/tapabocas.png"
          name="Smokind"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="14.000" />
      </div>
      <div>
        <Items
          img="https://exitocol.vtexassets.com/arquivos/ids/534106-800-auto?width=800&height=auto&aspect=true"
          name="Kinder"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="18.000" />
      </div>
      <div>
        <Items
          img="https://kenzojeans.com.co/wp-content/uploads/2020/09/tapabocas-infantil-juegos-Turquesa-1.jpg"
          name="Sparta"
          description="Tapabocas 100% labables, disponobles en tallas S M L "
          price="10.000" />
      </div>
      <div className="Blusas-button">
        <Link to='/'>
          <button type="button">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Tapabocas;