import './contactmap.css'
import React from 'react'

import img_contactmap from '../../../assets/images/map.svg'

const contactmap = () => {
  return (
    
    <section className="map">
        <img className="img" src={img_contactmap} alt="location spot on map" />    
    </section>
  )
}

export default contactmap