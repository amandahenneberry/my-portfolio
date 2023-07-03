import Carousel from 'react-bootstrap/Carousel';


function DailyWebImgs() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="photos"
          src="https://res.cloudinary.com/dl9ypspru/image/upload/v1688235054/portfolio%20site/weblogImg1_fhnzm4.png"
          alt="First slide"          
        />
        <br></br>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photos"
          src='https://res.cloudinary.com/dl9ypspru/image/upload/v1688235054/portfolio%20site/weblogImg2_s8wlmw.png'
          alt="Second slide"
        />
        <br></br>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photos"
          src="https://res.cloudinary.com/dl9ypspru/image/upload/v1688235054/portfolio%20site/weblogImg3_fppful.png"
          alt="Third slide"
        />
        <br></br>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="photos"
          src= 'https://res.cloudinary.com/dl9ypspru/image/upload/v1688235054/portfolio%20site/weblogImg4_sjweeg.png'
          alt="Fourth slide"
        />
        <br></br>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="photos"
          src='https://res.cloudinary.com/dl9ypspru/image/upload/v1688235107/portfolio%20site/weblogImg5_fp82cb.png'
          alt="Fifth slide "
        />
        <br></br>
      </Carousel.Item>
    </Carousel>
  );
}

export default DailyWebImgs;