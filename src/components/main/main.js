import './main.css'
import React from 'react'
import LogotypeSection from './logotypesection/logotype'
import FeaturesSection from './featuresSection/features'
import AboutSection from './aboutsection/aboutcompany'



const main = () => {
  return (
    <main>
        <LogotypeSection />
        <FeaturesSection />
        <AboutSection />
        
    </main>
  )
}

export default main