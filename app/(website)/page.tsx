import FaqSection from '@/components/home/FaqSection'
import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import InspectionCTASection from '@/components/home/InspectionCTASection'
import InspectionPackagesSection from '@/components/home/InspectionPackagesSection'
import Navbar from '@/components/home/Navbar'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhyChooseAutoIntel from '@/components/home/WhyChooseAutoIntel'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <InspectionPackagesSection/>
      <WhyChooseAutoIntel/>
      <TestimonialsSection/>
      <FaqSection/>
      <InspectionCTASection/>
      <Footer/>
    </div>
  )
}

export default page
