import React, { useState } from "react";
import { Container, Row, Col,Badge } from "react-bootstrap";
import {  CiUser } from "react-icons/ci";
import { BiRightArrowAlt} from 'react-icons/bi';
import {ImLocation2} from 'react-icons/im';
import "./CancelPage.css";
const CancelBooking = () => {
  const [Cancelvalue, setCancelvalue] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  
  const showcancelmodal = () => setShowCancelModal(true);
  const hidecancelmodal = () => setShowCancelModal(false); 
  
  function showCancel(){
    setCancelvalue(!Cancelvalue)
  }
  

  return (
    <Container className="cabcancelmain">
      <Row className="cabbooking110">Cancelled Bookings</Row>
      <Row className="cabbooking12">
        <div class="ribbon ribbon-top-left">
          <span>Cancelled</span>
        </div>
          <Col md={2} className="cabbooking121">
            <img src="innova2-removebg-preview.png" alt="innova" />
          </Col>
          <Col md={2} className="cabbooking122">
            <h5>Innova</h5>
            <br />
            <p>7 seats | 2 luggage | AC</p>
          </Col>
          <Col md={1} className="cabbooking123">
            <h6>From</h6>
            <br />
            <p>Mumbai</p>
          </Col>
          <Col md={1} className="cabbooking124">
            <h6>To</h6>
            <br />
            <p>Nashik</p>
          </Col>
          <Col md={3} className="cabbooking125">
            <h6>Pickup Date & Time</h6>
            <br />
            <p>26 November 2022, 08:00AM</p>
          </Col>
          <Col md={3} className="cabbooking126">
          <button className="cabbooking126cancel" onClick={showCancel}>
            Click to View
          </button>
          </Col>
        </Row>

      {Cancelvalue  && (
       <Row className="cabbooking3">
            

            <Col md={12} className="cabbooking32">
              <Row className="cabbooking321">
                <Col md={1} className="cabbooking3211">
                  <img src="innova2-removebg-preview.png" alt="innova" />
                </Col>
                <Col md={7} className="cabbooking3212">
                  <h5>Innova or Equivalent</h5>
                  <br />
                  <p>7 seats | 2 luggage | AC</p>
                </Col>
                <Col className="cabbooking3232">
                    <button>Cancelled</button>
                </Col>
              </Row>
              <Row className="cabbooking322">
                <Col md={2} className="cabbooking3221">
                  <h6 > <ImLocation2 className="locationpick"/> Pickup Location</h6>

                  <input type="text" placeholder="Mumbai" readOnly />
                </Col>
                <Col md={1}>
                  <BiRightArrowAlt className="cabbooking3222" />
                </Col>
                <Col md={2} className="cabbooking3223">
                  <h6> <ImLocation2 className="locationdrop"/> Drop Location</h6>
                  <input type="text" placeholder="Kedarnath" readOnly />
                </Col>
                <Col md={4} className="cabbooking3231">
                  <h6>Pickup Date & Time</h6>
                  <p>26 November 2022,Wednesday, 08:00AM</p>
                </Col>
                <Col md={2} className="bookingprize">
                  <p>Prize</p>
                  <h3>2000/-</h3>
                </Col>
              </Row>
              
            </Col>
          </Row>
      )}
     
    </Container>
  );
};

export default CancelBooking;