import React from "react";
import "./AboutUs.css";
import aboutuscar from "../../Assets/aboutuscar.png";
import airport from "../../Assets/airport.jpg";
import trust from "../../Assets/trust-removebg-preview.png";
import t4x7 from "../../Assets/24 x 7.png";
import lowestp from "../../Assets/money-removebg-preview.png";
import expdriver from "../../Assets/exp_driver-removebg-preview.png";
import { Col, Row } from "react-bootstrap";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import Slider from "react-slick";


function AboutUs() {
  const aboutslider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
    <div className="aboutUsContainer">
      <div className="aboutUsHeader">
        <h1>About US</h1>
      </div>

      <div className="aboutUsMiddle">
        <Row className="mainaboutUsMiddle">
          <Col md={8}>
            <div className="aboutUsMiddlediv">
              <p>
                Mansi Cabs Commenced its Operations in 2008 By Focusing On The
                B2B2C (Business To Business To Customer) Distribution Channel
                And Providing Travel Agents Access To: Its Website To Book
                Domestic Travel Airline Tickets in Order To Cater To The Offline
                Travel Market In India.
              </p>
              <p>
                Subsequently, By Leveraging Its 8282C Channel, The Company
                Commenced Operations In The B2C (Business To Customer)
                Distribution Channel in 2011by Primarily Focusing On The Growing
                Indian Middle Class Population's Travel Requirements.
              </p>
              <p>
                With Our Presence In The B2B2C And B2C Channels, We Were Able To
                Commence Operations In The B2E (Business To Enterprise)
                Distribution Channel In 2013 With The Aim Of Providing
                End-To-End Travel Solutions To Corporates.
              </p>
              <p>
                Our Presence In Three Distinct Distribution Channels Provide Us
                With A Diversified Customer Base And Wide Distribution Network.
                We Have Been Providing Customers With The Option Of
                No-Convenience Fee, Such That Customers Are Not Required To Pay
                Any Service Fee In Instances Where There Are No Alternate
                Discount Or Promotion Coupon Being Availed. In Our Pricing
                Model, We Have Endeavored To Avoid Hidden Costs, Which Result In
                Increasing The Final Price Payable By The Customer.
              </p>
            </div>
          </Col>

          <Col className="aboutUsMiddleCol2" md={4}>
            <img className="aboutusAirportimg" src={airport} alt="" />
            <img className="aboutuscarimg" src={aboutuscar} alt="" />
          </Col>
        </Row>
      </div>

      <div className="aboutUsMiddle2">
        <p>
          Mansi Cabs Commenced Its Operations In 2008 By Focusing On The B2B2C
          (Business To Business To Customer) Distribution Channel And Providing
          Travel Agents Access To Its Website To Book Domestic Travel Airline
          Tickets In Order To Cater To The Offline Travel Market In India.
        </p>
        <p>
          Subsequently, By Leveraging Its B2B2C Channel, The Company Commenced
          Operations In The B2C (Business To Customer) Distribution Channel In
          2011 by Primarily Focusing On The Growing Indian Middle Class
          Population's Travel Requirements.
        </p>
        <p>
          With Our Presence In The B2B2C And B2C Channels, We Were Able To
          Commence Operations In The B2E (Business To Enterprise) Distribution
          Channel In 2013 With The Aim Of Providing End-To-End Travel Solutions
          To Corporates.
        </p>
        <p>
          Our Presence In Three Distinct Distribution Channels Provide Us With A
          Diversified Customer Base And Wide Distribution Network.
        </p>
      </div>


      <div  className="aboutSliderContainer">
        <div className="aboutSliderTitle">
          <h3>We Aim To Provide best car rental & cab booking services in India</h3>
        </div>
        
          <img src="aboutstamp.png" className="aboutstamp" alt="" />
        
      <div className="outeraboutSlider">

        <div className="aboutsliderControls">
      <div className="aboutcontrolbtn1" onClick={()=> aboutslider?.current?.slickPrev()}><TfiAngleLeft className='aboutsiderbtn'/></div>

        <div className="mainaboutslider">
          <Slider {...settings} ref={aboutslider}>
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg1" src={trust} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg2" src={lowestp} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg3" src={t4x7} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg4" src={expdriver} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg1" src={trust} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg2" src={lowestp} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg3" src={t4x7} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="aboutslides">
                <div className="inneraboutslide">
                    <img className="aboutimg4" src={expdriver} alt="" />
                    <h5>Trusted Advisor</h5>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
                      

          </Slider>
        </div>
          <div className="aboutcontrolbtn2" onClick={()=> aboutslider?.current?.slickNext()}><TfiAngleRight className='aboutsiderbtn'/></div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default AboutUs;
