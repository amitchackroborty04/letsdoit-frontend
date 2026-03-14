import React from 'react'
import ProfessionalVehicleInspectionService from './_components/ProfessionalVehicleInspectionService'
import InspectionPackagesSection from '@/components/home/InspectionPackagesSection'
import InspectionProcessSection from './_components/InspectionProcessSection'

const page = () => {
  return (
    <div>
      <ProfessionalVehicleInspectionService/>
      <InspectionPackagesSection/>
      <InspectionProcessSection/>
    </div>
  )
}

export default page
