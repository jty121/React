import './testimonial.css';
import ReusableTestimonialBox from './ReusableTestimonialBox';
import React from 'react';
import { Link } from 'react-router-dom';



import img_star from '../../../assets/images/Star.png';
import img_cassandra from '../../../assets/images/cassandra.png';
import img_amanda from '../../../assets/images/amanda.png';
import img_jack from '../../../assets/images/jack.png';


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
                    <img src={img_star} alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <ReusableTestimonialBox 
                        image={img_cassandra} alt="review client Cassandra Warren"
                        title="Cassandra Warren"
                        description="Business Manager, Dorfus"
                    />
                </div>
                <div className="box-content">
                    <img src={img_star} alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <ReusableTestimonialBox 
                        image={img_amanda} alt="review client Amanda Tulling"
                        title="Amanda Tulling"
                        description="Senior Developer, Square"
                    />
                </div>
                <div className="box-content">
                    <img src={img_star} alt="" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <ReusableTestimonialBox 
                        image={img_jack} alt="review client Jack McDougglas"
                        title="Jack McDogglas"
                        description="Key Account Manager, Gobona"
                    />
                </div>
            </div>
            <div className="btn">
                <Link to="/All reviews" className="btn btn-black">All Reviews <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default testimonial