import React from 'react'
import ServiceCoverageSection from './_components/ServiceCoverageSection'
import ServiceAreasSection from './_components/ServiceAreasSection'
import InspectionCTASection from '@/components/home/InspectionCTASection'

const page = () => {
  return (
    <div>
      <ServiceCoverageSection/>
      <ServiceAreasSection/>
      <InspectionCTASection/>
    </div>
  )
}

export default page
