import React from 'react';
import './footer.css';
import { motion } from 'framer-motion';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SiDeepnote } from 'react-icons/si';

import {FaLocationArrow} from 'react-icons/fa'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import footer from '../../assets/images/cap-footer.JPG'

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    
    {/* <img src={footer} alt="" /> */}
    <Container>
    <hr/>
      <Row>
        <Col lg='3' className='mb-4' md='3'>
            <div className="footer_quick_links">
            <h1 className="quick_links_title">
            <SiDeepnote className='icon-brand'/> Tiffany.
            </h1>
            <ListGroup className='footer_contact'> 
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                <span><FaLocationArrow className='icon'/></span>
                <p>DaNang,VietNam</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><BsFillTelephoneInboundFill className='icon'/></span>
                <p>+0387.870.788</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
               <span><MdEmail className='icon'/></span>
               <p>support@tiffany.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className="footer_quick_links">
            <h4 className="quick_links_title">
              ABOUT US
            </h4>
            <ListGroup className='mb-3'> 
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#" >Services</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#" >Rooms</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#" >Our Location</Link>
              </ListGroupItem>
              
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
        <div className="footer_quick_links">
            <h4 className="quick_links_title">
            QUICK LINKS
            </h4>
            <ListGroup className='mb-3'> 
              <ListGroupItem className='ps-0 border-0' >
                <Link to="#" ><BsFacebook className='icon'/> Facebook</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#" ><BsYoutube className='icon'/> YouTube</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#" ><BsTwitter className='icon'/> Pinterest</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='3'>
        <div className="footer_quick_links">
            <h4 className="quick_links_title ">
            NEWSLETTER
            </h4>
            
            <div className='form-contact'>
              <p>Sign up for special offers</p>
                <input type="text" placeholder='Enter Your Email ...'/>
                <motion.button whileTap={{scale:1.2}} className='btn-contact flex' type='submit'>
                Subcribe <FaLocationArrow className='icon-contact'/>
                  </motion.button>
            </div>
          </div>
        </Col>
        <Col lg='12'>
          <div className='footer_copyright'>
          <p>
            Copyright {year} All rights reserved | Hotel Chain Management System
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
