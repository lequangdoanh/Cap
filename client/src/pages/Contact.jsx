import React from 'react'
import '../styles/contact.css'

import Helmet from '../components/Helmet/Helmet'

import {BsFillHousesFill} from 'react-icons/bs'
import {BsFillPhoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return <Helmet title={' Contact'}>
  <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">About Us Page</h2>
                    </div>
                    <div class="col-lg-8">
                      <h3>Name: Dark &amp; Tiffany</h3>
                      <p>Address: DaNang, VietNam</p>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"></span>
                            <div class="media-body">
                                <h3><BsFillHousesFill/> DaNang, VietNam.</h3>
                                <p>Enclaro, 6107</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"></span>
                            <div class="media-body">
                                <h3><BsFillPhoneFill/> 0387.870.788 || 008-7000</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"></span>
                            <div class="media-body">
                                <h3><MdEmail/> support@tiffany.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Helmet>
}

export default Contact