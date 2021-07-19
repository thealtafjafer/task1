import React from 'react';
import "./Navlinks.css";
import {Navbar,FormControl,Button,Nav,Form,Container} from "react-bootstrap";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const NavLinks = () => {
    return (
        <div className="NavCSS">
          
            <Navbar bg="light" expand="lg" className="navmn">
  <Navbar.Brand href="#"><img src="./Assets/nalogo.png" alt="" className="imgnav"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
     <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Courses</Nav.Link>
      <Nav.Link href="#features">Blogs</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link> 
      <Nav.Link href="#pricing">About Us</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
    </Nav>
    <div className="searchcss">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
      
      
   

    </Form>
    
    </div>
    <PermIdentityIcon className="d-flex2"/>
      <div className="d-flex1">
      <span className="login"> Login/Register</span>
       </div>
  </Navbar.Collapse>
  
        
</Navbar>

        </div>
    );
};

export default NavLinks;