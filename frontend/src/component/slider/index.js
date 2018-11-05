import React from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={400} alt="900x400" src="https://s3.amazonaws.com/rugbyscout-two/rugby1.png" />
            <Carousel.Caption>
              <h5>Logon</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={400} alt="900x400" src="https://s3.amazonaws.com/rugbyscout-two/rugby2.jpg" />
            <Carousel.Caption>
              <h5>Upload Stats</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={400} alt="900x400" src="https://s3.amazonaws.com/rugbyscout-two/rugby3.jpg" />
            <Carousel.Caption>
              <h5>Post</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={400} alt="900x400" src="https://s3.amazonaws.com/rugbyscout-two/rugby4.jpg" />
            <Carousel.Caption>
              <h5>Recruit your team</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;