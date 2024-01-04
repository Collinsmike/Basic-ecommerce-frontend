import React, { useContext } from 'react'
import './productDisplay.css'
import { Col, Container, Row } from 'reactstrap';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className="productDisplay">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="productDisplay_left w-100">
                        <div className="productDisplay_img-list w-100">
                            <div className="main_img-sec w-100">
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="productDisplay_img">
                            <img className='productDisplay_main_img' src={product.image} alt="" />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="productDisplay_right">
                        <h1 className='product_name'>{product.name}</h1>
                        <div className="productDisplay_right_start">
                            <span className="start_icon"><i className="ri-star-fill"></i></span>
                            <span className="start_icon"><i className="ri-star-fill"></i></span>
                            <span className="start_icon"><i className="ri-star-fill"></i></span>
                            <span className="start_icon"><i className="ri-star-line"></i></span>
                            <span className="start_icon"><i className="ri-star-line"></i></span>
                            <p>(128)</p>
                        </div>
                        <div className="productDisplay_right_prices">
                            <div className="productDisplay_right-price-old">Ugx {product.old_price}</div>
                            <div className="productDisplay_right-price-new">Ugx {product.new_price}</div>
                        </div>

                        <div className="productDisplay_right-description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor unde necessitatibus nihil nesciunt eaque autem distinctio itaque omnis sunt ipsam quidem et architecto animi eum impedit ducimus deserunt, natus corporis a voluptatibus tempora neque. Debitis accusantium beatae magni recusandae iste exercitationem odit cumque ab tempora, itaque nobis, excepturi facere, at eveniet pariatur architecto. Aliquam eos laboriosam eligendi dolore. Ratione non fuga omnis tempora dignissimos laboriosam voluptatem labore repudiandae illo fugiat voluptate, vitae totam aut corrupti perspiciatis ducimus consequatur doloribus dolorum soluta nemo odit voluptatum quibusdam debitis? Dicta voluptas officiis minus neque repudiandae ex alias magni! Veritatis nulla eum id porro sed labore aperiam pariatur, sit nostrum doloremque necessitatibus expedita vel esse velit. Impedit, natus modi tempora eveniet in inventore culpa vel, soluta recusandae ipsa, quae nam distinctio. Blanditiis, suscipit vel eius totam consequuntur commodi possimus et aut eum esse molestias perspiciatis corporis mollitia officia iusto nobis, earum sequi placeat?
                            </p>
                        </div>
                        <div className="productDisplay-right-side">
                            <h1>Select Size</h1>
                            <div className="productDisplay-right-size">
                                <button>S</button>
                                <button>m</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <hr className="mt-5 my_hr" />
                        <p className="productDisplay_right-category"><span>Category: </span> {product.category}, Cloth</p>
                        <p className="productDisplay_right-category"><span>Tags: </span> Mordern, Latest</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDisplay