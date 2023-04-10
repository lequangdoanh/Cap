import React from "react";

import { Container,Row,Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {AiFillStar} from 'react-icons/ai'

const ProductDetails = () => {

  const {id} = useParams()
  const product = products.find((item )=> item.id === id)


  return (
  <Helmet>
    <CommonSection/>

    <section className="pt-0">
      <Container>
        <Row>
          <Col lg='6'>
            {/* <img src={imgUrl} alt="" /> */}
          </Col>

          <Col lg='6'>
           <div className="product_details">
              <h2>{product}</h2>
              <div className="product_rating">
                <div>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                  <span><AiFillStar/></span>
                </div>

                <p>

                </p>
              </div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default ProductDetails
