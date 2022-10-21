import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Proposal.css'

function Proposal() {
  return (
    <>
    <Card body className="head"><h1>Some Proposals</h1></Card>
        
        <Row xs={1} md={3} className="g-4 club">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
            <Card.Body>
              <Card.Title>This is a title of the page</Card.Title>
              <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.......
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Proposal