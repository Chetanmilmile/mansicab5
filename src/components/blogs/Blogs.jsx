import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogs.css";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { TfiControlForward } from "react-icons/tfi";


const blogCard=[
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
  {
    blogImg: 'blogImg3.png',
    blogTitle: 'Best Place To Visit Near Aurangabad',
    location: 'Nashik, Maharashtra, India',
    blogData: 'An ancient location known as Elephanta Caves has been listed as a UNESCO World Historical Landmark. It is a superb illustration of mediaeval Indian rock-cut art and construction On an island',
  },
]

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
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

function Blogs() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <Container fluid='md'>
    <div className="mainblogcontainer">
      <Row className="blogsrow1">
        <Slider {...settings}>
          <div>
            <img src="blogimg1.png" alt="" />
          </div>
          <div>
            <img src="blogimg2.png" alt="" />
          </div>
          <div>
            <img src="blogimg1.png" alt="" />
          </div>
          <div>
            <img src="blogimg2.png" alt="" />
          </div>
          <div>
            <img src="blogimg1.png" alt="" />
          </div>
          <div>
            <img src="blogimg2.png" alt="" />
          </div>
          <div>
            <img src="blogimg1.png" alt="" />
          </div>
          <div>
            <img src="blogimg2.png" alt="" />
          </div>
        </Slider>
      </Row>

      <Row className="blogsrow2">
        <Col md={2} className="blogcity">
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Nashik</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Mumbai</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Goa</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Pune</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Amravati</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Nagpur</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Manali</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Shimla</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Dadar</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Chandrapur</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Wardha</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Kedarnath</li>
            </div>
            <TfiControlForward />
          </div>
          <div className="blogcityimg1">
            <div className="blogcityimg">
              <img src="Nashik 3.png" alt="nashik" />
              <li>Ujjain</li>
            </div>
            <TfiControlForward />
          </div>
        </Col>
        <Col md={10}>
            <Row>
              {blogCard.map((item, index) => (

             
          <Col md={3} key={index}  className="searchplacesCard">
            <div>
              <img src={item.blogImg} alt="" />
            </div>
            <div className="searchplacesCarddata">
              <p>{item.location}</p>
              <h6 className="searchplacesCardtitle">
                {item.blogTitle}
              </h6>
              <p>
              {item.blogData}
              </p>
              <Link to='/blogs/aurangabad'>Read More</Link>
            </div>
          </Col>
           )) }
          </Row>
        </Col>
      </Row>
    </div>
    </Container>
    
  );
}

export default Blogs;