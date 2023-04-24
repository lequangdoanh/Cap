import React from 'react'
import '../styles/feature.css'

import relax from '../assets/images/relax.jpg'
import Helmet from '../components/Helmet/Helmet'

const Feature = () => {
  return <Helmet title={'Feature'}>
    <div className='lounge container section'>
        <div className="sectionContainer grid">

            <div className="imgDiv">
                <img src={relax} alt="" />
            </div>

            <div className="textDiv">
                <h2>Relax in our Resort</h2>
                <div className='grids grid'>
                
                <div className="singleGrid">
                    <span className='gridTitle'>
                        Help through the Hotel
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque repudiandae delectus quas corrupti quaerat.
                    </p>
                </div>

                <div className="singleGrid">
                    <span className='gridTitle'>
                        Help through the Hotel
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque repudiandae delectus quas corrupti quaerat.
                    </p>
                </div>

                <div className="singleGrid">
                    <span className='gridTitle'>
                        Help through the Hotel
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque repudiandae delectus quas corrupti quaerat.
                    </p>
                </div>

                <div className="singleGrid">
                    <span className='gridTitle'>
                        Help through the Hotel
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque repudiandae delectus quas corrupti quaerat.
                    </p>
                </div>

            </div>
            </div>

            


        </div>
    </div>
    </Helmet>
}

export default Feature