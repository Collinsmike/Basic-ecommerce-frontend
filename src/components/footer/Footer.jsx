import React from 'react';
import './footer.css'
import footer_logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
            <div className="footer_icon-contaier">
                <h1><i className="ri-instagram-line"></i></h1>
            </div>
            <div className="footer_icon-contaier">
                <h1><i className="ri-twitter-line"></i></h1>
            </div>
            <div className="footer_icon-contaier">
                <h1><i className="ri-whatsapp-line"></i></h1>
            </div>
        </div>

        <div className="footer_copyright">
            <hr />
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer