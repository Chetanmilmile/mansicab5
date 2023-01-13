import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FAQ.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ() {

const [number, setNumber] = useState(1);
const [showBookDrop, setShowBookDrop] = useState(false) 


const [bookingactive, setbookingActive] = useState(true)
const [paymentactive, setpaymentActive] = useState(false)
const [serviceactive, setserviceActive] = useState(false)
const [faresactive, setfaresActive] = useState(false)
const [offeractive, setofferActive] = useState(false)
const [b2bactive, setb2bActive] = useState(false)


const bookingActive = () => {
    setNumber(1)
    setbookingActive(true)
    setpaymentActive(false)
    setserviceActive(false)
    setfaresActive(false)
    setofferActive(false)
    setb2bActive(false)
}
const paymentActive = () => {
    setNumber(2)
    setbookingActive(false)
    setpaymentActive(true)
    setserviceActive(false)
    setfaresActive(false)
    setofferActive(false)
    setb2bActive(false)
}
const serviceActive = () => {
    setNumber(3)
    setbookingActive(false)
    setpaymentActive(false)
    setserviceActive(true)
    setfaresActive(false)
    setofferActive(false)
    setb2bActive(false)
}
const faresActive = () => {
    setNumber(4)
    setbookingActive(false)
    setpaymentActive(false)
    setserviceActive(false)
    setfaresActive(true)
    setofferActive(false)
    setb2bActive(false)
}
const offersActive = () => {
    setNumber(5)
    setbookingActive(false)
    setpaymentActive(false)
    setserviceActive(false)
    setfaresActive(false)
    setofferActive(true)
    setb2bActive(false)
}
const B2BActive = () => {
    setNumber(6)
    setbookingActive(false)
    setpaymentActive(false)
    setserviceActive(false)
    setfaresActive(false)
    setofferActive(false)
    setb2bActive(true)
}

    function showBookdrop1 (value) {
      setShowBookDrop(!showBookDrop)
      if(showBookDrop === true){
        document.getElementById(`faqContent${value}`).style.display='block'
        document.getElementById(`faqPlus${value}`).style.display='none'
        document.getElementById(`faqMinus${value}`).style.display='block'
      }
      else{
        document.getElementById(`faqContent${value}`).style.display='none'
        document.getElementById(`faqPlus${value}`).style.display='block'
        document.getElementById(`faqMinus${value}`).style.display='none'
      }
    }



  return (
    <div className="faqContainer">
      <div className="faqtop">
        <h1>FAQ's all you need to know</h1>
      </div>

      <div className="faqbottom">
        <Row className="faqrow">
          <Col>
            <h5
            onClick={bookingActive}
            style={{
                fontWeight : bookingactive ? "bolder" : "normal",
                borderBottom : bookingactive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >Booking</h5>
          </Col>

          <Col>
            <h5
            onClick={paymentActive}
            style={{
                fontWeight : paymentactive ? "bolder" : "normal",
                borderBottom : paymentactive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >Payment</h5>
          </Col>

          <Col>
            <h5
            onClick={serviceActive}
            style={{
                fontWeight : serviceactive ? "bolder" : "normal",
                borderBottom : serviceactive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >Services</h5>
          </Col>

          <Col>
            <h5
            onClick={faresActive}
            style={{
                fontWeight : faresactive ? "bolder" : "normal",
                borderBottom : faresactive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >Fares</h5>
          </Col>

          <Col>
            <h5
            onClick={offersActive}
            style={{
                fontWeight : offeractive ? "bolder" : "normal",
                borderBottom : offeractive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >Offers</h5>
          </Col>

          <Col>
            <h5
            onClick={B2BActive}
            style={{
                fontWeight : b2bactive ? "bolder" : "normal",
                borderBottom : b2bactive ? "3px solid #7142f8" : "none",
                cursor: "pointer"
            }}
            >B2B</h5>
          </Col>
        </Row>

        { number === 1 &&
          <Container>
            <div className="faqdata" onClick={()=>showBookdrop1(1)}>
              <div className="faqtitle">
                <p>How Do I Book A Mansi Cab?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus1"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus1" />
                </div>
              </div>
              <div className="faqContent" id="faqContent1">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(2)}>
              <div className="faqtitle">
                <p>Can I Cancel A Booking Made?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus2"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus2" />
                </div>
              </div>
              <div className="faqContent" id="faqContent2">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(3)}>
              <div className="faqtitle">
                <p>What Are The Timings For The Mansi Service?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus3"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus3"/>
                </div>
              </div>
              <div className="faqContent" id="faqContent3">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(4)}>
              <div className="faqtitle">
                <p>Can I Hail A Mansi Cab On The Road?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus4"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus4" />
                </div>
              </div>
              <div className="faqContent" id="faqContent4">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(5)}>
              <div className="faqtitle">
                <p>What Are The Timings For The Mansi Services?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus5"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus5" />
                </div>
              </div>
              <div className="faqContent" id="faqContent5">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(6)}>
              <div className="faqtitle">
                <p>Can I Hail A Mansi Cab On The Road?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus6"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus6" />
                </div>
              </div>
              <div className="faqContent" id="faqContent6">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(7)}>
              <div className="faqtitle">
                <p>Can I Cancel A Booking Made?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus7"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus7" />
                </div>
              </div>
              <div className="faqContent" id="faqContent7">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>

            <div className="faqdata" onClick={()=>showBookdrop1(8)}>
              <div className="faqtitle">
                <p>Can I Cancel A Booking Made?</p>

                <div>
                  <AiOutlinePlus className="faqPlus" id="faqPlus8"/>
                  <AiOutlineMinus className="faqMinus" id="faqMinus8" />
                </div>
              </div>
              <div className="faqContent" id="faqContent8">
                <p>
                  You can book Meru cabs from our Meru App for current as well
                  as advance bookings up to 30 days. For current bookings, just
                  enter the drop location, select a cab and click on 'Book' for
                  confirming the ride. Once the booking is confirmed, the
                  reference number is displayed. Chauffeur details are then
                  accessed by tapping on "Track my cab" which appears at the
                  bottom of the screen.
                </p>
              </div>
            </div>
          </Container>
        }

        
      </div>
    </div>
  );
}

export default FAQ;
