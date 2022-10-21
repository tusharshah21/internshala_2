import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Stats.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Stats() {
  return (
    <>
        <Card body className="head"><h1>Your Statistics</h1></Card>
        <br/>
    <Row className="stats_all">
        <Col>
        <div className="stats_left">

    <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.w3schools.com/w3css/img_lights.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Today's Earning</h3>
              <p>$14,000</p>
         <Button variant="light">Details</Button>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 "
              src="https://www.w3schools.com/w3css/img_lights.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Today's Earning</h3>
              <p>$14,000</p>
         <Button variant="light">Details</Button>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.w3schools.com/w3css/img_lights.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Today's Earning</h3>
              <p>$14,000</p>
         <Button variant="light">Details</Button>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </Col>
        <Col>

        <div className="stats_right">
    
    <Card ><div >
      <Card.Img className="avatar stats_right_img" variant="top" src="https://previews.123rf.com/images/provector/provector1502/provector150200279/37008789-flat-business-man-user-profile-avatar-icon-design-and-long-shadow-vector-illustration-for-website-an.jpg" />

    </div>
      
      <Card.Body>
        <Card.Title>XYZ Singh</Card.Title>
        <Card.Text>
            Software Engineering 
        </Card.Text>
        
         <Button variant="primary">Profile</Button>{' '}<span> </span>
         <Button variant="light">Message</Button>

      </Card.Body>
    </Card>
    </div>
        </Col>
    </Row>
    
    </>
  );
}
