import React from 'react';
import {InputGroup,Button,FormControl,Container,Dropdown,SplitButton,DropdownButton} from "react-bootstrap"
import "./SrhBar.css"
const SrhBar = () => {
    return (
        <div className="Srhmain">
            <Container>
              <div className="head">
            <h5>Search for the 1000 tutorials and courses</h5>
            </div>
                <div className="row">
                  <div className="col-lg-5 col-md12 col-sm-12">
                  <InputGroup className="mb-3">
    <FormControl
      placeholder=" Courses or keyword"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      search
    </Button>
  </InputGroup>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                 <DropdownButton id="dropdown-basic-button" title="Select categories" className="drop"></DropdownButton>
                  </div>
                  <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <Button variant="danger">Find courses</Button> 
        
                  </div>
                </div>
                
            
  </Container>



        </div>
    );
};

export default SrhBar;