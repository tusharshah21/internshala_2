import React from 'react'
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import { FaStar,FaRegStar } from 'react-icons/fa';
import "./Review.css"
function Review() {
  return (
    <>

    
    <Card body className="head"><h1>Reviews</h1></Card>
    <div className="reviews_col">
    {[
        
        'Success',
        'Success',
        'Success',
        'Light',
        'Light',
        'Light',
        'Success',
        'Success',
        'Success',
        'Light',
        'Light',
        'Light',
        
        
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-4 Reviews"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              className="avatar_rev"
              alt=""
            /><span> </span>
            <strong className="me-auto">
            
            XYZ Singh
            </strong>
            <small>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
            </small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. 
          </Toast.Body>
        </Toast>
      ))}
      </div>
    </>
  )
}

export default Review