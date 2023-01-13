import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import "./BlogCity.css";
import ajanta from '../../../Assets/ajanta.jpg'
import grish from '../../../Assets/grish.jpg'
import daulatabad from '../../../Assets/daulatabad.jpg'

const placeoptions = [
  { value: "mumbai", label: "Mumbai" },
  { value: "nashik", label: "Nashik" },
  { value: "pune", label: "Pune" },
];

function Aurangabad() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="cityblogContainer">
      {/* <Container fluid className="blogSearch">
        <div>
          <Select
            className="placeserchbar"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={placeoptions}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            placeholder={<BiSearch />}
          />
        </div>

        <div>
          <h5>Popular Search</h5>
        </div>

        <div>
          <Row>
            <Col md={4} className="blogserchimg">
              <img src="Nashik 1.png" alt="" />
              <p>Best Places to visit in Nashik</p>
            </Col>

            <Col md={4} className="blogserchimg">
              <img src="Nashik 3.png" alt="" />
              <p>Best Places to visit in Pune</p>
            </Col>

            <Col md={4} className="blogserchimg">
              <img src="Nashik 2.png" alt="" />
              <p>Best Places to visit in Aurangabad</p>
            </Col>
          </Row>
        </div>
      </Container> */}

      <Container className="blogcitydata">
        <div className="blogcitydata1">
          <h3>Best Places to Visit in Aurangabad</h3>
          <img src="blog image2.jpeg" alt="" />
        </div>

        <div className="blogcitydata2">
          <div>
            <h5>1) Ajanta Caves</h5>
            <Row className="cityblogrow">
              <Col md={3}>
                <img src={ajanta} alt="" />
              </Col>
              <Col md={9}>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  The caves at Ajanta are excavated out of a vertical cliff
                  above the left bank of the river Waghora in the hills of
                  Ajanta. They are thirty in number, including the unfinished
                  ones, of which five (caves 9, 10, 19, 26 and 29) are
                  chaityagrihas (sanctuary) and the rest, sangharamas or viharas
                  (monastery). The caves are connected with the river by
                  rock-cut staircases.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <h5>2) Grishneshwar Temples</h5>
            <Row className="cityblogrow">
              <Col md={3}>
                <img src={grish} alt="" />
              </Col>
              <Col md={9}>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  The Grishneswar temple is an illustration of maratha temple
                  architectural style and structure. The temple, built of red
                  rocks, is composed of a five-tier shikara. The temple was
                  re-constructed by Maloji Bhosale of Verul, (grandfather of
                  Chhatrapati Shivaji Maharaj) in the 16th century and later
                  again by queen Ahilyabai Holkar in the 18th century.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <h5>3) Bibi ka Maqbara</h5>
            <Row className="cityblogrow">
              <Col md={3}>
                <img src={daulatabad} alt="" />
              </Col>
              <Col md={9}>
                <h6>
                  Enjoy The 99-Kilometer Ride From The City Center With MANSI
                  Cabs.
                </h6>
                <p>
                  Bibi Ka Maqbara is believed to have been built between 1668
                  and 1669 C.E. According to the "Tarikh Namah" of Ghulam
                  Mustafa, the cost of construction of the mausoleum was Rs.
                  668,203-7 (rupees six lakh, sixty-eight thousand, two hundred
                  three and seven annas) Aurangzeb allocated only Rs. 700,000
                  for its construction. 
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Aurangabad;
