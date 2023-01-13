import React from "react";
import { Container} from "react-bootstrap";
import "./Places.css";


function Places() {


  return (
    <>
    <h1 className="placesheading">Top Cities Where We Provide OutStation Cabs</h1>
    <Container fluid className="placesContainer">
      <Container className="palceshead">
        <div className="placeflex">
          <div className="place1">Cabs for Nashik :</div>

          <div className="placedata">
            <p>Nashik to Matehran &nbsp; | &nbsp; </p>
            <p>Nashik to Dhule &nbsp; | &nbsp; </p>
            <p>Nashik to Manmad &nbsp; | &nbsp; </p>
            <p>Nashik to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Nashik to Shirdi &nbsp; | &nbsp; </p>
            <p>Nashik to dubai &nbsp; | &nbsp; </p>
            <p>Nashik to dubai &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Pune :</div>

          <div className="placedata">
            <p>Pune to Matehran &nbsp; | &nbsp; </p>
            <p>Pune to Dhule &nbsp; | &nbsp; </p>
            <p>Pune to Manmad &nbsp; | &nbsp; </p>
            <p>Pune to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Pune to Shirdi &nbsp; | &nbsp; </p>
            <p>Pune to dubai &nbsp; | &nbsp; </p>
            <p>Pune to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Mumbai :</div>

          <div className="placedata">
            <p>Mumbai to Matehran &nbsp; | &nbsp; </p>
            <p>Mumbai to Dhule &nbsp; | &nbsp; </p>
            <p>Mumbai to Manmad &nbsp; | &nbsp; </p>
            <p>Mumbai to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Mumbai to Shirdi &nbsp; | &nbsp; </p>
            <p>Mumbai to dubai &nbsp; | &nbsp; </p>
            <p>Mumbai to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Nagpur :</div>

          <div className="placedata">
            <p>Nagpur to Matehran &nbsp; | &nbsp; </p>
            <p>Nagpur to Dhule &nbsp; | &nbsp; </p>
            <p>Nagpur to Manmad &nbsp; | &nbsp; </p>
            <p>Nagpur to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Nagpur to Shirdi &nbsp; | &nbsp; </p>
            <p>Nagpur to dubai &nbsp; | &nbsp; </p>
            <p>Nagpur to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
       

         {/* <Row className="placesRow">
          <Col md={3} className="mainPlace" onMouseLeave={()=>setShow1(false)}>
          <NavDropdown title="Cabs From Nashik" id="basic-nav-dropdown"
          show={show1}
          onMouseEnter={()=>setShow1(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow2(false)}>
          <NavDropdown title="Cabs From Mumbai" id="basic-nav-dropdown"
          show={show2}
          onMouseEnter={()=>setShow2(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow3(false)}>
          <NavDropdown title="Cabs From Pune" id="basic-nav-dropdown"
          show={show3}
          onMouseEnter={()=>setShow3(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow4(false)}>
          <NavDropdown title="Cabs From Nagpur" id="basic-nav-dropdown"
          show={show4}
          onMouseEnter={()=>setShow4(true)}
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow5(false)}>
          <NavDropdown title="Cabs From SambhajiNagar" id="basic-nav-dropdown"
          show={show5}
          onMouseEnter={()=>setShow5(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
        </Row>   */}
      </Container>
    </Container>
    </>
  );
}

export default Places;