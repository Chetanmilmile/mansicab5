import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./Cars.css";
import {AiFillCheckCircle} from 'react-icons/ai'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {MdOutlineAirlineSeatReclineNormal} from 'react-icons/md'
import {GiSuitcase} from 'react-icons/gi'
import hatchback from '../../Assets/hatchback.png'

function Cars() {
  const [activehatch, setActivehatch] = useState(true)
  const [activeSedan, setActiveSedan] = useState(false)
  const [activesuv, setActivesuv] = useState(false)
  const [activeLocal, setActiveLocal] = useState(false)

  const makeactivehatch = () =>{
    setActivehatch(true)
    setActiveSedan(false)
    setActivesuv(false)
    setActiveLocal(false)
  }

  const makeactiveSedan = () =>{
    setActivehatch(false)
    setActiveSedan(true)
    setActivesuv(false)
    setActiveLocal(false)
  }

  const makeactivesuv = () =>{
    setActivehatch(false)
    setActiveSedan(false)
    setActivesuv(true)
    setActiveLocal(false)
  }

  const makeactiveLocal = () =>{
    setActivehatch(false)
    setActiveSedan(false)
    setActivesuv(false)
    setActiveLocal(true)
  }


  return (
    <div className="carsContainer">
      <Container className="carsrow1">

        <Col md={3} className="outercarDiv" onClick={makeactivehatch}>
          <div className={`carDiv${activehatch ? "Active" : "Inactive"}`}>
            <img src={hatchback} alt="" />
          </div>
          <p>HatchBack</p>
        </Col>

        <Col md={3} className="outercarDiv" onClick={makeactiveSedan}>
          <div className={`carDiv${activeSedan ? "Active" : "Inactive"}`}>
            <img src="sedan.png" alt="" />
          </div>
          <p>Sedan</p>
        </Col>

        <Col md={3} className="outercarDiv" onClick={makeactivesuv}>
          <div className={`carDiv${activesuv ? "Active" : "Inactive"}`}>
            <img src="suv.png" alt="" />
          </div>
          <p>SUV</p>
        </Col>

        <Col md={3} className="outercarDiv" onClick={makeactiveLocal}>
          <div className={`carDiv${activeLocal ? "Active" : "Inactive"}`}>
            <img src="taxi.png" alt="" />
          </div>
          <p>Local/Rental</p>
        </Col>
      </Container>

  { activehatch &&
      <div className="carsrow2">
        <div className='carimgcol'>
            <img className="maincarimg" src="hatchBackCar.png" alt=""/>
        </div>

        <div className='innerCar2'>
          <div className='leftCarData'>
            <h1>HatchBack</h1>
            <p> <AiFillCheckCircle /> Smooth and steady</p>
            <p> <AiFillCheckCircle /> Music system</p>
            <p> <AiFillCheckCircle /> Enhanced boot space</p>
            <p> <AiFillCheckCircle /> Safety Assured</p>

          </div>

          <div className='rightCarData'>
            <p> <MdOutlineAirlineSeatReclineNormal /> Passengers : 4</p>
            <p> <IoMdCheckmarkCircleOutline />Air Condition : Yes</p>
            <p> <GiSuitcase /> Luggage Carry :4</p>
          </div>
        </div>
      </div>
  }

  { activeSedan &&
      <div className="carsrow2">
        <div md={5} className='carimgcol'>
            <img className="maincarimg" src="indica.png" alt=""/>
        </div>

        <div md={7} className='innerCar2'>
          <div md={6} className='leftCarData'>
            <h1>SEDAN</h1>
            <p> <AiFillCheckCircle /> Smooth and steady</p>
            <p> <AiFillCheckCircle /> Music system</p>
            <p> <AiFillCheckCircle /> Enhanced boot space</p>
            <p> <AiFillCheckCircle /> Safety Assured</p>

          </div>

          <div md={6} className='rightCarData'>
            <p> <MdOutlineAirlineSeatReclineNormal /> Passengers : 4</p>
            <p> <IoMdCheckmarkCircleOutline />Air Condition : Yes</p>
            <p> <GiSuitcase /> Luggage Carry :4</p>
          </div>
        </div>
      </div>
  }

  { activesuv &&
      <div className="carsrow2">
        <div md={5} className='carimgcol'>
            <img className="maincarimg" src="hatchBackCar.png" alt=""/>
        </div>

        <div md={7} className='innerCar2'>
          <div md={6} className='leftCarData'>
            <h1>SUV</h1>
            <p> <AiFillCheckCircle /> Smooth and steady</p>
            <p> <AiFillCheckCircle /> Music system</p>
            <p> <AiFillCheckCircle /> Enhanced boot space</p>
            <p> <AiFillCheckCircle /> Safety Assured</p>

          </div>

          <div md={6} className='rightCarData'>
            <p> <MdOutlineAirlineSeatReclineNormal /> Passengers : 7</p>
            <p> <IoMdCheckmarkCircleOutline />Air Condition : Yes</p>
            <p> <GiSuitcase /> Luggage Carry :4</p>
          </div>
        </div>
      </div>
  }

  { activeLocal &&
      <div className="carsrow2">
        <div md={4} className='carimgcol'>
            <img className="maincarimg" src="indica.png" alt=""/>
        </div>

        <div md={8} className='innerCar2'>
          <div md={4} className='leftCarData'>
            <h1>RENTAL</h1>
            <p> <AiFillCheckCircle /> Smooth and steady</p>
            <p> <AiFillCheckCircle /> Music system</p>
            <p> <AiFillCheckCircle /> Enhanced boot space</p>
            <p> <AiFillCheckCircle /> Safety Assured</p>

          </div>

          <div md={4} className='rightCarData'>
            <p> <MdOutlineAirlineSeatReclineNormal /> Passengers : 7</p>
            <p> <IoMdCheckmarkCircleOutline />Air Condition : Yes</p>
            <p> <GiSuitcase /> Luggage Carry :4</p>
          </div>
        </div>
      </div>
  }
    </div>
  );
}

export default Cars;
