import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MovieSlider.scss'

const MovieSlider = ({ movies }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(movies);
  
  return (
    <Slider {...settings}>
      {movies.map((movie: any) => {
        return (
          <div className="slide" key={movie.sys.id}>
            <img className="slide-image"  src={movie.fields.imageUrl} alt={movie.fields.title} />
            <h3 className="slide-title">{movie.fields.title}</h3>
          </div>
        );
      })}
    </Slider>
  );
};

export default MovieSlider;
