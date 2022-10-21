import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Header.css';
function Header() {
    return (
        <>
          <Navbar bg="success" variant="success">
          <Container>
            <Navbar.Brand href="#home" className="navbar">LOREM IPSUM</Navbar.Brand>
          </Container>
        </Navbar>
        </>
    )
}

export default Header