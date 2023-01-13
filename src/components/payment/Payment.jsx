import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Payment.css'

function Payment() {
const [value, setValue] = useState(1);

const [paylaterActive, setpaylaterActive] = useState(false);
const [upiActive, setupiActive] = useState(false);
const [cardsActive, setcardsActive] = useState(false);
const [netbankActive, setnetbankActive] = useState(false);

const paylater = () => {
    setValue(1);
    setpaylaterActive(true);
    setupiActive(false);
    setcardsActive(false);
    setnetbankActive(false);
  };

const upi = () => {
    setValue(2);
    setupiActive(true);
    setpaylaterActive(false);
    setcardsActive(false);
    setnetbankActive(false);
  };

const cards = () => {
    setValue(3);
    setcardsActive(true);
    setpaylaterActive(false);
    setupiActive(false);
    setnetbankActive(false);
  };

const netbank = () => {
    setValue(4);
    setnetbankActive(true);
    setpaylaterActive(false);
    setupiActive(false);
    setcardsActive(false);
  };

  return (
    <Container fluid className='paymentContainer'>
        <Row>
        <Col className='paymentLeft' md={8}>
            <div className='mainpayment'>
                <div className='mainpaymentheader'>
                    <h4>Payment Options</h4>
                </div>

            <Container>

                <Row className='paymentSelection'>
                    <Col md={3} className='paymentOptions' id='paylater'
                    onClick={paylater}
                    style={{
                        backgroundColor: paylaterActive ? "black" : "white",
                        color: paylaterActive ? "white" : "black",
                    }}>
                        <div>
                            <h5>Book & Pay Later</h5>
                        </div>
                    </Col>

                    <Col md={3} className='paymentOptions' id='upi'
                    onClick={upi}
                    style={{
                        backgroundColor: upiActive ? "black" : "white",
                        color: upiActive ? "white" : "black",
                        textAlign: "center",
                    }}>
                        <div>
                            <h5>UPI</h5>
                        </div>
                    </Col>

                    <Col md={3} className='paymentOptions' id='creditcard'
                    onClick={cards}
                    style={{
                        backgroundColor: cardsActive ? "black" : "white",
                        color: cardsActive ? "white" : "black",
                        textAlign: "center",
                    }}>
                        <div>
                            <h5>Credit/Debit Card</h5>
                            <p>Visa, Mastercard, Amex, Rupay And More</p>
                        </div>
                    </Col>

                    <Col md={3} className='paymentOptions' id='netbank'
                    onClick={netbank}
                    style={{
                        backgroundColor: netbankActive ? "black" : "white",
                      color: netbankActive ? "white" : "black",
                      textAlign: "center",
                    }}>
                        <div>
                            <h5>Net Banking</h5>
                        </div>
                    </Col>

                </Row>
            </Container>

                { value === 1 &&
                <div className='paymentcontent'>
                    <Row>
                        <Col md={6} className='paytype11'>
                            <p>Check Eligibity of your number</p>
                            <p>+91 9307415406</p>
                        </Col>

                        <Col md={6} className='paytype12'>
                            <button>Proceed Booking</button>
                        </Col>
                    </Row>

                    <Row className='paymenttype1main'>
                        <Col className='banks'>
                            <img src="" alt="" />
                        </Col>
                        <Col className='banks'>
                            <img src="" alt="" />
                        </Col>
                        <Col className='banks'>
                            <img src="" alt="" />
                        </Col>
                        <Col className='banks'>
                            <img src="" alt="" />
                        </Col>
                    </Row>
                </div>
                }

                { value === 2 &&
                <div className='paymentcontent'>
                    second
                </div>
                }

                { value === 3 &&
                <div className='paymentcontent'>
                    third
                </div>
                }

                { value === 4 &&
                <div className='paymentcontent'>
                    fourth
                </div>
                }

            </div>
        </Col>

        <Col className='paymentRight' md={4}>
            <div className='upperPayemnt'>
                <div className='upperpaymentheader'>
                    <p>One Way Cab</p>
                </div>

                <div className='upperpaymentTop'>
                    <div>
                        <img src="suv1.png" alt="" />
                        <p>SUV</p>
                    </div>
                    <p>Innova Or Equivalent</p>
                </div>

                <div  className='upperpaymentMiddle'>
                    <p className='upperpaymenttitle'>Pickup Location</p>
                    <p className='upperpaymentdata'>Mumbai</p>
                </div>

                <div  className='upperpaymentMiddle'>
                    <p className='upperpaymenttitle'>Drop Location</p>
                    <p className='upperpaymentdata'>Nashik</p>
                </div>

                <div  className='upperpaymentBottom'>
                    <p className='upperpaymenttitle'>Pickup Date & Time</p>
                    <p className='upperpaymentdata'>26 November 2022, Wednesday, 08:00AM</p>
                </div>

            </div>

            <div className='lowerPayemnt'>
                <div className='mainInnerpayment'>
                    <span>₹</span><p>Pricing Details</p>
                </div>
                <div className='lowerInnerpayment'>
                    <p>Base Fare</p>
                    <p>₹1967</p>
                </div>
                <div className='lowerInnerpayment'>
                    <p>Driver Allowance</p>
                    <p>₹360</p>
                </div>
                <div className='lowerInnerpayment'>
                    <p>Tax</p>
                    <p>₹116</p>
                </div>
            </div>
        </Col>
        </Row>
    </Container>
  )
}

export default Payment