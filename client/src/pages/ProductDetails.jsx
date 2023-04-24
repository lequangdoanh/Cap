

import React, {useState} from 'react';

import {Container, Row, Col} from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product-details.css';
import { motion } from 'framer-motion';

import {MdStar} from 'react-icons/md'
import {MdStarHalf} from 'react-icons/md'
import {MdLibraryAdd} from 'react-icons/md'

const ProductDetails = () => {
  
  const [tab, setTab] = useState('desc')
  const {id} = useParams()
  const product = products.find(item =>item.id ===id )

  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product;
  return <Helmet title={productName}>
  <CommonSection title={productName}/>
  
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>
  
            <Col lg='6'>
              <div className="product_details">
                <h2>{productName}</h2>
                <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                  <span><MdStar/></span>
                  <span><MdStar/></span>
                  <span><MdStar/></span>
                  <span><MdStar/></span>
                  <span><MdStarHalf/></span>
                </div>
                <p>({<span>{avgRating}</span>}ratings)</p>
                </div>

                <span className='product_price'>${price}/Night</span>
                <p className='mt-3'>{shortDesc}</p>

                <motion.button whileTap={{scale: 1.2}} className='buy_btn'>Add Now <MdLibraryAdd/></motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==='desc' ? 'active_tab' : ""}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev' ? 'active_tab' : ""}`} onClick={() => setTab('rev')} >Reviews({reviews.length})</h6>
              </div>
              
              {
                tab==='desc' ? <div className='tab_content mt-5'>
                <p>{description}</p>
              </div> : (
              <div className="product_review mt-5">
                <div className="review_wrapper">
                  <ul>
                    {
                      reviews?.map((item,index) => (
                        <li kew={index} className="mb-4">
                          <h6>Quang Doanh</h6>
                          <span>{item.rating} ( rating)</span>
                        <p>{item.text}</p>
                        </li>
                      ))
                    }
                  </ul>

                  <div className="review_form">
                    <h4>Leave your experience</h4>
                      <form action="">
                        <div className="form_group">
                          <input type="text" placeholder='Enter name' />
                        </div>

                        <div className="form_group d-flex align-items-center gap-5">
                          <span>1<MdStar/></span>
                          <span>2<MdStar/></span>
                          <span>3<MdStar/></span>
                          <span>4<MdStar/></span>
                          <span>5<MdStar/></span>
                        </div>

                        <div className="form_group">
                          <textarea
                          rows={4}
                           type="text" 
                           placeholder="Reviews Message .." 
                           />
                        </div> 

                        <button className='buy_btn'>Submit</button>
                      </form>
                  </div>
                </div>
                </div>

              )}

              
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
}

export default ProductDetails















// import React from "react";

// import { Container,Row,Col } from "reactstrap";
// import { useParams } from "react-router-dom";
// import products from '../assets/data/products';
// import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection';
// import {AiFillStar} from 'react-icons/ai'

// const ProductDetails = () => {

//   const {id} = useParams()
//   const product = products.find((item )=> item.id === id)
//   const {imgUrl, productName, price, avgRating, review, shortDesc } = product

//   return (
//   <Helmet>
//     <CommonSection/>

//     <section className="pt-0">
//       <Container>
//         <Row>
//           <Col lg='6'>
//              <img src={imgUrl} alt="" /> 

//           </Col>

//           <Col lg='6'>
//            <div className="product_details">
//               <h2>{product}</h2>
//               <div className="product_rating">
//                 <div>
//                   <span><AiFillStar/></span>
//                   <span><AiFillStar/></span>
//                   <span><AiFillStar/></span>
//                   <span><AiFillStar/></span>
//                   <span><AiFillStar/></span>
//                 </div>

//                 <p>

//                 </p>
//               </div>
//            </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   </Helmet>
//   )
// }

// export default ProductDetails
