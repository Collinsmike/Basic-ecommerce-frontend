import React from 'react'
import './descriptionBox.css'
import { Container } from 'reactstrap'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <Container>
            <div className="descriptionBox_navigator d-flex">
                <div className="descriptionBox_nav_box">Description</div>
                <div className="descriptionBox_nav_box">Reviews (122)</div>
            </div>
            <div className="descriptionBox_description text-secondary">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quaerat aperiam nesciunt voluptatem, reprehenderit sequi reiciendis quibusdam nostrum. Iure alias facilis nihil odio voluptatem accusamus ullam at obcaecati ab quidem, similique ea corporis qui architecto dolore minima expedita quaerat in consectetur culpa cupiditate quasi! Voluptatibus neque corrupti nostrum repellendus saepe.
                </p>
                <p className="Eco">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis alias quam dolorem dolore nihil impedit. Dignissimos natus repellendus dolor.
                </p>
            </div>
        </Container>
    </div>
  )
}

export default DescriptionBox