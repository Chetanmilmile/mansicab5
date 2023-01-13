import React, { useState } from "react";
import { Button} from "react-bootstrap";
// import { BiUser } from "react-icons/bi";
import "./Navbars.css";
import Modal from "react-bootstrap/Modal";
import { ImFacebook } from "react-icons/im";
import { BsCardChecklist, BsCart3, BsChevronDown, BsTwitter } from "react-icons/bs";
import { BiTrip} from "react-icons/bi";
import { MdOutlineCreditCard, MdOutlineCreditCardOff} from "react-icons/md";
import { GiCommercialAirplane, GiRoad} from "react-icons/gi";
import { HiOutlineBuildingOffice2} from "react-icons/hi2";
import { FcApproval, FcAutomotive, FcHome, FcInTransit, FcOnlineSupport, FcPortraitMode, FcReadingEbook} from "react-icons/fc";
import { AiFillHome, AiOutlineCar, AiOutlineGooglePlus } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import { FiMenu } from "react-icons/fi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import validator from 'validator'
import playstore from '../../Assets/playstore.jpg'


function Navbars() {
  const [showDrop1, setShowDrop1] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const [showotp, setShowotp] = useState(false);
  const [showres, setShowres] = useState(false);
  const [shownew, setShownew] = useState(false);
  const [shownewotp, setShownewotp] = useState(false);
  const [mobactive, setmobactive] = useState(true);
  const [emailactive, setemailactive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseotp = () => setShowotp(false);
  const handleShowotp = () => {
    setShowotp(true);
    setShow(false);
  };
  const handleCloseres = () => setShowres(false);
  const handleShowres = () => {
    setShowres(true);
    setShow(false);
  };
  const handleClosenew = () => setShownew(false);
  const handleShownew = () => {
    setShownew(true);
    setShow(false);
  };
  const handleClosenewotp = () => {
    setShownewotp(false);
  };
  const handleShownewotp = () => {
    setShownewotp(true);
  };

  const [value, setValue] = useState(1);

  const mobilelogin = () => {
    setValue(1);
    setemailactive(false);
    setmobactive(true);
  };
  const emaillogin = () => {
    setValue(2);
    setemailactive(true);
    setmobactive(false);
  };

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  

  const showdrop1 = () => {
    setShowDrop1(!showDrop1);

  };
  const showdrop2 = () => {
    setShowDrop2(!showDrop2);

  };


  const [emailError, setEmailError] = useState('')
  const [mobileError, setMobileError] = useState('')
  const [passError, setPassError] = useState('')

  const validateEmail=(e)=>{
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError("")
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  let regex = new RegExp(/(0|91)?[6-9][0-9]{9}$/);
  const validateMobile=(e)=>{
    var mobile = e.target.value
    if (regex.test(mobile) === true) {
      setMobileError("")
    } else {
      setMobileError('Enter valid Mobile!')
    }
  }
  let pass = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
  const validatePassword=(e)=>{
    var password = e.target.value
    if (pass.test(password) === true) {
      setPassError("")
    } else {
      setPassError('uppercase,lowercase,symbol,number required')
    }
  }
  return (
    <>
      <div className="navbars">
        <div>
          <FiMenu className="sidebarIcon" onClick={handleSidebarShow} />
        </div>

        <div className="mainNavbar">

          <div>
            <Link to="">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>

          <div className="navbarIcons">
            <div className="playstore">
              <div className="innerplaystore">
                <img className="playstoreimg" src={playstore} alt="" />
              </div>
              <p>Download App</p>
            </div>
            <Button className="login-btn" onClick={handleShow}>
            Login
            </Button>
          </div>
        </div>


      </div>

      <Offcanvas show={showSidebar} onHide={handleSidebarClose}>
        <div className="sidebar">
          <div className="sidebarTitle">
            <FcHome className="sidebarhomeicon" />
            <Link to="/myprofile" target='_blank'> <h3>Guest</h3></Link>
          </div>

          <div className="sidebarContent">
            <div className="sidebarDropbox" onClick={showdrop1}>
              
              <h5><FcPortraitMode style={{fontSize:"20px", marginRight:"5px"}} />Services</h5>
                <BsChevronDown />
            </div>
          { showDrop1 === true &&
            <div className="sidebardrop1">
              <div><GiRoad /><a href="/oneway">One Way</a></div>
              <div><BiTrip /><a href="/roundtrip">Round Trip</a></div>
              <div><HiOutlineBuildingOffice2 /><a href="/rental">Local/Rental</a></div>
              <div><GiCommercialAirplane /><a href="/airport">Airport Transfer</a></div>
              
              
            </div>
          }
          
            <div className="sidebarDropbox" onClick={showdrop2}>
              
              <h5><FcReadingEbook style={{fontSize:"20px", marginRight:"5px"}} />My Activity</h5>
              <BsChevronDown />
            </div>
          {showDrop2 &&
            <div className="sidebardrop2" id="sidebardrop2">
              <div><BsCardChecklist /><Link to="/mybooking">My Bookings</Link></div>
              <div><MdOutlineCreditCardOff /><Link to="/cancelbooking">Cancel Booking</Link></div>
              
            </div>
          }
            <div>
              <FcApproval style={{fontSize:"20px", marginRight:"5px"}} />
              <Link to="/offers">Offer</Link>
            </div>

            <div>
              <FcOnlineSupport style={{fontSize:"20px", marginRight:"5px"}} />
              <Link to="/contactus">Contact Us</Link>
            </div>
          </div>
        </div>
      </Offcanvas>

      {/* -----------------------------------------------------------------modal------------------------------------------------------------------------- */}

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton className="text-center modal-header border-0">
          <Modal.Title className="d-inline-block">
            <img className="login-logo" src="psd cab logo.png" alt="" />
          </Modal.Title>
        </Modal.Header>
        <div className="login-btns-mobile">
          <div
            onClick={mobilelogin}
            style={{
              backgroundColor: mobactive ? "black" : "white",
              color: mobactive ? "white" : "black",
              textAlign: "center",
            }}
            className="login-mobile-2"
          >
            Login With Mobile
          </div>
          <div
            onClick={emaillogin}
            style={{
              backgroundColor: emailactive ? "black" : "white",
              color: emailactive ? "white" : "black",
              textAlign: "center",
            }}
            className="login-email-2"
          >
            Login With Email
          </div>
        </div>
        <Modal.Body>
          <div>
            {value === 1 && (
              <div>
                <div className="login-body">
                  <label>
                    Enter Your <br /> Registered Mobile Number
                  </label>
                  <input type="tel" placeholder="Enter your number"/>
                  <br />
                  <Button
                    className="login-body-btn-mobile"
                    onClick={handleShowotp}
                  >
                    Send OTP
                  </Button>
                  <br />
                  <p className="create-new-account" onClick={handleShownew}>
                    Sign in/ Create new account
                  </p>
                </div>
              </div>
            )}

            {value === 2 && (
              <div>
                <div className="login-body">
                  <label htmlFor="email">Enter your Email ID</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    
                  />
{/* 
                  <br /> */}
                  <label htmlFor="password">Enter your Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    
                  />
                  
                  <p className="mail-passforgot" onClick={handleShowres}>
                    Forgot password?
                  </p>
                  <br />

                  <Button className="login-body-btn-email">Login</Button>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer border-0 text-center d-inline-block">
          <div className="modal-foot">
            <div></div>
            <ImFacebook className="modal-facebook" />
            <BsTwitter className="modal-twitter" />
            <AiOutlineGooglePlus className="modal-google" />
            <div></div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={showres} onHide={handleCloseres} size="md">
        <Modal.Header closeButton className="text-center modal-header border-0">
          <Modal.Title className="d-inline-block">
            <img className="login-logo" src="psd cab logo.png" alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="reset-body">
            <h3>Forgot Password</h3>
            <div className="reset-mail">
              <label>Enter Email</label>
              <input type="email" placeholder="Enter your email"/>
            </div>
            <h5>OR</h5>
            <div className="reset-no">
              <label>Mobile No.</label>
              <input type="number" placeholder="Enter your number" />
              
            </div>
            <div className="reset-otp">
              <label>Enter OTP</label>
              <input type="number" placeholder="Enter OTP" />
            </div>

            <Button className="login-body-btn-mobile">Verify</Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer border-0 text-center d-inline-block">
          <div className="modal-foot">
            <div></div>
            <ImFacebook className="modal-facebook" />
            <BsTwitter className="modal-twitter" />
            <AiOutlineGooglePlus className="modal-google" />
            <div></div>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={showotp} onHide={handleCloseotp} size="md">
        <Modal.Header closeButton className="text-center modal-header border-0">
          <Modal.Title className="d-inline-block">
            <img className="login-logo" src="psd cab logo.png" alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="otp-body">
            <label className style={{ fontSize: "1rem" }}>
              Verify OTP
            </label>
            <input type="number" placeholder="Enter OTP" />
            <h6>Change Number</h6>
            <h4>Resend OTP ?</h4>
            <Button className="login-body-btn-mobile" onClick={handleCloseotp}>
              Verify
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={shownew} onHide={handleClosenew} size="md">
        <Modal.Header closeButton className="text-center modal-header border-0">
          <Modal.Title className="d-inline-block">
            <img className="login-logo" src="psd cab logo.png" alt="" />
          </Modal.Title>
        </Modal.Header>
        <div className="reg-title">
          <h3>Registration</h3>
        </div>
        <Modal.Body>
          <div className="reg-body">
            <div className="reg-name">
              <label>First Name :</label>
              <br />
              <input type="text" placeholder="Enter your name.." />
            </div>
            <div className="reg-mob">
              <label>Mobile No. :</label>
              <br />
              <input type="tel" placeholder="Enter your number"  onChange={(e) => validateMobile(e)}/>
              <div style={{color: 'red', fontSize:'12px'}}>{mobileError}</div>
            </div>
            <div className="reg-otp">
              <p onClick={handleShownewotp}>Get OTP</p>
            </div>
            <div className="reg-mail">
              <label>Email ID</label>
              <br />

              <input type="email" placeholder="Enter your mail "  onChange={(e) => validateEmail(e)}/>
              
              <div style={{color: 'red', fontSize:'12px'}}>{emailError}</div>

            </div>
            <div className="reg-pass">
              <label>Password</label>
              <br/>
              <input type="password" placeholder="****" onChange={(e) => validatePassword(e)} />
              <div style={{color: 'red', fontSize:'12px'}}>{passError}</div>
            </div>
            <div className="reg-cpass">
              <label>Confirm Password</label>
              <br />
              <input type="password" placeholder="****" />
            </div>

            <button className="login-body-btn-mobile">Sign up</button>
          </div>
        </Modal.Body>
        <div className="reg-foot">
          <div></div>
          <ImFacebook className="modal-facebook" />
          <BsTwitter className="modal-twitter" />
          <AiOutlineGooglePlus className="modal-google" />
          <div></div>
        </div>
      </Modal>

      <Modal
        show={shownewotp}
        onHide={handleClosenewotp}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <div className="get-otp">
            <label >
              Verify OTP
            </label>
            <input type="number" placeholder="Enter OTP" />
            <p>Resend OTP ?</p>
            <Button
              className="getOtpBtn"
              onClick={handleClosenewotp}
            >
              Verify
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbars;
