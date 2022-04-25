import { React } from 'react';
import './Design.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Design(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerPadding:50,
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
         
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="design_design">

<Slider {...settings}>
          <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e15a988373207.5dd457616d9f8.jpg" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
  

        </div>
    )
}

export default Design;

