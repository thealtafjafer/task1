import { red } from '@material-ui/core/colors';
import React from 'react';
import{Container,Button} from "react-bootstrap"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="main">
           <Container>
               <div className="row">
                   <div className="col ">
                       <h5>About us</h5>
                       <p><LocationOnIcon/>Microtech technologies limited andheri east, Mumbai 400069</p>
                       <p><PhoneAndroidIcon/>91-22-7756-89</p>
                   </div>
                   <div className="col">
                       <h5>Quick links</h5>
                       <p ><ChevronRightIcon/> About us</p>
                       <p><ChevronRightIcon/>Blogs</p>
                       <p><ChevronRightIcon/>Categories</p>
                       <p><ChevronRightIcon/>Courses</p>
                       <p><ChevronRightIcon/>Contact us </p>
                   </div>
                   <div className="col">
                       <h5>Tages</h5>
                       
                       <Button variant="secondary" className="btn">Courses</Button>{' '}
                       <Button variant="secondary" className="btn">Events</Button>{' '}
                       <Button variant="secondary" className="btn">Projects</Button>{' '}
                       <Button variant="secondary" className="btn">Development</Button>{' '}
                       <Button variant="secondary" className="btn">Blogs</Button>{' '}
                       <Button variant="secondary" className="btn">Designing</Button>{' '}
                       <Button variant="secondary" className="btn">IT & Security</Button>{' '}
                       <Button variant="secondary" className="btn">Photography</Button>{' '}
                       <Button variant="secondary" className="btn">Account & Finance</Button>{' '}
                   </div>
                   <div className="col">
                       <h5>Social links</h5>
                       <div>
                       <FacebookIcon/>
                       <LinkedInIcon/>
                       <TwitterIcon/>
                       <InstagramIcon/>
                       </div>
                   </div>
                   <p className="reserved">Copyrights © 2021. All rights reserved by <span className="aj">Microtech technology</span>.</p>
               </div>
               
                   
               
           </Container>
        </div>
    );
};

export default Footer;