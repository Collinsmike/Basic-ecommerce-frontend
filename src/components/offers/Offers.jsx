import React from 'react'
import './offers.css'
import exclusive_img from '../assets/sd/c5.jpg'

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers_right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers