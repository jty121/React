import React from 'react'

const ServiceBox = ({ title, description, url }) => {
  return (
    <div className="active box">
                    <div className="style-h4">
                        <h4>{title}</h4>
                    </div>
                        <p>{description}</p>
                    <div className="arrow">   
                        <a href={url}><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
  )
}

export default ServiceBox