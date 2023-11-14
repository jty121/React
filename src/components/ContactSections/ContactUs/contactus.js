import './contactus.css'
import React from 'react'


const contactus = () => {
  return (
    <section className="info-boxes">
            <div className="container">
                <div className="boxes">
                    <div className="box">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Visit us</h4>
                            <p>Sveavägen 31 <br/>
                                111 34 STOCKHOLM</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-circle-phone"></i>
                        <div>
                            <h4>Call us</h4>
                            <p>+46 (8) 121 470 50<br/>
                                +46 (8) 121 470 51</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-sharp fa-solid fa-circle-envelope"></i>
                        <div>
                            <h4>Email us</h4>
                            <p>info@crito.com<br/>
                                support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default contactus