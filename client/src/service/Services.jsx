import React ,{useEffect}from 'react'
import { NavLink } from 'react-router-dom'
import './services.css'

import sv4 from '../assets/images/sv4.jpg'
import sv5 from '../assets/images/sv5.jpg'
import sv3 from '../assets/images/sv3.jpg'

 import Aos from 'aos'
 import 'aos/dist/aos.css'
 import {motion} from 'framer-motion'

import {AiOutlineSwapRight} from 'react-icons/ai'

const Services = () => {

 useEffect(()=> {
 Aos.init({duration: 2000})
 },[])

  return (
    <div className="cards">
      <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
        <div className="singleCard mb-2">
          <div className="imgDiv">
          <motion.img whileTap={{ scale:1.2 }} src={sv4}/>
          </div>
          <h4 className="textDiv">
           <NavLink to='/room' >Our Room</NavLink> 
          </h4>
        </div>

        <div className="singleCard mb-2" >
          <div className="imgDiv">
          <motion.img whileTap={{ scale:1.2 }} src={sv5}/>
          </div>
          <h4 className="textDiv">
          <NavLink to='/room' >Restaurant</NavLink> 
          </h4>
        </div>

        <div className="singleCard mb-2">
          <div className="imgDiv">
          <motion.img whileTap={{ scale:1.2 }} src={sv3}/>
          </div>
          <h4 className="textDiv">
          <NavLink to='/room' >Spa & Massage</NavLink> 
          </h4>
        </div>
      </div>

      <div className="spanText flex">
      <NavLink to='/room' >Other <AiOutlineSwapRight className='icon'/></NavLink>
      </div>
    </div>
  )
}

export default Services