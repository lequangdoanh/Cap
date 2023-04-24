import React from 'react'
import {AiOutlineWifi} from 'react-icons/ai'
import {FaCocktail} from 'react-icons/fa'
import {GiWineGlass} from 'react-icons/gi'
import {FaBath} from 'react-icons/fa'
import {GiCoffeeCup} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdOutlineLocalLaundryService} from 'react-icons/md'
import '../../styles/eminities.css'

import video1 from '../../video/video2.mp4'

const Eminities = () => {
  return (
    <section className='eminities section'>
        <div className="secContainer">

            <div className="mainContent container grid">
                <div className="singleItem">
                    <AiOutlineWifi className='icon'/>
                        <h3>Free Wifi</h3>
                        <p>Rest and do some work if you need to, high speed wi-fi internet is free all around the hotel premises.</p>
                </div>

                <div className="singleItem">
                    <FaCocktail className='icon'/>
                        <h3>Cocktails?</h3>
                        <p>If you’re a fan of cocktails – our bartenders will make it for you. Just visit the lobby or pool bar.</p>
                </div>

                <div className="singleItem">
                    <GiWineGlass className='icon'/>
                        <h3>Wine bottle</h3>
                        <p>Have a complementary bottle of wine free, when you stay for more than 5 nights at California.</p>
                </div>

                <div className="singleItem">
                    <FaBath className='icon'/>
                        <h3>Premium bathtubs</h3>
                        <p>Jacuzzi or a regular bath tub? It’s your choice, so whichever you prefer, let us know when booking.</p>
                </div>

                <div className="singleItem">
                    <GiCoffeeCup className='icon'/>
                        <h3>Coffeemaker</h3>
                        <p>Start your morning with the highest quality coffee made in-room with Lavazza coffeemaker.</p>
                </div>

                <div className="singleItem">
                    <AiOutlineFundProjectionScreen className='icon'/>
                        <h3>Widescreen LCD TV</h3>
                        <p>Enjoy your favourite TV shows or sports when you’re at your room resting on a 40“ TV screen.</p>
                </div>

                <div className="singleItem">
                    <GiWineGlass className='icon'/>
                        <h3>Wine bottle</h3>
                        <p>Have a complementary bottle of wine free, when you stay for more than 5 nights at California.</p>
                </div>

                <div className="singleItem">
                    <MdOutlineLocalLaundryService className='icon'/>
                        <h3>Loundry</h3>
                        <p>Or room staff will change the towels everyday if you prefer to. Just leave them in the bath.</p>
                </div>

                
            </div>

             <div className="videoCard container">
                <div className="cardContent grid">

                    <div className="cardText">
                        <h3>Services</h3>
                        <h2> Room amenities </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque corrupti odit obcaecati iste sequi ipsum quas sit tenetur vitae?</p>
                    </div>

                    <div className="cardVideo">
                        <video src={video1} autoPlay loop muted type='video/mp4'></video>
                    </div>
                </div>
            </div> 

        </div>
    </section>
  )
}

export default Eminities
