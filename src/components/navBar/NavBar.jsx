import React, { useState } from 'react'
import './navbar.css';
import logo from '../assets/logo.png'
import cart_icon from '../assets/carticon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {
    const [menu, setMenu] = useState("")
    const {getTotalCartItems} = useState(ShopContext)
  return (
    <div className='navBAr'>
        <div className="nav_logo">
            <img src={logo} alt="" />
        </div>
        
        {/* ended on 30:00 */}
        <ul className="nav_meu d-flex gap-5 align-items-center">
            <li  onClick={()=>{setMenu("shop")}} className={menu === "shop" ? "active_link" : "link"}><Link to='/'>Shop</Link></li> 
            <li onClick={()=>{setMenu("mens")}} className={menu === "mens" ? "active_link" : "link"} ><Link to='/mens'>Men</Link></li>
            <li onClick={()=>{setMenu("womens")}} className={menu === "womens" ? "active_link" : "link"} ><Link to='/womens'>Women</Link></li>
            <li onClick={()=>{setMenu("kids")}} className={menu === "kids" ? "active_link" : "link"} ><Link to='/kids'>Kids</Link></li>
        </ul>

        <div className="nav_login-cart d-flex gap-5 align-items-center px-5">
            <Link to={'/login'}><button>Login</button></Link>
            <div className="cart_img">
                <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
                <span className="cart_counter">{getTotalCartItems}</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar