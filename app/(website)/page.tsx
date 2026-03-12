import FaqSection from '@/components/home/FaqSection'
import HeroSection from '@/components/home/HeroSection'
import InspectionCTASection from '@/components/home/InspectionCTASection'
import InspectionPackagesSection from '@/components/home/InspectionPackagesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhyChooseAutoIntel from '@/components/home/WhyChooseAutoIntel'
import React from 'react'

const page = () => {
  return (
    <div>
   
      <HeroSection/>
      <InspectionPackagesSection/>
      <WhyChooseAutoIntel/>
      <TestimonialsSection/>
      <FaqSection/>
      <InspectionCTASection/>
     
    </div>
  )
}

export default page
