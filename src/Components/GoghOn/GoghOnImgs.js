import Carousel from 'react-bootstrap/Carousel';


function GoghOnImgs() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="photos"
          src="https://res.cloudinary.com/dl9ypspru/image/upload/v1688235123/portfolio%20site/goghOn2_jpreku.png"
          alt="First slide"          
        />
        <br></br>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photos"
          src='https://res.cloudinary.com/dl9ypspru/image/upload/v1688235122/portfolio%20site/goghOn1_trttdz.png'
          alt="Second slide"
        />
        <br></br>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photos"
          src="https://res.cloudinary.com/dl9ypspru/image/upload/v1688235122/portfolio%20site/goghOn3_qc3lnb.png"
          alt="Third slide"
        />
        <br></br>
      </Carousel.Item>
    </Carousel>
  );
}

export default GoghOnImgs;