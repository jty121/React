import './main.css'
import React from 'react'
import LogotypeSection from './logotypesection/logotype'
import FeaturesSection from './featuresSection/features'
import AboutSection from './aboutsection/aboutcompany'
import ServiceSection from './servicesection/services'


const main = () => {
  return (
    <main>
        <LogotypeSection />
        <FeaturesSection />
        <AboutSection />
        <ServiceSection />
    </main>
  )
}

export default main