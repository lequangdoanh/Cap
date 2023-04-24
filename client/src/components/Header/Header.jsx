import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
// import userIcon from '../../assets/images/user-icon.png'
import './header.css'

import {motion} from 'framer-motion'

import {SiDeepnote} from 'react-icons/si'
// import {BsChatHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa' 
import {TbGridDots} from 'react-icons/tb'


import { Container, Row } from 'reactstrap'

const nav_links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'room',
    display: 'Room'
  },
  {
    path: 'feature',
    display: 'Feature'
  },
  {
    path: 'blog',
    display: 'Blog'
  },
  {
    path: 'contact',
    display: 'Contact'
  },
]


const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(
        document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        headerRef.current.classList.add('sticky_header');
      }
      else{
        headerRef.current.classList.remove('sticky_header')
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener("scroll" , stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <SiDeepnote/>
            <div>
              <h1>
               <NavLink to="/home">Tiffany.</NavLink> 
                </h1>
            </div>
          </div>

          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              
              {
                nav_links.map((item, index) =>(
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' :''} >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav_icons">
            {/* <span className='fav_icon'>
              <BsChatHeart/>
              <span className='badge'>1</span>
            </span> */}
            <span className='cart_icon'>
              <AiOutlineShoppingCart/>
              <span className='badge'>1</span>
            </span>
            {/* <span>
              <motion.img whileTap={{ scale:1.2 }} src={userIcon} alt="" />
            </span> */}
            <span><NavLink to='/login'>Login</NavLink></span>
            <span><NavLink to='/signup'>Signup</NavLink></span>

            <div className='mobile_menu'>
              <span onClick={menuToggle}>
                <TbGridDots/>
              </span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </header>
};

export default Header

