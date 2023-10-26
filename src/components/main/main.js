import './main.css'
import React from 'react'
import LogotypeSection from './logotypesection/logotype'
import FeaturesSection from './featuresSection/features'
import AboutSection from './aboutsection/aboutcompany'
import ServiceSection from './servicesection/services'
import ChoooseUsSection from './chooseussection/chooseus'
import ProjectSection from './projectsection/project'
import MeetusSection from './meetussection/meetus'
import TestimonialSection from './testimonialsection/testimonial'
import ArticlesSection from './articlessection/articles'
import SignupSection from './signupsection/signup'


const main = () => {
  return (
    <main>
        <LogotypeSection />
        <FeaturesSection />
        <AboutSection />
        <ServiceSection />
        <ChoooseUsSection />
        <ProjectSection />
        <MeetusSection />
        <TestimonialSection />
        <ArticlesSection />
        <SignupSection />
    </main>
  )
}

export default main