import Carousel from "react-bootstrap/Carousel";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  return (
    <Carousel fade>
      {images.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <div className="w-[700px] h-[500px] max-[1330px]:w-[400px] max-[1330px]:h-[400px] max-[800px]:w-[600px] max-sm:w-[400px] max-[420px]:w-[300px]">
            <img
              src={imageUrl}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
