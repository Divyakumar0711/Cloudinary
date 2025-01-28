import { SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
<SignUp forceRedirectUrl={"/home"}/>
)
}

export default page