import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item" id={props.id}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
        <p>{props.name}</p><br />
        <div className="item-prices">
            <div className="item-price-new price">
            UGx {props.new_price}
            </div>
            <div className="item-price-old price">
            UGx {props.old_price}
            </div>
        </div>
        <div className='discoutBurner'>✨ {Math.ceil((props.new_price / props.old_price) * 100)}% off!</div>
    </div>
  )
}

export default Item