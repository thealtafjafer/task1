import React from 'react';
import "./Category.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Card,Button,Container} from "react-bootstrap"




const Category = () => {

    return (
<Container>
        <div className="categorymain">
                         {/* category data */}
            <div className="categorydata">
            <h5>Courses Categories</h5>
            <p className="para">All course staken under the guidance of professionals</p>
            </div>
                            {/* category data end*/}

                            {/* category swiper */}
                            <div className="swiper">
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
          <Card style={{ width: '18rem', }}>
  <Card.Img variant="top" src="/Assets/design.jpg" />
  <Card.Body>
    <Card.Title>Design</Card.Title>
    <Card.Text>
      Over 20 courses
    </Card.Text>
    
  </Card.Body>
</Card>
</SwiperSlide>
      <SwiperSlide>
          
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/Assets/bus2.jpg" />
  <Card.Body>
    <Card.Title>Business</Card.Title>
    <Card.Text>
      Over 20 courses
    </Card.Text>
    
  </Card.Body>
</Card>

      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/Assets/softwaredevelopment.jpg" />
  <Card.Body>
    <Card.Title>Software Development</Card.Title>
    <Card.Text>
      Over 20 courses
    </Card.Text>
    
  </Card.Body>
</Card>
      </SwiperSlide>
      <SwiperSlide>
          
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/Assets/webdevelopment.jpg" />
  <Card.Body>
    <Card.Title>Web Development</Card.Title>
    <Card.Text>
      Over 20 courses
    </Card.Text>
    
  </Card.Body>
</Card>
      </SwiperSlide>
   
    </Swiper>
 
    </div>
                             {/* category swiper  end*/}
                {/* button  */}
     <div className="buttton">

     <Button variant="danger"><strong>All Categories</strong></Button> 
         </div>           


                        {/* button   end*/}
        </div>
        </Container>
    );
};

export default Category;







