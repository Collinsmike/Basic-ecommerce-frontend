import React from 'react';
import './newsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form>
            <input type="email" name="email" placeholder='Your email ID' />
            <button type="submit">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter