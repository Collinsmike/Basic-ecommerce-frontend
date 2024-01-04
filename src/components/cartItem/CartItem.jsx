import React, { useContext } from 'react'
import './cartItem.css'
import { ShopContext } from '../../context/ShopContext';
import { Container } from 'reactstrap';

const CartItem = () => {
    
  const { getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <Container>
        <div className="cartItems">
            <div className="cartItems_format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <h3 className='text-secondary' style={{fontSize: '13px'}}><small>Item list</small></h3>
                {all_product.map((e, index)=>{
                    if(cartItems[e.id]>0){
                        return <div className="cartItem_format" key={index}>
                            <img src={e.image} alt="" className="cartItem_prod_icon" />
                            <p>{e.name}</p>
                            <p>UGx {e.new_price}</p>
                            <button className="cartItem_quantity">{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <div className="btn" onClick={()=>{removeFromCart(e.id)}}><span className="icon_del"><i className="ri-delete-line"></i></span><strong>X</strong></div>
                        </div>
                    }
                    return null
                })}
                <div className="cartItems_down">
                    <h1>Cart Total</h1>
                    <div className="cartItems_total">
                        <div className='d-flex total_contents'>
                            <div className="cartItems_total_item">
                                <p>Subtotal</p>
                                <p>UGx {console.log(getTotalCartAmount())}</p>
                            </div>
                            <hr />
                            <div className="cartItems_total_item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartItems_total_item">
                                <h3>Total</h3>
                                <h3>UGx {getTotalCartAmount}</h3>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartItems_promocode">
                            <p>If you have a promo code, Enter it here</p>
                            <div className="cartItems_promobox">
                                <form className='w-100' method="post">
                                    <input type="text" placeholder='Promo code' />
                                    <button type='submit'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default CartItem