import Slider from 'react-slick';
import './MovieGallery.scss'


const MovieGallery = ({banners}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <Slider {...settings}>
      {banners.map((banner: any) => {
        return (
          <div className="gallerySlide">
            <img className="gallerySlide-image"  src={banner.fields.banner} />
          </div>
        );
      })}
    </Slider>
  );
}

export default MovieGallery