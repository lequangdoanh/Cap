import React from 'react'
import { Link } from 'react-router-dom'
import '../support/support.css'

import relax from '../assets/images/relax2.jpg'

const Support = () => {
  return (
    <div className='support container section'>
        <div className="sectionContainer">

            <div className="infoDiv grid">
                <div className="textDiv grid">

                <div className="titlesDiv">
                <small>Hotel Tiffany Review</small>
                <h2>Relax in our Resort</h2>
                <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis.!</p>
                <button className='btn'><Link to='/feature'>About Us</Link></button>
            </div>
                </div>

                <div className="imgDiv">
                    <img src={relax} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Support