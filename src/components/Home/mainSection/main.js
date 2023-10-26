import './main.css'
import React from 'react'
import LogotypeSection from './LogotypeSection/logotype'
import FeaturesSection from './FeaturesSection/features'
import AboutSection from './AboutSection/aboutcompany'
import ServiceSection from './ServiceSection/services'
import ChoooseUsSection from './ChooseusSection/chooseus'
import ProjectSection from './ProjectSection/project'
import MeetusSection from './MeetusSection/meetus'
import TestimonialSection from './TestimonialSection/testimonial'
import ArticlesSection from './ArticlesSection/articles'
import SignupSection from './SignupSection/signup'


const Main = () => {
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

export default Main