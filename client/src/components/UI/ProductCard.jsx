
import React from 'react'
import { motion } from 'framer-motion'

import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {MdLibraryAdd} from 'react-icons/md'

const ProductCard = ({item}) => {
    return(
    <Col lg='4' md='4' className='mb-3'> 
        <div className="product_item" >
        <div className="product_img">
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product_info'>
        <span>{item.category}</span>
        <h3 className="product_name">
            <Link to={`/room/${item.id}`}>{item.productName}</Link>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis viverra diam ac ornare. Donec rhoncus nisi in felis congue, at pulvinar.</p>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}/Night</span>
            <motion.span className='add-now' whileTap={{scale : 1.5}}>Add Now <MdLibraryAdd/></motion.span>
        </div>
    </div>
    </Col>
    )
}

export default ProductCard
