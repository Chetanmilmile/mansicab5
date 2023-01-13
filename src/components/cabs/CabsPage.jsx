import { Container, Row, Col,Dropdown,DropdownButton } from "react-bootstrap";
import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import hatchback from '../../Assets/hatchback.png'

import './CabsPage.css'
import ModifyCabs from "./ModifyCabs";

const Cabspage = () => {
  const [value, setvalue] = useState(0);
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);

  const handleShowType1 = () => {
    setvalue(1);
    setactive1(true);
    setactive2(false);
    setactive3(false);
  };
  const handleShowType2 = () => {
    setvalue(2);
    setactive2(true);
    setactive1(false);
    setactive3(false);
  };
  const handleShowType3 = () => {
    setvalue(3);
    setactive3(true);
    setactive1(false);
    setactive2(false);
  };

  return (
    <>
    <ModifyCabs />
    <Container htmlFor="pick" fluid className="cabspage-main">
      <h3 className="cabpagetitle">Cab Services in Nashik</h3>
      <div className="cabspage-2">
        <div className="cabspage-21">
          <label>Select Type</label>
        </div>
        <div
          className="cabspage-22"
          id="cabpageid1"
          onClick={handleShowType1}
          style={{
            boxShadow: active1
              ? "rgba(59, 20, 175, 0.8) 0px 2px 4px, rgba(59, 20, 175, 0.8) 0px 7px 13px -3px, rgba(59, 20, 175, 0.8) 0px -3px 0px inset"
              : "none",
          }}
        >
          <BsCircle
            onClick={handleShowType1}
            className="cabpage-radio"
            style={{
              border: active1 ? "4px solid #7142f8" : "none",
            }}
          />
          <img src={hatchback} alt="" />
          <p>HACHBACK</p>
        </div>
        <div
          className="cabspage-23"
          id="cabpageid2"
          onClick={handleShowType2}
          style={{
            boxShadow: active2
              ? "rgba(59, 20, 175, 0.8) 0px 2px 4px, rgba(59, 20, 175, 0.8) 0px 7px 13px -3px, rgba(59, 20, 175, 0.8) 0px -3px 0px inset"
              : "none",
          }}
        >
          <BsCircle
            onClick={handleShowType2}
            className="cabpage-radio"
            style={{
              border: active2 ? "4px solid #7142f8" : "none",
            }}
          />
          <img src="sedan.png" alt="" />
          <p>SEDAN</p>
        </div>
        <div
          className="cabspage-24"
          id="cabpageid3"
          onClick={handleShowType3}
          style={{
            boxShadow: active3
              ? "rgba(59, 20, 175, 0.8) 0px 2px 4px, rgba(59, 20, 175, 0.8) 0px 7px 13px -3px, rgba(59, 20, 175, 0.8) 0px -3px 0px inset"
              : "none",
          }}
        >
          <BsCircle
            onClick={handleShowType3}
            className="cabpage-radio"
            style={{
              border: active3 ? "4px solid #7142f8" : "none",
            }}
          />
          <img src="suv.png" alt="" />
          <p>SUV</p>
        </div>
      </div>

      {value == 1 && (
        <>
          <Row className="cabspage-1" id="cabpageShow-1">
            <Col md={4} className="cabspage-11">
              <Row className="cabspage-111">
                <h1>Cabs From Nashik</h1>
              </Row>
              <Row className="cabspage-112">
                <h3>Nashik To Shirdi Cabs</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-12">
              <Row className="cabspage-121">
                <h1>Included Kms & Extra Fare</h1>
              </Row>
              <Row className="cabspage-122">
                <h3>95Kms Included</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-13">
              <Row className="cabspage-131">
                <h1>Cabs Price</h1>
              </Row>
              <Row className="cabspage-132">
                <Col ms={7}>
                  <h3>
                    ₹1934<del>₹2245</del>
                  </h3>
                  <p>+₹58(other charges)</p>
                </Col>
                <Col className="cabspage-133" md={5}>
                  <button>VIEW CABS</button>
                </Col>
              </Row>
            </Col>
          </Row>

       
        </>
      )}

      {value == 2 && (
        <>
          <Row className="cabspage-1" id="cabpageShow-1">
            <Col md={4} className="cabspage-11">
              <Row className="cabspage-111">
                <h1>Cabs From Nashik</h1>
              </Row>
              <Row className="cabspage-112">
                <h3>mumbai To Shirdi Cabs</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-12">
              <Row className="cabspage-121">
                <h1>Included Kms & Extra Fare</h1>
              </Row>
              <Row className="cabspage-122">
                <h3>95Kms Included</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-13">
              <Row className="cabspage-131">
                <h1>Cabs Price</h1>
              </Row>
              <Row className="cabspage-132">
                <Col ms={7}>
                  <h3>
                    ₹1934<del>₹2245</del>
                  </h3>
                  <p>+₹58(other charges)</p>
                </Col>
                <Col className="cabspage-133" md={5}>
                  <button>VIEW CABS</button>
                </Col>
              </Row>
            </Col>
          </Row>

        </>
      )}

      {value == 3 && (
        <>
          <Row className="cabspage-1" id="cabpageShow-1">
            <Col md={4} className="cabspage-11">
              <Row className="cabspage-111">
                <h1>Cabs From Nashik</h1>
              </Row>
              <Row className="cabspage-112">
                <h3>sinnar To Shirdi Cabs</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-12">
              <Row className="cabspage-121">
                <h1>Included Kms & Extra Fare</h1>
              </Row>
              <Row className="cabspage-122">
                <h3>95Kms Included</h3>
                <p>95 kms | 2hr 9 mins (appx.)</p>
              </Row>
            </Col>

            <Col md={4} className="cabspage-13">
              <Row className="cabspage-131">
                <h1>Cabs Price</h1>
              </Row>
              <Row className="cabspage-132">
                <Col ms={7}>
                  <h3>
                    ₹1934<del>₹2245</del>
                  </h3>
                  <p>+₹58(other charges)</p>
                </Col>
                <Col className="cabspage-133" md={5}>
                  <button>VIEW CABS</button>
                </Col>
              </Row>
            </Col>
          </Row>

 
        </>
      )}

      <div className="cabpackage">
        <h1>Rental Cabs in Nashik</h1>
        <div className="carpakage0">
          <div md={3} className="carpakage01">
            <h5>Select Packages</h5>
            <p>Basic duration & kms</p>
          </div>
          <div className="carpakage021">
            <button className="carpakage022">1 hr 10 kms</button>
            <button className="carpakage022">2 hr 20 kms</button>
            <button className="carpakage022">3 hr 30 kms</button>
            <button className="carpakage022">4 hr 40 kms</button>
            <button className="carpakage022">5 hr 50 kms</button>
          </div>
          <div className="cabpagedropdown">
            <DropdownButton
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1">1 hr 10 kms</Dropdown.Item>
              <Dropdown.Item eventKey="2">2 hr 30 kms</Dropdown.Item>
              <Dropdown.Item eventKey="3">4 hr 40 kms</Dropdown.Item>
              <Dropdown.Item eventKey="3">5 hr 50 kms</Dropdown.Item>
              <Dropdown.Item eventKey="3">6 hr 60 kms</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="cabpackage10">
          <div className="cabpackage1">
            <h3>Cab Types</h3>
            <h3>Seat & Bags</h3>
            <h3>Price</h3>
          </div>
          <div className="cabpackage2">
            <div className="cabpackage2222">
              <img src="indica.png" alt="indica" />
              <h3>
                Indica,Swift
                <br />
                <span className="canpackagespan">HATCHBACK</span>
              </h3>
            </div>
            <div>
              <p>
                <span>
                  <FaSuitcase />
                </span>
                Bags
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                AC <br />
                <span>
                  <MdAirlineSeatReclineExtra />
                </span>
                Passangers 4
              </p>
            </div>
            <div>
              <h4> ₹250</h4>
              <h6>inc. of tolls and taxes</h6>
              <button>BOOK CABS</button>
            </div>
          </div>
          <div className="cabpackage2">
            <div className="cabpackage2222">
              <img src="Etios-removebg-preview.png" alt="indica" />
              <h3>
                Etios, Dzire <br />{" "}
                <span className="canpackagespan">SEDAN</span>
              </h3>
            </div>
            <div>
              <p>
                <span>
                  <FaSuitcase />
                </span>
                Bags
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                AC <br />
                <span>
                  <MdAirlineSeatReclineExtra />
                </span>
                Passangers 4
              </p>
            </div>
            <div>
              <h4> ₹312</h4>
              <h6>inc. of tolls and taxes</h6>
              <button>BOOK CABS</button>
            </div>
          </div>
          <div className="cabpackage2">
            <div className="cabpackage2222">
              <img src="innova2-removebg-preview.png" alt="indica" />
              <h3>
                Innova, Ertiga <br />{" "}
                <span className="canpackagespan">SUV</span>
              </h3>
            </div>
            <div>
              <p>
                <span>
                  <FaSuitcase />
                </span>
                Bags
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                AC <br />
                <span>
                  <MdAirlineSeatReclineExtra />
                </span>
                Passangers 4
              </p>
            </div>
            <div>
              <h4> ₹500</h4>
              <h6>inc. of tolls and taxes</h6>
              <button>BOOK CABS</button>
            </div>
          </div>
          <div className="cabpackage2">
            <div className="cabpackage2222">
              <img src="indica.png" alt="indica" />
              <h3>
                Indica,Swift <br />{" "}
                <span className="canpackagespan">Hatchback</span>
              </h3>
            </div>
            <div>
              <p>
                <span>
                  <FaSuitcase />
                </span>
                Bags
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>
                AC <br />
                <span>
                  <MdAirlineSeatReclineExtra />
                </span>
                Passangers 4
              </p>
            </div>
            <div>
              <h4> ₹250</h4>
              <h6>inc. of tolls and taxes</h6>
              <button>BOOK CABS</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Cabspage;