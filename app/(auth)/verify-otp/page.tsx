import React, { Suspense } from 'react'
import OtpVerificationPage from './_components/OtpVerificationPage'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <OtpVerificationPage/>
      </Suspense>
    </div>
  )
}

export default page
