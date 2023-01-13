import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Services2.css";
// import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRef } from "react";


const serv2 = [
  {
    serv2Img: 'homeless.png',
    servr2Title: 'Accommodation',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    serv2Img: 'flags.png',
    servr2Title: 'Tour Managers',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    serv2Img: 'research.png',
    servr2Title: 'Best Value Itinerary',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    serv2Img: 'fried-rice.png',
    servr2Title: 'All Meals',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    serv2Img: 'touring.png',
    servr2Title: 'On-Tour Transport',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
  {
    serv2Img: 'fly.png',
    servr2Title: 'To and from airfare',
    serv2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  },
]

export default function Services2() {
  const slider = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)

  const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      centerMode: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid="md" className="serv2Container">
      <div className="outerServ2Slider">
        <div className="serv2SliderTitle">
         <h1> All inclusive tours</h1>
        </div>

        <div className="Serv2sliderControls">
          <div className="mainServ2slider">
            <Slider {...settings} ref={slider}>

            {serv2.map((item,index) => (
              <div key={index} className={index == activeIndex ? "slide activeSlide" : "slide"}>
                  <div className="serv2slides">
                    <div className="innerserv2slide">
                      <img src={item.serv2Img} alt="" />
                      <h6>{item.servr2Title}</h6>
                      <p>
                        {item.serv2Text}
                      </p>
                    </div>
                  </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
        
      </div>
    </Container>
  );
}
