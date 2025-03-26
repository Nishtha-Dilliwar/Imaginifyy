import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <ClerkProvider>
    <div>
      {/* <UserButton/> */}
      <SignedOut>
        {/* <SignInButton /> */}
      </SignedOut>
    </div>
    </ClerkProvider>
  )
}

export default Home
