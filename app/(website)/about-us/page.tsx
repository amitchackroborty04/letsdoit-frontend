import React from 'react'
import AutoIntelExpertsNationwide from './_components/AutoIntelExpertsNationwide'
import GrowthStorySection from './_components/GrowthStorySection'
import RegionalExpertiseSection from './_components/RegionalExpertiseSection'
import CertifiedInspectorsSection from './_components/CertifiedInspectorsSection'

const page = () => {
  return (
    <div>
      <AutoIntelExpertsNationwide/>
      <GrowthStorySection/>
      <RegionalExpertiseSection/>
      <CertifiedInspectorsSection/>
    </div>
  )
}

export default page
