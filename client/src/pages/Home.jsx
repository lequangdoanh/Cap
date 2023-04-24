import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import Helmet from "../components/Helmet/Helmet"
import {Container, Row, Col} from "reactstrap"
import '../styles/home.css'
import support from "../assets/images/support.png"
import Clock from '../components/UI/Clock'

import Services from "../service/Services"
import Support from '../support/Support'
import ProductsList from '../components/UI/ProductsList'
import Blog from './Blog'
import Eminities from '../components/UI/Eminities'

import img1 from '../assets/images/support1.jpg'
import img2 from '../assets/images/support2.jpg'
import img3 from '../assets/images/support3.jpg'

const Home = () => {

  const [masterProduct, setMasterProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);

  useEffect(() => {
    const filterdMasterProducts = products.filter(
      (item) => item.category === "Single Room"
      );
    const filterdBestSalesProducts = products.filter(
        (item) => item.category === "Double Room"
        );

      setMasterProduct(filterdMasterProducts);
      setBestSalesProduct(filterdBestSalesProducts);

  },[]);

  return <Helmet title={'Home'}>
    <section className="hero_section">
      <Container>
        {/* <Row>
          <Col lg='6' md='6'> */}
            <div className='hero_content'>
              <p className="hero_subtitle">
                Hotel Chain Management System 
              </p>
              <h2>ENJOY A LUXURY EXPERIENCE</h2>
              <p>Luxury Hotel & Best Resort</p>
              <div>
              <motion.button whileTap={{scale: 1.2}} className="buy_btn">
               <Link to='/room' > EXPLORER </Link> 
              </motion.button>
              </div>
            </div>
          {/* </Col>
        </Row> */}
      </Container>
    </section>
    <Services/> 

    <section className='support_info'>
      <h3>Welcome</h3>
      <h1 className='support_title'>Wonderful Hotel In The<br/>Heart Of Athens, Greece.</h1>
      <p>Hotel Tiffany is an oasis in the heart of the historic and business<br/>center of Athens. Here the Greek art of hospitality<br/>complements the legendary passion for service of the Spanish<br/>chain, creating a unique living experience. Located in the heart<br/>of Athens, only 200 m away from the central metro station.<br/>Enjoy a comfortable stay in our Luxury Room.</p>
      <Link to='/room' className='link-rooms'>View Our Services</Link>
          <Container className='support-img'>
              <Row>
                <Col lg='4' md='4' sm='4' >
                  <img className='content-img' src={img1} alt="" />
                </Col>
                <Col lg='4' md='4' sm='4'>
                  <img className='content-img' src={img2} alt="" />
                </Col>
                <Col lg='4' md='4' sm='4'>
                  <img className='content-img' src={img3} alt="" />
                </Col>
              </Row>
            {/* <Support/> */}
          </Container>
        </section>
       
        <section className='trending_product'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h3 className='back-title'>Luxury</h3>
                <h2 className='section_title'>Rooms</h2>
                <p>If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages that will cater for all.</p>
              </Col>
              <ProductsList data = {masterProduct}/>
            </Row>
          </Container>
        </section>

        <section className="timer_count">
          <Container>
            <Row>
            <Col lg="6" md="12" className='count_down-col'>
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-6 mb-3">SUPERIOR ROOM – TWO DOUBLE BEDS</h3>
              </div>
              <Clock/> 
              <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn' ><Link to="/room">Visit Store</Link></motion.button>
            </Col>
            {/* <Col lg="6" md="12" className="text-end counter_img">
               <img src={support} alt="" /> 
            </Col> */}
            </Row>
          </Container>
        </section>


        {/* <section className='best_sales'>
          <Container>
          <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title'>Best Sales</h2>
                <p>If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages that will cater for all.</p>
              </Col>
              <ProductsList data={bestSalesProduct}/>
            </Row>
          </Container>
        </section> */}

        <section className='blog_container' >
          <Blog/>
        </section> 

        <section className='eminities'>
        <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h3 className='back-title'>Services</h3>
                <h2 className='section_title'>Room Amenities</h2>
                <p>Hotel Tiffany offers a large number of Room amenities that will ease up your stay when you’re on your vacation.</p>
              </Col>
            </Row>
            <Eminities/>
          </Container>  
        </section>

  </Helmet>
}

export default Home
