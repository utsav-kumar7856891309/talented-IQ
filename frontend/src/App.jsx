import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignInButton, SignOutButton, SignedIn,SignedOut, UserButton} from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome to the app</h1>
     <SignedOut>
        <SignInButton mode="modal">
          <button>Sign in</button>
        </SignInButton>
      </SignedOut>

      
      <SignedIn>
        <UserButton />
        <SignOutButton mode="modal">
          <button>Sign out</button>
        </SignOutButton>
      </SignedIn>
   
   
      
    </>
  )
}

export default App
