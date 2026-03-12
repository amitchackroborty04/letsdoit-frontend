import React from 'react'
import InspectionProcessSection from './_components/InspectionProcessSection'
import InspectionSteps from './_components/InspectionSteps'
import DetailedProcessBreakdown from './_components/DetailedProcessBreakdown'

const page = () => {
  return (
    <div>
      <InspectionProcessSection/>
      <InspectionSteps/>
      <DetailedProcessBreakdown/>
    </div>
  )
}

export default page
