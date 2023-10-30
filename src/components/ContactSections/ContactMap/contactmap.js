import './contactmap.css'
import React from 'react'

import img_contactmap from '../../../assets/images/map.svg'

const contactmap = () => {
  return (
    
    <section class="map">
        <img class="img" src={img_contactmap} alt="location spot on map" />    
    </section>
  )
}

export default contactmap