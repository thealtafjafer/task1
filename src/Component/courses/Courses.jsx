import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Card,Button,Container,DropdownButton,Dropdown} from "react-bootstrap"
import "./Courses.css"

const Courses = () => {
    return (
        <div className="coursesmain">
            <Container>
                <h5>Courses</h5>
                
                <div className="row coursebar">
                    <div className="col-lg-7 ">
                    <p className="para">All courses done by experts with high skills.</p>
                    </div>
                    <div className="col-lg-2">
                    <DropdownButton id="dropdown-basic-button" title="New first">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
                    </div>
                    <div className="col-lg-3">
                    <DropdownButton id="dropdown-basic-button" title="Choose course category">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
                    </div>
                
                </div>
                


                <div className="lecturer">
                <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide>
      <Card style={{ width: '18rem' }}>
  
  <Card.Title>Redux saga(with react redux)</Card.Title>
  
  <Card.Img variant="top" src="/Assets/simon.jpg" />
  <Card.Text>
      <h5>By Simon jones</h5>
  10+ yeras experience in software development.
  </Card.Text>
  
</Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem' }}>
  
  <Card.Title>Advance CSS and Sass</Card.Title>
  
  <Card.Img variant="top" src="/Assets/mia.jpg" />
  <Card.Text>
      <h5>By Mia jones</h5>
  10+ yeras experience UI/UX and responsive webpage.
  </Card.Text>
  
</Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem' }}>
  
  <Card.Title>Complete financial analyst 2021</Card.Title>
  
  <Card.Img variant="top" src="Assets/jeff.jpg" />
  <Card.Text>
      <h5>By Jeff kelso</h5>
  10+ yeras experience in Bussiness and finance.
  </Card.Text>
</Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem' }}>
  
  <Card.Title> The complete Java course 2021 </Card.Title>
  
  <Card.Img variant="top" src="/Assets/jennifer.jpg" />
  <Card.Text>
    <h5>By Jennifer thomson</h5>
    <p>10+ yeras experience in web development.</p>
  </Card.Text>
  </Card>
      </SwiperSlide>
      
    </Swiper>
                </div>

                <div className="button">
                <Button variant="danger"><strong>View All Courses</strong></Button> 
                </div>
            </Container>


            
        </div>
    );
};

export default Courses;