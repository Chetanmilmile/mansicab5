import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './ContactUs.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'

function ContactUs() {
  return (
    <div className='contactusContainer'>
        <div className='contactusHeader'>
            <h1>CONTACT US</h1>
        </div>
        <div className='contactUsForm'>
            <Row>
                <Col md={6} className='contactUsFormLeft'>
                    <div className='contactUsMail'>
                        <div>
                            <h6><AiOutlineMail className='contactusmailicon'/>Send Email</h6>
                        </div>

                        <div className='contactUsMail2'>
                            <p>If You Are Facing Any Issue Or For Feedback</p>
                            <a href='mailto:Support@mansicabs.com'>Support@Mansicabs.com</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='mailto:help@mansicabs.com'>Help@Mansicabs.com</a>
                        </div>

                    </div>

                    <div className='contactUsPhone'>
                        <div>
                         <h6><FiPhoneCall className='contactuscallicon'/>Contact Us 24 x 7</h6>
                        </div>

                        <div className='contactUsPhone2'>
                            <p><a href='tel:+91 8484846395'>+91 8484846395</a> &nbsp;&nbsp; <a href='tel:+91 8585857798'>+91 8585857798</a></p>
                        </div>

                    </div>

                    <div className='contactUsAddress'>
                        <div>
                           <h6><HiOutlineLocationMarker className='contactuslocationicon'/>Send Mail To This Address</h6>
                        </div>

                        <div className='contactUsAddress2'>
                            <p>Amrutdham, Panchavati, Nashik, Maharashtra-422003</p>
                        </div>

                    </div>

                </Col>
                <Col md={6} className='contactUsFormRight'>
                    <div className='maincontactform'>
                        <div className='maincontactformHeader'>
                            <h4>Get in touch with us</h4>
                        </div>

                        <div className='maincontactformMiddle'>
                                <input type='text' placeholder='First name' />
                        </div>
                        <div className='maincontactformMiddle'>                          
                                <input type='text' placeholder='Last name' />
                        </div>

                        <div className='maincontactformMiddle'>
                                <input type='text' placeholder='Phone Number' />
                        </div>
                        <div className='maincontactformMiddle'>
                                <input type='text' placeholder='Email Address' />
                        </div>

                        <div className='contactustextarea'>
                            <textarea placeholder='Write Your Message here...' />
                        </div>

                        <div className='maincontactformbottom'>
                            <button>Submit</button>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>

        <div className='contactUsgmap'>
        <iframe style={{width: "100%", height: "60vh"}} src="https://maps.google.com/maps?width=1245&amp;height=400&amp;hl=en&amp;q=nashik&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='gmap'></iframe>
        </div>

    </div>
  )
}

export default ContactUs