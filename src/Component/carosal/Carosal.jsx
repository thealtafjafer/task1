import React from 'react';
import {Carousel,Button} from 'react-bootstrap';
import "./Carosal.css"
const Carosal = () => {
    return (
        <div className="Carmain">
          
            <Carousel>
  <Carousel.Item>
    <img
      className="carimg"
      src="./Assets/design.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="cardata">
      <h3 >Learn from everywhere</h3>
      <p>technology is bringing massive wave of evolution on learning things in different ways.</p>
      <Button variant="outline-primary">Primary</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carimg"
      src="./Assets/design2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 >Learn from everywhere</h3>
      <p>technology is bringing massive wave of evolution on learning things in different ways.</p>
      <Button variant="outline-primary">Primary</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carimg"
      src="./Assets/design3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 >Learn from everywhere</h3>
      <p>technology is bringing massive wave of evolution on learning things in different ways.</p>
      <Button variant="outline-primary">Primary</Button>{' '}</Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carosal;