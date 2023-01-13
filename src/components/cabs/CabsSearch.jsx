import React from "react";
import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra, MdLuggage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CabsSearch.css";
import ModifyCabs from "./ModifyCabs";
import {
  FcClearFilters,
} from "react-icons/fc";
import { FaGasPump } from "react-icons/fa";
import { TbGasStation, TbRoad } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

const searchCab = [
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova, XUV",
    passno: "7",
    disprice: "10000",
    save: "1500",
    price: "8500",
  },
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "6000",
    save: "1001",
    price: "4999",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
  {
    carType: "SUV",
    carImg: "innova.png",
    carName: "Ertiga, Innova",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
];

function CabsSearch() {

  return (
    <>
      <ModifyCabs />
      <Container fluid className="searchmain">
        <div className="searchfilter">
          <div className="searchfilter1">
            <h3>
              Filter <FcClearFilters />
            </h3>
            <p>Clear all</p>
          </div>
          <hr />
          <div className="searchfilter2">
            <h6>Car Model</h6>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="4p" />
              <label htmlFor="4p">Sedan</label>
            </div>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="7p" />
              <label htmlFor="7p">Hatchback</label>
            </div>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="7p" />
              <label htmlFor="7p">SUV</label>
            </div>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="7p" />
              <label htmlFor="7p">Traveller</label>
            </div>
          </div>
          <div className="searchfilter2">
            <h6>Passenger Capacity</h6>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="4p" />
              <label htmlFor="4p">4 Passenger seat</label>
            </div>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="7p" />
              <label htmlFor="7p">7 Passenger seat</label>
            </div>
            <div className="cabsearchfiltercheck">
              <input type="checkbox" name="7p" />
              <label htmlFor="7p">12 Passenger seat</label>
            </div>
          </div>
        </div>

        <div>
          <div className="filterDropdown">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Car Model"
                menuVariant="light"
              >
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="4p" />
                  <label htmlFor="4p">Sedan</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">Hatchback</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">SUV</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">Traveller</label>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Passenger"
                menuVariant="light"
              >
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">4 Seater</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">7 Seater</label>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          {searchCab.map((item, index) => (
            <div key={index} className="search1row">
              <div className="search1row1">
                <div className="search1ndcol">
                  <div>
                    <p>{item.carType}</p>
                    <h5>{item.carName}</h5>
                    <div className="ac">
                      <p>
                        <IoMdCheckmarkCircleOutline /> AC
                      </p>
                      <p>
                        <MdLuggage /> Luggage
                      </p>
                      <p>
                        <MdAirlineSeatReclineExtra /> Passenger {item.passno}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search2ndcol">
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                      <span>
                        <img src="exkm.jpeg" alt="" />
                      </span>
                      Extra Km fare
                    </p>
                    <p className="cabs-etios2-spec3">₹15.0/km after 167 kms</p>
                  </div>
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                    <span>
                        <img src="fueltype.jpeg" alt="" />
                        </span>
                        Fuel Type
                    </p>
                    <p className="cabs-etios2-spec3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CNG/Diesel</p>
                  </div>
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                    <span>
                        <img src="cancelimg.jpeg" alt="" />
                        </span>
                        Cancellation
                    </p>
                    <p className="cabs-etios2-spec3">&nbsp;&nbsp;Free within 30 mins</p>
                  </div>
                  <div className="cabSearchBox">
                      <h5>Double Guarantee Confirmed cab arrival or 2X refund</h5>
                  </div>
                  
                </div>
              </div>

              <div className="search4rtcol">
                <div>
                  <AiFillStar className="star5" />
                  <AiFillStar className="star5" />
                  <AiFillStar className="star5" />
                  <AiFillStar className="star5" />
                  <AiFillStar className="star6" />
                </div>
                <img src={item.carImg} alt="" />

                <div className="search4rtcolinner">
                  <h6>
                    ₹<del>{item.disprice}</del>
                    <p>10%Off</p>
                  </h6>

                  <h4>₹{item.price}</h4>
                </div>
                <Link to="/transfer-details">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default CabsSearch;