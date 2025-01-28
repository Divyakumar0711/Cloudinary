import { SignIn } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
<SignIn forceRedirectUrl={"/home"}/>
)
}

export default page