import React, { Suspense } from 'react'
import NewPasswordPage from './_components/NewPasswordPage'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <NewPasswordPage/>
      </Suspense>
    </div>
  )
}

export default page
