import { Container, Row, Col, Modal } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";
import React, { useState } from "react";
import {ImLocation2} from 'react-icons/im';
import "./BookingPage.css";

const CabBooking = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [Current, setCurrent] = useState(1);

  const openBooking = () => {
    setShowBooking(!showBooking);
  };
  const showcancelmodal = () => setShowCancelModal(true);
  const hidecancelmodal = () => setShowCancelModal(false);


  return (
    <Container className="cabbooking">
      <Row className="cabbooking1">
          <Row className="cabbooking11">
          <Col className="cabbooking111" onClick={() => setCurrent(1)}>Current Bookings</Col>
          <Col className="cabbooking111" onClick={() => setCurrent(2)}> Previously Cabs Booked</Col>
        </Row>

        
      {Current === 1 &&  
        <Row className="cabbooking12">
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
            <button className="cabbooking126button1" onClick={openBooking}>
              Click to View
            </button>
            <br />
            {!showBooking && (
              <button className="cabbooking126button2"  onClick={showcancelmodal}>Cancel booking</button>
              )}
          </Col>
        </Row>
       }
      {Current === 2 && 
        <Row className="cabbooking12">
        <Col md={2} className="cabbooking121">
          <img src="innova2-removebg-preview.png" alt="innova" />
        </Col>
        <Col md={2} className="cabbooking122">
          <h5>Tavera</h5>
          <br />
          <p>7 seats | 2 luggage | AC</p>
        </Col>
        <Col md={1} className="cabbooking123">
          <h6>From</h6>
          <br />
          <p>Goa</p>
        </Col>
        <Col md={1} className="cabbooking124">
          <h6>To</h6>
          <br />
          <p>Nashik</p>
        </Col>
        <Col md={3} className="cabbooking125">
          <h6>Pickup Date & Time</h6>
          <br />
          <p>10 November 2024, 11:00AM</p>
        </Col>
        <Col md={3} className="cabbooking126">
          <button className="cabbooking126button1" onClick={openBooking}>
            Click to View
          </button>
          <br />
          {!showBooking && (
            <button className="cabbooking126button2"  onClick={showcancelmodal}>Cancel booking</button>
            )}
        </Col>
      </Row>
       }

        <Modal 
                    show={showCancelModal}
                    onHide={hidecancelmodal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered 
                    style={{transition:"opacity 0.8s"}}
                  >
                    <Modal.Header  closeButton>
                      <h1 className="confirm-booking-title"> Cancel Booking</h1>
                    </Modal.Header>
                    <Modal.Body className="confirm-booking-modal-body">
                      <div className="confirmcancel-1">
                        
                          <textarea  placeholder="why are you cancel booking" />

                      <button>Cancel Booking</button>
                      </div>
                    </Modal.Body>
        </Modal>


        {showBooking && (
          <Row className="cabbooking3">

            <Col md={12} className="cabbooking32">
              <Row className="cabbooking321">
                <Col md={1} className="cabbooking3211">
                  <img src="innova2-removebg-preview.png" alt="innova" />
                </Col>
                <Col md={9} className="cabbooking3212">
                  <h5>Innova or Equivalent</h5>
                  <br />
                  <p>7 seats | 2 luggage | AC</p>
                </Col>
               
                <Col md={2} className="bookingprize">
                  <p>Prize</p>
                  <h3>2000/-</h3>
                </Col>
               
              </Row>
              <Row className="cabbooking322">
                <Col md={2} className="cabbooking3221">
                  <h6> <ImLocation2 className="locationpick"/> Pickup Location </h6>

                  <input type="text" placeholder="Mumbai" readOnly />
                </Col>
                <Col md={1}>
                  <BiRightArrowAlt className="cabbooking3222" />
                </Col>
                <Col md={2} className="cabbooking3223">
                  <h6> <ImLocation2 className="locationdrop"/> Drop Location </h6>
                  <input type="text" placeholder="Kedarnath" readOnly />
                </Col>
                <Col md={4} className="cabbooking3231">
                  <h6>Pickup Date & Time</h6>
                  <p>26 November 2022,Wednesday, 08:00AM</p>
                </Col>
                <Col md={3} className="cabbooking3232">
                  <button onClick={showcancelmodal}>Cancel booking</button>
                
                </Col>
                
              </Row>
              
            </Col>
          </Row>
        )}

      </Row>
    </Container>
  );
};

export default CabBooking;