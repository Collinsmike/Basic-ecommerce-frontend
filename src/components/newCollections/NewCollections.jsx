import React from 'react'
import './newCollections.css'
import new_collections from '../assets/new_collections'
import { Col, Container, Row } from 'reactstrap'
import Item from '../item/Item'

const NewCollections = () => {
  return (
    <section className='new_collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            <Container>
                <Row>
                    {
                        new_collections.map((item, index) => (
                            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    </section>
  )
}

export default NewCollections