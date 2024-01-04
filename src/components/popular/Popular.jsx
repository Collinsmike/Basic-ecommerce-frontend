import React from 'react'
import './popular.css'
import data_product from '../assets/data';
import Item from '../item/Item'
import { Row, Col, Container } from 'reactstrap';

const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular in women</h1>
        <hr />
        <Container>
          <Row>
            
              {data_product.map((item,index)=>(
                <Col xs={12} sm={6} md={6} lg={3} xl={3} >
                  <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </Col>
              ))}
          </Row>
        </Container>
    </div>
  )
}

export default Popular