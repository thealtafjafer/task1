import React from 'react';
import {Container} from "react-bootstrap"
import SchoolIcon from '@material-ui/icons/School';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BookIcon from '@material-ui/icons/Book';
import "./Icons.css"
const Icons = () => {
    return (
        <Container>
        <div className="Iconsmain">
            
                <div className="mndiv">
                <div className="row ">
                    <div className="col-lg-3 col-md-6 iconss">
                    <div className="iconx"><SchoolIcon /></div>
                    <div><h1>200+</h1></div>
                    <div><p>Students</p></div>
                    </div>

                    <div className="col-lg-3  col-dm-6 iconss">
                      <div className="iconx"><ImportContactsIcon  /></div>
                      <div><h1>450+</h1></div>
                      <div><p>Courses</p></div>
                    </div>

                    <div className="col-lg-3  col-dm-6 iconss">
                    <div className="iconx"><StarBorderIcon  /></div>
                    <div><h1>200+</h1></div>
                    <div><p>Rating</p></div>
                    </div>

                    <div className="col-lg-3 col-dm-6 iconss">
                    <div className="iconx"><BookIcon  /></div>
                    <div><h1>500+</h1></div>
                    <div><p>    Projects</p></div>
                    </div>




                    
                </div>
                </div>
            
        </div>
        </Container>
    );
};

export default Icons;