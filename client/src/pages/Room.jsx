import React,{useState} from 'react';
import CommoSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import '../styles/room.css'

import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Room = () => {

    const [productsData, setProductData ] = useState(products)

    const handleFilter = e =>{
      const filterValue = e.target.value
      if(filterValue === 'Single Room'){
        const filteredProducts = products.filter(item => item.category==='Single Room');
        setProductData(filteredProducts);
      }

      if(filterValue === 'Double Room'){
        const filteredProducts = products.filter(item => item.category==='Double Room');
        setProductData(filteredProducts);
      }

      if(filterValue === 'Triple Room'){
        const filteredProducts = products.filter(item => item.category==='Triple Room');
        setProductData(filteredProducts);
      }

      if(filterValue === 'Twin Room'){
        const filteredProducts = products.filter(item => item.category==='Twin Room');
        setProductData(filteredProducts);
      }
      
    };

    const handleSearch = e =>{
      const searchTerm = e.target.value

      const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

      setProductData(searchedProducts)
    }

  return <Helmet title=' Room'>
    <CommoSection title='Products' />

    <section>
      <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter_widget">
              <select onChange={handleFilter} >
                <option>Filter By Category</option>
                <option value="Single Room">Single Room</option>
                <option value="Double Room">Double Room</option>
                <option value="Twin Room">Twin Room</option>
                <option value="Triple Room">Triple Room</option>
              </select>
            </div>
          </Col>

          <Col lg='3' md='6' className='text-end'>
          <div className="filter_widget">
              <select >
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>

          <Col lg='6' md='12'>
            <div className="search_box">
              <input type="text" placeholder='Search ....' onChange={handleSearch} />
              <span><AiOutlineSearch/></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No products are found! </h1> :<ProductsList data={productsData} />
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Room
