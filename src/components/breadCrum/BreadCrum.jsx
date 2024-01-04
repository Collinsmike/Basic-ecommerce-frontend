import React from 'react'
import './breadcrum.css'
import { Link } from 'react-router-dom';

const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className="breadCrum">
         <Link to={'/'}> Home </Link> <span className="icon"><i className="ri-arrow-right-line"></i></span> <Link to={'/'}> Shop </Link><span className="icon"><i className="ri-arrow-right-line"></i></span> <Link to={`/${product.category}s`}>{product.category}</Link> <span className="icon"><i className="ri-arrow-right-line"></i></span> {product.name}
    </div>
  )
}

export default BreadCrum