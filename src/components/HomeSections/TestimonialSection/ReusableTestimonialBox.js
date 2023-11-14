import React from 'react'

const ReusableTestimonialBox = ({image, title, description}) => {
  return (
    <div className="client">
        <div>
            <img src={image}/>
        </div>
        <div className="style-h4">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ReusableTestimonialBox