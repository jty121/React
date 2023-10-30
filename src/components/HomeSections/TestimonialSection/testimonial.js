import './testimonial.css'
import React from 'react'

import img_star from '../../../assets/images/Star.png'
import img_cassandra from '../../../assets/images/cassandra.png'
import img_amanda from '../../../assets/images/amanda.png'
import img_jack from '../../../assets/images/jack.png'

const testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="style-h2">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="reviews">
                <div className="box-content">
                    <img src={img_star} alt="review stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <div>
                            <img src={img_cassandra} alt="photo of review client Cassandra Warren" />
                        </div>
                        <div className="style-h4">
                            <h4>Cassandra Warren</h4>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="box-content">
                    <img src={img_star} alt="review stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <div>
                            <img src={img_amanda} alt="photo of review client Amanda Tulling" />
                        </div>
                        <div className="style-h4">
                            <h4>Amanda Tulling</h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="box-content">
                    <img src={img_star} alt="review stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client">
                        <div>
                            <img src={img_jack} alt="photo of review client Jack McDougglas" />
                        </div>
                        <div className="style-h4">
                            <h4>Jack McDogglas</h4>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <a className="btn btn-black">All Reviews <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default testimonial