import React from 'react'

import '../styles/component/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-redes">
                <h2>Siguenos en ...</h2>
                <i className="fab fa-instagram"></i>
                    {' '}
                <a href="https://www.instagram.com/">Instagram</a>
                    <br />
                <i className="fab fa-facebook"></i>
                    {' '}
                <a href="https://www.facebook.com/">Facebook</a>
            </div>
                <i className="fab fa-whatsapp"> <a href="https://web.whatsapp.com/">   whatsapp .. 3333333333</a></i>
        </div>
    );
}
 
export default Footer;