import { Link } from 'react-router-dom';
import '../App.css'
import React from 'react';

const PageNotFound = () => {
  return (
    <div className="wrapper"> 
       <div className="page-content">
       <i class="fa-light fa-face-frown"></i>
        <h1>404</h1>
            <h2>Page not found</h2>
            <p>The page doesn´t exist, please go back to the home page to
                choose a new direction.
            </p>
            <Link to="/"><button className="btn btn-transparent">Home</button></Link>
       </div>
    </div>
  )
}

export default PageNotFound