import React, { useContext } from 'react'
import "./styles/shopCategory.css"
import { ShopContext } from '../context/ShopContext'
import { Container, Row, Col } from 'reactstrap'
import Item from '../components/item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop_category">
      <Container>
        <div className="category_banner_hero" style={{backgroundImage: `url(${props.banner})`}}>
          <h1 className='categoryTitle'>{props.category}'s Collections</h1>
        </div>
      </Container>

      <div className="shopcategory_products mt-5">
        <Container>
          <div className="shopcategory_indexSort d-flex gap-5">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory_sort">
              sort by <span className="arrow_down-icon"><i className="ri-arrow-down-line"></i></span>
            </div>
          </div>
          <Row>
            {
              all_product.map((item, index) => {
                if (props.category === item.category){
                  return <Col xs={6} sm={6} md={6} lg={3} xl={3} key={index}>
                            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        </Col>
                }else{
                  return null
                }
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ShopCategory