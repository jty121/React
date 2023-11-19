import React from 'react';
import { Link } from 'react-router-dom';


const ReusableProjectBox = ({image, title, url}) => {
  
  return (
    <article>
        <img src={image}/>
            <div className="style-h4">
                <h4>{title}</h4>
            </div>
            <div className="button-read">
                <Link to={url}>Read More <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
    </article>
  )
}

export default ReusableProjectBox