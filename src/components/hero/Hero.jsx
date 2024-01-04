import React from 'react'
import './hero.css'
import hero_img from '../assets/banner-img.png'
import { Col, Container, Row } from 'reactstrap'

const Hero = () => {
  return (
    <div className="hero">
        <Container>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className="hero-left w-100">
                        <h2>New Arrivals only</h2>
                        <div>
                            <div className="hero-hand-icon">
                                <p>new <span className="hero_iconwave">✨</span> collections for everyone</p>
                            </div>
                        </div>
                        <div className="hero-latest-btn">
                            <button>Latest Collection</button>
                        </div>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className="hero-right w-100">
                        <img src={hero_img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero