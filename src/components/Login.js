import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg' alt='image' />
      </div>
      <form className='absolute w-3/12 p-12 bg-black ab mx-auto bg-opacity-70 my-36 right-0 left-0 text-white'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : <input type='name' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-200' />}
        <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-200'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-200' />
        <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now." : "Already Registered Sign In Now"}
          
          </p>
      </form>
    </div>
  )
}

export default Login
