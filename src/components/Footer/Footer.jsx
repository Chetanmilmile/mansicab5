import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from '../../Assets/logo.png'
import gplay from '../../Assets/googlePlay.png'

function Footer() {
  return (
  <>
    <Container fluid className="footerContainer">
      <Row className="footerRow">
        <Col md={5} className='footerrow1col1'>
          <img className='footerLogo' src={logo}  alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
          <div className="footerouterplaystore">
          <img className="footer1img" src="last.png" alt="" />
          <div className="footerinnerplaystore">
            <img className="footerplaystoreimg" src={gplay} alt="" />
            <div>
              <p>Get it on</p>
              <h6>Google Play</h6>
            </div>
          </div>
          </div>
        </Col>

        <Col md={2} className="main-page">
          <h4>Main Pages</h4>
          <div>
            <Link to="">Home</Link>
            <Link to="/cabssearch">Cabs</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </Col>

        <Col md={2} className="useful-links">
          <h4>Useful Links</h4>
          <div>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </Col>

        <Col md={3} className='footerCol3'>
          <div>
            <h4>Address</h4>
            <p>Amrutdham, Panchavati, Nashik, Maharashtra-422003</p>
          </div>
          <div>
            <img className="footer2img" src="footer2.png" alt="" />
          </div>
        </Col>
      </Row>
      
    </Container>
    <div className="footerBottom">
        <Col md={6} className="footerrow2col1">
          <div>
            <Link to="/tnc">Terms & Condition</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cancelation-policy">Cancellation Policy</Link>
            <Link to="/return-refund">Refund policy</Link>
          </div>
        </Col>

        <Col md={6} className="footerrow2col2">
          <div>
            <FaFacebookF className="footerfb" />
          </div>
          <div>
            <FaInstagram className="footerinsta" />
          </div>
          <div>
            <FaYoutube className="footeryt" />
          </div>
        </Col>
    </div>
    </>
  );
}

export default Footer;

{
  /* <Row className="footerSocialIcons">

<Col>
  <div className="footerinnerplaystore">
    <img className="footerplaystoreimg" src="playstore.jpg" alt="" />
  </div>
</Col>
  <Col>
  <FaFacebookF className='footerfb'/>
  </Col>
  <Col>
  <FaTwitter className='footertwitter'/>
  </Col>
  <Col>
  <FaInstagram className='footerinsta'/>
  </Col>
  <Col>
  <TiSocialLinkedin className='footerlinked'/>
  </Col>
</Row> */
}
