import React from 'react'
import './relatedProducts.css'
import { Col, Container, Row } from 'reactstrap'
import data_product from '../assets/data'
import Item from '../item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <Container>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts_item">
                <Row>
                    {
                        data_product.map((item,index) => (
                            <Col xs={12} sm={6} md={6} lg={3} xl={3} key={index} >
                                <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default RelatedProducts