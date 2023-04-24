import React from 'react'
import '../styles/blog.css'
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'

import {BsArrowRightShort} from 'react-icons/bs'

import blog from '../assets/images/blog.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'

const Posts = [
  {
    id:1,
    postImage: blog,
    title: 'Host a Family Party',
    desc: 'When you host a party or family reunion, the special celebrations let you strengthen bonds with those you hold...'
  },
  {
    id:4,
    postImage: blog4,
    title: 'Easy sparkling sangria',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!'
  },
  {
    id:3,
    postImage: blog3,
    title: 'Beautiful appointed suites',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!'
  },
  {
    id:4,
    postImage: blog4,
    title: 'Easy sparkling sangria',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!'
  }
]

const Blog = () => {
  return <Helmet title={' Blog'}>
  <section className='blog container section'>
      <div className="secContainer">
        
        <div className="secIntro">
          <h2 className='secTitle'>
            Our Best Blog?
          </h2>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage, title, desc })=>{
              return(
                <div className="singlePost flex">
              <div className="imgDiv">
                <img src={postImage} alt={title} />
              </div>

              <div className="postDetails">
                <h3>{title}</h3>
                <p>{desc}</p>
                {/* <a href="#">Read More</a> */}
                <Link to=''>Read More <BsArrowRightShort className='icon'/> </Link> 
              </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
    </Helmet>
}

export default Blog
