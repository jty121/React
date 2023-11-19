import React from 'react';

const FeaturesBox = ({image, title, descpription}) => {
  
  return (
    <div className="box">
        <img src={image}/>
        <h4>{title}</h4>
        <p>{descpription}</p>
    </div>
  )
}

export default FeaturesBox