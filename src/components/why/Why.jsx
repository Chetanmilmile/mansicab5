import React from 'react'
import './Why.css'
// import {Col, Container, Row} from 'react-bootstrap'
// import trustbg from '../../Assets/trust-removebg-preview.png'
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import Slider from "react-slick";
import trust from "../../Assets/trust-removebg-preview.png";
import t4x7 from "../../Assets/24 x 7.png";
import lowestp from "../../Assets/money-removebg-preview.png";
import expdriver from "../../Assets/exp_driver-removebg-preview.png";

function Why() {
    const whyslider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="whySliderContainer">
        <div className="whySliderTitle">
          <h1>Why Choose Us</h1>
        </div>
        
      <div className="outerwhySlider">

        <div className="whysliderControls">

        <div className="mainwhyslider">
          <Slider {...settings} ref={whyslider}>
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg1" src={trust} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg2" src={lowestp} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg3" src={t4x7} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg4" src={expdriver} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
                        
                      

          </Slider>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Why

