import React from 'react';


const ReusableArticleBox = ({image, date, month, text, title, description}) => {

  return (
    <article>
        <div className="box-img">
            <img src={image}/>
            <div className="box-color">
                <span>{date}</span>
                <p>{month}</p>    
            </div>
        </div>
        <div className="box-info">
            <span>{text}</span>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </article>
  )
}

export default ReusableArticleBox