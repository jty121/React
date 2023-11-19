import React from 'react';

const MeetusBox = ({image, title, description}) => {
  
  return (
    <div className="info-box">
        <img src={image} />
            <div className="style-h4">
                <h4>{title}</h4>
            </div>
        <p>{description}</p>
    </div>
  )
}

export default MeetusBox