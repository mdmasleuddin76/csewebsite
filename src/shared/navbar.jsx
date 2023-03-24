import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
   const [navSize, setNavSize] = useState("10rem");
   const [navColor, setNavColor] = useState("#red");
   const listenScrollEvent = () =>{
    window.scrollY > 10 ? setNavColor("#52ab98") : setNavColor("#red")
    window.scrollY > 10 ? setNavSize("5rem") : setNavSize("10rem")
   }
   useEffect(()=>{
    window.addEventListener("scroll",listenScrollEvent);
    return ()=>{
      window.removeEventListener("scroll",listenScrollEvent)
    };
   },[]);
  const myStyle={
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: '21px',
    outlineOffset: '-4px',
    paddingTop: '0.725em',
    paddingBottom: '0.725em',
    textDecoration: isHover ? 'underline' : 'none',
    transition: 'color 1s ease-out, background-color 1s ease-out, font 1s',
    marginRight: '10px',
  }
  return (
      <>
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
      >
      <Navbar className="navbar-form" expand="lg">
      <Container>
        <Navbar.Brand> <Link to="/"><img src={logo} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto navbar-nav'>
            <Nav.Link style={myStyle} href="/about">About Us</Nav.Link>
            <Nav.Link style={myStyle} href='academic'>Academic</Nav.Link>
            <Nav.Link style={myStyle} href="/people">People</Nav.Link>
            <Nav.Link style={myStyle} href="/research">Research</Nav.Link>
            <Nav.Link style={myStyle} href='/events'>Events</Nav.Link>
            <Nav.Link style={myStyle} href="/placement">Placement</Nav.Link>
            <Nav.Link style={myStyle} href="/gallery">Photo Gallery</Nav.Link>
            <Nav.Link style={myStyle} href="/location">Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </nav>
    </div>
      </>
  );
}

export default NavBar;
