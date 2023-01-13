import React from "react";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import Slider from "react-slick";
import "./Transfer.css";

function Transfer() {
  const [showCabDetails, setShowCabDetails] = useState(false);
  const [showView, setShowView] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll:1,
    responsive:[
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  const handleShowview = () => {
    setShowView(!showView);
  };

  const cabDetails = () => {
    setShowCabDetails(!showCabDetails);
  };

  return (
    <Container fluid className="transfer0">
      <Container fluid="md">
        <Row>
          <Col md={8}>
            <Row className="transfer-sel1">
              <Row className="transfer-details">
                <Col className="transfer-details-img" md={3}>
                  <img src="innova.png" alt="innova" />
                </Col>
                <Col md={9}>
                  <Row className="transfer-details3">
                    <Col>
                      <h3>Indica, Swift, Alto, Ford Figo or equivalent CNG</h3>
                      <div className="transferAc">
                        <div>
                          <MdAirlineSeatReclineExtra />7 seats
                        </div>
                        <div>
                          <FaSuitcase />2 luggage
                        </div>
                        <div>
                          <IoMdCheckmarkCircleOutline />
                          AC
                        </div>
                      </div>
                      <div>
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star1" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="transfer-spacious">
                <Row className="transfer-details4">
                  <Col md={3}>
                    <div className="transfer-details-data">
                      <div>
                        <HiLocationMarker className="trlocationpick" /> 
                        <p>Pickup Location</p>
                      </div>
                    
                      <input type="text" placeholder="Nashik" readOnly />
                    </div>
                  </Col>
                  <Col md={1} className="transfer-details4-arow">
                    <BiRightArrowAlt />
                  </Col>
                  <Col md={3}>
                    <div className="transfer-details-data">
                      <div>
                        <HiLocationMarker className="trlocationdrop" /> 
                        <p>Drop Location</p>
                      </div>
                      <input type="text" placeholder="Mumbai" readOnly />
                    </div>
                  </Col>

                  <Col md={5}>
                    <div className="transfer-details-data-time">
                      <p>Pickup Date & Time</p>
                    
                      <span>26 Nov 2022, 08:00 AM</span>
                    </div>
                  </Col>
                </Row>

                <Row className="transferSpec">

                  <Col className="transfer-viewd">
                    <button onClick={handleShowview}>
                      VIEW DETAILS
                      <span>
                        <AiOutlineDown />
                      </span>
                    </button>
                  </Col>
                  {showView && (
                    <div>
                      <div className="transfer-inclusion0" id="transfer-block">
                        <div className="transfer-inclusion">
                          <h5>
                            <FcCheckmark className="transfer-inclusion-mark" />
                            Inclusions
                            <span>(Included In The Price) </span>
                          </h5>
                          <div className="inclusion-data">
                            <li>Toll Charges</li>
                            <li>Driver Allowance</li>
                            <li>State Tax</li>
                          </div>
                        </div>

                        <div className="transfer-exclusion">
                          <h5>
                            <RxCross2 className="transfer-exclusion-mark" />
                            Exclusions <span>(Extra Charges)</span>
                          </h5>
                          <div className="exclusion-data">
                            <li>Waiting Charges (After 45 mins, ₹ 100.0/hr)</li>
                            <li>Fare beyond 166 Kms (₹ 20/Km)</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Row>
              </Row>
            </Row>

            <Row className="transfer-travellar-title">
              <h3>Travellar Details</h3>
            </Row>
            <Row className="transfer-travellar">
              <Row>
                <Col md={6}>
                    <div className="inputBox">
                      <input type='text' required/>
                      <span>Full Name</span>
                    </div>
                </Col>
                <Col md={6}>
                <div className="inputBox">
                      <input type='text' required/>
                      <span>Email</span>
                    </div>
                </Col>
             
                <Col md={6}>
                    <div className="inputBox">
                      <input type='number' required/>
                      <span>Mobile</span>
                    </div>
                </Col>
                <Col md={6}>
                <div className="inputBoxGender">
                  <h5>Gender</h5>
                  <div className="radio-group">

                    <label className="radioLabel">
                      <input type="radio" value='male' name="gender"/>
                      Male
                      <span></span>
                    </label>
                    <label className="radioLabel">
                      <input type="radio" value='female' name="gender"/>
                      Female
                      <span></span>
                    </label>
                  </div>
                  </div>
                </Col>
              </Row>
              
              
              <Row className="transfer-travellar-terms">
                <div>
                  <input name="terms" type="checkbox" />
                  <label htmlFor="terms">
                    I understand and agree to the rules of this fare and the{" "}
                    <span>Terms & Conditon</span>
                  </label>
                </div>
              </Row>
            </Row>

            <Row className="transfer-cancellation-title0">
              <div className="transfer-cancellation-title">
                <p>Driver Details</p>
              </div>
            
                <div className="cabDetailsinner">
                  <div className="cabDetailsinnerTitle">
                    <h5>
                      Cab driver details will be shared up to 30 mins prior to
                      departure.
                    </h5>
                  </div>
                </div>
            
            </Row>

            <Row className="transfer-cancellation-title0">
              <div className="transfer-cancellation-title">
                <p>Cab Images</p>
                <AiOutlineDown
                  className="transfer-cancellation-title-icon"
                  onClick={cabDetails}
                />
              </div>
              {showCabDetails && (
                <div className="cabDetailsinner">
                 
                  <div className="cabDetailsinnerdiv">
                    <div className="cabImages">
                    <img
                      src="ferraribody.jpeg"
                      alt=""
                      onClick={() => setModalShow1(true)}
                      />
                      <p>Car Image</p>
                    </div>
                    <div className="cabImages">
                    <img
                      src="ferrariint.jpeg"
                      alt=""
                      onClick={() => setModalShow2(true)}
                      />
                      <p>Car Interior</p>
                    </div>
                    <div className="cabImages">
                    <img
                      src="ferrariseats.jpeg"
                      alt=""
                      onClick={() => setModalShow3(true)}
                      />
                       <p>Car Exterior</p>
                    </div>
                    
                  </div>
                </div>
              )}
            </Row>

            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            >
              <Modal.Header closeButton className="cabmodulehead">
                <Modal.Title id="contained-modal-title-vcenter" className="cabmoduleheadtitle">
                  Car Images
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Slider {...settings}>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 1</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 2</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 3</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 4</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 5</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte1.jpg" alt="" />
                      <h6>Image 6</h6>
                    </div>
                  </Slider>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            >
              <Modal.Header closeButton className="cabmodulehead">
                <Modal.Title   className="cabmoduleheadtitle">
                Interior Images
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Slider {...settings}>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 1</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 2</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 3</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 4</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 5</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte2.jpg" alt="" />
                      <h6>Image 6</h6>
                    </div>
                  </Slider>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            >
              <Modal.Header closeButton className="cabmodulehead">
                <Modal.Title id="contained-modal-title-vcenter" className="cabmoduleheadtitle">
                Exterior Images
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Slider {...settings}>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 1</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 2</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 3</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 4</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 5</h6>
                    </div>
                    <div className="carImages">
                      <img src="innovainte3.jpg" alt="" />
                      <h6>Image 6</h6>
                    </div>
                  </Slider>
                </div>
              </Modal.Body>
            </Modal>
          </Col>

          <Col md={4} className="transfermain">
          <div className='lowerPayemnt'>
                <div className='mainInnerpayment'>
                    <span>₹</span><p>Pricing Details</p>
                </div>
                <div className='lowerInnerpayment'>
                  <div>
                    <input type="radio" name="payment" id='fullpayment' value='fullpayment'/>
                    <label htmlFor="fullpayment">Pay Full Amount</label>
                  </div>
                  <div>
                    <p>₹ 2269</p>
                  </div>
                </div>
                <div className='lowerInnerpayment'>
                  <div>
                    <input type="radio" name="payment" id='partpayment' value='partpayment'/>
                    <label htmlFor="partpayment">Pay Part Amount</label>
                  </div>
                  <div>
                    <p>₹ 569</p>
                  </div>
                </div>
                <div className="confirm-booking-body3Outer">
                    <label htmlFor="coupon">Enter Coupon code</label>
                    <div className="confirm-booking-body3">
                      <input type="text" name="coupon" placeholder="MAN2023"/>
                      <p>Apply Code</p>
                    </div>
                </div>
                <hr className="pricehr"/>
                <div className='lowerInnerpayment'>
                    <h2>Total</h2>
                    <h5>₹ 2269</h5>
                </div>
                <button>Continue to Pay</button>

            </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Transfer;