import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MainOfferPage.css";

const offerCards = [
  {
    mainTitle: "One Way Trip",
    cardImg: "offer3img.jpg",
    cardTitle: "Introducing Double Guarantee on Outstation Cabs",
    cardText: "Get confirmed cab arrival else 2X money back!",
    offer: "Grab FLAT 10% OFF* on SBI Credit Cards",
    code: "MMTSBI",
  },
  
];

function MainOfferPage() {
  return (
    <div>
      <div className="topOfferSection">
        <Row className="offerrow1">
          <Col md={8} className="col1">
            <h1>Choose Best Offers for yourself</h1>
            <h1>And have A Great Tour</h1>
          </Col>
          <Col md={4} className="col2">
            <img src="offerstamp.png" alt="" />
          </Col>
        </Row>
      </div>

      <div className="bottomOfferSection">
        <h5>
          Make the most of our exciting offers and pocket big savings on your
          next journey.
        </h5>

        {offerCards.map((item, index) => {
            return(
          <div key={index} className="offercardSection">
            <h3>{item.mainTitle}</h3>

            <div className="offercards">
              <Row>
                <Col className="offercardcol1" md={6}>
                  <img className="offercardimg" src={item.cardImg} alt="" />
                  <p>T&C's Apply</p>
                </Col>

                <Col className="offercardcol2" md={6}>
                  <div className="offercardstop">
                    <div>
                      <h6>{item.cardTitle}</h6>
                    </div>
                  </div>

                  <div className="offercardsmiddle">
                    <div>
                      <p>{item.cardText}</p>
                      <h5>{item.offer}</h5>
                      <div className="offerCode">
                        <p>Use Code :</p>
                        <div>{item.code}</div>
                      </div>
                    </div>
                  </div>

                  <div className="offercardsbottom">
                    <div>
                      <button>Book Now</button>
                      <p>More</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}

export default MainOfferPage;
